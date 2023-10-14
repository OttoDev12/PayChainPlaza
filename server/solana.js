const solanaWeb3 = require('@solana/web3.js');

// Connection to Solana cluster
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));

module.exports = {
  connection
};
