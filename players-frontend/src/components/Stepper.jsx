import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    marginTop: '15px',
  },
  step: {
    width: 'calc((100% / var(--steps)) - 5px)',
    height: '5px',
    background: '#ccc',
    transition: 'background 1s'
  },
  activeStep: {
    background: 'red'
  }
}

class Stepper extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    const { classes, steps, activeStep } = this.props

    return (
      <Grid className={classes.root} container justify="space-between">
        {Array.from({ length: steps }).map((_, step) => (
          <div
            key={step}
            className={classnames({
              [classes.step]: true,
              [classes.activeStep]: step < activeStep
            })}
            style={{
              '--steps': steps
            }}
          />
        ))}
      </Grid>
    )
  }
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired
}

export default withStyles(styles)(Stepper)
