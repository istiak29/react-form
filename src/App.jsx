
import './App.css'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {

  const handleSignUpForm = data => {
    console.log(data)
  }

  const handleUpdateForm = data =>{
    console.log(data)
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      <ReuseableForm
        handleSubmit={handleSignUpForm}
        formTitle={"Sign Up"}
      >
        <div>
          <p>
            Please Sign Up!
          </p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        handleSubmit={handleUpdateForm}
        formTitle={"Update Profile"}
        submitBtnText="Update"
      >
        <div>
          <p>Update your profile as soon as possible</p>
        </div>
      </ReuseableForm>
    </>
  );
}

export default App
