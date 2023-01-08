import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state/index";

function App() {

  const amount = useSelector((state: State) => state.bank);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  
  return (
    <div className="App">
      <h1>Fund: {amount}</h1>
      <button onClick={() => depositMoney(1000)}> Deposit</button>
      <button onClick={() => withdrawMoney(500)}> Withdraw</button>
      <button onClick={() => bankrupt()}> Bankrupt</button>
    </div>
  );
}

export default App;
