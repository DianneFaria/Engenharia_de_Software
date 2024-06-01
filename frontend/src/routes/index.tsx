import { Route, Routes} from "react-router-dom";
import Treinamento from "../pages/Treinamento";
import Voluntariado from "../pages/Voluntariado";


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Treinamento />} />
            <Route path="/voluntariado" element={<Voluntariado />} />
            <Route path="/treinamento" element={<Treinamento />} />
        </Routes>
    );
};

export default AppRoutes;
