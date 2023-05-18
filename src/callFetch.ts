export const callFetch = async (url: string) => {
  const response = await fetch(url);
  const hasReadableStream = response.body !== undefined;

  if (!hasReadableStream) {
    return response.blob();
  }

  return response.body;
};
