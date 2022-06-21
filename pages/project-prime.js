import React from 'react'
import Layout1 from '../layouts/Layout1'
import PrimeDetailsBreadCrumb from '../components/Project-Prime/PrimeDetailsBreadCrumb'
import PrimeDetailsArea from '../components/Project-Prime/PrimeDetailsArea'

export default function ProjectDetails() {
    return (
        <>
            <Layout1>
                <PrimeDetailsBreadCrumb />
                <PrimeDetailsArea />
            </Layout1>
        </>
    )
}
