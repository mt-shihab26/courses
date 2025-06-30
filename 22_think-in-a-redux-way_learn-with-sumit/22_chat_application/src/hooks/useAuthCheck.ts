import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { userLoggedIn } from "../features/auth/authSlice";

const useAuthCheck = () => {
    const dispatch = useAppDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const localAuth = localStorage.getItem("auth");

        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.accessToken && auth?.user) {
                dispatch(userLoggedIn(auth));
            }
        }
        setAuthChecked(true);
    }, []);

    return authChecked;
};

export default useAuthCheck;
