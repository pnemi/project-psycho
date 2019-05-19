import { SCREEN_MEDIUM } from '@psycho/constants/media-queries'

export default {
  name: {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 15,
    [SCREEN_MEDIUM]: {
      fontSize: 22,
    },
  },
  description: {
    fontSize: 18,
    fontWeight: 400,
    color: '#A9A9A9',
    maxHeight: '30vh',
    marginTop: 15,
    overflow: 'auto',
    [SCREEN_MEDIUM]: {
      fontSize: 14,
    },
    '&::-webkit-scrollbar': {
      '-webkit-appearance': 'none',
      width: 6,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, .5)',
    },
  },
}