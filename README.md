# nOS Block Explorer

> Based on the [ARK Core blockchain explorer](https://github.com/ArkEcosystem/explorer) built in Tailwind CSS & Vue.JS.

[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

> nOS Explorer Maintainer: [Dean van Dugteren](https://github.com/deanpress)
> ARK Explorer Maintainer: [Michel Kraaijeveld](https://github.com/ItsANameToo)

You can access it at [https://testnet-explorer.nos.io/](https://testnet-explorer.nos.io/).

## Build Setup

### 1. Clone the repository

```bash
git clone https://github.com/nos/explorer
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Build for Production

#### 3.1 Devnet (Public testnet)

```bash
yarn build:devnet
```

#### 3.2 Custom

```bash
yarn build --network my-custom-network
```

#### 3.3 GitHub Pages

If you are going to host your explorer instance on GitHub Pages you will need to specify your base url in most cases as GitHub Pages serves repositories from sub-directories instead of sub-domains.

```bash
yarn build --base https://username.github.io/repository/
```

A running instance of the explorer on GitHub Pages can be found at https://arkecosystem.github.io/.

> This step is not required if you are hosting the explorer on your "root" repository which is usually your username https://username.github.io/.

#### 3.4 Run Express Server

You can run the explorer as an express server. This makes it a little more light-weight but not needing to have services such as apache or nginx.

```bash
EXPLORER_HOST="127.0.0.1" EXPLORER_PORT="4200" node express-server.js
```

> Keep in mind that this requires you to run your own server and a running instance of nginx.

### 4. Development

#### 4.1 Mainnet

```bash
yarn dev # or yarn dev:mainnet
```

#### 4.2 Devnet

```bash
yarn dev:devnet
```

#### 4.3 Custom

```bash
yarn dev --env.network=custom
```

### 5. History Mode

If you wish to remove the `/#/` from your URLs you can follow those steps https://router.vuejs.org/en/essentials/history-mode.html.

#### 5.1 Build

```bash
yarn build:mainnet --history
```

#### 5.2 Development

```bash
yarn dev --env.routerMode=history
```

## Testing

``` bash
$ yarn test
```

## Contributing

* If you find any bugs, submit an [issue](../../issues) or open a [pull-request](../../pulls), helping us catch and fix them.
* Engage with other users and developers on the [ArkEcosystem Slack](https://ark.io/slack/).
* Join our [gitter](https://gitter.im/ark-developers/Lobby).
* [Contribute bounties](https://github.com/ArkEcosystem/bounty-program).

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](../../contributors).

## License

[MIT](LICENSE) © [ARK Ecosystem](https://ark.io)
