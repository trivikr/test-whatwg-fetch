import { callFetch } from "./callFetch";
import { worker } from "./__mocks__/browser";

describe(callFetch.name, () => {
  beforeAll(() => {
    worker.start();
  });

  afterAll(() => {
    worker.stop();
  });

  it("returns ReadableStream<Uint8Array> if body is defined", async () => {
    const response = await callFetch("/readable-stream");
    expect(response).toBeInstanceOf(ReadableStream);

    let responseText = "";
    const reader = (response as ReadableStream<Uint8Array>).getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      responseText += new TextDecoder().decode(value);
    }

    // expect(responseText).toBe(mockResponse);
  });

  it("returns Blob if body is empty", async () => {
    const response = await callFetch("/empty");
    expect(response).toBeInstanceOf(Blob);

    const responseText = await (response as Blob).text();
    expect(responseText).toBe("");
  });
});
