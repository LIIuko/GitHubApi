import React from 'react';

const MyInput = ({value, onChange, ...props}) => {
    return (
        <input style={{width:'70%', height:'2rem', margin:'1rem auto'}} {...props} value={value} onChange={onChange}/>
    );
};

export default MyInput;