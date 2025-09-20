import { ethers } from "hardhat";

async function main() {
  console.log("Deploying FHESwapDesk contract...");

  const FHESwapDesk = await ethers.getContractFactory("FHESwapDesk");
  const fheSwapDesk = await FHESwapDesk.deploy();

  await fheSwapDesk.waitForDeployment();

  const address = await fheSwapDesk.getAddress();
  console.log("FHESwapDesk deployed to:", address);

  // Save deployment info
  const deploymentInfo = {
    network: "sepolia",
    contract: "FHESwapDesk",
    address: address,
    timestamp: new Date().toISOString(),
  };

  console.log("Deployment completed successfully!");
  console.log("Contract Address:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
