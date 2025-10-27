/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface FilterWalletPositionOverviewsRequest
 */
export interface FilterWalletPositionOverviewsRequest {
    /**
     * Wallet address to filter position overviews for.
     * @type {string}
     * @memberof FilterWalletPositionOverviewsRequest
     */
    wallet: string;
    /**
     * List of filter rules to apply.
     * @type {Array<PayloadFilterFieldInner>}
     * @memberof FilterWalletPositionOverviewsRequest
     */
    filter?: Array<PayloadFilterFieldInner>;
    /**
     * 
     * @type {PayloadSortField}
     * @memberof FilterWalletPositionOverviewsRequest
     */
    sort?: PayloadSortField;
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof FilterWalletPositionOverviewsRequest
     */
    limit?: number;
    /**
     * List of time windows to include in the overview.
     * @type {Array<WalletOverviewTimeWindowEnum>}
     * @memberof FilterWalletPositionOverviewsRequest
     */
    time_windows?: Array<WalletOverviewTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetTokenOverviewRequest
 */
export interface GetTokenOverviewRequest {
    /**
     * Token address to retrieve overview for.
     * @type {string}
     * @memberof GetTokenOverviewRequest
     */
    token: string;
    /**
     * List of time windows to include in the overview.
     * @type {Array<TokenOverviewTimeWindowEnum>}
     * @memberof GetTokenOverviewRequest
     */
    time_windows?: Array<TokenOverviewTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetTokenOverviewsByCreatorRequest
 */
export interface GetTokenOverviewsByCreatorRequest {
    /**
     * Creator address to retrieve token overviews for.
     * @type {string}
     * @memberof GetTokenOverviewsByCreatorRequest
     */
    creator?: string;
    /**
     * List of time windows to include in the overview.
     * @type {Array<TokenOverviewTimeWindowEnum>}
     * @memberof GetTokenOverviewsByCreatorRequest
     */
    time_windows?: Array<TokenOverviewTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetTokenOverviewsRequest
 */
export interface GetTokenOverviewsRequest {
    /**
     * List of token addresses to retrieve overview for.
     * @type {Array<string>}
     * @memberof GetTokenOverviewsRequest
     */
    tokens: Array<string>;
    /**
     * 
     * @type {GetTokenOverviewsRequestSort}
     * @memberof GetTokenOverviewsRequest
     */
    sort?: GetTokenOverviewsRequestSort;
    /**
     * List of time windows to include in the overview.
     * @type {Array<TokenOverviewTimeWindowEnum>}
     * @memberof GetTokenOverviewsRequest
     */
    time_windows?: Array<TokenOverviewTimeWindowEnum>;
}
/**
 * Sorting rule.
 * @export
 * @interface GetTokenOverviewsRequestSort
 */
export interface GetTokenOverviewsRequestSort {
    /**
     * 
     * @type {any}
     * @memberof GetTokenOverviewsRequestSort
     */
    field: any | null;
    /**
     * Sorting direction.
     * @type {string}
     * @memberof GetTokenOverviewsRequestSort
     */
    direction: GetTokenOverviewsRequestSortDirectionEnum;
}

/**
* @export
* @enum {string}
*/
export enum GetTokenOverviewsRequestSortDirectionEnum {
    ASC = 'asc',
    DESC = 'desc'
}

/**
 * 
 * @export
 * @interface GetTokenPricesRequest
 */
export interface GetTokenPricesRequest {
    /**
     * List of token addresses to retrieve prices for.
     * @type {Array<string>}
     * @memberof GetTokenPricesRequest
     */
    tokens: Array<string>;
}
/**
 * 
 * @export
 * @interface GetWalletOverviewHistoryRequest
 */
export interface GetWalletOverviewHistoryRequest {
    /**
     * Wallet address to retrieve overview history for.
     * @type {string}
     * @memberof GetWalletOverviewHistoryRequest
     */
    wallet: string;
    /**
     * Optional token address to filter overview history by.
     * @type {string}
     * @memberof GetWalletOverviewHistoryRequest
     */
    token?: string;
    /**
     * Start time for the history range, as a Unix timestamp.
     * @type {number}
     * @memberof GetWalletOverviewHistoryRequest
     */
    from?: number;
    /**
     * End time for the history range, as a Unix timestamp.
     * @type {number}
     * @memberof GetWalletOverviewHistoryRequest
     */
    to?: number;
    /**
     * Time interval to aggregate metrics by.
     * @type {string}
     * @memberof GetWalletOverviewHistoryRequest
     */
    time_interval?: GetWalletOverviewHistoryRequestTimeIntervalEnum;
}

/**
* @export
* @enum {string}
*/
export enum GetWalletOverviewHistoryRequestTimeIntervalEnum {
    _1H = '1h',
    _4H = '4h',
    _12H = '12h',
    _1D = '1d'
}

/**
 * 
 * @export
 * @interface GetWalletOverviewRequest
 */
export interface GetWalletOverviewRequest {
    /**
     * Wallet address to retrieve overview for.
     * @type {string}
     * @memberof GetWalletOverviewRequest
     */
    wallet: string;
    /**
     * List of time windows to include in the overview.
     * @type {Array<WalletOverviewTimeWindowEnum>}
     * @memberof GetWalletOverviewRequest
     */
    time_windows?: Array<WalletOverviewTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetWalletOverviewsRequest
 */
export interface GetWalletOverviewsRequest {
    /**
     * List of wallet addresses to retrieve overview for.
     * @type {Array<string>}
     * @memberof GetWalletOverviewsRequest
     */
    wallets?: Array<string>;
    /**
     * 
     * @type {PayloadSortField}
     * @memberof GetWalletOverviewsRequest
     */
    sort?: PayloadSortField;
    /**
     * List of time windows to include in the overview.
     * @type {Array<WalletOverviewTimeWindowEnum>}
     * @memberof GetWalletOverviewsRequest
     */
    time_windows?: Array<WalletOverviewTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetWalletPortfolioRequest
 */
export interface GetWalletPortfolioRequest {
    /**
     * Wallet address to retrieve portfolio for.
     * @type {string}
     * @memberof GetWalletPortfolioRequest
     */
    wallet: string;
}
/**
 * 
 * @export
 * @interface GetWalletPositionOverviewsByTokensRequest
 */
export interface GetWalletPositionOverviewsByTokensRequest {
    /**
     * Wallet address to retrieve overview for.
     * @type {string}
     * @memberof GetWalletPositionOverviewsByTokensRequest
     */
    wallet: string;
    /**
     * List of token addresses to include in the overview breakdown.
     * @type {Array<string>}
     * @memberof GetWalletPositionOverviewsByTokensRequest
     */
    tokens: Array<string>;
    /**
     * List of time windows to include in the overview.
     * @type {Array<WalletOverviewTimeWindowEnum>}
     * @memberof GetWalletPositionOverviewsByTokensRequest
     */
    time_windows?: Array<WalletOverviewTimeWindowEnum>;
}
/**
 * 
 * @export
 * @interface GetWalletPositionOverviewsByWalletsRequest
 */
export interface GetWalletPositionOverviewsByWalletsRequest {
    /**
     * Token address to retrieve overview for.
     * @type {string}
     * @memberof GetWalletPositionOverviewsByWalletsRequest
     */
    token: string;
    /**
     * List of wallet addresses to include in the overview breakdown.
     * @type {Array<string>}
     * @memberof GetWalletPositionOverviewsByWalletsRequest
     */
    wallets: Array<string>;
    /**
     * List of time windows to include in the overview.
     * @type {Array<WalletOverviewTimeWindowEnum>}
     * @memberof GetWalletPositionOverviewsByWalletsRequest
     */
    time_windows?: Array<WalletOverviewTimeWindowEnum>;
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
 * @interface SearchTokenOverviewsRequest
 */
export interface SearchTokenOverviewsRequest {
    /**
     * 
     * @type {PayloadQueryField}
     * @memberof SearchTokenOverviewsRequest
     */
    query?: PayloadQueryField;
    /**
     * List of filter rules to apply.
     * @type {Array<PayloadFilterFieldInner>}
     * @memberof SearchTokenOverviewsRequest
     */
    filter?: Array<PayloadFilterFieldInner>;
    /**
     * 
     * @type {PayloadSortField}
     * @memberof SearchTokenOverviewsRequest
     */
    sort?: PayloadSortField;
    /**
     * List of time windows to include in the overview.
     * @type {Array<TokenOverviewTimeWindowEnum>}
     * @memberof SearchTokenOverviewsRequest
     */
    time_windows?: Array<TokenOverviewTimeWindowEnum>;
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof SearchTokenOverviewsRequest
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {string}
     * @memberof SearchTokenOverviewsRequest
     */
    cursor?: string;
}
/**
 * 
 * @export
 * @interface SearchWalletOverviews200Response
 */
export interface SearchWalletOverviews200Response {
    /**
     * 
     * @type {number}
     * @memberof SearchWalletOverviews200Response
     */
    page?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchWalletOverviews200Response
     */
    cursor?: string;
    /**
     * 
     * @type {Array<WalletOverview>}
     * @memberof SearchWalletOverviews200Response
     */
    results?: Array<WalletOverview>;
}
/**
 * 
 * @export
 * @interface SearchWalletOverviewsRequest
 */
export interface SearchWalletOverviewsRequest {
    /**
     * List of filter rules to apply.
     * @type {Array<PayloadFilterFieldInner>}
     * @memberof SearchWalletOverviewsRequest
     */
    filter?: Array<PayloadFilterFieldInner>;
    /**
     * 
     * @type {PayloadSortField}
     * @memberof SearchWalletOverviewsRequest
     */
    sort?: PayloadSortField;
    /**
     * List of time windows to include in the overview.
     * @type {Array<WalletOverviewTimeWindowEnum>}
     * @memberof SearchWalletOverviewsRequest
     */
    time_windows?: Array<WalletOverviewTimeWindowEnum>;
    /**
     * Maximum number of results to return.
     * @type {number}
     * @memberof SearchWalletOverviewsRequest
     */
    limit?: number;
    /**
     * Cursor to return the next page of results.
     * @type {string}
     * @memberof SearchWalletOverviewsRequest
     */
    cursor?: string;
}
/**
 * 
 * @export
 * @interface TokenOverview
 */
export interface TokenOverview {
    /**
     * 
     * @type {string}
     * @memberof TokenOverview
     */
    token_address?: string;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    last_trade_at?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    created_at?: number;
    /**
     * 
     * @type {string}
     * @memberof TokenOverview
     */
    symbol?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenOverview
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenOverview
     */
    dev_address?: string;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    dev_migrations?: number;
    /**
     * 
     * @type {string}
     * @memberof TokenOverview
     */
    image?: string;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    fdv?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    market_cap?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    liquidity?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    holders?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    total_supply?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    circulating_supply?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    top_holdings?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    dev_holdings?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    bonding_curve_progress?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenOverview
     */
    migrated_at?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TokenOverview
     */
    verified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TokenOverview
     */
    twitter?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenOverview
     */
    telegram?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenOverview
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenOverview
     */
    discord?: string;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum TokenOverviewTimeWindowEnum {
    _30D = '30d',
    _14D = '14d',
    _7D = '7d',
    _3D = '3d',
    _1D = '1d'
}

/**
 * 
 * @export
 * @interface TokenPrice
 */
export interface TokenPrice {
    /**
     * 
     * @type {string}
     * @memberof TokenPrice
     */
    token?: string;
    /**
     * 
     * @type {number}
     * @memberof TokenPrice
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenPrice
     */
    updated_at?: number;
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
/**
 * 
 * @export
 * @interface WalletOverview
 */
export interface WalletOverview {
    /**
     * 
     * @type {string}
     * @memberof WalletOverview
     */
    wallet_address?: string;
    /**
     * 
     * @type {number}
     * @memberof WalletOverview
     */
    last_trade_at?: number;
    /**
     * 
     * @type {WalletOverviewTimeWindows}
     * @memberof WalletOverview
     */
    time_windows?: WalletOverviewTimeWindows;
}
/**
 * 
 * @export
 * @interface WalletOverviewHistoryInner
 */
export interface WalletOverviewHistoryInner {
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    risk_score?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    consistency_score?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    largest_win?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    largest_loss?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    max_consecutive_wins?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    max_consecutive_losses?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_buy_size?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_sell_size?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_buy_mcap?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_sell_mcap?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_daily_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_daily_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_daily_trade_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_daily_traded_tokens?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_daily_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_holding_duration?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_trade_delta?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_token_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    avg_token_roi?: number;
    /**
     * 
     * @type {TokenRoiDistribution}
     * @memberof WalletOverviewHistoryInner
     */
    token_roi_distribution?: TokenRoiDistribution;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    trade_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    buy_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    sell_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    position_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    win_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    loss_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    win_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    loss_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    volume?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    buy_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    sell_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    winrate?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    volume_weighted_winrate?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    roi?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    volume_weighted_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    time_weighted_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    pnl_volume_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    token_hit_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    win_loss_size_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    profit_factor?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    profit_expectancy?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    recovery_factor?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    winrate_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    winrate_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    pnl_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    pnl_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    roi_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    roi_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    sharpe_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    sortino_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    max_drawdown?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    risk_of_ruin?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    turnover?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewHistoryInner
     */
    time?: number;
}
/**
 * 
 * @export
 * @interface WalletOverviewMetrics
 */
export interface WalletOverviewMetrics {
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    risk_score?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    consistency_score?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    largest_win?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    largest_loss?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    max_consecutive_wins?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    max_consecutive_losses?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_buy_size?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_sell_size?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_buy_mcap?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_sell_mcap?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_daily_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_daily_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_daily_trade_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_daily_traded_tokens?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_daily_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_holding_duration?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_trade_delta?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_token_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    avg_token_roi?: number;
    /**
     * 
     * @type {TokenRoiDistribution}
     * @memberof WalletOverviewMetrics
     */
    token_roi_distribution?: TokenRoiDistribution;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    trade_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    buy_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    sell_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    position_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    win_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    loss_count?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    win_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    loss_pnl?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    volume?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    buy_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    sell_volume?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    winrate?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    volume_weighted_winrate?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    roi?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    volume_weighted_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    time_weighted_roi?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    pnl_volume_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    token_hit_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    win_loss_size_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    profit_factor?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    profit_expectancy?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    recovery_factor?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    winrate_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    winrate_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    pnl_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    pnl_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    roi_stability?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    roi_volatility?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    sharpe_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    sortino_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    max_drawdown?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    risk_of_ruin?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletOverviewMetrics
     */
    turnover?: number;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum WalletOverviewTimeWindowEnum {
    _30D = '30d',
    _14D = '14d',
    _7D = '7d',
    _3D = '3d',
    _1D = '1d'
}

/**
 * 
 * @export
 * @interface WalletOverviewTimeWindows
 */
export interface WalletOverviewTimeWindows {
    /**
     * 
     * @type {WalletOverviewMetrics}
     * @memberof WalletOverviewTimeWindows
     */
    _30d?: WalletOverviewMetrics;
    /**
     * 
     * @type {WalletOverviewMetrics}
     * @memberof WalletOverviewTimeWindows
     */
    _14d?: WalletOverviewMetrics;
    /**
     * 
     * @type {WalletOverviewMetrics}
     * @memberof WalletOverviewTimeWindows
     */
    _7d?: WalletOverviewMetrics;
    /**
     * 
     * @type {WalletOverviewMetrics}
     * @memberof WalletOverviewTimeWindows
     */
    _3d?: WalletOverviewMetrics;
    /**
     * 
     * @type {WalletOverviewMetrics}
     * @memberof WalletOverviewTimeWindows
     */
    _1d?: WalletOverviewMetrics;
}
/**
 * 
 * @export
 * @interface WalletPortfolio
 */
export interface WalletPortfolio {
    /**
     * 
     * @type {number}
     * @memberof WalletPortfolio
     */
    value?: number;
    /**
     * 
     * @type {Array<WalletPortfolioTokensInner>}
     * @memberof WalletPortfolio
     */
    tokens?: Array<WalletPortfolioTokensInner>;
}
/**
 * 
 * @export
 * @interface WalletPortfolioTokensInner
 */
export interface WalletPortfolioTokensInner {
    /**
     * 
     * @type {string}
     * @memberof WalletPortfolioTokensInner
     */
    token?: string;
    /**
     * 
     * @type {number}
     * @memberof WalletPortfolioTokensInner
     */
    balance?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletPortfolioTokensInner
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof WalletPortfolioTokensInner
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface WalletTokenOverview
 */
export interface WalletTokenOverview {
    /**
     * 
     * @type {string}
     * @memberof WalletTokenOverview
     */
    wallet_address?: string;
    /**
     * 
     * @type {string}
     * @memberof WalletTokenOverview
     */
    token_address?: string;
    /**
     * 
     * @type {number}
     * @memberof WalletTokenOverview
     */
    last_trade_at?: number;
    /**
     * 
     * @type {WalletOverviewTimeWindows}
     * @memberof WalletTokenOverview
     */
    time_windows?: WalletOverviewTimeWindows;
}
