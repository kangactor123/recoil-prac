import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { user } from "../modules/UserList/atom";
import { IUsertemp } from "../modules/UserList/type";

function Join() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");

  const setLoginUser = useSetRecoilState(user);

  const [coockies, setCoockie, removeCookie] = useCookies(["user"]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newbby: IUsertemp = {
      id,
      pwd,
      name,
      addr,
    };
    setLoginUser(newbby);
  };

  const handleSaveCookie = () => {
    const newbby: IUsertemp = {
      id,
      pwd,
      name,
      addr,
    };
    setCoockie("user", newbby);
  };

  const handleId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };
  const handlePwd = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(event.currentTarget.value);
  };
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const handleAddr = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddr(event.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <span>ID</span>
          <input value={id} onChange={handleId} />
        </div>
        <div>
          <span>PWD</span>
          <input value={pwd} onChange={handlePwd} />
        </div>
        <div>
          <span>NAME</span>
          <input value={name} onChange={handleName} />
        </div>
        <div>
          <span>ADDR</span>
          <input value={addr} onChange={handleAddr} />
        </div>
        <button style={{ marginRight: 30 }}>change User</button>
        <button onClick={handleSaveCookie}>save in Cookie</button>
      </form>
      {/* <div>{coockies.user.id}</div> */}
    </>
  );
}

export default Join;
