"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLObjectId = void 0;
const graphql_1 = require("graphql");
const util_1 = require("./util");
exports.GraphQLObjectId = new graphql_1.GraphQLScalarType({
    name: 'ObjectId',
    description: 'A valid MongoDB ObjectId',
    parseValue: util_1.parseValue,
    serialize: util_1.serialize,
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            return (0, util_1.parseValue)(ast.value);
        }
        throw new graphql_1.GraphQLError(`Provided value "${(0, graphql_1.print)(ast)}" is not a valid ObjectId`, { nodes: ast });
    },
});
exports.default = exports.GraphQLObjectId;
