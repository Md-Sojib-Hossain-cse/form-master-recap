import { useEffect, useRef, useState } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState("");

    useEffect(() => {
        nameRef.current.focus();
    }, [])


    const handleRefSubmit = e => {
        e.preventDefault();
        if (passwordRef.current.value.length < 6) {
            setError("password must be 6 digit")
        }
        else {
            setError("");
            console.log(nameRef.current.value);
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value);
        }
    }
    return (
        <div>
            <form onSubmit={handleRefSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Enter your name" className="px-3 py-2 border border-gray-900 rounded-lg" /><br />
                <input ref={emailRef} defaultValue={'rojoni@sojoni.com'} type="email" name="email" id="email" placeholder="Enter Your Email" className="px-3 py-2 border border-gray-900 rounded-lg" /><br />
                <input ref={passwordRef} type="password" name="password" id="password" placeholder="Enter your password" className="px-3 py-2 border border-gray-900 rounded-lg" /><br />
                <input type="submit" value="submit" className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200" />
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default RefForm;