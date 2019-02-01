const  { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');


class Block {
    constructor({timestamp, lastHash, hash, data} ) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({lastBlock, data}) {

        const timestamp = Date.now();
        const lastHash = lastBlock.hash;

        return new this({
            timestamp, lastHash, data, 
            hash: cryptoHash(timestamp, lastHash, data)

        });
    }
}



// const Block1 = new Block({
//     timestamp: '01/01/01', 
//     lastHash: 'foo-lastHash',
//     hash: 'foo-Hash', 
//     data: 'foo-data'});

// console.log('block1',Block1);

module.exports = Block;