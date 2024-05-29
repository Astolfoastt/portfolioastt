import AppContent from "./AppContent";
import { HeaderComponent } from "./components/headerComponent";
import { MenuMobile } from "./components/menuComponent/menuMobile";

import "./styles/index.scss";

function App() {

  return (
    <>
      <HeaderComponent />
      <AppContent />
      <MenuMobile />
    </>
  )
}

export default App
