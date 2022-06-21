import React from 'react'
import Layout1 from '../layouts/Layout1'
import SitelDetailsBreadCrumb from '../components/Project-Sitel/SitelDetailsBreadCrumb'
import SitelDetailsArea from '../components/Project-Sitel/SitelDetailsArea'

export default function ProjectDetails() {
    return (
        <>
            <Layout1>
                <SitelDetailsBreadCrumb />
                <SitelDetailsArea />
            </Layout1>
        </>
    )
}
