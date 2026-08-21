# Backsliding, re-cut: the price elasticity of credited emission reductions
### ACET YLR 2027 · Green Industrial Transformation · full concept development

---

## 0. Read this first — the honest re-cut

The original framing was *"nobody has estimated the price elasticity of the cooking-fuel stack under a large policy-induced shock."* That is now only half true, and the half that is false is in Ghana.

**Greve and Lay (2022, *Journal of the Association of Environmental and Resource Economists*)** provide quasi-experimental evidence from Ghana on exactly this margin [1]. Their findings: a 50% LPG price increase and 20% diesel increase raised the share of households mainly using firewood by 3 percentage points; urban charcoal consumption rose ~17%; LPG expenditure stayed flat, implying consumption fell. Their back-of-envelope calculation puts welfare costs — including added cooking emissions — slightly *above* the fiscal savings, and concludes the LPG subsidy removal in particular was likely socially damaging.

That is a top field journal, on your likely country, on the extensive margin of backsliding. **Do not pitch against it. Pitch past it.**

What Greve and Lay measured: *which fuel is the main fuel*, and *how much is spent*. What they did not measure, and what nobody has: the **composition** of the stack in energy terms, whether it **recovers** when prices fall, and — the part that turns this from a good paper into a fundable one — **what any of it does to the emission reductions Africa is currently selling into carbon markets.**

That last link is the idea. Everything below builds it.

---

## 1. The money chain that makes this urgent

Follow the financing, because that is where the policy relevance lives:

1. **Clean cooking in Africa is now financed largely by carbon credits.** Cookstove projects accounted for roughly 80% of energy carbon-credit transactions in Africa over the past decade, concentrated in Kenya, Uganda, Malawi, Ghana and Rwanda. The World Bank has issued a US$200m Clean Cooking Outcome Bond tying investor returns to credit issuance. In September 2025 Ghana hosted Africa's **first Article 6.2 cookstove deal**, with a fixed-price offtake from Switzerland's KliK Foundation.

2. **Those credits are systematically over-issued, and stacking is one of the named reasons.** A quantitative assessment of five cookstove methodologies in *Nature Sustainability* finds the sample **over-credited by 9.2×**, with misalignment on the fraction of non-renewable biomass, firewood–charcoal conversion, adoption, usage, fuel consumption, **stacking**, rebound and emission factors [2]. A systematic synthesis in *Nature Communications* covering ~1 billion tonnes of issued credits estimates that **only about 11% of cookstove credits represent real emission reductions** — the lowest integrity of any category examined [3].

3. **Crediting methodologies treat usage and stacking as fixed parameters.** They are set at project design from a baseline survey and carried forward. But stacking is *price-responsive* — that is precisely what Greve and Lay demonstrate [1], and what the broader stacking literature describes as backsliding [4], [5].

4. **Therefore the emission reductions being sold are a function of fuel prices, and no methodology accounts for this.** When LPG or transport fuel prices spike, real abatement falls — while credit issuance continues at the assumed rate. Credit quality is *procyclical with fuel prices*, and nobody has modelled it, measured it, or priced it.

5. **And under Article 6, the host country carries the loss.** When Ghana authorises credits for international transfer, it applies a corresponding adjustment — it adds those tonnes back to its own national account. If the credits are over-issued, **the country hands away emission reductions it never achieved and must then meet its own NDC without them.** That is not an integrity abstraction. It is a sovereign balance-sheet exposure, denominated in tonnes, being incurred right now by African designated national authorities who have no tool for sizing it.

That is your policy relevance. Not "clean cooking is important." A specific, quantifiable, uninsured liability sitting on a government's books.

---

## 2. Problem statement (draft — ~250 words)

