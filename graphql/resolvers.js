require('dotenv').config()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const Wall = require('../models/wall')
const Review = require('../models/review')
const {clearImage} = require('../util/file')

const key = process.env.TOKENKEY;


const findWall = async wallId => {
    const wall = await Wall.findByPk(postId)
        if (!wall) {
            new Error('wall not found')
            error.code = 404
            throw error
        }
    return wall
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
                error.code = 422
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

    walls: async (req) => {
        const walls = await Wall.findAll()
        const wallCount = await Wall.findAndCountAll({ distinct : true })
        return {walls, totalWalls: wallCount.count}
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
                { expiresIn: '1h'}
            )
            return {token, userId: user.id.toString()}
        }
        catch(err) {
            return err
        }

    },

   
}