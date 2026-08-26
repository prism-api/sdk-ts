# Reference
## Api Evm Dex
<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">getWalletProfile</a>({ ...params }) -> Prism.EvmDexWalletProfile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a wallet profile for a specific wallet.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.getWalletProfile({
    chain_id: 1,
    wallet: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    options: {
        include_metadata: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.GetWalletProfileDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">searchWalletProfiles</a>({ ...params }) -> Prism.SearchWalletProfilesDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter, query, and sort wallet profiles based on specified metrics and conditions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.searchWalletProfiles({
    limit: 10,
    chain_id: 1,
    query: {
        text: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
        fields: ["wallet_address"]
    },
    sort: {
        field: "metrics.7d.cumulative_pnl",
        direction: "desc"
    },
    options: {
        include_metadata: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.SearchWalletProfilesDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">getTokenProfile</a>({ ...params }) -> Prism.EvmDexTokenProfile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the profile for a specific token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.getTokenProfile({
    chain_id: 1,
    token: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
    options: {
        include_metadata: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.GetTokenProfileDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">searchTokenProfiles</a>({ ...params }) -> Prism.SearchTokenProfilesDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter, query, and sort token profiles based on specified metrics and conditions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.searchTokenProfiles({
    limit: 10,
    chain_id: 1,
    query: {
        text: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
        fields: ["token_address"]
    },
    sort: {
        field: "metrics.1d.usd_volume",
        direction: "desc"
    },
    options: {
        include_metadata: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.SearchTokenProfilesDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">getPositionProfile</a>({ ...params }) -> Prism.EvmDexPositionProfile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a position profile for a specific wallet-token pair.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.getPositionProfile({
    chain_id: 1,
    wallet: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    token: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
    options: {
        include_metadata: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.GetPositionProfileDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">searchPositionProfiles</a>({ ...params }) -> Prism.SearchPositionProfilesDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter, query, and sort position profiles based on specified metrics and conditions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.searchPositionProfiles({
    limit: 10,
    chain_id: 1,
    sort: {
        field: "metrics.7d.pnl",
        direction: "desc"
    },
    options: {
        include_metadata: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.SearchPositionProfilesDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">getTrades</a>({ ...params }) -> Prism.GetTradesDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns trades for a wallet and/or token on a single chain.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.getTrades({
    limit: 20,
    chain_id: 1,
    wallet: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.GetTradesDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">getSwaps</a>({ ...params }) -> Prism.GetSwapsDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns swaps for a combination of wallet, token and/or pool.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.getSwaps({
    limit: 20,
    chain_id: 1,
    wallet: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.GetSwapsDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">getPrice</a>({ ...params }) -> Prism.EvmDexPrice[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns prices for one or more tokens or pools.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.getPrice({
    chain_id: 1,
    tokens: ["0x6982508145454Ce325dDbE47a25d4ec3d2311933"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.GetPriceDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">getPriceStats</a>({ ...params }) -> Prism.EvmDexPriceStats[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns price stats for one or more tokens or pools.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.getPriceStats({
    chain_id: 1,
    tokens: ["0x6982508145454Ce325dDbE47a25d4ec3d2311933"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.GetPriceStatsDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">getPriceCandles</a>({ ...params }) -> Prism.EvmDexPriceCandle[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns price candles for a specific token and/or pool.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.getPriceCandles({
    chain_id: 1,
    token: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
    from: "2026-04-27T00:00:00Z",
    to: "2026-04-27T01:00:00Z",
    interval: 60
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.GetPriceCandlesDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.evm.dex.<a href="/src/api/resources/api/resources/evm/resources/dex/client/Client.ts">getPriceHistory</a>({ ...params }) -> Prism.EvmDexPriceHistory[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns price history for one or more tokens or pools.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.evm.dex.getPriceHistory({
    chain_id: 1,
    tokens: ["0x6982508145454Ce325dDbE47a25d4ec3d2311933"],
    from: "2026-04-27T00:00:00Z",
    to: "2026-04-27T01:00:00Z",
    interval: 3600
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.evm.GetPriceHistoryDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Api Solana Dex
<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">getWalletProfile</a>({ ...params }) -> Prism.SolanaDexWalletProfile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a wallet profile for a specific wallet.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.getWalletProfile({
    wallet: "suqh5sHtr8HyJ7q8scBimULPkPpA557prMG47xCHQfK",
    options: {
        include_metadata: true,
        include_labels: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.GetWalletProfileDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">searchWalletProfiles</a>({ ...params }) -> Prism.SearchWalletProfilesDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter, query, and sort wallet profiles based on specified metrics and conditions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.searchWalletProfiles({
    limit: 10,
    query: {
        text: "cupsey",
        fields: ["identity.name"]
    },
    sort: {
        field: "metrics.7d.cumulative_pnl",
        direction: "desc"
    },
    dynamic_labels: {
        "smart": {}
    },
    options: {
        include_metadata: true,
        include_labels: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.SearchWalletProfilesDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">getTokenProfile</a>({ ...params }) -> Prism.SolanaDexTokenProfile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the profile for a specific token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.getTokenProfile({
    token: "Z4d9YXR4pSkdKcu9UBcwxHp7i32buzdDtAR1b1Gbonk",
    options: {
        include_metadata: true,
        include_market: true,
        include_labels: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.GetTokenProfileDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">searchTokenProfiles</a>({ ...params }) -> Prism.SearchTokenProfilesDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter, query, and sort token profiles based on specified metrics and conditions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.searchTokenProfiles({
    limit: 10,
    query: {
        text: "bonk",
        fields: ["metadata.name"]
    },
    sort: {
        field: "market.liquidity",
        direction: "desc"
    },
    dynamic_labels: {
        "trending": {}
    },
    options: {
        include_metadata: true,
        include_market: true,
        include_labels: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.SearchTokenProfilesDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">getPositionProfile</a>({ ...params }) -> Prism.SolanaDexPositionProfile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a position profile for a specific wallet-token pair.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.getPositionProfile({
    wallet: "suqh5sHtr8HyJ7q8scBimULPkPpA557prMG47xCHQfK",
    token: "Z4d9YXR4pSkdKcu9UBcwxHp7i32buzdDtAR1b1Gbonk",
    options: {
        include_metadata: true,
        include_labels: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.GetPositionProfileDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">searchPositionProfiles</a>({ ...params }) -> Prism.SearchPositionProfilesDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter, query, and sort position profiles based on specified metrics and conditions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.searchPositionProfiles({
    limit: 10,
    sort: {
        field: "metrics.7d.pnl",
        direction: "desc"
    },
    dynamic_labels: {
        "winner": {}
    },
    options: {
        include_metadata: true,
        include_labels: true,
        include_metrics: ["7d"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.SearchPositionProfilesDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">getTrades</a>({ ...params }) -> Prism.GetTradesDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns trades for a combination of wallet, token and/or pool.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.getTrades({
    limit: 20,
    wallet: "suqh5sHtr8HyJ7q8scBimULPkPpA557prMG47xCHQfK"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.GetTradesDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">getSwaps</a>({ ...params }) -> Prism.GetSwapsDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns swaps for a combination of wallet, token and/or pool.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.getSwaps({
    limit: 20,
    wallet: "suqh5sHtr8HyJ7q8scBimULPkPpA557prMG47xCHQfK"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.GetSwapsDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">getPrice</a>({ ...params }) -> Prism.SolanaDexPrice[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns prices for one or more tokens or pools.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.getPrice({
    tokens: ["Z4d9YXR4pSkdKcu9UBcwxHp7i32buzdDtAR1b1Gbonk"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.GetPriceDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">getPriceStats</a>({ ...params }) -> Prism.SolanaDexPriceStats[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns price stats for one or more tokens or pools.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.getPriceStats({
    tokens: ["Z4d9YXR4pSkdKcu9UBcwxHp7i32buzdDtAR1b1Gbonk"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.GetPriceStatsDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">getPriceCandles</a>({ ...params }) -> Prism.SolanaDexPriceCandle[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns price candles for a specific token and/or pool.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.getPriceCandles({
    token: "Z4d9YXR4pSkdKcu9UBcwxHp7i32buzdDtAR1b1Gbonk",
    from: "2026-04-27T00:00:00Z",
    to: "2026-04-27T01:00:00Z",
    interval: 60
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.GetPriceCandlesDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.api.solana.dex.<a href="/src/api/resources/api/resources/solana/resources/dex/client/Client.ts">getPriceHistory</a>({ ...params }) -> Prism.SolanaDexPriceHistory[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns price history for one or more tokens or pools.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.api.solana.dex.getPriceHistory({
    tokens: ["Z4d9YXR4pSkdKcu9UBcwxHp7i32buzdDtAR1b1Gbonk"],
    from: "2026-04-27T00:00:00Z",
    to: "2026-04-27T01:00:00Z",
    interval: 3600
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Prism.api.solana.GetPriceHistoryDexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

