import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    let serial = 0;

    return (
        <div className="overflow-x-auto">
            <h1 className='text-center my-8 font-bold text-3xl'>Total User: {loadedUsers.length}</h1>
            <table className="table w-1/2 mx-auto">
                {/* head */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Email</th>
                        <th>Creation Time</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row  */}
                    {
                        loadedUsers.map(user =>
                            <tr key={user._id}>
                                <th>{serial = serial+1}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;