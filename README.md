# Udacity Blockchain Capstone - Devesh Vishwakarma

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Install

To install, download or clone the repo, then:

`npm install`

Move to contracts directory, install dependencies and compile contracts:

```
cd eth-contracts
npm install
truffle compile
``` 

## Tests

Start ganache and run tests:
```
npm run ganache
npm run test
```

To run individual tests:
```
truffle test ./test/TestERC721Mintable.js
truffle test ./test/TestSquareVerifier.js
truffle test ./test/TestSolnSquareVerifier.js
```

## ZoKrates Setup

Install and instantiate a Zokrates zkSnarks development environment using Docker. Completes the Zokrates proof in `square.code` by adding the variable names in `square.code`.

Preequisite: Install Docker using instructions from [here](https://docs.docker.com/install/).


```
# Run ZoKrates
docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates /bin/bash

# Change path to code/square
cd code/square

# Compile the program
~/zokrates compile -i square.code

# Generate the Trusted Setup
~/zokrates setup

# Compute Witness
~/zokrates compute-witness -a 3 9

# Generate Proof
~/zokrates generate-proof

# Export Verifier
~/zokrates export-verifier
```

## Contracts Deployment on Rinkeby

Run the following command to deploy contracts on Rinkeby netwrok:
`truffle migrate --network rinkeby --reset --compile-all`

Contract deployment information on Rinkeby netwrok:
```
Deploying 'RealEstateERC721Token'
   > transaction hash:    0xcb14c592956c5f4ac34c55a8fca022a5b8276ff6baf04a7d042fbd814dfbd1b8
   > contract address:    0x3B632034c713F2088bbcB7191653b4792C4d6edf
   > account:             0xca8Dc0AE9C83598d965a6CF2b57602457565CE91

Deploying 'SquareVerifier'
   --------------------------
   > transaction hash:    0x28ed6e3bfa354809479e387c2c22d5d066c3c29d08eab71211846b69312c60af
   > contract address:    0x7ddb49D8965f614771D302a7cF47565c51B38180
   > account:             0xca8Dc0AE9C83598d965a6CF2b57602457565CE91

Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x3126259bb4a03903e8804eaa3b793a4d42c649e1a4708bf50c1ef9c382a427c0
   > contract address:    0x1612cB51c53fE387A702bCc3AD06FDFCd30cc8DC
   > account:             0xca8Dc0AE9C83598d965a6CF2b57602457565CE91

```

## Mint Tokens

1. Use [Remix](https://remix.ethereum.org/) or [MyEtherWallet](https://www.myetherwallet.com/access-my-wallet) to mint 10 tokens to list in Opensea. Use the  ABI and the deployed SolnSquareVerifier's contract address.

2. You can list the tokens by going to: [https://rinkeby.opensea.io/get-listed/step-two](https://rinkeby.opensea.io/get-listed/step-two)

## Opensea Storefront
OpenSea Link : [https://testnets.opensea.io/collection/devesh-vishwakarma](https://testnets.opensea.io/collection/devesh-vishwakarma)

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)