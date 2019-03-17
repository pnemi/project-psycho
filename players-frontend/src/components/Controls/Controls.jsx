import React, { Fragment } from 'react'

import PlayButton from '@components/Buttons/PlayButton'
import PropTypes from 'prop-types'
import { TextInputPicker } from '@components/Pickers'

const Controls = ({
  changeNumberOfPlayers,
  numberOfPlayers,
  requiredNumberOfPlayers,
  startRoleDistribution,
}) => {
  const handleNumberOfPlayersChange = (e) => {
    const { value } = e.target
    changeNumberOfPlayers(Number(String(value).replace(/[^0-9]/, '')))
  }

  const isEnoughPlayers = numberOfPlayers >= requiredNumberOfPlayers

  return (
    <Fragment>
      <TextInputPicker
        numberOfPlayers={numberOfPlayers}
        onChange={handleNumberOfPlayersChange}
      />
      <PlayButton
        isEnoughPlayers={isEnoughPlayers}
        requiredNumberOfPlayers={requiredNumberOfPlayers}
        startRoleDistribution={startRoleDistribution}
      />
    </Fragment>
  )
}

Controls.propTypes = {
  numberOfPlayers: PropTypes.number.isRequired,
  requiredNumberOfPlayers: PropTypes.number.isRequired,
  changeNumberOfPlayers: PropTypes.func.isRequired,
  startRoleDistribution: PropTypes.func.isRequired,
}

export default Controls
