// tslint:disable
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Address = Node & {
  __typename?: 'Address';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country: Country;
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String'];
  type: AdjustmentType;
  description: Scalars['String'];
  amount: Scalars['Int'];
};

export enum AdjustmentType {
  Tax = 'TAX',
  Promotion = 'PROMOTION',
  Shipping = 'SHIPPING',
  Refund = 'REFUND',
  TaxRefund = 'TAX_REFUND',
  PromotionRefund = 'PROMOTION_REFUND',
  ShippingRefund = 'SHIPPING_REFUND'
}

export type Administrator = Node & {
  __typename?: 'Administrator';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  emailAddress: Scalars['String'];
  user: User;
};

export type AdministratorList = PaginatedList & {
  __typename?: 'AdministratorList';
  items: Array<Administrator>;
  totalItems: Scalars['Int'];
};

export type Asset = Node & {
  __typename?: 'Asset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  type: AssetType;
  fileSize: Scalars['Int'];
  mimeType: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  source: Scalars['String'];
  preview: Scalars['String'];
  focalPoint?: Maybe<Coordinate>;
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int'];
};

export enum AssetType {
  Image = 'IMAGE',
  Video = 'VIDEO',
  Binary = 'BINARY'
}

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
};

export type BooleanOperators = {
  eq?: Maybe<Scalars['Boolean']>;
};

export type BulkDiscount = {
  __typename?: 'BulkDiscount';
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  price: Scalars['Int'];
};

export type Cancellation = Node & StockMovement & {
  __typename?: 'Cancellation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productVariant: ProductVariant;
  type: StockMovementType;
  quantity: Scalars['Int'];
  orderLine: OrderLine;
};

export type Channel = Node & {
  __typename?: 'Channel';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  token: Scalars['String'];
  defaultTaxZone?: Maybe<Zone>;
  defaultShippingZone?: Maybe<Zone>;
  defaultLanguageCode: LanguageCode;
  currencyCode: CurrencyCode;
  pricesIncludeTax: Scalars['Boolean'];
};

export type Collection = Node & {
  __typename?: 'Collection';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  slug: Scalars['String'];
  breadcrumbs: Array<CollectionBreadcrumb>;
  position: Scalars['Int'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  parent?: Maybe<Collection>;
  children?: Maybe<Array<Collection>>;
  filters: Array<ConfigurableOperation>;
  translations: Array<CollectionTranslation>;
  productVariants: ProductVariantList;
  customFields?: Maybe<Scalars['JSON']>;
};


export type CollectionProductVariantsArgs = {
  options?: Maybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CollectionFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  languageCode?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  slug?: Maybe<StringOperators>;
  position?: Maybe<NumberOperators>;
  description?: Maybe<StringOperators>;
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int'];
};

export type CollectionListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<CollectionSortParameter>;
  filter?: Maybe<CollectionFilterParameter>;
};

export type CollectionSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  position?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  name: Scalars['String'];
  type: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['JSON']>;
};

export type ConfigArgInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  code: Scalars['String'];
  args: Array<ConfigArg>;
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  code: Scalars['String'];
  args: Array<ConfigArgDefinition>;
  description: Scalars['String'];
};

export type ConfigurableOperationInput = {
  code: Scalars['String'];
  arguments: Array<ConfigArgInput>;
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Country = Node & {
  __typename?: 'Country';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  translations: Array<CountryTranslation>;
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int'];
};

export type CountryTranslation = {
  __typename?: 'CountryTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type CreateAddressInput = {
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type CreateCustomerInput = {
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  customFields?: Maybe<Scalars['JSON']>;
};

/**
 * @description
 * ISO 4217 currency code
 * 
 * @docsCategory common
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byn = 'BYN',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** Swiss franc */
  Chf = 'CHF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Renminbi (Chinese) yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verde escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mru = 'MRU',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona/kronor */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Stn = 'STN',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikistani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan paʻanga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** United States dollar */
  Usd = 'USD',
  /** Uruguayan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Ves = 'VES',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** CFP franc (franc Pacifique) */
  Xpf = 'XPF',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmw = 'ZMW',
  /** Zimbabwean dollar */
  Zwl = 'ZWL'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  channels: Array<CurrentUserChannel>;
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  id: Scalars['ID'];
  token: Scalars['String'];
  code: Scalars['String'];
  permissions: Array<Permission>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  addresses?: Maybe<Array<Address>>;
  orders: OrderList;
  user?: Maybe<User>;
  customFields?: Maybe<Scalars['JSON']>;
};


export type CustomerOrdersArgs = {
  options?: Maybe<OrderListOptions>;
};

export type CustomerFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  title?: Maybe<StringOperators>;
  firstName?: Maybe<StringOperators>;
  lastName?: Maybe<StringOperators>;
  phoneNumber?: Maybe<StringOperators>;
  emailAddress?: Maybe<StringOperators>;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  customers: CustomerList;
};


export type CustomerGroupCustomersArgs = {
  options?: Maybe<CustomerListOptions>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int'];
};

export type CustomerListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<CustomerSortParameter>;
  filter?: Maybe<CustomerFilterParameter>;
};

