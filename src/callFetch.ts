export const callFetch = async (url: string) => {
  const response = await fetch(url);
  if (response.body == undefined) {
    const body = await response.blob();
    return body;
  }
  return response.body;
};
