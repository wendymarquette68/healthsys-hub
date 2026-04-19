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
    topic: 'Maternal Mortality',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'Closing the Maternal Mortality Gap',
    scenario:
      'Maryland has one of the highest Black maternal mortality rates in the nation. A state legislator wants to mandate that all obstetric providers use a standardized EHR risk-scoring tool that flags high-risk pregnancies and triggers automatic care-coordination alerts. Opponents argue this will increase provider burden without improving outcomes. As a health policy advisor, what is the strongest argument for moving forward?',
    options: [
      {
        text: 'Mandate the tool because EHR-based CDSS alerts have demonstrated reductions in preventable obstetric complications in similar state programs.',
        correct: true,
      },
      {
        text: 'Delay the mandate until a randomized controlled trial proves the tool works in Maryland specifically.',
        correct: false,
      },
      {
        text: 'Replace the EHR tool with a paper checklist since technology increases cognitive load for busy providers.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Clinical Decision Support Systems (CDSS) embedded in EHRs have an evidence base for reducing preventable harm. Waiting for a local RCT when national evidence exists costs lives. This reflects meaningful use criteria: EHR tools that support quality measurement and patient safety.',
      wrong:
        'CDSS tools embedded in EHRs are a core meaningful use strategy. Delaying action when national evidence supports the intervention — or reverting to paper — undermines both the quality and equity goals of HIT adoption.',
    },
  },
  {
    topic: 'Drug Crisis',
    badge: 'crisis',
    badgeLabel: 'Crisis Response',
    isQuality: false,
    title: 'The Baltimore Opioid Emergency',
    scenario:
      'Baltimore City is experiencing a surge in fentanyl overdose deaths. The city health commissioner proposes connecting all emergency departments to a regional Health Information Exchange (HIE) so that when an overdose patient arrives, their prior opioid prescriptions and prior ED visits are immediately visible. A privacy advocacy group argues this violates patient confidentiality. What is the best policy response?',
    options: [
      {
        text: 'Reject the HIE because HIPAA prohibits sharing substance use records without explicit patient consent in all circumstances.',
        correct: false,
      },
      {
        text: 'Implement the HIE connection under the treatment exception in HIPAA and 42 CFR Part 2 amendments that permit coordinated care for substance use disorder.',
        correct: true,
      },
      {
        text: 'Create a separate paper-based prescription log at each hospital instead of using an HIE to avoid data breach risk.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'HIEs enable care coordination across facilities, which is a core function under meaningful use. Federal law (42 CFR Part 2 was amended in 2020 and 2024) now permits sharing SUD records for treatment purposes. This is exactly the equity-and-safety use case HIEs were designed for.',
      wrong:
        'HIPAA has a treatment exception that permits sharing for care coordination. 42 CFR Part 2 was amended to allow HIE sharing for treatment purposes. Paper logs create dangerous fragmentation — the opposite of what HIT policy is designed to solve.',
    },
  },
  {
    topic: 'Mental Health in Athletes',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'Screening Athletes for Mental Health',
    scenario:
      'A Division I university athletic department wants to implement mandatory mental health screening for all student athletes using a validated digital tool embedded in the team EHR. The athletic director is concerned about stigma and whether screening results will be shared with coaches. Which policy design best protects athletes while advancing care?',
    options: [
      {
        text: 'Make screening optional and share results with coaches only for athletes flagged as high-risk.',
        correct: false,
      },
      {
        text: 'Mandate screening, store results only in the student health EHR accessible to treating clinicians — never coaches — and use CDSS to automatically refer high-scorers to counseling.',
        correct: true,
      },
      {
        text: 'Skip standardized screening and rely on self-referral since athletes are adults who can identify their own needs.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'This design uses CDSS for systematic identification and referral — a key HIT quality function — while firewalling clinical data from coaches, which is required under FERPA and HIPAA. Mandatory screening with protected access is the evidence-based approach endorsed by the NCAA.',
      wrong:
        'Giving coaches access to mental health data violates HIPAA and FERPA and creates a chilling effect on help-seeking. Relying on self-referral misses the majority of cases. CDSS-driven systematic screening is the HIT solution that closes this gap.',
    },
  },
  {
    topic: 'Criminalization of Mental Illness',
    badge: 'equity',
    badgeLabel: 'Health Equity',
    isQuality: false,
    title: 'Data Across the Justice-Health Divide',
    scenario:
      'A Maryland county jail houses 35% of the county\'s untreated severely mentally ill population. The county health department wants to build an HIE connection between the jail\'s health record system and community mental health providers so that when someone is released, their psychiatric history is immediately available to their outpatient provider. What is the primary legal and technical challenge?',
    options: [
      {
        text: 'The primary challenge is that jails use paper records, so digitization must come before HIE connection.',
        correct: false,
      },
      {
        text: 'The primary challenge is that correctional health records are governed by different privacy rules than community health records, requiring specific data-sharing agreements and consent protocols before HIE integration.',
        correct: true,
      },
      {
        text: 'The primary challenge is cost — HIE connections are too expensive for county jail budgets.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Correctional health records fall under a patchwork of HIPAA, state law, and corrections-specific regulations. Meaningful HIE integration requires legal data-sharing agreements and — depending on state law — patient consent for release to community providers. This is a governance and interoperability challenge, not primarily a technical one.',
      wrong:
        'Most jails have some form of electronic health record. The core barrier is legal governance — correctional records exist in a different regulatory environment from community health records. HIE interoperability requires resolving these legal frameworks before any technical connection is made.',
    },
  },
  {
    topic: 'Older Adult Mental Health',
    badge: 'equity',
    badgeLabel: 'Health Equity',
    isQuality: false,
    title: 'Telehealth and the Isolated Elder',
    scenario:
      'During COVID-19, CMS expanded telehealth coverage for Medicare beneficiaries, including mental health visits. Now Congress is debating whether to make these expansions permanent. An advocacy coalition argues that older adults with depression in rural areas were dramatically better served by telehealth than in-person care. What HIT policy argument best supports permanent extension?',
    options: [
      {
        text: 'Telehealth should be permanent because it is cheaper for Medicare, regardless of clinical outcomes.',
        correct: false,
      },
      {
        text: 'Telehealth should be permanent because patient-reported outcomes and access data show it reduced missed appointments and improved equitable access for rural and homebound seniors — a quality and equity argument grounded in evidence.',
        correct: true,
      },
      {
        text: 'Telehealth should revert to pre-pandemic rules because in-person care is always clinically superior for mental health.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Telehealth is a form of HIT that directly addresses access — a quality domain. The policy argument must be grounded in outcomes and equity data, not just cost. EHR-integrated telehealth aligns with meaningful use goals of expanding access and improving care coordination.',
      wrong:
        'Cost alone is insufficient justification for HIT policy — outcomes and equity evidence matter. There is strong evidence that telehealth mental health care produces equivalent outcomes to in-person for many conditions, and superior access outcomes for rural and homebound patients.',
    },
  },
  {
    topic: 'Cannabis Policy',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'CPOE and the Cannabis Drug Interaction Problem',
    scenario:
      'Maryland has legalized recreational cannabis. A hospital pharmacist notices that the CPOE system does not flag cannabis as a potential interaction with warfarin (a blood thinner), even though cannabis can significantly increase bleeding risk. The pharmacist wants to add cannabis to the CDSS drug-interaction database. What is the primary obstacle?',
    options: [
      {
        text: 'The primary obstacle is that adding cannabis to CPOE requires FDA approval for the software update.',
        correct: false,
      },
      {
        text: 'The primary obstacle is that because cannabis remains federally illegal, it is not included in standard drug databases that feed CDSS systems, creating a systematic gap in clinical decision support.',
        correct: true,
      },
      {
        text: 'The primary obstacle is that cannabis interactions are too rare to be worth adding to the system.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'CPOE systems pull drug interaction data from national databases (like First Databank or Lexicomp) that are tied to FDA-approved substances. Because cannabis is federally scheduled, it is largely absent from these databases — a policy-created HIT gap that puts patients on anticoagulants at real risk. This is a direct consequence of federal-state policy conflict affecting health information technology.',
      wrong:
        'CDSS drug databases are FDA-tied. Federal illegality — not FDA approval for software or rarity of interaction — is the core barrier. Cannabis-warfarin interaction is clinically significant and increasingly common as cannabis use rises in states that have legalized it.',
    },
  },
  {
    topic: 'HIV/PrEP Access',
    badge: 'equity',
    badgeLabel: 'Health Equity',
    isQuality: false,
    title: 'Patient Portals and PrEP Navigation',
    scenario:
      'A Baltimore community health center serving a predominantly Black LGBTQ+ population wants to use its EHR patient portal to send automated reminders for PrEP refills and quarterly lab checks. A staff member raises the concern that many patients have unstable housing and limited smartphone access. What is the most equitable HIT implementation strategy?',
    options: [
      {
        text: 'Launch the patient portal reminder system as planned — patients who want care will find a way to access it.',
        correct: false,
      },
      {
        text: 'Deploy a multi-modal outreach system: portal messages for patients with verified portal access, plus automated SMS for those with confirmed cell numbers, plus a staff callback list for patients with neither — all driven from the same EHR data.',
        correct: true,
      },
      {
        text: 'Abandon digital outreach entirely and use paper mailers since digital tools disadvantage marginalized populations.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'This is the equity domain of quality in action: designing HIT implementation to not widen disparities. A single-channel digital strategy excludes the most vulnerable. The correct approach uses EHR data to drive multi-modal outreach — meeting patients where they are — which is what equity-centered HIT design requires.',
      wrong:
        'Assuming all patients can access a portal ignores digital health equity. Abandoning digital tools entirely sacrifices the reach and consistency HIT provides. Multi-modal outreach driven by EHR segmentation is the evidence-based equity approach.',
    },
  },
  {
    topic: 'Neonatal ICU',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'CDSS Alerts in the NICU',
    scenario:
      'A neonatal intensive care unit has implemented a CDSS that fires an alert every time a nurse enters vital signs outside a normal range for a neonate. Within three months, nurses report "alert fatigue" — they are ignoring many alerts because too many fire for minor deviations. One nurse missed a critical sepsis alert because it looked the same as dozens of low-priority alerts. What is the best systems-level fix?',
    options: [
      {
        text: 'Remove the CDSS alerts entirely and return to nurse judgment, since automated systems create more harm than good.',
        correct: false,
      },
      {
        text: 'Implement tiered alert severity with visual and audio differentiation — critical alerts (sepsis, apnea) escalate distinctly from informational alerts — and audit the alert library quarterly to suppress low-value alerts.',
        correct: true,
      },
      {
        text: 'Require nurses to document why they dismissed each alert to create accountability.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Alert fatigue is one of the most documented safety hazards in EHR/CDSS implementation. The evidence-based fix is alert tiering, not removal or punitive documentation. This reflects the "safe" quality domain: designing systems to prevent harm from the system itself, not just from disease.',
      wrong:
        'Removing CDSS eliminates a proven safety tool. Punitive documentation increases burden without fixing the signal-to-noise problem. Tiered alerts with periodic audit is the standard approach recommended by AHRQ and The Joint Commission for managing alert fatigue.',
    },
  },
  {
    topic: 'Medicaid Dental',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'Dental Data in the HIE',
    scenario:
      'Maryland Medicaid covers limited dental benefits for adults, but dental providers are not required to participate in the state HIE. A patient with poorly controlled diabetes sees her endocrinologist, who does not know she has severe periodontitis — a condition that significantly worsens glycemic control. What policy change would most directly address this care coordination gap?',
    options: [
      {
        text: 'Require all Medicaid dental providers to submit encounter data to the state HIE as a condition of Medicaid participation, enabling medical providers to see dental diagnoses.',
        correct: true,
      },
      {
        text: 'Train medical providers to ask patients about dental health during annual visits.',
        correct: false,
      },
      {
        text: 'Create a separate dental EHR system that patients can share manually with their medical providers.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'HIE integration is the HIT solution for fragmented care. Tying dental HIE participation to Medicaid billing is a policy lever that creates systematic data sharing without relying on patient memory or provider questioning. This is the "integrated" quality domain in practice — using HIT to connect siloed care systems.',
      wrong:
        'Relying on provider questions or manual patient sharing misses the point of HIT: systematic, automatic data flow. Policy must create the mandate for dental providers to participate in the HIE — participation incentives tied to Medicaid payment are the most effective lever.',
    },
  },
  {
    topic: 'VR Therapy',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Adopting VR Therapy in a Clinical Setting',
    scenario:
      'A veterans hospital wants to implement VR therapy for PTSD treatment. The technology has promising early evidence. The CIO asks whether to integrate VR session outcomes into the main EHR or keep them in a separate VR platform database. What is the correct HIT governance decision?',
    options: [
      {
        text: 'Keep VR outcomes in a separate platform — integrating experimental technologies into the main EHR creates regulatory risk.',
        correct: false,
      },
      {
        text: 'Integrate VR session outcomes into the main EHR using standardized clinical terminology (SNOMED/LOINC) so that VR treatment progress is visible to the full care team and included in quality measurement.',
        correct: true,
      },
      {
        text: 'Wait until VR therapy receives FDA clearance before documenting outcomes in any clinical system.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Integration into the main EHR using standardized terminology is the meaningful use principle in action: all clinical data should be in one longitudinal record, accessible to the care team, and structured for quality reporting. Fragmented data in a separate system means VR outcomes are invisible to other providers and cannot drive quality improvement.',
      wrong:
        'Siloed data systems undermine care coordination — the exact problem HIE and integrated EHRs are designed to solve. VR therapy outcomes are clinical data; they belong in the clinical record in standardized form, regardless of whether the modality is experimental.',
    },
  },
  {
    topic: 'Fentanyl Crisis',
    badge: 'crisis',
    badgeLabel: 'Crisis Response',
    isQuality: false,
    title: 'Prescription Drug Monitoring and Fentanyl',
    scenario:
      'Maryland\'s Prescription Drug Monitoring Program (PDMP) tracks controlled substance prescriptions, but illicitly manufactured fentanyl is not tracked because it is not prescribed. A legislator proposes requiring all emergency department visits for overdose to be entered into the PDMP regardless of whether a prescription was involved. What is the strongest argument for this proposal?',
    options: [
      {
        text: 'The strongest argument is that it will allow police to identify dealers based on overdose patterns.',
        correct: false,
      },
      {
        text: 'The strongest argument is that tracking all overdose encounters — not just prescriptions — creates a surveillance dataset that can identify geographic hotspots, inform naloxone distribution, and trigger public health intervention, turning the PDMP from a prescriber tool into a population health HIT platform.',
        correct: true,
      },
      {
        text: 'The strongest argument is that it will reduce Medicaid costs by identifying patients who are overusing emergency services.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'This reframes the PDMP — originally a prescriber-focused HIT tool — as a population health surveillance system. This is the evolution of HIT: using clinical encounter data for public health intelligence. Geographic overdose data drives equitable naloxone deployment and intervention, serving the equity and effective quality domains.',
      wrong:
        'Using PDMP for law enforcement would deter patients from seeking care — the opposite of a public health goal. Cost reduction is a downstream effect, not the primary argument. The core value of expanding PDMP data is population health surveillance and equitable intervention.',
    },
  },
  {
    topic: 'Sickle Cell and Environment',
    badge: 'equity',
    badgeLabel: 'Health Equity',
    isQuality: false,
    title: 'SDOH Data in the Sickle Cell EHR',
    scenario:
      'Research shows that air pollution and heat exposure significantly increase vaso-occlusive crises in sickle cell disease patients. A pediatric hematology clinic wants to add social determinants of health (SDOH) fields to their EHR — specifically housing type, zip code, and proximity to industrial sites — to proactively contact patients before heat waves or poor air quality events. What is this practice called, and is it consistent with meaningful use goals?',
    options: [
      {
        text: 'This is "predictive analytics" and it exceeds the scope of meaningful use, which only covers clinical data.',
        correct: false,
      },
      {
        text: 'This is SDOH data integration with EHR-driven population health management — fully consistent with Stage 3 meaningful use goals that require capturing SDOH fields and using them for care coordination.',
        correct: true,
      },
      {
        text: 'This is a privacy violation because zip code combined with diagnosis constitutes protected health information that cannot be used for outreach.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Stage 3 meaningful use explicitly includes SDOH data capture. Using EHR data to proactively manage population health — especially for a condition worsened by environmental exposures — is exactly what modern HIT policy supports. Zip code is PHI but its use for treatment (proactive outreach) is permitted under HIPAA\'s treatment exception.',
      wrong:
        'Meaningful use Stage 3 expanded beyond clinical data to include SDOH. HIPAA permits using PHI for treatment purposes, including proactive care coordination. SDOH-EHR integration is a named priority in CMS quality improvement initiatives.',
    },
  },
  {
    topic: 'ACA Marketplace',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'Premium Subsidies and the Coverage Cliff',
    scenario:
      'A 28-year-old single parent earning 250% of the Federal Poverty Level loses ACA marketplace subsidies mid-year when she gets a small raise and crosses into the next income bracket, making her monthly premium jump by $180. She drops coverage. Six months later she is hospitalized for an appendicitis with a $28,000 bill. What policy mechanism would have prevented this outcome?',
    options: [
      {
        text: 'Medicaid expansion — she should have been on Medicaid regardless of her income.',
        correct: false,
      },
      {
        text: 'A subsidy cliff elimination policy — replacing the abrupt subsidy cutoff with a gradual subsidy phase-out (as implemented in the Inflation Reduction Act) so that modest income gains do not trigger sudden premium spikes.',
        correct: true,
      },
      {
        text: 'A hospital charity care policy requiring hospitals to forgive bills for anyone earning under 400% FPL.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'The "subsidy cliff" or "coverage cliff" is a structural flaw in the ACA that the Inflation Reduction Act addressed by extending and smoothing subsidies. This is the core policy lever: income-graduated subsidies that do not punish small raises with large premium jumps. This directly addresses the "efficient" and "person-centered" quality domains by keeping people insured.',
      wrong:
        'Medicaid eligibility ends well below 250% FPL in most states. Charity care addresses aftermath, not prevention. The structural fix is subsidy design — the IRA approach of gradual phase-out rather than a cliff. This is a coverage policy question, not a Medicaid or hospital finance question.',
    },
  },
  {
    topic: 'Water Contamination',
    badge: 'equity',
    badgeLabel: 'Health Equity',
    isQuality: false,
    title: 'Public Health Reporting and the HIE',
    scenario:
      'Lead contamination is discovered in a Baltimore neighborhood\'s water supply. The city health department wants to cross-reference zip codes with EHR data from area pediatric practices to identify children who may have had elevated blood lead levels that were never acted upon. What HIT mechanism makes this feasible, and what is the key consent consideration?',
    options: [
      {
        text: 'The health department can purchase the EHR data from practices since it is for a public good, without any legal framework.',
        correct: false,
      },
      {
        text: 'A public health HIE data-sharing agreement — authorized under HIPAA\'s public health exception — allows the health department to access de-identified or identified records for public health surveillance without individual patient consent when there is an imminent health threat.',
        correct: true,
      },
      {
        text: 'The health department must obtain written consent from each patient\'s guardian before accessing any EHR record, making this approach impractical in a crisis.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'HIPAA contains a public health exception (45 CFR §164.512(b)) that permits disclosure to public health authorities for disease surveillance without individual consent. This is one of the most important HIE use cases — using health data for population-level crisis response. The legal framework exists precisely for this scenario.',
      wrong:
        'Purchasing data without legal authority is not permissible. Individual consent in a crisis is logistically impossible and not required under the HIPAA public health exception. HIEs with public health authority data-sharing agreements are the proper mechanism — this is a named HIE use case in federal HIT policy.',
    },
  },
  {
    topic: 'Immigrant Health',
    badge: 'equity',
    badgeLabel: 'Health Equity',
    isQuality: false,
    title: 'Language Access in the EHR',
    scenario:
      'A federally qualified health center (FQHC) serves a large Spanish-speaking population. Their EHR generates automated after-visit summaries in English only. Many patients cannot read the instructions, miss follow-up appointments, and end up in the ED for preventable complications. What HIT fix addresses this most directly?',
    options: [
      {
        text: 'Hire more bilingual staff to call patients after every visit to explain the English instructions.',
        correct: false,
      },
      {
        text: 'Configure the EHR to generate after-visit summaries in the patient\'s preferred language, documented in the demographics field — a meaningful use requirement that the FQHC has failed to implement.',
        correct: true,
      },
      {
        text: 'Translate the paper after-visit summary manually for patients who request it at the front desk.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Preferred language documentation and multilingual patient communications are meaningful use requirements. The EHR is already capable of this — the FQHC has not configured it correctly. This is a HIT implementation failure, not a staffing or translation problem. The fix is configuration and process, not adding labor.',
      wrong:
        'Manual translation and phone calls are labor-intensive workarounds for a problem that meaningful use requirements already mandate a technology solution for. EHR-generated multilingual after-visit summaries in the patient\'s documented preferred language is the standard of practice.',
    },
  },
  {
    topic: 'ADHD Underdiagnosis',
    badge: 'equity',
    badgeLabel: 'Health Equity',
    isQuality: false,
    title: 'CDSS Screening for ADHD in Primary Care',
    scenario:
      'Research shows that Black girls and Latinas are significantly underdiagnosed with ADHD compared to white boys with similar symptom profiles, partly because clinicians rely on subjective presentation rather than standardized tools. A pediatric practice wants to use its EHR to prompt all providers to administer the Vanderbilt ADHD rating scale at well-child visits for ages 6-12. What type of HIT tool is this, and what equity benefit does it provide?',
    options: [
      {
        text: 'This is a quality improvement audit — it reviews past care but does not change current clinical decisions.',
        correct: false,
      },
      {
        text: 'This is a CDSS preventive care reminder — by prompting universal standardized screening at the point of care, it removes the bias that causes clinicians to selectively refer only patients who "look like" the classic ADHD presentation.',
        correct: true,
      },
      {
        text: 'This is a population health report — it generates data for research but does not affect individual care.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'CDSS preventive care reminders that trigger at the point of care are a core meaningful use function. When applied universally (all patients in an age group, not just those flagged by clinician intuition), they systematically reduce the racial and gender bias documented in ADHD diagnosis. This is HIT serving the equity domain of quality.',
      wrong:
        'A point-of-care prompt that fires during the encounter is a CDSS preventive care reminder, not an audit or a report. The equity value is in the universal trigger — it removes discretion and the bias embedded in that discretion.',
    },
  },
  {
    topic: 'Foster Care HIT',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Health Records Across Foster Placements',
    scenario:
      'Children in foster care in Maryland average 3 placement changes. Each move often means a new primary care provider with no access to the child\'s prior medical, psychiatric, or immunization history. A child welfare advocate proposes a cross-agency HIE connecting child welfare case management software, Medicaid billing records, and clinical EHRs. What is the biggest governance challenge to building this HIE?',
    options: [
      {
        text: 'The biggest challenge is that foster children are too young to consent, making any data sharing illegal.',
        correct: false,
      },
      {
        text: 'The biggest challenge is that child welfare, Medicaid, and clinical records are governed by three different federal privacy laws (FERPA, Medicaid data use agreements, and HIPAA), requiring coordinated legal frameworks before any technical integration can occur.',
        correct: true,
      },
      {
        text: 'The biggest challenge is that child welfare agencies do not use electronic systems, so there is no data to share.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'This is the classic HIE governance problem: technical integration is straightforward, but legal interoperability across agency siloes requires resolving conflicts between HIPAA (clinical), FERPA (education), and Medicaid data use agreements. Foster care HIE is a documented national priority — several states have built it — but legal governance is always the first obstacle.',
      wrong:
        'Parents or guardians consent for minors in care, and HIPAA permits treatment-purpose sharing. Most states use electronic child welfare systems. The real barrier is legal governance across three different federal privacy frameworks governing three different data systems.',
    },
  },
  {
    topic: 'Opioid Prescribing',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'CPOE Limits on Opioid Prescribing',
    scenario:
      'A hospital implements a CPOE rule that automatically limits opioid prescriptions for acute pain to a 3-day supply for patients without a prior opioid prescription on file. Providers can override the limit with a documented clinical justification. Surgeons complain that post-surgical patients are being under-treated for pain. What does the evidence say about this type of CPOE limit?',
    options: [
      {
        text: 'CPOE opioid limits are counterproductive — they increase ED visits for pain and do not reduce opioid misuse.',
        correct: false,
      },
      {
        text: 'CPOE opioid default limits with documented override reduce total opioid prescribing and new opioid use disorder cases without significantly increasing pain-related ED revisits, according to multiple health system studies.',
        correct: true,
      },
      {
        text: 'CPOE opioid limits violate physician autonomy and are not legally permissible without state legislation.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Default CPOE limits with override capability are a "choice architecture" approach — they make the safer option the default while preserving clinical judgment. Multiple studies (including from Michigan and CDC) show that opioid prescribing defaults in CPOE reduce first-time opioid exposure without measurable increase in pain-related returns. This is HIT doing harm prevention.',
      wrong:
        'Evidence supports CPOE defaults as effective. Hospitals have always had the authority to set prescribing policies — no state legislation is required. The override mechanism preserves clinical autonomy while making safer prescribing the path of least resistance.',
    },
  },
  {
    topic: 'Maternal Mortality Legislation',
    badge: 'policy',
    badgeLabel: 'Health Policy',
    isQuality: false,
    title: 'Postpartum Coverage Extension',
    scenario:
      'Maryland extended Medicaid coverage from 60 days to 12 months postpartum in 2022, aligned with the American Rescue Plan. Research shows that 52% of maternal deaths occur between 1 week and 1 year after delivery — after the old coverage ended. A legislator wants to make this extension permanent. What HIT tool would best help the state evaluate whether the policy is working?',
    options: [
      {
        text: 'A patient satisfaction survey sent to all new mothers at 6 months postpartum.',
        correct: false,
      },
      {
        text: 'A state HIE-linked maternal health dashboard that tracks postpartum Medicaid claims, ED visits, mental health diagnoses, and death records by coverage status and race — enabling real-time policy evaluation.',
        correct: true,
      },
      {
        text: 'An annual report from each hospital\'s quality department submitted to the state.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Population-level policy evaluation requires linked administrative and clinical data — exactly what an HIE-connected dashboard provides. Tracking claims, ED visits, diagnoses, and vital records by coverage status lets policymakers measure whether extending coverage is preventing the deaths and crises that occur in the coverage gap. This is HIT serving public health surveillance.',
      wrong:
        'Patient satisfaction surveys capture experience but not outcomes. Annual hospital reports are siloed and slow. Real-time HIE-linked dashboard analysis of claims and outcomes data is the HIT tool for measuring population-level policy impact.',
    },
  },
  {
    topic: 'Hospital Pain Management',
    badge: 'hit',
    badgeLabel: 'Health IT',
    isQuality: false,
    title: 'Pain Scores and EHR Gaming',
    scenario:
      'A hospital\'s EHR is configured to trigger a CDSS alert if a patient\'s pain score stays above 6 out of 10 for more than two consecutive assessments, prompting a nurse to document an intervention. Over time, nursing staff begin routinely documenting pain scores as 5 or 6 to avoid the alert, without actually reassessing the patient. What is this phenomenon and what is the systemic fix?',
    options: [
      {
        text: 'This is documentation fraud and should be addressed only through individual disciplinary action for nurses who falsify records.',
        correct: false,
      },
      {
        text: 'This is a "gaming the metric" response to a poorly designed CDSS alert — the fix is to change the alert logic to require a timestamp-verified reassessment and to audit pain score distributions for statistical implausibility (too many scores of exactly 5 or 6).',
        correct: true,
      },
      {
        text: 'This is unavoidable — any numerical quality metric will eventually be gamed, so pain scores should be removed from the EHR.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Goodhart\'s Law: when a measure becomes a target, it ceases to be a good measure. This is a systemic CDSS design flaw, not primarily an individual ethics problem. The fix is better alert design (requiring timestamped reassessment) and statistical monitoring of score distributions to detect gaming. This is how quality improvement works — iterating on measurement design.',
      wrong:
        'Individual discipline without system redesign perpetuates the problem. Removing pain scores eliminates a clinically necessary data point. The root cause is alert design that incentivizes avoidance — the solution is system redesign and statistical monitoring.',
    },
  },
];

export const qualityScenarios: Scenario[] = [
  {
    topic: 'Quality Domains',
    badge: 'quality',
    badgeLabel: 'Quality & Safety',
    isQuality: true,
    qualityNote: 'This scenario covers the seven domains of healthcare quality from Chapter 11.',
    title: 'Which Quality Domain Is Being Violated?',
    scenario:
      'A patient with congestive heart failure is discharged from a Baltimore hospital with a 14-page paper discharge summary. The document is written at a 12th-grade reading level. The patient cannot identify which medications are new, which are changed, and which are stopped. Three days later she is readmitted with a medication error. The discharging physician documents that the patient "verbalized understanding" — a checkbox in the EHR. Which quality domain was most directly violated?',
    options: [
      {
        text: 'Efficient — the discharge process used too many resources (14 pages) when a shorter summary would suffice.',
        correct: false,
      },
      {
        text: 'Person-centered — care that is person-centered is respectful of and responsive to individual patient preferences, needs, and values, including health literacy; a document the patient cannot use violates this domain.',
        correct: true,
      },
      {
        text: 'Timely — the discharge summary was delivered at discharge but should have been started earlier in the stay.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Person-centered care means care that is tailored to the individual, including their health literacy level, language, and ability to act on instructions. A 12th-grade discharge summary for a patient with limited literacy is not person-centered, regardless of what the EHR checkbox says. This failure directly caused a preventable readmission — also an "effective" and "safe" domain failure, but person-centered is the primary violation.',
      wrong:
        'The issue is not resource use or timing — it is that the care plan was not designed for the actual patient. Person-centered is the domain that requires providers to communicate in ways patients can understand and act upon. The EHR checkbox "verbalized understanding" is not a substitute for confirmed comprehension.',
    },
  },
  {
    topic: 'CDSS and Quality',
    badge: 'quality',
    badgeLabel: 'Quality & Safety',
    isQuality: true,
    qualityNote: 'This scenario covers EHR-driven quality improvement and clinical decision support.',
    title: 'CDSS as a Quality Improvement Tool',
    scenario:
      'A Maryland hospital\'s quality team reviews data showing that only 62% of diabetic patients receive a retinal eye exam annually — far below the HEDIS benchmark of 80%. The quality officer wants to use the EHR to close this gap. Which CDSS intervention has the strongest evidence for improving preventive care rates in diabetes management?',
    options: [
      {
        text: 'Add a quality measure report that the medical director reviews quarterly to identify non-compliant providers.',
        correct: false,
      },
      {
        text: 'Implement a point-of-care EHR reminder that fires during any diabetic patient visit when the annual retinal exam is overdue, with a one-click referral order embedded in the alert.',
        correct: true,
      },
      {
        text: 'Send a letter to all diabetic patients reminding them to schedule a retinal exam with their ophthalmologist.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Point-of-care CDSS reminders with embedded order sets are the highest-impact intervention for preventive care gaps. The combination of triggering at the moment of clinical decision (not retroactively) plus removing friction (one-click order) is what makes this approach effective. Quarterly reports change behavior slowly; patient letters rely on patient action. Embedded CDSS changes the default workflow.',
      wrong:
        'Quarterly reviews are retrospective and do not change in-the-moment clinical decisions. Patient letters have low response rates for preventive care. The evidence is clear: point-of-care CDSS with embedded ordering capability produces the largest improvements in preventive care quality metrics.',
    },
  },
  {
    topic: 'HIE and Equity',
    badge: 'quality',
    badgeLabel: 'Quality & Safety',
    isQuality: true,
    qualityNote: 'This scenario covers HIE data standardization and health equity measurement.',
    title: 'Race and Ethnicity Data in the HIE',
    scenario:
      'Maryland\'s state HIE wants to publish a public equity dashboard showing readmission rates, preventable ED visits, and chronic disease control broken down by race and ethnicity. The HIE analyst discovers that 40% of EHR records have race and ethnicity fields blank, coded inconsistently across hospitals, or using outdated OMB 1977 categories that do not capture multiracial identity. What is the best next step?',
    options: [
      {
        text: 'Publish the dashboard using only the complete records and note the data limitation in the footnotes.',
        correct: false,
      },
      {
        text: 'Launch a standardization initiative requiring all HIE-participating hospitals to adopt the 2024 OMB revised race/ethnicity categories and implement EHR front-end prompts for self-reported race/ethnicity at registration, before publishing the equity dashboard.',
        correct: true,
      },
      {
        text: 'Use ZIP code as a proxy for race since racially segregated neighborhoods mean ZIP code correlates with race.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'You cannot measure health equity without accurate, standardized demographic data. Publishing a dashboard with 40% missing data will undercount disparities and give false reassurance. The 2024 OMB revisions added a Middle Eastern/North African category and changed the multiracial options. Standardization before publication is the correct sequence — the dashboard will be more credible and actionable.',
      wrong:
        'Publishing with 40% missing data is misleading — missing data is not random, it is often concentrated in vulnerable populations, systematically undercounting disparities. ZIP code as a race proxy is methodologically invalid and ethically problematic. Data standardization must precede equity measurement.',
    },
  },
  {
    topic: 'Accreditation and Quality',
    badge: 'quality',
    badgeLabel: 'Quality & Safety',
    isQuality: true,
    qualityNote: 'This scenario covers The Joint Commission, accreditation, and CMS quality enforcement.',
    title: 'Joint Commission, CMS, and Hospital Accountability',
    scenario:
      'During a Joint Commission survey, inspectors find that a Maryland hospital\'s EHR does not have a standardized falls risk assessment firing at patient admission, and that two patients fell and were injured in the past quarter. The hospital argues that nurses perform informal falls assessments using their clinical judgment. What is the Joint Commission\'s likely response, and why?',
    options: [
      {
        text: 'The Joint Commission will accept the informal assessment since clinical judgment is more sophisticated than a standardized tool.',
        correct: false,
      },
      {
        text: 'The Joint Commission will cite a National Patient Safety Goal violation and require the hospital to implement a validated, standardized falls risk assessment protocol — such as the Morse Fall Scale — with EHR documentation, within a defined correction window.',
        correct: true,
      },
      {
        text: 'The Joint Commission can only make recommendations — CMS is the only body that can require EHR changes.',
        correct: false,
      },
    ],
    feedback: {
      correct:
        'Falls prevention with a validated standardized tool is a Joint Commission National Patient Safety Goal (NPSG 09.02.01). Clinical judgment without a documented standardized tool does not meet the standard. Failure to implement NPSGs can result in a Requirement for Improvement (RFI) and, if unresolved, loss of accreditation — which triggers loss of CMS reimbursement. The Joint Commission has real enforcement power through its link to CMS certification.',
      wrong:
        'The Joint Commission has direct enforcement authority through accreditation decisions that determine CMS Medicare/Medicaid certification eligibility. Clinical judgment without a standardized documented tool does not meet NPSG requirements. Falls prevention is one of the most cited NPSG areas.',
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
