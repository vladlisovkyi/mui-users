import React, { createContext, useContext, useMemo, useState } from "react";

interface UserData {
  name: string;
  job: string;
  preference: string;
  skills: string[];
  date: string | null | undefined;
}

const initialState = [
  {
    name: "Alex",
    job: "Developer",
    skills: ["React"],
    preference: "Office",
    date: "Wed Jun 05 2023 00:00:00 GMT+0300",
  },
  {
    name: "Anrdrew",
    job: "Manager",
    skills: ["React"],
    preference: "Office",
    date: "Wed Jul 02 2023 00:00:00 GMT+0300",
  },
];

const UserContext = createContext<{
  users: UserData[];
  setUser: React.Dispatch<React.SetStateAction<UserData[]>>;
}>({
  users: [],
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUser] = useState<UserData[]>(initialState);

  const contextValue = useMemo(() => ({ users, setUser }), [users]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
