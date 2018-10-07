import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from "react-apollo"
import gql from "graphql-tag"

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

import RolesDealer from './RolesDealer'

import { shuffle, truncate } from '../utils/utils'

const styles = {
  loading: {
    color: 'red'
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
      dealingRoles: false
    }
  }

  loadCheckedRoles() {
    return {}
  }

  handleToggle (value) {
  }

  render () {
    const { classes } = this.props
    const { dealingRoles } = this.state

    return (
      <Query
        query={gql`
          {
            roles(lang: {code: "cs"}) {
              code,
              name,
              description
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (dealingRoles) return <RolesDealer roles={shuffle(data.roles)} />
          if (loading) return <CircularProgress className={classes.loading} size={30} thickness={5} />
          if (error) return <p>Error</p>

          return (
            <div>
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
                {data.roles.map(({ code, name, description }) => (
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
        }}
      </Query>
    )
  }
}

RolesList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RolesList)
