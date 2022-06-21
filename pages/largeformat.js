import React from 'react'
import Layout1 from '../layouts/Layout1'
import LargeDetailsBreadCrumb from '../components/Services/LargeFormat/LargeDetailsBreadCrumb'

import LargeDetailsArea from '../components/Services/LargeFormat/LargeDetailsArea'

export default function ServiceDetails() {
    return (
        <>
            <Layout1>
                <LargeDetailsBreadCrumb />
                <LargeDetailsArea />
            </Layout1>
        </>
    )
}
