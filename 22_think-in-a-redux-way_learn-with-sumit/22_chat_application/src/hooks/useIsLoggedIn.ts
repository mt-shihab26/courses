import { useAppSelector } from "../app/hooks";

const useIsLoggedIn = () => {
    const auth = useAppSelector(state => state.auth);

    if (auth?.accessToken && auth?.user) {
        return true;
    }
    return false;
};

export default useIsLoggedIn;
