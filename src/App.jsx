import { useState } from 'react'
import './App.css'

function App() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")

  const [firstnameValid, setFirstnameValid] = useState(true)
  const [lastnameValid, setLastnameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)

  const handleCalculate = () => {
    if (firstname === "" || lastname === "" || email === "") {
      alert("Please fill the form completely!!!")
    } else if (!firstnameValid || !lastnameValid || !emailValid) {
      alert("Please enter valid details")
    } else {
      alert("Login successful!!")
    }
  }

  const handleValidation = (tag) => {
    const { value, name } = tag
    if (name === "firstname") {
      const isValid = /^[a-zA-Z'-]+(?:\s+[a-zA-Z'-]+)*$/.test(value)
      setFirstname(value)
      setFirstnameValid(isValid)
    } else if (name === "lastname") {
      const isValid = /^[a-zA-Z'-]+(?:\s+[a-zA-Z'-]+)*$/.test(value)
      setLastname(value)
      setLastnameValid(isValid)
    } else if (name === "email") {
      const isValid = /^\S+@\S+\.\S+$/.test(value)
      setEmail(value)
      setEmailValid(isValid)
    }
  }

  return (
    <div className="container" id="container">
      <div className="form-container sign-in">
        <form>
          <h1>Sign Up</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email</span>
          <input
            type="text"
            placeholder='First Name'
            id='firstname'
            value={firstname}
            name='firstname'
            onChange={tag => handleValidation(tag.target)}
          />
          {!firstnameValid && <div className='text-danger mb-3' style={{ color: 'red', fontSize: '10px', alignSelf: 'flex-start', paddingLeft: '15px' }}>*Invalid First Name</div>}

          <input
            type="text"
            placeholder='Last Name'
            id='lastname'
            value={lastname}
            name='lastname'
            onChange={tag => handleValidation(tag.target)}
          />
          {!lastnameValid && <div className='text-danger mb-3' style={{ color: 'red', fontSize: '10px', alignSelf: 'flex-start', paddingLeft: '15px' }}>*Invalid Last Name</div>}

          <input
            type="email"
            placeholder='Email'
            id='email'
            value={email}
            name='email'
            onChange={tag => handleValidation(tag.target)}
          />
          {!emailValid && <div className='text-danger mb-3' style={{ color: 'red', fontSize: '10px', alignSelf: 'flex-start', paddingLeft: '15px' }}>*Invalid Email Id</div>}

          <button onClick={handleCalculate}>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <button className="hidden" id="login">Sign Up</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome, Friend!</h1>
            <button className="hidden" id="register">Log In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
