import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodoApp from "./containers/TodoApp";
// import ReducerSample from './ReducerSample';
// import { SampleProvider } from './SampleContext';

function App() {
  return (
    <>
      {/* <SampleProvider>
        // <ReducerSample></ReducerSample>
      </SampleProvider> */}
      <CounterContainer></CounterContainer>
      <TodoApp></TodoApp>
    </>
  );
}

export default App;
