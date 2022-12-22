import { Route, Routes } from "react-router-dom";

import Navbar from "./component/Shared/Navbar";
import HomePage from "./pages/HomePage";
import PayPermanentResidency from "./pages/PayPermanentResidency";
import PaySheduleCall from "./pages/PaySheduleCall";
import Services from "./pages/Services";
import AboutUsPage from './pages/AboutUsPage';
import Footer from "./component/Shared/Footer";
import "./App.css";
import ContactUs from './pages/ContactUs';
import FourOThree from './pages/403';
import FourOFour from './pages/404';
import FiveHundred from './pages/500';
import FeedBackPage from './pages/FeedBackPage';

function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<Services />} />
        <Route path='/paypermanentresidency' element={<PayPermanentResidency/>}></Route>
        <Route path='/payshedulecall' element={<PaySheduleCall/>}></Route>
        <Route path='/about-us' element={<AboutUsPage/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/feed-back' element={<FeedBackPage/>}></Route>
        <Route path='/403' element={<FourOThree/>}></Route>
        <Route path='/404' element={<FourOFour/>}></Route>
        <Route path='/500' element={<FiveHundred/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
