import {Component} from 'react'

import NxtSlideContext from '../../context/NxtSlideContext'
import './index.css'

class Slide extends Component {
  state = {
    headingActive: true,
    descriptionActive: true,
  }

  onClickHeading = () => {
    this.setState({headingActive: false})
  }

  onClickDescription = () => {
    this.setState({descriptionActive: false})
  }

  render() {
    const {headingActive, descriptionActive} = this.state
    return (
      <NxtSlideContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            changeDescription,
          } = value

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({headingActive: true})
          }

          const onBlurDescription = event => {
            if (event.target.value === '') {
              changeDescription('Description')
            }
            this.setState({descriptionActive: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            changeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {heading, description} = tabDetails

          return (
            <div className="slide-view-container">
              <div className="slide-container">
                {headingActive ? (
                  <h1 onClick={this.onClickHeading} className="slide-heading">
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    className="slide-heading-input"
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                  />
                )}
                {descriptionActive ? (
                  <p
                    onClick={this.onClickDescription}
                    className="slide-description"
                  >
                    {description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    className="slide-description-input"
                    onChange={onChangeDescription}
                    onBlur={onBlurDescription}
                  />
                )}
              </div>
            </div>
          )
        }}
      </NxtSlideContext.Consumer>
    )
  }
}

export default Slide