> Africa's clean-cooking transition is increasingly financed not by public budgets but by carbon credits: cookstove projects have made up roughly 80% of the continent's energy carbon-credit transactions over the past decade, and in September 2025 Ghana closed Africa's first Article 6.2 cookstove deal. The integrity of that financing is contested. A quantitative assessment of five cookstove crediting methodologies finds project samples over-credited by 9.2 times, naming stacking — households' continued use of biomass alongside clean fuels — among the misaligned parameters [2]; a systematic synthesis covering roughly a billion tonnes of issued credits estimates only about 11% of cookstove credits constitute real reductions [3].
>
> These assessments treat over-crediting as a static calibration error. It is not static. Stacking responds to relative fuel prices: quasi-experimental evidence from Ghana shows that a 50% LPG price rise increased the share of households mainly using firewood by three percentage points and raised urban charcoal consumption by about 17% [1]. Crediting methodologies nonetheless fix usage and stacking parameters at project design and carry them forward unchanged for the crediting period.
>
> The implication is unexamined: **the volume of real emission reductions underlying issued credits varies with fuel prices, and no methodology, project, or host-country authority adjusts for it.** Under Article 6, host governments apply corresponding adjustments when authorising transfers, so over-issuance is absorbed by the host country's own NDC account. African designated national authorities are authorising credit transfers today with no means of estimating this exposure.

Trim to fit 800 words total. The three numbers — 9.2×, 11%, 3pp — do the persuading. Keep all three.

---

## 3. The gap, stated so it survives the deletion test

Delete "Ghana" and "GLSS" from these and they still read as gaps:

1. **The stack has been studied on the extensive margin, not the intensive one.** Existing work identifies *which* fuel is primary and *how much is spent* [1], [6], [7]. The quantity that determines emissions is the **share of cooking energy delivered by biomass** — the composition of the stack. That has not been estimated as a price-responsive object.
2. **Asymmetry is untested.** Nobody knows whether a stack that slides down under a price spike climbs back when prices fall, or ratchets. If it ratchets, a temporary price shock produces permanent abatement loss, and the policy remedy is completely different.
3. **The elasticity has never been connected to crediting.** The over-crediting literature is a calibration critique [2], [3], [5]; the fuel-demand literature is a household-behaviour literature [1], [8], [9]. **No paper joins them.** That join is the contribution, and it is the reason this is a policy instrument rather than an academic finding.

Note what makes gap 3 strong: it is not a country gap or a data gap. It is that two mature literatures have never been put in the same room.

---

## 4. Research questions

**Primary.** What is the elasticity of the biomass share of household cooking energy with respect to the relative price of clean fuel, and how much of the emission reduction credited by cookstove projects in the same market does a given price shock erase?

**Subsidiary.**
1. Is the response symmetric? Does the stack recover when the relative price reverts, or is backsliding ratcheted?
2. Who backslides furthest — by income, by urban/rural, by whether the clean fuel was subsidised or carbon-financed — and whose time absorbs the adjustment? (Fuel collection is overwhelmingly women's and girls' labour and is invisible in expenditure data by construction.)
3. What "usage-at-risk" adjustment would a host-country authority need to apply at authorisation to avoid transferring tonnes that were never abated?

---

## 5. Identification and method

**The core estimation.** Household-level demand system for cooking energy where the dependent variable is the **biomass share of delivered cooking energy**, not fuel choice. Sources of price variation, in order of preference:

1. **Discrete, dated tax changes on LPG.** Kenya's VAT history on LPG is unusually rich — zero-rated, reinstated, scrapped, reintroduced at 8%, removed again — giving several sharp, well-dated, plausibly exogenous relative-price movements on a single fuel. *(Verify each date and rate against the Finance Acts; secondary sources on this are inconsistent.)* Ghana's petroleum levy and cylinder-recirculation pricing changes provide analogous variation.
2. **Spatial price variation** instrumented by distance to LPG depot or filling plant, which shifts the delivered price without plausibly shifting cooking preferences.
3. **Seasonality**, which moves biomass availability and price within a single year — important, because it means the design does not depend on a large shock happening during your grant period.

**The measurement innovation — and the thing to lead with.** National surveys ask for the *primary* stove and therefore miss stacking almost entirely, a limitation the stacking literature has flagged repeatedly [5], [4]. Measure the stack directly instead:

- **Stove use monitors** (temperature data loggers placed on each stove in the household) give objective, high-frequency, per-stove use without recall bias. This matters enormously for credibility: the over-crediting assessment found that Gold Standard's *metered* methodology, which directly monitors fuel use, was the most aligned with independent estimates — 1.5× versus 9.2× for the sample overall [2]. **Metering is the known fix. Your paper can be the first to demonstrate what metering reveals under price variation**, which converts a finding into a methodology recommendation.
- Paired with weekly fuel-purchase and collection diaries, and a short time-use module.

