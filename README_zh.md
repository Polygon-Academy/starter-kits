<div align=center> 
<img src="https://avatars.githubusercontent.com/u/88427645?s=200&v=4" style="border-radius:10px">
</div>

<center> Starter Kits 快速构建 DAPP </center>

<center> An Polygon Starter Kit Tutorial containing React, @web3-react, Infura. </center>
<div align=center> <a href="https://docs.matic.network/docs/develop/getting-started"> Developer Docs</a> - <a href="https://polygon-tutorial.soildstake.net"> Tutorial </a></div>    




## 0. 环境配置 

### Requirements 

#### 安装 ganache 
```javascripts
Download Package from https://www.trufflesuite.com/ganache
```

#### 快速开始
```javascripts
npx create-react-app {YOUR_PROJECT_NAME} --template polygon-starter-kit
cd {YOUR_PROJECT_NAME}
npm run start 
```
<img src="https://cdn.rawgit.com/facebook/create-react-app/27b42ac/screencast.svg" width="600" alt="npm start">

(npx 来自 npm 5.2+ 或更高版本, 查看 npm 旧版本的说明)

然后打开 http://localhost:3000/ 查看你的应用。

当你准备部署到生产环境时，使用 npm run build 创建一个压缩后的 bundle（包）。

#### 立即开始
你 无需 安装或配置 Webpack 或 Babel 等工具。 它们是预先配置好并且隐藏的，因此你可以专注于代码。

只需创建一个项目，就可以了。

#### 创建应用程序
你需要在本地开发计算机上使用 Node >= 6（但在服务器上不需要）。 你可以使用 nvm (macOS/Linux) 或 nvm-windows 轻松地在不同项目之间切换 Node 版本。

创建新应用程序

```javascripts
npx create-react-app {YOUR_PROJECT_NAME} --template polygon-starter-kit
```

则会在当前目录中创建一个名为 `{YOUR_PROJECT_NAME}` 的目录。在该目录中，它将生成初始项目结构并安装依赖项：

```javascripts
{YOUR_PROJECT_NAME}
├── README.md
├── node_modules
├── package.json
├── migrations 
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
	├── App.css
	├── App.js
	├── App.test.js
	├── assets
	│   ├── icon-devx.svg
	│   ├── logo512.png
	│   └── polygon-logo.svg
	├── components
	│   ├── Contents
	│   │   └── index.js
	│   ├── Footer
	│   │   ├── footer.css
	│   │   └── index.js
	│   ├── Headers
	│   │   └── index.js
	│   └── Wallet
	│       ├── ConnectWallet.js
	│       └── WalletInfo.js
	├── contracts
	│   └── Migrations.sol
	├── hooks
	│   └── index.js
	├── index.css
	├── index.js
	├── lib
	│   └── connectors
	│       └── index.js
	├── reportWebVitals.js
	└── setupTests.js
└── truffle-config.js
```

##### truffle-config.js  
```javascripts
const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require("@truffle/hdwallet-provider");


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,     
      network_id: "*" // Match any network id
    },
    polygon: {
      provider: new HDWalletProvider(mnemonic, process.env.POLYGON_RPC),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mumbai: {
      provider: new HDWalletProvider(mnemonic, process.env.POLYGON_MUMBAI_RPC),
      network_id: 8001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
```

 在项目根目录下创建 `.env` 文件
 ```
 vim .env
 MNEMONIC=" {YOUR_MNEMONIC OR YOUR_PRIVATE_KEY} "
 POLYGON_RPC = " {PUBLIC_POLYGON_RPC} OR https://rpc-mainnet.matic.network"
 POLYGON_MUMBAI_RPC = " {PUBLIC_POLYGON_MUMBAI_RPC} or https://rpc-mumbai.maticvigil.com/"
 ```
 
 更多的 `PUBLIC_RPC` 参考：[Development Docs](https://docs.matic.network/docs/develop/network-details/network)
 
## 1. 项目结构

#### Polygon-Starter-Kit 目录结构如下
```javascripts
{YOUR_PROJECT_NAME}
├── README.md
├── node_modules
├── package.json
├── migrations 
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
	├── App.css
	├── App.js
	├── App.test.js
	├── assets
	│   ├── icon-devx.svg
	│   ├── logo512.png
	│   └── polygon-logo.svg
	├── components
	│   ├── Contents
	│   │   └── index.js
	│   ├── Footer
	│   │   ├── footer.css
	│   │   └── index.js
	│   ├── Headers
	│   │   └── index.js
	│   └── Wallet
	│       ├── ConnectWallet.js
	│       └── WalletInfo.js
	├── contracts
	│   └── Migrations.sol
	├── hooks
	│   └── index.js
	├── index.css
	├── index.js
	├── lib
	│   └── connectors
	│       └── index.js
	├── reportWebVitals.js
	└── setupTests.js
└── truffle-config.js
```

其中

- `migrations` 用来存放迁移、部署合约的 JS 脚本
- `src` 客户端 DAPP 目录
- `src/contracts` 用来存放编写的`智能合约(smart contract)`，同时 truffle 的 contract 目录指向
- `src/abis` 用来存放 truffle 编译后的 abis 文件
- `hooks/index.js` 初始化 `@web3-react` 中的 `Provider` 的请求钩子