import { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Header } from '../Exporter/Components_Exporter'

export default function GuestLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}