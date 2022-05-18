"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultErrorFunc = str => {
    throw new Error(`${str} is required`);
};
function required(errorFunc = defaultErrorFunc) {
    return function requiredParam(str) {
        return errorFunc(str);
    };
}
exports.default = {
    required
};
//# sourceMappingURL=utils.js.map