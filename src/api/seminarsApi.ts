const SERVER_URL = "http://localhost:3001/seminars";

type EditSeminarType = {
  id: string | undefined;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string | undefined;
};

export const getSeminars = async () => {
  const response = await fetch(SERVER_URL);

  if (response.status === 404) {
    throw new Error("Данные не найдены.");
  }

  if (response.status === 500) {
    throw new Error("Сервер не доступен, попробуйте еще раз.");
  }

  const res = await response.json();

  return res;
};

export const delSeminars = async ({ id }: { id: string }) => {
  const response = await fetch(`${SERVER_URL}/${id}`, {
    method: "DELETE",
  });

  if (response.status === 404) {
    throw new Error("Данные не найдены.");
  }

  if (response.status === 500) {
    throw new Error("Сервер не доступен, попробуйте еще раз.");
  }

  const res = await response.json();

  return res;
};

export const editSeminars = async ({
  id,
  title,
  description,
  date,
  time,
  photo,
}: EditSeminarType) => {
  const response = await fetch(`${SERVER_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      description,
      date,
      time,
      photo,
    }),
  });

  if (response.status === 404) {
    throw new Error("Данные не найдены");
  }

  if (response.status === 500) {
    throw new Error("Сервер не доступен, попробуйте еще раз.");
  }

  const res = await response.json();

  return res;
};
