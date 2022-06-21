import React from 'react'
import Layout1 from '../layouts/Layout1'
import OkadaDetailsBreadCrumb from '../components/Project-Okada/OkadaDetailsBreadCrumb'
import OkadatDetailsArea from '../components/Project-Okada/OkadaDetailsArea'

export default function ProjectDetails() {
    return (
        <>
            <Layout1>
                <OkadaDetailsBreadCrumb />
                <OkadatDetailsArea />
            </Layout1>
        </>
    )
}
