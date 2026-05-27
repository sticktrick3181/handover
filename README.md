# Handover

**A decentralised crowdfunding platform built on the Ethereum blockchain.**

Handover lets anyone create a fundraising campaign and receive contributions directly through smart contracts — no middlemen, no fees, no trust required. Campaign managers can only spend funds by submitting spending requests that are approved by contributors, keeping the entire process transparent and tamper-proof.

---

## How It Works

1. **Create a campaign** — Anyone can launch a campaign by setting a minimum contribution amount.
2. **Contribute** — Backers send ETH directly to the campaign's smart contract on Ethereum mainnet.
3. **Request spending** — The campaign manager submits a spending request (payee, amount, description) to the contract.
4. **Contributors vote** — Backers approve or reject each request. Only requests with majority approval can be finalised.
5. **Finalise** — Once approved, the manager can send the funds directly to the payee.

This model means contributors always have collective control over how funds are spent — the manager can never unilaterally withdraw money.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | [Next.js](https://nextjs.org/) + [React](https://reactjs.org/) |
| UI Components | [Semantic UI React](https://react.semantic-ui.com/) |
| Smart Contracts | [Solidity](https://soliditylang.org/) (v0.4.x) |
| Blockchain Interaction | [Web3.js](https://web3js.readthedocs.io/) |
| Contract Deployment | [Truffle HDWallet Provider](https://github.com/trufflesuite/truffle/tree/develop/packages/hdwallet-provider) |
| Local Blockchain | [Ganache](https://trufflesuite.com/ganache/) |
| Testing | [Mocha](https://mochajs.org/) |
| Routing | [next-routes](https://github.com/fridays/next-routes) |

---

## Project Structure

```
handover/
├── components/        # Reusable React UI components
├── ethereum/          # Solidity contracts + compile & deploy scripts
├── pages/             # Next.js pages (routes map to these)
├── test/              # Mocha tests for the smart contracts
├── routes.js          # Custom route definitions
├── server.js          # Express server for Next.js
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [MetaMask](https://metamask.io/) browser extension (for interacting with the live app)
- An Ethereum wallet with a small amount of ETH (for deploying or contributing on mainnet)

### Installation

```bash
# Clone the repository
git clone https://github.com/sticktrick3181/handover.git
cd handover

# Install dependencies
npm install
```

### Run locally (development)

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

> **Note:** To interact with contracts locally, start a Ganache instance and update the Web3 provider in the `ethereum/` config accordingly.

### Run tests

```bash
npm test
```

Tests are written with Mocha and run against a local Ganache blockchain to validate contract logic without spending real ETH.

### Deploy contracts

Update the deploy script inside `ethereum/` with your wallet mnemonic and an [Infura](https://infura.io/) (or similar) RPC endpoint, then run:

```bash
node ethereum/deploy.js
```

---

## Live Demo

> Add a link here once the app is deployed (e.g. Vercel, Railway, or a custom domain).

---

## Contributing

Pull requests are welcome. For significant changes, please open an issue first to discuss what you'd like to change.

---

## License

[ISC](https://opensource.org/licenses/ISC)
