import React from "react"
import PropTypes from "prop-types"

import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({ children }) => {
  const {user, firebase, loading} = useAuth();
  return (
      {children}
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
