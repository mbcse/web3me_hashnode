import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NftTransferDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TokenTransferDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TokenDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NftDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Users {
  readonly id: string;
  readonly signature?: string | null;
  readonly NftTransferData?: NftTransferData | null;
  readonly TokenTransferData?: TokenTransferData | null;
  readonly TokenData?: TokenData | null;
  readonly NftData?: NftData | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersNftTransferDataId?: string | null;
  readonly usersTokenTransferDataId?: string | null;
  readonly usersTokenDataId?: string | null;
  readonly usersNftDataId?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class NftTransferData {
  readonly id: string;
  readonly data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NftTransferData, NftTransferDataMetaData>);
  static copyOf(source: NftTransferData, mutator: (draft: MutableModel<NftTransferData, NftTransferDataMetaData>) => MutableModel<NftTransferData, NftTransferDataMetaData> | void): NftTransferData;
}

export declare class TokenTransferData {
  readonly id: string;
  readonly data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TokenTransferData, TokenTransferDataMetaData>);
  static copyOf(source: TokenTransferData, mutator: (draft: MutableModel<TokenTransferData, TokenTransferDataMetaData>) => MutableModel<TokenTransferData, TokenTransferDataMetaData> | void): TokenTransferData;
}

export declare class TokenData {
  readonly id: string;
  readonly data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TokenData, TokenDataMetaData>);
  static copyOf(source: TokenData, mutator: (draft: MutableModel<TokenData, TokenDataMetaData>) => MutableModel<TokenData, TokenDataMetaData> | void): TokenData;
}

export declare class NftData {
  readonly id: string;
  readonly data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NftData, NftDataMetaData>);
  static copyOf(source: NftData, mutator: (draft: MutableModel<NftData, NftDataMetaData>) => MutableModel<NftData, NftDataMetaData> | void): NftData;
}