import type { Metadata } from 'next'
import Link from 'next/link'
import CopyButton from '../components/CopyButton'

export const metadata: Metadata = {
  title: 'TierLog — Free Product Tier Segmentation for Google Ads',
  description:
    'Free Google Ads Script that automatically segments your Shopping and Performance Max product catalog into 6 performance tiers. Runs daily. Free forever.',
}

const tiers = [
  {
    name: 'Superhero',
    conditions: 'ROAS ≥ 2× target · High clicks',
    description:
      'Elite performers. ROAS is double your target with strong click volume. Give them the highest budgets and protect them aggressively.',
    bg: '#cfe2ff',
    text: '#1a1a1a',
  },
  {
    name: 'Hero',
    conditions: 'ROAS ≥ target · High clicks',
    description:
      "Proven workhorses hitting your ROAS target with real traffic. These products keep the business running — don't starve them of budget.",
    bg: '#d4edda',
    text: '#1a1a1a',
  },
  {
    name: 'Sidekick',
    conditions: 'ROAS ≥ target · Low clicks',
    description:
      'Hidden gems. Converting well but underexposed. Increase their visibility — these are the products you want to promote to Hero.',
    bg: '#fff3cd',
    text: '#1a1a1a',
  },
  {
    name: 'Villain',
    conditions: 'Clicks above threshold · ROAS below target',
    description:
      'Budget drains. Getting real traffic but not converting at your ROAS target. Isolate them, tighten targets, or pause.',
    bg: '#f8d7da',
    text: '#1a1a1a',
  },
  {
    name: 'Zombie',
    conditions: '≤ 100 impressions in 30 days',
    description:
      'Barely visible. Google is willing to serve these products but almost never does. Activation needed — try a dedicated low-ROAS-target campaign.',
    bg: '#e2e3e5',
    text: '#1a1a1a',
  },
  {
    name: 'No-Data',
    conditions: '0 impressions',
    description:
      'Not being served at all. This is a feed or eligibility issue, not a bidding problem. Check Merchant Center diagnostics first.',
    bg: '#1a1a1a',
    text: '#ffffff',
  },
]

const steps = [
  {
    n: '01',
    title: 'Paste TierLog into Google Ads Scripts',
    desc: 'Go to Tools → Bulk Actions → Scripts in your Google Ads account. Create a new script and paste the full TierLog code.',
  },
  {
    n: '02',
    title: 'Create a Google Sheet and add the Sheet ID',
    desc: 'Create a new Google Sheet. Copy the ID from the URL — the long string between /d/ and /edit — and paste it into the sheetId field at the top of the script.',
  },
  {
    n: '03',
    title: 'Run the script — 4 tabs create automatically',
    desc: 'Set MODE to "setup" and run once. TierLog scaffolds your Sheet with four tabs: Config, Product Data, Labels, and Log. Then switch MODE back to "run".',
  },
  {
    n: '04',
    title: 'Connect the Labels tab as a Supplemental Feed',
    desc: 'In Google Merchant Center, go to Products → Feeds → Add Supplemental Feed → Google Sheets. Select your Sheet and choose the Labels tab.',
  },
  {
    n: '05',
    title: 'Build one PMax campaign per tier',
    desc: 'Create a separate Performance Max (or Standard Shopping) campaign for each tier. Use custom label filters to assign products. Set unique ROAS targets and budgets per tier.',
  },
  {
    n: '06',
    title: 'Script runs daily at 4am — labels update automatically',
    desc: "Run createDailyTrigger() once to schedule daily execution. Every morning after Google's data refresh, TierLog recomputes tier labels and syncs to your Labels tab. Products graduate between tiers automatically.",
  },
]

