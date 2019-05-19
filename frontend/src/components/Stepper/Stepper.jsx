import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import styles from './styles'
import withStyles from 'react-jss'

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
