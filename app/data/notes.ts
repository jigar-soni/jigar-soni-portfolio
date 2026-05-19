export type Note = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  body: string[]
}

export const notes: Note[] = [
  {
    slug: 'tools-evolve-principles-dont',
    title: 'Tools evolve. Principles are timeless.',
    date: '2026-05-19',
    category: 'Thinking',
    excerpt:
      "The platforms change every year. What makes people buy hasn't changed in decades. Getting these two things confused is how you lose the plot.",
    body: [
      "Every year, the tools get smarter. Platforms launch new features, attribution models get rebuilt, and there is always something new to learn. This is the part of the job that keeps it interesting — and exhausting in equal measure.",
      "But the platforms change faster than consumer behaviour does. The fundamentals of what makes people buy, stay, and come back haven't shifted. Urgency, trust, specificity, social proof, the gap between where someone is and where they want to be — these things worked in newspaper ads and they work in shopping campaigns.",
      "I try to keep the two separate. When Meta launches a new campaign type or Google restructures Smart Bidding, I want to understand it quickly and adapt. But when something is not working, I go back to basics: Is the offer clear? Does the creative match the intent of the person seeing it? Is the landing page continuing the same story?",
      "The tools are the medium. The principles are the message. Confusing the two is how you end up chasing every platform update and losing track of what actually moves the needle.",
    ],
  },
  {
    slug: 'why-d2c-brands-plateau',
    title: 'Why most D2C brands plateau at a certain scale',
    date: '2024-11-20',
    category: 'Growth',
    excerpt:
      "After working with multiple D2C brands, I've noticed a consistent pattern in where growth stalls — and it's rarely the ads.",
    body: [
      "After working with multiple D2C brands across apparel, skincare, and wellness categories, I've noticed a consistent pattern in where growth stalls.",
      "Most brands hit their first meaningful plateau when they've saturated their core audience. The campaigns that worked early start to fatigue. CPAs creep up. ROAS drops. And the instinct is often to increase budgets or test new creatives when the real issue is something deeper.",
      "The problem is usually one of three things: a narrow product line that limits LTV, a customer base that was never built on genuine brand love, or an attribution model that masked inefficiency for longer than it should have.",
      "The brands that break through these plateaus share a few traits: they invest in retention before they feel the need to, they understand their contribution margin at the unit level, and they make decisions with longer time horizons than most growth teams are comfortable with.",
      "Scaling isn't just about spend. It's about building the infrastructure — creative, retention, and product — that makes scaling sustainable.",
    ],
  },
  {
    slug: 'creative-fatigue',
    title: 'Creative fatigue is real. Most brands catch it too late.',
    date: '2024-10-15',
    category: 'Paid Media',
    excerpt:
      "The biggest waste in Meta Ads isn't bad targeting. It's running the same creatives past their prime.",
    body: [
      "The biggest hidden cost in Meta Ads isn't your CPMs or your audience targeting. It's creative fatigue — and most brands don't notice it until the damage is already done.",
      "Creative fatigue happens when your audience has seen your ads enough times that they stop responding. Frequency goes up. CTR drops. CPA climbs. But if you're only looking at account-level performance rather than ad-level performance, you might not catch it until you've wasted weeks of budget.",
      "The fix isn't just 'make more creatives.' It's having a system for monitoring creative performance at the right level of granularity, rotating creatives proactively rather than reactively, and building a pipeline of fresh content before you need it.",
      "The brands I've seen scale most efficiently are the ones that treat their creative pipeline as seriously as their campaign structure. They don't wait for performance to drop before refreshing.",
      "A good rule of thumb: if your frequency is climbing and your CTR isn't keeping pace, you're already behind on creative. Start the next round before the current round burns out.",
    ],
  },
  {
    slug: 'contribution-margin',
    title: 'The metric most growth teams undervalue',
    date: '2024-09-08',
    category: 'Strategy',
    excerpt:
      "ROAS is a useful proxy but it isn't a profitability metric. The number that actually matters is contribution margin.",
    body: [
      "ROAS is everywhere in D2C marketing. It's the headline metric in most performance marketing dashboards. But it's a proxy — and like all proxies, it can mislead you if you don't understand what it's measuring.",
      "The number that actually tells you whether your marketing is working is contribution margin: what's left after you subtract your COGS, shipping, returns, and marketing costs from revenue. This is the number that determines whether a brand is building toward profitability or just optimizing for scale.",
      "I've seen brands with a strong ROAS that were losing money on every order because returns were high or shipping costs were eating the margin. And I've seen brands with a 'weak' ROAS that were genuinely profitable because their AOV was high and returns were low.",
      "If you're working in growth, make sure you understand the full unit economics before you optimize for a single metric. ROAS tells you about advertising efficiency. Contribution margin tells you whether the business is actually working.",
      "The best growth marketers I've seen always have a clear picture of the margin stack. It changes the decisions you make at every level — budget allocation, creative strategy, channel mix.",
    ],
  },
  {
    slug: 'retention-before-acquisition',
    title: 'Build your retention engine before you need it',
    date: '2024-08-12',
    category: 'Strategy',
    excerpt:
      "Most brands think about retention when growth stalls. That's too late. The best time to build a retention system is when acquisition is working.",
    body: [
      "There's a common pattern I see with growing D2C brands: they invest heavily in acquisition when things are good, and then scramble to build retention when CAC rises and growth starts to stall.",
      "This is backwards. The best time to build your retention engine — your email flows, your loyalty mechanics, your repurchase journeys — is when acquisition is working. When you're bringing in new customers consistently, you have a clean window to optimize how you keep them.",
      "Retention is compounding in a way that acquisition isn't. A customer who buys three times is worth exponentially more than three first-time buyers at the same total spend. Building systems that turn one-time buyers into repeat customers is often the most efficient growth lever available to a brand.",
      "The other thing worth knowing: retention work makes acquisition more efficient too. When your repeat purchase rate improves, your blended CAC looks better, which gives you more room to scale paid media without sacrificing margin.",
      "If you're running acquisition at scale and haven't built out your retention infrastructure, that's the first thing I'd look at.",
    ],
  },
  {
    slug: 'chess-and-marketing',
    title: 'What chess taught me about growth marketing',
    date: '2024-07-03',
    category: 'Thinking',
    excerpt:
      "Both reward patience, pattern recognition, and thinking several moves ahead. Both punish reactive, short-term play.",
    body: [
      "I've been playing chess seriously for a few years now, and the longer I play, the more I notice parallels with how I think about growth marketing.",
      "In chess, beginners react. They respond to threats as they appear. Strong players see patterns ahead of time and position themselves before the threat materializes. In marketing, the equivalent is proactively building your creative pipeline before fatigue hits, or scaling up before a seasonal peak rather than reacting to it.",
      "Both chess and marketing reward patience. The impulse to do something — to make a move, to launch a campaign — is strong. But sometimes the most valuable action is to wait, observe, and not waste resources on something that doesn't improve your position.",
      "Both fields are also fundamentally about resource allocation. In chess: tempo, space, and material. In marketing: budget, attention, and creative energy. How you allocate these limited resources determines whether you win or just stay in the game.",
      "The last parallel is the most important: in chess, you can't just play the position in front of you — you have to think several moves ahead. In marketing, you can't just optimize for this week's ROAS — you have to think about where the customer is in their lifecycle, what the creative fatigue looks like in 30 days, and what the brand looks like at twice the current scale.",
    ],
  },
  {
    slug: 'what-premium-brands-do-differently',
    title: 'What premium D2C brands do differently with ad creative',
    date: '2024-06-18',
    category: 'Paid Media',
    excerpt:
      "The brands that maintain strong margins at scale are almost always the ones that treat creative as a strategic function.",
    body: [
      "One of the consistent differences I've noticed between brands that maintain strong margins at scale and those that don't is how they approach creative.",
      "Most brands treat creative as a production task: brief the agency or creator, get the assets, upload them to the ad platform, and move on. Premium brands treat creative as a strategic function that requires the same analytical rigor as campaign structure or audience targeting.",
      "Specifically, the brands that do this well: test hypotheses rather than just testing ads, understand which creative elements drive which outcomes, build a library of winning frameworks rather than starting from scratch each cycle, and have a clear brand voice that makes their ads recognizable even without a logo.",
      "Creative at this level isn't just about aesthetics. It's about understanding your customer well enough to make something that feels true to their experience — and that's a marketing problem as much as it is a creative one.",
      "The practical takeaway: start treating your creative briefs like performance hypotheses. 'We think showing the product in context X will perform better than product on white background because of reason Y.' Test it, measure it, and build a library of what works. That's how you stop starting from scratch every quarter.",
    ],
  },
]
