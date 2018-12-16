import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import classnames from 'classnames'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import { TextInputPicker } from '@components/Pickers'
import RolesAssigner from '@components/RolesAssigner'
import * as rolesActions from '@reducers/roles/rolesActions'
import { truncate } from '@utils/utils'
import { save } from '@utils/storage'

class RolesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfPlayers: 0,
      minNumberOfPlayers: 0,
      isAssigning: false,
    }
  }

  componentDidMount = () => {
    this.props.fetchRoles()
  }

  componentDidUpdate = (prevProps, prevState) => {
    const numberOfCheckedRoles = this.countMinimumPlayers()
    if (prevState.minNumberOfPlayers !== numberOfCheckedRoles) {
      this.setState({
        minNumberOfPlayers: numberOfCheckedRoles,
      })
      if (prevState.numberOfPlayers === 0) {
        this.setState({
          numberOfPlayers: numberOfCheckedRoles,
        })
      }
    }
  }

  countMinimumPlayers = () => {
    const { data: roles } = this.props
    return roles.reduce(
      (acc, role) => ~~(role.checked && !role.assignedDuringGame) + acc,
      0
    )
  }

  handlePlayButtonClick = () => {
    if (this.sufficientNumberOfPlayers()) {
      this.setState({
        isAssigning: true,
      })
    } else {
      this.setState({
        numberOfPlayers: this.countMinimumPlayers(),
      })
    }
  }

  handleStopAssigning = () => {
    this.setState({
      isAssigning: false,
    })
  }

  handleToggle = (role) => {
    if (!role.required) {
      save(`${role.code}.checked`, !role.checked)
      this.props.toggleRole(role.code)
    }
  }

  handleNumberOfPlayersChange = (e) => {
    const { value } = e.target
    this.setState({
      numberOfPlayers: Number(String(value).replace(/[^0-9]/, '')),
    })
  }

  sufficientNumberOfPlayers = () => {
    return this.state.numberOfPlayers >= this.state.minNumberOfPlayers
  }

  render() {
    const { numberOfPlayers, minNumberOfPlayers, isAssigning } = this.state
    const { data, loading, error, classes } = this.props

    if (isAssigning) {
      return (
        <RolesAssigner
          numberOfPlayers={numberOfPlayers}
          handleStopAssigning={this.handleStopAssigning}
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
          minNumberOfPlayers={minNumberOfPlayers}
          onChange={this.handleNumberOfPlayersChange}
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classnames({
            [classes.button]: true,
            [classes.refillButton]: !this.sufficientNumberOfPlayers(),
          })}
          onClick={this.handlePlayButtonClick}
        >
          {this.sufficientNumberOfPlayers()
            ? `Play`
            : `Set number of players to minimum of ${minNumberOfPlayers}`}
        </Button>
        <List className={classes.rolesList}>
          {data.map(
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
                onClick={() => this.handleToggle(roles[i])}
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
}

const mapStateToProps = (state) => ({
  data: state.roles.data
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
  data: PropTypes.array.isRequired,
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
