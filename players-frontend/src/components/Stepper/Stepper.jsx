import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

const Stepper = ({ classes, steps, activeStep }) => (
  <Grid className={classes.root} container justify="space-between">
    {Array.from({ length: steps }).map((_, step) => (
      <div
        key={step}
        className={classnames({
          [classes.step]: true,
          [classes.activeStep]: step < activeStep,
        })}
        style={{
          '--steps': steps,
        }}
      />
    ))}
  </Grid>
)

Stepper.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
}

export default withStyles(styles)(Stepper)
