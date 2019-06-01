import { SCREEN_MEDIUM } from '@psycho/constants/media-queries'

export default {
  name: {
    fontSize: '36px !important',
    fontWeight: '800 !important',
    marginBottom: '15px !important',
    [SCREEN_MEDIUM]: {
      fontSize: 22,
    },
  },
  description: {
    fontSize: '18px !important',
    color: '#A9A9A9',
    maxHeight: '30vh',
    marginTop: '15px !important',
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
