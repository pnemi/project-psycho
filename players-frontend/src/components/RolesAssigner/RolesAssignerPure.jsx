import React, { Fragment } from 'react'

import ArrowBack from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button'
import DoneIcon from '@material-ui/icons/Done'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import Stepper from '../Stepper'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const RolesAssignerPure = ({
  classes,
  numberOfPlayers,
  numberOfAssignedRoles,
  stopRoleDistribution,
  handleAssignRole,
  handleHideRole,
  assignedRole,
  isRoleHidden,
  isAssigningDone,
}) => {
  const renderInfo = () => {
    if (isRoleHidden) {
      if (numberOfAssignedRoles >= numberOfPlayers) {
        return (
          <Typography className={classes.roleName} variant="h1">
            <DoneIcon /> Hotovo
          </Typography>
        )
      }
      return (
        <Typography className={classes.roleName} variant="h1">
          Vygeneruj si roli
        </Typography>
      )
    } else {
      return (
        <Fragment>
          <Typography className={classes.roleName} variant="h1">
            {assignedRole.name}
          </Typography>
          <Typography className={classes.roleDescription}>
            {assignedRole.description}
          </Typography>
        </Fragment>
      )
    }
  }

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="center"
      justify="space-between"
    >
      <IconButton
        className={classes.backButton}
        aria-label="Back"
        onClick={stopRoleDistribution}
      >
        <ArrowBack />
      </IconButton>
      <Grid
        container
        className={classes.roleInfo}
        direction="column"
        justify="center"
        alignItems="center"
      >
        {renderInfo()}
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        wrap="nowrap"
      >
        <Button
          variant="contained"
          color="primary"
          className={classes.assignerButtons}
          size="large"
          onClick={handleAssignRole}
          disabled={isAssigningDone || !isRoleHidden}
        >
          Přiřaď mi roli
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.assignerButtons}
          size="large"
          onClick={handleHideRole}
          disabled={isRoleHidden}
        >
          Schovej mou roli
        </Button>
      </Grid>
      <Stepper steps={numberOfPlayers} activeStep={numberOfAssignedRoles} />
    </Grid>
  )
}

RolesAssignerPure.propTypes = {
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  numberOfAssignedRoles: PropTypes.number.isRequired,
  assignedRole: PropTypes.object,
  isRoleHidden: PropTypes.bool.isRequired,
  isAssigningDone: PropTypes.bool.isRequired,
  stopRoleDistribution: PropTypes.func.isRequired,
  handleHideRole: PropTypes.func.isRequired,
  handleAssignRole: PropTypes.func.isRequired,
}

export default withStyles(styles)(RolesAssignerPure)
