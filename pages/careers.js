import React from 'react'
import CareerArea from '../components/Careers/CareerArea'
import CareerBreadcrumb from '../components/Careers/CareerBreadcrumb'
import Layout1 from '../layouts/Layout1'

export default function Careers() {
    return (
        <>
         <Layout1>
             <CareerBreadcrumb/>
             <CareerArea/>
             </Layout1>   
        </>
    )
}
