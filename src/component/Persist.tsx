import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { userList } from "../modules/UserList/atom";
import { IUser } from "../modules/UserList/type";

// Selector 로 atom 을 초기화 시킬 필요가 없다.
// atom 의 effect 를 활용해서 atom 을 쉽게 초기화 할 수 있다.
export default function Persist() {
  const [selectUserId, setSelectUserId] = useState(1);
  const [list, setList] = useRecoilState<IUser[]>(userList);
  const [cookies, setCookie] = useCookies(["user"]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectUserId(+event.currentTarget.value);
  };

  const handleClick = () => {
    const newList = list.filter((user) => user.id !== selectUserId);

    setList(newList);
    setCookie("user", JSON.stringify(newList));
  };

  return (
    <div>
      {list.length !== 0 &&
        list.map((user, index) => (
          <div key={index}>
            <h1>id: {user.id}</h1>
            <h3>name: {user.name}</h3>
            <h3>company name: {user.company.name}</h3>
          </div>
        ))}
      <form>
        <h1>블랙</h1>
        <select onChange={handleSelect}>
          {list.map((user, index) => (
            <option key={index} value={user.id}>
              {user.id}
            </option>
          ))}
        </select>
      </form>
      <button onClick={handleClick}>블랙 처리하기</button>
    </div>
  );
}
