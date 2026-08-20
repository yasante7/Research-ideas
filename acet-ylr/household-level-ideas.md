# ACET YLR 2027 — Household-level research ideas
## Stronger problem statements, verified research gaps

Companion to `README.md`. Everything here puts **the household as the unit of analysis** and every gap statement below was checked against the published literature rather than asserted. Where a gap turned out to be already occupied, the idea was re-cut rather than kept — that is noted explicitly, because knowing what is *already done* is what separates a fundable problem statement from a plausible-sounding one.

---

## Part 1 — What a strong problem statement does

A weak problem statement describes a topic. A strong one creates a **debt the reader needs paid**. Five moves, in this order, in about 150 words:

1. **The policy fact.** A specific instrument, with a date and a magnitude. Not "digital taxation in Africa" but "Ghana levied 1.5% on mobile money transfers from May 2022 and repealed it in 2025."
2. **The stakes, quantified.** Who is exposed, how many, how much of their budget.
3. **What is established.** Name the literature and concede what it has settled. Conceding is what makes the next sentence credible.
4. **The precise gap — one sentence, and it must be a *question the existing designs cannot answer*,** not merely a country or year nobody has covered yet. "No study of X in Ghana" is a weak gap. "The entire literature is ex-ante simulation, so the behavioural response is assumed rather than observed" is a strong one.
5. **Why it binds now.** The decision on the table this year, and who is making it.

### Weak vs strong, same idea

> **Weak.** "Mobile money has become important in Africa. Some governments have introduced taxes on mobile money transactions. This study will examine the effect of the e-levy on mobile money usage in Ghana, which is important for policy."

Three failures: no magnitude, no concession to existing work, and the gap is a country name. A reviewer cannot tell whether this has been done fifty times.

> **Strong.** "At least six African governments have levied ad valorem taxes on mobile money transfers since 2018; Ghana imposed 1.5% in May 2022 and repealed the levy in 2025. The case against these levies has been argued almost entirely in terms of adoption — suppressed transaction volumes and reversion to cash. That framing understates the stake. The established welfare contribution of mobile money to poor households is not convenience but insurance: Jack and Suri find that shocks cut non-user consumption by 7% while user consumption is unaffected, and Riley shows the mechanism is remittances from geographically distant senders, with no spillover to non-users in the same village. A transfer tax therefore raises the price of insurance exactly when a household is drawing on it. No study has asked whether transfer taxes degrade informal risk-sharing — a larger and more regressive cost than lost transaction counts. Ghana's imposition and repeal provide the variation to measure it."

Same topic. The second one has a debt in it.

**Test your own draft:** delete your country name and your dataset name. If the gap sentence still reads as a gap, it is real. If it collapses, you have a coverage claim, not a gap.

---

## Part 2 — Eight household-level ideas, fully worked

### 1. Does taxing mobile money break informal insurance?
**Theme:** Innovation & Digital Policy (strong Gender Equality secondary)

**Problem statement.** Mobile money transfer levies have spread across the continent — Ghana, Uganda, Tanzania, Cameroon, Zimbabwe, Côte d'Ivoire — and are defended fiscally: the channel is observable, broad-based, and cheap to tax. Opposition has been argued almost entirely on adoption grounds. That is the wrong margin. The best-identified finding in this literature is that mobile money's core household value is **insurance**: Kenyan households with M-PESA fully absorbed shocks that cut non-user consumption by 7%, driven by remittances from a more diverse and more distant set of senders [3]; Ugandan evidence shows the smoothing accrues only to users, with no village-level spillover to non-users [1]; Tanzanian panel evidence finds the same during drought [4], [5]. A per-transaction tax raises the price of a remittance sent *in response to a shock* exactly like any other transfer, and it does so proportionally more for the small, frequent transfers that poor households rely on. **No study in this literature asks whether transfer taxation degrades risk-sharing** — the outcome that actually carries the welfare weight. Ghana's imposition (2022) and full repeal (2025) is, as far as I can establish, the only clean round-trip available anywhere.

**Gap status: open and large.** The risk-sharing literature treats transaction cost as technological (agent network expansion) rather than fiscal. Nobody has used a tax as the cost shock.

**Questions.** (i) Did the levy reduce the probability and size of shock-triggered inbound transfers, conditional on experiencing a shock? (ii) Did consumption smoothing weaken for treated households — i.e. did the Jack–Suri gap between users and non-users narrow while the levy was in force? (iii) Did it re-widen after repeal, or is there hysteresis?

