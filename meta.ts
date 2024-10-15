import { add } from "./main.ts";

console.log(add(2, 4));

if (import.meta.url) {
  const url = new URL(`${import.meta.url}?code=200`);
  console.log(url.protocol, url.protocol === "file:");
  console.log(url.searchParams.get("code"));
}
