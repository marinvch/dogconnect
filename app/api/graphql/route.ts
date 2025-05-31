import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import {
  buildSchema,
  Resolver,
  Query,
  Arg,
  ObjectType,
  Field,
  ID,
} from "type-graphql";

@ObjectType()
export class Dog {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  breed!: string;

  @Field(() => Number)
  age!: number;

  @Field()
  description!: string;

  @Field()
  availableForAdoption!: boolean;
}

@Resolver(Dog)
export class DogsResolver {
  @Query(() => [Dog])
  dogs(): Dog[] {
    return [
      { 
        id: "1", 
        name: "Buddy", 
        breed: "Golden Retriever", 
        age: 3, 
        description: "Friendly and energetic dog, great with kids and other pets.",
        availableForAdoption: true 
      },
      { 
        id: "2", 
        name: "Max", 
        breed: "German Shepherd", 
        age: 5, 
        description: "Loyal and protective, well-trained and house-broken.",
        availableForAdoption: true 
      },
      { 
        id: "3", 
        name: "Luna", 
        breed: "Border Collie", 
        age: 2, 
        description: "Intelligent and active, loves to play fetch and learn new tricks.",
        availableForAdoption: true 
      },
    ];
  }

  @Query(() => Dog, { nullable: true })
  dog(@Arg("id") id: string): Dog | null {
    const dogs = [
      { 
        id: "1", 
        name: "Buddy", 
        breed: "Golden Retriever", 
        age: 3, 
        description: "Friendly and energetic dog, great with kids and other pets.",
        availableForAdoption: true 
      },
      { 
        id: "2", 
        name: "Max", 
        breed: "German Shepherd", 
        age: 5, 
        description: "Loyal and protective, well-trained and house-broken.",
        availableForAdoption: true 
      },
      { 
        id: "3", 
        name: "Luna", 
        breed: "Border Collie", 
        age: 2, 
        description: "Intelligent and active, loves to play fetch and learn new tricks.",
        availableForAdoption: true 
      },
    ];
    return dogs.find((dog) => dog.id === id) || null;
  }
}

async function createApolloServer() {
  const schema = await buildSchema({
    resolvers: [DogsResolver],
    validate: false, // Disable class-validator for now
  });

  return new ApolloServer({
    schema,
  });
}

const server = await createApolloServer();

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
