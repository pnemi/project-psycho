export default {
  root: {
    padding: '0 0 20px 0',
  },
  infoWrapper: {
    textAlign: 'center',
    alignSelf: 'center',
    position: 'relative',
    flex: 1,
    maxWidth: 650,
    '@media screen and (max-width: 768px)': {
      maxWidth: 'none',
    },
  },
  stateInfo: {
    fontSize: '32px',
  },
  backButton: {
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  stepper: {
    background: 'none',
    justifyContent: 'center',
  },
}
