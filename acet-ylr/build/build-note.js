// Build the .docx: npm install docx && node build/build-note.js  (run from repo root)
const fs = require('fs');
const d = require('docx');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
        BorderStyle, LevelFormat, convertInchesToTwip, Footer, PageNumber } = d;

const SERIF = "Cambria";
const ACCENT = "1F3A5F";

const body = (children, opts = {}) => new Paragraph({
  alignment: AlignmentType.JUSTIFIED,
  spacing: { after: 180, line: 276 },
  children,
  ...opts,
});

// helper: build runs from a mini-markup string using * for italics
const runs = (s, base = {}) =>
  s.split(/(\*[^*]+\*)/g).filter(Boolean).map(seg =>
    seg.startsWith('*') && seg.endsWith('*')
      ? new TextRun({ text: seg.slice(1, -1), italics: true, font: SERIF, size: 22, ...base })
      : new TextRun({ text: seg, font: SERIF, size: 22, ...base }));

const p = (s, opts) => body(runs(s), opts);

const h = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 300, after: 140 },
  children: [new TextRun({ text, font: SERIF, size: 24, bold: true, color: ACCENT })],
});

const doc = new Document({
  creator: "Concept note",
  title: "Priced Out of the Credit",
  description: "ACET Young Leaders in Research 2027 concept note",
  numbering: {
    config: [{
      reference: "rq",
      levels: [{
        level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.START,
        style: { paragraph: { indent: { left: convertInchesToTwip(0.4), hanging: convertInchesToTwip(0.25) } } },
      }],
    }],
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ children: [PageNumber.CURRENT], font: SERIF, size: 18, color: "888888" })],
        })],
      }),
    },
    children: [
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "Priced Out of the Credit: Fuel Price Shocks and the Integrity of Ghana's Clean-Cooking Carbon Finance",
          font: SERIF, size: 30, bold: true, color: ACCENT })],
      }),
      new Paragraph({
        spacing: { after: 60 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "C8D2DC", space: 8 } },
        children: [],
      }),
      new Paragraph({
        spacing: { before: 120, after: 300 },
        children: [
          new TextRun({ text: "Thematic area: ", font: SERIF, size: 21, bold: true }),
          new TextRun({ text: "Green Industrial Transformation", font: SERIF, size: 21 }),
          new TextRun({ text: "     |     ", font: SERIF, size: 21, color: "AAAAAA" }),
          new TextRun({ text: "Applicant: ", font: SERIF, size: 21, bold: true }),
          new TextRun({ text: "[Name, institution]", font: SERIF, size: 21, italics: true, color: "777777" }),
        ],
      }),

      h("The policy problem"),
      p("Ghana's clean-cooking transition is increasingly financed by carbon markets rather than public budgets. Cookstove projects account for roughly 80% of Africa's energy carbon-credit transactions over the past decade, and in September 2025 Ghana closed the continent's first Article 6.2 cookstove transaction under the Paris Agreement. Under Article 6, authorising a transfer requires a corresponding adjustment: Ghana adds those tonnes back to its own account and must meet its Nationally Determined Contribution without them. The state is therefore directly exposed to the accuracy of the reductions it certifies."),
      p("That accuracy is contested. A comparative assessment of five cookstove crediting methodologies estimates project samples are over-credited by 9.2 times, naming stacking — continued biomass use alongside clean fuels — among the misaligned parameters (Gill-Wiehl et al., 2024, *Nature Sustainability*). A systematic synthesis covering approximately one billion tonnes of issued credits finds that only about 11% of cookstove credits represent real emission reductions (Probst et al., 2024, *Nature Communications*)."),

      h("The research gap"),
      p("Both assessments treat over-crediting as a fixed calibration error. It is not fixed. Stacking responds to relative fuel prices: quasi-experimental Ghanaian evidence shows that a 50% LPG price increase raised the share of households mainly using firewood by three percentage points and urban charcoal consumption by roughly 17% (Greve and Lay, 2022, *JAERE*). Crediting methodologies nonetheless set usage and stacking parameters at project design and carry them forward unchanged through the crediting period."),
      p("So the real reductions underlying issued credits vary with fuel prices while issuance does not, and no methodology, developer or host-country authority adjusts for this. Two mature literatures — on carbon-credit integrity and on household cooking-fuel demand — have never been joined. Ghana's Designated National Authority is authorising transfers today with no means of estimating the resulting exposure."),

      h("Research questions"),
      ...[
        "What is the elasticity of the biomass share of household cooking energy with respect to the relative price of clean fuel?",
        "Is the response symmetric — does the stack recover when prices revert, or does backsliding ratchet?",
        "How much credited emission reduction does an observed price path erase, and what adjustment should the Designated National Authority apply at authorisation?",
      ].map(t => new Paragraph({
        numbering: { reference: "rq", level: 0 },
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 100, line: 276 },
        children: runs(t),
      })),

      h("Data and methodology"),
      p("Existing evidence relies on the “primary fuel” survey question, which misses stacking by construction. This study measures the stack directly. Stove use monitors — temperature data loggers — will be placed on every stove in approximately 150 households across three rounds, paired with weekly fuel-purchase diaries and a time-use module capturing collection labour. This design choice is also the policy argument: the single *metered* methodology, which monitors fuel use directly, was found closest to independent estimates — 1.5 times over-credited against 9.2 times overall."),
      p("Identification draws on three sources of price variation, so the design does not depend on a shock occurring during the study year: dated statutory changes in petroleum levies and LPG pricing, applied retrospectively to Ghana Living Standards Survey waves; spatial variation in delivered LPG price, instrumented by distance to filling plant; and within-year seasonality in biomass price and availability, supporting a within-household comparison."),
      p("The estimated elasticity is then applied to the usage and stacking parameters stated in publicly filed project design documents for cookstove projects operating in Ghana, and emission reductions are recomputed under observed price paths."),

      h("Expected contribution"),
      p("Three outputs. First, the first estimate of the price elasticity of cooking-stack *composition*, objectively metered rather than recalled. Second, a “usage-at-risk” adjustment factor: a price-path-dependent discount the Designated National Authority can apply when authorising Article 6 transfers — a procedure, not a recommendation. Third, an estimate of Ghana's NDC exposure from price-driven over-issuance, expressed in tonnes and in cedis."),
      p("These are delivered as a working paper, a policy brief, a public dataset, and a validation workshop with the Designated National Authority, the Energy Commission and the Ministry of Energy. The method is portable to Kenya, Uganda, Malawi and Rwanda, which host most of Africa's remaining cookstove credit volume."),

      h("Feasibility and risks"),
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 180, line: 276 },
        shading: { type: d.ShadingType.CLEAR, fill: "F2F5F8" },
        children: [new TextRun({
          text: "[Applicant: two or three sentences on affiliation, econometric training, prior fieldwork experience, and any existing contact at the Designated National Authority, the National Petroleum Authority, or a project developer.]",
          font: SERIF, size: 22, italics: true, color: "666666" })],
      }),
      p("The principal risk is that no large price movement occurs during the study year. Identification therefore rests on historical statutory changes, spatial variation and seasonality, with any contemporaneous shock treated as upside rather than as the plan. Logger loss and attrition are managed through 15% over-provision, retrieval incentives and diary validation, and a parallel secondary-data track delivers the elasticity estimate independently of primary panel performance."),
    ],
  }],
});

Packer.toBuffer(doc).then(b => {
  fs.writeFileSync('acet-ylr/concept-note.docx', b);
  console.log('written', b.length, 'bytes');
});
