export default {
  appBar: {
    margin: 0,
    background: '#38383A',
    borderBottom: '1px solid #5D5E5F',
  },
  toolbar: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center !important',
  },
  title: {
    lineHeight: '56px !important',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    textTransform: 'lowercase',
    '& a': {
      textDecoration: 'none',
      color: '#666',
    },
  },
  menuIcon: {
    color: '#DDD',
    visibility: 'hidden',
  },
}
