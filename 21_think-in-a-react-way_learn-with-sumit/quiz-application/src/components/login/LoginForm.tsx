import { FC, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../firebase/authentication";
import Form from "../common/Form";
import SubmitButton from "../common/SubmitButton";
import TextInput from "../common/TextInput";
import "./loginForm.css";

const LoginForm: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            setLoading(false);
            navigate("/");
        } catch (e: any) {
            console.log(e);
            setLoading(false);
            setError("Failed to login!");
        }
    };

    return (
        <Form className="login" onSubmit={handleSubmit}>
            <TextInput
                name="email"
                placeholder="Enter email"
                icon="alternate_email"
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <TextInput
                type="password"
                name="password"
                placeholder="Enter password"
                icon="lock"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <SubmitButton loading={loading} />
            {error && <p className="error">{error}</p>}
            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
};

export default LoginForm;
