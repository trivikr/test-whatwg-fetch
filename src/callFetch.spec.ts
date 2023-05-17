import { callFetch } from "./callFetch";
import fetchMock from "fetch-mock";

describe(callFetch.name, () => {
  const url = "https://example.com";

  it("returns ReadableStream<Uint8Array> if defined", async () => {
    const mockResponse = "hello";
    fetchMock.mock(url, mockResponse);

    const response = await callFetch(url);
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

    expect(responseText).toBe(mockResponse);
    fetchMock.restore();
  });
});
