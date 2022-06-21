import React from 'react'
import Layout1 from '../layouts/Layout1'
import DigitalDetailsBreadCrumb from '../components/Services/Digital/DigitalDetailsBreadCrumb'

import DigitalDetailsArea from '../components/Services/Digital/DigitalDetailsArea'

export default function ServiceDetails() {
    return (
        <>
            <Layout1>
                <DigitalDetailsBreadCrumb />
                <DigitalDetailsArea />
            </Layout1>
        </>
    )
}
