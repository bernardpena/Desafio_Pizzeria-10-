import { Route, Routes } from "react-router-dom";

// importar vistas
import Detalle from "./views/Detalle.jsx";
import Home from "./views/Home.jsx";

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="pizzas/">
          <Route
            path=":id"
            element={<Detalle />}
          />
        </Route>

        <Route
          path="/"
          element={<Home />}
        />
      </Routes>

    </div>
  );
};
export default App;
