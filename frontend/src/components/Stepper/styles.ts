import { StepperProps } from './Stepper'

export default {
  root: {
    marginTop: 15,
    marginBottom: 15,
  },
  step: {
    width: (props: StepperProps) => `calc((100% / ${props.steps}) - 5px)`,
    height: 5,
    background: '#ccc',
    transition: 'background 1s',
  },
  activeStep: {
    background: 'red',
  },
}
