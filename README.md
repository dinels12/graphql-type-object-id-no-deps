[![built with typescript-lib-starter](https://img.shields.io/badge/built%20with-typescript--lib--starter%20-blue.svg)](https://github.com/fox1t/typescript-lib-starter)

# graphql-type-object-id-no-deps

MongoDB ObjectId scalar type for [GraphQL.js](https://github.com/graphql/graphql-js).

## Installation

```bash
$ npm i graphql-type-object-id-no-deps
```
Or

```bash
$ yarn add graphql-type-object-id-no-deps
```
## Usage

Import the type:

```js
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
```

Or

```js
import { GraphQLObjectId } from 'graphql-type-object-id-no-deps';
```

### In your schema

You can use this in a programmatically-constructed schema as with any other scalar type:

```js
import { makeExecutableSchema } from '@graphql-tools/schema';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';

const typeDefs = `
  scalar ObjectId
  # ...
`;

const resolvers = {
  ObjectId: GraphQLObjectId,
};

export default makeExecutableSchema({ typeDefs, resolvers });
```

## License

MIT
