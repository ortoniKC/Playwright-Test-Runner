import { FullConfig, FullResult, Reporter, Suite, TestCase, TestError, TestResult, TestStep } from "@playwright/test/reporter"
export default class MyReporter implements Reporter {

    onBegin(config: FullConfig, suite: Suite): void {
        console.log('Suite Title: ' + suite.suites[0].suites[0].suites[0].title);
    }

    onTestBegin(test: TestCase, result: TestResult): void {
        console.log('Test Started: ' + test.title);
    }
    onTestEnd(test: TestCase, result: TestResult): void {
        console.log('Test Ended: ' + test.title);
        console.log("Result: " + result.status);

    }
    onStdOut(chunk: string | Buffer, test?: TestCase, result?: TestResult): void {
        console.log(chunk);

    }

    onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
        if (step.category === "test.step") {
            console.log("Test step started: " + step.title);
        }
        // console.log(step.category);

    }

    onStepEnd(test: TestCase, result: TestResult, step: TestStep): void {
        if (step.category === "test.step") {
            console.log("Test step started: " + step.title);
        }
    }

    onError(error: TestError): void {
        console.log(error.message);
    }

    onEnd(result: FullResult): void | Promise<void> {
        console.log('On end: ' + result.status);

    }
}