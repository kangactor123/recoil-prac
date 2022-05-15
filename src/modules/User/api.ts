import { IUser } from "../type";

export async function getSelectedUser(id: number) {
  const response: IUser[] = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  return response;
}
