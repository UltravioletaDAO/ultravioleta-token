import { config as dotenvConfig } from 'dotenv';
import { register } from 'ts-node';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-verify';
import "@nomiclabs/hardhat-ethers"; //this is critical for ethers in the deploy.ts

dotenvConfig();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  etherscan: {
    apiKey: {
      snowtrace: "snowtrace",
      avalancheFujiTestnet: "avalancheFujiTestnet:",
    },
    customChains: [
      {
        network: "snowtrace",
        chainId: 43114,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan",
          browserURL: "https://avalanche.routescan.io"
        }
      }
    ]
  },
  networks: {
    avalanche_mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 43114 // This is the chain ID for Avalanche Fuji Testnet
    },
    avalanche_testnet: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 43113 // This is the chain ID for Avalanche Fuji Testnet
    }
  },
  sourcify: {
    enabled: true,
    apiUrl: "https://sourcify.dev/server",
    browserUrl: "https://repo.sourcify.dev",
  }
};

export default config;
