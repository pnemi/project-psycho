import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { injectIntl } from 'react-intl'
import styles from './DistributorControlsStyles'
import withStyles from 'react-jss'

const DistributorControls = ({
  intl,
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
      {intl.formatMessage({ id: 'APP.ASSIGN_ROLE' })}
    </Button>
    <Button
      variant="contained"
      color="secondary"
      className={classes.assignerButtons}
      size="large"
      onClick={handleHideRole}
      disabled={distributionState === 'DONE' || distributionState === 'HIDDEN'}
    >
      {intl.formatMessage({ id: 'APP.HIDE_ROLE' })}
    </Button>
  </Grid>
)

DistributorControls.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleAssignRole: PropTypes.func.isRequired,
  handleHideRole: PropTypes.func.isRequired,
  distributionState: PropTypes.string.isRequired,
}

export default injectIntl(withStyles(styles)(DistributorControls))
