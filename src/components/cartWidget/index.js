import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { styled } from '@material-ui/core/styles';

const CartWidget = ({ count }) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <Tooltip title="Abrir Carrito" overlap="rectangle">
      <IconButton aria-label="cart">
        <StyledBadge overlap="rectangular" badgeContent={count} color="secondary">
          <ShoppingCartIcon className="cart-icon" />
        </StyledBadge>
      </IconButton>
    </Tooltip>
  );
};
CartWidget.propTypes = {
  count: PropTypes.number.isRequired
};

export default CartWidget;
