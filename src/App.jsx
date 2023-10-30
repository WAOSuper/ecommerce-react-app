import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import BuyProgress from "./components/BuyProgress";

function App() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Header />
        <Logo />
        <BuyProgress />
        <Footer />
      </main>
    </>
  );
}

export default App;
