import { NORMA_API } from "~/constants";

const checkReponse = (res: Response) => {
  return res.ok
    ? res.json()
    : res.json().then((err) => {
        alert("Ошибка ответа сервера, перезагрузите страницу");
        return Promise.reject(err);
      });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getIngredients = (): Promise<any> =>
  fetch(`${NORMA_API}/ingredients`).then(checkReponse);
