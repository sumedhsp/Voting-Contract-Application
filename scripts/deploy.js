const { ethers } = require("hardhat");
 
async function main() {
    const VotingContract = await ethers.getContractFactory("VotingContract");
    const votingContract = await VotingContract.deploy(); 
    console.log("Contract deploy phase passed!");

    console.log("VotingContract deployed to:", votingContract.target);

    const candidate1 = ethers.encodeBytes32String("Anish");
    const candidate2 = ethers.encodeBytes32String("Sumedh");
    console.log(candidate1, candidate2);

    await votingContract.Voting([candidate1, candidate2]);
 
    console.log("VotingContract deployed to:", votingContract.target);

}
 
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

