import { Container, StyledButton } from './style';

const Button = ({ children }) => {
  return (
    <Container>
      <StyledButton>{children}</StyledButton>
    </Container>
  );
};

export default Button;
