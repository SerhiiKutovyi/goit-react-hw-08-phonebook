import { useDispatch } from 'react-redux';
import { signUp } from 'redux/operation';
import { FormStyled } from './Register.styleds';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = eve => {
    eve.preventDefault();
    const form = eve.target;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(signUp({ name, email, password }));

    form.reset();
  };

  return (
    <FormStyled>
      <form onSubmit={handleSubmit} /*autoComplete="off"*/>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          placeholder="Username"
          // value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={handleChange}
        />
        <label htmlFor="email"> Email </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          // value={name}
          required
          // onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          // value={name}
          required
          // onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </FormStyled>
  );
};

export default Register;
