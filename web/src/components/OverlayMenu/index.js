import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import SearchIcon from '@iconify/icons-jam/search';
import BookmarkIcon from '@iconify/icons-jam/bookmark';
import WatchIcon from '@iconify/icons-jam/watch';
import UserIcon from '@iconify/icons-jam/user';
import HelpIcon from '@iconify/icons-jam/help';
import HeadsetIcon from '@iconify/icons-jam/headset';
import CloseIcon from '@iconify/icons-jam/close';

import { Container, Menu } from './styles';

function OverlayMenu({ visible }) {
  return (
    <Container>
      <Menu>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/search">
              <InlineIcon icon={SearchIcon} />
              Busca
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <InlineIcon icon={BookmarkIcon} />
              Favoritos
            </Link>
          </li>
          <li>
            <Link to="/alarms">
              <InlineIcon icon={WatchIcon} />
              Alarme
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <InlineIcon icon={UserIcon} />
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/help">
              <InlineIcon icon={HelpIcon} />
              Ajuda
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <InlineIcon icon={HeadsetIcon} />
              Contato
            </Link>
          </li>
        </ul>
        <div>
          <button type="button" onClick={() => visible(false)}>
            <Icon icon={CloseIcon} />
          </button>
        </div>
      </Menu>
    </Container>
  );
}

OverlayMenu.propTypes = {
  visible: PropTypes.func.isRequired,
};

export default OverlayMenu;
