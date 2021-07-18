import { Page, test as base } from "@playwright/test";
// test("Conetext tracing", async ({ browser }) => {
//     const context = await browser.newContext();
//     // start tracing
//     await context.tracing.start(
//         {
//             screenshots: true, snapshots: true
//         }
//     );
//     const page = await context.newPage();
//     await page.goto('https://letcode.in');
//     // Stop tracing and export it into a zip archive.
//     await context.tracing.stop({ path: 'trace0.zip' });
// })
// test("Browser tracing", async ({ page, browser }) => {
//     await browser.startTracing(page, { path: "./trace1.zip" });
//     await page.goto('https://letcode.in');
//     await browser.stopTracing();
// })
class TodoPage {
    constructor(page: Page) { }
    goto() {
        console.log("goto");

    }
    addToDo(a: string) {
        console.log("Added: " + a);

    };
    removeAll() {
        console.log("removed");

    }
    remove(a) {
        console.log("remo " + a);

    }
}
const test = base.extend<{ todoPage: TodoPage }>({
    todoPage: async ({ page }, use) => {
        const todoPage = new TodoPage(page);
        todoPage.goto();
        todoPage.addToDo('item1');
        todoPage.addToDo('item2');
        await use(todoPage);
        todoPage.removeAll();
    },
});
test('should add an item', async ({ todoPage }) => {
    await todoPage.addToDo('my item');
    // ...
});

test('should remove an item', async ({ todoPage }) => {
    await todoPage.remove('item1');
    // ...
});