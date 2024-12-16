"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmProviderKey = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const OpikApi = __importStar(require("../../../index"));
const url_join_1 = __importDefault(require("url-join"));
const serializers = __importStar(require("../../../../serialization/index"));
const errors = __importStar(require("../../../../errors/index"));
/**
 * LLM Provider Key
 */
class LlmProviderKey {
    constructor(_options = {}) {
        this._options = _options;
    }
    /**
     * Find LLM Provider's ApiKeys
     *
     * @param {LlmProviderKey.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.llmProviderKey.findLlmProviderKeys()
     */
    findLlmProviderKeys(requestOptions) {
        return core.APIPromise.from((() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.OpikApiEnvironment.Default, "v1/private/llm-provider-key"),
                method: "GET",
                headers: Object.assign({ "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return {
                    ok: _response.ok,
                    body: serializers.ProjectPagePublic.parseOrThrow(_response.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }),
                    headers: _response.headers,
                };
            }
            if (_response.error.reason === "status-code") {
                throw new errors.OpikApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.OpikApiTimeoutError("Timeout exceeded when calling GET /v1/private/llm-provider-key.");
                case "unknown":
                    throw new errors.OpikApiError({
                        message: _response.error.errorMessage,
                    });
            }
        }))());
    }
    /**
     * Store LLM Provider's ApiKey
     *
     * @param {OpikApi.ProviderApiKeyWrite} request
     * @param {LlmProviderKey.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link OpikApi.UnauthorizedError}
     * @throws {@link OpikApi.ForbiddenError}
     *
     * @example
     *     await client.llmProviderKey.storeLlmProviderApiKey({
     *         apiKey: "api_key"
     *     })
     */
    storeLlmProviderApiKey(request, requestOptions) {
        return core.APIPromise.from((() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.OpikApiEnvironment.Default, "v1/private/llm-provider-key"),
                method: "POST",
                headers: Object.assign({ "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers),
                contentType: "application/json",
                requestType: "json",
                body: Object.assign(Object.assign({}, serializers.ProviderApiKeyWrite.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" })), { provider: "openai" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return {
                    ok: _response.ok,
                    body: undefined,
                    headers: _response.headers,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 401:
                        throw new OpikApi.UnauthorizedError(serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 403:
                        throw new OpikApi.ForbiddenError(serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    default:
                        throw new errors.OpikApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.OpikApiTimeoutError("Timeout exceeded when calling POST /v1/private/llm-provider-key.");
                case "unknown":
                    throw new errors.OpikApiError({
                        message: _response.error.errorMessage,
                    });
            }
        }))());
    }
    /**
     * Get LLM Provider's ApiKey by id
     *
     * @param {string} id
     * @param {LlmProviderKey.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link OpikApi.NotFoundError}
     *
     * @example
     *     await client.llmProviderKey.getLlmProviderApiKeyById("id")
     */
    getLlmProviderApiKeyById(id, requestOptions) {
        return core.APIPromise.from((() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.OpikApiEnvironment.Default, `v1/private/llm-provider-key/${encodeURIComponent(id)}`),
                method: "GET",
                headers: Object.assign({ "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return {
                    ok: _response.ok,
                    body: serializers.ProviderApiKeyPublic.parseOrThrow(_response.body, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }),
                    headers: _response.headers,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new OpikApi.NotFoundError(_response.error.body);
                    default:
                        throw new errors.OpikApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.OpikApiTimeoutError("Timeout exceeded when calling GET /v1/private/llm-provider-key/{id}.");
                case "unknown":
                    throw new errors.OpikApiError({
                        message: _response.error.errorMessage,
                    });
            }
        }))());
    }
    /**
     * Update LLM Provider's ApiKey
     *
     * @param {string} id
     * @param {OpikApi.ProviderApiKeyUpdate} request
     * @param {LlmProviderKey.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link OpikApi.UnauthorizedError}
     * @throws {@link OpikApi.ForbiddenError}
     * @throws {@link OpikApi.NotFoundError}
     *
     * @example
     *     await client.llmProviderKey.updateLlmProviderApiKey("id", {
     *         apiKey: "api_key"
     *     })
     */
    updateLlmProviderApiKey(id, request, requestOptions) {
        return core.APIPromise.from((() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.OpikApiEnvironment.Default, `v1/private/llm-provider-key/${encodeURIComponent(id)}`),
                method: "PATCH",
                headers: Object.assign({ "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers),
                contentType: "application/json",
                requestType: "json",
                body: serializers.ProviderApiKeyUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return {
                    ok: _response.ok,
                    body: undefined,
                    headers: _response.headers,
                };
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 401:
                        throw new OpikApi.UnauthorizedError(serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 403:
                        throw new OpikApi.ForbiddenError(serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 404:
                        throw new OpikApi.NotFoundError(_response.error.body);
                    default:
                        throw new errors.OpikApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.OpikApiTimeoutError("Timeout exceeded when calling PATCH /v1/private/llm-provider-key/{id}.");
                case "unknown":
                    throw new errors.OpikApiError({
                        message: _response.error.errorMessage,
                    });
            }
        }))());
    }
}
exports.LlmProviderKey = LlmProviderKey;
