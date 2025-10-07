require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("solidity-coverage");

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      blockGasLimit: 30000000
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    gasPrice: 20
  },
  mocha: {
    timeout: 40000
  }
};