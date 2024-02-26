"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = exports.parseValue = exports.isValidObjectId = exports.isValidStringObjectId = void 0;
const bson_1 = require("bson");
const graphql_1 = require("graphql");
function isValidStringObjectId(value) {
    return (typeof value === 'string' && bson_1.ObjectId.isValid(value) && new bson_1.ObjectId(value).toString() === value);
}
exports.isValidStringObjectId = isValidStringObjectId;
function isValidObjectId(value) {
    return bson_1.ObjectId.isValid(value) && new bson_1.ObjectId(value).toString() === value.toString();
}
exports.isValidObjectId = isValidObjectId;
function parseValue(value) {
    if (!isValidStringObjectId(value)) {
        throw new graphql_1.GraphQLError(`Provided value "${value}" is not a valid ObjectId`);
    }
    return new bson_1.ObjectId(value);
}
exports.parseValue = parseValue;
function serialize(value) {
    if (!isValidObjectId(value)) {
        throw new graphql_1.GraphQLError(`Provided value "${value}" is not a valid ObjectId`);
    }
    return value.toString();
}
exports.serialize = serialize;
