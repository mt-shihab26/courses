import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupOnFirebase } from "../../firebase/mixed";
import Form from "../common/Form";
import SubmitButton from "../common/SubmitButton";
import TextInput from "../common/TextInput";
import "./signupForm.css";
import Checkbox from "./Checkbox";

const SingupForm: FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError("Password does not match!");
        }
        try {
            setError("");
            setLoading(true);
            await signupOnFirebase(name, email, agree, password);
            setLoading(false);
            navigate("/");
        } catch (e: any) {
            console.log(e);
            setLoading(false);
            setError("Failed to create an account!");
        }
    };

    return (
        <Form className="signup" onSubmit={handleSubmit}>
            <TextInput
                name="name"
                placeholder="Enter name"
                icon="person"
                onChange={e => setName(e.target.value)}
                value={name}
            />
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
            <TextInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                icon="lock_clock"
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />
            <Checkbox onChange={e => setAgree(e.target.checked)} />
            <SubmitButton loading={loading} />
            {error && <p className="error">{error}</p>}
            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
};

export default SingupForm;
