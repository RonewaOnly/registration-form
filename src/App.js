import React,{ useState } from 'react'
function App() {
  const [values,setvalues] = useState({
    firstName:"",
    lastName:"",
    email: "",
  })
  const [submitted,setSubmitted] = useState(
    false
  )
  const [valid,setValid] = useState(false);
  const handleFirstNameInputChange = (event)=>{
    setvalues({...values,firstName: event.target.value})
  }
  const handleLastNameInputChange = (event)=>{
    setvalues({...values,lastName: event.target.value})
  }
  const handleEmailInputChange = (event)=>{
    setvalues({...values,email: event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    setSubmitted(true)
  }
  return (
    <div className="App">
      <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid?<div class="success-message">Success! Thank you for registering</div> : null} 
        <input
          disabled={submitted}
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName? <span id="first-name-error">Please enter a first name</span> : null} 
        <input
          disabled={submitted}
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName? <span id="last-name-error">Please enter a last name</span>:null}
        <input
          disabled={submitted}
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email?<span id="email-error">Please enter an email address</span>:null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
    </div>
  );
}

export default App;
