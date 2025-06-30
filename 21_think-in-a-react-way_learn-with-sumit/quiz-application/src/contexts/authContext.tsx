import { User } from "firebase/auth";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { onAuthStateDataChanged } from "../firebase/authentication";
import { DBUser, readUserByUID } from "../firebase/database";

interface CurrentUser extends DBUser {
    auth: User;
}

type AuthContextType = {
    currentUser: CurrentUser | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType>({ currentUser: null, loading: true });

export const useAuth = () => useContext(AuthContext);

let i: number = 0;

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        i++;
        console.log("AuthProvider useEffect called: " + i);
        const unsubscribe = onAuthStateDataChanged(async user => {
            if (user) {
                const data = await readUserByUID(user.uid);
                setCurrentUser({ auth: user, name: data.name, email: data.email, agree: data.agree });
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });
        return () => {
            console.log("Unsubscribe triggered on onAuthStateChanged");
            unsubscribe();
        };
    }, []);

    const value = {
        loading,
        currentUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
