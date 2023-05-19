import { rest } from "msw";

export const handlers = [
  // Route to return ReadableStream
  rest.post("/readable-stream", (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ hello: "world" }))
  ),

  // Route to return null
  rest.get("/null", (req, res, ctx) => res(ctx.status(200))),
];
