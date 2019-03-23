import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import styles from './DistributorControlsStyles'
import { withStyles } from '@material-ui/core/styles'

const DistributorControls = ({
  classes,
  handleAssignRole,
  handleHideRole,
  distributionState,
}) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    wrap="nowrap"
    className={classnames({
      [classes.hidden]: distributionState === 'DONE',
    })}
  >
    <Button
      variant="contained"
      color="primary"
      className={classes.assignerButtons}
      size="large"
      onClick={handleAssignRole}
      disabled={distributionState === 'DONE' || distributionState !== 'HIDDEN'}
    >
      Přiřaď mi roli
    </Button>
    <Button
      variant="contained"
      color="secondary"
      className={classes.assignerButtons}
      size="large"
      onClick={handleHideRole}
      disabled={distributionState === 'HIDDEN'}
    >
      Schovej mou roli
    </Button>
  </Grid>
)

DistributorControls.propTypes = {
  classes: PropTypes.object.isRequired,
  handleAssignRole: PropTypes.func.isRequired,
  handleHideRole: PropTypes.func.isRequired,
  distributionState: PropTypes.string.isRequired,
}

export default withStyles(styles)(DistributorControls)
