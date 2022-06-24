import { useTheme } from 'styled-components';
import { Container, StyledText } from './style';

const Text = ({ children, center, margin, size, color, weight, hoverColor, onClickHandle }) => {
  const theme = useTheme();

  return (
    <Container onClick={onClickHandle} center={center} margin={margin}>
      <StyledText hoverColor={hoverColor} weight={weight} size={size} color={color}>
        {children}
      </StyledText>
    </Container>
  );
};

export default Text;
