import React from 'react'
import Layout1 from '../layouts/Layout1'
import GrahpicsDetailsBreadCrumb from '../components/Services/Graphics/GraphicsDetailsBreadCrumb'

import GrahpicsDetailsArea from '../components/Services/Graphics/GraphicsDetailsArea'

export default function ServiceDetails() {
    return (
        <>
            <Layout1>
                <GrahpicsDetailsBreadCrumb />
                <GrahpicsDetailsArea />
            </Layout1>
        </>
    )
}
