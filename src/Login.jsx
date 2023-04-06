import React, { useState } from 'react'
import './App.css';
import instance from './interceptor';

function Login() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name === '' || description === '') {
            alert('Please fill all the fields');
            return;
        }

        await instance.post('/api/insert', {
            name,
            description,
        })
            .then((res) => {
                // console.log(res.data);
            }).catch((err) => {
                alert("Something went wrong")
            })
    }



    return (
        <div className="container">
            <form onSubmit={handleSubmit} className='_centered' >
                <h1>Hello World !</h1>
                <label htmlFor="name">Enter Name</label>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" />
                <br />
                <label>Password</label>
                <input type={show ? "text" : "password"} name="text" onChange={(e) => setDescription(e.target.value)} />
                <br />
                <div className='_flex' >
                    <input type="checkbox" onClick={() => setShow(!show)} />
                    <label style={{ padding: '0.4rem' }} >Show Password</label>
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default Login;
