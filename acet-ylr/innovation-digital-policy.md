# Innovation & Digital Policy — pitchable research ideas
### ACET YLR 2027 · problem statements drafted for a research committee

Gaps below were checked against the published literature, and the policy facts against public reporting, in August 2026. Where a gap was weaker than it looked, the idea was demoted rather than dressed up.

---

## Why most innovation pitches to this theme fail

Before the ideas, the filter. ACET's theme text names **enabling rules, digital public infrastructure, fair competition, data governance, inclusion**. Almost every application to a theme worded like that arrives as one of four things:

- *"Fintech and financial inclusion in [country]"* — the single most crowded question in African development economics. You will be the fortieth paper.
- *"Digital transformation and SME performance"* — a perceptions survey with a Likert scale and a regression. No identification, no policy lever.
- *"An AI readiness index for Africa"* — an index nobody asked for, benchmarked against nothing.
- *"Barriers to [X] adoption"* — descriptive, and the barriers are already known.

What survives review has three properties: **a named regulation with a commencement date, a comparison group created by the regulation itself, and an outcome measured in administrative data rather than opinion.** All three ideas below have all three. That is the whole selection rule.

Notice what this implies: the strongest innovation questions are usually **regulation questions**, not technology questions. Technology diffusion is hard to identify and everyone studies it. Regulatory interventions have dates, thresholds, and excluded groups — which is exactly what an econometrician needs.

---

# Tier 1 — the three I would pitch

## 1. Startup Acts: Africa copied a policy whose only credible evaluations are Italian

**Sub-theme:** enabling rules for innovation

### Problem statement (draft — 230 words, trim to fit)

> Since Tunisia passed the first African Startup Act in April 2018, at least eight African countries have enacted one — Tunisia, Senegal, Nigeria, Côte d'Ivoire, Ghana, Rwanda, Ethiopia and the DRC — with Kenya, Egypt, Morocco, Algeria, Tanzania and Zambia drafting. The instrument is broadly identical everywhere: a state-conferred "startup label" awarded on application, carrying tax relief, procurement access, regulatory fast-tracking and sometimes founder stipends. It is now among the most widely copied industrial policies on the continent.
>
> The evidence base for it is Italian. The Italian Startup Act of 2012 has been evaluated repeatedly and carefully — conditional difference-in-differences on equity, debt and employment [1], the interaction between loan guarantees and equity incentives [5], an independent OECD assessment [8], and the effect on founder human capital composition [9] — and finds broadly positive effects in a high-income economy with deep capital markets and near-universal firm registration.
>
> No African Startup Act has been evaluated with a credible counterfactual. The published African work is a ten-expert fuzzy-DEMATEL exercise on implementation barriers in Nigeria [2], a 120-respondent perceptions survey [4], and a descriptive count of registrations in Algeria [3]. Reviews consistently note that the number of ventures actually labelled falls well below programme targets.
>
> This matters because the labelling process generates its own counterfactual: applicants are approved or rejected, and rejected applicants are the natural comparison group. That comparison has never been made anywhere in Africa.

### The gap, precisely

Not "no study of Startup Acts in Africa" — that is a coverage claim. The gap is: **an instrument designed for and validated in a high-income institutional setting has been transplanted continent-wide with no test of whether its mechanism survives the transplant.** In Italy the binding constraint was access to equity and debt in a market where both exist. If the binding constraint in Accra or Dakar is something else — demand, electricity, payment latency, a founder's outside option — the same statute produces a label and no effect.

### Questions

1. Do labelled firms outperform rejected applicants on survival, employment, capital raised and revenue, over 2–4 years?
2. Which components of the bundle carry the effect — tax relief, procurement preference, or the *signal* the label sends to investors? (The signalling channel is the interesting one, and it is the cheapest component to expand.)
3. Who applies and who is approved? If the label accrues to founders who already had capital and networks, the policy is redistributive rather than catalytic — a finding that would change how the next six countries write theirs.

### Identification

Compare **labelled firms to rejected applicants**, controlling for application-round fixed effects. Where the awarding body scores applications, exploit the approval threshold in a regression discontinuity — the cleanest version available and worth asking for explicitly. Where scores are unavailable, fall back on conditional DiD against matched non-applicants using registry data, as the Italian literature does [1], [7].

