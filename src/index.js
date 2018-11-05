import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./Error";

const Loader = () => <div>Loader...</div>;

const List = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
    () =>
      Math.floor(Math.random() * 10) >= 4
        ? import("./List")
        : Promise.reject(new Error())
  );
});


function App() {
  return (
    <div className="App">
      <h1>Suspense tests!!</h1>
      <ErrorBoundary>
        <Suspense maxDuration={300} fallback={<Loader />}>
          <div className="list-container">
            <List />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

