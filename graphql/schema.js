const {buildSchema} = require('graphql');

module.exports = buildSchema(`
    type Wall {
        id: ID!
        name: String!
        description: String!
        weekdayOpening: String!
        weekdayClosing: String!
        weekendOpening: String!
        weekendClosing: String!
        openingNotes: String
        websiteUrl: String!
        imageUrl: String!
        boulderingOnly: Boolean!
        addressLine1: String!
        addressLine2: String
        addressLine3: String
        city: String!
        region: String!
        postcode: String!
        email: String!
        phone: String!
        auto: Boolean!
        top: Boolean!
        lead: Boolean!
        gym: Boolean!
        cafe: Boolean!
        reviews: [Review]
        slug: String!
        distance: String
    }

    type Review {
        id: ID!
        title: String!
        content: String
        rating: Int!
        authorName: String!
        authorId: String!
        wallId: String!
        createdAt: String!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        password: String
        reviews: [Review!]!
        isAdmin: Boolean
    }

    type AuthData {
        token: String!
        userId: String!
        username: String!
    }
    
    input ReviewInputData {
        title: String!
        content: String!
        rating: Int!
        wallId: String!
    }
    
    input UserInputData {
        email: String!
        name: String!
        password: String!
    }
    
    type SingleWallData {
        wall: Wall!
        loggedIn: Boolean
    }

    type WallData {
        walls: [Wall!]!
        totalWalls: Int!
        loggedIn: Boolean
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createReview(userInput: ReviewInputData): Review!
        updateReview(id: ID!, userInput: ReviewInputData!): Review!
        deleteReview(id: ID!): Boolean
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        walls: WallData!
        wallsWithDistance(postcode: String!): WallData!
        currentUser: User!
        singleWall(wallId: String!): SingleWallData!
    }

    schema {
        query: RootQuery
        mutation: RootMutation 
    }
`)