import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const SignIn = () => {
    const { signin } = useContext(AuthContext);

    const handleSignin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(result => {
                console.log(result.user);
                const user = {
                    email,
                    lastLoggedAt: result.user.metadata.lastSignInTime
                }
                fetch('http://localhost:5000/signin', {
                    method: 'PATCH',
                    headers:{
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                    })
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;