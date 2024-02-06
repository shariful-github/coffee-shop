import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    let serial = 0;

    const handleDelete = id => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount === 1) {
                    console.log('User successfully deleted');
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <Header></Header>
            <h1 className='text-center my-8 font-bold text-3xl'>Total User: {users.length}</h1>
            <table className="table w-1/2 mx-auto">
                {/* head */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Email</th>
                        <th>Creation Time</th>
                        <th>Last Login</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row  */}
                    {
                        users.map(user =>
                            <tr key={user._id}>
                                <th>{serial = serial + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;