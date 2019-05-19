export default {
  root: {
    marginTop: 15,
    marginBottom: 15,
  },
  step: {
    width: 'calc((100% / var(--steps)) - 5px)',
    height: 5,
    background: '#ccc',
    transition: 'background 1s',
  },
  activeStep: {
    background: 'red',
  },
}
