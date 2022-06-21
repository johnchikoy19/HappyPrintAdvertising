import React from 'react'
import Layout1 from '../layouts/Layout1'
import ConcentrixDetailsBreadCrumb from '../components/Project-Concentrix/ConcentrixDetailsBreadCrumb'
import ConcentrixDetailsArea from '../components/Project-Concentrix/ConcentrixDetailsArea'

export default function ProjectDetails() {
    return (
        <>
            <Layout1>
                <ConcentrixDetailsBreadCrumb />
                <ConcentrixDetailsArea />
            </Layout1>
        </>
    )
}
