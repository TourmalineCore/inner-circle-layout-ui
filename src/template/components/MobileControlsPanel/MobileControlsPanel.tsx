import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { ReactComponent as IconBurger } from '../../../assets/icons/icon-burger.svg'
import IconBurger from '../../../assets/icons/icon-burger.svg'
// import { ReactComponent as IconCross } from '../../../assets/icons/icon-cross.svg'
import IconCross from '../../../assets/icons/icon-cross.svg'

function MobileControlsPanel({
  prevPath,
  isToggled,
  onToggleClick = () => { },
}: {
  prevPath?: string | null,
  homePath?: string,
  isToggled: boolean,
  onToggleClick?: () => unknown,
}) {
  return (
    <div className="mobile-controls-panel">
      {prevPath ? (
        <Link to={prevPath}
          className="mobile-controls-panel__item">
          <FontAwesomeIcon className="mobile-controls-panel__item-icon"
            icon={faArrowLeft} />
        </Link>
      ) : (
        <div className="mobile-controls-panel__item" />
      )}

      <button
        type="button"
        className="mobile-controls-panel__item"
        onClick={onToggleClick}
      >
        <div className="mobile-controls-panel__item-icon">
          {!isToggled ? <img src={IconBurger} />
            : <img src={IconCross} />}
        </div>
      </button>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default MobileControlsPanel
