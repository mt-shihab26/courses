import { useEffect, useState } from "react";
import axios from "axios";

const getUsers = async setUsers => {
    const result = await axios("https://jsonplaceholder.typicode.com/users");
    setUsers(result.data);
};

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers(setUsers);
    }, []);

    console.log(users);

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