export type CustomerSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
  emailAddress?: Maybe<SortOrder>;
};

export type CustomField = {
  name: Scalars['String'];
  type: Scalars['String'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
};

export type CustomFieldConfig = StringCustomFieldConfig | LocaleStringCustomFieldConfig | IntCustomFieldConfig | FloatCustomFieldConfig | BooleanCustomFieldConfig | DateTimeCustomFieldConfig;

export type CustomFields = {
  __typename?: 'CustomFields';
  Address: Array<CustomFieldConfig>;
  Collection: Array<CustomFieldConfig>;
  Customer: Array<CustomFieldConfig>;
  Facet: Array<CustomFieldConfig>;
  FacetValue: Array<CustomFieldConfig>;
  GlobalSettings: Array<CustomFieldConfig>;
  Order: Array<CustomFieldConfig>;
  OrderLine: Array<CustomFieldConfig>;
  Product: Array<CustomFieldConfig>;
  ProductOption: Array<CustomFieldConfig>;
  ProductOptionGroup: Array<CustomFieldConfig>;
  ProductVariant: Array<CustomFieldConfig>;
  User: Array<CustomFieldConfig>;
};

export type DateOperators = {
  eq?: Maybe<Scalars['DateTime']>;
  before?: Maybe<Scalars['DateTime']>;
  after?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateRange>;
};

export type DateRange = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};


/**
 * Expects the same validation formats as the <input type="datetime-local"> HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  min?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['Int']>;
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  result: DeletionResult;
  message?: Maybe<Scalars['String']>;
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  Deleted = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NotDeleted = 'NOT_DELETED'
}

export type Email = Node & {
  __typename?: 'Email';
  id: Scalars['ID'];
  email: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type EmailAddInput = {
  email: Scalars['String'];
};

export type Facet = Node & {
  __typename?: 'Facet';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  code: Scalars['String'];
  values: Array<FacetValue>;
  translations: Array<FacetTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int'];
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  facet: Facet;
  name: Scalars['String'];
  code: Scalars['String'];
  translations: Array<FacetValueTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  facetValue: FacetValue;
  count: Scalars['Int'];
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type Feedback = Node & {
  __typename?: 'Feedback';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  feedback: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FeedbackAddInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  feedback: Scalars['String'];
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  orderItems: Array<OrderItem>;
  method: Scalars['String'];
  trackingCode?: Maybe<Scalars['String']>;
};

export type GlobalSettings = {
  __typename?: 'GlobalSettings';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  availableLanguages: Array<LanguageCode>;
  trackInventory: Scalars['Boolean'];
  serverConfig: ServerConfig;
  customFields?: Maybe<Scalars['JSON']>;
};

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isPublic: Scalars['Boolean'];
  type: HistoryEntryType;
  administrator?: Maybe<Administrator>;
  data: Scalars['JSON'];
};

export type HistoryEntryFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  isPublic?: Maybe<BooleanOperators>;
  type?: Maybe<StringOperators>;
};

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int'];
};

export type HistoryEntryListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<HistoryEntrySortParameter>;
  filter?: Maybe<HistoryEntryFilterParameter>;
};

export type HistoryEntrySortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum HistoryEntryType {
  CustomerRegistered = 'CUSTOMER_REGISTERED',
  CustomerVerified = 'CUSTOMER_VERIFIED',
  CustomerDetailUpdated = 'CUSTOMER_DETAIL_UPDATED',
  CustomerAddedToGroup = 'CUSTOMER_ADDED_TO_GROUP',
  CustomerRemovedFromGroup = 'CUSTOMER_REMOVED_FROM_GROUP',
  CustomerAddressCreated = 'CUSTOMER_ADDRESS_CREATED',
  CustomerAddressUpdated = 'CUSTOMER_ADDRESS_UPDATED',
  CustomerAddressDeleted = 'CUSTOMER_ADDRESS_DELETED',
  CustomerPasswordUpdated = 'CUSTOMER_PASSWORD_UPDATED',
  CustomerPasswordResetRequested = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CustomerPasswordResetVerified = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CustomerEmailUpdateRequested = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CustomerEmailUpdateVerified = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CustomerNote = 'CUSTOMER_NOTE',
  OrderStateTransition = 'ORDER_STATE_TRANSITION',
  OrderPaymentTransition = 'ORDER_PAYMENT_TRANSITION',
  OrderFullfillment = 'ORDER_FULLFILLMENT',
  OrderCancellation = 'ORDER_CANCELLATION',
  OrderRefundTransition = 'ORDER_REFUND_TRANSITION',
  OrderNote = 'ORDER_NOTE',
  OrderCouponApplied = 'ORDER_COUPON_APPLIED',
  OrderCouponRemoved = 'ORDER_COUPON_REMOVED'
}

export type ImportInfo = {
  __typename?: 'ImportInfo';
  errors?: Maybe<Array<Scalars['String']>>;
  processed: Scalars['Int'];
  imported: Scalars['Int'];
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
};


/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 * 
 * @docsCategory common
 */
