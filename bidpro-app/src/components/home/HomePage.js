import React from "react";
import AirlineSection from "../shared/AirlineSection";


const HomePage = () => {
    return(
      <>
        <div className="container ">
         <div className="jumbotron ">
            <div className="row">
                <section className="col-lg-7">
                    <h1 className="text">ADMINISTRATION</h1>
                    <p className="hellotext">Hello tom jones! A website dedicated to the administration of Airline data.</p>
                </section>
                <section className="col-lg-5 text-center">
                    <h1 className="text">1.0.0</h1>
                    <p className="hellotext text-muted">Version</p>
                </section>
            </div>
         </div>

         <div className="row">
            <div className="col-md-6" >
                <AirlineSection 
                airlineName ="American Airlines" 
                airlineLink ="/american-airlines/bidtypes" />
            </div> 
            <div className="col-md-6">    
                <AirlineSection 
                airlineName ="Alaska Airlines"
                airlineLink ="/alaska-airlines/bidtypes" />
            </div> 
        </div> 
        <div className="row">
            <div className="col-md-6">     
                <AirlineSection 
                airlineName ="JetSuite" 
                airlineLink ="/jetsuite/bidtypes"/>
            </div>
            <div className="col-md-6">  
                <AirlineSection 
                airlineName ="UPS"
                airlineLink ="/ups/bidtypes" />
            </div>
         </div> 
        </div>

       </>
    )
}


export default HomePage;







