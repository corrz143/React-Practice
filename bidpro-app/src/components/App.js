import ASBidTypePage from "./alaska-airlines/ASBidTypePage";
import ASPilotPage from "./alaska-airlines/ASPilotPage";
import AABidTypePage from "./american-airlines/AABidTypePage";
import AAPilotPage from "./american-airlines/AAPilotPage";

import JSBidTypePage from "./jetsuite/JSBidTypePage";
import JSPilotPage from "./jetsuite/JSPilotPage";
import UPBidTypePage from "./ups/UPBidTypePage";
import UPPilotPage from "./ups/UPPilotPage";
import HomePage from "./home/HomePage";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Route } from "react-router-dom";


const App = () =>  {

  return (
      <div className="container-fluid">
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/american-airlines/bidtypes" component={AABidTypePage} />
          <Route path="/american-airlines/pilots" component={AAPilotPage} />
          <Route path="/alaska-airlines/bidtypes" component={ASBidTypePage} />
          <Route path="/alaska-airlines/pilots" component={ASPilotPage} />
          <Route path="/jetsuite/bidtypes" component={JSBidTypePage} />
          <Route path="/jetsuite/pilots" component={JSPilotPage} />
          <Route path="/ups/bidtypes" component={UPBidTypePage} />
          <Route path="/ups/pilots" component={UPPilotPage} />
          <Footer />
      </div>
  );
 }
 
 export default App;












 


// const App = () =>  {
//   const getPage = () => {

//   const route = window.location.pathname;
//   if(route === "/american-airlines/bidtypes") {
//     return (<AABidTypePage/>)
//   } else if(route === "/american-airlines/pilots") {
//       return (<AAPilotPage/>)
//   } else if(route === "/alaska-airlines/bidtypes") {
//       return (<ASBidTypePage/>)
//   } else if(route === "/alaska-airlines/pilots") {
//       return (<ASPilotPage/>)
//   } else if(route === "/jetsuite/bidtypes") {
//       return (<JSBidTypePage/>)
//   } else if(route === "/jetsuite/pilots") {
//       return (<JSPilotPage/>)
//   } else if(route === "/ups/bidtypes") {
//       return (<UPBidTypePage/>)
//   } else if(route === "/ups/pilots") {
//       return (<UPPilotPage/>)
//   }else {
//     return <HomePage />;
//   }
// }
//   return (
//     <div className ="container-fluid">
//       <Header />
//        { getPage() }

//        <Footer />
   


//     </div>
    
//   )
  
  

  
// }




