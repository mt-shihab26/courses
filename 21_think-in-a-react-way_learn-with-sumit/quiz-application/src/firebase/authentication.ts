import { NextFn, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { auth } from "./setup";

export const logout = () => {
    signOut(auth);
};

export const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateDataChanged = (cb: NextFn<User | null>) => {
    return onAuthStateChanged(auth, cb);
};
