import { expect, test } from "@playwright/test";

let _number: number;
let _sys_id: string;
const short_description = "required ms office 365"
// Create
test("Create an Incident", async ({ request, baseURL }) => {

    const _response = await request.post(`${baseURL}`, {
        data: {
            "short_description": short_description,
            "category": "hardware"
        }, headers: {
            "Accept": "application/json"
        }
    });
    expect(_response.status()).toBe(201);
    expect(_response.ok()).toBeTruthy();
    console.log(await _response.json());
    const res = await _response.json();
    _number = res.result.task_effective_number;
    _sys_id = res.result.sys_id;

    // output as xml
    // console.log((await _response.body()).toString());
})
// test("", async ({ page }) => {
//     await page.request.get("")
// })
// Get
test("Get an Incident", async ({ request, baseURL }) => {
    const _response = await request.get(`${baseURL}`, {
        params: {
            task_effective_number: _number,
            sysparm_fields: "short_description, category"
        }
    });
    console.log(await _response.json());
    expect(_response.status()).toBe(200);
    expect(await _response.json()).toMatchObject({
        result: [{ short_description: short_description, category: 'hardware' }]
    })

})

// Uppdate
test("Put(Modify) an Incident", async ({ request, baseURL }) => {
    const _response = await request.put(`${baseURL}/${_sys_id}`, {
        data: {
            "short_description": "Very boring tutorial",
            "category": "Software"
        }
    });
    console.log(await _response.json());
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
})

// Delete
test("Delete an Incident", async ({ request, baseURL }) => {
    const _response = await request.delete(`${baseURL}/${_sys_id}`);
    // console.log(await _response.json());
    expect(_response.status()).toBe(204);
    expect(_response.ok()).toBeTruthy();
})
