


export default function Navbar(props) {
  return (
    <>
<nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} navbar-full`}>
        
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" to="/">TextUtils</a>
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/about">About</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>

    {/* <form className="d-flex ms-auto" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode=='light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
</div>
 <div className={`form-check form-switch text-${props.greenmode=='light' ? 'green' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleModeGreen} id="switchCheckDefault2"/>
  <label className="form-check-label" htmlFor="switchCheckDefault2">Green Mode</label>
</div>
        <div className={`form-check form-switch text-${props.redmode=='light' ? 'red' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleModeRed} id="switchCheckDefault3"/>
  <label className="form-check-label" htmlFor="switchCheckDefault3">Red Mode</label>
</div>

  </div>
</nav>

</>
  )
}
// Navbar.propTypes = {
//   title : PropTypes.string
// }
// Navbar.defaultProps = {
//   title: 'Set titile'
// }
