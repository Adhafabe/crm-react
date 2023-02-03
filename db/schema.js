const { gql } = require('apollo-server');

//Schema
const typeDefs = gql`
    type Query{
        ObtenerCurso: String
    }
`;

module.exports = typeDefs