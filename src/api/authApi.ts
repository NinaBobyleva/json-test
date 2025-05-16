const BASE_URL = "http://localhost:3001/";

export const authUser = async ({email, password}: {email: string, password: string}) => {
    const response = await fetch(`${BASE_URL}users?email=${email}&password=${password}`)

//   if (response.status === 404) {
//     throw new Error("Данные не найдены.");
//   }

//   if (response.status === 500) {
//     throw new Error("Сервер не доступен, попробуйте еще раз.");
//   }

  const res = await response.json();

  return res;
}