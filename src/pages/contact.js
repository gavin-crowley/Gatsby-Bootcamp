/* eslint-disable */

import React from 'react'
import Layout from '../components/layout'

import Head from '../components/head'

const Contact = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h3>Contact</h3>
            <p>Timothy Shores is a full-time full stack web development student at Lambda School. On Friday nights he enjoys staying in and watching Game of Thrones with his girlfriend and learning about GatsbyJS</p>
            <ul>
                <li>GitHub: <a href="https://github.com/timothyshores" target="_blank" rel="noopener noreferrer">@timothyshores</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/timothyshores/" target="_blank" rel="noopener noreferrer">Timothy Shores</a></li>
                <li>Twitter: <a href="https://twitter.com/timothymshores" target="_blank" rel="noopener noreferrer">@timothymshores</a></li>
            </ul>
        </Layout>
    )
}

export default Contact;