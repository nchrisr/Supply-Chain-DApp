
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonicPhrase = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      websockets:  true
    },

    ganache_gui: {
      host: "127.0.0.1",
      port: 8545,
      websockets: true
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonicPhrase, `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161` ),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    },


  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
