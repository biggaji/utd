import { assert } from "@std/assert/assert";
import { fetchAllUsers } from "./users.service.ts";

Deno.test("Should return a list of all users", async () => {
  const users = await fetchAllUsers();

  assert(users.length > 1, "Should not be an empty array");
});

Deno.test("Should be an array", async () => {
  const users = await fetchAllUsers();

  assert(Array.isArray(users), "Should be an array");
});
