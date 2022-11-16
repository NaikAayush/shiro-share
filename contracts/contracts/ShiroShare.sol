// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "shiro-store/contracts/ShiroStore.sol";

import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/metatx/MinimalForwarder.sol";

contract ShiroShare is AutomationCompatibleInterface, ERC2771Context {
    IShiroStore private shiroStore;

    constructor(address shiroStoreAddr, MinimalForwarder forwarder) // Initialize trusted forwarder
    ERC2771Context(address(forwarder)) {
        shiroStore = IShiroStore(shiroStoreAddr);
    }

    address[] owners;
    mapping(address => File[]) store;

    function findFile(address owner, string memory cid)
        internal
        view
        returns (File storage)
    {
        for (uint256 i = 0; i < store[owner].length; ++i) {
            File storage file = store[owner][i];
            if (
                file.valid && !file.deleted && ShiroUtils.strcmp(file.cid, cid)
            ) {
                return file;
            }
        }

        revert("File not found or is deleted.");
    }

    function findOrCreateFile(address owner, string memory cid)
        internal
        returns (File storage)
    {
        for (uint256 i = 0; i < store[owner].length; ++i) {
            File storage file = store[owner][i];
            if (
                file.valid && !file.deleted && ShiroUtils.strcmp(file.cid, cid)
            ) {
                return file;
            }
        }

        if (store[owner].length == 0) {
            owners.push(owner);
        }

        return store[owner].push();
    }

    function deleteGivenFile(File storage file) internal {
        file.deleted = true;
        shiroStore.deleteFile(file.cid);
    }

    function putFile(
        string memory cid,
        uint256 validity,
        string memory provider,
        uint256 sizeInBytes
    ) external payable {
        address owner = _msgSender();

        File storage file = findOrCreateFile(owner, cid);

        // add to remaining validity if it wasn't deleted
        if (
            file.valid &&
            !file.deleted &&
            file.timestamp + file.validity >= block.timestamp
        ) {
            validity += (file.timestamp + file.validity) - block.timestamp;
        }

        file.valid = true;
        file.deleted = false;
        file.cid = cid;
        file.provider = provider;
        file.timestamp = block.timestamp;
        file.validity = validity;

        shiroStore.putFile{value: msg.value}(cid, validity, provider, sizeInBytes);
    }

    function getFiles() external view returns (File[] memory) {
        address owner = _msgSender();

        uint256 resultCount = 0;
        for (uint256 idx = 0; idx < store[owner].length; ++idx) {
            File storage file = store[owner][idx];
            if (file.valid && !file.deleted) {
                resultCount++;
            }
        }

        File[] memory files = new File[](resultCount);

        uint256 arrIdx = 0;
        for (uint256 idx = 0; idx < store[owner].length; ++idx) {
            File storage file = store[owner][idx];
            if (file.valid && !file.deleted) {
                files[arrIdx] = file;
                arrIdx++;
            }
        }

        return files;
    }

    function deleteFile(string memory cid) external {
        address owner = _msgSender();

        File storage file = findFile(owner, cid);

        deleteGivenFile(file);
    }

    function garbageCollect() external {
        for (uint256 ownerIdx = 0; ownerIdx < owners.length; ++ownerIdx) {
            address owner = owners[ownerIdx];
            for (
                uint256 fileIdx = 0;
                fileIdx < store[owner].length;
                ++fileIdx
            ) {
                File storage file = store[owner][fileIdx];
                if (
                    file.valid &&
                    !file.deleted &&
                    file.timestamp + file.validity <= block.timestamp
                ) {
                    deleteGivenFile(file);
                }
            }
        }
    }

    // === Chainlink automation ===
    function checkUpkeep(
        bytes calldata /* checkData */
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory performData)
    {
        upkeepNeeded = false;
        performData = new bytes(0);

        for (uint256 ownerIdx = 0; ownerIdx < owners.length; ++ownerIdx) {
            address owner = owners[ownerIdx];
            for (
                uint256 fileIdx = 0;
                fileIdx < store[owner].length;
                ++fileIdx
            ) {
                File storage file = store[owner][fileIdx];
                if (
                    file.valid &&
                    !file.deleted &&
                    file.timestamp + file.validity <= block.timestamp
                ) {
                    upkeepNeeded = true;
                }
            }
        }
    }

    function performUpkeep(
        bytes calldata /* performData */
    ) external override {
        this.garbageCollect();
    }
    // === -------------------- ===
}
