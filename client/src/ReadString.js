import React from "react";

class ReadString extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Trust;

    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["payment"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { Trust } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const payment = Trust.payment[this.state.dataKey];

    // if it exists, then we display its value
    return <p>My stored string: {payment && payment.value}</p>;
  }
}

export default ReadString;
