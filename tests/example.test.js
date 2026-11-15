import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Example Domain Smoke Test", () => {
  it("should open example.com, scroll down, and navigate to IANA documentation", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://example.com" });

    await testdriver.scroll("down", { amount: 500 });

    const assertLearnMore = await testdriver.assert("the Learn more link is visible");
    expect(assertLearnMore).toBeTruthy();

    const link = await testdriver.find("the Learn more link");
    await link.click();

    const assertIana = await testdriver.assert("the IANA Example Domains page is visible");
    expect(assertIana).toBeTruthy();
  });
});
