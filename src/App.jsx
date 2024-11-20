import { Fragment } from "react";
import Header from "./components/header";
import CoreConcepts from "./components/concepts";
import Examples from "./components/examples";


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
