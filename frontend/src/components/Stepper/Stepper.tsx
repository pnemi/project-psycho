import withStyles, { WithSheet } from 'react-jss'

import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import styles from './styles'

const Stepper: React.FC<StepperProps> = ({ classes, steps, activeStep }) => (
  <Grid className={classes.root} container justify="space-between">
    {Array.from({ length: steps }).map((_, step) => (
      <div
        key={step}
        className={classnames({
          [classes.step]: true,
          [classes.activeStep]: step < activeStep,
        })}
      />
    ))}
  </Grid>
)

export interface StepperProps extends WithSheet<typeof styles> {
  steps: number
  activeStep: number
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
}

// @ts-ignore
export default withStyles(styles)(Stepper)
