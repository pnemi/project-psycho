import { SCREEN_MEDIUM } from '@psycho/constants/media-queries'

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
    [SCREEN_MEDIUM]: {
      maxWidth: 'none',
    },
  },
  stateInfo: {
    fontSize: '32px !important',
  },
  backButton: {
    color: 'white !important',
    position: 'absolute !important',
    top: 0,
    left: 0,
  },
  stepper: {
    background: 'none',
    justifyContent: 'center',
  },
}
