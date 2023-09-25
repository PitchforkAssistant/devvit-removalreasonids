import {MenuItemOnPressEvent} from "@devvit/public-api";
import {Context} from "@devvit/public-api";

export async function showRemovalReasonsPressed (event: MenuItemOnPressEvent, context: Context) {
    console.log(`showRemovalReasonsPressed\n${JSON.stringify(event)}\n${JSON.stringify(context)}`);
    const subreddit = await context.reddit.getCurrentSubreddit();
    const removalReasons = await context.reddit.getSubredditRemovalReasons(subreddit.name);
    console.log(`Removal Reasons: ${JSON.stringify(removalReasons)}`);
}
