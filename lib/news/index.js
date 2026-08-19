// News aggregator. Each article lives in its own file and is imported here.
// To add a new article: create a file that `export default`s an article object,
// import it below, and add it to the `all` array. Newest date sorts first.

import venom from "./venom-2026-bonus-hunters";
import crypto from "./crypto-cashouts-us-canada-2026";
import wpnChico from "./wpn-vs-chico-value-2026";
import noDeposit from "./no-deposit-poker-bonuses-2026";
import rakebackWars from "./rakeback-wars-wpn-chico-2026";
import usLaw from "./us-online-poker-legislation-2026";
import canada from "./canada-online-poker-2026";
import clear2000 from "./clear-2000-poker-bonus-guide";
import betonlineRb from "./betonline-weekly-rakeback-deep-dive";
import codesGuide from "./poker-bonus-codes-2026-guide";
import bankrollClearing from "./bankroll-management-bonus-clearing-2026";
import reloadBonuses from "./reload-bonuses-explained-2026";
import tigerVsSb from "./tigergaming-vs-sportsbetting-chico-value-2026";
import bestCrypto from "./best-crypto-for-poker-deposits-2026";
import freerollStrategy from "./freeroll-strategy-build-bankroll-from-zero-2026";
import mobilePoker from "./mobile-poker-apps-us-canada-2026";
import mysteryBounty from "./mystery-bounty-strategy-2026";
import firstDepositMistakes from "./first-deposit-bonus-mistakes-2026";
import depositMatchVsRakeback from "./deposit-match-vs-rakeback-2026";
import ossChico from "./oss-chico-series-bonus-clearing-2026";
import multiTabling from "./multi-tabling-clear-bonus-faster-2026";
import bonusesTaxable from "./are-poker-bonuses-taxable-us-canada-2026";
import loyaltyTiers from "./loyalty-tiers-wpn-chico-2026";
import stablecoinDeposits from "./stablecoin-poker-deposits-2026";
import sitAndGo from "./sit-and-go-bankroll-builder-2026";
import tableSelection from "./table-selection-softest-games-2026";
import withdrawalTimes from "./poker-withdrawal-times-us-canada-2026";
import pokerVsCasinoBonus from "./poker-vs-casino-bonus-combined-sites-2026";
import lateRegStrategy from "./late-registration-strategy-tournaments-2026";
import cryptoDepositBoosts from "./crypto-deposit-boosts-explained-2026";
import sweepstakesVsOffshore from "./sweepstakes-vs-offshore-poker-2026";
import icmExplained from "./icm-explained-tournament-poker-2026";
import cryptoNetworkFees from "./crypto-network-fees-poker-deposits-2026";
import ontarioVsOffshore from "./ontario-regulated-vs-offshore-poker-2026";
import potOdds from "./pot-odds-explained-bankroll-math-2026";
import rakeShapesBonuses from "./how-poker-rake-works-shapes-bonuses-2026";
import txFlOffshore from "./offshore-poker-texas-florida-2026-guide";
import bonusExpiry from "./poker-bonus-expiry-dates-2026";
import walletSecurity from "./crypto-wallet-security-poker-players-2026";
import fastFold from "./fast-fold-poker-clear-bonus-faster-2026";
import satelliteStrategy from "./satellite-strategy-win-big-buy-in-seats-2026";
import regulatedVsOffshore from "./regulated-us-poker-states-vs-offshore-2026";
import cryptoPriceSwings from "./crypto-price-swings-poker-bankroll-2026";
import ploVsHoldem from "./plo-vs-holdem-clear-poker-bonuses-faster-2026";
import sharedLiquidity from "./shared-liquidity-us-poker-states-2026";
import kycVerification from "./poker-kyc-verification-before-cashout-2026";
import leaderboards from "./poker-leaderboards-rake-races-2026";
import turboTournaments from "./turbo-poker-tournaments-strategy-2026";
import anonymousTables from "./anonymous-poker-tables-player-pools-2026";

const all = [
  leaderboards,
  turboTournaments,
  anonymousTables,
  ploVsHoldem,
  sharedLiquidity,
  kycVerification,
  satelliteStrategy,
  regulatedVsOffshore,
  cryptoPriceSwings,
  bonusExpiry,
  walletSecurity,
  fastFold,
  potOdds,
  rakeShapesBonuses,
  txFlOffshore,
  icmExplained,
  cryptoNetworkFees,
  ontarioVsOffshore,
  lateRegStrategy,
  cryptoDepositBoosts,
  sweepstakesVsOffshore,
  venom,
  crypto,
  wpnChico,
  noDeposit,
  rakebackWars,
  usLaw,
  canada,
  clear2000,
  betonlineRb,
  codesGuide,
  bankrollClearing,
  reloadBonuses,
  tigerVsSb,
  bestCrypto,
  freerollStrategy,
  mobilePoker,
  mysteryBounty,
  firstDepositMistakes,
  depositMatchVsRakeback,
  ossChico,
  multiTabling,
  bonusesTaxable,
  loyaltyTiers,
  stablecoinDeposits,
  sitAndGo,
  tableSelection,
  withdrawalTimes,
  pokerVsCasinoBonus,
];

// Newest first
export const articles = [...all].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(slug, n = 3) {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, n);
  const sameCat = articles.filter((a) => a.slug !== slug && a.category === current.category);
  const rest = articles.filter((a) => a.slug !== slug && a.category !== current.category);
  return [...sameCat, ...rest].slice(0, n);
}

export const categoryColors = {
  Bonuses: "#16c784",
  Crypto: "#f5c451",
  Analysis: "#8d5cf6",
  Industry: "#e63946",
  Legal: "#2a72d6",
  Strategy: "#22b573",
};

export function formatDate(iso) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
