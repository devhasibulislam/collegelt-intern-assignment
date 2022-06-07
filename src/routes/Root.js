import React from 'react';
import useUsers from '../hooks/useUsers';
import './css/root.module.css';

const Root = () => {
    const [users] = useUsers();
    return (
        <div className="table-wrapper">
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
                            key={user?.id?.value}
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