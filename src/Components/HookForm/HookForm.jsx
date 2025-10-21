import useInputField from '../../Hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');
   const handleSubmit = (e) => {
       e.preventDefault();
       console.log('Name:', name);
       console.log('Email:', email);
       console.log('Password:', password);
   }
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={nameOnChange} defaultValue={name} placeholder="Username" />
                <br />
                <input type="email" name="email" onChange={emailOnChange} defaultValue={email} placeholder="Email" />
                <br />
                <input type="password" name="password" onChange={passwordOnChange} defaultValue={password} placeholder="Password" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;