import React from 'react'

const Language = () => {
  return (
    <div>
        <ul className='nav-item navbar-nav'>
    <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#" value={'en'}>English</a></li>
            <li><a className="dropdown-item" href="#" value={'hi'}>Hindi</a></li>
            <li><a className="dropdown-item" value={'mr'}> Marathi</a></li>
          </ul>
        </li>
        </ul>
    </div>
  )
}

export default Language;
