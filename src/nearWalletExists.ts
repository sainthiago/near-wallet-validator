import { NearRPC } from '../types/nearRPC';

export const nearWalletExists = async (wallet: string, rpc: NearRPC) => {
  const walletExists = await fetch(rpc, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'near-wallet-validator',
      method: 'query',
      params: {
        request_type: 'view_account',
        finality: 'final',
        account_id: wallet,
      },
    }),
  });

  try {
    const response = await walletExists.json()
    if (response?.error) {
      return false
    }
    return true
  } catch (error) {
    console.error(error)
    return false
  }
};