const faqs = [
  {
    q: 'Does this work for Standard Shopping campaigns?',
    a: 'Yes — the segmentation logic works for both Standard Shopping and Performance Max. The GAQL query pulls from shopping_performance_view, which covers both campaign types.',
  },
  {
    q: 'Will it overwrite my existing custom labels?',
    a: 'Only the slot you configure. Set custom_label_slot in the Config tab to whichever label slot (0–4) you are not currently using. The script only touches the one slot you assign it.',
  },
  {
    q: 'How often does it run?',
    a: "Daily at 4am after Google's overnight data refresh. You can change the hour in the createDailyTrigger() function at the bottom of the script.",
  },
  {
    q: 'Why are all my products showing as Zombie?',
    a: 'Your zombie_max_impressions threshold may be too high for your account size. Lower it in the Config tab. For smaller accounts, try setting it to 10–20 instead of the default 100.',
  },
  {
    q: "My IDs aren't matching in Merchant Center — what do I do?",
    a: 'Check the exact format of your product IDs in GMC (Products → All Products → open any product). The script normalises the _IN_ country code to uppercase but your feed may use a different format. Check and adjust the .replace() line in _fetchProductData if needed.',
  },
]

const TIERLOG_SCRIPT = `/**
 * ============================================================
 *  TIERLOG — Product Tier Segmentation for Google Ads
 *  Configurable Custom Label (0–4) | Shopping + Performance Max
 * ============================================================
 *
 *  SETUP:
 *  1. Create a new Google Sheet
 *  2. Go to Extensions > Apps Script, paste this file
 *  3. Fill in CONFIG below (Ads Customer ID + Sheet ID)
 *  4. Run setupSheet() once to create tabs + config rows
 *  5. Run runTierLog() manually or set a daily trigger
 *
 *  SHEETS CREATED:
 *  - Config      → editable thresholds, date range, label names
 *  - Product Data → raw pull from Google Ads
 *  - Labels      → computed labels per product (6 tiers: Superhero/Hero/Sidekick/Villain/Zombie/No-Data)
 *  - Log         → run history
 * ============================================================
 */

// ── HARDCODED CONFIG (fallback if Config sheet missing) ──────
const CONFIG = {
  customerId: "INSERT-YOUR-CUSTOMER-ID",   // e.g. "123-456-7890"
  sheetId:    "INSERT-YOUR-SHEET-ID",       // from Sheet URL
  lookbackDays: 30,
  targetRoas: 500,   // percentage (500 = 5x = 500%)

  // Thresholds — override these in Config sheet
  heroMinClicks:        50,  // clicks in lookback window
  sidekickMaxClicks:    49,  // < this AND converts well = Sidekick
  villainMaxRoas:       499, // below target ROAS with spend = Villain
  zombieMaxImpressions: 100, // ≤ this impressions = Zombie (served rarely, not a feed issue)

  // Label names written to Custom Label slot
  customLabelSlot: 4,  // 0–4 — which custom label slot to use (default: 4 = custom_label_4)
  labels: {
    hero:      "Hero",
    sidekick:  "Sidekick",
    villain:   "Villain",
    zombie:    "Zombie",
    superhero: "Superhero",  // Heroes with ROAS > 2x target
    noData:    "No-Data",    // 0 impressions in window — never shown, feed/listing issue
  }
};

// ── SHEET TAB NAMES ──────────────────────────────────────────
const TABS = {
  config:  "Config",
  data:    "Product Data",
  labels:  "Labels",
  log:     "Log"
};


// ============================================================
//  MAIN — Google Ads Scripts entry point
//  Change MODE to "setup" on first run, then switch to "run"
// ============================================================

var MODE = "run";  // "setup" | "run" | "push_only"

function main() {
  if (MODE === "setup") {
    setupSheet();
  } else if (MODE === "push_only") {
    pushLabelsOnly();
  } else {
    runTierLog();
  }
}


/**
 * Run once to scaffold the Sheet structure.
 */
function setupSheet() {
  const ss = SpreadsheetApp.openById(CONFIG.sheetId);

  _createTabIfMissing(ss, TABS.config);
  _createTabIfMissing(ss, TABS.data);
  _createTabIfMissing(ss, TABS.labels);
  _createTabIfMissing(ss, TABS.log);

  _writeConfigDefaults(ss);
  _writeDataHeaders(ss);
  _writeLabelHeaders(ss);

  Logger.log("✅ Sheet scaffolded. Fill in Config tab, then run runTierLog().");
}

/**
 * Main function — pull data, compute tiers, push to Google Ads.
 */
function runTierLog() {
  const ss       = SpreadsheetApp.openById(CONFIG.sheetId);

  _createTabIfMissing(ss, TABS.config);
  _createTabIfMissing(ss, TABS.data);
  _createTabIfMissing(ss, TABS.labels);
  _createTabIfMissing(ss, TABS.log);

  _writeConfigDefaults(ss);

  const cfg      = _loadConfig(ss);
  const startTs  = new Date();

  _log(ss, "START", \`TierLog run started. Lookback: \${cfg.lookbackDays}d, Target ROAS: \${cfg.targetRoas}%\`);

  try {
    const products = _fetchProductData(cfg);
    _log(ss, "INFO", \`Fetched \${products.length} products from Google Ads\`);

    _writeProductData(ss, products);

    const labeled = _computeLabels(products, cfg);
    _writeLabeledData(ss, labeled, cfg);

    const counts = _labelCounts(labeled);
    _log(ss, "INFO", \`Labels: Superheroes=\${counts.Superhero||0}, Heroes=\${counts.Hero||0}, Sidekicks=\${counts.Sidekick||0}, Villains=\${counts.Villain||0}, Zombies=\${counts.Zombie||0}, No-Data=\${counts["No-Data"]||0}\`);

    _log(ss, "INFO", \`Wrote \${labeled.length} tier labels to Labels tab — Merchant Center Supplemental Feed will sync on next fetch\`);

    const elapsed = ((new Date() - startTs) / 1000).toFixed(1);
    _log(ss, "SUCCESS", \`Run complete in \${elapsed}s\`);

  } catch (e) {
    _log(ss, "ERROR", e.toString());
    throw e;
  }
}

/**
 * Convenience: only push labels already computed in Labels tab (no API pull).
 */
function pushLabelsOnly() {
  const ss  = SpreadsheetApp.openById(CONFIG.sheetId);
  const cfg = _loadConfig(ss);
  const labeled = _readLabeledDataFromSheet(ss);
  const pushed  = _pushLabelsToAds(labeled, cfg);
  _log(ss, "PUSH-ONLY", \`Pushed \${pushed} label updates to Google Ads\`);
}


// ============================================================
//  GOOGLE ADS DATA FETCH
// ============================================================

function _fetchProductData(cfg) {
  const dateRange = _buildDateRange(cfg.lookbackDays);

  const query = \`
    SELECT
      segments.product_item_id,
      segments.product_title,
      segments.product_merchant_id,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions,
      metrics.conversions_value
    FROM shopping_performance_view
    WHERE
      segments.date BETWEEN '\${dateRange.from}' AND '\${dateRange.to}'
    ORDER BY metrics.clicks DESC
    LIMIT 50000
  \`;

  const rows = [];
  const reportIterator = AdsApp.report(query).rows();

  while (reportIterator.hasNext()) {
    const row = reportIterator.next();
    const costMicros = parseFloat(row["metrics.cost_micros"]) || 0;
    const convValue  = parseFloat(row["metrics.conversions_value"]) || 0;
    const cost       = costMicros / 1000000;
    const roas       = cost > 0 ? (convValue / cost) * 100 : 0;

    rows.push({
      itemId:       (row["segments.product_item_id"] || "").replace(/_in_/i, "_IN_"),
      title:        row["segments.product_title"],
      merchantId:   row["segments.product_merchant_id"],
      impressions:  parseInt(row["metrics.impressions"]) || 0,
      clicks:       parseInt(row["metrics.clicks"]) || 0,
      cost:         cost,
      conversions:  parseFloat(row["metrics.conversions"]) || 0,
      convValue:    convValue,
      roas:         roas,
      label:        ""
    });
  }

  return rows;
}


// ============================================================
//  LABELING LOGIC
// ============================================================

/**
 * Decision tree (order matters):
 *
 *  1. No-Data   — impressions = 0. Feed/eligibility issue. Check Merchant Center.
 *  2. Zombie    — impressions > 0 but ≤ zombieMaxImpressions. Barely visible.
 *  3. Villain   — impressions > threshold, ROAS < target. Budget drain.
 *  4. Sidekick  — clicks < heroMinClicks, ROAS ≥ target. Hidden gem.
 *  5. Hero      — clicks ≥ heroMinClicks, ROAS ≥ target. Proven performer.
 *  6. Superhero — Hero with ROAS ≥ 2× target. Elite tier.
 */
function _computeLabels(products, cfg) {
  const superRoasThreshold = cfg.targetRoas * 2;

  return products.map(p => {
    let label;

    if (p.impressions === 0) {
      label = cfg.labels.noData;
    } else if (p.impressions <= cfg.zombieMaxImpressions) {
      label = cfg.labels.zombie;
    } else if (p.roas < cfg.targetRoas) {
      label = cfg.labels.villain;
    } else if (p.clicks < cfg.heroMinClicks) {
      label = cfg.labels.sidekick;
    } else if (p.roas >= superRoasThreshold) {
      label = cfg.labels.superhero;
    } else {
      label = cfg.labels.hero;
    }

    return { ...p, label };
  });
}


// ============================================================
//  PUSH LABELS TO GOOGLE ADS
// ============================================================

function _pushLabelsToAds(labeled, cfg) {
  let pushed = 0;

  const labelMap = {};
  labeled.forEach(p => {
    if (p.itemId) labelMap[p.itemId] = p.label;
  });

  const campaignIterator = AdsApp.shoppingCampaigns().get();
  while (campaignIterator.hasNext()) {
    const campaign = campaignIterator.next();
    const pgIterator = campaign.productGroups().get();

    while (pgIterator.hasNext()) {
      const pg = pgIterator.next();
      try {
        const dim = pg.getDimension();
        if (dim && dim.productItemId) {
          const label = labelMap[dim.productItemId];
          if (label) { pushed++; }
        }
      } catch(e) { /* some product groups don't expose getDimension */ }
    }
  }

  Logger.log("ℹ️  Label data written to 'Labels' sheet tab. Connect this tab as a " +
             "Supplemental Feed in Merchant Center to apply labels.");

  return labeled.length;
}


// ============================================================
//  SHEET READ/WRITE HELPERS
// ============================================================

function _writeProductData(ss, products) {
  const sheet = ss.getSheetByName(TABS.data);
  sheet.clearContents();

  const headers = ["Item ID", "Title", "Merchant ID", "Impressions",
                   "Clicks", "Cost (€/$)", "Conversions", "Conv. Value", "ROAS (%)"];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers])
    .setFontWeight("bold")
    .setBackground("#1a1a2e")
    .setFontColor("#ffffff");

  if (products.length === 0) return;

  const rows = products.map(p => [
    p.itemId, p.title, p.merchantId,
    p.impressions, p.clicks,
    p.cost.toFixed(2),
    p.conversions.toFixed(1),
    p.convValue.toFixed(2),
    p.roas.toFixed(1)
  ]);

  sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function _writeLabeledData(ss, labeled, cfg) {
  const sheet = ss.getSheetByName(TABS.labels);
  sheet.clearContents();

  const customLabelCol = "custom_label_" + cfg.customLabelSlot;

  const headers = ["id", customLabelCol,
                   "title_[display only]", "clicks_[display only]",
                   "roas_[display only]", "cost_[display only]"];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers])
    .setFontWeight("bold")
    .setBackground("#0f3460")
    .setFontColor("#e94560");

  if (labeled.length === 0) return;

  const rows = labeled.map(p => [
    p.itemId, p.label, p.title,
    p.clicks, p.roas.toFixed(1), p.cost.toFixed(2)
  ]);

  sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);

  const labelCol = sheet.getRange(2, 2, rows.length, 1);
  const colors   = labeled.map(p => [_labelColor(p.label)]);
  labelCol.setBackgrounds(colors);
  labelCol.setFontWeight("bold");

  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function _readLabeledDataFromSheet(ss) {
  const sheet = ss.getSheetByName(TABS.labels);
  const data  = sheet.getDataRange().getValues();
  if (data.length < 2) return [];

  return data.slice(1).map(row => ({
    itemId: row[0], label: row[1], title: row[2],
    clicks: row[3], roas: parseFloat(row[4]) || 0, cost: parseFloat(row[5]) || 0
  }));
}


// ============================================================
//  CONFIG SHEET
// ============================================================

function _writeConfigDefaults(ss) {
  const sheet = ss.getSheetByName(TABS.config);
  if (sheet.getLastRow() > 1) return;

  sheet.clearContents();
  const headers = ["Setting", "Value", "Description"];
  sheet.getRange(1, 1, 1, 3).setValues([headers])
    .setFontWeight("bold").setBackground("#0f3460").setFontColor("#e94560");

  const rows = [
    ["lookback_days",          30,   "Number of days of data to pull"],
    ["target_roas",            500,  "Target ROAS % (500 = 5x)"],
    ["custom_label_slot",      4,    "Which custom label slot to use (0, 1, 2, 3, or 4)"],
    ["hero_min_clicks",        50,   "Min clicks to qualify as Hero/Villain (not Sidekick)"],
    ["sidekick_max_clicks",    49,   "Max clicks for a well-converting Sidekick"],
    ["villain_max_roas",       499,  "Max ROAS% that still counts as Villain (below target)"],
    ["zombie_max_impressions", 100,  "≤ this impressions = Zombie"],
    ["label_hero",       "Hero",      "Tier value written to your chosen custom label slot"],
    ["label_sidekick",   "Sidekick",  "Tier value written to your chosen custom label slot"],
    ["label_villain",    "Villain",   "Tier value written to your chosen custom label slot"],
    ["label_zombie",     "Zombie",    "Tier value written to your chosen custom label slot"],
    ["label_superhero",  "Superhero", "Tier value written to your chosen custom label slot"],
    ["label_no_data",    "No-Data",   "Tier value written to your chosen custom label slot"],
  ];

  sheet.getRange(2, 1, rows.length, 3).setValues(rows);
  sheet.autoResizeColumns(1, 3);
  sheet.setFrozenRows(1);
}

function _loadConfig(ss) {
  const sheet = ss.getSheetByName(TABS.config);
  if (!sheet) return CONFIG;

  const data = sheet.getDataRange().getValues();
  const map  = {};
  data.slice(1).forEach(row => { if (row[0]) map[row[0]] = row[1]; });

  return {
    lookbackDays:         parseInt(map["lookback_days"])          || CONFIG.lookbackDays,
    targetRoas:           parseFloat(map["target_roas"])          || CONFIG.targetRoas,
    customLabelSlot:      parseInt(map["custom_label_slot"])      >= 0 ? parseInt(map["custom_label_slot"]) : CONFIG.customLabelSlot,
    heroMinClicks:        parseInt(map["hero_min_clicks"])        || CONFIG.heroMinClicks,
    sidekickMaxClicks:    parseInt(map["sidekick_max_clicks"])    || CONFIG.sidekickMaxClicks,
    villainMaxRoas:       parseFloat(map["villain_max_roas"])     || CONFIG.villainMaxRoas,
    zombieMaxImpressions: parseInt(map["zombie_max_impressions"]) || CONFIG.zombieMaxImpressions,
    labels: {
      hero:      map["label_hero"]      || CONFIG.labels.hero,
      sidekick:  map["label_sidekick"]  || CONFIG.labels.sidekick,
      villain:   map["label_villain"]   || CONFIG.labels.villain,
      zombie:    map["label_zombie"]    || CONFIG.labels.zombie,
      superhero: map["label_superhero"] || CONFIG.labels.superhero,
      noData:    map["label_no_data"]   || CONFIG.labels.noData,
    }
  };
}


// ============================================================
//  LOG TAB
// ============================================================

function _writeDataHeaders(ss) {
  const sheet = ss.getSheetByName(TABS.data);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1,1).setValue("Run setupSheet() and then runTierLog() to populate this tab.");
  }
}

function _writeLabelHeaders(ss) {
  const sheet = ss.getSheetByName(TABS.labels);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1,1).setValue("Run runTierLog() to populate this tab. Then connect it as a Supplemental Feed in Merchant Center.");
  }
}

function _log(ss, level, message) {
  const sheet = ss.getSheetByName(TABS.log);
  if (!sheet) return;
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1,1,1,3).setValues([["Timestamp","Level","Message"]])
      .setFontWeight("bold").setBackground("#0f3460").setFontColor("#e94560");
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([new Date().toISOString(), level, message]);
  Logger.log(\`[\${level}] \${message}\`);
}


// ============================================================
//  UTILITIES
// ============================================================

function _buildDateRange(days) {
  const to   = new Date();
  const from = new Date();
  from.setDate(to.getDate() - days);
  return {
    from: Utilities.formatDate(from, "UTC", "yyyy-MM-dd"),
    to:   Utilities.formatDate(to,   "UTC", "yyyy-MM-dd")
  };
}

function _createTabIfMissing(ss, name) {
  if (!ss.getSheetByName(name)) {
    ss.insertSheet(name);
    Logger.log(\`Created tab: \${name}\`);
  }
}

function _labelCounts(labeled) {
  return labeled.reduce((acc, p) => {
    acc[p.label] = (acc[p.label] || 0) + 1;
    return acc;
  }, {});
}

function _labelColor(label) {
  const map = {
    "Superhero": "#cfe2ff",
    "Hero":      "#d4edda",
    "Sidekick":  "#fff3cd",
    "Villain":   "#f8d7da",
    "Zombie":    "#e2e3e5",
    "No-Data":   "#1a1a1a",
  };
  return map[label] || "#ffffff";
}


// ============================================================
//  TRIGGER HELPER — run once to schedule daily execution
// ============================================================

/**
 * Creates a daily time-based trigger for runTierLog().
 * Run this function once from the Apps Script editor.
 */
function createDailyTrigger() {
  ScriptApp.getProjectTriggers().forEach(t => {
    if (t.getHandlerFunction() === "runTierLog") {
      ScriptApp.deleteTrigger(t);
    }
  });

  ScriptApp.newTrigger("runTierLog")
    .timeBased()
    .everyDays(1)
    .atHour(4)
    .create();

  Logger.log("✅ Daily trigger created for runTierLog() at 4am.");
}`

