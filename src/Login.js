import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import swal from 'sweetalert';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authUser = (e) => {
        e.preventDefault();
        if (username === 'java' && password === 'java') {
            swal('Login Successfull', 'Congratulation your login is successfull', 'success');
        } else {
            swal('invalid username/password', 'Please check details once more', 'error');
        }
    }
    return (<>
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <h1>User Authentication</h1>
                <form onSubmit={authUser}>
                    <input type='text' placeholder='username' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type='password' placeholder='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type='submit' className='btn btn-primary' />
                </form>
            </div>
        </div>
    </>);
}

export default Login;