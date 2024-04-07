// import SimpleForm from "./Components/SimpleForm"
// import StatefulForm from "./Components/StatefulForm"
// import RefForm from "./Components/RefForm"
// import HookForm from "./Components/HookForm"

import ReusableForm from "./Components/ReusableForm"
const handleSignUpSubmit = data => {
  console.log(data)
}

const handleRegisterSubmit = data => {
  console.log(data)
}

function App() {

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign up'} submitButtonText={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h3>Sign Up Now</h3>
          <p>And claim your reward...</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Registration'} submitButtonText={'Register'} handleSubmit={handleRegisterSubmit}>
        <div>
          <h3>Register Now</h3>
          <p>And enjoy your bonus</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
