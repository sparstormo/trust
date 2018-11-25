pragma solidity ^0.4.24;

contract Trust {

    uint public amount = 120;
    address owner;
    uint timeInterval = now;
    uint public payment;

    modifier onlyOwner {
        require(owner == msg.sender);
        _;
    }

    modifier timeForPayment {
        require(now >= timeInterval + 1 minutes);
        timeInterval = now + 1 minutes;
        _;
    }

    function initialAmount() public payable {
        owner = msg.sender;
        amount = msg.value;
        payment = amount / 10;
    }

    function withDraw() onlyOwner timeForPayment public {
        msg.sender.transfer(payment);

    }

    function balance() public view returns (uint) {
        return address(this).balance;
    }
}
