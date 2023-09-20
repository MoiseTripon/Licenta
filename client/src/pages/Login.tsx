// Login.js
import React from 'react';

export default function Login() {
  // const { user, login } = useAuth();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // Implement your login logic and call the login function
  //   login({ email, password });
  // };

  // if (user) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <div className="login-wrapper">
      <h1 className='text-3xl font-bold underline'>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    // Your login form and UI
  );
}
