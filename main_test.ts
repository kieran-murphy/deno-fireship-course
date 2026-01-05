import { assertEquals } from "@std/assert";
import { multiply } from "./lib.ts";

Deno.test(function multiplyTest() {
  assertEquals(multiply(2, 2), 4);
  assertEquals(multiply(2, 3), 6);
});
