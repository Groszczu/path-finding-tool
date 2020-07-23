import styled from 'styled-components';

const Slider = styled.input.attrs(() => ({
  type: 'range',
}))`
  width: 90%;
  padding: .4em;
`;

export default Slider;