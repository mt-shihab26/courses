import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApi";
import Error from "../ui/Error";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [login, { data, isLoading, isError, error: error2 }] =
        useLoginMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            const e: any = error2;
            setError(e ? e.error : "");
        }
        if (data?.accessToken && data?.user) {
            navigate("/inbox");
        }
    }, [data, isError]);

    const handleSubmit = () => {
        setError("");
        login({ email, password });
        setEmail("");
        setPassword("");
    };

    return (
        <form
            className="mt-8 space-y-6"
            onSubmit={e => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <div className="rounded-md shadow-sm -space-y-px">
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                />
            </div>

            <div className="flex items-center justify-end">
                <div className="text-sm">
                    <Link
                        to="/register"
                        className="font-medium text-violet-600 hover:text-violet-500"
                    >
                        Register
                    </Link>
                </div>
            </div>

            <div>
                <button
                    disabled={isLoading}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                >
                    Sign in
                </button>
            </div>
            {error && <Error message={error} />}
        </form>
    );
};

export default LoginForm;
