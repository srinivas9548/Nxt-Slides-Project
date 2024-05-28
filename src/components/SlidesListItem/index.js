import {Component} from 'react'

import NxtSlideContext from '../../context/NxtSlideContext'

import './index.css'

class SlidesListItem extends Component {
  render() {
    const {slidesListDetails, serialNumber} = this.props
    const {heading, description} = slidesListDetails

    return (
      <NxtSlideContext.Consumer>
        {value => {
          const {activeIndex, changeActiveTab} = value
          const isActive = activeIndex === serialNumber - 1
          const activeClassName = isActive ? 'active' : ''

          const onClickSlideTab = () => {
            changeActiveTab(serialNumber - 1)
          }

          return (
            <li
              className={`slides-list-item ${activeClassName}`}
              onClick={onClickSlideTab}
              testid={`slideTab${serialNumber}`}
            >
              <p className="slide-number">{serialNumber}</p>
              <div className="slide-tab">
                <h1 className="tab-heading">{heading}</h1>
                <p className="tab-description">{description}</p>
              </div>
            </li>
          )
        }}
      </NxtSlideContext.Consumer>
    )
  }
}

export default SlidesListItem
