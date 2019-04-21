// Schema is descriptive
// Schema will add constraints to the fetched data.
// Schema will filter out some unneccessary data.
const { gql } = require('apollo-server');
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
	# Comments in GraphQL are defined with the hash (#) symbol.

	# This "Book" type can be used in other type declarations.
	type Book {
		title: String!
		author: String!
	}

	# The "Query" type is the root of all GraphQL queries.
	# (A "Mutation" type will be covered later on.)
	type Query {
		books: [Book]
	}
`;

module.exports = { typeDefs };
