import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {
//creo los contextos globales
  const { theme } = useContextGlobal();

  return (
    <div className="App" id={theme.theme}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  );
}

export default App;
