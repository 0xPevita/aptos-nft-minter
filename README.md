# aptos-nft-minter

> Simple NFT minting scripts for Aptos using the Digital Asset Standard.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Aptos](https://img.shields.io/badge/Aptos-blue?style=flat-square)

## Use Case

Used by BlobSafe to mint Proof of Storage NFTs on-chain receipts verifying a file was stored on Shelby at a specific timestamp.

## Setup
```bash
npm install @aptos-labs/ts-sdk
export APTOS_PRIVATE_KEY=your_key_here
```

## Usage
```javascript
const { createCollection, mintNFT } = require("./src/minter");

await createCollection(account, {
  name: "BlobSafe Genesis",
  description: "Proof of storage receipts",
  uri: "https://blobsafe.xyz/collection",
});

await mintNFT(account, {
  collectionName: "BlobSafe Genesis",
  tokenName: "Storage Receipt #001",
  description: "Verified on Shelby Protocol",
  uri: "https://blobsafe.xyz/token/001",
});
```

## License
MIT
