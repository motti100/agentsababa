import { handle } from "./agent-core.js";

export default {
  fetch(request, env) { return handle(request, env); },
};
