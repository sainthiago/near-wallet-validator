import { NearRPC } from "./../types/index";

export const nearWalletExists = async (account: string, rpc: NearRPC) => {
  const walletExists = await fetch(rpc, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "dontcare2",
      method: "query",
      params: {
        request_type: "view_account",
        finality: "final",
        account_id: account,
      },
    }),
  });

  const response = await walletExists.json();

  if (response.error) return false;
  return true;
};