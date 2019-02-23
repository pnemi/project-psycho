import React, { useEffect, useState } from 'react'
import { randArrayItem, shuffle } from '@utils/utils'

import PropTypes from 'prop-types'
import RolesAssignerPure from './RolesAssignerPure'
import { connect } from 'react-redux'

const RolesAssigner = ({
  numberOfPlayers,
  handleStopAssigning,
  selectionRoles,
  complementRoles,
}) => {
  const [numberOfAssignedRoles, setNumberOfAssignedRoles] = useState(0)
  const [rolesPool, setRolesPool] = useState([])
  const [assignedRole, setAssignedRole] = useState(null)
  const [isRoleHidden, setIsRoleHidden] = useState(true)

  const newGame = () =>
    setRolesPool(
      shuffle([
        ...selectionRoles,
        ...Array.from({ length: numberOfPlayers - selectionRoles.length }).map(
          () => randArrayItem(complementRoles)
        ),
      ])
    )

  useEffect(newGame, [])

  const assignRole = () => {
    if (rolesPool.length <= 0) return

    const newRoles = [...rolesPool]
    const assignedRole = newRoles.pop()

    setAssignedRole(assignedRole)
    setRolesPool(newRoles)
    setNumberOfAssignedRoles(numberOfAssignedRoles + 1)
    setIsRoleHidden(false)
  }

  const hideRole = () => {
    if (!isRoleHidden) {
      setIsRoleHidden(true)
    }
  }

  return (
    <RolesAssignerPure
      numberOfPlayers={numberOfPlayers}
      numberOfAssignedRoles={numberOfAssignedRoles}
      assignedRole={assignedRole}
      isRoleHidden={isRoleHidden}
      isAssigningDone={numberOfAssignedRoles >= numberOfPlayers}
      handleStopAssigning={handleStopAssigning}
      handleAssignRole={assignRole}
      handleHideRole={hideRole}
    />
  )
}

RolesAssigner.propTypes = {
  roles: PropTypes.array.isRequired,
  complementRoles: PropTypes.array.isRequired,
  selectionRoles: PropTypes.array.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  handleStopAssigning: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    roles: state.roles.data,
    selectionRoles: state.roles.data.filter(
      (role) => role.checked && !role.assignedDuringGame
    ),
    complementRoles: state.roles.data.filter((role) => role.complement),
  }
}

export default connect(mapStateToProps)(RolesAssigner)
