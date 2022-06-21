import React from 'react'
import Layout1 from '../layouts/Layout1'
import YumbossBreadCrumb from  '../components/Project-Yumboss/YumbossBreadCrumb'
import YumbossArea from '../components/Project-Yumboss/YumbossDetailsArea'

export default function ProjectDetails() {
    return (
        <>
            <Layout1>
                <YumbossBreadCrumb />
                <YumbossArea />
            </Layout1>
        </>
    )
}
