import styled from 'styled-components';

export const LoginStyled = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  max-width: 400px;
  border: 1px solid black;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 20px;
    max-width: 200px;
    margin-bottom: 20px;
  }

  button {
    width: 80px;
  }
`;