**The single highest-value thing you can do before submitting is establish whether the awarding agency will share the rejected-applicant list.** With it, this is a strong causal paper. Without it, it is a descriptive one. Ask now.

### Data

Public label registries (several are searchable online); the national company registry for survival, filings and employment; Crunchbase and Africa-focused deal trackers for funding events; a short founder survey (n≈150 across labelled and rejected) for revenue and the signalling mechanism, which registries will not capture.

### Output

The first counterfactual evaluation of an African Startup Act, plus a design note on which components to keep. Audience: the six countries currently drafting, plus the AU's startup-ecosystem workstream. **Portable to Ghana, Senegal, Nigeria, Côte d'Ivoire or Tunisia** — pick by data access, not by interest.

### Feasibility

High if the registry cooperates; medium if not. Cost is concentrated in the founder survey and an RA for registry matching. **Fits $15,000.**

---

## 2. Kenya's 18% commission cap: a theory literature that has never met its data

**Sub-theme:** fair competition · platform regulation · jobs

### Problem statement (draft — 240 words)

> On 20 June 2022 Kenya's National Transport and Safety Authority published regulations capping at 18% the commission that ride-hailing platforms may charge drivers, with compliance required by 22 September 2022. Uber had been charging around 25%, so the cap required roughly a 28% cut in its take rate; Uber petitioned the High Court to nullify the rule, arguing it would deter investment. Four years on, drivers continue to protest incomplete enforcement, and Kenya is now debating both a minimum fare and a Competition (Amendment) Bill that would give a regulator standing over how platforms treat drivers.
>
> Commission caps are among the most heavily theorised instruments in the platform-economics literature — and among the least measured. Queueing-equilibrium modelling finds, contrary to standard competitive intuition, that a floor under driver earnings induces platforms to hire *more* drivers and offer *more* rides, leaving both drivers and passengers better off, because it curbs platform labour-market power [2]. Related models find a commission cap achieves the second-best outcome and identify platform market power, not congestion, as the regulator's central problem [9], while work on delivery platforms warns that an overly aggressive cap flips the sign and makes everyone worse off [6]. These are sharp, competing, testable predictions.
>
> They have never been tested against an actual commission cap. Meanwhile African platform-work research is overwhelmingly qualitative — interview studies of 20 to 34 drivers [3], [4], [7]. Kenya ran the experiment in 2022 and nobody has measured it.

### The gap, precisely

**A theoretical literature with a non-obvious, sign-ambiguous prediction, an African jurisdiction that ran the intervention, and no empirical test anywhere in the world.** That is about as good as a gap gets, and it is why this idea travels beyond Africa: you would be answering a question the transport-economics field has been arguing about in models since 2019.

The contested enforcement is a feature, not a problem. Partial compliance across platforms and over time generates variation in effective take rates that a clean, fully-enforced cap would not.

### Questions

1. Did the cap raise driver take-home earnings per hour, or did platforms recover the margin through fare cuts, altered matching, surge changes, or new fee categories?
2. Did driver supply and ride volume rise, as the wage-floor models predict [2], or fall, as the platforms argued?
3. Did passenger fares and wait times move, and in which direction? (Both models and industry predict opposite signs; this is the discriminating test.)
4. Did enforcement gaps across platforms and periods produce measurable differences in driver outcomes?

### Identification

Difference-in-differences with Kenya treated and a comparable un-capped market as control — Kampala, Dar es Salaam, Lagos or Accra, choosing on pre-trend fit. Event study around both the June 2022 publication and the September 2022 compliance date, which separates announcement from enforcement. A within-Kenya design across platforms with differing compliance. Take-rate variation over time as continuous treatment.

### Data

Driver trip-and-earnings records collected directly from drivers (screenshot/statement extraction with consent) — this is the standard approach and it works; one recent Lagos/Accra study assembled roughly 15,000 ride records this way [1]. Target n≈150–200 drivers with retrospective records spanning 2022, recruited through driver associations, which also gives you the enforcement history. Supplement with app-side fare scraping for the passenger side, and 15 interviews with regulator, platform and association staff.

### Output

The first empirical estimate of a ride-hailing commission cap's incidence, splitting the effect between drivers, passengers and the platform. Immediate audience: Kenya's live minimum-fare and Competition Bill debate; the Lagos, Accra, Kampala and Johannesburg regulators considering the same instrument.

