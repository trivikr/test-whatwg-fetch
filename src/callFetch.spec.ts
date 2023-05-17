import { callFetch } from "./callFetch";
import fetchMock from "fetch-mock";

describe(callFetch.name, () => {
  const url = "https://example.com";

  it("returns ReadableStream<Uint8Array> if defined", async () => {
    const mockResponse = "hello";
    fetchMock.mock(url, mockResponse);

    const response = await callFetch(url);
    expect(response).toBeInstanceOf(ReadableStream);

    fetchMock.restore();
  });
});
