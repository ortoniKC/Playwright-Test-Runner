import { test } from "@playwright/test";

const list = ["https://www.youtube.com/playlist?list=PL699Xf-_ilW6vI9FHmePi1TvKyzYATgXi",
    "https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD"];
list.forEach(url => {
    test("Calculate youtube playlist duration" + Date.now(), async ({ page }) => {
        await page.goto(url);
        const videos = await page.$$("ytd-thumbnail-overlay-time-status-renderer span");
        console.log(videos.length);
        let totalMinutes = 0;
        await Promise.all(
            videos.map(async ele => {
                const duration = await ele.innerText();
                // 15:45:15
                const timeSlices = duration.trim().split(":")
                let minutes = 0;
                let seconds = 0;
                if (timeSlices.length == 2) {
                    minutes = Number(timeSlices[0]);
                    seconds = Number(timeSlices[1]);
                    minutes += seconds / 60;
                } else if (timeSlices.length == 3) {
                    let hours = Number(timeSlices[0]);
                    minutes = Number(timeSlices[1]);
                    seconds = Number(timeSlices[2]);
                    minutes += ((hours * 60) + (seconds / 60))
                }
                totalMinutes += minutes;
            })
        )
        console.log(totalMinutes);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = Math.trunc(totalMinutes % 60);
        const seconds = Math.trunc((totalMinutes - Math.trunc(totalMinutes)) * 60);
        const title = await page.title();
        console.log(
            `${title} -->${hours}h ${minutes}m ${seconds}s`);
    })
})
