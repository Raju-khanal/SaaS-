import { Route, Routes } from "react-router-dom"
import Pricing from "../Components/Pricing"
import Contact from "../Components/Contact"
import Layout from "../layout/Layout"
import Home from "../Home/Home"
import NotFound from "../Components/NotFound"
function Router() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<NotFound />} />
                </Route>
            </Routes>

        </>
    )
}
export default Router;