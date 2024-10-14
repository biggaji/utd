import { join } from "@std/path";

export async function fetchAllUsers() {
  // Get the path to the JSON file
  const userJsonDBPath = join(Deno.cwd(), "users.json");

  try {
    const fileContent = await Deno.readTextFile(userJsonDBPath);

    if (!fileContent.trim()) {
      throw new Error("JSON file is empty");
    }

    const parsedUsers = JSON.parse(fileContent);
    return parsedUsers;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      throw new Error("User JSON file not found");
    } else if (error instanceof SyntaxError) {
      throw new Error("Invalid JSON syntax in the user file");
    } else {
      throw error; // Rethrow other errors
    }
  }
}

if (import.meta.main) {
  const users = await fetchAllUsers();
  console.log(users);
}
