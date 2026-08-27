# Design Note, Internal Working Document

Not for submission. This records the reasoning behind the concept note so the design can be defended in interview or revised under new constraints.

## Why not the factorial RCT

The originating advice proposed a five-arm factorial trial distributing solar refrigeration, dryers and processing equipment (control / labour-saving / productive-use / combined bundle / combined-plus). Two constraints kill it here:

- **Budget.** A single solar cold-storage unit costs thousands of dollars. Powering five arms would put the study well north of USD 300,000 against a USD 15,000 ceiling.
- **Duration.** The proposed causal chain, adoption → sustained use → productive use → livelihood transition → structural change, takes two to three years to materialise. The grant runs twelve months, with realistically one round of collection in months 4–6.

The five-arm design is the right study for a large grant. It is not the study this call can fund.

## Why "conditional on adoption" is the right pivot

The sharpest question in the source memo was *why do some adopters convert to productive use while others do not*. That question turns out to be both the most original and the most affordable, because it changes what has to be identified.

A standard adopters-vs-non-adopters comparison must defeat selection into adoption, the hardest problem in the literature and unbeatable on a cross-section with no baseline. Sampling **only adopters** and comparing converters against non-converters holds adoption constant and sidesteps that problem entirely.

This does not make conversion exogenous. The same unobservables, entrepreneurial ability, market access, household bargaining position, plausibly drive both adoption and conversion. The concept note therefore claims a **measurement and diagnostic** contribution, not an impact estimate. That claim is honest, defensible, and still novel: no dataset currently reports a conversion rate.

## The three strategies, ranked by strength

| Strategy | What it identifies | Strength | Cost |
|---|---|---|---|
| Discrete choice experiment | Which complementary input drives intended expansion | **Clean causal** (randomised choice sets) | ~0, survey modules |
| Retrospective event study | Within-enterprise change around adoption timing | Moderate, recall bias, but enterprise FE | ~0, recall modules |
| Converter/non-converter | Correlates of conversion | Descriptive/diagnostic | ~0, sample design |

The DCE is what makes this a research design rather than a survey. It is experimental, it costs nothing beyond instrument development, and it produces a crisp, quotable policy result: the ranked marginal willingness to expand production per complementary input.

## Verified use (added after the literature review)

Self-reported use cannot carry the headline measure. Hing et al. (2023) compared sensors against surveys for cookstoves in rural India and found 28-46% of households over-reporting, with surveys failing to detect long-term dis-adoption entirely, including among households that had bought the stove with their own money. Some households with zero sensor-recorded use still reported fuel savings.

Sensors are out of budget. The affordable substitute is enumerator verification at the visit:

- Equipment present, and functional on inspection
- Physical evidence of recent use, ash and residue and product on racks for ovens; wear, connected load and charge-controller state for solar systems
- Photograph of the equipment in situ
- Breakdown history with dates, and whether repair was attempted and why not

Report **both** the self-reported and the verified measure, and the discrepancy between them. That discrepancy extends Hing et al. from household stoves to productive assets in an African setting and is publishable independently of the main result.

## Recall design (guarding the event study)

Retrospective recall is the weak point. Mitigate by restricting recall outcomes to **discrete, salient, infrequent** events rather than continuous quantities:

- Months operated in each of the last three calendar years
- Market channels used (own community / district market / urban trader / exporter or aggregator), a bounded categorical
- Number of paid workers hired, by year
- Equipment functioning status and any breakdown episodes, with dates
- Adoption date anchored to a locally salient event calendar

Do **not** rely on recalled revenue, output volume, or input costs beyond the current season. Those go in the current-period module only, and the productivity outcome is measured contemporaneously.

## Sampling frame

No existing dataset means the frame has to be constructed. Two sources, combined:

1. **Programme and distributor client lists.** For the fish component the named holders are CEWEFIA in Elmina, DAA, Daasgift Quality Foundation, Hen Mpoano in Takoradi, Friends of the Nation and SNV Ghana, each of which has post-harvest focal persons who mobilised the original oven hosts. Contact details are published in the front matter of the SFMP report. For solar, pay-as-you-go providers and the Association of Ghana Solar Industries. This is the critical dependency: secure at least one written commitment before submission if possible, and name it in the concept note.
2. **Cluster enumeration**, a listing sweep of processing clusters (landing beaches, gari processing sites, shea centres) to capture off-list adopters and to draw the non-adopter comparison group from the same clusters.

