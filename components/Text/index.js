import { useTheme } from 'styled-components';
import { Container, StyledText } from './style';

const Text = ({ children, center, margin, size, color, weight, hoverColor, onClickHandle, ellipsis, strikeout }) => {
  const theme = useTheme();

  return (
    <Container onClick={onClickHandle} center={center} margin={margin}>
      <StyledText strikeout={strikeout} hoverColor={hoverColor} weight={weight} size={size} color={color} ellipsis={ellipsis}>
        {children}
      </StyledText>
    </Container>
  );
};

export default Text;
