import { createContext, useEffect, useState } from "react";
import { account } from "../lib/userdb";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession({
                email: email,
                password: password,
            });
            const response = await account.get();
            setUser(response);
        }
        catch (error) {
            throw Error(error.message);
        }
    }
    async function logout() {
        try {
                const resp = await account.deleteSession({
                sessionId: 'current',
            });
        } catch (error) {
            throw Error(error.message);
        }
        
        setUser(null);
    }

    async function getInitialUser() {
        try {
            const response = await account.get();
            setUser(response);
        }
        catch (error) {
            setUser(null);
        } finally {
            setAuthChecked(true);
        }
    }

    useEffect(() => {
      getInitialUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, login, logout, authChecked }}>
            {children}
        </UserContext.Provider>
    );
}
