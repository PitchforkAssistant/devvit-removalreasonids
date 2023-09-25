import {Context, Data, Form, FormField, RemovalReason} from "@devvit/public-api";
import {FormOnSubmitEvent} from "@devvit/public-api/types/index.js";
import {LABELS} from "../constants.js";
import {showRemovalReasonsPressed} from "./menus.js";

export function createRemovalReasonsForm (data: Data & {removalReasons: RemovalReason[]}): Form {
    const fields: FormField[] = [];
    for (const removalReason of data.removalReasons) {
        // Removal reason messages can be up to 10k characters long, we don't want to display all of that in the form help text.
        // The help text is just meant to give the user a quick overview of what the removal reason in case of duplicate titles.
        if (removalReason.message.length > 80) {
            removalReason.message = `${removalReason.message.slice(0, 77)}...`;
        }
        fields.push({
            type: "string",
            name: removalReason.id,
            label: removalReason.title,
            helpText: removalReason.message,
            defaultValue: removalReason.id,
            placeholder: removalReason.id,
            disabled: true,
        });
    }
    return {
        fields,
        title: LABELS.FORM_TITLE,
        acceptLabel: LABELS.FORM_REFRESH,
        cancelLabel: LABELS.FORM_CLOSE,
    };
}

export async function onRemovalReasonsFormSubmit (_: FormOnSubmitEvent, context: Context) {
    await showRemovalReasonsPressed(undefined, context);
}