**The join.** Take the estimated elasticity, apply it to the usage and stacking parameters used by cookstove crediting methodologies operating in the study market, and recompute emission reductions under observed price paths. Output: **price-adjusted emission reductions versus credited emission reductions**, and the wedge between them expressed in tonnes and in dollars at prevailing credit prices.

---

## 6. Data

| Source | Use | Access |
|---|---|---|
| National household survey with fuel expenditure detail (GLSS, KIHBS, LSMS-ISA) | Baseline stack shares, population weighting, scaling to national estimates | Free |
| Monthly LPG/kerosene/charcoal price series (petroleum regulator, statistical service) | Price variation | Free |
| VAT/levy legislative history | Treatment dates | Free |
| **Primary panel: ~150 households, 2–3 rounds, with stove use monitors** | The elasticity of stack composition | **Funded by this grant** |
| Project design documents and monitoring reports for cookstove projects in the market (registry filings are public) | The credited parameters you are testing against | Free |
| 10–15 interviews: project developers, the designated national authority, the regulator | Interpretation and uptake | Fieldwork cost |

Note the structure: everything except the panel is free. **The panel is what the grant is for**, and it is the only part that produces the novel parameter. That is exactly the shape a budget justification should have.

---

## 7. What you produce

1. **The first estimate of the price elasticity of cooking-stack composition**, measured objectively rather than by primary-fuel recall.
2. **A "usage-at-risk" adjustment factor** — a defensible discount a host-country designated national authority can apply when authorising Article 6 transfers, expressed as a function of the fuel price path. This is the deliverable that gets adopted. It is a tool, not a recommendation.
3. **A tonnes-and-dollars estimate of host-country NDC exposure** from price-driven over-issuance in one market.
4. **A methodology note** arguing from your own data for metered crediting, addressed to the standard-setters.

Audiences, named: the national designated authority for Article 6, the energy ministry's clean cooking unit, the carbon market office, and the crediting standards. Every one of them has a decision open this year.

---

## 8. Why this needs $15,000 — and what each line buys

The whole contribution is one parameter that does not exist and cannot be obtained from any secondary source. Everything else is free. Say this plainly.

| Line | US$ | What it buys |
|---|---|---|
| Stove use monitors (~150 households × ~2.5 stoves, plus spares) | 3,200 | **The measurement innovation.** Objective stack composition; without these you are running another recall survey and the paper is not credible |
| Enumeration: baseline, midline, endline; diaries; time-use module | 3,400 | The panel |
| Principal researcher time, 12 months part-time | 4,000 | Estimation and writing |
| Research assistant, 4 months | 1,400 | Price series construction, registry document extraction, data cleaning |
| Fieldwork travel, supervision, device retrieval | 1,300 | Loggers must be placed and collected in person; retrieval is where these studies fail |
| Interviews, transcription, translation | 500 | Developers and the authority |
| Validation workshop with the DNA and energy ministry | 900 | **The uptake step.** Converts the adjustment factor from a paper into a procedure |
| Contingency | 300 | Device loss |
| **Total** | **15,000** | |

**The argument in one sentence for the reviewer:** the money buys objective measurement of a parameter that a multi-hundred-million-dollar financing market currently assumes, and that the host government is liable for.

---

## 9. Risks — name them, they are your credibility

| Risk | Mitigation |
|---|---|
| **No large price shock occurs during the grant year** | The design does not depend on one. Identification comes from historical tax changes (retrospective, using existing survey waves), spatial price variation, and within-year seasonality. A shock during fieldwork is upside, not the plan. State this explicitly — it is the first thing a good reviewer will probe |
| Device loss or failure | Over-provision by 15%, incentivise retrieval, validate against diaries |
| Small sample limits precision | Power the design on the *within-household* seasonal comparison, not between-household; pre-register the primary specification |
| Project developers decline to engage | Registry documents are public; developer cooperation improves the paper but the design does not require it |
| Ethics: monitoring in homes | Explicit consent, no cameras, temperature loggers only, IRB approval before fieldwork |

Including this table is not defensive. Applicants who omit risk sections read as inexperienced; applicants who name the *right* risk — here, the no-shock risk — read as people who have thought the project through to execution.

---

## 10. Twelve-month timeline

