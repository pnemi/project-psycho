import React, { useState } from 'react'
import createUseStyles from 'react-jss-hook'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = createUseStyles({
  icon: {
    fill: 'white',
  },
  select: {
    minHeight: 'auto',
    '&:focus': {
      background: 'none',
    },
  },
  selectItem: {
    backgroundColor: 'none',
  },
})

const LanguageSwitch = () => {
  const classes = useStyles()
  const [lang, setLang] = useState('cs')

  return (
    <div>
      <Select
        value={lang}
        classes={{
          icon: classes.icon,
          select: classes.select,
        }}
        onChange={(e) => setLang(e.target.value)}
        disableUnderline
      >
        <MenuItem className={classes.selectItem} value="cs">
          CZ
        </MenuItem>
        <MenuItem className={classes.selectItem} value="en">
          EN
        </MenuItem>
      </Select>
    </div>
  )
}

export default LanguageSwitch