**Identification.** Three stacked strategies: (a) triple difference — shock-exposed vs not × mobile money user vs not × pre/during/post-levy; (b) bunching at the levy's exemption threshold (Ghana exempted transfers below a daily cutoff), which identifies splitting behaviour and gives a revealed-preference measure of avoidance cost; (c) synthetic control at the aggregate level using non-levying comparator markets.

**Data.** Household panel with shock modules and mobile money use (Ghana Socioeconomic Panel / GLSS8; or Tanzania NPS, Uganda UNPS for the multi-country version), plus central bank / switch aggregate series for the bunching and time-series work, plus rainfall or price shock data geo-matched to enumeration areas. Optional: a 250–350 household recall survey on shock-time transfers if the panel timing is imperfect.

**Number the minister needs.** The consumption cost of the levy per cedi of revenue raised, separated into the direct tax burden and the lost-insurance component. That second number does not currently exist for any country.

**Feasibility:** high. Mostly secondary data. **Budget fit:** excellent.

---

### 2. Fuel subsidy removal: did compensation reach the households that actually got hit?
**Theme:** Green Industrial Transformation

**Problem statement.** Nigeria removed its petrol subsidy in May 2023; pump prices moved from roughly ₦195 to several times that within eighteen months, and the poverty headcount rose over the same window [2]. Fossil subsidy reform is the largest single source of fiscal space for green industrial policy on the continent, and every government contemplating it faces the same question: who gets compensated, and by how much. The literature on Nigeria is substantial but is almost uniformly **ex-ante simulation** on pre-reform expenditure shares — benefit-incidence analysis showing the top quintile captures twice the subsidy value of the bottom [10], CGE welfare estimates [3], [6], and micro-simulation of poverty effects [1], [4], [9]. Rentschler's simulation produced the crucial warning: uniform national compensation, apparently adequate on average, fails to offset the shock in 16 of 37 states, and those states coincide with the sites of civil unrest after the 2012 attempt [1]. That is a prediction. **Nigeria then ran the experiment — removal plus a national cash-transfer palliative — and nobody has gone back to test the prediction against realised household outcomes.** Simulations assume the compensation reaches the exposed; whether geographic exposure and transfer receipt actually line up is an empirical question with a live answer.

**Gap status: open.** The literature's own limitation is structural: it predates the reform or models it. The gap is ex-post, panel, and about targeting geography, not average welfare.

**Questions.** (i) What was the realised welfare loss by decile and state, and how does it compare to the simulated predictions? (ii) What share of the most-exposed households received the compensating transfer, and what is the correlation between district-level exposure and district-level transfer coverage? (iii) Did exposed households adjust through consumption, through enterprise closure, or through withdrawing children from school?

**Identification.** Difference-in-differences across households with high vs low pre-reform fuel budget shares (petrol, kerosene, transport), instrumented by pre-reform distance to market and occupation, using panel waves straddling May 2023. Exposure–compensation mismatch mapped at LGA level. A validation exercise comparing realised losses to the published simulations is itself a contribution: it tells the next country how much to trust the models.

**Data.** Nigeria General Household Survey–Panel waves straddling the reform; NBS high-frequency phone survey rounds; National Social Register coverage data; state-level price series.

**Number the minister needs.** The exposure–compensation correlation coefficient, and the transfer size that would have been required, by state, to hold poverty constant. Directly portable to Angola, Egypt, Cameroon, and anyone else sequencing a reform.

**Feasibility:** high, secondary data. **Portable variant:** Ghana's petroleum price deregulation and levy structure, or Angola's 2023–24 phased removal.

---

### 3. Backsliding: what a price shock does to the cooking-fuel stack
**Theme:** Green Industrial Transformation (strong Gender secondary)

**Problem statement.** Clean-cooking programmes are evaluated on adoption — whether a household acquired an LPG stove — while the health, emissions, and time-use benefits depend on *exclusive and sustained* use. The literature has settled that they are not the same thing: stacking is universal, running between 28% and 100% across eleven programme case studies [7]; it persists in Tanzania [1], Rwanda [2], Nigeria [6], and India [10]; and national surveys systematically miss it by asking only about the "primary" stove [7]. Qualitative work in Nigeria documents "backsliding" from clean to biomass when households outgrow a stove or when fuel prices move [6]. What the field has established is therefore the *existence and correlates* of stacking. What it has not established is its **price responsiveness**: as one of the few studies to raise the point puts it, the impacts of policy instruments that alter fuel prices remain underexplored [9]. Estimates of the elasticity of stack composition — not adoption, composition — with respect to a large, exogenous, policy-induced price change do not exist for any African country. Yet that elasticity is the single parameter a government needs to price an LPG subsidy, a cylinder-recirculation scheme, or a carbon levy, and several governments are setting those prices this year.