| Months | Activity |
|---|---|
| 1–2 | Ethics approval; price series and legislative history construction; registry document extraction; site selection |
| 2–3 | Instrument design, logger procurement, enumerator training, pilot (n≈20) |
| 3–4 | Baseline round, logger placement |
| 5–8 | Midline round; diaries running; secondary-data elasticity estimation from historical tax changes in parallel |
| 9–10 | Endline, device retrieval, developer and DNA interviews |
| 10–11 | Estimation; construction of the usage-at-risk factor; recomputation against credited parameters |
| 11–12 | Working paper; policy brief; validation workshop; methodology note to standards |

The parallel track in months 5–8 matters: the secondary-data component delivers a result even if the primary panel underperforms. Build that redundancy in and say so.

---

## 11. Draft concept note (~800 words) — adapt, do not submit as-is

> **Title:** Priced out of the credit: fuel price shocks and the integrity of Africa's clean-cooking carbon finance
> **Theme:** Green Industrial Transformation

> **The policy problem.** Africa's clean-cooking transition is increasingly financed by carbon markets rather than public budgets. Cookstove projects have accounted for roughly 80% of the continent's energy carbon-credit transactions over the past decade, concentrated in Kenya, Uganda, Malawi, Ghana and Rwanda; the World Bank has issued a US$200 million Clean Cooking Outcome Bond against credit delivery; and in September 2025 Ghana closed Africa's first Article 6.2 cookstove transaction under the Paris Agreement. The integrity of this financing is contested on quantitative grounds. A comparative assessment of five cookstove crediting methodologies in *Nature Sustainability* estimates project samples are over-credited by 9.2 times, identifying stacking — continued biomass use alongside clean fuels — among the misaligned parameters. A systematic synthesis in *Nature Communications*, covering approximately one billion tonnes of issued credits, estimates that only about 11% of cookstove credits represent real emission reductions.

> **The gap.** These assessments treat over-crediting as a fixed calibration error. It is not fixed. Stacking responds to relative fuel prices: quasi-experimental evidence from Ghana shows a 50% LPG price increase raised the share of households mainly using firewood by three percentage points and urban charcoal consumption by roughly 17%. Yet crediting methodologies set usage and stacking parameters at project design and carry them unchanged through the crediting period. It follows that the real emission reductions underlying issued credits vary with fuel prices — and no methodology, project developer, or host-country authority adjusts for this. Two mature literatures, on carbon-credit integrity and on household fuel demand, have never been joined. Under Article 6, the consequence falls on the host state: authorising a transfer requires a corresponding adjustment, so over-issued credits are subtracted from the country's own NDC account. African designated national authorities are authorising transfers now with no means of estimating that exposure.

> **Research questions.** (i) What is the elasticity of the biomass share of household cooking energy with respect to the relative price of clean fuel? (ii) Is the response symmetric — does the stack recover when prices revert, or does backsliding ratchet? (iii) How much credited emission reduction does an observed price path erase, and what adjustment should a host-country authority apply at authorisation?

> **Data and methodology.** Existing evidence relies on the "primary fuel" survey question, which misses stacking by construction. This study measures the stack directly, using stove use monitors — temperature data loggers placed on every stove in approximately 150 households over three rounds — paired with fuel-purchase diaries and a time-use module. This matters for credibility and for policy: the over-crediting assessment found that the one *metered* methodology, which monitors fuel use directly, was closest to independent estimates (1.5× versus 9.2×). Price variation is identified from three sources: dated statutory changes in LPG taxation, which provide sharp exogenous movements in relative prices; spatial variation in delivered price instrumented by distance to filling plant; and within-year seasonality in biomass price and availability. The estimated elasticity is then applied to the usage and stacking parameters in the publicly filed project design documents of cookstove projects operating in the study market, and emission reductions are recomputed under observed price paths.

> **Expected contribution.** Three outputs. First, the first estimate of the price elasticity of cooking-stack *composition*, objectively measured. Second, a "usage-at-risk" adjustment factor — a defensible, price-path-dependent discount that a designated national authority can apply when authorising Article 6 transfers. Third, an estimate of host-country NDC exposure from price-driven over-issuance, in tonnes and in dollars. Delivered as a working paper, a policy brief, a public dataset, and a validation workshop with the designated national authority and the energy ministry.

