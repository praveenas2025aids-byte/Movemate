
import { useState } from 'react';

function DriverLogin() {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const formsubmit = (e) => {
    e.preventDefault();
    console.log(phone, password);
  }

  return (
    <>
      <h1>Driver Login</h1>

      <form onSubmit={formsubmit}>

        <label>Phone Number:</label><br />
        <input type="tel" id="phone" required placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br /><br />

        <label>Password:</label><br />
        <input type="password" id="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />

        <button type="submit">Login</button>

      </form>
    </>
  );
}

export default DriverLogin;
