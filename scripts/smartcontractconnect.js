const { ethers } = require("ethers");
const { artifacts } = require("hardhat/internal/lib/hardhat-lib");
const contractInfo = require("../artifacts/contracts/VotingContract.sol/VotingContract.json");
const {API_KEY, API_URL, PRIVATE_KEY} = process.env
async function main() {
// Alchemy provider
const provider = new ethers.providers.JsonRpcProvider(API_URL);
    // Replace the contract address and ABI with your deployed contract's address and ABI
    const contractAddress = "YOUR_CONTRACT_ADDRESS";
    // contract.abi
    const abi = contractInfo.abi;
 
    const signer =  new ethers.Wallet(PRIVATE_KEY, provider);
    // const signer = provider.getSigner(); // Get a signer (account) to send transactions
    const contract = await new ethers.Contract(contractAddress, abi, signer);
    console.log(contract);
    // Example: Triggering the voteForCandidate function
    const candidate = "Anish";
    const candidate2 = "Sumedh";
    const failCase =  "John";

    console.log("Retrieved the contract..");

    const byteCode = ethers.utils.formatBytes32String(candidate);
    const byteCode2 = ethers.utils.formatBytes32String(candidate2);
    const byteCode3 = ethers.utils.formatBytes32String(failCase);

    console.log("Validating candidates..");
    const testCandidate = await contract.validCandidate(byteCode);
    console.log(testCandidate)
    const testCandidate2 = await contract.validCandidate(byteCode2);
    console.log(testCandidate2)
    const testCandidate3 = await contract.validCandidate(byteCode3);
    console.log(testCandidate3)

    console.log("Total Votes..");

    // Example: Triggering the totalVotesFor function
    const totalVotes1 = await contract.totalVotesFor(byteCode);
    const totalVotes2 = await contract.totalVotesFor(byteCode2);

    console.log("Total votes for", candidate, ":", totalVotes1);
    console.log("Total votes for", candidate2, ":", totalVotes2);
}
 
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });