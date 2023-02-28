import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Collapse } from '@material-ui/core';
import { ArrowIcon, ButtonContainer } from './DropdownStyles';


function DropdownComponent({
  text,
  children,
  iconColor,
  isDarkMode,
  Icon,
  size,
  name,
  selectionName,
  isActiveSelection,
  onClick,
  mouseOnHoverDrawer,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (name === selectionName) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [selectionName, name]);


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
    <div>
      <ButtonContainer
        type="button"
        name={name}
        className={isActiveSelection ? 'active' : ''}
        $activeIconColor={activeIconColor}
        $defaultIconColor={defaultIconColor}
        $isDarkMode={isDarkMode}
        onClick={onClick}
      >
        {Icon && <i><Icon size={size} /></i>}
        <div>
          <span>{text}</span>
          <ArrowIcon isDarkMode={isDarkMode}>
            <IoMdArrowDropdown size={24} />
          </ArrowIcon>
        </div>
      </ButtonContainer>
      <Collapse
        style={{ listStyle: 'none' }}
        timeout={{ enter: 800, exit: 400 }}
        orientation="vertical"
        in={mouseOnHoverDrawer ? isOpen : false}
      >
        {children}
      </Collapse>
    </div>
  );
}

DropdownComponent.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  selectionName: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  Icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.number,
  isActiveSelection: PropTypes.bool,
};

DropdownComponent.defaultProps = {
  size: 25,
  isActiveSelection: false,
};


export const Dropdown = DropdownComponent;
