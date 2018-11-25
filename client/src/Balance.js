import React from "react";

class ReadString extends React.Component {
   state = {
     balanceKey: null,
     installmentKey: null,
   };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Trust;

    console.log(contract);

    // let drizzle know we want to watch the `balance` method
    const balanceKey = contract.methods["balance"].cacheCall();
    const installmentKey = contract.methods["payment"].cacheCall();

    console.log(balanceKey, installmentKey);

    // save the `balanceKey` to local component state for later reference
    this.setState({
      balanceKey: balanceKey,
      installmentKey: installmentKey
    });
  }

  render() {
    // get the contract state from drizzleState
    const { Trust } = this.props.drizzleState.contracts;

    // using the saved `balanceKey`, get the variable we're interested in
    console.log(this.state.balanceKey, this.state.installmentKey);
    console.log(Trust);
    const balance = Trust.balance[this.state.balanceKey];
    const payment = Trust.payment[this.state.installmentKey];

    //const installment = Trust.payment

    // if it exists, then we display its value
    return(
      <div>
        <p>My trust balance: {balance && balance.value}</p>
        <p>My trust payment: {payment && payment.value}</p>
      </div>
    )

    //return null;
  }
}

export default ReadString;
