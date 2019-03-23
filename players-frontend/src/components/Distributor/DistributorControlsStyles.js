export default {
  hidden: {
    transition: 'opacity 0.5s',
    opacity: 0,
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