Adoption dates should span 2022–2026 to give the event study variation. Check this when assembling the frame; if adoption is bunched in a single year, the event study collapses and the DCE carries the design.

## What the deep search corrected (second pass)

The first literature pass fixed the framing. The deep pass found three errors in the design itself.

**1. The primary outcome was mismeasured.** de Mel, McKenzie & Woodruff (2009, *JDE*) validated enterprise survey instruments against observers visiting firms 15-16 times a month. Firms underreport revenues by roughly 30%, account diaries move reported revenues and expenses but not profits, and **asking profit directly is more accurate than detailed revenue-minus-expense elicitation**. "Value added per labour hour" required exactly the noisier instrument. Profit is now elicited directly as the primary measure; value added is constructed from physical quantities (kg processed, fuel used, price received) as a secondary check, since processors recall quantities better than money.

**2. Energy outcomes in levels would have been read backwards.** Firm-level rebound combines factor substitution with output expansion, and fuel rebound has been estimated at 24-80% in energy-intensive sectors. A field experiment giving energy audits plus engineer support to Indian manufacturers found firms then used **more** energy, because energy complements other inputs. The Duke/Shell Foundation SunCulture evaluation found solar-pump adopters increased **hired labour**, expanding production, not just reallocating time. So if conversion succeeds here, output expands and total fuelwood spend may rise. Energy is now specified as **cost per kilogramme processed**. A rise in the level alongside expansion is success, and the first draft would have scored it as failure.

**3. The qualitative work was sequenced backwards.** DCE methodology guidance for low-income settings is explicit that secondary literature can suggest attributes but primary formative research is almost always needed to validate them. All 40 interviews sat after the survey. Now split: ~15 formative interviews in M3 to validate and price the attributes, ~25 explanatory interviews in M6.

It also strengthened three things.

**Certification is the conversion pathway.** Ghanaian fisheries policy promotes higher-value market access through hygiene certification, and Chorkor ovens exceed EU PAH limits by seven to ten times while Ahotor ovens cut them. That gives a concrete, measurable chain, oven, PAH, certification, buyer type, instead of generic "market access", and it is a value-chain argument, which is what the theme rewards.

**The sampling frame has named targets.** PAYGO providers (PEG, ZOLA Electric) hold digital client records with installation dates and payment histories, precisely the adoption timing the event study needs. Also: the Association of Ghana Solar Industries, Apex Bank via GEDAP appliance financing, and SNV/USAID Ahotor dissemination records by landing site.

**A theoretical home.** Allcott & Greenstone (2012) on the energy-efficiency gap places the study in mainstream economics rather than only in energy access, and supplies the vocabulary for why conversion fails.

## What the first pass added

Full review in `literature.md`. Four changes it forced:

1. **The thesis is not novel, the magnitude is.** Pueyo et al. (2018), Pelz et al. (2021) and the Aarakit et al. (2024) systematic review have all established that energy access alone underdelivers for enterprises. Claiming "green technology is not enough" as a finding would read as not knowing the field. The contribution is the measured conversion rate and the constraint ranking.
2. **There is a falsifiable prediction available.** Fafchamps et al. (2013), in urban Ghana, found no gain for women's subsistence enterprises from either cash or in-kind grants, but growth for larger women-owned firms from in-kind capital only. That implies conversion is **non-linear in baseline enterprise scale**, testable directly, and it turns a descriptive study into a theory-testing one.
3. **A sharper gender mechanism than "norms".** Field et al. (2019) found women's returns were lower only where another household member also ran a business, capital was redirected, not badly used. One roster question measures it.
4. **The DCE attributes should each answer a documented finding**, not intuition: capital form (flypaper effect, Fafchamps et al. 2013), training (Berge et al. 2015), supervision (Blattman et al. 2016), after-sales service (Mekonnen et al. 2020, 80% of stove abandonment was breakage), market linkage (Pueyo et al. 2018).

## What the SNV performance evaluation changed (third pass)

