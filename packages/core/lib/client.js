"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_retry_1 = __importDefault(require("axios-retry"));
const axios_1 = __importDefault(require("axios"));
const constants_1 = __importDefault(require("./constants"));
(0, axios_retry_1.default)(axios_1.default, { retries: constants_1.default.REQUEST_RETRY_COUNT });
const request = axios_1.default.create({
    baseURL: constants_1.default.PRODUCTION_URL
});
exports.default = request;
//# sourceMappingURL=client.js.map