---
sidebar_position: 4
---

# Architecture

## Components

Shiro Share has the following components:
- [Magic](https://magic.link/): handles auth, web3 onboarding, etc. Makes it very easy to start using Shiro Share.
- Shiro Share Contract: stores metadata about files and calls Shiro Storage functions.
- [Shiro Storage](https://docs.storage.shiro.network/): the powerhouse handling all file storage. File storage to different providers, cleaning up expired files, etc.
- [OpenZeppelin Defender](https://docs.openzeppelin.com/defender/): enabling gasless transactions.
    - [Autotasks](https://docs.openzeppelin.com/defender/autotasks): transactions are sent to an autotask which then transfers it to a relayer.
    - [Relayer](https://docs.openzeppelin.com/defender/relay): relays and pays for the file upload transaction. The transaction is forwarded to the forwarder.
    - Forwarder: calls the Shiro Share contract.

## Architecture Diagram

![Architecture Diagram of Shiro Share](/img/Shiro-Share-Architecture.png)

## Working

- The user signs up using Magic.
- The user selects a file.
- The file is first uploaded to the [Shiro IPFS Relay](https://docs.storage.shiro.network/contract-addresses#ipfs-relay)
- The file size and estimated price are obtained using helper APIs.
- Then, an OpenZeppelin Defender auto-task is called with the transaction details - file CID, validity, size, price, etc.
- The Relayer picks up the transaction, pays the amount that was estimated and uses the Forwarder to call `putFile` on the contract.
- Shiro Storage then [does its magic](https://docs.storage.shiro.network/architecture#working).
    - The files are uploaded to one of many [storage providers](https://docs.storage.shiro.network/providers), automatically garbage collected and are guaranteed to be available in the given time (24 hours in the case of Shiro Share).
