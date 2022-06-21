import React from 'react'
import Layout1 from '../layouts/Layout1'
import CIMBDetailsBreadCrumb from '../components/Project-CIMB/CIMBDetailsBreadCrumb'
import CIMBDetailsArea from '../components/Project-CIMB/CIMBDetailsArea'

export default function ProjectDetails() {
    return (
        <>
            <Layout1>
                <CIMBDetailsBreadCrumb />
                <CIMBDetailsArea />
            </Layout1>
        </>
    )
}
