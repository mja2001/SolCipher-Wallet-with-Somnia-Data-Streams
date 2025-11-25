# SolCipher-Wallet-with-Somnia-Data-Streams
SolCipher Wallet (a privacy-focused, decentralized file-sharing dApp using client-side encryption, IPFS storage, and Somnia Data Streams for real-time on-chain metadata)
# SolCipher-Somnia

A decentralized, encrypted file-sharing dApp rebuilt on Somnia blockchain using Somnia Data Streams (SDS) for real-time metadata handling. Original: SolCipher Wallet on Solana.

## Features
- Client-side AES-256-GCM encryption.
- IPFS for file storage.
- SDS for on-chain metadata (CID, IV, wrapped key) with real-time reactivity.
- EVM-compatible wallet integration (e.g., MetaMask).

## Setup
1. Clone: `git clone https://github.com/your-username/SolCipher-Somnia.git`
2. Install: `cd client && npm install`
3. Run: `npm run dev`
4. Deploy frontend to Vercel; use Somnia Testnet RPC.

## Tech Stack
- Blockchain: Somnia (Testnet RPC: https://testnet.rpc.somnia.network)
- SDK: @somnia-chain/streams
- Frontend: Next.js, React, Viem
- Storage: IPFS (Infura or local node)
- Encryption: CryptoJS, TweetNaCl

Built for Somnia Data Streams Mini Hackathon.
