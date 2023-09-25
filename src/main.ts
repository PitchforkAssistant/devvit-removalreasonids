import {Devvit} from "@devvit/public-api";
import {FormFunction} from "@devvit/public-api/types/index.js";
import {HELP_TEXTS, LABELS} from "./constants.js";
import {createRemovalReasonsForm, onRemovalReasonsFormSubmit} from "./handlers/forms.js";
import {showRemovalReasonsPressed} from "./handlers/menus.js";

export const removalReasonsFormKey = Devvit.createForm(createRemovalReasonsForm as FormFunction, onRemovalReasonsFormSubmit);

Devvit.configure({
    redditAPI: true,
});

Devvit.addMenuItem({
    location: "subreddit",
    forUserType: "moderator",
    label: LABELS.SHOW_REMOVAL_REASON_IDS,
    description: HELP_TEXTS.SHOW_REMOVAL_REASON_IDS,
    onPress: showRemovalReasonsPressed,
});

export default Devvit;
