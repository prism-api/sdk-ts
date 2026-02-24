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
     * Start time for the candles range, as a Unix timestamp.
     * Must be used in conjunction with `to`.
     * 
     * @type {number}
     * @memberof GetPriceCandlesRequest
     */
    from?: number;
    /**
     * End time for the candles range, as a Unix timestamp.
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
     * Time interval to aggregate candles by, in seconds.
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
     * Start time for the history range, as a Unix timestamp.
     * @type {number}
     * @memberof GetPriceHistoryRequest
     */
    from: number;
    /**
     * End time for the history range, as a Unix timestamp.
     * Defaults to the current time.
     * 
     * @type {number}
     * @memberof GetPriceHistoryRequest
     */
    to?: number;
    /**
     * Time interval to aggregate metrics by, in seconds.
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
 * 
 * @export
 * @interface SolanaDexPortfolio
 */
export interface SolanaDexPortfolio {
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPortfolio
     */
    value?: number;
    /**
     * 
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
     * 
     * @type {string}
     * @memberof SolanaDexPortfolioTokensInner
     */
    token?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPortfolioTokensInner
     */
    balance?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPortfolioTokensInner
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPortfolioTokensInner
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface SolanaDexPrice
 */
export interface SolanaDexPrice {
    /**
     * 
     * @type {string}
     * @memberof SolanaDexPrice
     */
    token?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPrice
     */
    usd_price?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPrice
     */
    block_slot?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPrice
     */
    block_time?: number;
}
/**
 * 
 * @export
 * @interface SolanaDexPriceCandle
 */
export interface SolanaDexPriceCandle {
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    timestamp?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    open?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    high?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    low?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    close?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceCandle
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface SolanaDexPriceHistory
 */
export interface SolanaDexPriceHistory {
    /**
     * 
     * @type {string}
     * @memberof SolanaDexPriceHistory
     */
    token?: string;
    /**
     * 
     * @type {Array<SolanaDexPriceSnapshot>}
     * @memberof SolanaDexPriceHistory
     */
    prices?: Array<SolanaDexPriceSnapshot>;
}
/**
 * 
 * @export
 * @interface SolanaDexPriceSnapshot
 */
export interface SolanaDexPriceSnapshot {
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceSnapshot
     */
    timestamp?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceSnapshot
     */
    usd_price?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceSnapshot
     */
    usd_volume?: number;
}
/**
 * 
 * @export
 * @interface SolanaDexPriceStats
 */
export interface SolanaDexPriceStats {
    /**
     * 
     * @type {string}
     * @memberof SolanaDexPriceStats
     */
    token?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_5m?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_1h?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_6h?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_12h?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_1d?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_7d?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_price_change_30d?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_5m?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_1h?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_6h?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_12h?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_1d?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_7d?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_30d?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_5m?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_1h?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_6h?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_12h?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_1d?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_7d?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    usd_volume_change_30d?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexPriceStats
     */
    block_slot?: number;
    /**
     * 
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
     * Refer to [Data Sources](/documentation/solana/dex/data-coverage#data-sources) for the list of supported protocols.
     * @type {string}
     * @memberof SolanaDexSwap
     */
    protocol?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexSwap
     */
    wallet?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexSwap
     */
    token_in?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexSwap
     */
    token_out?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexSwap
     */
    token_symbol_in?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexSwap
     */
    token_symbol_out?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    token_amount_in?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    token_amount_out?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    token_price_in?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    token_price_out?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    pre_token_balance_in?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    pre_token_balance_out?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    post_token_balance_in?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    post_token_balance_out?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    usd_amount_in?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    usd_amount_out?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    block_slot?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    block_time?: number;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexSwap
     */
    tx_hash?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexSwap
     */
    swap_index?: number;
}
/**
 * 
 * @export
 * @interface SolanaDexTokenProfile
 */
export interface SolanaDexTokenProfile {
    /**
     * 
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
 * 
 * @export
 * @interface SolanaDexTokenProfileMarket
 */
export interface SolanaDexTokenProfileMarket {
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    fdv?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    market_cap?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    liquidity?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    holders?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    total_supply?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    circulating_supply?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    top_holdings?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMarket
     */
    dev_holdings?: number;
}
/**
 * 
 * @export
 * @interface SolanaDexTokenProfileMetadata
 */
export interface SolanaDexTokenProfileMetadata {
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMetadata
     */
    last_trade_at?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileMetadata
     */
    created_at?: number;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    symbol?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    image?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SolanaDexTokenProfileMetadata
     */
    verified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    creator_address?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    twitter?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    discord?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfileMetadata
     */
    telegram?: string;
}
/**
 * 
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
 * 
 * @export
 * @interface SolanaDexTokenProfileWalletRoiDistribution
 */
export interface SolanaDexTokenProfileWalletRoiDistribution {
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileWalletRoiDistribution
     */
    gt_500?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileWalletRoiDistribution
     */
    _200_500?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileWalletRoiDistribution
     */
    _0_200?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfileWalletRoiDistribution
     */
    neg50_0?: number;
    /**
     * 
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
     * Refer to [Data Sources](/documentation/solana/dex/data-coverage#data-sources) for the list of supported protocols.
     * @type {string}
     * @memberof SolanaDexTrade
     */
    protocol?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTrade
     */
    wallet?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTrade
     */
    token?: string;
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
     * 
     * @type {number}
     * @memberof SolanaDexTrade
     */
    token_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTrade
     */
    usd_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTrade
     */
    pre_token_balance?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTrade
     */
    post_token_balance?: number;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTrade
     */
    token_symbol?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTrade
     */
    token_price?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTrade
     */
    block_slot?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTrade
     */
    block_time?: number;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTrade
     */
    tx_hash?: string;
    /**
     * 
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
    BUY = 'buy',
    SELL = 'sell'
}

/**
 * Position state of the trade.
 * @export
 * @enum {string}
 */
export enum SolanaDexTradePositionStateEnum {
    OPEN = 'open',
    CLOSE = 'close',
    TRADE = 'trade'
}

/**
 * 
 * @export
 * @interface SolanaDexWalletProfile
 */
export interface SolanaDexWalletProfile {
    /**
     * 
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
 * 
 * @export
 * @interface SolanaDexWalletProfileMetadata
 */
export interface SolanaDexWalletProfileMetadata {
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetadata
     */
    last_trade_at?: number;
}
/**
 * 
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
 * 
 * @export
 * @interface SolanaDexWalletProfileTokenRoiDistribution
 */
export interface SolanaDexWalletProfileTokenRoiDistribution {
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileTokenRoiDistribution
     */
    gt_500?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileTokenRoiDistribution
     */
    _200_500?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileTokenRoiDistribution
     */
    _0_200?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileTokenRoiDistribution
     */
    neg50_0?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileTokenRoiDistribution
     */
    lt_neg50_0?: number;
}
