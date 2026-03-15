/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface GetPortfolioRequest
 */
export interface GetPortfolioRequest {
    /**
     * Wallet address to retrieve portfolio for.
     * @type {string}
     * @memberof GetPortfolioRequest
     */
    wallet: string;
}
/**
 * 
 * @export
 * @interface GetPriceCandlesRequest
 */
export interface GetPriceCandlesRequest {
    /**
     * Token address to retrieve price candles for.
     * @type {string}
     * @memberof GetPriceCandlesRequest
     */
    token: string;
    /**
     * Start time for the candles range.
     * Must be used in conjunction with `to`.
     * 
     * @type {number}
     * @memberof GetPriceCandlesRequest
     */
    from?: number;
    /**
     * End time for the candles range.
     * Must be used in conjunction with `from` or `count`.
     * Defaults to the current time.
     * 
     * @type {number}
     * @memberof GetPriceCandlesRequest
     */
    to?: number;
    /**
     * Number of candles to return.
     * Must be used in conjunction with `to`.
     * 
     * @type {number}
     * @memberof GetPriceCandlesRequest
     */
    count?: number;
    /**
     * Time interval to aggregate candles by.
     * @type {number}
     * @memberof GetPriceCandlesRequest
     */
    interval: number;
}
/**
 * 
 * @export
 * @interface GetPriceHistoryRequest
 */
export interface GetPriceHistoryRequest {
    /**
     * List of token addresses to retrieve price history for.
     * @type {Array<string>}
     * @memberof GetPriceHistoryRequest
     */
    tokens: Array<string>;
    /**
     * Start time for the history range.
     * @type {number}
     * @memberof GetPriceHistoryRequest
     */
    from: number;
    /**
     * End time for the history range.
     * Defaults to the current time.
     * 
     * @type {number}
     * @memberof GetPriceHistoryRequest
     */
    to?: number;
    /**
     * Time interval to aggregate metrics by.
     * @type {number}
     * @memberof GetPriceHistoryRequest
     */
    interval: number;
}
/**
 * 
 * @export
 * @interface GetPriceRequest
 */
export interface GetPriceRequest {
    /**
     * List of token addresses to retrieve prices for.
     * @type {Array<string>}
     * @memberof GetPriceRequest
     */
    tokens: Array<string>;
}
/**
 * 
 * @export
 * @interface GetPriceStatsRequest
 */
export interface GetPriceStatsRequest {
    /**
     * List of token addresses to retrieve price stats for.
     * @type {Array<string>}
     * @memberof GetPriceStatsRequest
     */
    tokens: Array<string>;
}
/**
 * 
 * @export
 * @interface GetSwaps200Response
 */
export interface GetSwaps200Response {
    /**
     * Total number of matching items
     * @type {number}
     * @memberof GetSwaps200Response
     */
    count?: number;
    /**
     * Cursor for pagination
     * @type {string}
     * @memberof GetSwaps200Response
     */
    cursor?: string;
    /**
     * 
     * @type {Array<SolanaDexSwap>}
     * @memberof GetSwaps200Response
     */
    data?: Array<SolanaDexSwap>;
}
/**
 * 
 * @export
 * @interface GetSwapsRequest
 */
export interface GetSwapsRequest {
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof GetSwapsRequest
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {string}
     * @memberof GetSwapsRequest
     */
    cursor?: string;
    /**
     * Wallet address to retrieve swaps for.
     * @type {string}
     * @memberof GetSwapsRequest
     */
    wallet?: string;
    /**
     * Token address to retrieve swaps for.
     * @type {string}
     * @memberof GetSwapsRequest
     */
    token?: string;
}
/**
 * 
 * @export
 * @interface GetTokenProfileRequest
 */
