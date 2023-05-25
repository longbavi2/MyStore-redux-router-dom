import { Routes } from "../routes";
import { useRoutes } from "react-router-dom";
function Routers() {
    const element = useRoutes(Routes);
    return element;
}
export default Routers;