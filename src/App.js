import Header from "./components/header/header";
import {Slider} from "./components/slider/slider";
import {About} from "./components/about/about";
import {Services} from "./components/services/services";
import {Work} from "./components/work/work";
import {Howitwork} from "./components/howitwork/howitwork";
import {Testimonial} from "./components/testimonial/testimonial";
import {Feature} from "./components/feature/feature";
import {Trustedclient} from "./components/trustedclient/trustedclient";
import Footer from "./components/footer/footer";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <>
     <Router>
      <div className="hsck_wrapper">
        {/* <div id="hsck_loader"></div> */}
        <Header />
        <Switch>
          <Route exact path="/" render={()=>{
              return(
                <>
              <Slider />
              <About />
              <Services />
              <Work />
              <Howitwork />
              <Testimonial />
              <Feature />
              <Trustedclient />
                </>
              )
            }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/testimonial">
            <Testimonial />
          </Route>
          <Route exact path="/feature">
            <Feature />
          </Route>
        </Switch>
        <Footer />
      </div>
      </Router>
    </>
  );
}

export default App;
