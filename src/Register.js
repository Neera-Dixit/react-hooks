import React, { useState } from 'react';

const initialUserState = {
  username: "",
  email: "",
  password: ""
};

export default function Reg() {
  const [user, setUser] = useState(initialUserState);

  const handleChange = event => setUser({
    // doesnt merge like class components
    ...user,
    [event.target.name]: event.target.value
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(initialUserState);
  };

  return (
   <div style={{textAlign: 'center'}}>
     <h2>Register</h2>
     <form style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}} onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" name="username" value={user.username} onChange={handleChange} />
      <input type="email" placeholder="Email address" name="email" value={user.email} onChange={handleChange} />
      <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
      <button type="submit">Register</button>
     </form>

    { user && JSON.stringify(user) }
   </div>
  )
}