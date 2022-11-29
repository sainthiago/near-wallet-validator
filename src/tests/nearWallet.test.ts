import { NearRPC, nearWalletExists } from '../index';

test('Does this wallet exist on testnet?', async () => {
  expect(await nearWalletExists('1.testnet', NearRPC.TESTNET)).toBe(true);
});

test('Does this wallet exist on mainnet?', async () => {
  expect(await nearWalletExists('1.testnet', NearRPC.MAINNET)).toBe(false);
});
