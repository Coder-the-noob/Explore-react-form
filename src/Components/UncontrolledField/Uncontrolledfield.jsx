import React, { useRef } from 'react';

const Uncontrolledfield = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log('Email:', email);
        console.log('Password:', password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" id="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Uncontrolledfield;