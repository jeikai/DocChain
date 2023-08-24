// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract DocContract {
    struct ImageData {
        string hash;
        address sender;
        string imageName;
        uint256 timestamp;
    }
    mapping(uint256 => ImageData) private images;
    uint256 private imageCount;
    event ImageStored(string hash, address sender, string imageName, uint256 timestamp);


    function storeImageData(string memory _hash, address _sender, string memory _imageName, uint256 _timestamp) public {
        imageCount++;
        images[imageCount] = ImageData(_hash, _sender, _imageName, block.timestamp);
        emit ImageStored(_hash, _sender, _imageName, _timestamp);
    }

    function getAllData() public view returns (ImageData[] memory) {
        ImageData[] memory allImageData = new ImageData[](imageCount);
        for (uint256 i = 1; i <= imageCount; i++) {
            allImageData[i - 1] = images[i];
        }
        return allImageData;
    }
}