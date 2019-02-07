// this file contains hardcoded and global values.

// genesis data is the first block of the chain, which has hardcoded values.

// increase the number for more difficulty.
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-----',
    hash: 'hash-one',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};


module.exports = {GENESIS_DATA};