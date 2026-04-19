import jsPDF from 'jspdf';
import { StudentInfo, ScenarioResult } from '../pages/HITQuality/index';

interface GeneratePDFArgs {
  student: StudentInfo;
  results: ScenarioResult[];
  score: number;
  total: number;
  percentage: number;
  reflections: { q1: string; q2: string; q3: string; q4: string };
}

const MARGIN = 18;
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

function addPage(doc: jsPDF): number {
  doc.addPage();
  return MARGIN;
}

function drawHeaderBar(doc: jsPDF) {
  doc.setFillColor(27, 42, 74);
  doc.rect(0, 0, PAGE_WIDTH, 18, 'F');
  doc.setFillColor(240, 165, 0);
  doc.rect(0, 18, PAGE_WIDTH, 2, 'F');
}

function drawFooter(doc: jsPDF, pageNum: number) {
  const y = PAGE_HEIGHT - 10;
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Towson University · Department of Health Sciences · HLTH 207', MARGIN, y);
  doc.text(String(pageNum), PAGE_WIDTH - MARGIN, y, { align: 'right' });
}

function addWrappedText(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const lines = doc.splitTextToSize(text, maxWidth) as string[];
  lines.forEach((line: string) => {
    if (y > PAGE_HEIGHT - 20) {
      doc.addPage();
      drawHeaderBar(doc);
      y = MARGIN + 10;
    }
    doc.text(line, x, y);
    y += lineHeight;
  });
  return y;
}

export async function generatePDF({
  student,
  results,
  score,
  total,
  percentage,
  reflections,
}: GeneratePDFArgs): Promise<void> {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  let pageCount = 1;
  let y = MARGIN;

  // ── Page 1 header ──────────────────────────────────────────────
  drawHeaderBar(doc);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('HLTH 207 · Health Care in the U.S.', MARGIN, 12);
  doc.text('HIT and Quality Activity', PAGE_WIDTH - MARGIN, 12, { align: 'right' });

  y = 30;

  // Title
  doc.setTextColor(27, 42, 74);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('HIT and Quality Activity', MARGIN, y);
  y += 8;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text('Chapter 11 · Electronic Health Records, HIT, and Quality', MARGIN, y);
  y += 10;

  // Divider
  doc.setDrawColor(200, 200, 200);
  doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);
  y += 6;

  // Student info block
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  doc.setFontSize(10);
  doc.setTextColor(40, 40, 40);
  const infoLines = [
    ['Student:', `${student.firstName} ${student.lastName}`],
    ['Date Completed:', today],
    ['Advocacy Project Topic:', student.topic],
    ['Score:', `${score} out of ${total} (${percentage}%)`],
  ];
  infoLines.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label, MARGIN, y);
    doc.setFont('helvetica', 'normal');
    doc.text(value, MARGIN + 48, y);
    y += 6;
  });
  y += 4;

  // ── Scenario summary section ────────────────────────────────────
  doc.setFillColor(240, 245, 255);
  doc.roundedRect(MARGIN, y, CONTENT_WIDTH, 8, 2, 2, 'F');
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(27, 42, 74);
  doc.text('Scenario Summary', MARGIN + 3, y + 5.5);
  y += 13;

  results.forEach((result, i) => {
    if (y > PAGE_HEIGHT - 45) {
      drawFooter(doc, pageCount);
      pageCount++;
      y = addPage(doc);
      drawHeaderBar(doc);
      y += 10;
    }

    // Result row background
    const rowBg = result.correct ? [240, 253, 244] : [254, 242, 242];
    doc.setFillColor(rowBg[0], rowBg[1], rowBg[2]);
    doc.roundedRect(MARGIN, y - 1, CONTENT_WIDTH, 6, 1, 1, 'F');

    // Scenario number and title
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(result.correct ? 22 : 185, result.correct ? 163 : 28, result.correct ? 74 : 26);
    doc.text(`${result.correct ? '✓' : '✗'}  ${i + 1}. ${result.scenario.title}`, MARGIN + 2, y + 3.5);
    y += 7;

    // Badge
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text(`Category: ${result.scenario.badgeLabel}`, MARGIN + 6, y + 1);
    y += 5;

    // Feedback text
    const feedbackText = result.correct
      ? result.scenario.feedback.correct
      : result.scenario.feedback.wrong;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    y = addWrappedText(doc, feedbackText, MARGIN + 6, y + 1, CONTENT_WIDTH - 8, 4.5);
    y += 4;
  });

  y += 2;

  // ── Reflection section ──────────────────────────────────────────
  if (y > PAGE_HEIGHT - 50) {
    drawFooter(doc, pageCount);
    pageCount++;
    y = addPage(doc);
    drawHeaderBar(doc);
    y += 10;
  }

  doc.setFillColor(240, 245, 255);
  doc.roundedRect(MARGIN, y, CONTENT_WIDTH, 8, 2, 2, 'F');
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(27, 42, 74);
  doc.text('Reflection Responses', MARGIN + 3, y + 5.5);
  y += 13;

  const questions = [
    {
      label: 'Question 1',
      prompt: `Your project topic is ${student.topic}. Identify ONE specific policy change — a law, regulation, or program — that would most directly address the core health equity or quality issue in your topic. Who has the authority to make that change happen (federal, state, or local), and what stakeholders would resist it?`,
      response: reflections.q1,
    },
    {
      label: 'Question 2',
      prompt: 'The activity included a scenario on healthcare quality from Chapter 11. Based on the seven domains of quality (effective, safe, person-centered, timely, equitable, integrated, efficient), which domain is most neglected for the population in your advocacy project? Use a specific example from your research to support your answer.',
      response: reflections.q2,
    },
    {
      label: 'Question 3',
      prompt: `Chapter 11 covers EHRs, CDSS, and health information exchanges. Describe one way that health information technology could either help close a gap OR create a new barrier for the population you are advocating for in your topic ${student.topic}. Be specific — name the technology and the mechanism.`,
      response: reflections.q3,
    },
    {
      label: 'Question 4',
      prompt: 'Reflect on one scenario you got wrong in the activity, or the one that surprised you most. What did the correct answer teach you about how health systems and policy interact, and how does that lesson apply to your own advocacy argument?',
      response: reflections.q4,
    },
  ];

  questions.forEach((q) => {
    if (y > PAGE_HEIGHT - 40) {
      drawFooter(doc, pageCount);
      pageCount++;
      y = addPage(doc);
      drawHeaderBar(doc);
      y += 10;
    }

    // Question label
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(27, 42, 74);
    doc.text(q.label, MARGIN, y);
    y += 5;

    // Prompt (italicized, smaller)
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(90, 90, 120);
    y = addWrappedText(doc, q.prompt, MARGIN + 2, y, CONTENT_WIDTH - 4, 4.5);
    y += 2;

    // Response
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 30, 30);
    const responseText = q.response.trim() === '' ? '[No response provided]' : q.response;
    y = addWrappedText(doc, responseText, MARGIN + 2, y, CONTENT_WIDTH - 4, 5);
    y += 6;
  });

  // Final footer on last page
  drawFooter(doc, pageCount);

  // Save
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const filename = `HLTH207_HIT_Quality_${student.lastName}_${student.firstName}_${dateStr}.pdf`;
  doc.save(filename);
}