export enum LanguageCode {
  /** Afrikaans */
  Af = 'af',
  /** Akan */
  Ak = 'ak',
  /** Albanian */
  Sq = 'sq',
  /** Amharic */
  Am = 'am',
  /** Arabic */
  Ar = 'ar',
  /** Armenian */
  Hy = 'hy',
  /** Assamese */
  As = 'as',
  /** Azerbaijani */
  Az = 'az',
  /** Bambara */
  Bm = 'bm',
  /** Bangla */
  Bn = 'bn',
  /** Basque */
  Eu = 'eu',
  /** Belarusian */
  Be = 'be',
  /** Bosnian */
  Bs = 'bs',
  /** Breton */
  Br = 'br',
  /** Bulgarian */
  Bg = 'bg',
  /** Burmese */
  My = 'my',
  /** Catalan */
  Ca = 'ca',
  /** Chechen */
  Ce = 'ce',
  /** Chinese */
  Zh = 'zh',
  /** Simplified Chinese */
  ZhHans = 'zh_Hans',
  /** Traditional Chinese */
  ZhHant = 'zh_Hant',
  /** Church Slavic */
  Cu = 'cu',
  /** Cornish */
  Kw = 'kw',
  /** Corsican */
  Co = 'co',
  /** Croatian */
  Hr = 'hr',
  /** Czech */
  Cs = 'cs',
  /** Danish */
  Da = 'da',
  /** Dutch */
  Nl = 'nl',
  /** Flemish */
  NlBe = 'nl_BE',
  /** Dzongkha */
  Dz = 'dz',
  /** English */
  En = 'en',
  /** Australian English */
  EnAu = 'en_AU',
  /** Canadian English */
  EnCa = 'en_CA',
  /** British English */
  EnGb = 'en_GB',
  /** American English */
  EnUs = 'en_US',
  /** Esperanto */
  Eo = 'eo',
  /** Estonian */
  Et = 'et',
  /** Ewe */
  Ee = 'ee',
  /** Faroese */
  Fo = 'fo',
  /** Finnish */
  Fi = 'fi',
  /** French */
  Fr = 'fr',
  /** Canadian French */
  FrCa = 'fr_CA',
  /** Swiss French */
  FrCh = 'fr_CH',
  /** Fulah */
  Ff = 'ff',
  /** Galician */
  Gl = 'gl',
  /** Ganda */
  Lg = 'lg',
  /** Georgian */
  Ka = 'ka',
  /** German */
  De = 'de',
  /** Austrian German */
  DeAt = 'de_AT',
  /** Swiss High German */
  DeCh = 'de_CH',
  /** Greek */
  El = 'el',
  /** Gujarati */
  Gu = 'gu',
  /** Haitian Creole */
  Ht = 'ht',
  /** Hausa */
  Ha = 'ha',
  /** Hebrew */
  He = 'he',
  /** Hindi */
  Hi = 'hi',
  /** Hungarian */
  Hu = 'hu',
  /** Icelandic */
  Is = 'is',
  /** Igbo */
  Ig = 'ig',
  /** Indonesian */
  Id = 'id',
  /** Interlingua */
  Ia = 'ia',
  /** Irish */
  Ga = 'ga',
  /** Italian */
  It = 'it',
  /** Japanese */
  Ja = 'ja',
  /** Javanese */
  Jv = 'jv',
  /** Kalaallisut */
  Kl = 'kl',
  /** Kannada */
  Kn = 'kn',
  /** Kashmiri */
  Ks = 'ks',
  /** Kazakh */
  Kk = 'kk',
  /** Khmer */
  Km = 'km',
  /** Kikuyu */
  Ki = 'ki',
  /** Kinyarwanda */
  Rw = 'rw',
  /** Korean */
  Ko = 'ko',
  /** Kurdish */
  Ku = 'ku',
  /** Kyrgyz */
  Ky = 'ky',
  /** Lao */
  Lo = 'lo',
  /** Latin */
  La = 'la',
  /** Latvian */
  Lv = 'lv',
  /** Lingala */
  Ln = 'ln',
  /** Lithuanian */
  Lt = 'lt',
  /** Luba-Katanga */
  Lu = 'lu',
  /** Luxembourgish */
  Lb = 'lb',
  /** Macedonian */
  Mk = 'mk',
  /** Malagasy */
  Mg = 'mg',
  /** Malay */
  Ms = 'ms',
  /** Malayalam */
  Ml = 'ml',
  /** Maltese */
  Mt = 'mt',
  /** Manx */
  Gv = 'gv',
  /** Maori */
  Mi = 'mi',
  /** Marathi */
  Mr = 'mr',
  /** Mongolian */
  Mn = 'mn',
  /** Nepali */
  Ne = 'ne',
  /** North Ndebele */
  Nd = 'nd',
  /** Northern Sami */
  Se = 'se',
  /** Norwegian Bokmål */
  Nb = 'nb',
  /** Norwegian Nynorsk */
  Nn = 'nn',
  /** Nyanja */
  Ny = 'ny',
  /** Odia */
  Or = 'or',
  /** Oromo */
  Om = 'om',
  /** Ossetic */
  Os = 'os',
  /** Pashto */
  Ps = 'ps',
  /** Persian */
  Fa = 'fa',
  /** Dari */
  FaAf = 'fa_AF',
  /** Polish */
  Pl = 'pl',
  /** Portuguese */
  Pt = 'pt',
  /** Brazilian Portuguese */
  PtBr = 'pt_BR',
  /** European Portuguese */
  PtPt = 'pt_PT',
  /** Punjabi */
  Pa = 'pa',
  /** Quechua */
  Qu = 'qu',
  /** Romanian */
  Ro = 'ro',
  /** Moldavian */
  RoMd = 'ro_MD',
  /** Romansh */
  Rm = 'rm',
  /** Rundi */
  Rn = 'rn',
  /** Russian */
  Ru = 'ru',
  /** Samoan */
  Sm = 'sm',
  /** Sango */
  Sg = 'sg',
  /** Sanskrit */
  Sa = 'sa',
  /** Scottish Gaelic */
  Gd = 'gd',
  /** Serbian */
  Sr = 'sr',
  /** Shona */
  Sn = 'sn',
  /** Sichuan Yi */
  Ii = 'ii',
  /** Sindhi */
  Sd = 'sd',
  /** Sinhala */
  Si = 'si',
  /** Slovak */
  Sk = 'sk',
  /** Slovenian */
  Sl = 'sl',
  /** Somali */
  So = 'so',
  /** Southern Sotho */
  St = 'st',
  /** Spanish */
  Es = 'es',
  /** European Spanish */
  EsEs = 'es_ES',
  /** Mexican Spanish */
  EsMx = 'es_MX',
  /** Sundanese */
  Su = 'su',
  /** Swahili */
  Sw = 'sw',
  /** Congo Swahili */
  SwCd = 'sw_CD',
  /** Swedish */
  Sv = 'sv',
  /** Tajik */
  Tg = 'tg',
  /** Tamil */
  Ta = 'ta',
  /** Tatar */
  Tt = 'tt',
  /** Telugu */
  Te = 'te',
  /** Thai */
  Th = 'th',
  /** Tibetan */
  Bo = 'bo',
  /** Tigrinya */
  Ti = 'ti',
  /** Tongan */
  To = 'to',
  /** Turkish */
  Tr = 'tr',
  /** Turkmen */
  Tk = 'tk',
  /** Ukrainian */
  Uk = 'uk',
  /** Urdu */
  Ur = 'ur',
  /** Uyghur */
  Ug = 'ug',
  /** Uzbek */
  Uz = 'uz',
  /** Vietnamese */
  Vi = 'vi',
  /** Volapük */
  Vo = 'vo',
  /** Welsh */
  Cy = 'cy',
  /** Western Frisian */
  Fy = 'fy',
  /** Wolof */
  Wo = 'wo',
  /** Xhosa */
  Xh = 'xh',
  /** Yiddish */
  Yi = 'yi',
  /** Yoruba */
  Yo = 'yo',
  /** Zulu */
  Zu = 'zu'
}

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String'];
};

