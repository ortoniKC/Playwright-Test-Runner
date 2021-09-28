import { test } from "@playwright/test";

test("my test", async ({ page }) => {
    await page.goto("https://letcode.in/dropable")
    const src = await page.$("#draggable")
    const dst = await page.$("#droppable");
    if (src && dst) {
        const srcBound = await src.boundingBox()
        const dstBound = await dst.boundingBox()
        if (srcBound && dstBound) {
            await page.mouse.move(srcBound.x + srcBound.width / 2, srcBound.y + srcBound.height / 2)
            await page.mouse.down();
            await page.mouse.move(dstBound.x + dstBound.width / 2, dstBound.y + dstBound.height / 2)
            await page.mouse.down();
        } else {
            throw new Error("No Element")
        }
    }

})
