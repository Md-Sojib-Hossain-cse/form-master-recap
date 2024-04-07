const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name"  className="px-3 py-2 border border-gray-900 rounded-lg"/><br />
                <input type="email" name="email" id="email" placeholder="Enter Your Email" className="px-3 py-2 border border-gray-900 rounded-lg"/><br />
                <input type="text" name="phone" id="phone" placeholder="Enter your phone" className="px-3 py-2 border border-gray-900 rounded-lg"/><br />
                <input type="submit" value="submit" className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"/>
            </form>
        </div>
    );
};

export default SimpleForm;