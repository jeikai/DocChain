pragma solidity ^0.8.0;
contract ImageStorageContract {
    struct ImageData {
        bytes32 hash;
        address sender;
        string imageName;
    }
    mapping(uint256 => ImageData) private images;
    uint256 private imageCount;
    event ImageStored(bytes32 hash, address sender, string imageName);


    function storeImageData(bytes32 _hash, address _sender, string memory _imageName) public {
        imageCount++;
        images[imageCount] = ImageData(_hash, _sender, _imageName);
        emit ImageStored(_hash, _sender, _imageName);
    }

    function getAllData() public view returns (ImageData[] memory) {
        ImageData[] memory allImageData = new ImageData[](imageCount);
        for (uint256 i = 1; i <= imageCount; i++) {
            allImageData[i - 1] = images[i];
        }
        return allImageData;
    }
}

