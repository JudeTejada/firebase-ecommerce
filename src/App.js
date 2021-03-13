import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";

//pages
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Shop from "./pages/shop";
import Home from "./pages/home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/shop">
          <Shop />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