export interface GetTokenProfileRequest {
    /**
     * Token address to retrieve profile for.
     * @type {string}
     * @memberof GetTokenProfileRequest
     */
    token: string;
    /**
     * List of time windows to include in the profile metrics.
     * @type {Array<SolanaDexTokenProfileTimeWindowEnum>}
     * @memberof GetTokenProfileRequest
     */
    time_windows?: Array<SolanaDexTokenProfileTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetTokenProfilesByCreatorRequest
 */
export interface GetTokenProfilesByCreatorRequest {
    /**
     * Creator address to retrieve token profiles for.
     * @type {string}
     * @memberof GetTokenProfilesByCreatorRequest
     */
    creator?: string;
    /**
     * List of time windows to include in the profile metrics.
     * @type {Array<SolanaDexTokenProfileTimeWindowEnum>}
     * @memberof GetTokenProfilesByCreatorRequest
     */
    time_windows?: Array<SolanaDexTokenProfileTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetTokenProfilesRequest
 */
export interface GetTokenProfilesRequest {
    /**
     * List of token addresses to retrieve profile for.
     * @type {Array<string>}
     * @memberof GetTokenProfilesRequest
     */
    tokens: Array<string>;
    /**
     * 
     * @type {GetTokenProfilesRequestSort}
     * @memberof GetTokenProfilesRequest
     */
    sort?: GetTokenProfilesRequestSort;
    /**
     * List of time windows to include in the profile metrics.
     * @type {Array<SolanaDexTokenProfileTimeWindowEnum>}
     * @memberof GetTokenProfilesRequest
     */
    time_windows?: Array<SolanaDexTokenProfileTimeWindowEnum>;
}
/**
 * Sorting rule.
 * @export
 * @interface GetTokenProfilesRequestSort
 */
export interface GetTokenProfilesRequestSort {
    /**
     * 
     * @type {any}
     * @memberof GetTokenProfilesRequestSort
     */
    field: any | null;
    /**
     * Sorting direction.
     * @type {string}
     * @memberof GetTokenProfilesRequestSort
     */
    direction: GetTokenProfilesRequestSortDirectionEnum;
}

/**
* @export
* @enum {string}
*/
export enum GetTokenProfilesRequestSortDirectionEnum {
    ASC = 'asc',
    DESC = 'desc'
}

/**
 * 
 * @export
 * @interface GetTrades200Response
 */
export interface GetTrades200Response {
    /**
     * Total number of matching items
     * @type {number}
     * @memberof GetTrades200Response
     */
    count?: number;
    /**
     * Cursor for pagination
     * @type {string}
     * @memberof GetTrades200Response
     */
    cursor?: string;
    /**
     * 
     * @type {Array<SolanaDexTrade>}
     * @memberof GetTrades200Response
     */
    data?: Array<SolanaDexTrade>;
}
/**
 * 
 * @export
 * @interface GetTradesRequest
 */
export interface GetTradesRequest {
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof GetTradesRequest
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {string}
     * @memberof GetTradesRequest
     */
    cursor?: string;
    /**
     * Wallet address to retrieve trades for.
     * @type {string}
     * @memberof GetTradesRequest
     */
    wallet?: string;
    /**
     * Token address to retrieve trades for.
     * @type {string}
     * @memberof GetTradesRequest
     */
    token?: string;
}
/**
 * 
 * @export
 * @interface GetWalletProfileRequest
 */
export interface GetWalletProfileRequest {
    /**
     * Wallet address to retrieve profile for.
     * @type {string}
     * @memberof GetWalletProfileRequest
     */
    wallet: string;
    /**
     * List of time windows to include in the profile metrics.
     * @type {Array<SolanaDexWalletProfileTimeWindowEnum>}
     * @memberof GetWalletProfileRequest
     */
    time_windows?: Array<SolanaDexWalletProfileTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetWalletProfilesRequest
 */
export interface GetWalletProfilesRequest {
    /**
     * List of wallet addresses to retrieve profile for.
     * @type {Array<string>}
     * @memberof GetWalletProfilesRequest
     */
    wallets?: Array<string>;
    /**
     * 
     * @type {SolanaDexProfileSearchPayloadSortField}
     * @memberof GetWalletProfilesRequest
     */
    sort?: SolanaDexProfileSearchPayloadSortField;
    /**
     * List of time windows to include in the profile metrics.
     * @type {Array<SolanaDexWalletProfileTimeWindowEnum>}
     * @memberof GetWalletProfilesRequest
     */
    time_windows?: Array<SolanaDexWalletProfileTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    error?: string;
}
/**
 * 
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject1
     */
    error?: string;
}
/**
 * 
 * @export
 * @interface InlineObject2
 */
export interface InlineObject2 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject2
     */
    error?: string;
}
/**
 * 
 * @export
 * @interface InlineObject3
 */
export interface InlineObject3 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject3
     */
    error?: string;
}
/**
 * 
 * @export
 * @interface InlineObject4
 */
export interface InlineObject4 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject4
     */
    error?: string;
}
/**
 * 
 * @export
 * @interface PaginatedResponse
 */
