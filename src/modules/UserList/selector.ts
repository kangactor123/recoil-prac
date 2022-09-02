import { selectorFamily } from "recoil";
import { IUser } from "../type";
import { userList } from "./atom";

export const userSelector = selectorFamily<IUser[], number>({
  key: "userSelector",
  get:
    (param: number) =>
    ({ get }) =>
      get(userList).filter((person) => person.phone.includes(`${param}`)),
});

/**
 * 
 * ({ get }) => {
      const list = get(userList);
      const choiceList = list.filter((person) =>
        person.phone.includes(`${param}`)
      );
      return choiceList;
    },
 */
