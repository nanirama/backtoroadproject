const React = require("react")
const Layout = require("./src/layout/layout").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  replaceHeadComponents(removePreload(getHeadComponents()))
}

function removePreload (components) {
  return components.filter((component) => component.type !== 'link' && component.props && component.props.rel !== 'preload')
}
