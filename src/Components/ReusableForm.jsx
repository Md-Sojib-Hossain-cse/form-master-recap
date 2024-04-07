const ReusableForm = ({formTitle , submitButtonText="submit" , handleSubmit , children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name : e.target.name.value,
            email : e.target.email.value,
            password : e.target.password.value,
        }
        handleSubmit(data);
    }
    
    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" placeholder="Enter your name"  className="px-3 py-2 border border-gray-900 rounded-lg"/><br />
                <input type="email" name="email" id="email" placeholder="Enter Your Email" className="px-3 py-2 border border-gray-900 rounded-lg"/><br />
                <input type="password" name="password" id="password" placeholder="Enter your password" className="px-3 py-2 border border-gray-900 rounded-lg"/><br />
                <input type="submit" value={submitButtonText} className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"/>
            </form>
        </div>
    );
};

export default ReusableForm;