import React from 'react';

const MyButton = ({title, ...props}) => {
    return (
        <button style={{height:'2rem', padding: '0 1rem'}} {...props}>{title}</button>
    );
};

export default MyButton;