### Feasibility

Medium-high. The binding constraint is driver recruitment and record extraction, which is exactly what fieldwork money buys. Retrospective records are noisier than platform data — say so in your risk section and pre-commit to a validation subsample. **Portable:** if Kenyan access is hard, Lagos State's ride-hailing regime is a second case, though less clean.

### One honest caution

Platforms will not give you data and may discourage driver participation. Budget for association-mediated recruitment, get ethics approval early, and do not build the design on any assumption of platform cooperation.

---

## 3. Kenya's digital credit regulations: a reform that exempted most of the market

**Sub-theme:** data governance · consumer protection · inclusion

### Problem statement (draft — 235 words)

> Digital credit reaches an extraordinary share of Kenyan adults, and its costs are borne unevenly: representative data show digital credit accounts for **90% of all credit-bureau blacklistings**, driven both by higher default and by a higher probability that a digital default results in listing at all [9]. In response, Kenya passed the CBK (Amendment) Act 2021 and the Digital Credit Providers Regulations of March 2022, requiring licensing and supervision of previously unregulated lenders.
>
> The regulation's design contains an unusual feature. Political-economy analysis of its passage shows the Act applied almost exclusively to standalone unregulated lenders and **left untouched the bank–mobile-network-operator partnerships that dominate the market**, an outcome attributed to the structural power of the incumbent telecom and its partner banks [1]. Subsequent work is qualitative: interviews documenting continued aggressive collection, blacklisting and privacy violations [2], and an audit of thirty lending apps finding regulation had not measurably changed permission requests or privacy policies [3].
>
> So the market was split by statute into a regulated segment and an exempt segment serving overlapping borrowers with similar products. **No study has used that split to estimate what the regulation did to borrowers** — whether it reduced over-indebtedness and blacklisting, or simply pushed borrowers from licensed lenders toward the exempt incumbents. Nigeria, Tanzania and Uganda are drafting their own versions on the explicit premise that Kenya's model works.

### The gap, precisely

**The regulation created its own control group and nobody has used it.** The existing literature is legal analysis, political economy, and qualitative interviewing — no quantitative borrower-outcome evaluation exists. And the policy question is not academic: at least three countries are copying an instrument whose incidence is unmeasured.

### Questions

1. Did borrower outcomes — default, blacklisting, effective APR, loan size — diverge between the regulated and exempt segments after March 2022?
2. Did borrowing *migrate* between segments, and if so did borrowers move toward better or worse terms?
3. Was there an extensive-margin cost — did marginal borrowers lose access entirely, and who were they?

### Identification

Difference-in-differences: regulated DCPs versus exempt bank–MNO products, before and after the 2022 commencement. Borrower-level analysis where credit-bureau or lender data is obtainable; otherwise a retrospective borrower survey with product-level histories. Complement with the app-audit approach [3] extended over time as an independent compliance measure.

### Data

Credit reference bureau aggregates; CBK licensing register (defines treatment precisely, with dates); FinAccess household survey waves straddling 2022 — the workhorse and freely available; a borrower survey n≈500 for the migration question, which no secondary source will answer.

### Output

The first quantitative evaluation of African digital-credit regulation, with a direct recommendation on scope: whether exempting incumbent bank–MNO products undermines the whole instrument. Audience: CBN, Bank of Tanzania, Bank of Uganda, all currently drafting.

### Feasibility

Medium-high. FinAccess alone supports a credible first pass; bureau data would make it definitive. **Portable to Nigeria** (the 2022 loan-app crackdown is an equally dated intervention with a cleaner on/off structure).

---

# Tier 2 — five more worth developing

**4. Did mandated interoperability lower the price of a transaction?**
Interoperability is the flagship African DPI intervention and its competitive effects are barely measured. The nearest study examines agent-level non-exclusivity in Tanzania using 2017 survey data and finds only minor market-share effects [Grzybowski et al. 2023]; comparative work on Kenya and Uganda analyses gatekeeper conduct institutionally rather than estimating prices [Paelo & Roberts 2022]; and a major survey of the field lists market structure and pricing as open questions [Ahmad et al. 2020]. Build a corridor-level fee series by mystery-shopping quoted prices across providers before and after an interoperability mandate. **Gap is real but partially adjacent — check the newest working papers before committing.**

