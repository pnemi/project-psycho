import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { injectIntl } from 'react-intl'
import styles from './PlayButtonStyles'
import { withStyles } from '@material-ui/core/styles'

const PlayButton = ({
  intl,
  classes,
  isEnoughPlayers,
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
        ? intl.formatMessage({ id: 'APP.PLAY' })
        : `${intl.formatMessage({
            id: 'APP.SET_MINIMUM_NUMBER_OF_PLAYERS',
          })} (${requiredNumberOfPlayers})`}
    </Button>
  )
}

PlayButton.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  isEnoughPlayers: PropTypes.bool.isRequired,
  requiredNumberOfPlayers: PropTypes.number.isRequired,
  startRoleDistribution: PropTypes.func.isRequired,
  changeNumberOfPlayers: PropTypes.func.isRequired,
}

export default injectIntl(withStyles(styles)(PlayButton))
