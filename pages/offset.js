import React from 'react'
import Layout1 from '../layouts/Layout1'
import OffsetDetailsBreadCrumb from '../components/Services/Offset/OffsetDetailsBreadCrumb'

import OffsetDetailsArea from '../components/Services/Offset/OffsetDetailsArea'

export default function ServiceDetails() {
    return (
        <>
            <Layout1>
                <OffsetDetailsBreadCrumb />
                <OffsetDetailsArea />
            </Layout1>
        </>
    )
}
