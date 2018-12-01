export default {
  appBar: {
    margin: 0,
    background: '#38383A',
    borderBottom: '1px solid #5D5E5F',
    boxShadow: 'none',
  },
  toolbar: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    textTransform: 'uppercase',
    '& a': {
      textDecoration: 'none',
      color: '#666',
    },
  },
  menuIcon: {
    color: '#DDD',
  },
}
