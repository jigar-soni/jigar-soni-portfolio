'use client'

import { useState } from 'react'

type Scenario = 'base' | 'stressed' | 'optimised'

interface Inputs {
  aov: number
  returnRate: number
  cogsPct: number
  shipping: number
  gatewayPct: number
  cac: number
  ordersPerYear: number
  lifespan: number
}

const SCENARIOS: Record<Scenario, Inputs & { label: string }> = {
  base: {
    label: 'Base case',
    aov: 1300, returnRate: 0, cogsPct: 32, shipping: 120, gatewayPct: 2.0, cac: 800, ordersPerYear: 1.4, lifespan: 2.0,
  },
  stressed: {
    label: 'Stressed (CAC spike)',
    aov: 1300, returnRate: 15, cogsPct: 32, shipping: 150, gatewayPct: 2.0, cac: 1600, ordersPerYear: 1.2, lifespan: 1.5,
  },
  optimised: {
    label: 'Optimised (retention win)',
    aov: 1600, returnRate: 2, cogsPct: 28, shipping: 100, gatewayPct: 2.0, cac: 700, ordersPerYear: 2.4, lifespan: 3.0,
  },
}

function fmt(n: number) {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.round(n))
}

function SliderRow({
  label, value, min, max, step, onChange, display,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  display: string
}) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <span className="w-40 shrink-0 text-[13px] text-muted">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 cursor-pointer accent-[#111111]"
      />
      <span className="w-16 text-right text-[13px] font-semibold text-ink">{display}</span>
    </div>
  )
}

type MetricStatus = 'healthy' | 'warning' | 'danger' | 'neutral'

function MetricCard({ label, value, sub, status = 'neutral' }: {
  label: string
  value: string
  sub?: string
  status?: MetricStatus
}) {
  const valueColor: Record<MetricStatus, string> = {
    healthy: 'text-emerald-600',
    warning: 'text-amber-600',
    danger: 'text-red-600',
    neutral: 'text-ink',
  }
  return (
    <div className="rounded-[16px] border border-subtle bg-white p-4 shadow-soft">
      <p className="text-[11px] uppercase tracking-label text-muted">{label}</p>
      <p className={`mt-1.5 text-[1.35rem] font-semibold leading-none ${valueColor[status]}`}>{value}</p>
      {sub && <p className="mt-1.5 text-[11px] text-muted/70">{sub}</p>}
    </div>
  )
}

