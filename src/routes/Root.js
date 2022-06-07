import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import './css/root.module.css';

const Root = () => {
    const [users, loading] = useUsers('https://randomuser.me/api/?results=10');
    const navigate = useNavigate();

    const handleUserProfile = (user) => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate(`/${user?.email}`);
    };

    return (
        <div className="table-wrapper">
            {
                loading && 'loading ...'
            }
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
    );
};

export default Root;