export interface PaginatedResponse {
    /**
     * Total number of matching items
     * @type {number}
     * @memberof PaginatedResponse
     */
    count?: number;
    /**
     * Cursor for pagination
     * @type {string}
     * @memberof PaginatedResponse
     */
    cursor?: string;
}
/**
 * 
 * @export
 * @interface PayloadPagination
 */
export interface PayloadPagination {
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof PayloadPagination
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {string}
     * @memberof PayloadPagination
     */
    cursor?: string;
}
/**
 * 
 * @export
 * @interface SearchSolanaDexTokenProfiles200Response
 */
export interface SearchSolanaDexTokenProfiles200Response {
    /**
     * Total number of matching items
     * @type {number}
     * @memberof SearchSolanaDexTokenProfiles200Response
     */
    count?: number;
    /**
     * Cursor for pagination
     * @type {string}
     * @memberof SearchSolanaDexTokenProfiles200Response
     */
    cursor?: string;
    /**
     * 
     * @type {Array<SolanaDexTokenProfile>}
     * @memberof SearchSolanaDexTokenProfiles200Response
     */
    data?: Array<SolanaDexTokenProfile>;
}
/**
 * 
 * @export
 * @interface SearchSolanaDexTokenProfilesRequest
 */
export interface SearchSolanaDexTokenProfilesRequest {
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof SearchSolanaDexTokenProfilesRequest
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {string}
     * @memberof SearchSolanaDexTokenProfilesRequest
     */
    cursor?: string;
    /**
     * 
     * @type {SolanaDexTokenProfileSearchPayloadQueryField}
     * @memberof SearchSolanaDexTokenProfilesRequest
     */
    query?: SolanaDexTokenProfileSearchPayloadQueryField;
    /**
     * Filter rules to apply.
     * An object following a [MongoDB query](https://www.mongodb.com/docs/compass/query/filter/) like syntax.
     * 
     * @type {object}
     * @memberof SearchSolanaDexTokenProfilesRequest
     */
    filter?: object;
    /**
     * 
     * @type {SolanaDexProfileSearchPayloadSortField}
     * @memberof SearchSolanaDexTokenProfilesRequest
     */
    sort?: SolanaDexProfileSearchPayloadSortField;
    /**
     * List of time windows to include in the profile metrics.
     * @type {Array<SolanaDexTokenProfileTimeWindowEnum>}
     * @memberof SearchSolanaDexTokenProfilesRequest
     */
    time_windows?: Array<SolanaDexTokenProfileTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface SearchSolanaDexWalletProfiles200Response
 */
export interface SearchSolanaDexWalletProfiles200Response {
    /**
     * Total number of matching items
     * @type {number}
     * @memberof SearchSolanaDexWalletProfiles200Response
     */
    count?: number;
    /**
     * Cursor for pagination
     * @type {string}
     * @memberof SearchSolanaDexWalletProfiles200Response
     */
    cursor?: string;
    /**
     * 
     * @type {Array<SolanaDexWalletProfile>}
     * @memberof SearchSolanaDexWalletProfiles200Response
     */
    data?: Array<SolanaDexWalletProfile>;
}
/**
 * 
 * @export
 * @interface SearchSolanaDexWalletProfilesRequest
 */
export interface SearchSolanaDexWalletProfilesRequest {
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof SearchSolanaDexWalletProfilesRequest
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {string}
     * @memberof SearchSolanaDexWalletProfilesRequest
     */
    cursor?: string;
    /**
     * Filter rules to apply.
     * An object following a [MongoDB query](https://www.mongodb.com/docs/compass/query/filter/) like syntax.
     * 
     * @type {object}
     * @memberof SearchSolanaDexWalletProfilesRequest
     */
    filter?: object;
    /**
     * 
     * @type {SolanaDexProfileSearchPayloadSortField}
     * @memberof SearchSolanaDexWalletProfilesRequest
     */
    sort?: SolanaDexProfileSearchPayloadSortField;
    /**
     * List of time windows to include in the profile metrics.
     * @type {Array<SolanaDexWalletProfileTimeWindowEnum>}
     * @memberof SearchSolanaDexWalletProfilesRequest
     */
    time_windows?: Array<SolanaDexWalletProfileTimeWindowEnum>;
}
/**
 * Wallet portfolio with total value and per-token breakdowns.
 * @export
 * @interface SolanaDexPortfolio
 */
export interface SolanaDexPortfolio {
    /**
     * Total portfolio value.
     * @type {number}
     * @memberof SolanaDexPortfolio
     */
    value?: number;
    /**
     * List of token holdings in the portfolio.
     * @type {Array<SolanaDexPortfolioTokensInner>}
     * @memberof SolanaDexPortfolio
     */
    tokens?: Array<SolanaDexPortfolioTokensInner>;
}
/**
 * 
 * @export
 * @interface SolanaDexPortfolioTokensInner
 */
export interface SolanaDexPortfolioTokensInner {
    /**
     * Token mint address.
     * @type {string}
     * @memberof SolanaDexPortfolioTokensInner
     */
    token?: string;
    /**
     * Token balance held by the wallet.
     * @type {number}
     * @memberof SolanaDexPortfolioTokensInner
     */
    balance?: number;
    /**
     * Current token price.
     * @type {number}
     * @memberof SolanaDexPortfolioTokensInner
     */
    price?: number;
    /**
     * Total value of the holding.
     * @type {number}
     * @memberof SolanaDexPortfolioTokensInner
     */
    value?: number;
}
/**
 * Current token price with block context.
 * @export
 * @interface SolanaDexPrice
 */
export interface SolanaDexPrice {
    /**
     * Token mint address.
     * @type {string}
     * @memberof SolanaDexPrice
     */
    token?: string;
    /**
     * Current token price.
     * @type {number}
     * @memberof SolanaDexPrice
     */
    usd_price?: number;
    /**
     * Solana block slot number.
     * @type {number}
     * @memberof SolanaDexPrice
     */
    block_slot?: number;
    /**
     * Timestamp of the block.
     * @type {number}
     * @memberof SolanaDexPrice
     */
    block_time?: number;
}
/**
 * OHLCV candle data for charting and technical analysis.
 * @export
 * @interface SolanaDexPriceCandle
 */
export interface SolanaDexPriceCandle {
    /**
     * Timestamp of candle start.
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    timestamp?: number;
    /**
     * Opening price.
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    open?: number;
    /**
     * Highest price.
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    high?: number;
    /**
     * Lowest price.
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    low?: number;
    /**
     * Closing price.
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    close?: number;
    /**
     * Trading volume.
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    volume?: number;
    /**
     * Number of trades in the candle.
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    count?: number;
}
/**
 * Time-series price and volume data for a token.
 * @export
 * @interface SolanaDexPriceHistory
 */
export interface SolanaDexPriceHistory {
    /**
     * Token mint address.
     * @type {string}
     * @memberof SolanaDexPriceHistory
     */
    token?: string;
    /**
     * Array of price snapshots over the requested range.
     * @type {Array<SolanaDexPriceSnapshot>}
     * @memberof SolanaDexPriceHistory
     */
    prices?: Array<SolanaDexPriceSnapshot>;
}
/**
 * A single price and volume data point at a specific time.
 * @export
 * @interface SolanaDexPriceSnapshot
 */
export interface SolanaDexPriceSnapshot {
    /**
     * Timestamp of the snapshot.
     * @type {number}
     * @memberof SolanaDexPriceSnapshot
     */
    timestamp?: number;
    /**
     * Token price at snapshot time.
     * @type {number}
     * @memberof SolanaDexPriceSnapshot
     */
    usd_price?: number;
    /**
     * Trading volume at snapshot time.
     * @type {number}
     * @memberof SolanaDexPriceSnapshot
     */
    usd_volume?: number;
}
/**
 * Token price stats including price changes, volume, and volume changes over multiple time windows.
 * @export
 * @interface SolanaDexPriceStats
 */
export interface SolanaDexPriceStats {
    /**
     * Token mint address.
     * @type {string}
     * @memberof SolanaDexPriceStats
     */
    token?: string;
    /**
     * Current token price.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price?: number;
    /**
     * Price change over 5 minutes.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_5m?: number;
    /**
     * Price change over 1 hour.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_1h?: number;
    /**
     * Price change over 6 hours.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_6h?: number;
    /**
     * Price change over 12 hours.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_12h?: number;
    /**
     * Price change over 1 day.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_1d?: number;
    /**
     * Price change over 7 days.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_7d?: number;
    /**
     * Price change over 30 days.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_30d?: number;
    /**
     * Trading volume over 5 minutes.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_5m?: number;
    /**
     * Trading volume over 1 hour.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_1h?: number;
    /**
     * Trading volume over 6 hours.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_6h?: number;
    /**
     * Trading volume over 12 hours.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_12h?: number;
    /**
     * Trading volume over 1 day.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_1d?: number;
    /**
     * Trading volume over 7 days.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_7d?: number;
    /**
     * Trading volume over 30 days.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_30d?: number;
    /**
     * Volume change over 5 minutes.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_5m?: number;
    /**
     * Volume change over 1 hour.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_1h?: number;
    /**
     * Volume change over 6 hours.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_6h?: number;
    /**
     * Volume change over 12 hours.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_12h?: number;
    /**
     * Volume change over 1 day.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_1d?: number;
    /**
     * Volume change over 7 days.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_7d?: number;
    /**
     * Volume change over 30 days.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_30d?: number;
    /**
     * Solana block slot number.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    block_slot?: number;
    /**
     * Unix timestamp of the block.
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    block_time?: number;
}
/**
 * Query rule to apply.
 * @export
 * @interface SolanaDexProfileSearchPayloadQueryField
 */
export interface SolanaDexProfileSearchPayloadQueryField {
    /**
     * Text to search for.
     * @type {string}
     * @memberof SolanaDexProfileSearchPayloadQueryField
     */
    text: string;
    /**
     * Whether to use fuzzy search.
     * @type {boolean}
     * @memberof SolanaDexProfileSearchPayloadQueryField
     */
    fuzzy?: boolean;
}
/**
 * Sorting rule to apply.
 * @export
 * @interface SolanaDexProfileSearchPayloadSortField
 */
export interface SolanaDexProfileSearchPayloadSortField {
    /**
     * Field to sort by.
     * @type {string}
     * @memberof SolanaDexProfileSearchPayloadSortField
     */
    field: string;
    /**
     * 
     * @type {SolanaDexProfileSearchPayloadSortFieldDirectionEnum}
     * @memberof SolanaDexProfileSearchPayloadSortField
     */
    direction: SolanaDexProfileSearchPayloadSortFieldDirectionEnum;
}


/**
 * Sorting direction.
 * @export
 * @enum {string}
 */
export enum SolanaDexProfileSearchPayloadSortFieldDirectionEnum {
    ASC = 'asc',
    DESC = 'desc'
}

/**
 * 
 * @export
 * @interface SolanaDexSwap
 */
export interface SolanaDexSwap {
    /**
     * 
     * @type {SolanaDexSwapTypeEnum}
     * @memberof SolanaDexSwap
     */
    swap_type?: SolanaDexSwapTypeEnum;
    /**
     * Refer to [Data Sources](/documentation/solana/dex/overview#data-sources) for the list of supported protocols.
     * @type {string}
     * @memberof SolanaDexSwap
     */
    protocol?: string;
    /**
     * Wallet address that initiated the swap.
     * @type {string}
     * @memberof SolanaDexSwap
     */
    wallet?: string;
    /**
     * Token address being swapped from.
     * @type {string}
     * @memberof SolanaDexSwap
     */
    token_in?: string;
    /**
     * Token address being swapped to.
     * @type {string}
     * @memberof SolanaDexSwap
     */
    token_out?: string;
    /**
     * Symbol of the input token.
     * @type {string}
     * @memberof SolanaDexSwap
     */
    token_symbol_in?: string;
    /**
     * Symbol of the output token.
     * @type {string}
     * @memberof SolanaDexSwap
     */
    token_symbol_out?: string;
    /**
     * Amount of input token swapped.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    token_amount_in?: number;
    /**
     * Amount of output token received.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    token_amount_out?: number;
    /**
     * Price of input token at swap time.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    token_price_in?: number;
    /**
     * Price of output token at swap time.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    token_price_out?: number;
    /**
     * Wallet's input token balance before the swap.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    pre_token_balance_in?: number;
    /**
     * Wallet's output token balance before the swap.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    pre_token_balance_out?: number;
    /**
     * Wallet's input token balance after the swap.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    post_token_balance_in?: number;
    /**
     * Wallet's output token balance after the swap.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    post_token_balance_out?: number;
    /**
     * Value of input tokens.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    usd_amount_in?: number;
    /**
     * Value of output tokens.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    usd_amount_out?: number;
    /**
     * Solana block slot number.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    block_slot?: number;
    /**
     * Timestamp of the block.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    block_time?: number;
    /**
     * Transaction signature.
     * @type {string}
     * @memberof SolanaDexSwap
     */
    tx_hash?: string;
    /**
     * Index of the swap within the transaction.
     * @type {number}
     * @memberof SolanaDexSwap
     */
    swap_index?: number;
}


/**
 * Type of swap pair based on token roles.
 * @export
 * @enum {string}
 */
export enum SolanaDexSwapTypeEnum {
    /**
    * Quote (sell) to token (buy) swap
    */
    QUOTE_TOKEN = 'quote_token',
    /**
    * Token (sell) to quote (buy) swap
    */
    TOKEN_QUOTE = 'token_quote',
    /**
    * Token (sell) to token (buy) swap
    */
    TOKEN_TOKEN = 'token_token',
    /**
    * Quote (sell) to quote (buy) swap
    */
    QUOTE_QUOTE = 'quote_quote'
}

/**
 * Aggregated trading profile for a token.
 * @export
 * @interface SolanaDexTokenProfile
 */
export interface SolanaDexTokenProfile {
    /**
     * The Solana token mint address.
     * @type {string}
     * @memberof SolanaDexTokenProfile
     */
    token_address?: string;
    /**
     * 
     * @type {SolanaDexTokenProfileMetadata}
     * @memberof SolanaDexTokenProfile
     */
    metadata?: SolanaDexTokenProfileMetadata;
    /**
     * 
     * @type {SolanaDexTokenProfileMarket}
     * @memberof SolanaDexTokenProfile
     */
    market?: SolanaDexTokenProfileMarket;
    /**
     * 
     * @type {SolanaDexTokenProfileMetrics}
     * @memberof SolanaDexTokenProfile
     */
    metrics?: SolanaDexTokenProfileMetrics;
}
/**
 * Token market data.
 * @export
 * @interface SolanaDexTokenProfileMarket
 */
export interface SolanaDexTokenProfileMarket {
    /**
     * Fully diluted valuation.
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    fdv?: number;
    /**
     * Current market capitalization.
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    market_cap?: number;
    /**
     * Current token price.
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    price?: number;
    /**
     * Available liquidity.
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    liquidity?: number;
    /**
     * Number of unique token holders.
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    holders?: number;
    /**
     * Total token supply.
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    total_supply?: number;
    /**
     * Circulating token supply.
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    circulating_supply?: number;
    /**
     * Percentage of supply held by top holders.
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    top_holdings?: number;
    /**
     * Percentage of supply held by developers.
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    dev_holdings?: number;
}
/**
 * Token profile metadata including identity and social links.
 * @export
 * @interface SolanaDexTokenProfileMetadata
 */
export interface SolanaDexTokenProfileMetadata {
    /**
     * Timestamp of the last trade.
     * @type {number}
     * @memberof SolanaDexTokenProfileMetadata
     */
    last_trade_at?: number;
    /**
     * Timestamp of token creation.
     * @type {number}
     * @memberof SolanaDexTokenProfileMetadata
     */
    created_at?: number;
    /**
     * Token ticker symbol.
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    symbol?: string;
    /**
     * Token display name.
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    name?: string;
    /**
     * URL to token logo image.
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    image?: string;
    /**
     * Whether the token is verified.
     * @type {boolean}
     * @memberof SolanaDexTokenProfileMetadata
     */
    verified?: boolean;
    /**
     * Wallet address of the token creator.
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    creator_address?: string;
    /**
     * Twitter/X handle or URL.
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    twitter?: string;
    /**
     * Discord invite URL.
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    discord?: string;
    /**
     * Official website URL.
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    website?: string;
    /**
     * Telegram group URL.
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    telegram?: string;
}
/**
 * Profile metrics grouped by time window.
 * @export
 * @interface SolanaDexTokenProfileMetrics
 */
export interface SolanaDexTokenProfileMetrics {
    /**
     * 
     * @type {SolanaDexTokenProfileMetrics}
     * @memberof SolanaDexTokenProfileMetrics
     */
    _7d?: SolanaDexTokenProfileMetrics;
    /**
     * 
     * @type {SolanaDexTokenProfileMetrics}
     * @memberof SolanaDexTokenProfileMetrics
     */
    _1d?: SolanaDexTokenProfileMetrics;
    /**
     * 
     * @type {SolanaDexTokenProfileMetrics}
     * @memberof SolanaDexTokenProfileMetrics
     */
    _6h?: SolanaDexTokenProfileMetrics;
    /**
     * 
     * @type {SolanaDexTokenProfileMetrics}
     * @memberof SolanaDexTokenProfileMetrics
     */
    _1h?: SolanaDexTokenProfileMetrics;
    /**
     * 
     * @type {SolanaDexTokenProfileMetrics}
     * @memberof SolanaDexTokenProfileMetrics
     */
    _5m?: SolanaDexTokenProfileMetrics;
    /**
     * 
     * @type {SolanaDexTokenProfileMetrics}
     * @memberof SolanaDexTokenProfileMetrics
     */
    _1m?: SolanaDexTokenProfileMetrics;
}
/**
 * 
 * @export
 * @interface SolanaDexTokenProfileSearchPayloadQueryField
 */
export interface SolanaDexTokenProfileSearchPayloadQueryField {
    /**
     * Text to search for.
     * @type {string}
     * @memberof SolanaDexTokenProfileSearchPayloadQueryField
     */
    text: string;
    /**
     * Whether to use fuzzy search.
     * @type {boolean}
     * @memberof SolanaDexTokenProfileSearchPayloadQueryField
     */
    fuzzy?: boolean;
    /**
     * 
     * @type {Array<SolanaDexTokenProfileSearchPayloadQueryFieldTargetsEnum>}
     * @memberof SolanaDexTokenProfileSearchPayloadQueryField
     */
    targets?: Array<SolanaDexTokenProfileSearchPayloadQueryFieldTargetsEnum>;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum SolanaDexTokenProfileSearchPayloadQueryFieldTargetsEnum {
    TOKEN_ADDRESS = 'token_address',
    METADATA_NAME = 'metadata.name',
    METADATA_SYMBOL = 'metadata.symbol'
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum SolanaDexTokenProfileTimeWindowEnum {
    _7D = '7d',
    _1D = '1d',
    _6H = '6h',
    _1H = '1h',
    _5M = '5m',
    _1M = '1m'
}

/**
 * Distribution of wallet ROI across percentage buckets.
 * @export
 * @interface SolanaDexTokenProfileWalletRoiDistribution
 */
export interface SolanaDexTokenProfileWalletRoiDistribution {
    /**
     * Number of wallets with ROI greater than 500%.
     * @type {number}
     * @memberof SolanaDexTokenProfileWalletRoiDistribution
     */
    gt_500?: number;
    /**
     * Number of wallets with ROI between 200% and 500%.
     * @type {number}
     * @memberof SolanaDexTokenProfileWalletRoiDistribution
     */
    _200_500?: number;
    /**
     * Number of wallets with ROI between 0% and 200%.
     * @type {number}
     * @memberof SolanaDexTokenProfileWalletRoiDistribution
     */
    _0_200?: number;
    /**
     * Number of wallets with ROI between -50% and 0%.
     * @type {number}
     * @memberof SolanaDexTokenProfileWalletRoiDistribution
     */
    neg50_0?: number;
    /**
     * Number of wallets with ROI less than -50%.
     * @type {number}
     * @memberof SolanaDexTokenProfileWalletRoiDistribution
     */
    lt_neg50_0?: number;
}
/**
 * 
 * @export
 * @interface SolanaDexTrade
 */
export interface SolanaDexTrade {
    /**
     * Refer to [Data Sources](/documentation/solana/dex/overview#data-sources) for the list of supported protocols.
     * @type {string}
     * @memberof SolanaDexTrade
     */
    protocol?: string;
    /**
     * 
     * @type {SolanaDexSwapTypeEnum}
     * @memberof SolanaDexTrade
     */
    swap_type?: SolanaDexSwapTypeEnum;
    /**
     * Wallet address that executed the trade.
     * @type {string}
     * @memberof SolanaDexTrade
     */
    wallet?: string;
    /**
     * Traded token address.
     * @type {string}
     * @memberof SolanaDexTrade
     */
    token?: string;
    /**
     * Quote token address.
     * @type {string}
     * @memberof SolanaDexTrade
     */
    quote?: string;
    /**
     * Unique position identifier.
     * @type {string}
     * @memberof SolanaDexTrade
     */
    position?: string;
    /**
     * 
     * @type {SolanaDexTradeDirectionEnum}
     * @memberof SolanaDexTrade
     */
    direction?: SolanaDexTradeDirectionEnum;
    /**
     * 
     * @type {SolanaDexTradePositionStateEnum}
     * @memberof SolanaDexTrade
     */
    position_state?: SolanaDexTradePositionStateEnum;
    /**
     * Amount of traded token.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    token_amount?: number;
    /**
     * Amount of quote tokens.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    quote_amount?: number;
    /**
     * Native amount.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    native_amount?: number;
    /**
     * Value of the trade.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    usd_amount?: number;
    /**
     * Traded token balance before the trade.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    pre_token_balance?: number;
    /**
     * Traded token balance after the trade.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    post_token_balance?: number;
    /**
     * Symbol of the traded token.
     * @type {string}
     * @memberof SolanaDexTrade
     */
    token_symbol?: string;
    /**
     * Symbol of the quote token.
     * @type {string}
     * @memberof SolanaDexTrade
     */
    quote_symbol?: string;
    /**
     * Price of traded token at trade time.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    token_price?: number;
    /**
     * Price of quote token at trade time.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    quote_price?: number;
    /**
     * Solana block slot number.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    block_slot?: number;
    /**
     * Timestamp of the block.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    block_time?: number;
    /**
     * Transaction signature.
     * @type {string}
     * @memberof SolanaDexTrade
     */
    tx_hash?: string;
    /**
     * Index of the trade within the transaction.
     * @type {number}
     * @memberof SolanaDexTrade
     */
    trade_index?: number;
}


/**
 * Direction of the trade.
 * @export
 * @enum {string}
 */
export enum SolanaDexTradeDirectionEnum {
    /**
    * Trader bought a token.
    */
    BUY = 'buy',
    /**
    * Trader sold a token.
    */
    SELL = 'sell'
}

/**
 * Position state of the trade.
 * @export
 * @enum {string}
 */
export enum SolanaDexTradePositionStateEnum {
    /**
    * Trader opened a position.
    */
    OPEN = 'open',
    /**
    * Trader closed a position.
    */
    CLOSE = 'close',
    /**
    * Trader executed a trade against a position.
    */
    TRADE = 'trade'
}

/**
 * Aggregated trading profile for a wallet.
 * @export
 * @interface SolanaDexWalletProfile
 */
export interface SolanaDexWalletProfile {
    /**
     * The Solana wallet address.
     * @type {string}
     * @memberof SolanaDexWalletProfile
     */
    wallet_address?: string;
    /**
     * 
     * @type {SolanaDexWalletProfileMetadata}
     * @memberof SolanaDexWalletProfile
     */
    metadata?: SolanaDexWalletProfileMetadata;
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfile
     */
    metrics?: SolanaDexWalletProfileMetrics;
}
/**
 * Wallet profile metadata.
 * @export
 * @interface SolanaDexWalletProfileMetadata
 */
export interface SolanaDexWalletProfileMetadata {
    /**
     * Timestamp of the wallet's last trade.
     * @type {number}
     * @memberof SolanaDexWalletProfileMetadata
     */
    last_trade_at?: number;
}
/**
 * Profile metrics grouped by time window.
 * @export
 * @interface SolanaDexWalletProfileMetrics
 */
export interface SolanaDexWalletProfileMetrics {
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfileMetrics
     */
    _30d?: SolanaDexWalletProfileMetrics;
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfileMetrics
     */
    _14d?: SolanaDexWalletProfileMetrics;
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfileMetrics
     */
    _7d?: SolanaDexWalletProfileMetrics;
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfileMetrics
     */
    _3d?: SolanaDexWalletProfileMetrics;
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfileMetrics
     */
    _1d?: SolanaDexWalletProfileMetrics;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum SolanaDexWalletProfileTimeWindowEnum {
    _30D = '30d',
    _14D = '14d',
    _7D = '7d',
    _3D = '3d',
    _1D = '1d'
}

/**
 * Distribution of token ROI across percentage buckets.
 * @export
 * @interface SolanaDexWalletProfileTokenRoiDistribution
 */
export interface SolanaDexWalletProfileTokenRoiDistribution {
    /**
     * Number of tokens with ROI greater than 500%.
     * @type {number}
     * @memberof SolanaDexWalletProfileTokenRoiDistribution
     */
    gt_500?: number;
    /**
     * Number of tokens with ROI between 200% and 500%.
     * @type {number}
     * @memberof SolanaDexWalletProfileTokenRoiDistribution
     */
    _200_500?: number;
    /**
     * Number of tokens with ROI between 0% and 200%.
     * @type {number}
     * @memberof SolanaDexWalletProfileTokenRoiDistribution
     */
    _0_200?: number;
    /**
     * Number of tokens with ROI between -50% and 0%.
     * @type {number}
     * @memberof SolanaDexWalletProfileTokenRoiDistribution
     */
    neg50_0?: number;
    /**
     * Number of tokens with ROI less than -50%.
     * @type {number}
     * @memberof SolanaDexWalletProfileTokenRoiDistribution
     */
    lt_neg50_0?: number;
}
