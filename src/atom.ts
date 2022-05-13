import { atom } from "recoil";

export interface IUser {
  id: string;
  pwd: string;
  name: string;
  addr: string;
}

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: any, _: any, isReset: any) => {
      const confirm = newValue.length === 0;
      confirm
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

export const user = atom<IUser>({
  key: "user",
  default: {
    id: "DHKANG",
    pwd: "DH11",
    name: "DONGHEE",
    addr: "서울시 은평구 통일로",
  } as IUser,
  effects: [localStorageEffect("user"), sessionStorageEffect("user")],
});
