pragma solidity ^0.8.9;

contract DocContract3 {
    uint256 imageCount;
    struct ImageData {
        string hash;
        address sender;
        string imageName;
        uint256 timestamp;
    }
    ImageData[] images;
    event ImageStored(
        string hash,
        address sender,
        string imageName,
        uint256 timestamp
    );

    function storeImageData(
        string memory _hash,
        string memory _imageName
    ) public {
        imageCount++;
        images.push(ImageData(_hash, msg.sender, _imageName, block.timestamp));
        emit ImageStored(_hash, msg.sender, _imageName, block.timestamp);
    }

    function getAllData() public view returns (ImageData[] memory) {
        return images;
    }

    struct SignedData {
        string hash;
        address sender;
        address signer;
        string imageName;
        uint256 timestamp;
        string publicKey;
        string Signature;
    }
    uint256 dataCount;
    SignedData[] data;
    event DataStored(
        string hash,
        address sender,
        address signer,
        string imageName,
        uint256 timestamp,
        string publicKey,
        string Signature
    );

    function storeSignedData(
        string memory _hash,
        address _sender,
        string memory _imageName,
        string memory _publicKey,
        string memory _signature
    ) public {
        dataCount++;
        data.push(
            SignedData(
                _hash,
                _sender,
                msg.sender,
                _imageName,
                block.timestamp,
                _publicKey,
                _signature
            )
        );
        emit DataStored(
            _hash,
            _sender,
            msg.sender,
            _imageName,
            block.timestamp,
            _publicKey,
            _signature
        );
    }

    function getAllSigned() public view returns (SignedData[] memory) {
        return data;
    }
}