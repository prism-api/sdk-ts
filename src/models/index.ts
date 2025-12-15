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
 * @interface GetSwapsRequest
 */
export interface GetSwapsRequest {
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
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof GetSwapsRequest
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {number}
     * @memberof GetSwapsRequest
     */
    cursor?: number;
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
     * List of time windows to include in the profile.
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
     * List of time windows to include in the profile.
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
     * List of time windows to include in the profile.
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
 * @interface GetTradesRequest
 */
export interface GetTradesRequest {
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
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof GetTradesRequest
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {number}
     * @memberof GetTradesRequest
     */
    cursor?: number;
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
     * List of time windows to include in the profile.
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
     * List of time windows to include in the profile.
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
 * @interface SearchSolanaDexTokenProfilesRequest
 */
export interface SearchSolanaDexTokenProfilesRequest {
    /**
     * 
     * @type {SolanaDexTokenProfileSearchPayloadQueryField}
     * @memberof SearchSolanaDexTokenProfilesRequest
     */
    query?: SolanaDexTokenProfileSearchPayloadQueryField;
    /**
     * List of filter rules to apply.
     * @type {Array<SolanaDexProfileSearchPayloadFilterFieldInner>}
     * @memberof SearchSolanaDexTokenProfilesRequest
     */
    filter?: Array<SolanaDexProfileSearchPayloadFilterFieldInner>;
    /**
     * 
     * @type {SolanaDexProfileSearchPayloadSortField}
     * @memberof SearchSolanaDexTokenProfilesRequest
     */
    sort?: SolanaDexProfileSearchPayloadSortField;
    /**
     * List of time windows to include in the profile.
     * @type {Array<SolanaDexTokenProfileTimeWindowEnum>}
     * @memberof SearchSolanaDexTokenProfilesRequest
     */
    time_windows?: Array<SolanaDexTokenProfileTimeWindowEnum>;
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
}
/**
 * 
 * @export
 * @interface SearchSolanaDexWalletProfiles200Response
 */
export interface SearchSolanaDexWalletProfiles200Response {
    /**
     * 
     * @type {number}
     * @memberof SearchSolanaDexWalletProfiles200Response
     */
    page?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchSolanaDexWalletProfiles200Response
     */
    cursor?: string;
    /**
     * 
     * @type {Array<SolanaDexWalletProfile>}
     * @memberof SearchSolanaDexWalletProfiles200Response
     */
    results?: Array<SolanaDexWalletProfile>;
}
/**
 * 
 * @export
 * @interface SearchSolanaDexWalletProfilesRequest
 */
export interface SearchSolanaDexWalletProfilesRequest {
    /**
     * List of filter rules to apply.
     * @type {Array<SolanaDexProfileSearchPayloadFilterFieldInner>}
     * @memberof SearchSolanaDexWalletProfilesRequest
     */
    filter?: Array<SolanaDexProfileSearchPayloadFilterFieldInner>;
    /**
     * 
     * @type {SolanaDexProfileSearchPayloadSortField}
     * @memberof SearchSolanaDexWalletProfilesRequest
     */
    sort?: SolanaDexProfileSearchPayloadSortField;
    /**
     * List of time windows to include in the profile.
     * @type {Array<SolanaDexWalletProfileTimeWindowEnum>}
     * @memberof SearchSolanaDexWalletProfilesRequest
     */
    time_windows?: Array<SolanaDexWalletProfileTimeWindowEnum>;
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
 * 
 * @export
 * @interface SolanaDexProfileSearchPayloadFilterFieldInner
 */
export interface SolanaDexProfileSearchPayloadFilterFieldInner {
    /**
     * Field to filter by.
     * @type {string}
     * @memberof SolanaDexProfileSearchPayloadFilterFieldInner
     */
    field: string;
    /**
     * Minimum value to filter by.
     * @type {number}
     * @memberof SolanaDexProfileSearchPayloadFilterFieldInner
     */
    min?: number;
    /**
     * Maximum value to filter by.
     * @type {number}
     * @memberof SolanaDexProfileSearchPayloadFilterFieldInner
     */
    max?: number;
    /**
     * 
     * @type {SolanaDexProfileSearchPayloadFilterFieldInnerEq}
     * @memberof SolanaDexProfileSearchPayloadFilterFieldInner
     */
    eq?: SolanaDexProfileSearchPayloadFilterFieldInnerEq;
}
/**
 * @type SolanaDexProfileSearchPayloadFilterFieldInnerEq
 * Exact value to filter by.
 * @export
 */
export type SolanaDexProfileSearchPayloadFilterFieldInnerEq = number | string;
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
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    last_trade_at?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    created_at?: number;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfile
     */
    symbol?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfile
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfile
     */
    dev_address?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    dev_migrations?: number;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfile
     */
    image?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    fdv?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    market_cap?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    liquidity?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    holders?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    total_supply?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    circulating_supply?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    top_holdings?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    dev_holdings?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    bonding_curve_progress?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexTokenProfile
     */
    migrated_at?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SolanaDexTokenProfile
     */
    verified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfile
     */
    twitter?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfile
     */
    telegram?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfile
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaDexTokenProfile
     */
    discord?: string;
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
    NAME = 'name',
    SYMBOL = 'symbol',
    CREATOR = 'creator'
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum SolanaDexTokenProfileTimeWindowEnum {
    _30D = '30d',
    _14D = '14d',
    _7D = '7d',
    _3D = '3d',
    _1D = '1d'
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
     * @type {number}
     * @memberof SolanaDexWalletProfile
     */
    last_trade_at?: number;
    /**
     * 
     * @type {SolanaDexWalletProfileTimeWindows}
     * @memberof SolanaDexWalletProfile
     */
    time_windows?: SolanaDexWalletProfileTimeWindows;
}
/**
 * 
 * @export
 * @interface SolanaDexWalletProfileMetrics
 */
export interface SolanaDexWalletProfileMetrics {
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    risk_score?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    consistency_score?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    largest_win?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    largest_loss?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    max_consecutive_wins?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    max_consecutive_losses?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_buy_size?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_sell_size?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_buy_mcap?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_sell_mcap?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_daily_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_daily_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_daily_trade_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_daily_traded_tokens?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_daily_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_holding_duration?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_trade_delta?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_token_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    avg_token_roi?: number;
    /**
     * 
     * @type {SolanaDexWalletProfileTokenRoiDistribution}
     * @memberof SolanaDexWalletProfileMetrics
     */
    token_roi_distribution?: SolanaDexWalletProfileTokenRoiDistribution;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    trade_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    buy_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    sell_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    position_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    win_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    loss_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    win_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    loss_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    buy_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    sell_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    winrate?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    volume_weighted_winrate?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    volume_weighted_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    time_weighted_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    pnl_volume_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    token_hit_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    win_loss_size_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    profit_factor?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    profit_expectancy?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    recovery_factor?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    winrate_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    winrate_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    pnl_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    pnl_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    roi_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    roi_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    sharpe_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    sortino_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    max_drawdown?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    risk_of_ruin?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaDexWalletProfileMetrics
     */
    turnover?: number;
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
 * @interface SolanaDexWalletProfileTimeWindows
 */
export interface SolanaDexWalletProfileTimeWindows {
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfileTimeWindows
     */
    _30d?: SolanaDexWalletProfileMetrics;
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfileTimeWindows
     */
    _14d?: SolanaDexWalletProfileMetrics;
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfileTimeWindows
     */
    _7d?: SolanaDexWalletProfileMetrics;
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfileTimeWindows
     */
    _3d?: SolanaDexWalletProfileMetrics;
    /**
     * 
     * @type {SolanaDexWalletProfileMetrics}
     * @memberof SolanaDexWalletProfileTimeWindows
     */
    _1d?: SolanaDexWalletProfileMetrics;
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
