import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState("your name");
    const [email, setEmail] = useState("abc@example.com");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const handleStatefulSubmit = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError("password Must be at least 6 character long");
        }
        else {
            setError('')
            console.log("name : ", name);
            console.log("email : ", email);
            console.log("password : ", password);
        }
    }

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleStatefulSubmit}>
                <input onChange={handleName} type="text" name="name" value={name} placeholder="Enter your name" className="px-3 py-2 border border-gray-900 rounded-lg" /><br />
                <input onChange={handleEmail} type="email" name="email" id="email" value={email} placeholder="Enter Your Email" className="px-3 py-2 border border-gray-900 rounded-lg" /><br />
                <input onChange={handlePassword} type="password" name="password" id="password" value={password} placeholder="Enter your password" required className="px-3 py-2 border border-gray-900 rounded-lg" /><br />
                <input type="submit" value="submit" className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;