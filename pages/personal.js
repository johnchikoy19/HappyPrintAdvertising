import React from 'react'
import Layout1 from '../layouts/Layout1'
import PersonalgDetailsBreadCrumb from '../components/Services/Personal/PersonalDetailsBreadCrumb'

import PersonalDetailsArea from '../components/Services/Personal/PersonalDetailsArea'

export default function ServiceDetails() {
    return (
        <>
            <Layout1>
                <PersonalgDetailsBreadCrumb />
                <PersonalDetailsArea />
            </Layout1>
        </>
    )
}
