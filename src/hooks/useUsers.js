import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = (uri) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            const url = uri;
            const { data } = await axios.get(url);
            setUsers(data?.results);
            setLoading(false);
        };
        getUsers();
    }, [uri]);

    return [users, loading];
};

export default useUsers;
