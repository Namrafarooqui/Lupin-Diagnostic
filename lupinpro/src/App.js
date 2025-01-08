import React from "react";
import TopHeader from "./Components/TopHeader";
import Header from "./Components/Header";
import MultiOptionMenu from "./Components/MultiOptionMenu";
import BookingForm from "./Components/BookingForm";
import CardList from "./Components/CardList";
import Testimonials from "./Components/Testimonials";
import Videos from "./Components/Videos";
import LatestBlogs from "./Components/LatestBlogs";
import FAQs from "./Components/FAQs";
import HealthPackages from "./Components/HealthPackages";
import Footer from "./Components/Footer";
import BookedTest from "./Components/BookedTest";
import CheckupPackages from "./Components/CheckupPackages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <MultiOptionMenu />
      <BookingForm />
      <CardList />
      <Testimonials />
      <Videos />
      <LatestBlogs />
      <FAQs />
      <HealthPackages />
      <BookedTest />
      <CheckupPackages />
      <Footer />
    </div>
  );
}

export default App;
