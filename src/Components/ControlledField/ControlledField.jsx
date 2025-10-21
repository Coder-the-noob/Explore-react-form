import React, { useState } from 'react';

const ControlledField = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleEmailChange = (e) => {
       console.log(e.target.value);
       setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
       console.log(e.target.value);
       setPassword(e.target.value);

       if(password.length < 6){
          setError('Password must be at least 6 characters long');
       }else{
            setError('');
       }
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' onChange={handleEmailChange} defaultValue={email} placeholder='Email' required />
                <br />
                <input type="password" name='password' onChange={handlePasswordChange} defaultValue={password} placeholder='Password' required />
                <input type="submit" value="Submit" />
            </form>
            <P>
                <small>
                    {error && <span style={{color: 'red'}}>{error}</span>}
                </small>
            </P>
        </div>
    );
};

export default ControlledField;