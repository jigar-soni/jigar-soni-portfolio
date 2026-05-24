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
    slug: 'north-star-metric-lean-d2c-brands',
    title: 'The north star metric for lean D2C brands',
    date: '2026-05-24',
    category: 'Strategy',
    excerpt:
      'Sophisticated attribution models make sense for mature brands with the resources to run them. For a lean D2C brand, there is usually a better option — one number that cleanly connects ad spend to new customer growth.',
    body: [
      "There's a gap between how growth measurement is taught and how it actually gets used in smaller brands.",
      "The sophisticated version — multi-touch attribution, incrementality testing, media mix modelling — makes sense for brands with the budget, team, and data volume to run it properly. For a lean D2C brand doing seven figures, that apparatus is mostly overhead.",
      "What I've found more useful in practice is aMER: New Customer Revenue divided by Ad Spend. One number that connects what you're spending to what you're actually growing.",
      "It does something ROAS doesn't: it filters out revenue from returning customers and focuses purely on what paid media is generating in terms of new buyers. For brands where most of the budget is going toward acquisition, that distinction matters. A high blended ROAS can hide a weak new customer pipeline — and a weak pipeline is a growth problem you'll feel in six months.",
      "The other reason aMER works for this context is that it's usable. You can set a target aMER that maps to your margins, your inventory cycle, and your cash position. When you're above it, you push spend. When you drop below, you pull back and recalibrate. The decision tree is simple enough that it doesn't require a data team to interpret.",
      "Larger brands need more sophisticated measurement. For a lean team managing growth at scale, the right metric isn't necessarily the most precise one — it's the one you can act on consistently.",
    ],
  },
  {
    slug: 'accessibility-for-humans-clarity-for-machines',
    title: 'Accessibility for humans. Clarity for machines.',
    date: '2026-05-20',
    category: 'Growth',
    excerpt:
      "Accessibility is usually framed as a compliance requirement. That framing undersells it. A site built for accessibility is also a site that ad platform algorithms can read clearly — and that changes your conversion efficiency without touching a single campaign setting.",
    body: [
      "In 2021 I completed a web design certification, mostly out of curiosity about how websites are built. The part that stayed with me was not the HTML or the CSS — it was accessibility.",
      "Accessibility is usually framed as a compliance requirement or a consideration for users with specific needs. That framing undersells it. A site built for accessibility — proper heading structure, descriptive alt text, semantic HTML, logical reading order — is a site that machines can parse clearly.",
      "And the machines reading your site are not just screen readers. They are Google's crawlers. Meta's pixel. The algorithms that decide how to target your ads and who to show your products to.",
      "When your site gives these systems clean, structured, interpretable signals, they work better. Better signals means better targeting means more efficient conversions — without touching a single campaign setting.",
      "Most performance marketers never look at this because it sits outside the ad account. But the ad account is reading from your site. If what it is reading is noisy or ambiguous, you are starting every campaign at a disadvantage you cannot optimise your way out of.",
      "Accessibility for humans. Clarity for machines. Same work, two payoffs.",
    ],
  },
  {
    slug: 'platform-is-a-variable',
    title: 'The platform is a variable, not a constant',
    date: '2026-05-20',
    category: 'Thinking',
    excerpt:
      "You can do everything right and still get burned. The ad platform itself is part of the outcome — and the sooner you account for it as a variable, the less you'll confuse its problems for your own.",
    body: [
      "There's something a potter does after finishing a piece — a few extra taps, small adjustments, a final pass before it goes into the kiln. The craft is fully in their hands. What they put in, they get out.",
      "Performance marketing doesn't always work that way.",
      "I've had accounts where everything within my control was solid — conversion tracking clean, campaign structure right, creative performing, budgets allocated sensibly. And then a platform bug would quietly break attribution for a few days, or an algorithm update would destabilise something that had been running well for months, or a known issue would sit open on a support thread with no resolution timeline.",
      "The effort was real. The outcome was not fully mine to control.",
      "The thing I keep coming back to: the ad platform itself is a variable. Not a fixed, reliable medium you're operating through, but an active participant in the outcome — with its own updates, quirks, attribution gaps, and decisions you are not privy to. Some of this is predictable. Most of it is not.",
      "This changes how you hold your results. A month of underperformance is not always a campaign problem. A strong ROAS number is not always something you fully earned. The platform is part of the story — and the sooner you account for it as a variable rather than a given, the less you'll confuse the platform's problems for your own.",
    ],
  },
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
    slug: 'appeasing-the-algorithm',
    title: 'Appeasing the algorithm',
    date: '2026-04-10',
    category: 'Thinking',
    excerpt:
      'Algorithm hacking implies an adversarial relationship with the platform — find the exploit, extract more reach than you earned. I never thought that framing was right. Platforms are businesses. Understanding what they actually want is a more durable strategy than trying to trick them.',
    body: [
      '"Algorithm hacking" was a term that circulated heavily in social media marketing for years. The premise was adversarial: find the exploit, trick the system, extract more reach than you earned.',
      "I never liked that framing. Not for ethical reasons — just because it misidentified what was actually happening.",
      'What I started calling it instead was "appeasing the algorithm." The distinction matters.',
      "A platform is a business. Its algorithm exists to keep users on the app — engaged, entertained, coming back — so the platform can sell ads against that attention. Any content that achieves this gets rewarded. Not because you gamed anything, but because you gave the platform what it needs to function.",
      "Once you accept this, a few things follow naturally.",
      "New features are worth adopting early. When a platform launches something new, it has an internal interest in that feature succeeding. Early adopters who generate positive signals help justify the build. The platform is, quietly, rooting for them. Being early isn't an exploit — it's alignment.",
      "Screen time matters, even though you can't directly measure it. A looping reel someone watches twice, a carousel they scroll back through, a comments section they stay in — these all tell the algorithm the content was worth the time. Replying to every comment isn't just good community practice; it keeps your audience in the thread, which keeps the content alive longer.",
      "There is also a category of engagement that never shows up in dashboards — polls, AMAs, quiz cards, mentions. No measurable metric, but real interaction that the platform registers. Creating for this kind of engagement, not just for tracked numbers, is part of what appeasing actually means in practice.",
      "The shift from hacking to appeasing sounds small. But one strategy is about finding gaps before they close. The other is about understanding what you are actually working with — and building accordingly.",
    ],
  },
  {
    slug: 'why-d2c-brands-plateau',
    title: 'Why most D2C brands plateau at a certain scale',
    date: '2025-11-05',
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
    date: '2025-08-22',
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
    date: '2025-06-18',
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
    date: '2025-04-10',
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
    date: '2025-02-28',
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
    date: '2025-01-14',
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
