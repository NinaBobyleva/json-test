const SERVER_URL = "http://localhost:3001/seminars";

export const getSeminars = async () => {
  const response = await fetch(SERVER_URL);

  const res = await response.json();

  return res;
};
