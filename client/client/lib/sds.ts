import { SDK, SchemaEncoder } from "@somnia-chain/streams";
import { createPublicClient, createWalletClient, http } from "viem";
import { somnia } from "viem/chains"; // Custom chain if needed

const publicClient = createPublicClient({ chain: somnia, transport: http("https://testnet.rpc.somnia.network") });
const walletClient = createWalletClient({ chain: somnia, transport: http("https://testnet.rpc.somnia.network") });

export const sdk = new SDK({ public: publicClient, wallet: walletClient });

export const fileSchema = `bytes32 cid, bytes32 iv, bytes wrappedKey, address recipient, uint256 timestamp`;
export async function getSchemaId() {
  return await sdk.streams.computeSchemaId(fileSchema);
}

export async function registerSchema() {
  const txHash = await sdk.streams.registerDataSchemas([
    { schemaName: 'file_metadata', schema: fileSchema, parentSchemaId: '0x0000000000000000000000000000000000000000000000000000000000000000' }
  ]);
  console.log(`Schema registered: ${txHash}`);
}
