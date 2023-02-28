import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { MainContainer, Content } from './LayoutNavigationStyles';
import { DrawerNavigation } from './DrawerNavigation';


function DrawerComponent() {
  const [isClose, setIsClose] = React.useState(true);
  const [mouseOnHoverDrawer, setMouseOnHoverDrawer] = React.useState(false);

  const handleChangeClose = useCallback(() => {
    setIsClose(oldValue => !oldValue);
  }, []);

  const handleChangeMouseOnhoverDrawer = useCallback((status) => {
    setMouseOnHoverDrawer(status);
  }, []);

  return (
    <>
      <DrawerNavigation
        isClose={isClose}
        handleCloseNavigation={handleChangeClose}
        handleChangeMouseOnhoverDrawer={handleChangeMouseOnhoverDrawer}
        mouseOnHoverDrawer={mouseOnHoverDrawer}
      />
      <MainContainer close={isClose}>


      </MainContainer>
    </>
  );
}

DrawerComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Drawer = DrawerComponent;
