import AppContent from "./AppContent";
import { HeaderComponent } from "./components/headerComponent";
import { MenuMobile } from "./components/menuComponent/menuMobile";

import "./styles/index.scss";
import style from "./style.module.scss";

function App() {
  return (
    <main className={style.container}>
      <HeaderComponent />
      <AppContent />
      <MenuMobile />
    </main>
  );
}

export default App;
