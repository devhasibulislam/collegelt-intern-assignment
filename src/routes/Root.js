import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/root.css';

const Root = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const url = "https://randomuser.me/api/?results=10";
            const { data } = await axios.get(url);
            setUsers(data?.results);
        };
        getUsers();
    }, []);
    const navigate = useNavigate();

    const handleUserProfile = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        navigate(`/${user?.email}`);
    };

    return (
        <div className="table-wrapper">
            <div className="browser-mockup">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <tr
                                key={user?.email}
                                onClick={() => handleUserProfile(user)}
                            >
                                <td data-column="Name">{user?.name?.title} {user?.name?.first} {user?.name?.last}</td>
                                <td data-column="Gender">{user?.gender}</td>
                                <td data-column="City">{user?.location?.city}</td>
                                <td data-column="State">{user?.location?.state}</td>
                                <td data-column="Country">{user?.location?.country}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Root;
