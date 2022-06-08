import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/user.css';

const User = () => {
    const { email } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));

    const [timer, setTimer] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const setCountDownTo = new Date(user?.dob?.date);
        console.log(setCountDownTo);
        const nextYear = new Date().getFullYear() + 1;
        console.log(nextYear);
        if (setCountDownTo.getMonth() <= new Date().getMonth() && setCountDownTo.getDay() <= new Date().getDate()) {
            setCountDownTo.setFullYear(nextYear);
        } else {
            setCountDownTo.setFullYear(nextYear - 1);
        }

        /* console.log(setCountDownTo.getMonth(), 'user month');
        console.log(setCountDownTo.getDay(), 'user day');
        console.log(new Date().getMonth(), 'current month');
        console.log(new Date().getDate(), 'current day'); */

        const getCountDownTo = setCountDownTo.getTime();

        const counter = setInterval(() => {
            const getCountDownFrom = new Date().getTime();
            const distance = getCountDownTo - getCountDownFrom;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(counter);
                setTimer('Happy Birthday to you!!!');
            } else {
                setTimer(`${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`);
            }
            setLoading(false);
        }, 1000);
    }, [user?.dob?.date]);

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
                    <p id='timer'>{timer}</p>
                    {loading && 'loading...'}
                </div>
            }
        </div>
    );
};

export default User;
