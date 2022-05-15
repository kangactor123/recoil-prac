import React from "react";
import { useRecoilState } from "recoil";
import { IUser } from "../modules/type";
import { userAtom } from "../modules/User/atom";

// UserList 에서 하나의 User 만 저장하는 상황
// atom 에 파라미터가 필요하다.
// localStorage 와 연동

type FamilyProps = {
  id: number;
};

//default 가 1인 유저를 가져온다.
export default function Family(props: FamilyProps) {
  const { id } = props;
  const [oneUser, setOneUser] = useRecoilState<IUser>(userAtom(id));
  return (
    <div>
      <h1>{oneUser.id}</h1>
      <h3>{oneUser.name}</h3>
    </div>
  );
}
