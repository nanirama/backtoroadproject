import React from "react"
import Email from "../components/Email"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = (props) => (
  <Layout pdata={props}>
    <SEO title="Contact Us" />
    <Email />
  </Layout>
)

export default Contact
