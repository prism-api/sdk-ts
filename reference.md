# Reference
## Solana Dex
<details><summary><code>client.solana.dex.<a href="/src/api/resources/solana/resources/dex/client/Client.ts">getWalletProfile</a>({ ...params }) -> PrismApi.SolanaDexWalletProfile</code></summary>
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
await client.solana.dex.getWalletProfile({
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

**request:** `PrismApi.solana.GetWalletProfileDexRequest` 
    
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

<details><summary><code>client.solana.dex.<a href="/src/api/resources/solana/resources/dex/client/Client.ts">searchWalletProfiles</a>({ ...params }) -> PrismApi.SearchWalletProfilesDexResponse</code></summary>
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
await client.solana.dex.searchWalletProfiles({
    limit: 10,
    query: {
        text: "cupsey",
        fields: ["wallet_address"]
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

**request:** `PrismApi.solana.SearchWalletProfilesDexRequest` 
    
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

<details><summary><code>client.solana.dex.<a href="/src/api/resources/solana/resources/dex/client/Client.ts">getTokenProfile</a>({ ...params }) -> PrismApi.SolanaDexTokenProfile</code></summary>
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
await client.solana.dex.getTokenProfile({
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

**request:** `PrismApi.solana.GetTokenProfileDexRequest` 
    
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

<details><summary><code>client.solana.dex.<a href="/src/api/resources/solana/resources/dex/client/Client.ts">searchTokenProfiles</a>({ ...params }) -> PrismApi.SearchTokenProfilesDexResponse</code></summary>
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
await client.solana.dex.searchTokenProfiles({
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

**request:** `PrismApi.solana.SearchTokenProfilesDexRequest` 
    
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

<details><summary><code>client.solana.dex.<a href="/src/api/resources/solana/resources/dex/client/Client.ts">getTrades</a>({ ...params }) -> PrismApi.GetTradesDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns trades for a wallet, token or both.
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
await client.solana.dex.getTrades({
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

**request:** `PrismApi.solana.GetTradesDexRequest` 
    
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

<details><summary><code>client.solana.dex.<a href="/src/api/resources/solana/resources/dex/client/Client.ts">getSwaps</a>({ ...params }) -> PrismApi.GetSwapsDexResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns swaps for a wallet, token or both.
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
await client.solana.dex.getSwaps({
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

**request:** `PrismApi.solana.GetSwapsDexRequest` 
    
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

<details><summary><code>client.solana.dex.<a href="/src/api/resources/solana/resources/dex/client/Client.ts">getPrice</a>({ ...params }) -> PrismApi.SolanaDexPrice[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns prices for one or more tokens.
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
await client.solana.dex.getPrice({
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

**request:** `PrismApi.solana.GetPriceDexRequest` 
    
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

<details><summary><code>client.solana.dex.<a href="/src/api/resources/solana/resources/dex/client/Client.ts">getPriceStats</a>({ ...params }) -> PrismApi.SolanaDexPriceStats[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns price stats for one or more tokens.
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
await client.solana.dex.getPriceStats({
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

**request:** `PrismApi.solana.GetPriceStatsDexRequest` 
    
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

<details><summary><code>client.solana.dex.<a href="/src/api/resources/solana/resources/dex/client/Client.ts">getPriceCandles</a>({ ...params }) -> PrismApi.SolanaDexPriceCandle[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns price candles for a specific token.
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
await client.solana.dex.getPriceCandles({
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

**request:** `PrismApi.solana.GetPriceCandlesDexRequest` 
    
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

<details><summary><code>client.solana.dex.<a href="/src/api/resources/solana/resources/dex/client/Client.ts">getPriceHistory</a>({ ...params }) -> PrismApi.SolanaDexPriceHistory[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns price history for one or more tokens.
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
await client.solana.dex.getPriceHistory({
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

**request:** `PrismApi.solana.GetPriceHistoryDexRequest` 
    
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

