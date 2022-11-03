import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: 'Nahid Islam',
      profilePic:
        'https://media-exp1.licdn.com/dms/image/C5603AQH1gJkOFOROSw/profile-displayphoto-shrink_800_800/0/1622908233063?e=1672876800&v=beta&t=3hD8rfblUpYIkCc2DrQA42KKL8__X76FX1DQiV85WTI',
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
