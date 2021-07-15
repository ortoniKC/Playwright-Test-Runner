import { test as baseTest } from "@playwright/test";

type koushik = {
    hey: string;
}


const fixture = baseTest.extend<koushik>({
    hey: "I am letcode",

})

export const test = fixture;
export const assert = fixture.expect
export const describe = fixture.describe;