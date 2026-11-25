
import { useState } from 'react';

function CustomerRegister() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formsubmit = (e) => {
    e.preventDefault();
    console.log(name, phone, email, password);
  }

  return (
    <>
      <h1>Customer Register</h1>

      <form onSubmit={formsubmit}>

        <label>Name:</label><br />
        <input type="text" id="name" required placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />

        <label>Phone Number:</label><br />
        <input type="tel" id="phone" required placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br /><br />

        <label>Email:</label><br />
        <input type="email" id="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />

        <label>Password:</label><br />
        <input type="password" id="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />

        <button type="submit">Register</button>

      </form>
    </>
  );
}

export default CustomerRegister;