export enum LogicalOperator {
  And = 'AND',
  Or = 'OR'
}

export type LoginResult = {
  __typename?: 'LoginResult';
  user: CurrentUser;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Adds an item to the order. If custom fields are defined on the OrderLine
   * entity, a third argument 'customFields' will be available.
   */
  addItemToOrder?: Maybe<Order>;
  removeOrderLine?: Maybe<Order>;
  /**
   * Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a
   * third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available.
   */
  adjustOrderLine?: Maybe<Order>;
  /** Applies the given coupon code to the active Order */
  applyCouponCode?: Maybe<Order>;
  /** Removes the given coupon code from the active Order */
  removeCouponCode?: Maybe<Order>;
  transitionOrderToState?: Maybe<Order>;
  /** Sets the shipping address for this order */
  setOrderShippingAddress?: Maybe<Order>;
  /** Sets the billing address for this order */
  setOrderBillingAddress?: Maybe<Order>;
  /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query */
  setOrderShippingMethod?: Maybe<Order>;
  addPaymentToOrder?: Maybe<Order>;
  setCustomerForOrder?: Maybe<Order>;
  login: LoginResult;
  logout: Scalars['Boolean'];
  /**
   * Regenerate and send a verification token for a new Customer registration. Only
   * applicable if `authOptions.requireVerification` is set to true.
   */
  refreshCustomerVerification: Scalars['Boolean'];
  /** Register a Customer account with the given credentials */
  registerCustomerAccount: Scalars['Boolean'];
  /** Update an existing Customer */
  updateCustomer: Customer;
  /** Create a new Customer Address */
  createCustomerAddress: Address;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /** Delete an existing Address */
  deleteCustomerAddress: Scalars['Boolean'];
  /**
   * Verify a Customer email address with the token sent to that address. Only
   * applicable if `authOptions.requireVerification` is set to true.
   */
  verifyCustomerAccount: LoginResult;
  /** Update the password of the active Customer */
  updateCustomerPassword?: Maybe<Scalars['Boolean']>;
  /**
   * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
   * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
   * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
   * that verification token to the Customer, which is then used to verify the change of email address.
   */
  requestUpdateCustomerEmailAddress?: Maybe<Scalars['Boolean']>;
  /**
   * Confirm the update of the emailAddress with the provided token, which has been generated by the
   * `requestUpdateCustomerEmailAddress` mutation.
   */
  updateCustomerEmailAddress?: Maybe<Scalars['Boolean']>;
  /** Requests a password reset email to be sent */
  requestPasswordReset?: Maybe<Scalars['Boolean']>;
  /** Resets a Customer's password based on the provided token */
  resetPassword: LoginResult;
  updateTotalSales: Scalars['Boolean'];
  increaseTotalSales: Scalars['Boolean'];
  submitProductReview: ProductReview;
  voteOnReview: ProductReview;
  addFeedback: Feedback;
  addSubscriptionEmail: Array<Maybe<Email>>;
  addSubscriptionPhone: Array<Maybe<Phone>>;
  addVendor: Vendor;
};


