
![Licence](https://img.shields.io/badge/license-MIT-blue.svg) [![npm version](https://img.shields.io/npm/v/near-wallet-validator.svg?style=flat)](https://www.npmjs.com/package/near-wallet-validator)
[![Downloads](https://img.shields.io/npm/dt/near-wallet-validator.svg)](https://www.npmjs.com/package/near-wallet-validator)

# near-wallet-validator

Checks if a near wallet exists.


## Installation

```npm i near-wallet-validator```

## Live Demo

https://codesandbox.io/s/near-wallet-validator-example-3r2lyo

## Example

```javascript
import "./styles.css";
import { NearRPC, nearWalletExists } from "near-wallet-validator";
import { useEffect, useState } from "react";

export default function App() {
  const [walletExists, setWalletExists] = useState(false);
  const checkWallet = async () => {
    const res = await nearWalletExists("1.testnet", NearRPC.TESTNET);
    setWalletExists(res);
  };

  useEffect(() => {
    checkWallet();
  }, []);

  return (
    <div className="App">
      <h1>near-wallet-validator</h1>
      <p>Does 1.testnet exists in testnet?</p>
      <span>{walletExists ? "Yes" : "No"}</span>
    </div>
  );
}

```


## API

|   Property   |  Type  |    Description    |
| :---         |     :---      |          :--- |
| wallet   | string    | Wallet name.    |
| rpc     | NearRPC    | TESTNET or MAINNET.  |




