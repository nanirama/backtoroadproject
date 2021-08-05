import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GetQuoteNow from '../components/GetQuoteNow'

const getQuoteNow = () => {
    return (
        <Layout>
            <SEO title="Used OEM Parts" />
            <GetQuoteNow />
        </Layout>
    )
}

export default getQuoteNow
