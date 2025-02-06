const SERVER_URL = "http://localhost:3001/seminars";

export const getSeminars = async () => {
  const response = await fetch(SERVER_URL);

  const res = await response.json();

  return res;
};

export const delSeminars = async ({id}: {id: number}) => {
  const response = await fetch(`${SERVER_URL}/${id}`, {
    method: 'DELETE'
  });

  const res = await response.json();

  return res;
};
