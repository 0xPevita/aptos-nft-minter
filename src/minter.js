const { Aptos, AptosConfig, Network } = require("@aptos-labs/ts-sdk");

const aptos = new Aptos(new AptosConfig({ network: Network.TESTNET }));

async function createCollection(account, { name, description, uri, maxSupply = 1000 }) {
  const txn = await aptos.transaction.build.simple({
    sender: account.accountAddress,
    data: {
      function: "0x4::aptos_token::create_collection",
      functionArguments: [description, maxSupply, name, uri,
        true, true, true, true, true, true, true, true, true, 0, 1],
    },
  });
  const committed = await aptos.signAndSubmitTransaction({ signer: account, transaction: txn });
  const result = await aptos.waitForTransaction({ transactionHash: committed.hash });
  console.log(`✅ Collection created: ${name} | tx: ${committed.hash}`);
  return result;
}

async function mintNFT(account, { collectionName, tokenName, description, uri }) {
  const txn = await aptos.transaction.build.simple({
    sender: account.accountAddress,
    data: {
      function: "0x4::aptos_token::mint",
      functionArguments: [collectionName, description, tokenName, uri, [], [], []],
    },
  });
  const committed = await aptos.signAndSubmitTransaction({ signer: account, transaction: txn });
  const result = await aptos.waitForTransaction({ transactionHash: committed.hash });
  console.log(`✅ NFT minted: ${tokenName} | tx: ${committed.hash}`);
  return result;
}

module.exports = { createCollection, mintNFT };
