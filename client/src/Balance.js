import React from "react";

class ReadString extends React.Component {
   state = {
     balanceKey: null,
     paymentKey: null,
     amountKey: null,
   };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Trust;

    console.log(contract);

    // let drizzle know we want to watch the `balance` method
    const balanceKey = contract.methods["balance"].cacheCall();
    const paymentKey = contract.methods["payment"].cacheCall();
    const amountKey = contract.methods["amount"].cacheCall();


    console.log(balanceKey, paymentKey, amountKey);

    // save the `balanceKey` to local component state for later reference
    this.setState({
      balanceKey: balanceKey,
      installmentKey: paymentKey,
      amountKey: amountKey
    });
  }

  render() {
    // get the contract state from drizzleState
    const { Trust } = this.props.drizzleState.contracts;

    // using the saved `balanceKey`, get the variable we're interested in
    console.log(this.state.balanceKey, this.state.installmentKey);
    console.log(Trust);
    const balance = Trust.balance[this.state.balanceKey];
    const payment = Trust.payment[this.state.paymentKey];
    const amount = Trust.amount[this.state.amountKey];


    // if it exists, then we display its value
    return(
      <div>
        <p>My trust balance: {balance && balance.value}</p>
        <p>My trust payment: {payment && payment.value}</p>
        <p>My trust initial amount: {amount && amount.value}</p>

      </div>
    )

    //return null;
  }
}

export default ReadString;
