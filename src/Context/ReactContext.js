import React from 'react'

const ReactContext = React.createContext({
  isDark: false,
  getPrime: true,
  isActiveBar: 'home',
  savedList: [],
  isActivebar: () => {},
  onDark: () => {},
  getPrimeFnc: () => {},
  onSave: () => {},
})

export default ReactContext
