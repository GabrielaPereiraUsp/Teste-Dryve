import styled from 'styled-components';


export const Background = styled.div`
  display: ${props => (props.minimized ? 'none' : 'block')};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1025;
  background-color: rgba(0, 0, 0, 0.24);

`;

export const DrawerStyle = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1030;

  height: 100vh;
  padding-bottom: 0px;

  background-color: ${props => (props?.isDarkMode ? '#191919' : '#FFF')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.6);

  transform-origin: top left;
  transition: all 0.2s linear;

  >header {
    transform-origin: top left;
    transform: scaleX(${props => (props?.minimized === true ? 0 : '100%')});
  }

  >nav {
    transform: scaleX(${props => (props?.minimized === true ? 0 : '100%')});
    transform-origin: top left;
    transition: all 0.2s linear;
  }



    >nav {
      transform: scaleX(100%);

      a span {
        opacity: 0;
        transform: scaleX(0);
        transition-delay: 0.2s;
      }

      button span {
        opacity: 0;
        transform: scaleX(0);
        transform-origin: top left;
        transition: all 0.2s linear;
        transition-delay: 0.2s;
      }

      ul {
        display: none;

        a {
          opacity: 0;
        }
      }
    }

    :hover {
  

      >header  p {
        transform-origin: top left;
        transform: scaleX(100%);
     }

      >nav {
        a span{
          opacity: 1;
          transform: scaleX(100%);
        }

        button span {
          opacity: 1;
          transform: scaleX(100%);
        }

        ul {
          display: block;
          a {
            opacity: 1;
            transition: all 0.1s linear;
            transition-delay: 0.2s;
          }
        }
      }
    }
  }
`;

export const UserNavBar = styled.header`
  z-index: 100;
  display: flex;
  align-items: center;

  margin: 24px 16px;
  margin-bottom: 0;

  padding-bottom: 4px;
  border-bottom: 1px solid${props => (props?.isDarkMode ? '#3D3D3D' : '#A2A0A0')};

  z-index: 10;
  transition: all 0.25s linear;

  > img {
    width: 63px;
    min-width: 63px;
    height: 63px;
    min-height: 63px;
    border-radius: 50%;
    object-fit: cover;
  }

  > div p {
    display: block;
    margin-left: 16px;

    opacity: 1;
    font-size: 14px;
    white-space:nowrap;
    color: ${props => (props?.isDarkMode ? 'white' : 'black')};

    transform-origin: top left;
    transition: all 0.2s linear;
    transition-delay: 0.2s;
  }
`;

export const MobileActions = styled.div`
  display: flex;
  margin-left: 8px;

  button {
    padding: 5px;
    color: ${props => (props?.isDarkMode ? 'white' : 'black')};
  }

`;

export const NavBar = styled.nav`
  height: calc(100vh - 70px);
  overflow: auto;
  padding: 24px 16px;
  color: white;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #727171;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #626161;
  }
`;

export const Container = styled.nav`

  text-decoration: none;
  display: flex;
  align-items: center;


  >span {
    position: relative;
    left: 40px;
    vertical-align: middle;

    white-space:nowrap;

    transform-origin: top left;
    transform: scaleX(${props => (props?.minimized ? 0 : '100%')});

    }
    `;


