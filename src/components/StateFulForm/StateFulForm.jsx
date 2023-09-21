import { useState } from "react";

const StateFulForm = () => {

    const [email, setEmail] = useState(null)

    const [name, setName] = useState(null)

    const [password, setPassword] = useState(null);

    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault()

        if (password.length < 6){
            setError('Password must be 6 char long')
        }
        else{
            setError('')
            console.log(name, email, password)
        }
    }

    const handleEmailChange = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }



    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleNameChange}
            type="text"
            name="name"
            placeholder="Name"
          />{" "}
          <br />
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id=""
          /> <br />
          <input type="submit" value="submit" />
          <br />
          {error && <p>{error}</p>}
        </form>
      </div>
    );
};

export default StateFulForm;