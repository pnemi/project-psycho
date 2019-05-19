import React, { Fragment } from 'react'

import Controls from '@psycho/components/Controls'
import Distributor from '@psycho/components/Distributor'
import PropTypes from 'prop-types'
import RolesList from '@psycho/components/RolesList'

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
