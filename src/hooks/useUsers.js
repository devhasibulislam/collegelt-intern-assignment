import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const url = `https://randomuser.me/api/?results=10`;
            const { data } = await axios.get(url);
            console.log(data);
            setUsers(data?.results);
        };
        getUsers();
    }, []);

    return [users];
};

export default useUsers;