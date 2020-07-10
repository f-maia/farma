import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { InlineIcon } from '@iconify/react';
import HomeIcon from '@iconify/icons-jam/home';
import HeartFullIcon from '@iconify/icons-jam/heart-f';
import WatchIcon from '@iconify/icons-jam/watch';
import SearchIcon from '@iconify/icons-jam/search';
import UserIcon from '@iconify/icons-jam/user';
import MenuIcon from '@iconify/icons-jam/menu';

import OverlayMenu from '~/components/OverlayMenu';

import { Container, Item } from './styles';

function BottomNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {showMenu && <OverlayMenu visible={setShowMenu} />}
      <Container>
        <ul>
          <Item selected={pathname.includes('/home')}>
            <Link to="/home">
              <InlineIcon icon={HomeIcon} />
            </Link>
          </Item>
          <Item selected={pathname.includes('/favorites')}>
            <Link to="/favorites">
              <InlineIcon icon={HeartFullIcon} />
            </Link>
          </Item>
          <Item selected={pathname.includes('/alarms')}>
            <Link to="/alarms">
              <InlineIcon icon={WatchIcon} />
            </Link>
          </Item>
          <Item selected={pathname.includes('/search')}>
            <Link to="/search">
              <InlineIcon icon={SearchIcon} />
            </Link>
          </Item>
          <Item selected={pathname.includes('/profile')}>
            <Link to="/profile">
              <InlineIcon icon={UserIcon} />
            </Link>
          </Item>
          <Item>
            <button type="button" onClick={() => setShowMenu(true)}>
              <InlineIcon icon={MenuIcon} />
            </button>
          </Item>
        </ul>
      </Container>
    </>
  );
}

export default BottomNavbar;
