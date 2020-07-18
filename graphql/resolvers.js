const User = require('../models/user')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const Wall = require('../models/wall')
const Review = require('../models/review')
const {clearImage} = require('../util/file')


const findPost = async postId => {
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

// const postAdminRights = async (post, req) => {
//     if (post.userId != req.userId ) {
//         await findUser(req)
//         if (!req.isAdmin){
//             console.log('hi')
//             new Error('You are not authorised to do that')
//             error.code = 401
//             throw error
//         }
//     }
// }

// const authUser = ({isAuth}) => {
//     if (!isAuth) {
//         const error = new Error('Not authenticated')
//         error.code = 401
//         throw error
//     }
// }

// const validatePost = (postInput) => {
//     const errors = []

//     if (validator.isEmpty(postInput.title) || !validator.isLength(postInput.title, { min: 5 })) {
//         errors.push({ message: 'title is invalid' })
//     }
//     if (validator.isEmpty(postInput.content) || !validator.isLength(postInput.content, { min: 10 })) {
//         errors.push({ message: 'content too short' })
//     }

//     if (errors.length > 0) {
//         const error = new Error('Invalid input')
//         error.data = errors
//         error.code = 422
//         throw error
//     }
// }

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

    // login: async ({ email, password }) => {
    //     try {

    //         const user = await User.findOne({where: {email}})
    //         if (!user) {
    //             const error = new Error('User not found.')
    //             error.code = 301
    //             throw error
    //         }
    
    //         const isEqual = await bcrypt.compare(password, user.password)
    //         if (!isEqual) {
    //             const error = new Error('Password is incorrect')
    //             error.code = 401
    //             throw error
    //         }
    //         const token = jwt.sign(
    //             {
    //                 userId: user.id.toString(),
    //                 email: user.email,
    //             }, 
    //             'asupersecretsecretkey',
    //             { expiresIn: '1h'}
    //         )
    //         return {token, userId: user.id.toString()}
    //     }
    //     catch(err) {
    //         return err
    //     }

    // },

    // createPost: async ({ postInput }, req) => {
    //     try {
    //         authUser(req)
    //         const { title, content, imageUrl} = postInput
            
    //         validatePost(postInput)
    
    //         const user = await findUser(req)
    //         const post = await Post.create({title, content, imageUrl, userId: user.id, authorName: user.name})
    //         return {...post.dataValues}
    //     }
    //     catch(err) {
    //         return err
    //     }
    // },

    // updatePost: async ({id, postInput}, req) => {
    //     try{
    //         authUser(req)
    //         const post = await findPost(id)
    //         postAdminRights(post, req)
    //         const { title, content, imageUrl} = postInput
    
    //         validatePost(postInput)
    
    //         post.title = title
    //         post.content = content
    //         if (imageUrl !== "undefined") {
    //             clearImage(post.imageUrl)
    //             post.imageUrl = imageUrl
    //         }
    //         const updatedPost = await post.save()
    //         return {...updatedPost.dataValues}
    //     }
    //     catch(err) {
    //         return err
    //     }
    // },

    // updateStatus: async ({status}, req) => {
    //     try {
    //         authUser(req)
    //         const user = await findUser(req)
    //         user.status = status
    //         const updatedUser = await user.save()
    //         return {...updatedUser.dataValues}
    //     }
    //     catch(err) {
    //         return err
    //     }
    // },

    // posts: async ({page}, req) => {
    //     try {
    //         authUser(req)
    
    //         if (!page) {
    //             page = 1
    //         }
    //         const perPage = 3
    //         const totalPosts = await Post.findAndCountAll({ distinct: true });
    //         const posts = await Post.findAll({ limit: perPage, offset: (page - 1) * perPage, order: [['createdAt', 'DESC']] })
    //         return {posts, totalPosts: totalPosts.count}
    //     }
    //     catch(err) {
    //         return err
    //     }
    // },

    // singlePost: async ({postId}, req) => {
    //     try {
    //         authUser(req)
    //         const post = await findPost(postId)
    //         return {...post.dataValues}
    //     }
    //     catch(err) {
    //         return err
    //     }
    // },

    // currentUser: async (args, req) => {
    //     try {
    //         authUser(req)
    //         const user = await findUser(req)
    //         return {...user.dataValues}
    //     }
    //     catch(err) {
    //         return err
    //     }
    // },

    // deletePost: async ({id}, req) => {
    //     try {
    //         authUser(req)
    //         const post = await findPost(id)
    //         postAdminRights(post, req)
    //         clearImage(post.imageUrl)
            
    //         let result = false
    //         const deletedPost = await post.destroy()
    //         if (deletedPost) result = true
    //         return result
    //     }
    //     catch(err) {
    //         return err
    //     }
    // }
}