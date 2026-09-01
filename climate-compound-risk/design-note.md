# Design Note

Internal. Records why the design is what it is, what it deliberately does not do, and where it can fail.

## Why this framing and not the obvious one

The obvious proposal in this space is "an integrated framework combining compound hazard footprints, socio-economic vulnerability and observed losses." That framework already exists. CLIMADA does global multi-hazard risk with physically consistent drivers and explicit recovery assumptions between events (Stalhandske et al. 2024), and publishes a Bayesian impact function calibration module (Riedel et al. 2024). Proposing to build it would be proposing to rebuild maintained open-source software.

What does not exist is an examination of whether the loss record those functions are calibrated on can bear the weight placed on it. That is the contribution.

## The argument in one line

Missingness in reported losses is predicted by country income (Jones et al. 2022). Impact functions are fitted to reported losses. Therefore fitted vulnerability is biased downward where income is low, and the bias propagates into every downstream estimate. Compound events are the worst case because losses are frequently not separable by peril within one event (Kron et al. 2012), so a drought-then-flood sequence enters as a single figure.

## The methodological crux: MAR or MNAR

This decides the whole analysis and the proposal should not pretend otherwise.

- **If missingness depends only on observables** (income, year, hazard type, all of which Jones et al. show are predictive), then inverse probability weighting and multiple imputation are valid and straightforward.
- **If it also depends on unobservables** (state incentive to suppress or inflate, local reporting norms, conflict), reweighting is not enough. Importance weighting corrects the covariate distribution, not the conditional bias E[y|x, selected] not equal to E[y|x]. Simulation work shows IPW with oracle propensities still fails badly under selection on unobservables, while a Heckman-type selection model restores calibration **only when a valid exclusion restriction exists** (Howe 2026). In low-income settings with missing outcomes, complete-case analysis and MICE showed large systematic bias while Heckman-type models did not (Koné et al. 2019).

Heckman is not a free fix. It is widely misapplied, the exclusion restriction is fundamental, and collinearity between the correction term and the substantive regressors is a recurring failure (Bushway et al. 2007, 616 citations).

**Therefore: report both estimators and the diagnostic showing where they diverge.** The divergence is itself informative, and claiming one is correct without testing the restriction would be the mistake a reviewer catches.

## Exclusion restrictions: the single hardest requirement

A valid instrument affects whether a loss is recorded but not its magnitude. Candidates, in order of plausibility:

1. **National statistical capacity** (World Bank Statistical Performance Indicators). Plausibly affects recording, not the physical damage a hazard causes. Weakness: capacity correlates with development, which correlates with vulnerability. Needs an argument that the residual channel is recording only.
2. **Participation in a national subnational loss database** (DesInventar country adoption and start year). Adoption is largely a function of programme rollout and donor timing, which is close to exogenous to any particular event's severity.
3. **Media density or press freedom in the country-year.** Affects visibility of an event. Weakness: may correlate with governance quality, which affects response and therefore losses.
4. **Distance of the affected admin unit from the capital.** Affects reporting reach. Weakness: may also affect response speed and therefore actual damage.

Candidate 2 is the strongest because adoption timing is plausibly unrelated to individual event severity. Testing the restriction is a month 5 task and the proposal should say so.

## What the design deliberately does not do

- **It does not build a new hazard model.** Footprints come from existing reanalysis and satellite products.
- **It does not build a new vulnerability index.** The social vulnerability literature is 81 per cent index replication with 76 per cent lacking any validation (Painter et al. 2024). Adding another would be noise. Poverty and wealth surfaces enter as covariates in the calibration, not as a composite score.
- **It does not attempt compound event frequency estimation.** That needs large ensembles (Bevacqua et al. 2023) and is beyond a twelve-month desk study. Footprints are constructed for observed historical sequences, which is what calibration requires anyway.
- **It does not claim causal identification of finance allocation.** The allocation link is a translation exercise: given the estimated bias, what does it imply for figures allocated on reported losses. Claiming to estimate the causal effect of reporting on disbursement would be a different and much larger study.

## Feasibility risk, and the lesson from the last proposal

**The binding uncertainty is DesInventar coverage of African countries.** The whole subnational arm depends on how many African countries have DesInventar databases with usable economic loss fields and adequate time span. If the overlap is a handful of countries, the design narrows to those, the income-gradient test loses power, and the study becomes a two or three country comparison rather than a regional estimate.

Verify this before submitting. It is the direct analogue of the Ahotor oven population question on the other proposal, where a design assumed 300 adopters against a documented 36.

Fallback if coverage is thin: run the bias estimation at country level on EM-DAT alone across all African countries, using the income gradient in missingness as the identifying variation, and use the DesInventar countries as a validation subsample rather than the main analysis.

## Scoop risk

**Wagenaar et al. (2020, *Risk Analysis*)** applied sample selection bias correction to data-driven damage models, with European flood and Philippine typhoon case studies, reducing mean bias error by over 30 per cent. This is the closest prior work and must be cited.

Differentiate on three points. They correct bias in **transferring** a model to a new context, which is covariate shift; this corrects bias inside the loss record itself, which is outcome-selection. They do not link to allocation. And they do not treat compound sequences.

**Galloway et al. (2025)** used catastrophe models for loss and damage in Malawi, Vietnam and the Philippines with a relative wealth metric. Single hazard, wealth proxy rather than calibrated correction. Cite and differentiate.

## Theme fit, stated honestly

This is a weaker thematic fit for Green Industrial Transformation than the food processing proposal. ACET describes that theme as climate-smart, circular, value-adding production and resilient supply chains, **aligning finance**, technology and skills. The finance alignment clause carries this study, and the resilience framing helps, but a reviewer sorting strictly on production and value chains may not see it.

The alternative is Innovation and Digital Policy, which ACET describes as covering enabling rules and digital public infrastructure for **data governance** and inclusion. A study about systematic bias in the public data infrastructure underpinning climate finance is a data governance study. That fit is arguably cleaner, and worth a decision before submission.
