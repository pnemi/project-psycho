import withStyles, { WithSheet } from 'react-jss'

import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { compose } from 'recompose'
import styles from './PlayButtonStyles'
import { useIntl } from 'react-intl'

const PlayButton: React.FC<PlayButtonProps> = ({
  classes,
  isEnoughPlayers,
  requiredNumberOfPlayers,
  changeNumberOfPlayers,
  startRoleDistribution,
}) => {
  const intl = useIntl()

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

interface PlayButtonProps extends WithSheet<typeof styles> {
  isEnoughPlayers: boolean
  requiredNumberOfPlayers: number
  changeNumberOfPlayers: Function
  startRoleDistribution: Function
}

PlayButton.propTypes = {
  classes: PropTypes.object.isRequired,
  isEnoughPlayers: PropTypes.bool.isRequired,
  requiredNumberOfPlayers: PropTypes.number.isRequired,
  startRoleDistribution: PropTypes.func.isRequired,
  changeNumberOfPlayers: PropTypes.func.isRequired,
}

export default compose(withStyles(styles))(PlayButton)
