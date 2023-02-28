import React from 'react';
import PropTypes from 'prop-types';
import {
  Background,
  MobileActions, NavBar, UserNavBar,
} from './DrawerStyles';
import { menuRoutes } from './MenuRoutes';
import { Dropdown } from './Dropdown';
import { DrawerStyle } from './DrawerStyles';
import { DrawerLink } from './DrawerLink';

function makeLink({
  pathItem, isClose, handleClickLink,
}) {

  return (
    <DrawerLink
      key={pathItem.text}
      Icon={pathItem?.Icon || null}
      to={pathItem.to}
      text={pathItem.text}
      iconColor={pathItem?.iconColor || null}
      isClose={isClose}
      onClick={() => handleClickLink(pathItem.name, pathItem.to)}
    />
  );
}

function makeDropdown({
  pathItem,
  isClose,
  isDarkMode,
  selectionName,
  activeSelectionName,
  handleClickLink,
  handleOpenDropdown,
  handleCloseNavigation,
  mouseOnHoverDrawer,
}) {

  return (
    <Dropdown
      key={pathItem.text}
      name={pathItem.name}
      Icon={pathItem.Icon}
      text={pathItem.text}
      iconColor={pathItem.iconColor}
      selectionName={selectionName}
      isDarkMode={isDarkMode}
      onClick={(e) => { handleOpenDropdown(e); handleCloseNavigation(); }}
      isActiveSelection={pathItem.name === activeSelectionName}
      isClose={isClose}
      mouseOnHoverDrawer={mouseOnHoverDrawer}
    >
      {pathItem.views.map(view => (
        <li key={`${pathItem.name}-${view.text}`}>

        </li>
      ))}
    </Dropdown>
  );
}


function DrawerNavigationComponent({
  isClose, handleCloseNavigation, handleChangeMouseOnhoverDrawer, mouseOnHoverDrawer,
}) {
  const [selectionName, setSelectionName] = React.useState('');
  const [userPicture, setUsePicture] = React.useState('');
  const [activeSelectionName, setActiveSelectionName] = React.useState('');

  function handleOpenDropdown(e) {
    if (e.currentTarget?.name === selectionName) {
      setSelectionName('');
    } else {
      setSelectionName(e.currentTarget?.name || '');
    }
  }

  function handleClickLink(activeDropdownName = '', pathname) {
    sessionStorage.setItem('menu-dropdown', activeDropdownName);
    setActiveSelectionName(activeDropdownName);

    handleCloseNavigation();
  }



  /**
   * Manter o último dropdown do menu que foi selecionado
   */
  React.useEffect(() => {
    const activeDropdown = sessionStorage.getItem('menu-dropdown');
    setActiveSelectionName(activeDropdown);
  }, []);

  return (
    <>
      <Background role="button" onClick={handleCloseNavigation} isClose={isClose} />
      <DrawerStyle
        isClose={isClose}
        isDarkMode={false}
        onMouseEnter={() => handleChangeMouseOnhoverDrawer(true)}
        onMouseLeave={() => handleChangeMouseOnhoverDrawer(false)}
      >
        <UserNavBar isDarkMode={false}>
          <img src={userPicture || ''} alt="Foto do perfil" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <MobileActions isDarkMode={false}>

            </MobileActions>
          </div>
        </UserNavBar>

        <NavBar>
          {menuRoutes.map((pathItem) => {
            if (pathItem?.views) {
              return makeDropdown({
                pathItem,
                isClose,
                selectionName,
                activeSelectionName,
                handleClickLink,
                handleOpenDropdown,
                handleCloseNavigation,
                mouseOnHoverDrawer,
              });
            }
            return makeLink({
              pathItem, isClose, handleClickLink,
            });
          })}
        </NavBar>
      </DrawerStyle>
    </>
  );
}

DrawerNavigationComponent.propTypes = {
  minimized: PropTypes.bool.isRequired,
  handleCloseNavigation: PropTypes.func.isRequired,
};

export const DrawerNavigation = React.memo(DrawerNavigationComponent);
