import {MenuItemOnPressEvent} from "@devvit/public-api";
import {Context} from "@devvit/public-api";
import {removalReasonsFormKey} from "../main.js";

export async function showRemovalReasonsPressed (_: MenuItemOnPressEvent | undefined, context: Context) {
    const subreddit = await context.reddit.getCurrentSubreddit();
    const removalReasons = await context.reddit.getSubredditRemovalReasons(subreddit.name);
    context.ui.showForm(removalReasonsFormKey, {removalReasons});
}
