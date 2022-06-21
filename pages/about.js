import React from 'react'
import AboutBrand from '../components/About/AboutBrand'
import AboutBreadcrumb from '../components/About/AboutBreadcrumb'
import AboutCounter from '../components/About/AboutCounter'
import AboutSection from '../components/About/AboutSection'
import AboutTeam from '../components/About/AboutTeam'
import AboutTestimonial from '../components/About/AboutTestimonial'
import AboutVideo from '../components/About/AboutVideo'
import AboutWCU from '../components/About/AboutWCU'
import Layout1 from '../layouts/Layout1'

export default function About() {
    return (
        <Layout1>
            <AboutBreadcrumb/>
            <AboutSection/>
            <AboutTeam/>
            {/* <AboutVideo/> */}
            <AboutCounter/>
            <AboutWCU/>
            <AboutTestimonial/>
          
            <AboutBrand/>
        </Layout1>
    )
}
