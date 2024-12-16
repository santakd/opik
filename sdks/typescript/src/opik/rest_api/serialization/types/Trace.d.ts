/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { JsonNode } from "./JsonNode";
import { ErrorInfo } from "./ErrorInfo";
import { FeedbackScore } from "./FeedbackScore";
export declare const Trace: core.serialization.ObjectSchema<serializers.Trace.Raw, OpikApi.Trace>;
export declare namespace Trace {
    interface Raw {
        id?: string | null;
        project_name?: string | null;
        project_id?: string | null;
        name: string;
        start_time: string;
        end_time?: string | null;
        input?: JsonNode.Raw | null;
        output?: JsonNode.Raw | null;
        metadata?: JsonNode.Raw | null;
        tags?: string[] | null;
        error_info?: ErrorInfo.Raw | null;
        usage?: Record<string, number> | null;
        created_at?: string | null;
        last_updated_at?: string | null;
        created_by?: string | null;
        last_updated_by?: string | null;
        feedback_scores?: FeedbackScore.Raw[] | null;
        total_estimated_cost?: number | null;
    }
}
