import { callFetch } from "./callFetch";
import { worker } from "./__mocks__/worker";

describe(callFetch.name, () => {
  beforeAll(async () => {
    await worker.start();
  });

  afterEach(() => {
    worker.resetHandlers();
  });

  afterAll(() => {
    worker.stop();
  });

  it("returns ReadableStream<Uint8Array> if defined", async () => {});
});