export type MutationAddItemToOrderArgs = {
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type MutationRemoveOrderLineArgs = {
  orderLineId: Scalars['ID'];
};


export type MutationAdjustOrderLineArgs = {
  orderLineId: Scalars['ID'];
  quantity?: Maybe<Scalars['Int']>;
};


export type MutationApplyCouponCodeArgs = {
  couponCode: Scalars['String'];
};


export type MutationRemoveCouponCodeArgs = {
  couponCode: Scalars['String'];
};


export type MutationTransitionOrderToStateArgs = {
  state: Scalars['String'];
};


export type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderBillingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Scalars['ID'];
};


export type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};


export type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
  rememberMe?: Maybe<Scalars['Boolean']>;
};


export type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String'];
};


export type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};


export type MutationVerifyCustomerAccountArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationRequestUpdateCustomerEmailAddressArgs = {
  password: Scalars['String'];
  newEmailAddress: Scalars['String'];
};


export type MutationUpdateCustomerEmailAddressArgs = {
  token: Scalars['String'];
};


export type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateTotalSalesArgs = {
  input: Array<SalesTrackerInput>;
};


export type MutationIncreaseTotalSalesArgs = {
  input: Array<SalesTrackerInput>;
};


export type MutationSubmitProductReviewArgs = {
  input: SubmitProductReviewInput;
};


export type MutationVoteOnReviewArgs = {
  id: Scalars['ID'];
  vote: Scalars['Boolean'];
};


export type MutationAddFeedbackArgs = {
  input: FeedbackAddInput;
};


export type MutationAddSubscriptionEmailArgs = {
  input: Array<EmailAddInput>;
};


export type MutationAddSubscriptionPhoneArgs = {
  input: Array<PhoneAddInput>;
};


export type MutationAddVendorArgs = {
  input: VendorAddInputShop;
};

export type Node = {
  id: Scalars['ID'];
};

export type NumberOperators = {
  eq?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  between?: Maybe<NumberRange>;
};

export type NumberRange = {
  start: Scalars['Float'];
  end: Scalars['Float'];
};

export type Order = Node & {
  __typename?: 'Order';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /** A unique code for the Order */
  code: Scalars['String'];
  state: Scalars['String'];
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean'];
  customer?: Maybe<Customer>;
  shippingAddress?: Maybe<OrderAddress>;
  billingAddress?: Maybe<OrderAddress>;
  lines: Array<OrderLine>;
  /** Order-level adjustments to the order total, such as discounts from promotions */
  adjustments: Array<Adjustment>;
  couponCodes: Array<Scalars['String']>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  payments?: Maybe<Array<Payment>>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  subTotalBeforeTax: Scalars['Int'];
  /** The subTotal is the total of the OrderLines, before order-level promotions and shipping has been applied. */
  subTotal: Scalars['Int'];
  currencyCode: CurrencyCode;
  shipping: Scalars['Int'];
  shippingWithTax: Scalars['Int'];
  shippingMethod?: Maybe<ShippingMethod>;
  totalBeforeTax: Scalars['Int'];
  total: Scalars['Int'];
  history: HistoryEntryList;
  customFields?: Maybe<Scalars['JSON']>;
};


export type OrderHistoryArgs = {
  options?: Maybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type OrderFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  code?: Maybe<StringOperators>;
  state?: Maybe<StringOperators>;
  active?: Maybe<BooleanOperators>;
  subTotalBeforeTax?: Maybe<NumberOperators>;
  subTotal?: Maybe<NumberOperators>;
  currencyCode?: Maybe<StringOperators>;
  shipping?: Maybe<NumberOperators>;
  shippingWithTax?: Maybe<NumberOperators>;
  totalBeforeTax?: Maybe<NumberOperators>;
  total?: Maybe<NumberOperators>;
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  cancelled: Scalars['Boolean'];
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  unitPriceIncludesTax: Scalars['Boolean'];
  taxRate: Scalars['Float'];
  adjustments: Array<Adjustment>;
  fulfillment?: Maybe<Fulfillment>;
  refundId?: Maybe<Scalars['ID']>;
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productVariant: ProductVariant;
  featuredAsset?: Maybe<Asset>;
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  quantity: Scalars['Int'];
  items: Array<OrderItem>;
  totalPrice: Scalars['Int'];
  adjustments: Array<Adjustment>;
  order: Order;
  customFields?: Maybe<Scalars['JSON']>;
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int'];
};

