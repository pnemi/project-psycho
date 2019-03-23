import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import styles from './PlayButtonStyles'
import { withStyles } from '@material-ui/core/styles'

const PlayButton = ({
  isEnoughPlayers,
  classes,
  requiredNumberOfPlayers,
  changeNumberOfPlayers,
  startRoleDistribution,
}) => {
  const handlePlayButtonClick = () => {
    if (isEnoughPlayers) {
      startRoleDistribution()
    }
    changeNumberOfPlayers(requiredNumberOfPlayers)
  }

  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      className={classnames({
        [classes.button]: true,
        [classes.refillButton]: !isEnoughPlayers,
      })}
      onClick={handlePlayButtonClick}
    >
      {isEnoughPlayers
        ? `Play`
        : `Set number of players to minimum of ${requiredNumberOfPlayers}`}
    </Button>
  )
}

PlayButton.propTypes = {
  classes: PropTypes.object.isRequired,
  isEnoughPlayers: PropTypes.bool.isRequired,
  requiredNumberOfPlayers: PropTypes.number.isRequired,
  startRoleDistribution: PropTypes.func.isRequired,
  changeNumberOfPlayers: PropTypes.func.isRequired,
}

export default withStyles(styles)(PlayButton)
