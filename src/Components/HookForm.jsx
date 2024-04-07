import useInputState from "../Hooks/useInputState";

const HookForm = () => {
    const [name , handleSetName] = useInputState('rojoni');
    const [email , handleSetEmail] = useInputState('');
    const [password , handleSetPassword] = useInputState('');

    const handleHookFormSubmit = e => {
        console.log('from data ' , name);
        console.log('from data ' , email);
        console.log('from data ' , password);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleHookFormSubmit}>
                <input value={name} onChange={handleSetName} type="text" name="name" placeholder="Enter your name"  className="px-3 py-2 border border-gray-900 rounded-lg"/><br />
                <input value={email} onChange={handleSetEmail} type="email" name="email" id="email" placeholder="Enter Your Email" className="px-3 py-2 border border-gray-900 rounded-lg"/><br />
                <input value={password} onChange={handleSetPassword} type="password" name="password" id="password" placeholder="Enter your password" className="px-3 py-2 border border-gray-900 rounded-lg"/><br />
                <input type="submit" value="submit" className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"/>
            </form>
        </div>
    );
};

export default HookForm;