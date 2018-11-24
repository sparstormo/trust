import React from "react";

class ReadString extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Trust;

    console.log(contract);

    // let drizzle know we want to watch the `balance` method
    const dataKey = contract.methods["balance"].cacheCall();

    console.log(dataKey);

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { Trust } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    console.log(this.state.dataKey);
    const balance = Trust.balance[this.state.dataKey];

    // if it exists, then we display its value
    return <p>My trust balance: {balance && balance.value}</p>;
    //return null;
  }
}

export default ReadString;
