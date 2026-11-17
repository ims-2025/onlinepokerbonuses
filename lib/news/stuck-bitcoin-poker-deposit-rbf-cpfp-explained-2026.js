export default {
  slug: "stuck-bitcoin-poker-deposit-rbf-cpfp-explained-2026",
  title: "Stuck Bitcoin Poker Deposit? RBF and CPFP Explained",
  excerpt: "Bitcoin deposit stuck unconfirmed at your poker site? Learn how Replace-By-Fee and Child-Pays-For-Parent speed it up, and how to avoid it next time.",
  category: "Crypto",
  date: "2026-11-17",
  author: "OnlinePokerBonuses Editorial Team",
  readingTime: 8,
  tags: ["Bitcoin", "crypto deposits", "RBF", "CPFP", "mempool", "poker banking", "transaction fees"],
  body: [
    { p: "You sent Bitcoin to your poker account, the cashier shows a pending deposit, and an hour later it still has zero confirmations. The Sunday tournament you wanted starts soon, your welcome bonus is waiting to be triggered, and the coins are sitting in limbo. A stuck Bitcoin transaction is one of the most frustrating parts of crypto poker banking, but it is rarely a lost cause. In most cases the money is perfectly safe, and you have real tools to speed it up." },
    { p: "This guide explains why Bitcoin deposits get stuck, how the two main rescue techniques, **Replace-By-Fee (RBF)** and **Child-Pays-For-Parent (CPFP)**, actually work, and what you can do to make sure future deposits clear quickly. Crypto is the dominant banking method at the rooms we cover for US and Canadian players, so understanding these mechanics is worth a few minutes. For an overview of which sites accept which coins, see our [best poker bonuses](/best-poker-bonuses/) comparison." },
    { h2: "Why Bitcoin transactions get stuck" },
    { p: "Every Bitcoin transaction waits in a pool of unconfirmed transactions, commonly called the mempool, until a miner includes it in a block. Blocks have limited space and arrive roughly every ten minutes on average, so miners prioritize transactions paying the highest fee per unit of data, measured in satoshis per virtual byte (sat/vB). When demand spikes, low-fee transactions get pushed to the back of the line and can wait hours or even days." },
    { p: "Deposits usually get stuck for one of three reasons. The wallet used a fixed or outdated fee estimate. The user manually chose an economy fee to save a few cents. Or network demand rose sharply between the moment the transaction was sent and the moment miners looked at it. None of these mean the transaction failed; it is simply underpriced for current conditions." },
    { h2: "First, confirm the deposit is actually stuck" },
    { p: "Before trying anything technical, copy the transaction ID from your wallet and look it up on a public block explorer. Check three things: that the destination address matches the one your poker cashier generated, that the amount is correct, and what fee rate the transaction paid compared with current recommended rates. If the fee rate is close to the current low-priority estimate, patience may be enough. If it is far below, you will want to act." },
    { p: "Also check your room's confirmation requirement. Many poker cashiers credit Bitcoin after a set number of confirmations, so a deposit with one confirmation may still show as pending for a while. That is normal and different from a transaction with zero confirmations. Our guide to crypto deposit confirmations covers typical wait times in more detail." },
    { h2: "Replace-By-Fee: resend with a higher fee" },
    { p: "Replace-By-Fee lets the sender broadcast a new version of the same transaction that spends the same coins but pays a higher fee. Because both versions cannot confirm, miners will choose the more profitable one, and the original effectively disappears. The destination and amount normally stay the same; only the fee goes up, and the extra fee comes out of your change." },
    { p: "To use RBF, you need a wallet that supports it, and you must be the one who sent the transaction from a wallet you control. Many popular self-custody wallets offer a bump fee or speed up button on pending transactions. Historically, transactions had to signal replaceability when they were created, but node software has increasingly moved toward accepting replacements more broadly. Wallet support still varies, so check whether your wallet shows the option before you rely on it." },
    { ul: [
      "Open the pending transaction in your wallet and look for an option labelled bump fee, speed up or increase fee.",
      "Choose a fee rate in line with current high-priority estimates rather than the bare minimum.",
      "Confirm that the destination address is unchanged before broadcasting the replacement.",
      "Note the new transaction ID, because the original ID will no longer confirm."
    ] },
    { p: "One important caution: the replacement creates a new transaction ID. Some poker cashiers track deposits by address and credit them automatically regardless, but if you have already contacted support with the old ID, send them the new one so there is no confusion." },
    { h2: "Child-Pays-For-Parent: let a new transaction pull the old one through" },
    { p: "Child-Pays-For-Parent works differently. Instead of replacing the stuck transaction, you create a new transaction that spends one of its unconfirmed outputs and attach a large fee to it. Miners cannot include the child without also including the parent, so they evaluate the two together. If the combined fee rate is attractive enough, both confirm in the same block." },
    { p: "For a poker deposit, the output you can spend is usually your own change output, the leftover coins returned to your wallet. If your wallet supports coin control or a CPFP option, you can send that change back to yourself with a high fee. The poker site, as the recipient, could technically do the same thing with its output, but you should not expect a cashier to do that for an individual deposit." },
    { p: "CPFP is the go-to option when RBF is not available, for example if your wallet does not support replacements. The trade-off is cost: the child transaction must pay enough to lift the average fee rate of both transactions, so it can be more expensive than a simple RBF bump." },
    { h3: "What if you sent from an exchange?" },
    { p: "If you withdrew Bitcoin directly from an exchange to your poker account, you generally cannot use RBF or CPFP yourself, because the exchange controls the sending wallet and the change output. Exchanges typically set their own fees and batch withdrawals, so stuck withdrawals are less common, but when they do happen your only real option is to contact the exchange's support. This is one of several reasons many players route deposits through a personal wallet first, a trade-off we explore in our guide to buying crypto for poker." },
    { h2: "What happens if you do nothing?" },
    { p: "An unconfirmed transaction does not stay in limbo forever. If network demand falls, it may simply confirm on its own. If it remains underpriced for long enough, many nodes eventually drop it from their mempools, often after around two weeks with default settings, at which point the coins effectively return to being spendable in your wallet. Your wallet may need to rescan or rebroadcast to show the correct balance. The money is not lost, but waiting can be slow and stressful, especially if you are trying to make a tournament or start a bonus clock." },
    { h2: "How to avoid stuck deposits in the future" },
    { p: "Prevention is far easier than rescue. A few habits will keep your poker deposits moving." },
    { ol: [
      "**Use a wallet with dynamic fee estimates** and support for RBF and coin control, so you can react if something goes wrong.",
      "**Check current fee conditions** on a mempool tracker before sending, especially on weekends or during market volatility.",
      "**Avoid the cheapest fee tier** for time-sensitive deposits. Paying a little more for faster confirmation is usually worth it.",
      "**Consider faster or cheaper rails** where your room supports them, such as Litecoin, stablecoins on low-fee networks, or Bitcoin Lightning where available.",
      "**Deposit ahead of big events** rather than minutes before registration closes."
    ] },
    { p: "Each of the five rooms we review supports crypto deposits, though the list of accepted coins and the confirmation rules differ. [Americas Cardroom](/reviews/americas-cardroom/) and Black Chip Poker on the Winning Poker Network, and [BetOnline Poker](/reviews/betonline-poker/) on the Chico Network, all publish their crypto options in the cashier, so check there before you send." },
    { h2: "Make sure your bonus still triggers" },
    { p: "A delayed deposit can occasionally interfere with a welcome bonus if you need to enter a code at the time of deposit. Before you send coins, make sure the bonus code is applied in the cashier, and if the deposit eventually credits without the bonus attached, contact support promptly with your transaction ID. Our walkthrough on [how to claim a poker bonus](/how-to-claim/) covers the correct order of steps so a slow confirmation never costs you your match." }
  ],
  faq: [
    { q: "Is my Bitcoin lost if a poker deposit is stuck unconfirmed?", a: "No. An unconfirmed transaction either confirms later or is eventually dropped by the network, returning the coins to your wallet. You can often speed it up with RBF or CPFP." },
    { q: "Can I speed up a Bitcoin deposit sent from an exchange?", a: "Usually not yourself, because the exchange controls the sending wallet. Contact the exchange's support with the transaction ID and ask whether they can accelerate it." }
  ]
};
