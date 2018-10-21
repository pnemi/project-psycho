import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Stepper from './Stepper'

import { shuffle, randArrayItem } from '../utils/utils'

const styles = {
  root: {
    padding: '20px',
  },
  roleInfo: {
    textAlign: 'center',
    alignSelf: 'center',
    flex: '1',
  },
  roleName: {
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '15px'
  },
  roleDescription: {
    fontSize: '18px',
    fontWeight: '400'
  },
  button: {
    margin: '0 5px',
  },
  stepper: {
    background: 'none',
    justifyContent: 'center',
  }
}

class RolesAssigner extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rolesAssigned: 0,
      rolesPool: [],
      assignedRole: null,
      roleHidden: false
    }
  }

  componentDidMount() {
    this.newGame()
  }

  newGame() {
    const { numberOfPlayers, selectedRoles, complementRoles } = this.props

    this.setState({
      rolesPool: shuffle([
        ...selectedRoles,
        ...Array
          .from({ length: numberOfPlayers - selectedRoles.length })
          .map(() => randArrayItem(complementRoles))
      ])
    })

  }

  assignRole () {
    if (this.state.rolesPool.length <= 0) return

    const newRoles = [...this.state.rolesPool]
    const assignedRole = newRoles.pop()
    this.setState({
      assignedRole,
      rolesPool: newRoles,
      rolesAssigned: this.state.rolesAssigned + 1,
      roleHidden: false
    })
  }

  hideRole () {
    if (!this.state.roleHidden) {
      this.setState({
        roleHidden: true
      })
    }
  }

  render () {

    const { classes, numberOfPlayers } = this.props
    const { assignedRole, roleHidden, rolesAssigned } = this.state

    const roleInfo = (
      roleHidden
      ? ''
      : (
        assignedRole
        ? assignedRole.name
        : 'Vygeneruj si roli'
      )
    )

    const roleDescription = (
      roleHidden || !assignedRole
      ? ''
      : assignedRole.description
    )

    return (
      <Grid container className={classes.root} direction="column" alignItems="center" justify="space-between">
        <Grid container className={classes.roleInfo} direction="column" justify="center" alignItems="center">
          <Typography className={classes.roleName} variant="h1">
            {roleInfo}
          </Typography>
          <Typography className={classes.roleDescription} variant="subtitle1">
            {roleDescription}
          </Typography>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="large"
            onClick={() => this.assignRole()}
            disabled={assignedRole && !roleHidden}
          >
            Přiřaď mi roli
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size="large"
            onClick={() => this.hideRole()}
            disabled={!assignedRole || roleHidden}
          >
            Schovej mou roli
          </Button>
          <Stepper
            steps={numberOfPlayers}
            activeStep={rolesAssigned}
          />
        </Grid>

      </Grid>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    roles: state.roles.data,
    selectedRoles: state.roles.data.filter((role) => role.listed),
    complementRoles: state.roles.data.filter((role) => role.complement)
  }
}

RolesAssigner.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
  complementRoles: PropTypes.array.isRequired,
  selectedRoles: PropTypes.array.isRequired,
  numberOfPlayers: PropTypes.number.isRequired
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(RolesAssigner)
