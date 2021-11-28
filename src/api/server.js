/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                    Imports
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
import { ApolloServer, gql } from "apollo-server";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const port = "http://localhost:4000";
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                    Coding
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

const prisma = new PrismaClient();

export const typeDefs = gql`
  type Post {
    id: String
    title: String
    postnumber: Int
  }

  type Query {
    allPosts: [Post]
  }
`;

const allPosts = [
  {
    id: "214234",
    title: "Look at my cool bt edit",
    postnumber: 1,
  },
  {
    id: "1231231231",
    title: "pob",
    postnumber: 2,
  },
];

const resolvers = {
  Query: {
    allPosts: () => allPosts,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
