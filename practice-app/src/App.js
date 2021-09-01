import HomePage from "./home/HomePage";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Route } from "react-router-dom";


const App = () => {

  return (
    <div className="">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Footer />


    </div>

  );
}

 
export default App;