**5. Data protection law: the enforcement gap, measured.**
Most African states now have data protection statutes and authorities. Almost nothing is known about whether they function. Construct a de jure/de facto index — statutory powers versus actual staffing, budget, cases opened, decisions issued, fines levied and collected — across 20+ countries, and test what predicts the gap. Cheap, entirely from public records and FOI-type requests, produces a reusable public good, and directly serves the "data governance" leg of ACET's theme, which is the leg with the least evidence behind it.

**6. Digital payments as a tax tripwire.**
Governments want merchants to digitise *and* to register for tax, and use the same rails for both. If merchants read digital acceptance as a tax tripwire, the two goals fight each other. Survey merchants on perceived tax visibility, match to actual registration status, and exploit any threshold or enforcement drive as variation. Explains sluggish merchant-payment adoption from the merchant's own optimisation rather than from "low awareness."

**7. Does putting a permit online reduce the bribe, or relocate it?**
E-government and corruption is studied mostly through cross-country index regressions. A within-country, service-level design — one licence or permit, digitised on a known date, with user-reported informal payments before and after — is far more credible and has barely been done in Africa. Add a mystery-shopper component for hard measurement.

**8. The AI supply chain's labour market.**
Data annotation and content moderation work is now a real African export sector and is documented almost entirely through journalism and qualitative sociology. Estimate earnings, hours, contract structure, task-price trends over time, and whether the work builds transferable skill or is a dead end. First-mover advantage on measurement in a sector everyone is arguing about.

---

# Ranking

| # | Idea | Gap strength | Identification | Feasibility | Data risk |
|---|---|---|---|---|---|
| 2 | Ride-hailing commission cap | **Very high** — untested theory | Strong (DiD + event study) | Medium-high | Medium |
| 1 | Startup Act evaluation | **Very high** — transplant untested | Strong *if* rejected list obtainable | High | Medium |
| 3 | Digital credit regulation | High | Strong (statutory control group) | Medium-high | Medium |
| 5 | Data protection enforcement gap | High | Descriptive by design | **Very high** | Low |
| 4 | Interoperability and prices | Medium-high | Moderate | High | Low |
| 6 | Payments as tax tripwire | Medium-high | Moderate | Medium | Medium |
| 7 | E-government and informal payments | Medium | Strong if dated rollout | Medium | Medium |
| 8 | AI supply chain labour | Medium (measurement-first) | Weak | Medium | High |

**Pitch idea 2 if you want the paper with the highest ceiling.** It answers a question an international literature is actively arguing about in models, using an African policy experiment, which is the rare configuration where African data addresses a global question rather than a local one. Reviewers notice that.

**Pitch idea 1 if you want the highest probability of a clean, finished, policy-adopted output.** Six governments are drafting this statute right now; the counterfactual is built into the application process; and the deliverable lands while the decisions are still open.

**Pitch idea 5 if your constraint is money or field access.** It is the only one here that a careful researcher could largely complete from public records, which makes the budget go to depth rather than logistics.

---

# Before you write the note

1. **Verify every policy fact yourself** — commencement dates, cap percentages, licensing thresholds, which entities were exempt. Get them from the gazette, the regulator's own notice, or the statute. Regulations get amended and secondary coverage lags.
2. **Send the access email this week.** For idea 1, the awarding agency and the rejected-applicant list. For idea 2, a driver association. For idea 3, the credit bureau or CBK. A named contact who has replied converts your feasibility section from hope to plan, and it is the section reviewers use to predict whether you will actually finish.
3. **Re-run the literature search for your country and outcome.** These gaps were verified in August 2026. "No study has" is the one sentence a reviewer will personally check.
4. **Pick one.** All three Tier-1 ideas are twelve-month projects only if they are the *only* project.

---

## References

