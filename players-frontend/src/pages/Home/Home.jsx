import React, { Fragment } from 'react'

import Controls from '@components/Controls'
import Distributor from '@components/Distributor'
import PropTypes from 'prop-types'
import RolesList from '@components/RolesList'

const Home = ({ isDistributing }) => {
  if (isDistributing) {
    return <Distributor />
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
