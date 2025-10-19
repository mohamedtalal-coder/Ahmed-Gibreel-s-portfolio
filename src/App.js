import Customres from "./Home/Customers";
import Header from "./Home/Header";
import Navbar from "./Home/Navbar";
import Reviews from "./Home/Reviews";
import Work from "./Home/Work";
import ContactUs from "./Home/ContactUs"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      <Customres />
      <Reviews/>
      <ContactUs/>
    </div>
  );
}

export default App;