export type OrderListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<OrderSortParameter>;
  filter?: Maybe<OrderFilterParameter>;
};

export type OrderSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  subTotalBeforeTax?: Maybe<SortOrder>;
  subTotal?: Maybe<SortOrder>;
  shipping?: Maybe<SortOrder>;
  shippingWithTax?: Maybe<SortOrder>;
  totalBeforeTax?: Maybe<SortOrder>;
  total?: Maybe<SortOrder>;
};

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  method: Scalars['String'];
  amount: Scalars['Int'];
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  refunds: Array<Refund>;
  metadata?: Maybe<Scalars['JSON']>;
};

/** Passed as input to the `addPaymentToOrder` mutation. */
export type PaymentInput = {
  /** This field should correspond to the `code` property of a PaymentMethodHandler. */
  method: Scalars['String'];
  /**
   * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
   * as the "metadata" argument. For example, it could contain an ID for the payment and other
   * data generated by the payment provider.
   */
  metadata: Scalars['JSON'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  configArgs: Array<ConfigArg>;
};

/**
 * "
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 * 
 * @docsCategory common
 */
export enum Permission {
  /**  The Authenticated role means simply that the user is logged in  */
  Authenticated = 'Authenticated',
  /**  SuperAdmin can perform the most sensitive tasks */
  SuperAdmin = 'SuperAdmin',
  /**  Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /**  Public means any unauthenticated user may perform the operation  */
  Public = 'Public',
  CreateCatalog = 'CreateCatalog',
  ReadCatalog = 'ReadCatalog',
  UpdateCatalog = 'UpdateCatalog',
  DeleteCatalog = 'DeleteCatalog',
  CreateCustomer = 'CreateCustomer',
  ReadCustomer = 'ReadCustomer',
  UpdateCustomer = 'UpdateCustomer',
  DeleteCustomer = 'DeleteCustomer',
  CreateAdministrator = 'CreateAdministrator',
  ReadAdministrator = 'ReadAdministrator',
  UpdateAdministrator = 'UpdateAdministrator',
  DeleteAdministrator = 'DeleteAdministrator',
  CreateOrder = 'CreateOrder',
  ReadOrder = 'ReadOrder',
  UpdateOrder = 'UpdateOrder',
  DeleteOrder = 'DeleteOrder',
  CreatePromotion = 'CreatePromotion',
  ReadPromotion = 'ReadPromotion',
  UpdatePromotion = 'UpdatePromotion',
  DeletePromotion = 'DeletePromotion',
  CreateSettings = 'CreateSettings',
  ReadSettings = 'ReadSettings',
  UpdateSettings = 'UpdateSettings',
  DeleteSettings = 'DeleteSettings'
}

export type Phone = Node & {
  __typename?: 'Phone';
  id: Scalars['ID'];
  phone: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type PhoneAddInput = {
  phone: Scalars['String'];
};

/** The price range where the result has more than one price */
export type PriceRange = {
  __typename?: 'PriceRange';
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type Product = Node & {
  __typename?: 'Product';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  variants: Array<ProductVariant>;
  optionGroups: Array<ProductOptionGroup>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductTranslation>;
  collections: Array<Collection>;
  recommendations: Array<ProductRecommendation>;
  reviews: ProductReviewList;
  reviewsHistogram: Array<ProductReviewHistogramItem>;
  customFields?: Maybe<ProductCustomFields>;
};


export type ProductReviewsArgs = {
  options?: Maybe<ProductReviewListOptions>;
};

export type ProductCustomFields = {
  __typename?: 'ProductCustomFields';
  productRecommendationsEnabled?: Maybe<Scalars['Boolean']>;
  reviewRating?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Float']>;
};

export type ProductFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  languageCode?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  slug?: Maybe<StringOperators>;
  description?: Maybe<StringOperators>;
  productRecommendationsEnabled?: Maybe<BooleanOperators>;
  reviewRating?: Maybe<NumberOperators>;
  reviewCount?: Maybe<NumberOperators>;
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int'];
};

export type ProductListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductSortParameter>;
  filter?: Maybe<ProductFilterParameter>;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  groupId: Scalars['ID'];
  translations: Array<ProductOptionTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type ProductRecommendation = {
  __typename?: 'ProductRecommendation';
  product: Product;
  recommendation: Product;
  type: RecommendationType;
};

export type ProductReview = Node & {
  __typename?: 'ProductReview';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  product: Product;
  productVariant?: Maybe<ProductVariant>;
  summary: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  rating: Scalars['Float'];
  author?: Maybe<Customer>;
  authorName: Scalars['String'];
  authorLocation?: Maybe<Scalars['String']>;
  upvotes: Scalars['Int'];
  downvotes: Scalars['Int'];
  state: Scalars['String'];
  response?: Maybe<Scalars['String']>;
  responseCreatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductReviewFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  summary?: Maybe<StringOperators>;
  body?: Maybe<StringOperators>;
  rating?: Maybe<NumberOperators>;
  authorName?: Maybe<StringOperators>;
  authorLocation?: Maybe<StringOperators>;
  upvotes?: Maybe<NumberOperators>;
  downvotes?: Maybe<NumberOperators>;
  state?: Maybe<StringOperators>;
  response?: Maybe<StringOperators>;
  responseCreatedAt?: Maybe<DateOperators>;
};

export type ProductReviewHistogramItem = {
  __typename?: 'ProductReviewHistogramItem';
  bin: Scalars['Int'];
  frequency: Scalars['Int'];
};

export type ProductReviewList = PaginatedList & {
  __typename?: 'ProductReviewList';
  items: Array<ProductReview>;
  totalItems: Scalars['Int'];
};

export type ProductReviewListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductReviewSortParameter>;
  filter?: Maybe<ProductReviewFilterParameter>;
};

export type ProductReviewSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  summary?: Maybe<SortOrder>;
  body?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  authorName?: Maybe<SortOrder>;
  authorLocation?: Maybe<SortOrder>;
  upvotes?: Maybe<SortOrder>;
  downvotes?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  response?: Maybe<SortOrder>;
  responseCreatedAt?: Maybe<SortOrder>;
};

