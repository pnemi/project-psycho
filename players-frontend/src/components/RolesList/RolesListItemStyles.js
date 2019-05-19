export default {
  rolesListItem: {
    padding: '15px 0',
  },
  distributedDuringGame: {
    '& span': {
      color: '#FDCC11',
    },
  },
  name: {
    marginRight: 6,
    fontSize: '1.5rem',
    '@media screen and (max-width: 576px)': {
      fontSize: '1rem',
    },
  },
  description: {
    '& p': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
}
