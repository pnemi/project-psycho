import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = {

}

class RolesAssigner extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rolesDistributed: 0,
      rolesTotal: props.roles.length,
      roles: props.roles,
      assignedRole: null,
      roleHidden: false
    }
  }

  assignRole () {
    if (this.state.roles.length <= 0) return

    const newRoles = [...this.state.roles]
    const assignedRole = newRoles.pop()
    this.setState({
      assignedRole,
      roles: newRoles,
      rolesDistributed: this.state.rolesDistributed + 1,
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

    const { classes } = this.props
    const { assignedRole } = this.state

    const roleInfo = (
      this.state.roleHidden
      ? '–'
      : (
        assignedRole
        ? assignedRole.name
        : 'Vygeneruj si roli'
      )
    )

    return (
      <div>
        <div>
          {this.state.rolesDistributed} / {this.state.rolesTotal}
        </div>
        <div>
          {roleInfo}
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="large"
          onClick={() => this.assignRole()}
        >
          Přiřaď mi roli
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          size="large"
          onClick={() => this.hideRole()}
        >
          Schovej mou roli
        </Button>
      </div>
    )
  }

}

RolesAssigner.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired
}

export default withStyles(styles)(RolesAssigner)
