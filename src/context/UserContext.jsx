import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user, setUser] = useState(false);

    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

export const useUserContext = () => useContext(UserContext);

export const loaderUser = async () => {
    const res = await fetch('http://127.0.0.1:8000/user');
    const user = await res.json();
    return { user };
}