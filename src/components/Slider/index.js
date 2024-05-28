import {Component} from 'react'

import NxtSlideContext from '../../context/NxtSlideContext'
import SlidesListItem from '../SlidesListItem'
import Slide from '../Slide'
import './index.css'

class Slider extends Component {
  render() {
    return (
      <NxtSlideContext.Consumer>
        {value => {
          const {initialList} = value

          return (
            <div className="slides-container">
              <ol className="slides-list-container">
                {initialList.map((eachSlide, index) => (
                  <SlidesListItem
                    key={eachSlide.id}
                    slidesListDetails={eachSlide}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </NxtSlideContext.Consumer>
    )
  }
}

export default Slider
