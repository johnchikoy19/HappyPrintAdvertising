import React from 'react'
import Layout1 from '../layouts/Layout1'
import AdvertisingDetailsBreadCrumb from '../components/Services/Advertising/AdvertisingDetailsBreadCrumb'

import AdvertisingDetailsArea from '../components/Services/Advertising/AdvertisingDetailsArea'

export default function ServiceDetails() {
    return (
        <>
            <Layout1>
                <AdvertisingDetailsBreadCrumb />
                <AdvertisingDetailsArea />
            </Layout1>
        </>
    )
}
