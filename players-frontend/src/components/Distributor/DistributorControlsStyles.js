export default {
  '@keyframes distributor-controls-disappear': {
    to: {
      opacity: '0',
      display: 'none',
    },
    from: {
      opacity: '1',
    },
  },
  hidden: {
    animation: `distributor-controls-disappear 1s forwards 1s`,
  },
  assignerButtons: {
    whiteSpace: 'nowrap',
    '&:first-child': {
      marginRight: 5,
    },
    '@media screen and (max-width: 768px)': {
      fontSize: 12,
    },
  },
}
