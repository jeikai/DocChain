pragma solidity ^0.8.9;

contract DocContract {
    uint256 imageCount;
    struct ImageData {
        string hash;
        address sender;
        string imageName;
        uint256 timestamp;
    }
    ImageData[] images;
    event ImageStored(string hash, address sender, string imageName, uint256 timestamp);

    function storeImageData(string memory _hash, string memory _imageName) public {
        imageCount++;
        images.push(ImageData(_hash, msg.sender, _imageName, block.timestamp));
        emit ImageStored(_hash, msg.sender, _imageName, block.timestamp);
    }

    function getAllData() public view returns (ImageData[] memory) {
        return images;
    }
}