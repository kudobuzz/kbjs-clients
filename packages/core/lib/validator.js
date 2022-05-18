"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup = require("yup");
const utils_1 = require("./utils");
const required = utils_1.default.required();
function validateSchema({ schema = required('schema'), data = required('data') }) {
    return schema.validate(data);
}
const schemaValidator = yup;
exports.default = {
    validateSchema,
    schemaValidator
};
//# sourceMappingURL=validator.js.map