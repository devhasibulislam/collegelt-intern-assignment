import React from 'react';
import { useParams } from 'react-router-dom';
import './css/user.css';

const User = () => {
    const { email } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div
            id='mockup-tab'
        >
            {
                user?.email === email
                &&
                <div className="browser-mockup">
                    <img
                        src={user?.picture?.large}
                        alt="user_thumbnail"
                        className='user-thumb'
                    />
                    <p id='phone-number'>phone: <b>{user?.phone}</b></p>
                    <p id='dob'>date of birth: <b>{user?.dob?.date.split('T')[0]}</b></p>
                    <p id=''></p>
                </div>
            }
        </div>
    );
};

export default User;
