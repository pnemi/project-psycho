import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import Stepper from '../Stepper'

const RolesAssignerPure = ({
  classes,
  numberOfPlayers,
  numberOfAssignedRoles,
  handleStopAssigning,
  handleAssignRole,
  handleHideRole,
  assignedRole,
  isRoleHidden,
}) => (
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
      onClick={handleStopAssigning}
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
      <Typography className={classes.roleName} variant="h1">
        {isRoleHidden ? 'Vygeneruj si roli' : assignedRole.name}
      </Typography>
      <Typography className={classes.roleDescription}>
        {!isRoleHidden && assignedRole.description}
      </Typography>
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
        disabled={assignedRole && !isRoleHidden}
      >
        Přiřaď mi roli
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.assignerButtons}
        size="large"
        onClick={handleHideRole}
        disabled={!assignedRole || isRoleHidden}
      >
        Schovej mou roli
      </Button>
    </Grid>
    <Stepper steps={numberOfPlayers} activeStep={numberOfAssignedRoles} />
  </Grid>
)

RolesAssignerPure.propTypes = {
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  numberOfAssignedRoles: PropTypes.number.isRequired,
  assignedRole: PropTypes.object,
  isRoleHidden: PropTypes.bool.isRequired,
  handleStopAssigning: PropTypes.func.isRequired,
  handleHideRole: PropTypes.func.isRequired,
  handleAssignRole: PropTypes.func.isRequired,
}

export default withStyles(styles)(RolesAssignerPure)
