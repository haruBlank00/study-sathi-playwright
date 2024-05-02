import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/auth/signin");
  await page.getByPlaceholder("johbdoe@gmail.com").click();
  await page
    .getByPlaceholder("johbdoe@gmail.com")
    .fill("harublank00@gmail.com");
  await page.getByRole("button", { name: "Login with magic link" }).click();
});
