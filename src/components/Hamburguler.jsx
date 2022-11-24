import React from 'react'

const Hamburguler = (props) => {
  const setMenuOpen = props.setMenuOpen
  return (
    <div className="hamburgler_container">
      <input type="checkbox" name="menu" id="menu" />
      <label for="menu">
        <div onClick={() => setMenuOpen((curr) => !curr)}>
          <svg
            className="hamburgler"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path class="top" d="M0 0H500V93H0V0Z" fill="black" />
            <path class="middle1" d="M0 204H500V297H0V204Z" fill="darkgrey" />
            <path class="middle2" d="M0 204H500V297H0V204Z" fill="hotpink" />
            <path class="bottom" d="M0 407H500V500H0V407Z" fill="black" />
          </svg>
        </div>
      </label>
    </div>
  )
}

export default Hamburguler
