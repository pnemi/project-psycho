import React, { Fragment, useState } from 'react'

import ArrowBack from '@material-ui/icons/ArrowBack'
import DistributorControls from './DistributorControls'
import DoneIcon from '@material-ui/icons/Done'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import RoleInfoCard from '@components/RoleInfoCard'
import Stepper from '../Stepper'
import Typography from '@material-ui/core/Typography'
import { getRolesDistributionPool } from '@utils/roles'
import { injectIntl } from 'react-intl'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const Distributor = ({
  intl,
  classes,
  stopRoleDistribution,
  numberOfPlayers,
  selectedRoles,
  complementRoles,
}) => {
  const [numberOfAssignedRoles, setNumberOfAssignedRoles] = useState(0)
  const [rolesPool, setRolesPool] = useState(
    getRolesDistributionPool(numberOfPlayers, selectedRoles, complementRoles)
  )
  const [assignedRole, setAssignedRole] = useState(null)
  const [distributionState, setDistributionState] = useState('HIDDEN')

  const handleAssignRole = () => {
    if (rolesPool.length <= 0) return

    const newRoles = [...rolesPool]
    const assignedRole = newRoles.pop()

    setAssignedRole(assignedRole)
    setRolesPool(newRoles)
    setNumberOfAssignedRoles(numberOfAssignedRoles + 1)
    setDistributionState('VISIBLE')
  }

  const handleHideRole = () => {
    if (distributionState !== 'HIDDEN') {
      if (rolesPool.length <= 0) {
        setDistributionState('DONE')
      } else {
        setDistributionState('HIDDEN')
      }
    }
  }

  const renderState = () => {
    switch (distributionState) {
      case 'DONE':
        return (
          <Typography className={classes.stateInfo} variant="h1">
            <DoneIcon /> {intl.formatMessage({ id: 'APP.DONE' })}
          </Typography>
        )
      case 'HIDDEN':
        return (
          <Typography className={classes.stateInfo} variant="h1">
            {intl.formatMessage({ id: 'APP.ASSIGN_YOURSELF_ROLE' })}
          </Typography>
        )
      case 'VISIBLE':
      default:
        return <RoleInfoCard role={assignedRole} />
    }
  }

  return (
    <Fragment>
      <IconButton
        className={classes.backButton}
        aria-label="Back"
        onClick={stopRoleDistribution}
      >
        <ArrowBack />
      </IconButton>
      <Grid
        container
        className={classes.infoWrapper}
        direction="column"
        justify="center"
        alignItems="center"
      >
        {renderState()}
      </Grid>
      <DistributorControls
        handleAssignRole={handleAssignRole}
        handleHideRole={handleHideRole}
        distributionState={distributionState}
      />
      <Stepper steps={numberOfPlayers} activeStep={numberOfAssignedRoles} />
    </Fragment>
  )
}

Distributor.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  stopRoleDistribution: PropTypes.func.isRequired,
  complementRoles: PropTypes.array.isRequired,
  selectedRoles: PropTypes.array.isRequired,
}

export default injectIntl(withStyles(styles)(Distributor))
