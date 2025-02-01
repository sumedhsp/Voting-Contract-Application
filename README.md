# 🗳️ Blockchain-Based Voting Contract

## Introduction to Blockchain and Distributed Ledger Technology (CS-GY 9223)

## 🚀 Project Overview
This project implements a **secure, transparent, and decentralized voting system** using **Ethereum Smart Contracts** on the **Sepolia Test Network**. By leveraging **blockchain technology**, we ensure **tamper-proof voting, duplicate voter prevention, and real-time result validation**.

---

## 🔍 Problem Statement
In modern elections, **fraud, lack of transparency, and vote duplication** are major concerns.  
This project **solves these issues** by:  
✅ **Eliminating vote duplication** via **unique voter tokens** (Driver's License + Address Hash).  
✅ **Ensuring secure, immutable vote storage** on the **Ethereum blockchain**.  
✅ **Providing real-time vote verification** through **smart contract functions**.  
✅ **Preventing unauthorized candidates** from being voted for.  

---

## 🏗 How It Works

### **1️⃣ Smart Contract Functionality**
The **VotingContract.sol** smart contract:
- **Stores candidate names and votes** in the Ethereum blockchain.
- **Prevents duplicate voting** using a unique voter token (`name + driver's license + address`).
- **Validates candidate names** before allowing votes.
- **Enables real-time vote tally retrieval**.

### **2️⃣ Deployment & Execution**
- The smart contract is deployed on the **Sepolia Test Network** using **Hardhat**.
- Voters interact with the contract through **a script that executes transactions**.
- All transactions are logged on **Etherscan** for verification.

---

## ⚡ Deployment Instructions

This project demonstrates a basic Hardhat use case. It includes a sample contract, a test for that contract, and a Hardhat Ignition module for deployment.

### Prerequisites
Ensure you have the following installed:
- **Node.js**
- **HardHat**

### Installation
1. Clone the repository:
```
git clone <repo-link>
```
2. Navigate to the project directory:
```
cd path/to/your/project
```
3. Install dependencies:
```
npm install
```


### Running Tasks

- View HardHat commands:
```
npx hardhat help
```
- Run tests:
```
npx hardhat test
```
- Run tests with gas reporting:
```
REPORT+GAS=true npx hardhat test
```
- start a local HardHat node:
```
npx hardhat node
```
- Deploy the contract using HardHat Ignition:
```
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

### Compiling Contracts

1. Navigate to the contracts directory:
```
cd contracts
```
2. Compile contracts
```
npx hardhat compile
```

### Running Smart Cotract Script
To run the smart contract script:
```
node ./scripts/smartcontractconnect.js
```

### Deploying the contract
- Deploy to a local HardHat node:
```
npx hardhat run ./scripts/deploy.js --network localhost
```
- Deploy to a Sepolia test network:
```
npx hardhat run scripts/deploy.js --network sepolia
```

### Version Information
- In HardHat version 6.6.2: We were able to deploy contracts successfully.
- In HardHat version 5.7.2: We can run tests.

---

## 🔮 Future Enhancements

#### 🚀 Future improvements include**:

- 🛡️ **Enhanced security: Implement Zero-Knowledge Proofs (ZKPs) for anonymous voting.**
- 🗳️ **Multi-phase elections: Support multi-round voting with different categories.**
- 📊 **Real-time dashboard: Develop a web interface for voters to track votes.**
- 🌎 **Global scalability: Expand cross-chain compatibility with multiple blockchains.**
- 🔗 **Government adoption: Collaborate with institutions for real-world implementation.**

---

## 🤝 Contributors

👨‍💻 **Team Members:**

**Anish Nimbalkar** (`an4338@nyu.edu`) 
**Sumedh Parvatikar** (`sp7479@nyu.edu`)

---

## 📜 References & Resources
- [Alchemy Ethereum API](https://docs.alchemy.com/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [NPM Packages](https://www.npmjs.com/)

---

## 📜 License
🔓 **MIT License** - Free to use, modify, and distribute.

🔥 **Want to contribute?** Fork this repo, open an issue, or submit a pull request!  
📢 **If you find this project useful, give it a ⭐!**