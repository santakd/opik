/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as OpikApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { ProviderApiKeyWriteProvider } from "../../types/ProviderApiKeyWriteProvider";

export const ProviderApiKeyWrite: core.serialization.Schema<
    serializers.ProviderApiKeyWrite.Raw,
    OpikApi.ProviderApiKeyWrite
> = core.serialization.object({
    provider: ProviderApiKeyWriteProvider,
    apiKey: core.serialization.property("api_key", core.serialization.string()),
    name: core.serialization.string().optional(),
});

export declare namespace ProviderApiKeyWrite {
    export interface Raw {
        provider: ProviderApiKeyWriteProvider.Raw;
        api_key: string;
        name?: string | null;
    }
}
