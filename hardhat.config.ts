/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import '@nomiclabs/hardhat-waffle';
import secret from './environment/secrets.json'

export default {
  solidity: '0.8.7',
  paths: {
    sources: './blockchain/contracts',
    tests: './blockchain/tests',
    cache: './blockchain/cache',
    artifacts: './blockchain/artifacts',
  },
  networks: {
    mumbai: {
      url: secret.mumbainode,
      accounts: [secret.privatekey],
    },
  },
}
