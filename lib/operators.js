// Single source of truth for all operator + bonus data.
// Swap `affiliateUrl` for your own tracked links and adjust codes as your deals change.
// Bonus details reflect publicly advertised offers as of July 2026 — always confirm
// current terms on the operator's site before publishing changes.

export const operators = [
  {
    slug: "americas-cardroom",
    name: "Americas Cardroom",
    shortName: "ACR Poker",
    network: "Winning Poker Network (WPN)",
    brandColor: "#e63946",
    rating: 4.8,
    established: 2011,
    // Cloaked outbound link on your own domain (redirects to `tracker`).
    affiliateUrl: "/go/americas-cardroom/",
    tracker: "https://go.wpnaffiliates.com/visit/?bta=237090&brand=americascardroom",
    editorTag: "Editor's Choice",
    // Bonus
    bonusHeadline: "100% up to $2,000",
    bonusCode: "WELCOME100",
    matchPercent: 100,
    maxBonus: 2000,
    minDeposit: 50,
    clearingDays: 60,
    noDeposit: "$10 free (with select codes)",
    rakebackUpTo: 65,
    // Card summary
    tagline: "The biggest US-facing tournament schedule with a market-leading $2,000 match.",
    bonusSummary:
      "Get a 100% first-deposit match up to $2,000 with code WELCOME100, plus the chance to grab $10 free before you even deposit.",
    // Details
    clearingText:
      "The bonus releases in increments as you play real-money poker. You earn 27.5 Award Points per $1 in rake, and every 27.5 points unlocks $1 of bonus cash — so the effective rakeback while clearing is strong. You have 60 days from your deposit to release as much as you can.",
    depositMethods: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "USDT", "Litecoin", "Bank transfer"],
    payoutSpeed: "Crypto payouts typically within 1 hour to 24 hours",
    highlights: [
      "Largest guaranteed tournament series for US players (Venom, MOSH, OSS Cub3d)",
      "Up to 65% rakeback available through the Elite Benefits program",
      "$10 no-deposit head start with select bonus codes",
      "Fast, low-fee crypto cashouts",
    ],
    pros: [
      "Market-leading $2,000 welcome match",
      "Huge tournament guarantees and freerolls",
      "Generous rakeback via Elite Benefits",
      "Anonymous tables option (Blitz Poker)",
      "Accepts US and Canada players",
    ],
    cons: [
      "Software feels dated next to Chico rooms",
      "Bonus clears via rake, not instantly",
      "Bot detection has drawn player criticism historically",
    ],
    bestFor: "Tournament grinders and high-volume players who want the biggest guarantees and rakeback.",
    gamesTraffic:
      "As the largest US-facing room, Americas Cardroom carries the deepest traffic on this list. No-Limit Hold'em and Pot-Limit Omaha run around the clock from micro stakes up to high stakes, with the busiest action between $0.05/$0.10 and $1/$2. The shared Winning Poker Network pool keeps cash tables and Sit & Go's full at almost any hour, while Jackpot Poker (hyper-turbo lottery SNGs) and Blitz fast-fold add extra formats when you want quicker action.",
    tournaments:
      "Tournaments are ACR's headline attraction. The Venom is a recurring multi-million-dollar event fed by a ladder of cheap satellites, backed by the daily OSS Cub3d series and the mid-stakes MOSH schedule. Weekly guarantees regularly climb into the millions — the biggest of any room that accepts US and Canada players — which is why volume MTT grinders gravitate here.",
    software:
      "The desktop client is feature-rich but shows its age next to the sleeker Chico rooms. It includes solid multi-tabling tools, a hand-history replayer, customizable tables and anonymous Blitz play. A browser and mobile client cover games on the go, though serious grinders still prefer the desktop app.",
    safety:
      "ACR has operated since 2011 on the long-running Winning Poker Network and is one of the most established US-facing brands. It processes crypto withdrawals quickly and publishes anti-bot and anti-collusion efforts, though bot detection has drawn player scrutiny over the years. As with all offshore rooms, use crypto for the smoothest banking and complete verification early.",
    review:
      "Americas Cardroom is the flagship room on the Winning Poker Network and the largest US-facing site by traffic and guarantees. Its headline draw is the Venom, a recurring multi-million-dollar tournament, backed by the daily OSS Cub3d and MOSH series. The 100% up to $2,000 welcome bonus is the biggest first-deposit match among the sites we cover, and because it clears through rake at roughly $1 per 27.5 Award Points, active players effectively bank strong rakeback while unlocking it. Add the Elite Benefits loyalty program (up to 65% rakeback) and ACR is hard to beat for volume players. The trade-off is software that lags the sleeker Chico rooms and a clearing model that rewards grinders more than casual players.",
  },
  {
    slug: "betonline-poker",
    name: "BetOnline Poker",
    shortName: "BetOnline",
    network: "Chico Poker Network",
    brandColor: "#f4a300",
    rating: 4.7,
    established: 2004,
    affiliateUrl: "/go/betonline-poker/",
    tracker: "https://record.betonlineaffiliates.ag/_CZzXr-5WlPfYJMJFEJBL7mNd7ZgqdRLk/1/",
    editorTag: "Best All-Rounder",
    bonusHeadline: "100% up to $1,000",
    bonusCode: "POKER1000",
    matchPercent: 100,
    maxBonus: 1000,
    minDeposit: 50,
    clearingDays: 30,
    noDeposit: null,
    rakebackUpTo: null,
    tagline: "Soft cash games, weekly rakeback paid every Friday, and a full sportsbook + casino under one roster.",
    bonusSummary:
      "Claim a 100% first-deposit match up to $1,000 with code POKER1000, then collect guaranteed weekly rakeback paid as real cash every Friday.",
    clearingText:
      "The welcome bonus unlocks as you generate rake — you earn $5 in bonus cash for every $50 of rake, and you have 30 days to release the full amount. On top of that, BetOnline's Poker Loyalty & Rewards program pays guaranteed weekly rakeback straight to your poker wallet every Friday.",
    depositMethods: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "USDT", "Litecoin", "Person-to-person"],
    payoutSpeed: "Crypto payouts typically within 24 hours",
    highlights: [
      "Weekly rakeback paid as real cash every Friday",
      "Soft cash-game traffic ideal for winning players",
      "Shared wallet with sportsbook, casino and racebook",
      "Fast crypto banking with generous limits",
    ],
    pros: [
      "Weekly guaranteed rakeback, no opt-in tiers",
      "Some of the softest cash games online",
      "One account covers poker, sports and casino",
      "Reliable crypto cashouts",
      "Accepts US and Canada players",
    ],
    cons: [
      "Max bonus of $1,000 is smaller than ACR's",
      "Smaller tournament guarantees than WPN",
      "Bonus still clears via rake, not instantly",
    ],
    bestFor: "Cash-game players who want soft tables plus dependable weekly rakeback.",
    gamesTraffic:
      "BetOnline's cash games are among the softest online, thanks to a steady stream of recreational players who cross over from its sportsbook and casino. Hold'em and Omaha run from micro to mid stakes, with Windfall hyper-turbo jackpot Sit & Go's and Boost fast-fold poker adding quick-play formats. Traffic peaks through US evening hours.",
    tournaments:
      "The tournament schedule is smaller than the Winning Poker Network's but still offers daily guarantees, a busy Sunday program and frequent satellites. It suits recreational and mid-stakes players rather than those hunting seven-figure guarantees.",
    software:
      "The Chico client is clean, stable and noticeably more modern than WPN's, with straightforward multi-tabling and a strong mobile experience. Fast-fold Boost poker and Windfall SNGs are built in, and one wallet covers poker, sports and casino.",
    safety:
      "BetOnline has operated since 2004 and is one of the most recognized offshore brands serving US and Canada players, with a long track record of paying out. Crypto is the fastest and most reliable banking route, and the 2025 Poker Loyalty & Rewards relaunch added transparent weekly rakeback.",
    review:
      "BetOnline is the flagship of the Chico Poker Network and our pick for the best all-round US-facing room. The cash games skew soft thanks to a steady flow of recreational players crossing over from BetOnline's sportsbook and casino, and the 2025 relaunch of Poker Loyalty & Rewards means every player now gets guaranteed weekly rakeback paid as real cash each Friday — no confusing tiers to unlock. The 100% up to $1,000 welcome bonus clears at $5 per $50 in rake within 30 days. It is a smaller headline number than ACR, but the combination of soft games, transparent rakeback and a shared wallet across poker, sports and casino makes BetOnline the most well-rounded option on this list.",
  },
  {
    slug: "black-chip-poker",
    name: "Black Chip Poker",
    shortName: "Black Chip",
    network: "Winning Poker Network (WPN)",
    brandColor: "#8d5cf6",
    rating: 4.5,
    established: 2010,
    affiliateUrl: "/go/black-chip-poker/",
    tracker: "https://go.wpnaffiliates.com/visit/?bta=237090&nci=5355",
    editorTag: "Lowest Min Deposit",
    bonusHeadline: "100% up to $2,000",
    bonusCode: "CP1000BCP",
    matchPercent: 100,
    maxBonus: 2000,
    minDeposit: 25,
    clearingDays: 60,
    noDeposit: null,
    rakebackUpTo: 65,
    tagline: "Same WPN player pool and $2,000 match as ACR, with a low $25 minimum deposit to get started.",
    bonusSummary:
      "Deposit as little as $25 and claim a 100% match up to $2,000 with code CP1000BCP — sharing the same big-guarantee tournaments as Americas Cardroom.",
    clearingText:
      "Black Chip runs on the same Winning Poker Network as ACR, so the bonus clears identically: $1 of bonus cash for every 27.5 bonus points earned in cash games or tournaments, with up to 60 days to unlock it. The low $25 minimum deposit makes it the easiest big bonus on our list to start.",
    depositMethods: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "USDT", "Litecoin"],
    payoutSpeed: "Crypto payouts typically within 24 hours",
    highlights: [
      "Shares WPN's huge tournament guarantees (Venom, OSS Cub3d)",
      "Just $25 minimum deposit to trigger the full offer",
      "Up to 65% rakeback via Elite Benefits",
      "Crypto-first banking",
    ],
    pros: [
      "Full $2,000 match like ACR",
      "Very low $25 minimum deposit",
      "Access to WPN's large shared player pool",
      "Solid rakeback through Elite Benefits",
    ],
    cons: [
      "Same dated WPN software as ACR",
      "Fewer standalone promos than ACR",
      "Rake-based clearing suits regulars best",
    ],
    bestFor: "Players who want ACR's tournaments and $2,000 bonus but prefer a smaller first deposit.",
    gamesTraffic:
      "Because Black Chip shares the Winning Poker Network pool with ACR, its cash-game and Sit & Go traffic is identical — deep Hold'em and Omaha tables at all hours, plus Jackpot Poker and Blitz fast-fold. You're playing the same opponents as ACR, just under a different brand.",
    tournaments:
      "Black Chip players get full access to WPN's marquee tournaments, including the Venom, OSS Cub3d and MOSH series, with the same multi-million-dollar weekly guarantees. It is the exact same schedule as Americas Cardroom.",
    software:
      "Black Chip runs the same Winning Poker Network client as ACR, with identical multi-tabling tools, a hand-history replayer and anonymous Blitz tables. Expect the same feature set — and the same dated feel — as its sister site.",
    safety:
      "Operating since 2010 on the established Winning Poker Network, Black Chip is a reputable, long-standing option for US and Canada players. Banking is crypto-first with quick withdrawals; complete identity verification early to keep payouts smooth.",
    review:
      "Black Chip Poker is a skin on the Winning Poker Network, which means you get the same player pool, tournament schedule and Elite Benefits rakeback as Americas Cardroom — just under a different brand. The standout is accessibility: a 100% match up to $2,000 that triggers with a minimum deposit of only $25, the lowest on our list. The bonus clears the same way as ACR ($1 per 27.5 points, up to 60 days), and you tap into the same Venom and OSS Cub3d guarantees. If you like everything about ACR but want to start smaller, Black Chip is the natural pick. The main caveat is that it inherits WPN's aging software and runs fewer of its own headline promotions.",
  },
  {
    slug: "tigergaming",
    name: "TigerGaming",
    shortName: "TigerGaming",
    network: "Chico Poker Network",
    brandColor: "#22b573",
    rating: 4.4,
    established: 2004,
    affiliateUrl: "/go/tigergaming/",
    tracker: "https://record.betonlineaffiliates.ag/_CZzXr-5WlPfYJMJFEJBL7mNd7ZgqdRLk/1/",
    editorTag: "Best for Cash Games",
    bonusHeadline: "100% up to $1,000",
    bonusCode: "NEWTG",
    matchPercent: 100,
    maxBonus: 1000,
    minDeposit: 50,
    clearingDays: 30,
    noDeposit: null,
    rakebackUpTo: null,
    tagline: "The same soft Chico cash-game pool as BetOnline, with a clean interface and weekly rakeback.",
    bonusSummary:
      "Double your first deposit with a 100% match up to $1,000 using code NEWTG, then earn weekly rakeback paid as real cash.",
    clearingText:
      "TigerGaming shares the Chico Poker Network, so the welcome bonus clears in $5 steps for every $50 in rake, with 30 days to release the full amount. Regular players also benefit from Chico's weekly rakeback program paid as real cash.",
    depositMethods: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "USDT", "Litecoin"],
    payoutSpeed: "Crypto payouts typically within 24 hours",
    highlights: [
      "Access to the soft Chico cash-game pool",
      "Weekly real-cash rakeback for regulars",
      "Cleaner, more modern client than WPN",
      "Sportsbook and casino on the same wallet",
    ],
    pros: [
      "Soft cash games shared with BetOnline",
      "Weekly rakeback paid in cash",
      "Straightforward, modern software",
      "Accepts US and Canada players",
    ],
    cons: [
      "Lower brand recognition than BetOnline",
      "Smaller tournament guarantees than WPN",
      "$1,000 bonus cap",
    ],
    bestFor: "Cash-game regulars who want Chico's soft pool with a cleaner interface.",
    gamesTraffic:
      "TigerGaming taps the same soft Chico cash-game pool as BetOnline, so you get recreational-heavy Hold'em and Omaha tables from micro to mid stakes, plus Windfall jackpot Sit & Go's and fast-fold poker. It's a strong pick for cash-game regulars who want beatable games.",
    tournaments:
      "The tournament offering mirrors the Chico network — daily guarantees, a solid Sunday schedule and regular satellites — geared toward recreational and mid-stakes players rather than nosebleed guarantees.",
    software:
      "TigerGaming runs a clean, modern Chico client that many players consider the most straightforward on this list, with easy multi-tabling and a capable mobile version.",
    safety:
      "TigerGaming has operated since 2004 and shares Chico's established payment processing and long payout history. As with all offshore rooms, crypto delivers the fastest, lowest-fee banking.",
    review:
      "TigerGaming is another room on the Chico Poker Network, sharing the same soft cash-game pool as BetOnline and SportsBetting.ag. It has quietly become a favorite for grinders who want that recreational-heavy traffic paired with a cleaner, more modern client. The 100% up to $1,000 welcome bonus with code NEWTG clears at $5 per $50 in rake over 30 days, and regulars pick up Chico's weekly rakeback paid in cash. TigerGaming does not have the brand pull of BetOnline or the tournament guarantees of the Winning Poker Network, but for pure cash-game value on the Chico pool it is an excellent, understated choice.",
  },
  {
    slug: "sportsbetting-ag",
    name: "SportsBetting.ag",
    shortName: "SportsBetting.ag",
    network: "Chico Poker Network",
    brandColor: "#2a72d6",
    rating: 4.3,
    established: 2003,
    affiliateUrl: "/go/sportsbetting-ag/",
    tracker: "https://record.betonlineaffiliates.ag/_CZzXr-5WlPfYJMJFEJBL7mNd7ZgqdRLk/1/",
    editorTag: "Best Crossover Wallet",
    bonusHeadline: "100% up to $1,000",
    bonusCode: "NEWSB",
    matchPercent: 100,
    maxBonus: 1000,
    minDeposit: 50,
    clearingDays: 30,
    noDeposit: null,
    rakebackUpTo: null,
    tagline: "BetOnline's sister room — the same soft Chico pool with a strong all-in-one sports, casino and poker wallet.",
    bonusSummary:
      "Get a dollar-for-dollar match up to $1,000 with code NEWSB, released in $5 stages as you play, plus step-satellite ticket promos.",
    clearingText:
      "SportsBetting.ag runs on the Chico Poker Network alongside BetOnline. The welcome bonus matches your first deposit dollar-for-dollar up to $1,000 and releases in $5 stages every time you generate $50 in rake. Eligible deposits run from $50 to $1,000 and you have 30 days to clear it.",
    depositMethods: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "USDT", "Litecoin", "Person-to-person"],
    payoutSpeed: "Crypto payouts typically within 24 hours",
    highlights: [
      "Same soft Chico cash-game pool as BetOnline",
      "Step-satellite ticket promotions into big Sunday events",
      "One wallet for poker, sports and casino",
      "Reliable crypto banking",
    ],
    pros: [
      "Soft Chico cash games",
      "Strong crossover sportsbook and casino",
      "Frequent satellite ticket promos",
      "Accepts US and Canada players",
    ],
    cons: [
      "Nearly identical to BetOnline (its sister site)",
      "$1,000 bonus cap",
      "Smaller poker-specific promo calendar",
    ],
    bestFor: "Players who want the Chico pool plus a heavy sportsbook and casino crossover on one balance.",
    gamesTraffic:
      "SportsBetting.ag shares the soft Chico pool with BetOnline, so cash-game action across Hold'em and Omaha is nearly identical — recreational-heavy tables from micro to mid stakes, plus Windfall jackpot SNGs and fast-fold poker. Its crossover sportsbook and casino keep a steady flow of casual players cycling through.",
    tournaments:
      "Tournaments follow the Chico schedule with daily guarantees and a busy Sunday program, and the site frequently runs step-satellite promotions that funnel players into larger Sunday events.",
    software:
      "The Chico client is modern and stable, with the same clean multi-tabling and mobile experience as BetOnline. One shared wallet covers poker, sports, casino and racebook.",
    safety:
      "SportsBetting.ag has operated since 2003 and, as BetOnline's sister site, shares its reliable payment processing and payout history. Crypto is the recommended route for fast deposits and withdrawals.",
    review:
      "SportsBetting.ag is BetOnline's sister site and runs on the same Chico Poker Network, so you get an almost identical soft cash-game experience. Its edge is the crossover wallet: poker, a full sportsbook, casino and racebook all share one balance, making it a natural home for players who bet on more than just poker. The 100% up to $1,000 welcome bonus with code NEWSB releases in $5 stages per $50 of rake over 30 days, and the site regularly runs step-satellite promotions that funnel players into large Sunday tournaments. Because it mirrors BetOnline so closely, the choice usually comes down to which promo calendar suits you on any given week.",
  },
];

export function getOperator(slug) {
  return operators.find((o) => o.slug === slug);
}

// Quick money formatter
export function usd(n) {
  return "$" + Number(n).toLocaleString("en-US");
}
