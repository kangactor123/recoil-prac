import { useRecoilState } from "recoil";
import { user } from "../modules/UserList/atom";
import { IUsertemp } from "../modules/type";

function User() {
  const [loginUser, setLoginUser] = useRecoilState<IUsertemp>(user);

  const handleClick = () => {
    const newUser: IUsertemp = {
      id: "osci",
      pwd: "admin",
      name: "admin me",
      addr: "seoul samsung station",
    };

    setLoginUser(newUser);
  };

  const handleReset = () => {
    setLoginUser({} as IUsertemp);
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
