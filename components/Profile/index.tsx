import React from 'react';

interface ProfileProps {
    name: string;
    email: string;
    phone: string;
    birthday: string;
}

export const Profile: React.FC<ProfileProps> = ({ name, email, phone, birthday }) => {
    return(
        <>  
            <div>{name}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{birthday}</div>
        </>
    );
};