**Startup Acts (idea 1)**
- [The Italian Start Up Act: a microeconometric program evaluation](https://consensus.app/papers/details/4b27f4ede287582b9b452d526b74b2cf/) — Biancalani et al., 2021, *Small Business Economics*
- [Entrepreneurship policy and the financing of young innovative companies: Evidence from the Italian Startup Act](https://consensus.app/papers/details/1f3db8c6baa055f48674fa571dc11d27/) — Giraudo et al., 2019, *Research Policy*
- [The evaluation of the Italian "Start-up Act"](https://consensus.app/papers/details/157dc0289ae2570781bda31091045f9c/) — Menon et al., 2018, OECD
- [Industrial policy, innovative entrepreneurship, and the human capital of founders](https://consensus.app/papers/details/4550f375e82d5436a51431ad6f4da1f6/) — Grilli et al., 2022, *Small Business Economics*
- [Bridging the policy design and implementation gap in Nigeria's startup ecosystem](https://consensus.app/papers/details/511cdabf2848501bb2b9a494f5ac7d4a/) — Muhammad et al., 2026 — the African state of the art, and it is ten experts
- [Startup Label and entrepreneurial ecosystem development in Algeria](https://consensus.app/papers/details/7d176ee165555096a7b19b4b0b63281f/) — Almi et al., 2026

**Platform regulation (idea 2)**
- [Regulating TNCs: Should Uber and Lyft set their own rules?](https://consensus.app/papers/details/87f968c29a8a544b8df25edc6d769aef/) — Li et al., 2019, *Transportation Research Part B* — **the prediction you would be testing**
- [Regulating ridesourcing services with product differentiation and congestion externality](https://consensus.app/papers/details/86fee8e6852c56ddad2ca1b9ebb83281/) — Vignon et al., 2021, *Transportation Research Part C*
- [An economic analysis of on-demand food delivery platforms](https://consensus.app/papers/details/8a92066519c75029b2515ea507c5c370/) — Liu et al., 2023 — the over-aggressive-cap counter-case
- [Algorithmic exploitation in the gig economy: a living wage analysis of ride-hailing platforms in Lagos and Accra](https://consensus.app/papers/details/1d7ec705f6b054ad8895d3b2ef25ed34/) — Dzreke et al., 2025 — the data-collection template
- [Locked in, logged out: pandemic and ride-hailing in South Africa and Kenya](https://consensus.app/papers/details/e20a1585e3cb54d399b43df23b14e7c4/) — Anwar & Graham, 2022, *Journal of Modern African Studies*
- [Navigating platform work through solidarity and hustling: ride-hailing drivers in Nairobi](https://consensus.app/papers/details/3963eb65c760578fb734a52ff0403659/) — Ekdale et al., 2024

**Digital credit (idea 3)**
- [Digital credit providers, regulatory frameworks, and structural power: digital microcredit regulation in Kenya](https://consensus.app/papers/details/e002b8b76ed154229ce7d3c42d846178/) — Upadhyaya et al., 2025, *Finance and Society* — **the exemption finding your design rests on**
- [Promises and pitfalls of digital credit: Empirical evidence from Kenya](https://consensus.app/papers/details/7479115fb7f95c1e88f023b74a845198/) — Johnen et al., 2021, *PLoS ONE* — the 90%-of-blacklistings baseline
- [Fintech for the poor? Regulating the Kenyan digital credit market and its impact on borrowers](https://consensus.app/papers/details/047c3a04520b5e3e945af587e4331d2c/) — Kim et al., 2025, *Development Studies Research*
- [A License to Prey: digital loan app regulations, permission requests and privacy policies in Kenya](https://consensus.app/papers/details/09e75aa106615a5ca4a60a34bb3846dc/) — Morales Flores et al., 2024, IEEE ISTAS

**Interoperability and competition (idea 4)**
- [Competition and Regulation of Mobile Money Platforms in Africa: Kenya and Uganda](https://consensus.app/papers/details/e5a196769d0359f58efba085e1990acf/) — Paelo & Roberts, 2022, *Review of Industrial Organization*
- [Interoperability Between Mobile Money Agents and Choice of Network Operators: Tanzania](https://consensus.app/papers/details/8c34a29d73d35e9ab57615711c047f8d/) — Grzybowski et al., 2023, *Review of Network Economics*
- [Mobile money, financial inclusion and development: a review with reference to African experience](https://consensus.app/papers/details/61f981dbb7355cf986390b504384271e/) — Ahmad et al., 2020, *Journal of Economic Surveys*

*Policy facts on Kenya's TNC regulations and African Startup Acts verified against public reporting, August 2026; confirm against the gazette before citing. Literature verified via Consensus, August 2026.*