> **Feasibility and leadership.** [Your affiliation, prior fieldwork, econometric training, and any existing relationship with the ministry, regulator or a project developer. Name a specific contact if you have one — this section is where reviewers predict whether you will finish.]

> **Risks.** The principal risk is that no large price shock occurs during the study year. The design does not depend on one: identification rests on historical statutory tax changes applied to existing survey waves, spatial price variation, and seasonality, with any contemporaneous shock treated as upside. Secondary risks — logger loss and attrition — are managed by 15% over-provision, retrieval incentives, and diary validation.

---

## 12. Before you submit

1. **Read Greve and Lay (2022) in full.** It is the closest prior work and you must position against it explicitly in the note. Reviewers who know the field will look for exactly that sentence.
2. **Verify the LPG tax history** for your chosen country from the Finance Acts or gazette. The dates are the backbone of your identification and secondary sources contradict each other.
3. **Pull two project design documents** from a credit registry for projects in your market and confirm the usage and stacking parameters are stated in them. If they are not disclosed, your join breaks — find that out this week, not in month six.
4. **Price stove use monitors** from an actual supplier and put the real figure in the budget.
5. **Email the designated national authority.** A reply confirming interest in the adjustment factor is worth more in the feasibility section than any methodological flourish.

---

## References

- [1] ["Stepping Down the Ladder": The Impacts of Fossil Fuel Subsidy Removal in a Developing Country](https://consensus.app/papers/details/46e6d11f4454568ab9759a8d285ea1c0/) — Greve & Lay, 2022, *JAERE* — **the closest prior work; position against it explicitly**
- [2] [Pervasive over-crediting from cookstove offset methodologies](https://consensus.app/papers/details/96ad1e56d6085f23933c3f909339baab/) — Gill-Wiehl et al., 2024, *Nature Sustainability* — the 9.2× estimate and the metered-methodology finding
- [3] [Systematic assessment of the achieved emission reductions of carbon crediting projects](https://consensus.app/papers/details/ffe2690acb605e94a9c5ee4425c9b4a8/) — Probst et al., 2024, *Nature Communications* — ~11% of cookstove credits real
- [4] ["We cannot stop cooking": Stove stacking, seasonality and the risky practices of household cookstove transitions in Nigeria](https://consensus.app/papers/details/547bd12f891f5340a673e2b0504af5e0/) — Jewitt et al., 2020 — backsliding, qualitatively
- [5] [Everybody Stacks: Lessons from household energy case studies](https://consensus.app/papers/details/91c5e8c476465c9bb05fe816477efb07/) — Shankar et al., 2020, *Energy Policy* — national surveys miss stacking
- [6] [Household energy expenditure in Ghana: A double-hurdle model approach](https://consensus.app/papers/details/2688403f94065808bd2f667247f13254/) — Adusah-Poku & Takeuchi, 2019, *World Development*
- [7] [Demand for cooking fuels in a developing country: To what extent do taste and preferences matter?](https://consensus.app/papers/details/51e0e40786495f799858b2aa6331c57d/) — Akpalu et al., 2011, *Energy Policy* — Ghana price elasticities
- [8] [The persistence of energy poverty: A dynamic probit analysis](https://consensus.app/papers/details/7898fbb2af6a56808f7431474e1be2a8/) — Alem et al., 2020, *Energy Economics* — kerosene price rises drive charcoal substitution; state dependence
- [9] [Urban demand for cooking fuels in two major African cities and implications for policy](https://consensus.app/papers/details/23f0c97596e851b8849ecb06d289ceba/) — Das et al., 2024, *PLOS Sustainability and Transformation*
- [10] [Do improved biomass cookstoves reduce fuelwood consumption and carbon emissions? Evidence from a field experiment in rural Ethiopia](https://consensus.app/papers/details/29d211b44d2e5648b66c41d433dfe34a/) — Mekonnen et al., 2022, *Ecological Economics* — measured savings about one-third of prior estimates

*Literature verified via Consensus, August 2026. Carbon-finance facts (Article 6.2 Ghana transaction, Clean Cooking Outcome Bond, African cookstove share of energy credit transactions) verified against public reporting, August 2026 — confirm against registry and World Bank primary sources before citing.*
