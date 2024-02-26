import { ObjectId } from 'bson';
export declare function isValidStringObjectId(value: unknown): boolean;
export declare function isValidObjectId(value: any): boolean;
export declare function parseValue(value: unknown): ObjectId;
export declare function serialize(value: unknown): string;
