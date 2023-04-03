import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

export const SharedLayout = () => {
    return (
        <>
        <nav>
            <Link to="/" >
            Home
            </Link>
            <Link to="/movie" >
            Movies
            </Link>
        </nav>
        <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
        </Suspense>
        </>
    )
}