---
sidebar_position: 1
---

# Contract (with Gasless)

**Repository**: [https://github.com/NaikAayush/shiro-share/tree/main/contracts](https://github.com/NaikAayush/shiro-share/tree/main/contracts)

## Set up

### Install dependencies
```
npm install
```

### Create a `.env` file

```
QUICKNODE_URL=<Quicknode HTTP encpoint>
PRIVATE_KEY=
POLYGONSCAN_API_KEY=
SHIRO_STORE_ADDRESS=
TEAM_API_KEY=<OpenZeppelin Defender Team API Key>
TEAM_API_SECRET=<OpenZeppelin Defender Team API Secret>
```

### Create a new OpenZeppelin Defender Relayer

```
npm run create-relay
```

:::info
Fund this relayer with MATIC/ETH.
:::

### Deploy Shiro Share Contract using Relayer

```
npm run deploy-using-relay
```

### Create a new Defender autotask for the deployed contract

```
npm run create-autotask
```
