import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/auth/authApi";
import Error from "../ui/Error";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");

    const [register, { data, isLoading, isError, error: error2 }] =
        useRegisterMutation();

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
        if (confirmPassword !== password) {
            setError("Password do not match!");
        } else {
            setError("");
            register({ name, email, password });
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setAgree(false);
        }
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
                    value={name}
                    onChange={e => setName(e.target.value)}
                    id="name"
                    name="Name"
                    type="Name"
                    autoComplete="Name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                />
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
                <input
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-confirmPassword"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                    placeholder="confirmPassword"
                />
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        checked={agree}
                        onChange={e => setAgree(e.target.checked)}
                        id="agree"
                        name="agree"
                        type="checkbox"
                        className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                        required
                    />
                    <label
                        htmlFor="agree"
                        className="ml-2 block text-sm text-gray-900"
                    >
                        Agreed with the terms and condition
                    </label>
                </div>
            </div>

            <div>
                <button
                    disabled={isLoading}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    Sign up
                </button>
            </div>
            {error !== "" && <Error message={error} />}
        </form>
    );
};

export default RegisterForm;
