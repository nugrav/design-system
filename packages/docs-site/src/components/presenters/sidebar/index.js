import React from 'react'
import PropTypes from 'prop-types'

import './sidebar.scss'

import { Nav } from '@royalnavy/react-component-library'

const Sidebar = ({ className, navItems, title }) => (
  <aside data-testid="wrapper" className={`sidebar ${className}`}>
    {title && title.length > 0 && (
      <span data-testid="title" className="sidebar__title">
        {title}
      </span>
    )}
    <Nav navItems={navItems} orientation="vertical" size="large" />
  </aside>
)

Sidebar.propTypes = {
  className: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.boolean,
      href: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  title: PropTypes.string,
}

Sidebar.defaultProps = {
  navItems: [],
  title: '',
  className: '',
}

export default Sidebar
