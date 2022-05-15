import { IUser } from "./type";

export async function getUserList() {
  console.log("Request");
  const response: IUser[] = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  return response;
}
