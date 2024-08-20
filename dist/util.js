"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidStringObjectId = isValidStringObjectId;
exports.isValidObjectId = isValidObjectId;
exports.parseValue = parseValue;
exports.serialize = serialize;
const bson_1 = require("bson");
const graphql_1 = require("graphql");
function isValidStringObjectId(value) {
    return (typeof value === 'string' && bson_1.ObjectId.isValid(value) && new bson_1.ObjectId(value).toString() === value);
}
function isValidObjectId(value) {
    return bson_1.ObjectId.isValid(value) && new bson_1.ObjectId(value).toString() === value.toString();
}
function parseValue(value) {
    if (!isValidStringObjectId(value)) {
        throw new graphql_1.GraphQLError(`Provided value "${value}" is not a valid ObjectId`);
    }
    return new bson_1.ObjectId(value);
}
function serialize(value) {
    if (!isValidObjectId(value)) {
        throw new graphql_1.GraphQLError(`Provided value "${value}" is not a valid ObjectId`);
    }
    return value.toString();
}
