import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userList } from "../modules/UserList/atom";
import { userSelector as selector } from "../modules/UserList/selector";

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function List() {
  const [number, setNumber] = useState(1);
  const userSelector = useRecoilValue(selector(number));
  //   const [list, setList] = useRecoilState(userList);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const number = Number(event.currentTarget.value);
      setNumber(number);
    },
    []
  );

  //   const selectList = useMemo(
  //     () => list.filter((li) => li.phone.includes(`${number}`)),
  //     [number, list]
  //   );

  //   useEffect(() => {
  //     setList(() => list.filter((li) => li.phone.includes(`${number}`)));
  //   }, [list, number]);

  return (
    <div>
      <h2>Select number</h2>
      <select onChange={handleChange} value={number}>
        {numberList.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <h1>Select List</h1>
      <hr />
      {userSelector.map(({ id, addr, name, phone }) => (
        <div key={id}>
          <p>id: {id}</p>
          <p>name: {name}</p>
          <p>addr: {addr}</p>
          <p>phone: {phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
