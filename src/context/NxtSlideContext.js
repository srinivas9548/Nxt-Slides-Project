import React from 'react'

const NxtSlideContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  changeActiveTab: () => {},
  addNewSlide: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default NxtSlideContext
