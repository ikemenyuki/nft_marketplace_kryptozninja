require('@nomiclabs/hardhat-waffle');

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/LDX3hSn_G5NfEi3C1wqdniwEppbsEFT8',
      accounts: ['5eb9bdbbd3e6bd17b79b180546fec7559b74fbf0ab4c88f88e67f561dff8d1c4'],
    },
  },
  solidity: '0.8.4',
};
