import React from 'react'
import Layout1 from '../layouts/Layout1'
import ICTSIDetailsBreadCrumb from '../components/Project-ICTSI/ICTSIDetailsBreadCrumb'

import ICTSIDetailsArea from '../components/Project-ICTSI/ICTSIDetailsArea'

export default function ProjectDetails() {
    return (
        <>
            <Layout1>
                <ICTSIDetailsBreadCrumb />
                <ICTSIDetailsArea />
            </Layout1>
        </>
    )
}
