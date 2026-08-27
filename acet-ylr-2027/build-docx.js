const {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  AlignmentType, BorderStyle, convertInchesToTwip
} = require('docx');
const fs = require('fs');

const SERIF = 'Cambria';
const AFTER = 140;      // ~7pt
const LINE  = 276;      // ~1.15

const body = (children, opts = {}) => new Paragraph({
  spacing: { after: opts.after ?? AFTER, line: LINE },
  children,
  ...opts.extra,
});

// Parse light inline markup: **bold** only.
const runs = (text, opts = {}) => {
  const out = [];
  const re = /\*\*(.+?)\*\*/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), font: SERIF, size: opts.size ?? 22 }));
    out.push(new TextRun({ text: m[1], font: SERIF, size: opts.size ?? 22, bold: true }));
    last = re.lastIndex;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), font: SERIF, size: opts.size ?? 22 }));
  return out;
};

const heading = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  spacing: { before: 300, after: 120, line: LINE },
  children: [new TextRun({ text, font: SERIF, size: 24, bold: true, color: '1A1A1A' })],
});

const meta = (label, value) => body([
  new TextRun({ text: label + '  ', font: SERIF, size: 19, color: '595959' }),
  new TextRun({ text: value, font: SERIF, size: 19, color: '262626' }),
], { after: 40 });

const children = [];

// Title
children.push(new Paragraph({
  spacing: { after: 100, line: 260 },
  children: [new TextRun({
    text: "Adoption Is Not Transformation: Green Technology and Value Addition in Ghana's Food Processing Micro-Enterprises",
    font: SERIF, size: 30, bold: true,
  })],
}));

// Metadata block
children.push(meta('Applicant', '[Your name] · [Institutional affiliation]'));
children.push(meta('Programme', 'ACET Young Leaders in Research, 2027 Cohort'));
children.push(new Paragraph({
  spacing: { after: 260, line: LINE },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, space: 10, color: 'BFBFBF' } },
  children: [
    new TextRun({ text: 'Thematic area  ', font: SERIF, size: 19, color: '595959' }),
    new TextRun({ text: 'Green Industrial Transformation', font: SERIF, size: 19, color: '262626' }),
  ],
}));

// Sections
const md = fs.readFileSync('concept-note-sm.md', 'utf8').split('\n');
let started = false;
for (const line of md) {
  const t = line.trim();
  if (t.startsWith('## ')) { started = true; children.push(heading(t.slice(3))); continue; }
  if (!started || !t || t.startsWith('#') || t.startsWith('**Applicant') || t.startsWith('**Programme') || t.startsWith('**Thematic')) continue;
  children.push(body(runs(t)));
}

const doc = new Document({
  creator: 'ACET YLR 2027 application',
  title: 'Concept Note — ACET YLR 2027',
  description: 'Concept note for the ACET Young Leaders in Research 2027 Cohort',
  styles: { default: { document: { run: { font: SERIF, size: 22 } } } },
  sections: [{
    properties: {
      page: {
        margin: {
          top: convertInchesToTwip(1), bottom: convertInchesToTwip(1),
          left: convertInchesToTwip(1.1), right: convertInchesToTwip(1.1),
        },
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync('concept-note-sm.docx', buf);
  console.log('wrote concept-note-sm.docx', buf.length, 'bytes');
});
