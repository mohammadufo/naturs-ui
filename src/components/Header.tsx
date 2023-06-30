import Logo from '../assets/images/logo-white.png'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-box">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <div className="heading-primary-main">Outdoors</div>
          <div className="heading-primary-sub">is where life happens</div>
        </h1>

        <a href="#" className="btn btn-white btn-animated">
          Discover our tours
        </a>
      </div>
    </div>
  )
}

export default Header
