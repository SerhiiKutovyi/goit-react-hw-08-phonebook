import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operation';
import { LoginStyled } from './Login.styleds';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = eve => {
    eve.preventDefault();

    const form = eve.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(signIn({ email, password }));
  };
  return (
    <LoginStyled>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" placeholder="Email" />

        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    </LoginStyled>
  );
};

export default Login;
