import React, { useState } from 'react'
import './App.css';
// import instance from './interceptor';
import { Link } from 'react-router-dom';

function SignIn() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profession, setProfession] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name && password && email && phone && profession) {
            const data = {
                name,
                password,
                email,
                phone,
                profession
            }
            const user = localStorage.getItem('user');


            if (user) {
                const users = JSON.parse(user);
                const userExist = users.find(user => user.name === name && user.password === password);
                if (userExist) {
                    alert('User already exist');
                    return;
                } else {
                    users.push(data);
                    localStorage.setItem('user', JSON.stringify(users));

                    alert('User created successfully');

                }
            } else {
                localStorage.setItem('user', JSON.stringify([data]));
            }

            setName('');
            setPassword('');
            setEmail('');
            setPhone('');
            setProfession('');
        } else {
            alert('Please fill all the fields');
        }

    }



    return (
        <div className="container">
            <div className="center_flex">

                <form onSubmit={handleSubmit} className='_centered' >
                    <h1>Sign Up </h1>
                    <label htmlFor="name">Enter Name</label>
                    <input value={name} required onChange={(e) => setName(e.target.value)} type="text" name="name" />
                    <br />
                    <label>Password</label>
                    <input value={password} required type={show ? "text" : "password"} name="text" onChange={(e) => setPassword(e.target.value)} />
                    <div className='_flex' >
                        <input type="checkbox" onClick={() => setShow(!show)} />
                        <label style={{ padding: '0.4rem' }} >Show Password</label>
                    </div>
                    <br />
                    <label htmlFor="email">Enter Email</label>
                    <input value={email} required onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
                    <br />
                    <label htmlFor="phone">Enter Phone</label>
                    <input value={phone} required maxLength="10" onChange={(e) => setPhone(e.target.value)} type="number" name="phone" />
                    <br />
                    <label htmlFor="profession">Select Profession</label>


                    <select value={profession} className='_select' name="profession" onChange={(e) => {
                        setProfession(e.target.value)
                    }} required>
                        <option value="">Select Profession</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="other">Other</option>
                    </select>

                    <br />

                    <button type="submit">Sign Up</button>
                    <p>
                        alredy have an account?
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>

        </div>
    );
}

export default SignIn;
