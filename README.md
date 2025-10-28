# Prism API Go SDK

Official Prism API TypeScript SDK.

## Installation

```bash
npm install github:prism-api/sdk-ts
```

## Usage

```ts
import { Configuration, SolanaWalletsApi } from "@prism-api/sdk-ts";

const config = new Configuration({
    apiKey: "your-api-key-here",
});

const walletsApi = new SolanaWalletsApi(config);

async function main() {
    try {
        const response = await walletsApi.getWalletProfile({
            getWalletProfileRequest: {
                wallet: "suqh5sHtr8HyJ7q8scBimULPkPpA557prMG47xCHQfK",
            },
        });

        console.log("Wallet Profile:", response);
    } catch (err) {
        console.error("Error calling API:", err);
    }
}

main();
```
