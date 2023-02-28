import styled from 'styled-components';


export const ButtonContainer = styled.button`

    background-color: transparent;

    i {

    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;

      padding-left: 40px;

      span {
        white-space: nowrap;
      }
    }
`;

export const ArrowIcon = styled.span`
  vertical-align: middle;
  width: 28px;
  height: 28px;
  color: ${props => (props.isDarkMode ? 'white' : '#707070')};
`;

export const DropdownList = styled.ul`
  max-height: ${props => (props.isOpen ? '1000px' : '0')};
  transform-origin: top left;
  transform: scaleY( ${props => (props.isOpen ? '100%' : '0')});
  transition: transform 0.1s linear, max-height 0.064ms linear;
`;
