import { createUserWithEmailAndPassword } from "firebase/auth";
import { writeUserData } from "./database";
import { auth } from "./setup";

export const signupOnFirebase = async (name: string, email: string, agree: boolean, password: string) => {
    const uc = await createUserWithEmailAndPassword(auth, email, password);
    writeUserData(uc?.user.uid, { name, email, agree });
};
