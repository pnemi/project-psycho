import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

import NumberOfPlayersPicker from './NumberOfPlayersPicker'
import RolesAssigner from './RolesAssigner'
import * as rolesActions from '../reducers/rolesActions'
import { shuffle, truncate } from '../utils/utils'

const styles = {
  loading: {
    color: 'red',
    alignSelf: 'center'
  },
  error: {
    alignSelf: 'center'
  },
  playButton: {
    boxShadow: 'none',
    width: '100%',
    marginTop: '15px'
  }
}

class RolesList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      checked: this.loadCheckedRoles(),
      numberOfPlayers: null,
      dealingRoles: false
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return true
  }

  componentDidMount = () => {
    this.props.fetchRoles()
  }

  loadCheckedRoles = () => {
    return {}
  }

  handleToggle = (value) => {
  }

  handleNumberOfPlayersChange = (numberOfPlayers) => {
    this.setState({
      numberOfPlayers
    })
  }

  render () {

    const { dealingRoles } = this.state
    const { data, loading, error, classes } = this.props

    if (dealingRoles) {
      return <RolesAssigner roles={shuffle(data.roles)} />
    }

    if (loading) {
      return <CircularProgress className={classes.loading} size={30} thickness={5} />
    }

    if (error) {
      return <p className={classes.error}>{error.message}</p>
    }

    return (
      <div>
        <NumberOfPlayersPicker onChange={this.handleNumberOfPlayersChange} />
        <Button
          variant="contained"
          size="large"
          color="secondary"
          className={classes.playButton}
          onClick={() => this.setState({
            dealingRoles: true
          })}
        >
          Play
        </Button>
        <List>
          {data.map(({ code, name, description }) => (
            <ListItem
              key={code}
              role={undefined}
              dense
              button
              onClick={() => this.handleToggle(code)}
              className={classes.listItem}
            >
              <Checkbox
                checked
                tabIndex={-1}
                disableRipple
              />
            <ListItemText
              primary={name}
              secondary={truncate(description, 40)}
            />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.roles.data,
    loading: state.roles.loading,
    error: state.roles.error
  }
}

const mapDispatchToProps = (dispatch, { client }) => ({
  fetchRoles: () => dispatch(rolesActions.fetchRoles(client))
})

RolesList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  fetchRoles: PropTypes.func.isRequired
}

export default compose(
  withApollo,
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(RolesList)
