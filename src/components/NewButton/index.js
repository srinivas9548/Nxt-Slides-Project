import {v4 as uuidv4} from 'uuid'

import NxtSlideContext from '../../context/NxtSlideContext'

import './index.css'

const NewButton = () => (
  <NxtSlideContext.Consumer>
    {value => {
      const {addNewSlide, changeActiveTab, activeIndex} = value

      const onClickAddButton = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewSlide(item)
        changeActiveTab(activeIndex + 1)
      }

      const onDoubleClickButton = () => {
        console.log('Hi')
      }

      return (
        <div>
          <button
            type="button"
            className="new-button"
            onClick={onClickAddButton}
            onDoubleClick={onDoubleClickButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="new-plus-icon"
            />
            <p className="new-text">New</p>
          </button>
        </div>
      )
    }}
  </NxtSlideContext.Consumer>
)

export default NewButton
