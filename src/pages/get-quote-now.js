import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetQuoteNow from '../components/GetQuoteNow'

const getQuoteNow = () => {
    return (
        <Layout>
            <Seo title="Used OEM Parts" />
            <GetQuoteNow />
        </Layout>
    )
}

export default getQuoteNow
