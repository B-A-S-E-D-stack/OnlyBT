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

const resolvers = {
  Query: {
    allPosts: () => prisma.post.findMany(),
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
