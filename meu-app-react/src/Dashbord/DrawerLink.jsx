import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './DrawerStyles';



function DrawerLinkComponent({
  text, Icon, iconColor, size, exact, isClose, isDarkMode, ...linkProps
}) {
  let activeIconColor = 'white';
  if (isDarkMode && iconColor) {
    activeIconColor = iconColor;
  }

  let defaultIconColor = '#707070';
  if (isDarkMode && iconColor) {
    defaultIconColor = iconColor;
  } else if (isDarkMode) {
    defaultIconColor = 'white';
  }

  return (
    <Container
      {...linkProps}
      exact={exact}
      isClose={isClose ? 1 : 0}
      $activeIconColor={activeIconColor}
      $defaultIconColor={defaultIconColor}
      $isDarkMode={isDarkMode}
    >
      {Icon && <i><Icon size={size} /></i>}
      <span>{text}</span>
    </Container>
  );
}


DrawerLinkComponent.propTypes = {
  text: PropTypes.string.isRequired,
  isClose: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  iconColor: PropTypes.string,
  Icon: PropTypes.elementType,
  exact: PropTypes.bool,
  size: PropTypes.number,
};

DrawerLinkComponent.defaultProps = {
  size: 25,
  exact: true,
  Icon: null,
  iconColor: null,
};


export const DrawerLink = DrawerLinkComponent;
