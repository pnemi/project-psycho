import React, { Fragment } from 'react'

import Controls from '@components/Controls'
import PropTypes from 'prop-types'
import RolesAssigner from '@components/RolesAssigner'
import RolesList from '@components/RolesList'

const Home = ({ isDistributing }) => {
  if (isDistributing) {
    return <RolesAssigner />
  }

  return (
    <Fragment>
      <Controls />
      <RolesList />
    </Fragment>
  )
}

Home.propTypes = {
  isDistributing: PropTypes.bool.isRequired,
}

export default Home
