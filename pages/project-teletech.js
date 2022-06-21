import React from 'react'
import Layout1 from '../layouts/Layout1'
import TeletechBreadCrumb from  '../components/Project-Teletech/TeletechBreadCrumb'
import TeletechArea from '../components/Project-Teletech/TeletechDetailsArea'

export default function ProjectDetails() {
    return (
        <>
            <Layout1>
                <TeletechBreadCrumb />
                <TeletechArea />
            </Layout1>
        </>
    )
}
