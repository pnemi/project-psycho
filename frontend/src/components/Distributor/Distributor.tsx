import { InjectedIntl, injectIntl } from 'react-intl'
import React, { Fragment, useState } from 'react'
import withStyles, { WithSheet } from 'react-jss'

import ArrowBack from '@material-ui/icons/ArrowBack'
import DistributorControls from './DistributorControls'
import DoneIcon from '@material-ui/icons/Done'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import RoleInfoCard from '@psycho/components/RoleInfoCard'
import Stepper from '../Stepper'
import { TeamDictionary } from '@psycho/store/teams/teamsActions'
import Typography from '@material-ui/core/Typography'
import { compose } from 'recompose'
import { getRolesDistributionPool } from '@psycho/utils/roles'
import styles from './styles'

const Distributor: React.FC<DistributorProps> = ({
  intl,
  classes,
  stopRoleDistribution,
  numberOfPlayers,
  selectedRoles,
  complementRoles,
  teams,
}) => {
  const [numberOfAssignedRoles, setNumberOfAssignedRoles] = useState<number>(0)
  const [rolesPool, setRolesPool] = useState<Array<Role>>(
    getRolesDistributionPool(numberOfPlayers, selectedRoles, complementRoles)
  )
  const [assignedRole, setAssignedRole] = useState<Role>(null)
  const [distributionState, setDistributionState] = useState<DistributorState>(
    'HIDDEN'
  )

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
          <Typography className={classes.stateInfo}>
            <DoneIcon /> {intl.formatMessage({ id: 'APP.DONE' })}
          </Typography>
        )
      case 'HIDDEN':
        return (
          <Typography className={classes.stateInfo}>
            {intl.formatMessage({ id: 'APP.ASSIGN_YOURSELF_ROLE' })}
          </Typography>
        )
      case 'VISIBLE':
      default:
        return (
          <RoleInfoCard role={assignedRole} team={teams[assignedRole.team]} />
        )
    }
  }

  return (
    <Fragment>
      <Grid
        container
        className={classes.infoWrapper}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <IconButton
          className={classes.backButton}
          aria-label="Back"
          onClick={stopRoleDistribution}
        >
          <ArrowBack />
        </IconButton>
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

export type DistributorState = 'DONE' | 'HIDDEN' | 'VISIBLE'

interface DistributorProps extends WithSheet<typeof styles> {
  intl: InjectedIntl
  stopRoleDistribution: () => void
  numberOfPlayers: number
  complementRoles: Array<Role>
  selectedRoles: Array<Role>
  teams: TeamDictionary
}

Distributor.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  stopRoleDistribution: PropTypes.func.isRequired,
  complementRoles: PropTypes.array.isRequired,
  selectedRoles: PropTypes.array.isRequired,
  teams: PropTypes.object.isRequired,
}

export default compose(
  injectIntl,
  withStyles(styles)
)(Distributor)
