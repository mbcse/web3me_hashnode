// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, NftTransferData, TokenTransferData, TokenData, NftData } = initSchema(schema);

export {
  Users,
  NftTransferData,
  TokenTransferData,
  TokenData,
  NftData
};