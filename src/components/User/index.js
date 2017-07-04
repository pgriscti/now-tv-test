import React from 'react';
import Avatar from '../Avatar';

const User = ({ user }) => {
    const fullName = `${user.firstName} ${user.lastName}`

    return (
        <div>
            <Avatar img={user.avatar} />
            <h4>{fullName}</h4>
        </div>
    );
};

export default User;