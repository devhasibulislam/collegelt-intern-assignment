import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import './css/user.module.css';

const User = () => {
    const { email } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));

    console.log(user);
    
    return (
        <div>
            <p>This is User route: {user?.email} </p>
        </div>
    );
};

export default User;