**Gap status: re-cut.** "Does stacking happen" is closed — do not pitch it. "How far does the stack slide back when the relative price moves, and who slides furthest" is open and is a cleanly estimable parameter.

**Questions.** (i) What is the own- and cross-price elasticity of the *share* of cooking energy from biomass, following a large LPG or kerosene price shock? (ii) Is backsliding symmetric — does the stack recover when prices fall, or is it ratcheted? (iii) Who absorbs the adjustment: whose time (women's and girls' fuel collection hours), whose health, whose schooling?

**Identification.** Panel or repeated cross-section around a dated national price shock (Nigeria's 2023 removal; an LPG levy or subsidy change elsewhere), with pre-shock stack composition measured from fuel expenditure shares rather than the "primary fuel" question. Cross-sectional price variation from distance-to-depot as an instrument. Add a short time-use module — the gendered cost is invisible in expenditure data by construction.

**Data.** LSMS-ISA panels with energy and time-use modules; Multi-Tier Framework energy access surveys; national fuel price series; a supplementary 300–400 household stack-composition survey with weekly recall, which is the honest way to measure a stack.

**Number the minister needs.** The biomass-share elasticity, plus the price threshold above which subsidised LPG programmes lose their health benefit entirely.

**Feasibility:** medium-high. The survey component is the main cost, and it is what makes the paper.

---

### 4. Digital ID as gatekeeper: putting a number on exclusion
**Theme:** Innovation & Digital Policy

**Problem statement.** Digital public infrastructure is now the organising frame for social protection delivery across the continent, with biometric national IDs tied to cash transfer registries, health insurance, and subsidy access. The inclusion case is well documented. The exclusion case is not — not because it is absent, but because it is **almost entirely qualitative**. Ghanaian work documents systematic exclusion of Fulani pastoralists through citizenship scrutiny under a card covering ~85% of adults, and states plainly that no public dataset details algorithm accuracy or bias, so implications must be inferred from process data and analogous settings [1]. South African research on grant recipients finds digital delivery producing "informational opacities and new forms of exclusion" through ethnography [3]. The rigorous quantitative work on biometric exclusion is Indian [7]. Meanwhile the targeting-error literature for Africa measures errors arising from *targeting mechanisms* — proxy means tests, community targeting, categorical rules [5], [6] — and treats identity as given. **The result is that no one has decomposed exclusion error into the part caused by targeting design and the part caused by the identity credential itself,** which is the decomposition that determines whether the fix is a better formula or a fallback enrolment channel. Governments are hard-wiring ID requirements into programme eligibility now, on the strength of inclusion projections and no exclusion estimate.

**Gap status: open and unusually clean.** A named literature explicitly flags the missing data. That sentence belongs in your concept note.

**Questions.** (i) Among households in the bottom two consumption deciles, what share lacks a functioning national ID credential, and how does that vary by gender, migration status, ethnicity, and disability? (ii) What share of eligible-but-unenrolled households attribute non-receipt to the credential rather than to the assessment? (iii) What is the cost — fees, trips, days, foregone earnings — of acquiring the credential, expressed as a share of the transfer it unlocks?

**Identification.** Match a household survey with consumption and ID-possession data to programme beneficiary status; estimate exclusion error conditional on eligibility rank, then decompose by credential possession. Complement with a targeted survey of eligible-but-unenrolled households and enrolment-centre observation. An audit component — timing and costing actual enrolment attempts — gives you a hard number where the literature has adjectives.

**Data.** National household survey with ID module (Afrobarometer carries ID questions across many countries and is free); programme registry data via the ministry; primary survey n≈400 in two contrasting districts.

**Number the minister needs.** Credential-attributable exclusion error, in percentage points, and the cost of a fallback channel per household recovered.

**Feasibility:** medium — depends on registry access. Secure a letter from the implementing ministry *before* submitting; it also strengthens the leadership section.

---

### 5. AfCFTA has been simulated to death and never observed
**Theme:** Regional Integration

**Problem statement.** The AfCFTA welfare literature is remarkably uniform in method: global CGE with microsimulation projecting 30 million people lifted from extreme poverty [2], [5]; CGE-plus-microsimulation for Senegal finding urban households favoured over rural [1]; multi-country general equilibrium estimates in which most of the gain comes from non-tariff barriers rather than tariffs [3]; and WITS-SMART partial-equilibrium studies for Ghana [7], Nigeria [9], and Central Africa [4]. Every one of these is **ex ante**. Each assumes full pass-through of tariff changes to consumer prices, assumes households can reallocate consumption frictionlessly, and calibrates to pre-agreement data. Trade has now been moving under the Guided Trade Initiative since 2022 and preferential schedules are in force for a growing set of country-product pairs. **There is, as yet, essentially no ex-post household evidence — no observation of what happened to prices, budget shares, or real consumption in the places where liberalised goods actually cross.** The pass-through assumption in particular is doing enormous work in every headline number, and in African border markets with concentrated intermediaries it is the assumption most likely to be wrong. Ministries are now negotiating sensitive-product exclusions using welfare figures that have never been validated against a single observed household.

**Gap status: wide open, and the strongest "method gap" of the set.** You are not adding a country to a literature; you are adding an entire empirical mode to it.

**Questions.** (i) For products that entered preferential trade under the GTI or national schedules, what share of the tariff reduction reached retail prices in border and interior markets? (ii) How do realised household welfare effects, computed from observed price changes, compare with the simulated predictions for the same country? (iii) Who gained — by decile, by urban/rural, by gender of household head, by whether household income comes from a competing sector?

**Identification.** Difference-in-differences on market price series for liberalised vs non-liberalised products, with the schedule dates as the treatment. First-order welfare effects computed household-by-household by matching product price changes to consumption shares (the standard consumption-side incidence approach), with the income side handled through sector of employment. Then a direct model-validation exercise: simulated vs realised, product by product.

**Data.** National market price series (statistical service weekly/monthly price collections); tariff schedules and GTI product lists; household expenditure survey with detailed consumption items — GLSS8 for Ghana, or the harmonised EHCVM surveys, which are comparable across eight WAEMU countries and make a multi-country version feasible on one budget.

**Number the minister needs.** A measured pass-through rate, and a decile-by-decile incidence table for the actual agreement rather than a modelled one. This is exactly the evidence the AfCFTA Secretariat cannot currently produce.

**Feasibility:** high. Entirely secondary data. **This is the highest fundability-per-dollar idea in the pack.**

---

### 6. Who actually controls the account?
**Theme:** Gender Equality

**Problem statement.** Financial inclusion targets are written in terms of account ownership, and the gender gap in African mobile money ownership is tracked closely by governments and donors. Ownership is not control. The evidence that this distinction is economically decisive is strong: randomising microfinance disbursement onto a digital account rather than cash raised women's business capital 11% and profits 15%, with the largest effects for women facing intra-household pressure to share — the account worked because it concealed and protected resources [2]; ATM cards in Kenya increased account use only for male-owned and joint accounts, with household bargaining power the mediating variable [9]; and spouses systematically disagree about who owns assets and who decides, in patterns consistent with hidden assets and asymmetric information inside the household [6]. Qualitative work in rural Kenya describes women's mobile accounts as sites of household tension and monitoring [1]. So the literature has established that (a) control matters more than ownership and (b) survey reports of control are unreliable in a *directional* way. **What is missing is measurement: no African study estimates the wedge between de jure ownership and de facto control at scale — what share of women's registered accounts are operated with a PIN the woman does not hold, or with transactions she does not initiate — and therefore nobody knows how much of the reported closing of the gender gap in account ownership is real.** Every national financial inclusion strategy on the continent is targeting the measured variable.

**Gap status: open.** The design exists (spousal disagreement), the outcome exists (digital account control), nobody has combined them.

**Questions.** (i) What is the wedge between registered ownership and de facto control among married women with mobile money accounts? (ii) Which household and market characteristics predict it? (iii) Does the wedge bias the standard financial-inclusion gender gap statistic, and by how much?

**Identification.** Separate, simultaneous, private spousal interviews (the Ambler design) on account ownership, PIN possession, and transaction initiation, with disagreement itself as the outcome of interest. Validate self-reports against handset-observed transaction histories for a consenting subsample — that validation step is what turns this from another perceptions survey into a measurement paper. A list experiment for socially sensitive items. Optionally embed a small incentivised task where the woman chooses between receiving a payment as cash or to her own account — revealed preference over concealment.

**Data.** Primary survey, n≈400 couples, two districts, one urban one rural. Sample from an existing sampling frame to control costs.

**Number the minister needs.** A correction factor for the headline financial-inclusion gender gap, plus the household characteristics that predict where an account will not be controlled by its registered owner — directly actionable for programmes that pay transfers to women.

**Feasibility:** medium. Fieldwork-heavy, ethically demanding (private spousal interviews on money require careful protocol and a clear safety plan). Budget-feasible at n≈400 with two enumerator teams. **Highest originality in the pack; needs the most careful design.**

---

### 7. Border closures as a natural experiment in household food security
**Theme:** Regional Integration

**Problem statement.** Regional integration is argued in aggregates — trade volumes, tariff revenue, corridor times — and its household welfare case rests on the presumption that border frictions raise consumer prices. The presumption is rarely tested, because borders rarely move. But they have: Nigeria closed its land borders to goods from August 2019 to December 2020, and Rwanda's border with Uganda was effectively closed from 2019 to early 2022. These were large, sharply dated, exogenous-to-households shocks to the cost of moving food across a line, in regions where geo-referenced household panels were already in the field. **The macro consequences of these closures have been discussed extensively; the household consequences — for food prices, calorie intake, dietary diversity, child anthropometrics, and the trading livelihoods concentrated in border districts — have not been systematically estimated.** This matters beyond history: closures and export bans are recurring instruments of African food policy, deployed on the argument that they protect domestic producers, and the domestic-consumer side of that ledger has never been priced.

**Gap status: open, and unusually clean identification.** Sharp date, sharp geography, panel data already collected.

**Questions.** (i) What happened to food prices, food insecurity, and dietary diversity in border districts relative to interior districts after closure? (ii) Did the presumed beneficiaries — domestic producers of the protected staples — actually gain, and by how much relative to consumer losses? (iii) How much of the effect persisted after reopening?

**Identification.** Difference-in-differences with continuous treatment in distance-to-border, interacted with pre-closure dependence on cross-border-sourced staples. Event-study specification around both closure and reopening dates. Placebo tests on non-tradable prices and on internal-border districts.

**Data.** Nigeria GHS-Panel (geo-referenced, waves straddling the closure); Rwanda EICV / Uganda UNPS for the East African case; NBS food price series at state level; DHS anthropometrics for child outcomes; FEWS NET market data.

**Number the minister needs.** The consumer cost of a border closure per household per month in the exposed belt, set against the producer gain — a benefit-cost ratio for a policy instrument that is currently deployed on assertion.

**Feasibility:** high. Fully secondary, geo-matching is the main technical work.

---

### 8. Household enterprises and the cost of an unreliable grid
**Theme:** Green Industrial Transformation

**Problem statement.** Non-farm household enterprises employ more people in most African economies than the formal firm sector, and industrial policy — including the green industrial agenda of localised processing, cold chains, and electrified productive use — implicitly assumes they can absorb electricity as an input. The outage literature is almost entirely about registered firms, using enterprise surveys where the outcome is firm sales or generator ownership. **Household enterprises, which cannot afford generators, do not appear in enterprise surveys, and are typically operated by women out of the home, are largely absent from that evidence base** — so the cost of unreliable supply is measured for the part of the economy best able to insure against it and unmeasured for the part least able. The green-transition question follows directly: electrification-for-productive-use programmes and mini-grid tariff structures are designed around a reliability–price trade-off whose household-enterprise side has never been estimated.

**Gap status: open**, though verify recent working papers in your specific country before committing.

**Questions.** (i) How does outage exposure map onto household enterprise revenue, hours, and survival? (ii) What do household enterprises pay, implicitly, for reliability — through spoilage, foregone hours, and coping equipment? (iii) Does the burden fall differently on women-operated enterprises, given their concentration in refrigeration- and appliance-dependent activities?

**Identification.** Match household enterprise modules in LSMS-type panels to feeder-level outage data from the utility, or to satellite nightlight variance where feeder data is unavailable. Instrument local outage exposure with distance to substation or feeder configuration. Event-study around load-shedding episodes.

**Data.** LSMS-ISA household enterprise modules; utility feeder outage logs (requires a data agreement) or VIIRS nightlights; a supplementary enterprise-diary survey n≈200 for spoilage and hours.

**Number the minister needs.** Willingness-to-pay for reliability among household enterprises, which is the missing input into mini-grid tariff design and to the sequencing of productive-use subsidies.

**Feasibility:** medium — utility data access is the binding constraint. Nightlights fallback keeps it viable.

---

## Part 3 — Four more, in brief

**9. GenAI exposure of household income portfolios.** Not "which jobs are exposed" (increasingly crowded) but: households, not workers, are the risk-bearing unit, and African households hold diversified income portfolios across several activities. Map task-exposure indices onto every income source in a household's portfolio, then ask whether exposure is concentrated or diversified at household level, and whether the households most exposed are the ones with the fewest smoothing instruments. Pure secondary data.

**10. The data-affordability trap.** Continental affordability is tracked as "1GB as a share of GNI per capita" — a macro ratio that describes no actual household. Construct a household-level data budget-share measure from expenditure surveys, estimate the price elasticity of data demand off a tax or tariff change, and test whether data poverty predicts job-search and schooling outcomes. Replaces a headline indicator that ministries currently cite for want of anything better.

**11. Simplified Trade Regimes and women informal traders.** Border-post intercept survey (n≈400) with a randomised information treatment on eligibility — does awareness alone shift uptake, or is the constraint the regime's design? Gives causal leverage on a small budget and sits squarely across Gender and Regional Integration.

**12. Preference utilisation and the household trader.** The firm-level version is in the main README. The household-level cut: among small cross-border traders, what is the per-consignment compliance cost of claiming AfCFTA preference as a share of consignment value, and below what margin does claiming stop being rational? Explains low utilisation from the trader's budget constraint rather than from institutional narrative.

---

## Part 4 — Ranking

| # | Idea | Gap strength | Feasibility on $15k | Data risk |
|---|---|---|---|---|
| 5 | AfCFTA ex-post household incidence | **Very high** (method gap) | Very high | Low |
| 1 | Mobile money tax and informal insurance | **Very high** | High | Low |
| 2 | Subsidy removal: exposure vs compensation | High | Very high | Low |
| 7 | Border closure and food security | High | Very high | Low |
| 6 | De facto control of women's accounts | **Very high** (originality) | Medium | Medium |
| 4 | Digital ID exclusion, quantified | **Very high** | Medium | High (registry access) |
| 3 | Price elasticity of the fuel stack | High | Medium | Medium |
| 8 | Household enterprises and outages | Medium-high | Medium | High (utility data) |

**If you want one recommendation: idea 5.** The gap is a whole missing empirical mode rather than a missing country, the data is free and already collected, the audience (national trade ministries and the AfCFTA Secretariat) is exactly ACET's constituency, and the deliverable — a measured pass-through rate and a real incidence table — is a number that does not exist anywhere today. It is also the safest to execute in twelve months, which matters more than it sounds: the grant is judged partly on whether you will finish.

**If you want the highest-ceiling paper: idea 1.** It reframes a live continental tax debate around the right outcome variable, and it sits on top of one of the most-cited literatures in development economics, which is where a first paper wants to be.

---

## Verification checklist before you commit

Do this in the next three days, not after submission:

1. **Confirm the policy dates yourself.** Levy rates, thresholds, imposition and repeal dates, subsidy removal dates and price paths. Get these from the gazette or the central bank, not from news summaries or from this document.
2. **Download one wave.** Confirm the survey actually contains the module you need — shock questions, fuel expenditure detail, enterprise revenue, ID possession. Modules get dropped between waves.
3. **Re-run the literature check for your exact country and year.** The gaps above were verified against the published literature, but working papers move fast and country-specific work may be in progress. Search the country name plus your outcome variable before you write the gap sentence.
4. **Email one gatekeeper** — the statistical service, the utility, the ministry — and get a reply before you promise the data in a proposal.

---

## Key references for the gap statements

Cite these directly in your concept note. Naming the papers you are extending is the fastest way to signal you know the field.

**Mobile money and risk sharing (idea 1)**
- [Risk Sharing and Transactions Costs: Evidence from Kenya's Mobile Money Revolution](https://consensus.app/papers/details/2b8988aa408a5e3388cfc35b6dc564d4/) — Jack & Suri, 2013, *American Economic Review*
- [Mobile money and risk sharing against village shocks](https://consensus.app/papers/details/c4d696d4f0455cc9853b82f3ef9786a5/) — Riley, 2018, *Journal of Development Economics*
- [Financial Inclusion, Shocks, and Poverty](https://consensus.app/papers/details/9d38492f3e5e511a9230119ab92d014d/) — Abiona & Koppensteiner, 2020, *Journal of Human Resources*
- [The long-run poverty and gender impacts of mobile money](https://consensus.app/papers/details/255ca28789d75972974eb20807ec7a3f/) — Suri & Jack, 2016, *Science*

**Fuel subsidy incidence (idea 2)**
- [Incidence and impact: The regional variation of poverty effects due to fossil fuel subsidy reform](https://consensus.app/papers/details/3c783e1f370c55ae9ff22b5b759bf380/) — Rentschler, 2016, *Energy Policy*
- [Who Benefit Most from Fuel Subsidies? Evidence from Nigeria](https://consensus.app/papers/details/859d147761365cacb30ea8f9af77735b/) — Soile & Mu, 2015, *Energy Policy*
- [Fuel subsidy reform and the social contract in Nigeria: A micro-economic analysis](https://consensus.app/papers/details/9b3d988f61fd5f86a97785f1609b9fbf/) — McCulloch et al., 2021, *Energy Policy*

**Fuel stacking (idea 3)**
- [Everybody Stacks: Lessons from household energy case studies](https://consensus.app/papers/details/91c5e8c476465c9bb05fe816477efb07/) — Shankar et al., 2020, *Energy Policy*
- ["We cannot stop cooking": Stove stacking, seasonality and the risky practices of household cookstove transitions in Nigeria](https://consensus.app/papers/details/547bd12f891f5340a673e2b0504af5e0/) — Jewitt et al., 2020, *Energy Research & Social Science*
- [Fuel stacking implications for willingness to pay for cooking fuels](https://consensus.app/papers/details/19230e25ed465d5091f56fd8cc75bbff/) — Das et al., 2022, *Energy for Sustainable Development*

**Digital ID and targeting (idea 4)**
- [Digital identity, algorithmic-administrative governance and the transformation of social policy provisioning in Ghana](https://consensus.app/papers/details/e7f14d1da28650b5b32129efb9e20fdf/) — Kpessa-Whyte, 2026
- [Transparency, exclusion and mediation: how digital and biometric technologies are transforming social protection in Tamil Nadu](https://consensus.app/papers/details/1dfe9b5d2fad52d89140b0bc2455dd0b/) — Carswell et al., 2021, *Oxford Development Studies*
- [Targeting Social Transfer Programmes: Comparing Design and Implementation Errors](https://consensus.app/papers/details/ee23a94d5d6e55bfb174ac81fbd4c41c/) — Sabates-Wheeler et al., 2015, *Journal of International Development*

**AfCFTA welfare (idea 5)**
- [African Continental Free Trade Area: Economic and Distributional Effects](https://consensus.app/papers/details/08da010be14052718b9d80012ffc6ad0/) — Maliszewska & Ruta, 2020, World Bank
- [The African Continental Free Trade Agreement](https://consensus.app/papers/details/c01dd75b246450d58c1d939adff8a8e2/) — Abrego et al., 2019, IMF Working Paper
- [Growth, fiscal and welfare implications of trade liberalization in Africa: Senegal](https://consensus.app/papers/details/0e5d865e9a5b58b9a261037718c2c3dc/) — Diallo et al., 2024, *African Development Review*

**Intra-household control (idea 6)**
- [Resisting Social Pressure in the Household Using Mobile Money](https://consensus.app/papers/details/3e5087af63ad536f981d7816807a83e9/) — Riley, 2024, *American Economic Review*
- [He Says, She Says: Spousal Disagreement in Survey Measures of Bargaining Power](https://consensus.app/papers/details/634b78c60f795ce3b25b14a9ac5a5d0e/) — Ambler et al., 2020, *Economic Development and Cultural Change*
- [The Cost of Convenience?](https://consensus.app/papers/details/2ffc0e53017659819d1d38c1d3500adf/) — Schaner, 2017, *Journal of Human Resources*

*Literature verified via Consensus, August 2026. Re-run the search for your chosen country before finalising any gap claim.*
