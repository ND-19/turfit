const express = require("express")
const graphqlHTTP = require("express-graphql")
const schema = require('./schema/schema')
const { buildSchema } = require("graphql")
import {DataTimeResolver, DateTimeTypeDefinition } from "graphql-scalars"
const app = express()

app.use(express.json())

app.use('/graphql', graphqlHTTP({
    schema,
    graphql: true
}))

app.listen(8080, ()=> {
    console.log("listening on port 4000")
})

