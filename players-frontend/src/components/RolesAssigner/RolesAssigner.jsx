import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import RolesAssignerPure from './RolesAssignerPure'
import { shuffle, randArrayItem } from '../../utils/utils'

class RolesAssigner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfAssignedRoles: 0,
      rolesPool: [],
      assignedRole: null,
      isRoleHidden: true,
    }
  }

  componentDidMount = () => {
    this.newGame()
  }

  newGame = () => {
    const { numberOfPlayers, selectedRoles, complementRoles } = this.props

    this.setState({
      rolesPool: shuffle([
        ...selectedRoles,
        ...Array.from({ length: numberOfPlayers - selectedRoles.length }).map(
          () => randArrayItem(complementRoles)
        ),
      ]),
    })
  }

  assignRole = () => {
    if (this.state.rolesPool.length <= 0) return

    const newRoles = [...this.state.rolesPool]
    const assignedRole = newRoles.pop()
    this.setState({
      assignedRole,
      rolesPool: newRoles,
      numberOfAssignedRoles: this.state.numberOfAssignedRoles + 1,
      isRoleHidden: false,
    })
  }

  hideRole = () => {
    if (!this.state.isRoleHidden) {
      this.setState({
        isRoleHidden: true,
      })
    }
  }

  render() {
    const { numberOfPlayers, handleStopAssigning } = this.props
    const { assignedRole, isRoleHidden, numberOfAssignedRoles } = this.state

    return (
      <RolesAssignerPure
        numberOfPlayers={numberOfPlayers}
        numberOfAssignedRoles={numberOfAssignedRoles}
        assignedRole={assignedRole}
        isRoleHidden={isRoleHidden}
        handleStopAssigning={handleStopAssigning}
        handleAssignRole={this.assignRole}
        handleHideRole={this.hideRole}
      />
    )
  }
}

RolesAssigner.propTypes = {
  roles: PropTypes.array.isRequired,
  complementRoles: PropTypes.array.isRequired,
  selectedRoles: PropTypes.array.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  handleStopAssigning: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    roles: state.roles.data,
    selectedRoles: state.roles.data.filter((role) => role.listed),
    complementRoles: state.roles.data.filter((role) => role.complement),
  }
}

export default connect(mapStateToProps)(RolesAssigner)
