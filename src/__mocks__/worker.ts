import { setupWorker, rest } from "msw";

export const worker = setupWorker(
  rest.get("/readable-stream", (req, res, ctx) => {
    return res(ctx.json({ firstName: "John" }));
  })
);
