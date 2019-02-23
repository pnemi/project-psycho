import * as rolesActions from '@reducers/roles/rolesActions'

import React, { Fragment, useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import RolesAssigner from '@components/RolesAssigner'
import { TextInputPicker } from '@components/Pickers'
import classnames from 'classnames'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { save } from '@utils/storage'
import styles from './styles'
import { truncate } from '@utils/utils'
import { withStyles } from '@material-ui/core/styles'

const RolesList = ({
  roles,
  loading,
  error,
  classes,
  fetchRoles,
  toggleRole,
}) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0)
  const [requiredNumberOfPlayers, setRequiredNumberOfPlayers] = useState(0)
  const [isAssigning, setIsAssigning] = useState(false)

  const countCheckedRoles = () =>
    roles.reduce(
      (acc, role) => ~~(role.checked && !role.assignedDuringGame) + acc,
      0
    )

  useEffect(() => {
    fetchRoles()
  }, [])

  useEffect(() => {
    const checkedRoles = countCheckedRoles()
    setRequiredNumberOfPlayers(checkedRoles)
    if (numberOfPlayers === 0) {
      setNumberOfPlayers(countCheckedRoles(checkedRoles))
    }
  }, [roles])

  const isEnoughPlayers = () => numberOfPlayers >= requiredNumberOfPlayers

  const handlePlayButtonClick = () => {
    if (isEnoughPlayers()) {
      setIsAssigning(true)
    } else {
      setNumberOfPlayers(countCheckedRoles())
    }
  }

  const handleStopAssigning = () => setIsAssigning(false)

  const handleToggleRole = (role) => {
    if (!role.required) {
      save(`${role.code}.checked`, !role.checked)
      toggleRole(role.code)
    }
  }

  const handleNumberOfPlayersChange = (e) => {
    const { value } = e.target
    setNumberOfPlayers(Number(String(value).replace(/[^0-9]/, '')))
  }

  if (isAssigning) {
    return (
      <RolesAssigner
        numberOfPlayers={numberOfPlayers}
        handleStopAssigning={handleStopAssigning}
      />
    )
  }

  if (loading) {
    return (
      <CircularProgress className={classes.loading} size={30} thickness={5} />
    )
  }

  if (error) {
    return <p className={classes.error}>{error.message}</p>
  }

  return (
    <Fragment>
      <TextInputPicker
        numberOfPlayers={numberOfPlayers}
        requiredNumberOfPlayers={requiredNumberOfPlayers}
        onChange={handleNumberOfPlayersChange}
      />
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classnames({
          [classes.button]: true,
          [classes.refillButton]: !isEnoughPlayers(),
        })}
        onClick={handlePlayButtonClick}
      >
        {isEnoughPlayers()
          ? `Play`
          : `Set number of players to minimum of ${requiredNumberOfPlayers}`}
      </Button>
      <List className={classes.rolesList}>
        {roles.map(
          (
            {
              order,
              code,
              name,
              description,
              checked,
              required,
              assignedDuringGame,
            },
            i,
            roles
          ) => (
            <ListItem
              key={code}
              role={undefined}
              dense
              button
              onClick={() => handleToggleRole(roles[i])}
            >
              <Checkbox
                disabled={required}
                checked={checked}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText
                primary={name}
                secondary={truncate(description, 40)}
                className={classnames({
                  [classes.assignedDuringGame]: assignedDuringGame,
                })}
              />
            </ListItem>
          )
        )}
      </List>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  roles: state.roles.data
    .filter((role) => role.listed)
    .sort((prevRole, currRole) => prevRole.order - currRole.order)
    .sort((prevRole, currRole) => prevRole.required - currRole.required),
  loading: state.roles.loading,
  error: state.roles.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchRoles: () => dispatch(rolesActions.fetchRoles()),
  toggleRole: (code) => dispatch(rolesActions.toggleRole(code)),
})

RolesList.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  fetchRoles: PropTypes.func.isRequired,
  toggleRole: PropTypes.func.isRequired,
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(RolesList)
