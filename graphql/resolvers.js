require('dotenv').config()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const Wall = require('../models/wall')
const Review = require('../models/review')
const {clearImage} = require('../util/file')
const sequelize = require('../db/cwfDb')
const { QueryTypes } = require('sequelize')
const axios = require('axios')

const key = process.env.TOKENKEY;


const findWall = async wallId => {
    const wall = await Wall.findByPk(wallId)
        if (!wall) {
            new Error('wall not found')
            error.code = 404
            throw error
        }
    return wall
}

const findWallBySlug = async slug => {
    const wall = await sequelize.query(
        `SELECT * FROM walls WHERE slug = :slug`,
            {
                replacements: { slug: slug },
                type: QueryTypes.SELECT
            }
    )
        if (!wall) {
            new Error('wall not found')
            error.code = 404
            throw error
        }
    return wall[0]
}


const findUser = async (req) => {
    const user = await User.findByPk(req.userId);
    if (!user) {
        const error = new Error('Invalid user')
        error.data = errors
        error.code = 401
        throw error
    }
    if (user.isAdmin) {
        req.isAdmin = true
    }
    return (user)
}

const authUser = ({isAuth}) => {
    if (!isAuth) {
        const error = new Error('Not authenticated')
        error.code = 401
        throw error
    }
}
module.exports = {
    createUser: async ({ userInput }, req) => {
        try {
            const {email, password, name} = userInput
            const errors = []
            const existingUser = await User.findOne({where: {email}})
            if (existingUser) {
                const error = new Error('User already exists')
                error.data = errors
                error.code = 422
                throw error
            }
            if (!validator.isEmail(email)) {
                errors.push({ message: 'Email is invalid.'})
            }
            if (
                validator.isEmpty(password) || 
                !validator.isLength(password, { min: 5 })
            ) {
                errors.push({message: 'Password too short'})
            }
            if (errors.length > 0) {
                const error = new Error('Invalid input')
                error.data = errors
                error.code = 456
                throw error
            }

            const hashedPw = await bcrypt.hash(password, 12)
            return User.create({name, email, password: hashedPw})
            .then(user => {
                return {
                    ...user.dataValues
                }
            })
        }
        catch(err) {
            console.log(err)
            err.statusCode = 500
            return err
        }
    },

    createReview: async ({ userInput }, req) => {
        authUser(req)
        const {title, content, rating, wallId} = userInput
        let errors = []
        try {
            const user = await User.findByPk(req.userId)
            const wall = await Wall.findByPk(wallId)

            if (!user) {
                const error = new Error('Not logged in')
                error.code = 401
                throw error
            }
            if (!wall) {
                const error = new Error('Wall not found')
                error.code = 404
                throw error
            }
            if (
                validator.isEmpty(title) || 
                !validator.isLength(title, { min: 5 })
            ) {
                errors.push({message: 'Title too short'})
            }
            if (validator.isEmpty(rating.toString())) {
                errors.push({message: 'Please include a rating with your review'})
            }
            if (rating < 1 || rating > 5) {
                errors.push({message: 'Rating must be between 1 and 5 stars'})
            }
            if (errors.length > 0) {
                const error = new Error('Invalid input')
                error.data = errors
                error.code = 400
                throw error
            }
            const review = await Review.create({title, content, rating, wallId, authorName: user.name, authorId: user.id})
            return { ...review.dataValues }
        }
        catch(err) {
            console.log(err)
            err.statusCode = 500
            return err
        }
    },

    updateReview: async ({id, userInput }, req) => {
        authUser(req)
        const {title, content, rating, wallId} = userInput
        let errors = []
        try {
            const user = await User.findByPk(req.userId)
            const wall = await Wall.findByPk(wallId)
            const oldReview = await Review.findByPk(id)

            if (!user) {
                const error = new Error('Not logged in')
                error.code = 401
                throw error
            }
            if (!wall) {
                const error = new Error('Wall not found')
                error.code = 404
                throw error
            }
            if (
                validator.isEmpty(title) || 
                !validator.isLength(title, { min: 5 })
            ) {
                errors.push({message: 'Title too short'})
            }
            if (validator.isEmpty(rating.toString())) {
                errors.push({message: 'Please include a rating with your review'})
            }
            if (rating < 1 || rating > 5) {
                errors.push({message: 'Rating must be between 1 and 5 stars'})
            }
            if (errors.length > 0) {
                const error = new Error('Invalid input')
                error.data = errors
                error.code = 400
                throw error
            }
            const review = await oldReview.update({title, content, rating, wallId, authorName: user.name, authorId: user.id})
            console.log(review)
            return { ...review.dataValues }
        }
        catch(err) {
            console.log(err)
            err.statusCode = 500
            return err
        }
    },

    deleteReview: async ({id}, req) => {
        try {
            authUser(req)
            const review = await Review.findByPk(id)
            console.log(review.dataValues)
            console.log(req.userId)

            if (Number(review.authorId) !== Number(req.userId)) throw new Error('Unauthorised')
            let result = false
            const deletedReview = await review.destroy()
            if (deletedReview) result = true
            return result
        }
        catch(err) {
            console.log(err)
            return err
        }
    },

    login: async ({ email, password }) => {
        try {

            const user = await User.findOne({where: {email}})
            if (!user) {
                const error = new Error('No user found with that username or password.')
                error.code = 401
                throw error
            }
    
            const isEqual = await bcrypt.compare(password, user.password)
            if (!isEqual) {
                const error = new Error('Passwords do not match.')
                error.code = 401
                throw error
            }
            const token = jwt.sign(
                {
                    userId: user.id.toString(),
                    email: user.email,
                }, 
                key,
                // { expiresIn: '1h'}
            )
            return {token, userId: user.id.toString(), username: user.name}
        }
        catch(err) {
            return err
        }

    },

    singleWall: async ({wallId}, req) => {
        try {
            try {
                authUser(req)
            } catch(err) {
                console.log(err)
            }
            const singleWall = await findWallBySlug(wallId)
            const reviews = await Review.findAll({where: {wallId: singleWall.id}})
            const wall = {...singleWall, reviews: reviews.map(review => review.dataValues)}
            return {wall, loggedIn: req.isAuth }
        } catch (err) {
            console.log(err)
        }
    },

    walls: async ({}, req) => {
        try {
            
            const walls = await Wall.findAll({include: Review})
            const wallCount = await Wall.findAndCountAll({ distinct : true })
            return { walls, totalWalls: wallCount.count, userId: req.userId, loggedIn: req.isAuth }
        } catch (err) {
            console.log(err)
        }
    },

    wallsWithDistance: async ({postcode}, req) => {
        try{
            try {
                authUser(req)
            } catch(err) {
                console.log(err)
            }
            const walls = await Wall.findAll({include: Review})
            const wallCount = await Wall.findAndCountAll({ distinct : true })
            const originPostcode = postcode.replace(/\s/g,'')
            const wallPostcodes = walls.map(wall => wall.postcode.replace(/\s/g,'')).join('|')
            const distanceApiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?mode=walking&units=imperial&origins=${originPostcode}&destinations=${wallPostcodes}&key=${process.env.MAPSAPIKEY}`
            const result = await axios.get(distanceApiUrl)
            const distances = result.data.rows[0].elements
            const wallsWithDistances = walls.map(wall => {
                const distance = distances.shift()
                return {...wall.dataValues, distance: distance.distance ? distance.distance.text.split(' ')[0] : 'Unknown'}
            })
            return { walls: wallsWithDistances, totalWalls: wallCount.count, userId: req.userId, loggedIn: req.isAuth }
        }
        catch (err) {
            console.log(err)
        }
    }
}