export default function Calculator() {
  const [scenario, setScenario] = useState<Scenario>('base')
  const [aov, setAov] = useState(1300)
  const [returnRate, setReturnRate] = useState(0)
  const [cogsPct, setCogsPct] = useState(32)
  const [shipping, setShipping] = useState(120)
  const [gatewayPct, setGatewayPct] = useState(2.0)
  const [cac, setCac] = useState(800)
  const [ordersPerYear, setOrdersPerYear] = useState(1.4)
  const [lifespan, setLifespan] = useState(2.0)

  const applyScenario = (s: Scenario) => {
    const p = SCENARIOS[s]
    setAov(p.aov); setReturnRate(p.returnRate); setCogsPct(p.cogsPct)
    setShipping(p.shipping); setGatewayPct(p.gatewayPct); setCac(p.cac)
    setOrdersPerYear(p.ordersPerYear); setLifespan(p.lifespan)
    setScenario(s)
  }

  // Calculations
  const returnsAmt = aov * (returnRate / 100)
  const netAov = aov - returnsAmt
  const cogsAmt = netAov * (cogsPct / 100)
  const paymentFees = netAov * (gatewayPct / 100)
  const cm = netAov - cogsAmt - shipping - paymentFees
  const ltv = Math.max(0, cm * ordersPerYear * lifespan)
  const ltvCac = cac > 0 ? ltv / cac : 0
  const paybackMonths = cm > 0 ? (cac * 12) / (cm * ordersPerYear) : Infinity
  const cmPctAov = (cm / aov) * 100
  const blendedMargin = ltv > 0 ? ((ltv - cac) / ltv) * 100 : 0

  const ltvCacStatus = (): MetricStatus => {
    if (ltvCac >= 3) return 'healthy'
    if (ltvCac >= 2) return 'warning'
    return 'danger'
  }

  const paybackStatus = (): MetricStatus => {
    if (paybackMonths <= 6) return 'healthy'
    if (paybackMonths <= 12) return 'warning'
    return 'danger'
  }

  type VerdictStatus = 'healthy' | 'decent' | 'marginal' | 'danger'

  const getVerdict = (): { status: VerdictStatus; title: string; message: string } => {
    if (cm <= 0) return {
      status: 'danger',
      title: 'Negative contribution margin',
      message: 'Each order is losing money before factoring in CAC. Fix pricing, COGS, returns, or fulfilment costs before running any paid acquisition.',
    }
    if (ltvCac >= 3 && paybackMonths <= 6) return {
      status: 'healthy',
      title: 'Healthy — ready to scale',
      message: `LTV:CAC of ${ltvCac.toFixed(1)}× with a ${paybackMonths.toFixed(1)}-month payback. The unit economics support scaling paid acquisition. Push spend and watch for saturation signals.`,
    }
    if (ltvCac >= 3 && paybackMonths <= 12) return {
      status: 'decent',
      title: 'Decent — watch cash flow',
      message: `LTV:CAC of ${ltvCac.toFixed(1)}× is solid, but a ${paybackMonths.toFixed(1)}-month payback ties up working capital. Scale carefully and make sure you have the float to sustain acquisition.`,
    }
    if (ltvCac >= 2) return {
      status: 'marginal',
      title: 'Marginal — do not scale paid yet',
      message: `LTV:CAC of ${ltvCac.toFixed(1)}× means you recover CAC but returns are thin. Scaling paid acquisition here bleeds cash. Fix retention or contribution margin first — one good email flow can move this from marginal to healthy.`,
    }
    return {
      status: 'danger',
      title: 'Danger — stop scaling paid',
      message: `LTV:CAC of ${ltvCac.toFixed(1)}× means you are destroying value with each new customer acquired. Pause paid acquisition and fix the fundamentals — pricing, retention, returns, or CAC efficiency — before spending more.`,
    }
  }

  const verdict = getVerdict()

  const verdictStyle: Record<VerdictStatus, { wrap: string; title: string; msg: string }> = {
    healthy: { wrap: 'border-emerald-200 bg-emerald-50', title: 'text-emerald-800', msg: 'text-emerald-700' },
    decent:  { wrap: 'border-amber-200 bg-amber-50',    title: 'text-amber-800',   msg: 'text-amber-700'   },
    marginal:{ wrap: 'border-amber-200 bg-amber-50',    title: 'text-amber-800',   msg: 'text-amber-700'   },
    danger:  { wrap: 'border-red-200 bg-red-50',        title: 'text-red-800',     msg: 'text-red-700'     },
  }
  const vs = verdictStyle[verdict.status]

  // Bar chart — reference width is gross AOV
  const barPct = (val: number) =>
    `${Math.max(3, (Math.max(0, val) / aov) * 100)}%`

  const economicsBars = [
    { label: 'Revenue (AOV)',          value: aov,         amount: aov,          color: 'bg-emerald-400' },
    ...(returnRate > 0 ? [{ label: '− Returns', value: returnsAmt, amount: -returnsAmt, color: 'bg-purple-200' }] : []),
    { label: '− COGS',                 value: cogsAmt,     amount: -cogsAmt,     color: 'bg-rose-300'    },
    { label: '− Shipping & fulfil.',   value: shipping,    amount: -shipping,    color: 'bg-amber-300'   },
    { label: '− Payment fees',         value: paymentFees, amount: -paymentFees, color: 'bg-orange-200'  },
    { label: '= Contribution margin',  value: Math.abs(cm),amount: cm,           color: cm >= 0 ? 'bg-emerald-400' : 'bg-red-400' },
  ]

  const formulas = [
    { label: 'Net revenue',                   expr: 'AOV × (1 − Return rate)' },
    { label: 'Contribution margin per order', expr: 'Net revenue − COGS − Shipping − Payment fees' },
    { label: 'LTV',                           expr: 'CM per order × Orders / yr × Customer lifespan' },
    { label: 'LTV:CAC ratio',                 expr: 'LTV ÷ CAC · target > 3×' },
    { label: 'Payback period',                expr: '(CAC × 12) ÷ (CM per order × Orders / yr) · target < 6 months' },
    { label: 'Blended margin %',              expr: '(LTV − CAC) ÷ LTV × 100' },
  ]

  return (
    <div className="space-y-5">

      {/* Scenario selector */}
      <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
        <p className="text-[11px] uppercase tracking-label text-muted">Scenario</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(Object.entries(SCENARIOS) as [Scenario, typeof SCENARIOS[Scenario]][]).map(([key, s]) => (
            <button
              key={key}
              onClick={() => applyScenario(key)}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                scenario === key
                  ? 'border-ink bg-ink text-white'
                  : 'border-subtle bg-white text-muted hover:border-muted/60 hover:text-ink'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Two-column: inputs + outputs */}
      <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">

        {/* Inputs */}
        <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
          <p className="text-[11px] uppercase tracking-label text-muted">Inputs — drag to explore</p>
          <div className="mt-4 divide-y divide-subtle/50">
            <SliderRow label="AOV (avg order value)"   value={aov}          min={300}  max={20000} step={100} onChange={setAov}          display={`₹${fmt(aov)}`} />
            <SliderRow label="Return rate %"           value={returnRate}   min={0}    max={40}    step={0.5} onChange={setReturnRate}   display={`${returnRate.toFixed(1)}%`} />
            <SliderRow label="COGS % of AOV"           value={cogsPct}      min={10}   max={70}    step={1}   onChange={setCogsPct}      display={`${cogsPct}%`} />
            <SliderRow label="Shipping & fulfil. cost" value={shipping}     min={30}   max={500}   step={10}  onChange={setShipping}     display={`₹${fmt(shipping)}`} />
            <SliderRow label="Payment gateway %"       value={gatewayPct}   min={1.0}  max={4.0}   step={0.1} onChange={setGatewayPct}  display={`${gatewayPct.toFixed(1)}%`} />
            <SliderRow label="CAC (cost to acquire)"   value={cac}          min={200}  max={3000}  step={50}  onChange={setCac}          display={`₹${fmt(cac)}`} />
            <SliderRow label="Orders per year"         value={ordersPerYear} min={1.0} max={6.0}   step={0.1} onChange={setOrdersPerYear} display={`${ordersPerYear.toFixed(1)}×`} />
            <SliderRow label="Customer lifespan (yrs)" value={lifespan}     min={0.5}  max={5.0}   step={0.1} onChange={setLifespan}     display={`${lifespan.toFixed(1)} yrs`} />
          </div>
        </div>

        {/* Outputs */}
        <div className="space-y-5">

          {/* Per-order economics */}
          <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
            <p className="text-[11px] uppercase tracking-label text-muted">Per-order economics</p>
            <div className="mt-5 space-y-3">
              {economicsBars.map((bar) => (
                <div key={bar.label} className="flex items-center gap-3">
                  <span className="w-36 shrink-0 text-[12.5px] text-muted">{bar.label}</span>
                  <div className="flex-1">
                    <div
                      className={`h-5 rounded-sm transition-all duration-200 ${bar.color}`}
                      style={{ width: barPct(bar.value) }}
                    />
                  </div>
                  <span className={`w-16 text-right text-[12.5px] font-semibold ${bar.amount < 0 ? 'text-muted' : 'text-ink'}`}>
                    {bar.amount < 0 ? `−₹${fmt(Math.abs(bar.amount))}` : `₹${fmt(bar.amount)}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key metrics */}
          <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
            <p className="text-[11px] uppercase tracking-label text-muted">Key metrics</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <MetricCard label="LTV"            value={`₹${fmt(ltv)}`}                                                    sub="lifetime value"         status="neutral" />
              <MetricCard label="LTV:CAC"        value={`${ltvCac.toFixed(1)}×`}                                           sub="target > 3×"            status={ltvCacStatus()} />
              <MetricCard label="Payback"        value={paybackMonths === Infinity ? '—' : `${paybackMonths.toFixed(1)} mo`} sub="target < 6 mo"         status={paybackStatus()} />
              <MetricCard label="CM / order"     value={`₹${fmt(cm)}`}                                                     sub={`${cmPctAov.toFixed(1)}% of AOV`} status={cm > 0 ? 'neutral' : 'danger'} />
              <MetricCard label="Blended margin" value={`${blendedMargin.toFixed(0)}%`}                                    sub="(LTV−CAC)÷LTV"          status="neutral" />
              <MetricCard label="CAC"            value={`₹${fmt(cac)}`}                                                    sub="cost to acquire"        status="neutral" />
            </div>
          </div>
        </div>
      </div>

      {/* Health verdict */}
      <div className={`rounded-[20px] border p-6 ${vs.wrap}`}>
        <p className="text-[11px] uppercase tracking-label text-muted/70">Health verdict</p>
        <p className={`mt-3 text-[15px] font-semibold ${vs.title}`}>{verdict.title}</p>
        <p className={`mt-2 text-[13.5px] leading-relaxed ${vs.msg}`}>{verdict.message}</p>
      </div>

      {/* Formulas */}
      <div className="rounded-[20px] border border-subtle bg-white p-6 shadow-soft">
        <p className="text-[11px] uppercase tracking-label text-muted">The formulas</p>
        <ul className="mt-4 space-y-2">
          {formulas.map((f) => (
            <li key={f.label} className="flex flex-col gap-0.5 rounded-[12px] bg-subtle/25 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-3">
              <span className="shrink-0 text-[12.5px] font-medium text-ink">{f.label}</span>
              <span className="hidden shrink-0 text-[12px] text-muted/50 sm:block">=</span>
              <span className="text-[12.5px] text-muted">{f.expr}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
