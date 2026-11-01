import { handle } from "../agent-core.js";

export const config = { runtime: "edge" };

export default function handler(request) {
  return handle(request, process.env);
}
