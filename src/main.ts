import {Devvit} from "@devvit/public-api";
import {HELP_TEXTS, LABELS} from "./constants.js";
import {showRemovalReasonsPressed} from "./handlers/menus.js";

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