export type ProductSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  productRecommendationsEnabled?: Maybe<SortOrder>;
  reviewRating?: Maybe<SortOrder>;
  reviewCount?: Maybe<SortOrder>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  id: Scalars['ID'];
  productId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  sku: Scalars['String'];
  name: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  price: Scalars['Int'];
  currencyCode: CurrencyCode;
  priceIncludesTax: Scalars['Boolean'];
  priceWithTax: Scalars['Int'];
  taxRateApplied: TaxRate;
  taxCategory: TaxCategory;
  options: Array<ProductOption>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductVariantTranslation>;
  bulkDiscounts: Array<BulkDiscount>;
  customFields?: Maybe<ProductVariantCustomFields>;
};

export type ProductVariantCustomFields = {
  __typename?: 'ProductVariantCustomFields';
  bulkDiscountEnabled?: Maybe<Scalars['Boolean']>;
  Unit?: Maybe<Scalars['String']>;
  Sales?: Maybe<Scalars['Int']>;
};

export type ProductVariantFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  languageCode?: Maybe<StringOperators>;
  sku?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  price?: Maybe<NumberOperators>;
  currencyCode?: Maybe<StringOperators>;
  priceIncludesTax?: Maybe<BooleanOperators>;
  priceWithTax?: Maybe<NumberOperators>;
  bulkDiscountEnabled?: Maybe<BooleanOperators>;
  Unit?: Maybe<StringOperators>;
  Sales?: Maybe<NumberOperators>;
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int'];
};

export type ProductVariantListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductVariantSortParameter>;
  filter?: Maybe<ProductVariantFilterParameter>;
};

export type ProductVariantSortParameter = {
  id?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  sku?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  priceWithTax?: Maybe<SortOrder>;
  bulkDiscountEnabled?: Maybe<SortOrder>;
  Unit?: Maybe<SortOrder>;
  Sales?: Maybe<SortOrder>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  couponCode?: Maybe<Scalars['String']>;
  perCustomerUsageLimit?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  conditions: Array<ConfigurableOperation>;
  actions: Array<ConfigurableOperation>;
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  activeChannel: Channel;
  activeCustomer?: Maybe<Customer>;
  activeOrder?: Maybe<Order>;
  availableCountries: Array<Country>;
  collections: CollectionList;
  collection?: Maybe<Collection>;
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  me?: Maybe<CurrentUser>;
  nextOrderStates: Array<Scalars['String']>;
  order?: Maybe<Order>;
  orderByCode?: Maybe<Order>;
  /** Get a Product either by id or slug. If neither 'id' nor 'slug' is speicified, an error will result. */
  product?: Maybe<Product>;
  products: ProductList;
  search: SearchResponse;
  productRecommendations: Array<ProductRecommendation>;
  productBulkDiscounts: Array<BulkDiscount>;
  generateBraintreeClientToken: Scalars['String'];
};


export type QueryCollectionsArgs = {
  options?: Maybe<CollectionListOptions>;
};


export type QueryCollectionArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderByCodeArgs = {
  code: Scalars['String'];
};


export type QueryProductArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  options?: Maybe<ProductListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};


export type QueryProductRecommendationsArgs = {
  productId: Scalars['ID'];
};


export type QueryProductBulkDiscountsArgs = {
  productId: Scalars['ID'];
};


export type QueryGenerateBraintreeClientTokenArgs = {
  orderId: Scalars['ID'];
};

export enum RecommendationType {
  Crosssell = 'CROSSSELL',
  Upsell = 'UPSELL'
}

export type Refund = Node & {
  __typename?: 'Refund';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  items: Scalars['Int'];
  shipping: Scalars['Int'];
  adjustment: Scalars['Int'];
  total: Scalars['Int'];
  method?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  orderItems: Array<OrderItem>;
  paymentId: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
};

