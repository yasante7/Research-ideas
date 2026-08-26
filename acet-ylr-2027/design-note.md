# Design Note — Internal Working Document

Not for submission. This records the reasoning behind the concept note so the design can be defended in interview or revised under new constraints.

## Why not the factorial RCT

The originating advice proposed a five-arm factorial trial distributing solar refrigeration, dryers and processing equipment (control / labour-saving / productive-use / combined bundle / combined-plus). Two constraints kill it here:

- **Budget.** A single solar cold-storage unit costs thousands of dollars. Powering five arms would put the study well north of USD 300,000 against a USD 15,000 ceiling.
- **Duration.** The proposed causal chain — adoption → sustained use → productive use → livelihood transition → structural change — takes two to three years to materialise. The grant runs twelve months, with realistically one round of collection in months 4–6.

The five-arm design is the right study for a large grant. It is not the study this call can fund.

## Why "conditional on adoption" is the right pivot

The sharpest question in the source memo was *why do some adopters convert to productive use while others do not*. That question turns out to be both the most original and the most affordable, because it changes what has to be identified.

A standard adopters-vs-non-adopters comparison must defeat selection into adoption — the hardest problem in the literature and unbeatable on a cross-section with no baseline. Sampling **only adopters** and comparing converters against non-converters holds adoption constant and sidesteps that problem entirely.

This does not make conversion exogenous. The same unobservables — entrepreneurial ability, market access, household bargaining position — plausibly drive both adoption and conversion. The concept note therefore claims a **measurement and diagnostic** contribution, not an impact estimate. That claim is honest, defensible, and still novel: no dataset currently reports a conversion rate.

## The three strategies, ranked by strength

| Strategy | What it identifies | Strength | Cost |
|---|---|---|---|
| Discrete choice experiment | Which complementary input drives intended expansion | **Clean causal** (randomised choice sets) | ~0 — survey modules |
| Retrospective event study | Within-enterprise change around adoption timing | Moderate — recall bias, but enterprise FE | ~0 — recall modules |
| Converter/non-converter | Correlates of conversion | Descriptive/diagnostic | ~0 — sample design |

The DCE is what makes this a research design rather than a survey. It is experimental, it costs nothing beyond instrument development, and it produces a crisp, quotable policy result: the ranked marginal willingness to expand production per complementary input.

## Recall design (guarding the event study)

Retrospective recall is the weak point. Mitigate by restricting recall outcomes to **discrete, salient, infrequent** events rather than continuous quantities:

- Months operated in each of the last three calendar years
- Market channels used (own community / district market / urban trader / exporter or aggregator) — a bounded categorical
- Number of paid workers hired, by year
- Equipment functioning status and any breakdown episodes, with dates
- Adoption date anchored to a locally salient event calendar

Do **not** rely on recalled revenue, output volume, or input costs beyond the current season. Those go in the current-period module only, and the productivity outcome is measured contemporaneously.

## Sampling frame

No existing dataset means the frame has to be constructed. Two sources, combined:

1. **Programme and distributor client lists** — fisheries programmes distributing Ahotor ovens, solar distributors, processing cooperatives, district agriculture offices. This is the critical dependency: secure at least one written commitment before submission if possible, and name it in the concept note if secured.
2. **Cluster enumeration** — a listing sweep of processing clusters (landing beaches, gari processing sites, shea centres) to capture off-list adopters and to draw the non-adopter comparison group from the same clusters.

Adoption dates should span 2022–2026 to give the event study variation. Check this when assembling the frame; if adoption is bunched in a single year, the event study collapses and the DCE carries the design.

## Known weaknesses to pre-empt

- **Survivorship in the frame.** Enterprises that adopted and then failed may be absent from client lists. Ask surviving respondents about known exits in their cluster, and treat the conversion rate as an upper bound.
- **Conversion is endogenous.** Stated plainly in the note rather than hidden.
- **Stated-preference gap.** The DCE measures intended expansion, not realised expansion. Frame it as constraint ranking, not effect size.
- **Two chains, four regions** is ambitious on the budget. If costs run over, drop the Northern shea component first — it is the most expensive to reach and the least connected to the export-market mechanism.

## Fallback if the frame cannot be secured

If no programme or distributor will share a client list, narrow to coastal fish processing only, where Ahotor oven adopters are geographically concentrated in identifiable landing sites and can be found by cluster enumeration alone. Sample drops to roughly 300, the shea and cassava comparison is lost, and the minimum detectable effect widens to about 0.42 SD — still viable, and cheaper.
