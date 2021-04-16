import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useRoomUsers } from '@src/modules/room-users/RoomUsersContext';
import { Typography, IconButton } from '@material-ui/core';

interface RoomUserCounterProps {
  onClick?: VoidFunction;
}

const RoomUserCounter = React.memo<RoomUserCounterProps>(
  function RoomUserCounter({ onClick }) {
    const { roomUsers } = useRoomUsers();

    const content = (
      <Typography component="span" color="primary" variant="body2">
        <VisibilityIcon />
        {roomUsers.length}
      </Typography>
    );

    if (!onClick) {
      return content;
    }

    return <IconButton onClick={onClick}>{content}</IconButton>;
  },
);

export default RoomUserCounter;
