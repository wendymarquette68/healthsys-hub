export interface ScenarioOption {
  text: string;
  correct: boolean;
}

export interface Scenario {
  topic: string;
  badge: 'policy' | 'quality' | 'equity' | 'crisis' | 'hit';
  badgeLabel: string;
  isQuality: boolean;
  qualityNote?: string;
  title: string;
  scenario: string;
  options: [ScenarioOption, ScenarioOption, ScenarioOption];
  feedback: {
    correct: string;
    wrong: string;
  };
}

export const policyHITScenarios: Scenario[] = [
  {
    topic: 'EHR Basics',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Paper Charts vs. Electronic Health Records',
    scenario:
      'A community health clinic in Baltimore has served patients for 30 years using paper charts. The new director wants to switch to an electronic system. She explains that an EHR would give every provider instant access to a patient\'s full medical history — medications, allergies, lab results, and past visits — from any computer in the clinic. A skeptical doctor asks: "What exactly is an EHR?" Based on Chapter 11, which answer best defines an EHR?',
    options: [
      {
        text: 'An EHR is a billing system that tracks insurance claims and payments for patient services.',
        correct: false,
      },
      {
        text: 'An EHR is a computerized patient record meant to replace paper charts, giving providers access to a comprehensive patient history.',
        correct: true,
      },
      {
        text: 'An EHR is a website where patients can look up their own health information without provider involvement.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter defines EHRs as "computerized patient records meant to replace paper charts." They store medical history, medications, allergies, and lab results in one digital record that authorized providers can access. This is distinct from billing systems or patient-facing portals.',
      wrong:
        'The chapter clearly defines EHRs as "computerized patient records meant to replace paper charts." EHRs are clinical tools for providers — not billing systems and not just patient portals. Their purpose is to give providers access to a complete, accurate patient history.',
    },
  },
  {
    topic: 'HIT Implementation',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Why Did the New System Fail?',
    scenario:
      'A hospital spent $34 million on a new EHR system. Three months after launch, hundreds of physicians refused to use it. Doctors said the system took longer than paper, and many complained about constant alerts for minor issues. Nurses had previously caught and corrected small medication errors without telling doctors — but now those informal checks were gone. According to Chapter 11\'s three essential components of HIT implementation, which component was MOST responsible for this failure?',
    options: [
      {
        text: 'Technology — the hospital chose the wrong software vendor.',
        correct: false,
      },
      {
        text: 'Culture — physicians resisted changing how they practiced medicine, and the organization did not manage this change effectively.',
        correct: true,
      },
      {
        text: 'Process — the hospital failed to document existing workflows before switching systems.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'The chapter describes this exact scenario — the Cedars-Sinai Hospital failure in 2002. Culture is identified as the most significant and least understood component. Physicians resisted changing decades-old habits. The chapter states "the most critical, least studied, and least understood" of the three components is organizational culture. Process was also an issue, but culture — the physicians\' refusal to change — was primary.',
      wrong:
        'The chapter identifies three components: Technology, Process, and Culture. While process failures also occurred (undocumented workflows), the chapter labels culture as "the most critical, least studied, and least understood" component. The Cedars-Sinai failure was primarily a culture failure — physicians resisted changing how they practiced medicine.',
    },
  },
  {
    topic: 'CDSS Soft Stop',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'The Pop-Up Warning',
    scenario:
      'A physician is prescribing a new medication through the hospital\'s EHR. As she clicks to finalize the order, a yellow pop-up box appears: "Warning — this patient\'s kidney function lab work is over one year old. This medication requires annual kidney monitoring. Do you want to order a kidney function test now, or continue without it?" The doctor can click "Continue anyway" and the order goes through. Based on Chapter 11, what type of CDSS feature is this pop-up warning?',
    options: [
      {
        text: 'A hard stop — the system prevents the order from going through until the lab test is completed.',
        correct: false,
      },
      {
        text: 'A soft stop — the system warns the physician but allows them to override the recommendation and proceed.',
        correct: true,
      },
      {
        text: 'A personal health record — the system is sharing the patient\'s own data with them.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter explains that most CDSS decision support uses "soft stops" — warnings that allow physicians to heed or ignore the alert as they believe is most appropriate. The physician can click through and continue. This is different from a hard stop, which would block the order entirely.',
      wrong:
        'The chapter distinguishes between soft stops and hard stops. A soft stop warns the provider but allows them to override and proceed — exactly what this pop-up does. A hard stop would block the order entirely and not allow any override. Since the doctor can click "Continue anyway," this is a soft stop.',
    },
  },
  {
    topic: 'CDSS Hard Stop',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'When the System Says No',
    scenario:
      'A doctor in the emergency department wants to prescribe a powerful, broad-spectrum antibiotic for a patient. When she enters the order into the CPOE system, the screen freezes and displays: "This medication may only be ordered by an Infectious Disease specialist. You cannot proceed without an Infectious Disease consult. Click here to request a consult." The order cannot be submitted until the consult is requested. Based on Chapter 11, what is this an example of?',
    options: [
      {
        text: 'A soft stop — the doctor is being warned but can click through and prescribe anyway.',
        correct: false,
      },
      {
        text: 'A hard stop — the CDSS blocks the order entirely and does not allow the physician to override it.',
        correct: true,
      },
      {
        text: 'Information blocking — the EHR vendor is preventing the doctor from accessing the medication order form.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter uses this exact example to explain a CDSS hard stop: "the CDSS would not allow the physician to order the medication, but would inform them that an infectious disease consult is required." Unlike soft stops, hard stops do not allow overrides — they prevent errors with potentially serious consequences.',
      wrong:
        'The chapter clearly distinguishes hard stops from soft stops. A soft stop allows the physician to override the warning. A hard stop "do[es] not allow the physician options to ignore a warning." Because the order cannot be submitted at all, this is a hard stop. Information blocking refers to vendors preventing data sharing between institutions — not clinical decision alerts.',
    },
  },
  {
    topic: 'CPOE',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Ordering Directly Through the Computer',
    scenario:
      'Before EHRs, physicians at City Hospital wrote medication orders on paper forms. A nurse or ward clerk would then take the paper to the pharmacy. Now, after implementing a new EHR, physicians type their orders directly into a computer terminal. The system checks for drug interactions, allergies, and dosing errors in real time. According to Chapter 11, what is the name for this process of doctors entering orders directly into a computer system?',
    options: [
      {
        text: 'Computerized Physician Order Entry (CPOE)',
        correct: true,
      },
      {
        text: 'Health Information Exchange (HIE)',
        correct: false,
      },
      {
        text: 'Electronic Clinical Quality Measure (eCQM)',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. CPOE — Computerized Physician Order Entry — is the process of physicians entering orders directly into a computer workstation. The chapter explains that CPOE is where CDSS works best because "the physician\'s mind is focused on the patient just seen" and it\'s the easiest moment to act on reminders or warnings.',
      wrong:
        'The chapter defines CPOE as the process of physicians entering orders directly into a computer system. HIE refers to the sharing of patient data between different institutions. eCQMs are standardized measures hospitals report to track quality of care. The process of direct computer order entry is specifically called CPOE.',
    },
  },
  {
    topic: 'HITECH and Meaningful Use',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'The Government\'s Big Investment in EHRs',
    scenario:
      'In 2009, Congress passed the Health Information Technology for Economic and Clinical Health (HITECH) Act, which set aside a massive amount of money to encourage hospitals and doctors to adopt EHRs. Physicians could receive up to $44,000 through Medicare and up to $63,750 through Medicaid for proving they were using EHR technology properly. This requirement to actively and meaningfully use the technology — not just install it — was called what?',
    options: [
      {
        text: 'The HIPAA Privacy Rule — the law that governs how patient data is protected.',
        correct: false,
      },
      {
        text: 'Meaningful use — the program that required providers to demonstrate they were actively using EHR technology in ways that improved care.',
        correct: true,
      },
      {
        text: 'Information blocking — the practice of vendors preventing hospitals from sharing patient records.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The HITECH Act created the "Meaningful Use Program," which required providers to demonstrate they were actively using EHR technology — not just purchasing it. The chapter explains that CMS administered the financial incentives while the ONC set the requirements. Physicians faced payment penalties starting in 2015 if they failed to demonstrate meaningful use.',
      wrong:
        'The chapter explains that the HITECH Act designated $36.5 billion for EHR adoption and created the "Meaningful Use Program." Meaningful use required providers to actively demonstrate they were using EHR technology in ways that improved patient care — not just install the system. HIPAA governs privacy, and information blocking refers to vendors preventing data sharing.',
    },
  },
  {
    topic: 'ONC Role',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'Who Oversees Health IT in America?',
    scenario:
      'A student researching health information technology learns that in 2004, President George W. Bush signed an executive order creating a new federal office. This office became the central authority responsible for coordinating all national efforts to implement EHRs and promote electronic exchange of health information. It sets the rules for what counts as a certified EHR and oversees the national push toward digital health records. According to Chapter 11, what is this office called?',
    options: [
      {
        text: 'The Centers for Medicare & Medicaid Services (CMS) — which administers Medicare and Medicaid payments.',
        correct: false,
      },
      {
        text: 'The Office of the National Coordinator for Health Information Technology (ONC) — the principal federal entity responsible for HIT implementation and policy.',
        correct: true,
      },
      {
        text: 'The Agency for Healthcare Research and Quality (AHRQ) — which funds research on healthcare quality.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The ONC was created by Executive Order in 2004 and was later legislatively mandated by ARRA in 2009. The chapter describes it as "the principal federal entity charged with coordination of nationwide efforts to implement and use the most advanced health information technology." While CMS provided the financial incentives, the ONC set the requirements for the meaningful use program.',
      wrong:
        'The chapter identifies the ONC — Office of the National Coordinator for Health Information Technology — as the federal office created in 2004 to lead national HIT efforts. CMS administers Medicare and Medicaid payments. AHRQ funds healthcare quality research. The ONC specifically coordinates HIT implementation and sets standards.',
    },
  },
  {
    topic: 'HIE Basics',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'When Patients See Multiple Doctors',
    scenario:
      'A patient recovering from opioid addiction sees a primary care doctor, a psychiatrist, and an addiction counselor — all at different clinics that use different EHR systems. When she visits the emergency room for an unrelated injury, the ER doctor has no access to her psychiatric medications, recent lab results, or counseling notes. The ER doctor prescribes a medication that dangerously interacts with one of her psychiatric drugs. Which HIT system, described in Chapter 11, is specifically designed to solve this problem?',
    options: [
      {
        text: 'A personal health record (PHR) — which patients maintain themselves.',
        correct: false,
      },
      {
        text: 'A Health Information Exchange (HIE) — which allows patient information to be shared across different institutions and EHR platforms.',
        correct: true,
      },
      {
        text: 'A clinical decision support system (CDSS) — which provides pop-up warnings to physicians.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter explains that HIEs allow "patients and physicians access to a patient\'s comprehensive health record from multiple institutions, regardless of where the patient was seen." This prevents the exact problem described — a fragmented record that hides critical medication information from ER providers. CDSS can catch drug interactions, but only if the information is available in the first place.',
      wrong:
        'The chapter defines HIEs as systems that share patient information "across institutions and multiple EHR platforms" so that providers have access to a patient\'s complete record regardless of where they were treated. A PHR is maintained by the patient themselves and relies on the patient to keep it updated. A CDSS provides warnings but cannot warn about medications it doesn\'t know about.',
    },
  },
  {
    topic: 'HIE Models',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Centralized or Federated?',
    scenario:
      'A regional hospital network is building a Health Information Exchange. One option has all hospitals send copies of their patient records to one central database managed by the HIE. The other option lets each hospital keep its own records on its own servers, and only patient identifiers are stored centrally. When a provider requests records, the HIE pulls data from each hospital in real time. Hospital administrators prefer the second option because they can withdraw from the HIE at any time and keep full control of their data. According to Chapter 11, which model are they describing?',
    options: [
      {
        text: 'The centralized model — all data is stored in one large HIE database.',
        correct: false,
      },
      {
        text: 'The federated model — each institution keeps its own data, and the HIE only stores a master patient index with identifiers.',
        correct: true,
      },
      {
        text: 'The meaningful use model — a federal program requiring hospitals to demonstrate EHR use.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter describes the federated model as one where "institutional data resides within each institution\'s system" and the HIE only maintains a small master patient index. Data is assembled in real time when requested. The chapter notes that institutional HIT administrators favor the federated model because they can withdraw at any time, maintaining control of patient data under HIPAA.',
      wrong:
        'The chapter describes two main models. The centralized model stores all data in one large database. The federated model — which is described here — keeps data at each institution and only stores patient identifiers centrally. The chapter notes that the federated model is favored by administrators because it preserves each institution\'s control over its own data.',
    },
  },
  {
    topic: 'Information Blocking',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'When Vendors Block Data Sharing',
    scenario:
      'A state health department is trying to build an HIE connecting local hospitals to improve care for patients with mental illness who cycle between emergency rooms. However, one major hospital\'s EHR vendor has put language in its contract stating that the hospital cannot share data with outside systems or even discuss the technical limitations of the software. The hospital is locked in. According to Chapter 11, what is this practice called, and which law tried to stop it?',
    options: [
      {
        text: 'HIPAA — the law that governs patient privacy, which hospitals are required to follow.',
        correct: false,
      },
      {
        text: 'Information blocking — a practice addressed by the 21st Century Cures Act, which allows penalties for health IT developers who prevent data sharing.',
        correct: true,
      },
      {
        text: 'Meaningful use — the requirement that providers demonstrate active use of EHR technology.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter describes information blocking as a documented problem where EHR vendors use "contractual restrictions that prohibit customers from reporting or even discussing costs, restrictions, and other relevant details." The ONC delivered a Report to Congress on this in 2015, and the 21st Century Cures Act addressed it with civil monetary penalties. As of 2024, enforcement is now active with penalties up to $1 million per violation for developers.',
      wrong:
        'The chapter defines information blocking as vendors actively preventing the sharing of patient data between institutions — often through contractual restrictions that silence hospitals from even discussing the problem. This is different from HIPAA privacy requirements. The 21st Century Cures Act was specifically designed to address information blocking, and the ONC can now impose penalties on developers who engage in it.',
    },
  },
  {
    topic: 'Cost-Benefit Gap in HIT',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'Who Pays and Who Benefits?',
    scenario:
      'A small, three-doctor practice in a rural Maryland town is considering joining the regional HIE. The IT consultant explains that joining would mean fewer duplicate lab tests ordered — which is better for patients and cheaper for insurance companies. But the practice would have to pay annual fees and invest in new technology. One doctor says: "We pay the costs, but we don\'t get the financial benefit — we actually lose revenue when fewer tests are ordered." According to Chapter 11, what barrier to HIT adoption does this describe?',
    options: [
      {
        text: 'The technology barrier — small practices don\'t have enough computers to run an HIE.',
        correct: false,
      },
      {
        text: 'The gap between those who bear the costs of HIT and those who receive its benefits — the practice pays but patients and payers gain.',
        correct: true,
      },
      {
        text: 'The culture barrier — physicians in small practices resist using technology.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter specifically identifies this as a major historical barrier: "the gap between those who bear the costs of the technology and those who receive its benefits." The practice pays for the system, but the benefits — fewer duplicate tests, better care coordination — flow to patients and payers. This financial misalignment was one reason the HITECH Act created incentive payments to doctors and hospitals.',
      wrong:
        'The chapter identifies a specific barrier: "the gap between those who bear the costs of the technology and those who receive its benefits." Small practices pay for EHR systems and HIE participation, but the financial savings — from fewer duplicate tests and better care — go to patients and insurance payers. This misalignment was part of why the government had to create financial incentives through the HITECH Act.',
    },
  },
  {
    topic: 'CDSS and Preventive Care',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'What Does the Evidence Actually Show?',
    scenario:
      'A hospital administrator is building a case for investing in a clinical decision support system. She wants to know what the research actually says about CDSS effectiveness. According to the 2012 AHRQ systematic review cited in Chapter 11 — which analyzed 311 studies — which of the following is the area where CDSS has the STRONGEST evidence for improving care?',
    options: [
      {
        text: 'Reducing how long patients stay in the hospital (length of stay).',
        correct: false,
      },
      {
        text: 'Ordering and completing preventive care and prescribing recommended treatments.',
        correct: true,
      },
      {
        text: 'Reducing medical errors and adverse events in surgery.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter cites the 2012 AHRQ review of 311 studies, which found "high strength of evidence for CDSS to improve the ordering and completing of preventive care and ordering and prescribing recommended treatments." This was consistent across academic, VA, and community settings. Evidence for reducing length of stay and adverse events was rated as low strength of evidence.',
      wrong:
        'The 2012 AHRQ review cited in the chapter analyzed 311 studies and found high-strength evidence specifically for CDSS improving preventive care ordering and recommended treatments. Studies showed only low-strength evidence for impact on length of stay, mortality, and adverse events. The chapter notes: "even in areas where there is a high strength of evidence... the effective magnitude of the improvement is small."',
    },
  },
  {
    topic: 'HIPAA and HIE',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'Why Won\'t Hospitals Share Data?',
    scenario:
      'A public health researcher wants two hospital systems to connect their EHRs so she can track outcomes for patients with sickle cell disease who move between hospitals. The hospital legal teams are hesitant. They explain that federal law requires each institution to protect the privacy and security of its patients\' data, and sharing records with another institution creates legal risk if there is a data breach. According to Chapter 11, which law creates this concern?',
    options: [
      {
        text: 'The HITECH Act — which provides financial incentives for adopting EHRs.',
        correct: false,
      },
      {
        text: 'HIPAA — the Health Insurance Portability and Accountability Act, which requires healthcare institutions to maintain patient privacy and creates liability concerns about data sharing.',
        correct: true,
      },
      {
        text: 'The 21st Century Cures Act — which penalizes hospitals for information blocking.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter explains that "HIPAA regulations have had a chilling effect on healthcare institutions\' willingness to share data with other institutions due to liability for patient privacy and security of patient data." This is one of the main reasons EHR interoperability has been so difficult — hospitals fear HIPAA liability from data sharing, even when sharing would benefit patient care.',
      wrong:
        'The chapter specifically names HIPAA as the law that "has had a chilling effect on healthcare institutions\' willingness to share data." The HITECH Act incentivizes EHR adoption. The 21st Century Cures Act penalizes information blocking. It is HIPAA\'s privacy and data security requirements that make hospitals cautious about sharing patient records across institutions.',
    },
  },
  {
    topic: 'ICD-10 vs ICD-9',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Why So Many More Codes?',
    scenario:
      'A hospital billing manager is training new staff on medical coding. She explains that the U.S. switched from one diagnosis coding system to another on a federal mandate. The old system had about 13,000 codes; the new one has more than 65,000. The main reason for the increase is that the new system captures much more specific information — for example, it distinguishes between the right hand and the left hand (called laterality), whereas the old system did not. According to Chapter 11, what are these two systems?',
    options: [
      {
        text: 'LOINC and SNOMED — the two standards used for laboratory test reporting and clinical observations.',
        correct: false,
      },
      {
        text: 'ICD-9 and ICD-10 — the 9th and 10th revisions of the International Classification of Diseases, with ICD-10 having far greater specificity.',
        correct: true,
      },
      {
        text: 'Meaningful use Stage 1 and Stage 2 — the two stages of the federal EHR incentive program.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter explains that ICD-9 had approximately 13,000 codes while ICD-10 has more than 65,000 — the difference is due to higher specificity, including laterality (right vs. left). CMS mandated the switch. The chapter uses a thumb fracture as an example: ICD-9 had only 2 codes for that injury, while ICD-10 has many more based on which thumb, which part, open vs. closed, etc.',
      wrong:
        'The chapter describes the shift from ICD-9 (about 13,000 codes) to ICD-10 (more than 65,000 codes), mandated by CMS. LOINC and SNOMED are different standards used to ensure that lab results and clinical observations are interpreted consistently across HIE systems. Meaningful use Stages 1 and 2 relate to EHR incentive program requirements.',
    },
  },
  {
    topic: 'PHR and Patient Access',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Patient Records in the Patient\'s Hands',
    scenario:
      'A meaningful use requirement states that providers must give patients the ability to view, download, or send their own health information electronically. A patient with a chronic condition wants to share her complete health record with a new specialist without needing her old doctor to fax anything. She logs into a secure online portal and downloads her records directly. According to Chapter 11\'s key terms, what type of record is she accessing?',
    options: [
      {
        text: 'An Electronic Health Record (EHR) — the same record the doctor sees in the clinic.',
        correct: false,
      },
      {
        text: 'A Personal Health Record (PHR) — a record that patients can access and manage themselves.',
        correct: true,
      },
      {
        text: 'A Regional Health Information Organization (RHIO) — the organization that manages the HIE in her area.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter lists Personal Health Record (PHR) as a key term — a record the patient can access and manage themselves. One of the meaningful use requirements is specifically "providing the capability for patients to view their electronic health information securely online or by downloading or transmitting it directly to a third party." This patient-facing access is distinct from the clinical EHR that providers use.',
      wrong:
        'The chapter defines PHR (Personal Health Record) as a key term — the patient-accessible record. The EHR is the full clinical record used by providers. An RHIO is the organization that administers the HIE, not a type of record. Meaningful use requirements explicitly include giving patients the ability to download and share their own health information.',
    },
  },
  {
    topic: 'Semantic Interoperability',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Speaking the Same Language Across Systems',
    scenario:
      'Two hospitals in the same city join a regional HIE. Hospital A\'s EHR records blood pressure as "BP-systolic" while Hospital B\'s EHR records it as "SYS-BP." When records are shared, the receiving system doesn\'t know these are the same measurement. Chapter 11 describes a standard developed in the 1990s with more than 70,000 unique codes — one for each type of lab test and clinical observation — that allows different EHR systems to interpret data the same way. What is this standard called?',
    options: [
      {
        text: 'HIPAA — the federal law that governs patient privacy and data security.',
        correct: false,
      },
      {
        text: 'LOINC (Logical Observation Identifiers Names and Codes) — a standard that assigns unique codes to lab tests and clinical observations to ensure consistent interpretation across systems.',
        correct: true,
      },
      {
        text: 'CPOE (Computerized Physician Order Entry) — the process of entering orders directly into the EHR.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter explains that LOINC was developed to solve exactly this problem — it assigns unique codes to clinical observations like blood pressure (there are 419 different LOINC codes for blood pressure alone) so that when data is transferred from one EHR to another, the receiving system interprets it correctly. This is called semantic interoperability — ensuring that the meaning of data is preserved across systems.',
      wrong:
        'The chapter describes LOINC — Logical Observation Identifiers Names and Codes — as a standard with more than 70,000 codes that ensures data sent from one EHR is interpreted the same way by the receiving system. This is called semantic interoperability. HIPAA governs privacy, and CPOE is the process of entering orders into a computer. LOINC is the standard that allows different EHR systems to "speak the same language."',
    },
  },
  {
    topic: 'HIT Three Components — Process',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'The Workflow Nobody Wrote Down',
    scenario:
      'A mental health clinic transitions from paper charts to a new EHR. A month later, staff notice that several patients are not getting follow-up calls after missed appointments — something that had always happened before. It turns out that a front desk worker had been personally reviewing paper charts each morning and flagging missed appointments. This step was never written down anywhere. When the new EHR system was designed, no one knew to build this function in. According to Chapter 11\'s three components of HIT implementation, what type of failure is this?',
    options: [
      {
        text: 'A technology failure — the EHR software was not capable of flagging missed appointments.',
        correct: false,
      },
      {
        text: 'A process failure — an undocumented workflow that existed in the old system was not carried over to the new system.',
        correct: true,
      },
      {
        text: 'A culture failure — staff refused to adapt to the new system.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter explains that "many critical work processes are not documented at all" and that "undocumented or unknown work processes have been the root cause for many HIT implementation failures." When the old paper-based workflow relied on an informal, undocumented step, that step disappeared when the new system was implemented. This is a process failure — not technology or culture.',
      wrong:
        'The chapter identifies process as the second of three implementation components and warns that "undocumented or unknown work processes have been the root cause for many HIT implementation failures." The missed appointment follow-up was an informal, undocumented workflow that the system designers never knew to replicate. This is a process failure — the technology and staff cooperation weren\'t the problem.',
    },
  },
  {
    topic: 'EHR Adoption',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'How Far Has EHR Adoption Come?',
    scenario:
      'When the HITECH Act passed in 2009, only a small fraction of U.S. hospitals used certified EHR systems. The federal government invested $36.5 billion in incentives to change that. A decade later, a student researching current HIT policy finds that as of 2021, 96% of non-federal acute care hospitals had adopted a certified EHR. However, smaller hospitals (fewer than 50 beds) still lag behind at 88%. Which chapter concept best explains why smaller hospitals adopted EHRs at a lower rate?',
    options: [
      {
        text: 'Information blocking — larger EHR vendors prevented small hospitals from accessing their software.',
        correct: false,
      },
      {
        text: 'The cost-benefit gap — small hospitals bear high implementation costs but often don\'t recoup them through savings, creating a financial disincentive.',
        correct: true,
      },
      {
        text: 'Semantic interoperability — small hospitals cannot use LOINC and SNOMED coding standards.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter explains that small practices face a significant "gap between those who bear the costs of the technology and those who receive its benefits." Small hospitals must pay for hardware, software, training, and ongoing maintenance, but the financial benefits — reduced duplicate testing, better care coordination — mostly accrue to patients and payers. This financial disincentive explains why smaller institutions lagged even after federal incentives.',
      wrong:
        'The chapter specifically addresses why small practices and hospitals have been slower to adopt EHRs: the cost-benefit gap. They must pay for the system but often do not directly benefit financially. The chapter states that from "a practice\'s financial perspective, these factors actually may produce a significant disincentive for adopting EHRs." Information blocking and LOINC/SNOMED are separate issues.',
    },
  },
  {
    topic: 'Human Limits and HIT',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Why Can\'t Doctors Just Remember Everything?',
    scenario:
      'A researcher studying physician workload finds that the average primary care doctor manages 2,500 patients, juggles 15+ prescriptions per patient, and must stay current on thousands of clinical guidelines. The chapter argues that this level of complexity exceeds the biological limits of human attention — healthy human performance begins to measurably decrease after about 40 minutes of monitoring a continuous process. According to Chapter 11, what is the primary reason EHRs with CDSS are worth implementing despite mixed evidence for their overall effectiveness?',
    options: [
      {
        text: 'EHRs reduce paperwork, which saves money for hospitals and physician practices.',
        correct: false,
      },
      {
        text: 'EHRs combine the physician\'s human judgment and intuition with the computer\'s ability to never tire or forget — creating a human-computer hybrid that outperforms either alone.',
        correct: true,
      },
      {
        text: 'EHRs allow the government to monitor physician prescribing patterns and reduce fraud.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter states that the driving force behind HIT is understanding human biological limitations — performance decreases after about 40 minutes, fatigue affects decision-making, and the amount of data physicians must process is "increasing exponentially" while their ability to process it stays constant. The solution is a human-computer hybrid where the physician provides judgment and intuition, and the computer provides tireless data recall.',
      wrong:
        'The chapter argues that the core case for EHRs is human biology: physicians have real cognitive limits, fatigue affects performance, and the amount of clinical data is growing faster than any human can track. EHRs with CDSS compensate for these limits by combining "the intuitive strengths of humans with the limitless data retention and recall speed of computers." This rationale exists even though the overall evidence for EHR impact is, in the chapter\'s words, "mixed."',
    },
  },
  {
    topic: 'RHIOs',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Who Runs the HIE?',
    scenario:
      'A student interning at a state health department learns that the regional HIE connecting hospital systems, clinics, and public health agencies is administered by a separate nonprofit organization. This organization creates the governance agreements, data sharing contracts, and technical standards that allow different EHR systems to exchange information. It also struggles to find a sustainable funding model — most of its budget comes from federal grants. According to Chapter 11, what is this type of organization called?',
    options: [
      {
        text: 'The ONC — the federal office that coordinates national HIT efforts.',
        correct: false,
      },
      {
        text: 'A Regional Health Information Organization (RHIO) — the organization that administers the HIE within a region.',
        correct: true,
      },
      {
        text: 'The Joint Commission (TJC) — the organization that accredits hospitals for quality.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter explains that HIEs are administered by Regional Health Information Organizations (RHIOs), which handle the technical, legal, and governance work required for data sharing across institutions. The chapter also notes the sustainability problem: "most of the operating HIEs are heavily subsidized with federal research grant funding" because RHIOs have not found a business model that works without federal support.',
      wrong:
        'The chapter defines RHIOs — Regional Health Information Organizations — as the organizations that administer HIEs at the regional level. The ONC operates at the national level and sets policy. The Joint Commission accredits hospitals for quality. RHIOs handle the local governance, contracts, and technical standards that make HIE possible.',
    },
  },
];

export const qualityScenarios: Scenario[] = [
  {
    topic: 'Seven Quality Domains',
    badge: 'quality',
    badgeLabel: 'Quality & Safety',
    isQuality: true,
    qualityNote: 'This scenario covers the seven domains of quality from Chapter 11 (IOM Crossing the Quality Chasm).',
    title: 'Which Quality Domain Is Missing?',
    scenario:
      'A 68-year-old patient with heart failure is discharged from the hospital. He receives a 12-page discharge summary written at a graduate reading level. The patient, who has a 6th-grade reading level, cannot understand which medications are new and which he should stop taking. Three days later, he takes the wrong combination of drugs and is readmitted. The hospital\'s EHR recorded "patient verbalized understanding" — checked off at discharge. According to Chapter 11\'s seven domains of quality, which domain was most directly violated?',
    options: [
      {
        text: 'Efficient — too much paper was used in the discharge process, wasting resources.',
        correct: false,
      },
      {
        text: 'Person-centered — care was not tailored to the patient\'s actual needs, values, and ability to understand the instructions.',
        correct: true,
      },
      {
        text: 'Timely — the discharge summary should have been given to the patient earlier in his hospital stay.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter defines person-centered care as care "tailored to the extent that it responds to patient needs, values, and preferences." A discharge summary written at a level the patient cannot read does not respond to his actual needs. Checking a box that says "patient verbalized understanding" is not the same as ensuring the patient can actually act on the information. This is the person-centered domain failure.',
      wrong:
        'The seven domains from Chapter 11 are: effective, safe, person-centered, timely, equitable, integrated, and efficient. The issue here is not paper use (efficient) or timing (timely) — it is that care was not tailored to the patient\'s actual literacy level and needs. The chapter defines person-centered as responding to "patient needs, values, and preferences." Discharge instructions a patient cannot read fail this domain.',
    },
  },
  {
    topic: 'Quality Organizations',
    badge: 'quality',
    badgeLabel: 'Quality & Safety',
    isQuality: true,
    qualityNote: 'This scenario covers the key quality organizations from Table 11-2 in Chapter 11.',
    title: 'Who Has the Power to Hold Hospitals Accountable?',
    scenario:
      'A hospital has not implemented a standardized falls prevention protocol, even though falls are one of the leading causes of preventable patient injury. During an inspection, an outside organization reviews the hospital\'s policies and practices and issues a formal citation. The hospital is warned that if it does not fix the problem, it could lose its accreditation — which would also mean losing Medicare and Medicaid reimbursement. According to Chapter 11, which organization conducts these inspections and has this level of influence over hospitals?',
    options: [
      {
        text: 'The National Quality Forum (NQF) — which sets policy for performance measure reporting.',
        correct: false,
      },
      {
        text: 'The Joint Commission (TJC) — which accredits hospitals and links that accreditation to CMS reimbursement.',
        correct: true,
      },
      {
        text: 'The Agency for Healthcare Research and Quality (AHRQ) — which funds research on healthcare quality.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter describes The Joint Commission as an organization that evaluates healthcare organizations and inspires them to excel in providing "safe and effective care of the highest quality." TJC accreditation is linked to CMS reimbursement — hospitals that lose accreditation can lose Medicare and Medicaid payments. This gives TJC real enforcement power. The chapter also notes that DNV-GL is an alternative accrediting body for hospitals that choose not to use TJC.',
      wrong:
        'The chapter\'s Table 11-2 lists key quality organizations. The Joint Commission (TJC) is the organization that conducts hospital inspections and accreditation — and because TJC accreditation is tied to CMS reimbursement, it has real enforcement power. The NQF sets performance measure policies but does not inspect hospitals. AHRQ funds research. TJC is the primary accreditation and accountability body for most U.S. hospitals.',
    },
  },
  {
    topic: 'CDSS and Quality',
    badge: 'quality',
    badgeLabel: 'Quality & Safety',
    isQuality: true,
    qualityNote: 'This scenario covers how CDSS contributes to healthcare quality improvement.',
    title: 'Using CDSS to Improve Preventive Care',
    scenario:
      'A community health center serves many patients with diabetes. The medical director notices that only 60% of diabetic patients are getting their annual foot exams — a key preventive care measure that can prevent amputations. She asks the IT team to set up the EHR so that every time a diabetic patient comes in for any visit, the provider sees a reminder that the foot exam is overdue — with a button to document the exam right then. Six months later, the rate rises to 85%. According to Chapter 11, what type of tool drove this improvement?',
    options: [
      {
        text: 'A Health Information Exchange (HIE) — which connected the clinic\'s records to outside specialists.',
        correct: false,
      },
      {
        text: 'A Clinical Decision Support System (CDSS) — specifically a preventive care reminder that fires at the point of care and prompts provider action.',
        correct: true,
      },
      {
        text: 'An ICD-10 billing code update — which allowed the clinic to bill for foot exams more accurately.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter explains that CDSS works best when it delivers "the right information, to the right person, in the right format, through the right channel, at the right point in workflow." A reminder that fires during a patient visit, when the provider is already thinking about that patient and can act immediately, is the ideal use case. The chapter\'s 2012 AHRQ review found high-strength evidence that CDSS improves preventive care ordering — exactly what happened here.',
      wrong:
        'The chapter describes Clinical Decision Support Systems (CDSS) as tools that deliver timely reminders to providers at the point of care. The 2012 AHRQ review of 311 studies found the strongest evidence for CDSS in improving preventive care ordering — exactly what a diabetic foot exam reminder does. HIEs connect records across institutions. ICD-10 codes are for billing. The preventive care reminder is a classic, evidence-supported CDSS application.',
    },
  },
  {
    topic: 'Patient vs System Perspective on Quality',
    badge: 'quality',
    badgeLabel: 'Quality & Safety',
    isQuality: true,
    qualityNote: 'This scenario covers the three perspectives on quality (patient, payer, health system) from Chapter 11.',
    title: 'What Does "Good Care" Mean — and to Whom?',
    scenario:
      'After being discharged from a hospital, two patients fill out satisfaction surveys. Patient A gives the hospital 5 stars: "The room was spotless, the nurses were friendly, and I was seen quickly." Patient B gives 3 stars: "I waited an hour, the room was okay, but they caught a medication error that could have killed me." The hospital\'s quality team is more focused on Patient B\'s experience. According to Chapter 11, why do patients and health systems often measure quality differently?',
    options: [
      {
        text: 'Patients are wrong about quality, so hospitals should ignore satisfaction surveys entirely.',
        correct: false,
      },
      {
        text: 'Patients tend to focus on visible, immediate experiences like cleanliness and wait times because it is difficult for them to evaluate clinical outcomes, while health systems focus on whether the condition improved and whether harm was prevented.',
        correct: true,
      },
      {
        text: 'Health systems focus on quality only because of HIPAA regulations requiring outcome reporting.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correct. The chapter explains that "patients often tend to care about bedside manner, cleanliness, and the waiting room" because "it is difficult for patients to really know the background and record of mistakes linked to their physicians\' or nurses\' performance." Health systems and insurers, on the other hand, focus on outcomes: "Did the condition improve? Did the patient return for the same issue?" Neither perspective is wrong — they reflect what each party can reasonably observe.',
      wrong:
        'The chapter acknowledges both perspectives as valid but explains why they differ. Patients cannot easily evaluate clinical competence — they don\'t know which doctor has the best outcomes — so they focus on what they can see: cleanliness, friendliness, wait time. Health systems can track clinical outcomes and are accountable for them through laws like MACRA and the ACA. The chapter says patient satisfaction "is not a well-defined concept, but it is an important indicator of quality."',
    },
  },
];

export const ADVOCACY_TOPICS = [
  'Maternal Mortality and Racial Disparities',
  'The Baltimore Drug Crisis and Fentanyl',
  'Mental Health in College Athletes',
  'Criminalization of Mental Illness',
  'Mental Health in Older Adults',
  'Cannabis Legalization and Public Health',
  'HIV Prevention and PrEP Access',
  'Neonatal ICU and Premature Birth',
  'Medicaid Dental Coverage Gaps',
  'Virtual Reality Therapy in Pain Management',
  'Fentanyl Overdose Crisis and Harm Reduction',
  'Sickle Cell Disease and Environmental Health',
  'ACA Marketplace Premium Affordability',
  'Water Contamination and Community Health',
  'Immigrant Health Access and Barriers',
  'ADHD Underdiagnosis in Girls and Minorities',
  'Foster Care and Behavioral Health IT',
  'Opioid Prescribing Reform',
  'Maternal Mortality Legislation',
  'Safer Prescribing Practices',
  'Health Care in Incarcerated Populations',
  'Early Childhood Mental Health',
  "Women's Reproductive Health Access",
  'Residential Mental Health Treatment',
  'Neonatal Diabetes Management',
  'Return-to-Play Protocols and Concussion',
  'Hospital Pain Management Practices',
  'Fentanyl Test Strips and Harm Reduction',
  'Food Insecurity and Chronic Disease',
  'Mental Health Services in K-12 Schools',
  'Rural Health Disparities and Access',
  'Other (specify in reflection)',
];

export function pickSessionScenarios(): Scenario[] {
  const shuffled = [...policyHITScenarios].sort(() => Math.random() - 0.5);
  const pickedPolicy = shuffled.slice(0, 5);
  const qualityPick = qualityScenarios[Math.floor(Math.random() * qualityScenarios.length)];
  const combined = [...pickedPolicy, qualityPick].sort(() => Math.random() - 0.5);
  return combined;
}

export function shuffleOptions(scenario: Scenario): Scenario {
  const shuffledOptions = [...scenario.options].sort(() => Math.random() - 0.5) as [
    ScenarioOption,
    ScenarioOption,
    ScenarioOption,
  ];
  return { ...scenario, options: shuffledOptions };
}
