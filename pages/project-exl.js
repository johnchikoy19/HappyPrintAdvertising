import React from 'react'
import Layout1 from '../layouts/Layout1'
import EXLDetailsBreadCrumb from '../components/Project-EXL/EXLtDetailsBreadCrumb'
import EXLDetailsArea from '../components/Project-EXL/EXLDetailsArea'

export default function ProjectDetails() {
    return (
        <>
            <Layout1>
                <EXLDetailsBreadCrumb />
                <EXLDetailsArea />
            </Layout1>
        </>
    )
}
