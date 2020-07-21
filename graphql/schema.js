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
    }

    type Review {
        id: ID!
        title: String!
        content: String!
        rating: Int!
        authorName: String!
        userId: String!
        createdAt: String!
        updatedAt: String!
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
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type WallData {
        walls: [Wall!]!
        totalWalls: Int!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        walls: WallData!
        currentUser: User!
        singleWall(wallId: ID!): Wall!
    }

    schema {
        query: RootQuery
        mutation: RootMutation 
    }
`)