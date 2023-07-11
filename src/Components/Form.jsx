import {useState} from 'react'
import "../styles/form.css"
import { Validation } from './Validation'
const Form = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword:""
        
    })
    const [errors, setErrors] = useState({})
    
    function handleInput(event) {
        const newObj = { ...values, [event.target.name]: event.target.value }
        setValues(newObj)
    }
    const handleValidation = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
      Validation(values)
      

    }
  return (
    
    <form className="maindiv" onSubmit={handleValidation}>
      <h1>REGISTER</h1>
      <div className="seconddiv">
        <label>Username</label>
        <br />
        <input type="username" placeholder="Username" onChange={(event) =>setValues(event.target.value)} />
              <p>{errors.username } </p>
        <br /> <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          onChange={handleInput}
        />
        <p>{errors.email}</p>
        <br /> <br />
        <label>Password</label>
        <br />
        <input type="password" placeholder="Password" onChange={handleInput} />
        <br />
        <p>{errors.password}</p>
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={handleInput}
        />
        <br />
        <p>{errors.confirmpassword}</p>
        <br />
        <button>RESIGTER NOW</button>
      </div>
    </form>
  );
}

export default Form