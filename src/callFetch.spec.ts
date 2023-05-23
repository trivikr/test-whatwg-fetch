import { callFetch } from "./callFetch";
import fetchMock from "fetch-mock";

describe(callFetch.name, () => {
  const url = "https://example.com";

  afterEach(() => {
    fetchMock.restore();
  });

  it("returns ReadableStream<Uint8Array> if body is defined", async () => {
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
  });

  it("returns Blob if body is empty", async () => {
    fetchMock.mock(url, { status: 204 });

    const response = await callFetch(url);
    expect(response).toBeInstanceOf(Blob);

    const responseText = await (response as Blob).text();
    expect(responseText).toBe("");
  });
});
