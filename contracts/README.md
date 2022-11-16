# Shiro Share Contracts

### Contract Addresses

MinimalForwarder: 0x3Cf07020Eb3188bc7cd6620519A6Fbd8dfDb8Bf2

ShiroShare: 0x933d3F075b1A1d402E486B500466164001d0cfBf

ShiroStore: 0x039a4697C8B6CD4dE6D2C0aef690e8c9073b67a6

## Setup

Install all dependencies

```shell
npm install
```

Create a .env and add the following

```shell
QUICKNODE_URL=<Quicknode HTTP encpoint>
PRIVATE_KEY=
POLYGONSCAN_API_KEY=
SHIRO_STORE_ADDRESS=
TEAM_API_KEY=<OpenZeppelin Defender Team API Key>
TEAM_API_SECRET=<OpenZeppelin Defender Team API Secret>

```

## Commands:

- To test the contract

  ```shell
  npx hardhat test
  ```

- Create a new OpenZeppelin Defender Relayer

  ```shell
  npm run create-relay
  ```

- Deploy Shiro Share Contract to Mumbai using Relayer (Fund your relayer with MATIC before deploying)

  ```shell
  npm run deploy-using-relay
  ```

- Create a new Defender autotask for the deployed contract

  ```shell
  npm run create-autotask
  ```

- To deploy to mumbai (deprecated)

  ```shell
  npx hardhat run scripts/deploy.ts --network matic
  ```
