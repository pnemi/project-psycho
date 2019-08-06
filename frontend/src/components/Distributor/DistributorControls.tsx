import withStyles, { WithSheet } from 'react-jss'

import Button from '@material-ui/core/Button'
import { DistributorState } from './Distributor'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { compose } from 'recompose'
import styles from './DistributorControlsStyles'
import { useIntl } from 'react-intl'

const DistributorControls: React.FC<DistributorControlsProps> = ({
  classes,
  handleAssignRole,
  handleHideRole,
  distributionState,
}) => {
  const intl = useIntl()

  return (
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
        disabled={
          distributionState === 'DONE' || distributionState !== 'HIDDEN'
        }
      >
        {intl.formatMessage({ id: 'APP.ASSIGN_ROLE' })}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.assignerButtons}
        size="large"
        onClick={handleHideRole}
        disabled={
          distributionState === 'DONE' || distributionState === 'HIDDEN'
        }
      >
        {intl.formatMessage({ id: 'APP.HIDE_ROLE' })}
      </Button>
    </Grid>
  )
}

interface DistributorControlsProps extends WithSheet<typeof styles> {
  handleAssignRole: () => void
  handleHideRole: () => void
  distributionState: DistributorState
}

DistributorControls.propTypes = {
  classes: PropTypes.object.isRequired,
  handleAssignRole: PropTypes.func.isRequired,
  handleHideRole: PropTypes.func.isRequired,
  distributionState: PropTypes.string.isRequired,
}

export default compose(withStyles(styles))(DistributorControls)
