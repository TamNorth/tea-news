import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUsers } from "../api";

export default function UserLogin({ userMenuDisplay, setUserMenuDisplay }) {
  const [users, setUsers] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  function userLogin(userObj) {
    setUser(userObj);
  }

  if (!userMenuDisplay) {
    return;
  }

  return (
    <section id="user-menu">
      <h2>User Login</h2>
      <ul id="login-menu" className="menu-overlay">
        {users.map((userObj) => {
          const { username, avatar_url } = userObj;
          return (
            <li key={username} id="user-card" className="misc-sub-element">
              <button onClick={() => userLogin(userObj)}>
                <img src={avatar_url} className="profile-pic" />
                <span>{username}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