export type RegisterCustomerInput = {
  emailAddress: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Return = Node & StockMovement & {
  __typename?: 'Return';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productVariant: ProductVariant;
  type: StockMovementType;
  quantity: Scalars['Int'];
  orderItem: OrderItem;
};

export type Role = Node & {
  __typename?: 'Role';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Permission>;
  channels: Array<Channel>;
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int'];
};

export type Sale = Node & StockMovement & {
  __typename?: 'Sale';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productVariant: ProductVariant;
  type: StockMovementType;
  quantity: Scalars['Int'];
  orderLine: OrderLine;
};

export type SalesTrackerInput = {
  productVariantId: Scalars['ID'];
  sales?: Maybe<Scalars['Int']>;
};

export type SearchInput = {
  term?: Maybe<Scalars['String']>;
  facetValueIds?: Maybe<Array<Scalars['ID']>>;
  facetValueOperator?: Maybe<LogicalOperator>;
  collectionId?: Maybe<Scalars['ID']>;
  groupByProduct?: Maybe<Scalars['Boolean']>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SearchResultSortParameter>;
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  items: Array<SearchResult>;
  totalItems: Scalars['Int'];
  facetValues: Array<FacetValueResult>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  sku: Scalars['String'];
  slug: Scalars['String'];
  productId: Scalars['ID'];
  productName: Scalars['String'];
  /** @deprecated Use `productAsset.preview` instead */
  productPreview: Scalars['String'];
  productAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  /** @deprecated Use `productVariantAsset.preview` instead */
  productVariantPreview: Scalars['String'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  currencyCode: CurrencyCode;
  description: Scalars['String'];
  facetIds: Array<Scalars['ID']>;
  facetValueIds: Array<Scalars['ID']>;
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']>;
  /** A relevence score for the result. Differs between database implementations */
  score: Scalars['Float'];
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  id: Scalars['ID'];
  preview: Scalars['String'];
  focalPoint?: Maybe<Coordinate>;
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type ServerConfig = {
  __typename?: 'ServerConfig';
  customFieldConfig: CustomFields;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  description: Scalars['String'];
  checker: ConfigurableOperation;
  calculator: ConfigurableOperation;
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int'];
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  id: Scalars['ID'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  description: Scalars['String'];
  metadata?: Maybe<Scalars['JSON']>;
};

/** The price value where the result has a single price */
export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Int'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StockAdjustment = Node & StockMovement & {
  __typename?: 'StockAdjustment';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productVariant: ProductVariant;
  type: StockMovementType;
  quantity: Scalars['Int'];
};

export type StockMovement = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productVariant: ProductVariant;
  type: StockMovementType;
  quantity: Scalars['Int'];
};

export type StockMovementItem = StockAdjustment | Sale | Cancellation | Return;

export type StockMovementList = {
  __typename?: 'StockMovementList';
  items: Array<StockMovementItem>;
  totalItems: Scalars['Int'];
};

export enum StockMovementType {
  Adjustment = 'ADJUSTMENT',
  Sale = 'SALE',
  Cancellation = 'CANCELLATION',
  Return = 'RETURN'
}

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  length?: Maybe<Scalars['Int']>;
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
  options?: Maybe<Array<StringFieldOption>>;
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  value: Scalars['String'];
  label?: Maybe<Array<LocalizedString>>;
};

export type StringOperators = {
  eq?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
};

export type SubmitProductReviewInput = {
  productId: Scalars['ID'];
  variantId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
  summary: Scalars['String'];
  body: Scalars['String'];
  rating: Scalars['Float'];
  authorName: Scalars['String'];
  authorLocation?: Maybe<Scalars['String']>;
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  value: Scalars['Float'];
  category: TaxCategory;
  zone: Zone;
  customerGroup?: Maybe<CustomerGroup>;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int'];
};

export type UpdateAddressInput = {
  id: Scalars['ID'];
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type UpdateCustomerInput = {
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
};


export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  identifier: Scalars['String'];
  verified: Scalars['Boolean'];
  roles: Array<Role>;
  lastLogin?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type Vendor = Node & {
  __typename?: 'Vendor';
  id: Scalars['ID'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  companyname: Scalars['String'];
  companyaddr: Scalars['String'];
  companydesc?: Maybe<Scalars['String']>;
  companyphone: Scalars['String'];
  companycategory: Array<Scalars['String']>;
  panvat: Scalars['String'];
  panvatnum: Scalars['String'];
  producttype: Array<Scalars['String']>;
  assetid?: Maybe<Scalars['String']>;
  assetsource?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type VendorAddInput = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  companyname: Scalars['String'];
  companyaddr: Scalars['String'];
  companydesc?: Maybe<Scalars['String']>;
  companyphone: Scalars['String'];
  companycategory: Array<Scalars['String']>;
  file?: Maybe<Scalars['Upload']>;
  panvat: Scalars['String'];
  panvatnum: Scalars['String'];
  producttype: Array<Scalars['String']>;
};

export type VendorAddInputShop = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  companyname: Scalars['String'];
  companyaddr: Scalars['String'];
  companydesc?: Maybe<Scalars['String']>;
  companyphone: Scalars['String'];
  companycategory: Array<Scalars['String']>;
  file: Scalars['Upload'];
  panvat: Scalars['String'];
  panvatnum: Scalars['String'];
  producttype: Array<Scalars['String']>;
};

export type Zone = Node & {
  __typename?: 'Zone';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  members: Array<Country>;
};

