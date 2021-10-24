import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import EmploymentPage from './employment/EmploymentPage';
import ContactUsPage from './contact/ContactPage';
import OurClientPage from './clients/OurClientPage';
import CommentsAndSuggestionsPage from './comments/CommentsAndSuggestionsPage';


const App = () => {
  return (
    <div className="container-fluid">
    <Header />
    
       <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/employment" component={EmploymentPage} />
            <Route path="/clients" component={OurClientPage} />
            <Route path="/comments" component={CommentsAndSuggestionsPage} />
            <Route path="/contact" component={ContactUsPage} />
            
     </Switch>
     <Footer />
    </div>

  );
}

export default App;
