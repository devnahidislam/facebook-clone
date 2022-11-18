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
      name: 'Khadija Begum',
      profilePic:
        'https://media-exp1.licdn.com/dms/image/D4E03AQGhyXgXBxNBQQ/profile-displayphoto-shrink_800_800/0/1668707540248?e=1674086400&v=beta&t=tLn6XM5sCD3s0OXhYlDSGgG3aG7CItWJ8Q5cvuPIkik',
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
