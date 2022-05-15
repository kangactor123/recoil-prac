import { atom, selector } from "recoil";
import { getUserList } from "./api";
import { IUser, IUsertemp } from "../type";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      console.log("onSet 실행");
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const sessionStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = sessionStorage.getItem(key);

    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: any, _: any, isReset: any) => {
      const confirm = newValue.length === 0;
      confirm
        ? sessionStorage.removeItem(key)
        : sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const asyncUserListEffect =
  (key: string) =>
  ({ onSet, setSelf }: any) => {
    setSelf(() => {
      console.log("setSelf");
      const localData = localStorage.getItem(key);

      //localStorage 에 셋팅된 값이 있다면 해당 값으로 atom 을 초기화, 없다면 API 호출
      if (localData !== null) {
        return JSON.parse(localData);
      } else {
        return getUserList();
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

// atom 집합은 React 컨텍스트 외부에서 생성된다
// atom 의 초기값을 서버 데이터로 초기화 하고 싶다면 effects 를 활용!!
export const user = atom<IUsertemp>({
  key: "user",
  default: {} as IUsertemp,
  effects: [localStorageEffect("user"), sessionStorageEffect("user")],
});

// Effects 를 활용해 atom 의 초기값 설정
export const userList = atom<IUser[]>({
  key: "userList",
  // default: [] as IUser[],
  effects: [asyncUserListEffect("list")],
});

// Selector 을 활용해서 비동기 통신을 할 수 있다.
export const selectUserList = selector<IUser[]>({
  key: "selectUserList",
  get: async () => {
    const userList = getUserList();
    return userList;
  },
});
