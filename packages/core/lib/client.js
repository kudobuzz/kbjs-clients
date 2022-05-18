"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_retry_1 = require("axios-retry");
const axios_1 = require("axios");
const constants_1 = require("./constants");
(0, axios_retry_1.default)(axios_1.default, { retries: constants_1.default.REQUEST_RETRY_COUNT });
const request = axios_1.default.create({
    baseURL: constants_1.default.PRODUCTION_URL
});
exports.default = request;
//# sourceMappingURL=client.js.map