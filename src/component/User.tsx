import { useRecoilState } from "recoil";
import { IUser, user } from "../atom";

function User() {
  const [loginUser, setLoginUser] = useRecoilState<IUser>(user);

  const handleClick = () => {
    const newUser: IUser = {
      id: "osci",
      pwd: "admin",
      name: "admin me",
      addr: "seoul samsung station",
    };

    setLoginUser(newUser);
  };

  const handleReset = () => {
    setLoginUser({} as IUser);
  };
  return (
    <>
      <div>
        <h3>ID : {loginUser.id}</h3>
        <h3>PWD : {loginUser.pwd}</h3>
        <h3>NAME : {loginUser.name}</h3>
        <h3>ADDR : {loginUser.addr}</h3>
        <button onClick={handleClick}>click</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </>
  );
}

export default User;
