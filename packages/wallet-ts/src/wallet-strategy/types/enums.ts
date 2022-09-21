import { WalletErrorActionModule } from '@injectivelabs/exceptions'

export enum Wallet {
  Metamask = 'metamask',
  Ledger = 'ledger',
  LedgerLegacy = 'ledger-legacy',
  Trezor = 'trezor',
  Keplr = 'keplr',
  Torus = 'torus',
  WalletConnect = 'wallet-connect',
  Leap = 'leap',
  Cosmostation = 'cosmostation',
}

export const WalletAction = { ...WalletErrorActionModule }
