require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain clump install person forget gas'; 
let testAccounts = [
"0x72ea62f0365da608b64f0e6f7a656213f906a4e1bd722e8bcac54fbae67cc084",
"0x29f4f91fcfefb745ef469e41d6986e6ce84f6424dd73d0428a3ba0f139f9344e",
"0x6f5dddb23b53c3fd59b2b67c17b2e05e48fdec8e63547c0af3dee4d20de85c2c",
"0x204d89106966d3dc33081f7bb6d62c2cb16a7cde535ae69560bc3d7bfc3c8625",
"0xd0b6f8a0aa1b237f9966651b7fc26cc70984d6c9d2a5bc1cb32f7da7cd4f465c",
"0x64448519c35a156275438687b9756d9cfd615c35c25f76ee15b666a6190f9902",
"0xa1b07a176b879e1d4f1c2e97d72ec16fa3e2e760d28c6eacd5ec7e664f37b30c",
"0x4fd9b7897e826b4671048b62598da3386966466f28de29e8bccfc3c845b84436",
"0x5fb52e071b8c32e6d78f919b3ef7270b2bc9b84fdbb07813e337e44af16fbeec",
"0x4d51ebbbf5b07bbb747793b714bd2ecba5c0e73147c111afc8e70c0592cd8a23"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

