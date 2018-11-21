const Trust = artifacts.require("Trust");

module.exports = function(deployer) {
  deployer.deploy(Trust);
};
