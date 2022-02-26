# Starter Kits

Starter Kits est un Kit de démarrage tutoriel Polygon contenant React, @web3-react, Infura.

# 0. Mise en place de l'environnement

Installation les fondamentaux pour l'environnement, incluent node, web3, react, truffle, etc..

# Installer Ganache, Truffle

![img](https://avatars.githubusercontent.com/u/88427645?s=200&v=4)

Use Starter Kits build your DAPP right away!
Utiliser Starter Kits et développer votre propre DApp directement !

Un Kit de démarrage tutoriel Polygon contenant React, @web3-react, Infura.

[Documentation](https://docs.matic.network/docs/develop/getting-started) - [Tutoriel](https://polygon-tutorial.soildstake.net)

#### Installer Ganache

```javascripts
Télécharger les packages depuis https://www.trufflesuite.com/ganache
```

![img](https://www.trufflesuite.com/img/ganache-window.png)

Capture d'écran de Ganache

------

> Ganache est nécessaire pour le développement de DApp sur une blockchain locale, cela permet de voire des informations txns, créer des dossiers de travail, deployer des contrats intelligent et procéder à des vérification via l'interface.

#### Installer Truffle

```javascripts
npm install -g truffle 
```

> Truffle est utilisé pour le développement, le test et le deploiement de contrat intelligent.
>
> Davantage de tutoriels à propos de Truffle: https://learnblockchain.cn/docs/truffle/

# Créer votre DAPP en utilisant le template Starter Kits

# Create your DAPP using Starter Kits Template

#### Quick Start

```javascripts
npx create-react-app {YOUR_PROJECT_NAME} --template polygon-starter-kit
cd {YOUR_PROJECT_NAME}
npm run start 
```

![npm start](https://cdn.rawgit.com/facebook/create-react-app/27b42ac/screencast.svg)

(npx vient de npm 5.2+ or supérieur)

Vous pouvez ensuite utiliser votre navigateur et vous rendre sur `http://localhost:3000/` pour voir votre application.

Lorsque vous vous préparez au deploiment de votre projet en configuration de production, utilisez la commande `npm run build` pour créer un paquet compressé et le deployer.

#### Configuration Immédiate

Vous n'avez pas besoin d'installer ou de configurer des outils comme Webpack ou Babel. Ceux-ci viennent déjà pré-configurer et cachée,  
There is no need for you to install or configurate tools like Webpack or Babel. They comes pre-configurated and hiddened. Vous disposez donc d'un pack d'environnement complet où vous ne devez vous préoccuper que de la partie codage.

Créer votre projet avec le template et c'est parti !

#### Création d'une application

Vous aurez besoin d'utiliser une version de Node supérieur ou égal à 6, sur votre ordinateur local (sur le serveur vous n'êtes pas obligé). Il existe nvm(macOS/Linux) ou nvm-windows pour vous aider à basculer facilement entre les différentes versions de Node.

Création d'une nouvelle application

```javascripts
npx create-react-app {YOUR_PROJECT_NAME} --template polygon-starter-kit
```

Un nouveau dossier nommé `{YOUR_PROJECT_NAME}` sera crée sous le dossier ou vous vous trouverez. La structure du fichier sera la suivante : 

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
	│   ├── icon-devx.svg
	│   ├── logo512.png
	│   └── polygon-logo.svg
	├── components
	│   ├── Contents
	│   │   └── index.js
	│   ├── Footer
	│   │   ├── footer.css
	│   │   └── index.js
	│   ├── Headers
	│   │   └── index.js
	│   └── Wallet
	│       ├── ConnectWallet.js
	│       └── WalletInfo.js
	├── contracts
	│   └── Migrations.sol
	├── hooks
	│   └── index.js
	├── index.css
	├── index.js
	├── lib
	│   └── connectors
	│       └── index.js
	├── reportWebVitals.js
	└── setupTests.js
└── truffle-config.js
```


# Configuration de l'environnement Truffle


##### truffle-config.js  

```javascripts
const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require("@truffle/hdwallet-provider");


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,     
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
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
```

Crée un fichier `.env` dans le fichier racine

```
vim .env
MNEMONIC=" {YOUR_MNEMONIC OR YOUR_PRIVATE_KEY} "
POLYGON_RPC = " {PUBLIC_POLYGON_RPC} OR https://rpc-mainnet.matic.network"
POLYGON_MUMBAI_RPC = " {PUBLIC_POLYGON_MUMBAI_RPC} or https://rpc-mumbai.maticvigil.com/"
```

Si vous voulez en savoir davantage à propos de `PUBLIC_RPC` veuillez vous rendre sur ：[Documentation](https://docs.matic.network/docs/develop/network-details/network)

# 1.Structure du projet

Polygon-Starter-Kit Project Template Introduction et comment il utilise ses differents modules.

#### La structure du Polygon-Starter-Kit Project ci-dessous

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
	│   ├── icon-devx.svg
	│   ├── logo512.png
	│   └── polygon-logo.svg
	├── components
	│   ├── Contents
	│   │   └── index.js
	│   ├── Footer
	│   │   ├── footer.css
	│   │   └── index.js
	│   ├── Headers
	│   │   └── index.js
	│   └── Wallet
	│       ├── ConnectWallet.js
	│       └── WalletInfo.js
	├── contracts
	│   └── Migrations.sol
	├── hooks
	│   └── index.js
	├── index.css
	├── index.js
	├── lib
	│   └── connectors
	│       └── index.js
	├── reportWebVitals.js
	└── setupTests.js
└── truffle-config.js
```

- `migrations` is used to contain JS scripts for smart contract migration and deployment
- `src` DAPP Client source code
- `src/contracts` For containing `smart contract`，and its also the contract location pointer in the truffle configuration
- `src/abis` for containing abi files after Truffle Compilation
- `hooks/index.js` initialize `Provider`‘s request hook in `@web3-react`

- `migrations` contient sous les scripts JS pour la migration et le deploiement de contrat-intelligent
- `src` Source code du client DAPP
- `src/contracts` contient `smart contract` et c'est aussi la localisation pointé dans la configuration truffle
- `src/abis` contient les fichiers abi après la compilation Truffle 
- `hooks/index.js` initialise les requêtes `Provider` hook en `@web3-react`