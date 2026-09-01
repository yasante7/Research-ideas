# Compound Climate Extremes, Vulnerability and Observed Losses

A scan of where this field stands, what is already solved, and where the genuine opening is.

---

## The short version

Three literatures address this problem and none of them meet.

1. **Compound event science** characterises the hazard side well but almost always stops before impact.
2. **Catastrophe and impact modelling** calibrates vulnerability against losses but assumes single, independent hazards.
3. **Social vulnerability research** describes who is exposed but is rarely validated against observed outcomes.

The obvious move is to join them. The reason nobody has done it well for Africa is that the loss data needed to calibrate anything is missing, and missing in a way that is **correlated with vulnerability itself**. That is not a nuisance. It is a confound, and it is the most interesting thing in this space.

---

## 1. The hazard side is mature and has a settled vocabulary

Zscheischler et al. established the framework that everyone now uses. Their typology sorts compound events into four classes: **preconditioned**, where a climate-driven precondition aggravates a later hazard; **multivariate**, where several drivers coincide; **temporally compounding**, where a succession of hazards accumulates; and **spatially compounding**, where connected locations are hit at once and the aggregate is what matters. → [A typology of compound weather and climate events](https://consensus.app/papers/details/833a53b8ff6055ffa48911bb1d8a2be4/?utm_source=claude_desktop) (2020, *Nature Reviews Earth & Environment*, 1,370 citations)

The core argument for the whole field: traditional risk assessment considers one hazard at a time and therefore **underestimates risk**, because the processes causing extremes are dependent in space and time. → [Future climate risk from compound events](https://consensus.app/papers/details/16ef00e71dab5665af84cf7bf2c81bde/?utm_source=claude_desktop) (2018, *Nature Climate Change*, 2,110 citations). The underlying statistical demonstration is that hot and dry summers co-occur far more often than independent univariate statistics would imply. → [Dependence of drivers affects risks associated with compound events](https://consensus.app/papers/details/102459f3bd8d58cdbb06e10e6955c0fa/?utm_source=claude_desktop) (2017, *Science Advances*, 784 citations)

Practical guidance for each of the four types now exists, worked through case studies. → [Guidelines for Studying Diverse Types of Compound Weather and Climate Events](https://consensus.app/papers/details/9bdac747783f57f6b1cd62c250d59d4a/?utm_source=claude_desktop) (Bevacqua et al., 2021, *Earth's Future*). Global occurrence hotspots have been mapped across 27 hazard pairs. → [Global hotspots for the occurrence of compound events](https://consensus.app/papers/details/e2ec00c9f8c95dddad652be550d510f8/?utm_source=claude_desktop) (Ridder et al., 2020, *Nature Communications*)

**One hard methodological constraint.** Compound events are rare combinations, so robust frequency and attribution analysis needs a much larger sample than univariate extremes do. The recommended answer is Single Model Initial-condition Large Ensembles, providing hundreds to thousands of simulated years. → [Advancing research on compound weather and climate events via large ensemble model simulations](https://consensus.app/papers/details/34f1816534b659e2945949146b8b958f/?utm_source=claude_desktop) (Bevacqua et al., 2023, *Nature Communications*). Any proposal that promises compound frequency estimates from observational reanalysis alone will be challenged on this.

### The geographic gap is documented and it is the opening

A systematic review of 366 papers published between 2012 and 2022 found compound event research growing at 60 per cent a year, but concentrated in Europe, Asia and North America, with **significant gaps in Africa, South America and Oceania**. It explicitly recommends expanding into underrepresented regions and improving cross-disciplinary work on impacts. → [The growth in compound weather and climate event research in the decade since SREX](https://consensus.app/papers/details/b70a5baf6f5554fb8ec290a3b1dbfc20/?utm_source=claude_desktop) (Brett et al., 2025, *NHESS*)

This is a reviewed, citable statement that the gap exists. It is worth building on.

---

## 2. The impact side has the tooling, but it is single-hazard by construction

**CLIMADA** is the reference open-source platform: hazard, exposure and vulnerability combined into probabilistic impact, with an event-based approach that is globally consistent across resolutions. → [CLIMADA v1](https://consensus.app/papers/details/bcd39940fba556228e011cd8e75a8f95/?utm_source=claude_desktop) (Aznar-Siguan and Bresch, 2019, *GMD*). It has been extended for adaptation option appraisal under the Economics of Climate Adaptation methodology → [CLIMADA v1.4.1](https://consensus.app/papers/details/4baa0c4c630e5b578130315e37a8dbec/?utm_source=claude_desktop), and for global uncertainty and sensitivity analysis → [Uncertainty and sensitivity analysis in CLIMADA v3.1.0](https://consensus.app/papers/details/07e7833b237159d7921f68d0878c620e/?utm_source=claude_desktop) (Kropf et al., 2022, *GMD*).

That last paper contains a finding worth carrying: in dense regions such as cities the dominant source of uncertainty is the **impact function**, while in sparse regions it is the **exposure layer**. That tells you where to spend effort depending on the study area.

**Multi-hazard is already in CLIMADA.** A global framework combining river floods and tropical cyclones, driven by the same climate model realisations to keep them physically consistent, and incorporating assumptions about **recovery** between events. The headline: including common physical drivers and recovery "considerably alters" multi-hazard risk. → [Global multi-hazard risk assessment in a changing climate](https://consensus.app/papers/details/743bc018aff35804ad7d44f5837cf62e/?utm_source=claude_desktop) (Stalhandske et al., 2024, *Scientific Reports*)

This matters for positioning. Building a generic multi-hazard footprint framework would be reinventing something that exists and is maintained.

### Calibration against observed losses is where the real leverage is

The single most useful result for framing: assessing tropical cyclone risk globally with one impact function calibrated on the United States, which was standard practice, **biases simulated damage by as much as a factor of 36** in the north West Pacific. Fitting regional impact functions to reported damage fixes this. → [Regional tropical cyclone impact functions for globally consistent risk assessments](https://consensus.app/papers/details/b7ac0ad034db5664a597b8f9540f704e/?utm_source=claude_desktop) (Eberenz et al., 2020, *NHESS*)

A factor of 36 is a number that makes the case for regional calibration on its own. There is no equivalent African calibration for compound hazards.

The tooling for doing it is published: a CLIMADA submodule implementing Bayesian optimisation and other established calibration techniques against past hazard, exposure and impact data. → [A Module for Calibrating Impact Functions in CLIMADA](https://consensus.app/papers/details/cd61eb6c2cb45f989179619ddc45ab55/?utm_source=claude_desktop) (Riedel et al., 2024, *JOSS*)

### The key methodological hook: state dependence

Standard impact functions are memoryless. They map hazard intensity to damage as if the asset were undamaged beforehand. For compound and sequential events that is wrong, and the fix has a name. **State-dependent fragility functions** condition damage on pre-existing damage, allowing single-hazard vulnerability models to be assembled into a multi-risk chain and allowing losses to be disaggregated by peril. Applied to consecutive earthquake and tsunami in Lima, classical empirical functions **underestimated losses at lower magnitudes and substantially overestimated at higher ones** compared with the state-dependent treatment. → [Scenario-based multi-risk assessment from existing single-hazard vulnerability models](https://consensus.app/papers/details/cd07d18d686b5731b438dea9d47c2ee0/?utm_source=claude_desktop) (Gomez-Zapata et al., 2023, *NHESS*)

This is the concept that translates a compound hazard footprint into a compound impact. It is where a contribution would sit.

A parallel finding on the same theme: standard depth-damage functions, including those underpinning CLIMADA and the JRC models, treat flood damage as instantaneous in depth and ignore **duration**. Calibrating on 317,943 NFIP claims shows prolonged flooding increases structural damage by a factor of **2.6 at the same depth**. → [A Duration-Dependent Flood Depth-Damage Function](https://consensus.app/papers/details/9a66c4dd483b57bea46e5e78efacfcd7/?utm_source=claude_desktop) (Novikov et al., 2026, *Natural Hazards Research*)

Both results point the same way: **the vulnerability layer, not the hazard layer, is where compound events are being mis-modelled.**

### Closest existing work, and how to differentiate

Catastrophe models have already been demonstrated as tools for climate loss and damage quantification in Malawi, Vietnam and the Philippines, across residential buildings, crops and population, including a **relative wealth metric to bring in a social vulnerability dimension**, with a storylines framework for sampling deep uncertainty. → [Catastrophe risk models as quantitative tools for climate change loss and damage](https://consensus.app/papers/details/621f2fc6e069581eaf6ce08289d0dd52/?utm_source=claude_desktop) (Galloway et al., 2025)

This is the nearest thing to the proposed direction. It is single-hazard flood, not compound, and its vulnerability treatment is a wealth proxy rather than a calibrated social vulnerability layer. Both are differentiators, but the paper should be cited rather than discovered by a reviewer.

---

## 3. The vulnerability side is widely used and poorly validated

Social vulnerability indices are the standard instrument, tracing to Cutter's SoVI. → [The Origin and Diffusion of the Social Vulnerability Index](https://consensus.app/papers/details/154ab619af0d54b5a3870ad0b9fd9499/?utm_source=claude_desktop) (Cutter, 2024)

The most damning assessment is a systematic review of 246 articles across 20 hazard contexts and 91 countries. Its findings: indicators are **relatively homogeneous** across hazards and geographies; **81 per cent** simply reuse indicators from existing indices; **94 per cent** are purely quantitative or spatial; **80 per cent** use only secondary data; and **76 per cent** involve no validation or ground-truthing at all. The review argues this replication undermines the capacity to capture vulnerability as place-specific. → [A systematic scoping review of the Social Vulnerability Index as applied to natural hazards](https://consensus.app/papers/details/f289a915b16b51a696fbafe8ccc92641/?utm_source=claude_desktop) (Painter et al., 2024, *Natural Hazards*)

Where validation has been done, the results are instructive rather than reassuring:

- Regressing flood death and damage across 11,629 United States flood events on vulnerability measures, **hazard- and outcome-specific models outperform the generic composite index**, and the variables predicting death differ from those predicting property damage. → [Using Disaster Outcomes to Validate Components of Social Vulnerability to Floods](https://consensus.app/papers/details/21a2f2e2dbd25b2b9f3ef9757c9bfd97/?utm_source=claude_desktop) (Tellman et al., 2020)
- Validated against Hurricane Sandy outcomes, indices explained **housing assistance applications well but property loss poorly**. → [On the Validity of Validation](https://consensus.app/papers/details/60b30955b2fa5802bb1d91130437742d/?utm_source=claude_desktop) (Flanagan et al., 2019)
- Aggregation into a single score destroys the intersectional structure that matters. Clustering on principal components instead recovers **six distinct vulnerability profiles**, two of which combine high vulnerability with high flood exposure. → [Profiles of Social Vulnerability for Flood Risk Reduction](https://consensus.app/papers/details/01099520de025e29b4740a4f6e14018d/?utm_source=claude_desktop) (Tate et al., 2025)

The state of the art in integration is a global vulnerability-adjusted flood risk index at 90 metre resolution, combining fluvial exceedance probability with gridded population and poverty. → [Integrating social vulnerability into high-resolution global flood risk mapping](https://consensus.app/papers/details/f87e7bcbd49d582a84dc6b6a2ce683a2/?utm_source=claude_desktop) (Fox et al., 2024, *Nature Communications*)

**The lesson for design.** Do not build another index. Build a vulnerability representation that is hazard-specific, outcome-specific, profile-based rather than aggregated, and validated against observed losses. Three of the four are directly supported by the papers above.

---

## 4. The loss data will not support what you want it to, and that is the opportunity

EM-DAT is the reference: over 26,000 entries, systematic since 1988, country-level, now open access. → [EM-DAT: the Emergency Events Database](https://consensus.app/papers/details/fea5fb8880bf57db9c70cab27ca72533/?utm_source=claude_desktop) (Delforge et al., 2025, *IJDRR*)

The problems are severe and well documented:

| Problem | Evidence |
|---|---|
| Missingness is **not random**. Year, **country income classification** and disaster type all significantly predict missing data, worst for economic loss | [Jones et al., 2022, *Scientific Data*](https://consensus.app/papers/details/d311c8cb9f375a28897a638730a0a978/?utm_source=claude_desktop) |
| EM-DAT records casualty information for only **one in three** climatological disasters | [Enenkel et al., 2024, *ERL*](https://consensus.app/papers/details/2ca8f79d2c7e5ec5ae6a57fd206bb325/?utm_source=claude_desktop) |
| Six structural biases: hazard, temporal, threshold, accounting, geographic, systemic | [Gall et al., 2009, *BAMS*](https://consensus.app/papers/details/ea5f217931925d40913d12745c1bba96/?utm_source=claude_desktop) |
| Of 433 studies using EM-DAT, only **44.6 per cent acknowledged** missing data and **33.5 per cent handled** it, mostly ad hoc | [Jones et al., 2023, *ERL*](https://consensus.app/papers/details/c5e531423e8e5e4a8fa4667ee935562f/?utm_source=claude_desktop) |
| EM-DAT and DesInventar disagree substantially on the same events; DesInventar records more events with larger dispersion | [Panwar and Sen, 2020](https://consensus.app/papers/details/c7aa3b9613da598e88677fab63fd88f0/?utm_source=claude_desktop) |
| EM-DAT is country-level only; **DesInventar is the only global source at municipal resolution** | [Moriyama et al., 2018](https://consensus.app/papers/details/b015ddd12d6f5c50abcf2bc42e1f0036/?utm_source=claude_desktop) |
| Loss quantities are often **not separable by cause**, for example wind against flood within one hurricane | [Kron et al., 2012, *NHESS*](https://consensus.app/papers/details/2bbe1277a24055a191116030b7e9045f/?utm_source=claude_desktop) |

That last row deserves attention. **Losses in the reference databases are frequently not attributable to individual perils within an event.** For compound event research this is either fatal or perfect, depending on framing. It is fatal if you want to disaggregate. It is perfect if your argument is that the loss record is already implicitly compound while the models calibrated on it are not.

---

## 5. Where the actual contribution is

Putting the four sections together produces one argument that is sharper than "combine hazard, vulnerability and losses in an integrated framework", which is what most proposals in this space say and which CLIMADA largely already does.

> Loss-data missingness is systematically correlated with income and therefore with vulnerability. Impact functions are calibrated on reported losses. Therefore vulnerability is **understated by construction exactly where it is highest**, and the bias propagates into every downstream risk estimate, adaptation appraisal and loss-and-damage figure built on those functions.

This is testable rather than rhetorical. Missingness is predictable from observable covariates, per Jones et al. Calibration tooling is published and open. A second, denser loss source exists at municipal resolution in DesInventar for cross-validation. The size of the bias can be estimated, and a correction can be proposed and demonstrated.

It also inherits the compound framing naturally, because compound events are precisely the ones most likely to be recorded as a single undifferentiated entry, and the ones whose damage accumulation the memoryless impact functions handle worst.

**Three candidate framings, in descending order of how well the evidence supports them:**

1. **The calibration bias study.** Quantify how non-random loss reporting biases calibrated impact functions, and correct it. Strongest evidence base, most novel, most portable, least dependent on new data collection.
2. **The state-dependent compound vulnerability study.** Extend state-dependent fragility from consecutive earthquake and tsunami to climate compound sequences such as drought followed by flood, and calibrate for an African region. Strong methodological hook, heavier modelling load.
3. **The African compound risk assessment.** Apply the existing framework to a documented regional gap. Most straightforward, least novel, most likely to be seen as an application rather than a contribution.

## 6. Context worth citing for an African framing

Between 1970 and 2023 roughly **95 per cent of weather-related deaths in Africa** came from droughts and floods, and drought alone accounts for about **34 per cent** of economic losses from natural disasters there. By 2030 up to **118 million** people living in extreme poverty are projected to be exposed to drought, flood and extreme heat on the continent. Flood hazard in West Africa specifically is described as poorly documented because of data challenges, which is the same problem as section 4 stated from the hazard side.

Sources: [WMO](https://wmo.int/news/media-centre/africa-faces-disproportionate-burden-from-climate-change-and-adaptation-costs), [UN News](https://news.un.org/en/story/2025/05/1163126), [NHESS on West African floods](https://nhess.copernicus.org/articles/25/3161/2025/), [compound drought in Africa](https://doi.org/10.3390/w18091040), [compound extremes in Africa](https://www.sciencedirect.com/science/article/abs/pii/S0169809526004515)
