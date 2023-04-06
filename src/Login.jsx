import React, { useState } from 'react'
import './App.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        // validate the name and password with the local storage data and navigate to the home pate
        if (name && password) {
            let user = localStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                const userExist = user.find(user => user.name === name && user.password === password);
                if (userExist) {
                    localStorage.setItem('currentUser', JSON.stringify(userExist));
                    navigate('/home');
                } else {
                    alert('User not exist');
                }
            }
        } else {
            alert('Please fill all the fields');
        }
    }



    return (
        <div className="container">
            <div className="center_flex">

                <form onSubmit={handleSubmit} className='_centered' >
                    <h1>Login </h1>
                    <label htmlFor="name">Enter Name</label>
                    <input value={name} required onChange={(e) => setName(e.target.value)} type="text" name="name" />
                    <br />
                    <label>Password</label>
                    <input value={password} required type={show ? "text" : "password"} name="text" onChange={(e) => setPassword(e.target.value)} />
                    <div className='_flex' >
                        <input type="checkbox" onClick={() => setShow(!show)} />
                        <label style={{ padding: '0.4rem' }} >Show Password</label>
                    </div>
                    <button type="submit">Login </button>
                    <p>
                        not have an account?
                        <Link to="/signup">Sign Up</Link>
                    </p>
                </form>
            </div>

        </div>
    );
}

export default Login;
