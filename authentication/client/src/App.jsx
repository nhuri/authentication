import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Login from "./users/Login";
function App() {
  return (
    <>
      <div>
        <div id="header">
          <div id="text">
            <h1>Food delivery app</h1>
            <h3>
              Our food delivery website is an online platform that allows you to
              order food from various restaurants and enjoy fast delivery to
              your home. This website provide a smooth and convenient user
              experience with an intuitive interface, support for multiple
              restaurants, real-time order tracking, and support for a variety
              of payment methods. On our website, you'll also find discounts and
              special offers just for you. So, what are you waiting for?
            </h3>
          </div>

          <Login id="icon" />
        </div>
      </div>
    </>
  );
}

export default App;
