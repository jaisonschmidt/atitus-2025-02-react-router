import { NavLink } from "react-router";
import Header from "../components/Header";

export function Home() {
    return (
        <>
            <Header />
            <NavLink to="/posts">Ir para posts usando cmp</NavLink>
        </>
    );
}