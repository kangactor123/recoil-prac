import { atom, atomFamily, selector } from "recoil";
import { IUser } from "../type";
import { getSelectedUser } from "./api";

const asyncUserEffect =
  (key: string, id: number) =>
  ({ onSet, setSelf }: any) => {
    setSelf(() => {
      console.log("setSelf");
      const localData = localStorage.getItem(key);

      //localStorage 에 셋팅된 값이 있다면 해당 값으로 atom 을 초기화, 없다면 API 호출
      if (localData !== null) {
        return JSON.parse(localData);
      } else {
        return getSelectedUser(id);
      }
    });

    // Trigger 가 발동이 되어야 실행된다. (atom 의 값이 변경이 되었을 경우에 초기화된다.)
    onSet((newValue: any, _: any, isReset: boolean) => {
      console.log("onSet");
      localStorage.setItem(key, JSON.stringify(newValue));
      // isReset
      //   ? localforage.removeItem(key)
      //   : localforage.setItem(key, newValue);
    });
  };

// 첫 번째 제네릭은 아톰의 타입, 두 번째 제네릭은 param 의 타입
export const userAtom = atomFamily<IUser, number>({
  key: "userAtom",
  effects: (param) => [asyncUserEffect("userAtom", param)],
});
