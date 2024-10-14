import { assertEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test("Assert 2 + 3 is 5", function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test("add function should add 2 numbers correctly", () => {
  if (add(4, 6) !== 10) {
    throw new Error("Test failed: 4 + 6 should equal 10");
  }
});
