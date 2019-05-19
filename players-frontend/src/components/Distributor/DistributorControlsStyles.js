import { SCREEN_MEDIUM } from '@psycho/constants/media-queries'

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
    [SCREEN_MEDIUM]: {
      fontSize: 12,
    },
  },
}