Full extraction in `ahotor-baseline-evidence.md`. Avega and Tibu (2017) surveyed 30 of the 33 Ahotor oven hosts for SFMP and SNV. It is a monitoring report, not an evaluation of enterprise outcomes, which is the gap this study fills. Four corrections and one serious feasibility problem.

**1. The certification claim was overstated.** The note asserted that the oven establishes certification eligibility and opens export buyers. Measured PAH is 298 micrograms per kilogramme on the Chorkor and 59 on the Ahotor, against an EU limit of 12. The oven closes about 80 per cent of the distance to compliance and still leaves output five times over the limit. Certification is now framed as a question rather than an assumption, which is a stronger position: it is the technology-is-not-enough thesis with a number attached.

**2. The scale hypothesis was pointing the wrong way at the top.** Fafchamps implies conversion rises with scale. This report finds large processors cannot use the Ahotor because its capacity is too low, while the stated reason for non-use among small processors is lack of working capital to buy fish. The binding constraint therefore differs by scale, and conversion should be inverted-U rather than monotonic. This is now hypothesis 1.

**3. Stacking is the default, not an edge case.** 64 per cent still used the Chorkor and only 3 per cent had stopped; 25 of 30 owned both. The Chorkor takes 15 trays to the Ahotor's 10 and works better for hard smoking. Batch share by oven type, smoking mode and species is now a secondary outcome rather than a curiosity.

**4. Working capital is the leading candidate constraint.** The implementers recorded that 36 per cent of hosts had never used the oven, "the main reason being lack of capital to purchase fish". That is a prior the choice experiment should be powered to confirm or overturn, and it agrees with the Delphi consensus on finance in cold storage.

**The feasibility problem.** The oven database in the report lists roughly 36 units built to date across Volta, Central, Western and Ashanti. The design assumes 300 adopters. Unless dissemination scaled substantially after 2017, that sample does not exist. Verifying the current Ahotor population is now the first thing to do, ahead of everything else in this file.

**Two gains.** Appendix B is the full evaluation questionnaire and can be adapted rather than written from scratch. And the report establishes the physical units processors actually use, which is what the profit and value-added modules need: pans of fish, trays, bundles of fuelwood, soft against hard smoking cycles.

**One new measurement problem.** Processors mix output from both ovens before sale, so a price premium cannot be attributed to the Ahotor at the point of sale. Either capture price at batch level before mixing, or drop the premium and rely on quantity, cost and buyer type.

## Known weaknesses to pre-empt

- **Survivorship in the frame.** Enterprises that adopted and then failed may be absent from client lists. Ask surviving respondents about known exits in their cluster, and treat the conversion rate as an upper bound.
- **Conversion is endogenous.** Stated plainly in the note rather than hidden.
- **Stated-preference gap.** The DCE measures intended expansion, not realised expansion. Frame it as constraint ranking, not effect size.
- **Scoop risk.** Owusu-Sekyere et al. (2024, *Energy Policy*) ran 700 Nigerian MSMEs through propensity-score matching and found solar adoption associated with 23-27% higher monthly earnings. Same method family, adjacent country, two years old. Cite it and differentiate explicitly: they estimate adoption to earnings across general MSMEs; this measures adoption to conversion to value addition inside one value chain, and ranks what closes the gap.
- **Two chains, four regions** is ambitious on the budget. If costs run over, drop the Northern shea component first, it is the most expensive to reach and the least connected to the certification mechanism.
- **The case for narrowing to fish alone is now stronger.** Certification gives coastal processing a mechanism that cassava and shea cannot match, and a fish-only study is cheaper and tighter. The reason to keep the second chain is the **enterprise-scale variation** the non-linearity hypothesis needs, if the fish sample alone spans enough scale, drop cassava and shea and lose little.

## Fallback if the frame cannot be secured

If no programme or distributor will share a client list, narrow to coastal fish processing only, where Ahotor oven adopters are geographically concentrated in identifiable landing sites and can be found by cluster enumeration alone. Sample drops to roughly 300, the shea and cassava comparison is lost, and the minimum detectable effect widens to about 0.42 SD, still viable, and cheaper.

Note that enumeration alone loses **adoption dates**, which the event study depends on. Recover them by anchoring to a local event calendar during the interview, and expect the event study to be the weakest of the three strategies in that scenario, the choice experiment and the converter comparison then carry the design.
