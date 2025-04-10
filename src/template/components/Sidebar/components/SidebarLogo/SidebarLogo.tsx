import logoCore from '../../../../../assets/img/logo-core.png'
import logoText from '../../../../../assets/img/logo-text.png'

// eslint-disable-next-line import/no-default-export
export default function SidebarLogo() {
  return (
    <a href="/employees"
      className="sidebar-logo">
      <img src={logoCore}
        alt="logo"
        className="sidebar-logo__image" />
      <div className="sidebar-logo__text-container">
        <img src={logoText}
          alt="logo-text"
          className="sidebar-logo__text" />
      </div>
    </a>
  )
}
