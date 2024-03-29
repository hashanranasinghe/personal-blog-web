
import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import Header from "../sections/heroSection/Hearder"
import FooterSection from "../sections/FooterSection/FooterSection"

export default function LayoutPage() {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <FooterSection />
        </>
    )
}