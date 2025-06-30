import { onValue, ref, set } from "firebase/database";
import { database } from "./setup";

export type DBUser = {
    name: string;
    email: string;
    agree: boolean;
};

export const writeUserData = (userId?: string, data?: any) => {
    set(ref(database, "users/" + userId), data);
};

export const readUserByUID = (userUID: string): Promise<DBUser> => {
    return new Promise((resolve, reject) => {
        const usersRef = ref(database, "users/" + userUID);
        onValue(usersRef, snapshot => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log("got user: ", data);
                resolve(data as DBUser);
            } else {
                reject("There is no user data in users/{uid}");
            }
        });
    });
};
