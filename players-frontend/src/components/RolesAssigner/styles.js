export default {
  root: {
    padding: '0 0 20px 0',
  },
  roleInfo: {
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
    maxWidth: 650,
    '@media screen and (max-width: 768px)': {
      maxWidth: 'auto',
    },
  },
  roleName: {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 15,
    '@media screen and (max-width: 768px)': {
      fontSize: 22,
    },
  },
  roleDescription: {
    fontSize: 18,
    fontWeight: 400,
    color: '#A9A9A9',
    maxHeight: '30vh',
    overflow: 'auto',
    '@media screen and (max-width: 768px)': {
      fontSize: 14,
    },
  },
  backButton: {
    color: 'white',
    alignSelf: 'flex-start',
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
  stepper: {
    background: 'none',
    justifyContent: 'center',
  },
}