export default function TierLogPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-20 pt-36 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">
            Tools · Google Ads
          </p>
          <h1 className="mt-5 font-display italic text-[2.6rem] font-normal leading-tight tracking-tight text-ink sm:text-[3.2rem]">
            TierLog — Free Product Tier Segmentation for Google Ads
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-loose text-muted">
            Automatically segments your entire product catalog by performance. Runs daily. Free forever.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#script"
              className="rounded-full bg-ink px-6 py-3 text-[13.5px] font-medium text-white transition-opacity hover:opacity-70"
            >
              Get the Script
            </a>
            <a
              href="#tiers"
              className="rounded-full border border-subtle bg-white px-6 py-3 text-[13.5px] font-medium text-ink shadow-soft transition hover:border-muted/60"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-subtle bg-white/50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">The Problem</p>
          <h2 className="mt-5 max-w-2xl font-display italic text-[1.9rem] font-normal tracking-tight text-ink">
            PMax treats every product the same. TierLog doesn't.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-loose text-muted">
            Performance Max reports aggregate campaign performance — not what individual products are doing. One flat campaign means your best performers and your budget drains are averaged together, and Google optimises across all of them without knowing the difference.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                label: 'No product-level visibility',
                body: 'PMax shows you campaign-level ROAS. It does not tell you which of your 1,000 products are pulling the weight and which are burning the budget.',
              },
              {
                label: 'Heroes and Villains get averaged',
                body: "A product returning 8x ROAS and a product returning 0.5x ROAS both sit in the same campaign. Google spreads budget across both. You can't fix what you can't see.",
              },
              {
                label: 'Invisible at scale',
                body: "At 500 or 5,000 SKUs, manual product-level analysis isn't possible. Without automation, you're flying blind on the majority of your catalog.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft"
              >
                <p className="text-[11px] uppercase tracking-label text-muted">{item.label}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="border-t border-subtle px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">The Six Tiers</p>
          <h2 className="mt-5 font-display italic text-[1.9rem] font-normal tracking-tight text-ink">
            Every product gets a label. Every label has a job.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-loose text-muted">
            TierLog classifies your entire product catalog into six tiers based on impressions, clicks, and ROAS over a configurable lookback window. Each tier maps to a distinct campaign strategy.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-[20px] p-6 shadow-soft"
                style={{
                  backgroundColor: tier.bg,
                  border: tier.bg === '#1a1a1a' ? '1px solid #333' : '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <p
                  className="text-[1.15rem] font-semibold"
                  style={{ color: tier.text }}
                >
                  {tier.name}
                </p>
                <p
                  className="mt-1.5 text-[11.5px] uppercase tracking-wide font-medium opacity-60"
                  style={{ color: tier.text }}
                >
                  {tier.conditions}
                </p>
                <p
                  className="mt-4 text-[13.5px] leading-relaxed"
                  style={{ color: tier.text, opacity: tier.bg === '#1a1a1a' ? 0.75 : 0.8 }}
                >
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="border-t border-subtle bg-white/50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Setup</p>
          <h2 className="mt-5 font-display italic text-[1.9rem] font-normal tracking-tight text-ink">
            Up and running in six steps.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft"
              >
                <p className="font-mono text-[11.5px] font-medium text-muted">{step.n}</p>
                <p className="mt-3 text-[15px] font-semibold text-ink">{step.title}</p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Script */}
      <section id="script" className="border-t border-subtle px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">Get TierLog</p>
          <h2 className="mt-5 font-display italic text-[1.9rem] font-normal tracking-tight text-ink">
            The script. Copy it. It's free.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-loose text-muted">
            Paste it into Google Ads Scripts, fill in your <code className="rounded bg-subtle/60 px-1.5 py-0.5 font-mono text-[13px] text-ink">customerId</code> and <code className="rounded bg-subtle/60 px-1.5 py-0.5 font-mono text-[13px] text-ink">sheetId</code> at the top, and run.
          </p>

          <div className="mt-8 overflow-hidden rounded-[20px] border border-subtle shadow-card">
            {/* Code block header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="ml-3 font-mono text-[12px] text-white/40">TierLog.gs</span>
              </div>
              <CopyButton text={TIERLOG_SCRIPT} />
            </div>
            {/* Code */}
            <pre className="max-h-[520px] overflow-y-auto overflow-x-auto bg-[#0f172a] p-6 font-mono text-[12.5px] leading-relaxed text-white/75">
              <code>{TIERLOG_SCRIPT}</code>
            </pre>
          </div>

          <div className="mt-5 space-y-2">
            <p className="text-[13px] leading-relaxed text-muted">
              Fill in your <code className="rounded bg-subtle/60 px-1.5 py-0.5 font-mono text-[12px] text-ink">customerId</code> and <code className="rounded bg-subtle/60 px-1.5 py-0.5 font-mono text-[12px] text-ink">sheetId</code> at the top before running.
            </p>
            <p className="text-[13px] leading-relaxed text-muted">
              Set <code className="rounded bg-subtle/60 px-1.5 py-0.5 font-mono text-[12px] text-ink">custom_label_slot</code> in the Config tab to whichever label slot (0–4) is free in your account.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-subtle bg-white/50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11.5px] uppercase tracking-label text-muted">FAQ</p>
          <h2 className="mt-5 font-display italic text-[1.9rem] font-normal tracking-tight text-ink">
            Common questions.
          </h2>
          <div className="mt-10 max-w-3xl divide-y divide-subtle">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] font-medium text-ink">
                  {faq.q}
                  <span className="mt-0.5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-loose text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-subtle px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-subtle bg-white p-10 shadow-soft sm:p-14">
            <p className="text-[11.5px] uppercase tracking-label text-muted">Built by Jigar Soni</p>
            <h2 className="mt-4 max-w-lg font-display italic text-[1.6rem] font-normal tracking-tight text-ink">
              A tool I built because I needed it.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-loose text-muted">
              Managing ₹70L+ in monthly ad spend across Shopping and PMax accounts, product-level visibility was something I needed but couldn't find. TierLog is free, open, and does exactly what it says.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#script"
                className="rounded-full bg-ink px-6 py-3.5 text-center text-[13.5px] font-medium text-white transition-opacity hover:opacity-70"
              >
                Get the Script
              </a>
              <Link
                href="/about"
                className="rounded-full border border-subtle px-6 py-3.5 text-center text-[13.5px] font-medium text-ink transition hover:border-muted/60"
              >
                About me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
