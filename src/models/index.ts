/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface GetSolanaTokenPricesRequest
 */
export interface GetSolanaTokenPricesRequest {
    /**
     * List of token addresses to retrieve prices for.
     * @type {Array<string>}
     * @memberof GetSolanaTokenPricesRequest
     */
    tokens: Array<string>;
}
/**
 * 
 * @export
 * @interface GetSolanaTokenProfileRequest
 */
export interface GetSolanaTokenProfileRequest {
    /**
     * Token address to retrieve profile for.
     * @type {string}
     * @memberof GetSolanaTokenProfileRequest
     */
    token: string;
    /**
     * List of time windows to include in the profile.
     * @type {Array<SolanaTokenProfileTimeWindowEnum>}
     * @memberof GetSolanaTokenProfileRequest
     */
    time_windows?: Array<SolanaTokenProfileTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetSolanaTokenProfilesByCreatorRequest
 */
export interface GetSolanaTokenProfilesByCreatorRequest {
    /**
     * Creator address to retrieve token profiles for.
     * @type {string}
     * @memberof GetSolanaTokenProfilesByCreatorRequest
     */
    creator?: string;
    /**
     * List of time windows to include in the profile.
     * @type {Array<SolanaTokenProfileTimeWindowEnum>}
     * @memberof GetSolanaTokenProfilesByCreatorRequest
     */
    time_windows?: Array<SolanaTokenProfileTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetSolanaTokenProfilesRequest
 */
export interface GetSolanaTokenProfilesRequest {
    /**
     * List of token addresses to retrieve profile for.
     * @type {Array<string>}
     * @memberof GetSolanaTokenProfilesRequest
     */
    tokens: Array<string>;
    /**
     * 
     * @type {GetSolanaTokenProfilesRequestSort}
     * @memberof GetSolanaTokenProfilesRequest
     */
    sort?: GetSolanaTokenProfilesRequestSort;
    /**
     * List of time windows to include in the profile.
     * @type {Array<SolanaTokenProfileTimeWindowEnum>}
     * @memberof GetSolanaTokenProfilesRequest
     */
    time_windows?: Array<SolanaTokenProfileTimeWindowEnum>;
}
/**
 * Sorting rule.
 * @export
 * @interface GetSolanaTokenProfilesRequestSort
 */
export interface GetSolanaTokenProfilesRequestSort {
    /**
     * 
     * @type {any}
     * @memberof GetSolanaTokenProfilesRequestSort
     */
    field: any | null;
    /**
     * Sorting direction.
     * @type {string}
     * @memberof GetSolanaTokenProfilesRequestSort
     */
    direction: GetSolanaTokenProfilesRequestSortDirectionEnum;
}

/**
* @export
* @enum {string}
*/
export enum GetSolanaTokenProfilesRequestSortDirectionEnum {
    ASC = 'asc',
    DESC = 'desc'
}

/**
 * 
 * @export
 * @interface GetSolanaWalletPortfolioRequest
 */
export interface GetSolanaWalletPortfolioRequest {
    /**
     * Wallet address to retrieve portfolio for.
     * @type {string}
     * @memberof GetSolanaWalletPortfolioRequest
     */
    wallet: string;
}
/**
 * 
 * @export
 * @interface GetSolanaWalletProfileHistoryRequest
 */
export interface GetSolanaWalletProfileHistoryRequest {
    /**
     * Wallet address to retrieve profile history for.
     * @type {string}
     * @memberof GetSolanaWalletProfileHistoryRequest
     */
    wallet: string;
    /**
     * Optional token address to filter profile history by.
     * @type {string}
     * @memberof GetSolanaWalletProfileHistoryRequest
     */
    token?: string;
    /**
     * Start time for the history range, as a Unix timestamp.
     * @type {number}
     * @memberof GetSolanaWalletProfileHistoryRequest
     */
    from?: number;
    /**
     * End time for the history range, as a Unix timestamp.
     * @type {number}
     * @memberof GetSolanaWalletProfileHistoryRequest
     */
    to?: number;
    /**
     * Time interval to aggregate metrics by.
     * @type {string}
     * @memberof GetSolanaWalletProfileHistoryRequest
     */
    time_interval?: GetSolanaWalletProfileHistoryRequestTimeIntervalEnum;
}

/**
* @export
* @enum {string}
*/
export enum GetSolanaWalletProfileHistoryRequestTimeIntervalEnum {
    _1H = '1h',
    _4H = '4h',
    _12H = '12h',
    _1D = '1d'
}

/**
 * 
 * @export
 * @interface GetSolanaWalletProfileRequest
 */
export interface GetSolanaWalletProfileRequest {
    /**
     * Wallet address to retrieve profile for.
     * @type {string}
     * @memberof GetSolanaWalletProfileRequest
     */
    wallet: string;
    /**
     * List of time windows to include in the profile.
     * @type {Array<SolanaWalletProfileTimeWindowEnum>}
     * @memberof GetSolanaWalletProfileRequest
     */
    time_windows?: Array<SolanaWalletProfileTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetSolanaWalletProfilesRequest
 */
export interface GetSolanaWalletProfilesRequest {
    /**
     * List of wallet addresses to retrieve profile for.
     * @type {Array<string>}
     * @memberof GetSolanaWalletProfilesRequest
     */
    wallets?: Array<string>;
    /**
     * 
     * @type {PayloadSortField}
     * @memberof GetSolanaWalletProfilesRequest
     */
    sort?: PayloadSortField;
    /**
     * List of time windows to include in the profile.
     * @type {Array<SolanaWalletProfileTimeWindowEnum>}
     * @memberof GetSolanaWalletProfilesRequest
     */
    time_windows?: Array<SolanaWalletProfileTimeWindowEnum>;
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
 * @interface PayloadFilterFieldInner
 */
export interface PayloadFilterFieldInner {
    /**
     * Field to filter by.
     * @type {string}
     * @memberof PayloadFilterFieldInner
     */
    field: string;
    /**
     * Minimum value to filter by.
     * @type {number}
     * @memberof PayloadFilterFieldInner
     */
    min?: number;
    /**
     * Maximum value to filter by.
     * @type {number}
     * @memberof PayloadFilterFieldInner
     */
    max?: number;
    /**
     * Exact value to filter by.
     * @type {string}
     * @memberof PayloadFilterFieldInner
     */
    eq?: string;
}
/**
 * Query rule to apply.
 * @export
 * @interface PayloadQueryField
 */
export interface PayloadQueryField {
    /**
     * Text to search for.
     * @type {string}
     * @memberof PayloadQueryField
     */
    text: string;
    /**
     * Fields to search in.
     * @type {Array<PayloadQueryFieldFieldsEnum>}
     * @memberof PayloadQueryField
     */
    fields: Array<PayloadQueryFieldFieldsEnum>;
    /**
     * Whether to use fuzzy search.
     * @type {boolean}
     * @memberof PayloadQueryField
     */
    fuzzy?: boolean;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum PayloadQueryFieldFieldsEnum {
    TOKEN_ADDRESS = 'token_address',
    NAME = 'name',
    SYMBOL = 'symbol',
    CREATOR = 'creator'
}

/**
 * Sorting rule to apply.
 * @export
 * @interface PayloadSortField
 */
export interface PayloadSortField {
    /**
     * Field to sort by.
     * @type {string}
     * @memberof PayloadSortField
     */
    field: string;
    /**
     * 
     * @type {PayloadSortFieldDirectionEnum}
     * @memberof PayloadSortField
     */
    direction: PayloadSortFieldDirectionEnum;
}


/**
 * Sorting direction.
 * @export
 * @enum {string}
 */
export enum PayloadSortFieldDirectionEnum {
    ASC = 'asc',
    DESC = 'desc'
}

/**
 * 
 * @export
 * @interface SearchSolanaTokenProfilesRequest
 */
export interface SearchSolanaTokenProfilesRequest {
    /**
     * 
     * @type {SolanaTokenPayloadQueryField}
     * @memberof SearchSolanaTokenProfilesRequest
     */
    query?: SolanaTokenPayloadQueryField;
    /**
     * List of filter rules to apply.
     * @type {Array<PayloadFilterFieldInner>}
     * @memberof SearchSolanaTokenProfilesRequest
     */
    filter?: Array<PayloadFilterFieldInner>;
    /**
     * 
     * @type {PayloadSortField}
     * @memberof SearchSolanaTokenProfilesRequest
     */
    sort?: PayloadSortField;
    /**
     * List of time windows to include in the profile.
     * @type {Array<SolanaTokenProfileTimeWindowEnum>}
     * @memberof SearchSolanaTokenProfilesRequest
     */
    time_windows?: Array<SolanaTokenProfileTimeWindowEnum>;
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof SearchSolanaTokenProfilesRequest
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {string}
     * @memberof SearchSolanaTokenProfilesRequest
     */
    cursor?: string;
}
/**
 * 
 * @export
 * @interface SearchSolanaWalletProfiles200Response
 */
export interface SearchSolanaWalletProfiles200Response {
    /**
     * 
     * @type {number}
     * @memberof SearchSolanaWalletProfiles200Response
     */
    page?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchSolanaWalletProfiles200Response
     */
    cursor?: string;
    /**
     * 
     * @type {Array<SolanaWalletProfile>}
     * @memberof SearchSolanaWalletProfiles200Response
     */
    results?: Array<SolanaWalletProfile>;
}
/**
 * 
 * @export
 * @interface SearchSolanaWalletProfilesRequest
 */
export interface SearchSolanaWalletProfilesRequest {
    /**
     * List of filter rules to apply.
     * @type {Array<PayloadFilterFieldInner>}
     * @memberof SearchSolanaWalletProfilesRequest
     */
    filter?: Array<PayloadFilterFieldInner>;
    /**
     * 
     * @type {PayloadSortField}
     * @memberof SearchSolanaWalletProfilesRequest
     */
    sort?: PayloadSortField;
    /**
     * List of time windows to include in the profile.
     * @type {Array<SolanaWalletProfileTimeWindowEnum>}
     * @memberof SearchSolanaWalletProfilesRequest
     */
    time_windows?: Array<SolanaWalletProfileTimeWindowEnum>;
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof SearchSolanaWalletProfilesRequest
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {string}
     * @memberof SearchSolanaWalletProfilesRequest
     */
    cursor?: string;
}
/**
 * 
 * @export
 * @interface SolanaTokenPayloadQueryField
 */
export interface SolanaTokenPayloadQueryField {
    /**
     * Text to search for.
     * @type {string}
     * @memberof SolanaTokenPayloadQueryField
     */
    text: string;
    /**
     * 
     * @type {Array<SolanaTokenPayloadQueryFieldFieldsEnum>}
     * @memberof SolanaTokenPayloadQueryField
     */
    fields: Array<SolanaTokenPayloadQueryFieldFieldsEnum>;
    /**
     * Whether to use fuzzy search.
     * @type {boolean}
     * @memberof SolanaTokenPayloadQueryField
     */
    fuzzy?: boolean;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum SolanaTokenPayloadQueryFieldFieldsEnum {
    TOKEN_ADDRESS = 'token_address',
    NAME = 'name',
    SYMBOL = 'symbol',
    CREATOR = 'creator'
}

/**
 * 
 * @export
 * @interface SolanaTokenPrice
 */
export interface SolanaTokenPrice {
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenPrice
     */
    token?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenPrice
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenPrice
     */
    updated_at?: number;
}
/**
 * 
 * @export
 * @interface SolanaTokenProfile
 */
export interface SolanaTokenProfile {
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenProfile
     */
    token_address?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    last_trade_at?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    created_at?: number;
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenProfile
     */
    symbol?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenProfile
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenProfile
     */
    dev_address?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    dev_migrations?: number;
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenProfile
     */
    image?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    fdv?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    market_cap?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    liquidity?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    holders?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    total_supply?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    circulating_supply?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    top_holdings?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    dev_holdings?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    bonding_curve_progress?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaTokenProfile
     */
    migrated_at?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SolanaTokenProfile
     */
    verified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenProfile
     */
    twitter?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenProfile
     */
    telegram?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenProfile
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenProfile
     */
    discord?: string;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum SolanaTokenProfileTimeWindowEnum {
    _30D = '30d',
    _14D = '14d',
    _7D = '7d',
    _3D = '3d',
    _1D = '1d'
}

/**
 * 
 * @export
 * @interface SolanaWalletPortfolio
 */
export interface SolanaWalletPortfolio {
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletPortfolio
     */
    value?: number;
    /**
     * 
     * @type {Array<SolanaWalletPortfolioTokensInner>}
     * @memberof SolanaWalletPortfolio
     */
    tokens?: Array<SolanaWalletPortfolioTokensInner>;
}
/**
 * 
 * @export
 * @interface SolanaWalletPortfolioTokensInner
 */
export interface SolanaWalletPortfolioTokensInner {
    /**
     * 
     * @type {string}
     * @memberof SolanaWalletPortfolioTokensInner
     */
    token?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletPortfolioTokensInner
     */
    balance?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletPortfolioTokensInner
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletPortfolioTokensInner
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface SolanaWalletProfile
 */
export interface SolanaWalletProfile {
    /**
     * 
     * @type {string}
     * @memberof SolanaWalletProfile
     */
    wallet_address?: string;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfile
     */
    last_trade_at?: number;
    /**
     * 
     * @type {SolanaWalletProfileTimeWindows}
     * @memberof SolanaWalletProfile
     */
    time_windows?: SolanaWalletProfileTimeWindows;
}
/**
 * 
 * @export
 * @interface SolanaWalletProfileHistoryInner
 */
export interface SolanaWalletProfileHistoryInner {
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    risk_score?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    consistency_score?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    largest_win?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    largest_loss?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    max_consecutive_wins?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    max_consecutive_losses?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_buy_size?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_sell_size?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_buy_mcap?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_sell_mcap?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_daily_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_daily_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_daily_trade_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_daily_traded_tokens?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_daily_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_holding_duration?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_trade_delta?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_token_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    avg_token_roi?: number;
    /**
     * 
     * @type {TokenRoiDistribution}
     * @memberof SolanaWalletProfileHistoryInner
     */
    token_roi_distribution?: TokenRoiDistribution;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    trade_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    buy_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    sell_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    position_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    win_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    loss_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    win_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    loss_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    buy_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    sell_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    winrate?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    volume_weighted_winrate?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    volume_weighted_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    time_weighted_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    pnl_volume_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    token_hit_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    win_loss_size_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    profit_factor?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    profit_expectancy?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    recovery_factor?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    winrate_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    winrate_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    pnl_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    pnl_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    roi_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    roi_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    sharpe_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    sortino_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    max_drawdown?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    risk_of_ruin?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    turnover?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileHistoryInner
     */
    time?: number;
}
/**
 * 
 * @export
 * @interface SolanaWalletProfileMetrics
 */
export interface SolanaWalletProfileMetrics {
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    risk_score?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    consistency_score?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    largest_win?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    largest_loss?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    max_consecutive_wins?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    max_consecutive_losses?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_buy_size?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_sell_size?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_buy_mcap?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_sell_mcap?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_daily_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_daily_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_daily_trade_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_daily_traded_tokens?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_daily_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_holding_duration?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_trade_delta?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_token_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    avg_token_roi?: number;
    /**
     * 
     * @type {TokenRoiDistribution}
     * @memberof SolanaWalletProfileMetrics
     */
    token_roi_distribution?: TokenRoiDistribution;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    trade_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    buy_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    sell_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    position_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    win_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    loss_count?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    win_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    loss_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    buy_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    sell_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    winrate?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    volume_weighted_winrate?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    volume_weighted_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    time_weighted_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    pnl_volume_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    token_hit_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    win_loss_size_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    profit_factor?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    profit_expectancy?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    recovery_factor?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    winrate_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    winrate_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    pnl_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    pnl_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    roi_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    roi_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    sharpe_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    sortino_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    max_drawdown?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    risk_of_ruin?: number;
    /**
     * 
     * @type {number}
     * @memberof SolanaWalletProfileMetrics
     */
    turnover?: number;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum SolanaWalletProfileTimeWindowEnum {
    _30D = '30d',
    _14D = '14d',
    _7D = '7d',
    _3D = '3d',
    _1D = '1d'
}

/**
 * 
 * @export
 * @interface SolanaWalletProfileTimeWindows
 */
export interface SolanaWalletProfileTimeWindows {
    /**
     * 
     * @type {SolanaWalletProfileMetrics}
     * @memberof SolanaWalletProfileTimeWindows
     */
    _30d?: SolanaWalletProfileMetrics;
    /**
     * 
     * @type {SolanaWalletProfileMetrics}
     * @memberof SolanaWalletProfileTimeWindows
     */
    _14d?: SolanaWalletProfileMetrics;
    /**
     * 
     * @type {SolanaWalletProfileMetrics}
     * @memberof SolanaWalletProfileTimeWindows
     */
    _7d?: SolanaWalletProfileMetrics;
    /**
     * 
     * @type {SolanaWalletProfileMetrics}
     * @memberof SolanaWalletProfileTimeWindows
     */
    _3d?: SolanaWalletProfileMetrics;
    /**
     * 
     * @type {SolanaWalletProfileMetrics}
     * @memberof SolanaWalletProfileTimeWindows
     */
    _1d?: SolanaWalletProfileMetrics;
}
/**
 * 
 * @export
 * @interface TokenRoiDistribution
 */
export interface TokenRoiDistribution {
    /**
     * 
     * @type {number}
     * @memberof TokenRoiDistribution
     */
    gt_500?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenRoiDistribution
     */
    _200_500?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenRoiDistribution
     */
    _0_200?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenRoiDistribution
     */
    neg50_0?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenRoiDistribution
     */
    lt_neg50_0?: number;
}
