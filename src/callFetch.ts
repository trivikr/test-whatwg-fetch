export const callFetch = async (url: string) => {
  const response = await fetch(url);
  if (response.body != undefined) {
    return response.body;
  }
  return response.blob();
};
