import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';

interface WorkflowNode {
  title: string;
  role: 'Agent' | 'Code Node' | 'System';
  description: string;
  inputs: string[];
  outputs: string[];
  safety: string;
}

const workflowNodes: WorkflowNode[] = [
  {
    title: 'Start Node + File/OCR Normalizer',
    role: 'System',
    description: 'Dify-style entry point accepts patient documents and Pentacam / AS-OCT images, runs OCR, and emits combined_patient_text plus normalized file metadata.',
    inputs: ['Uploaded documents', 'Imaging files', 'User question'],
    outputs: ['documents[]', 'images[]', 'combined_patient_text'],
    safety: 'Rejects lamellar workflow if no imaging or visit context is supplied.'
  },
  {
    title: 'Orchestrator Agent',
    role: 'Agent',
    description: 'Classifies the user turn (INITIAL_ASSESSMENT, FOLLOW_UP_QUERY, UNHANDLED_QUERY) using sys.query, sys.files, assessment_complete, and dialogue count.',
    inputs: ['sys.query', 'sys.files', 'conversation.assessment_complete'],
    outputs: ['intent'],
    safety: 'Never advances to downstream agents without explicit initial intent or follow-up confirmation.'
  },
  {
    title: 'Validate Orchestrator (Code)',
    role: 'Code Node',
    description: 'Deterministic gate that recomputes validated_intent prioritizing new files > completed assessments > textual triggers.',
    inputs: ['intent', 'sys.files', 'assessment_complete'],
    outputs: ['validated_intent'],
    safety: 'Prevents accidental follow-up path when new data is uploaded; blocks assessments with missing files.'
  },
  {
    title: 'General Ophthalmology Agent',
    role: 'Agent',
    description: 'Extracts demographics, ocular/systemic history, contact lens washout, and history-based risk flags into patient_history schema.',
    inputs: ['combined_patient_text'],
    outputs: ['patient_history'],
    safety: 'No eligibility decisions; only history summarization with washout sufficiency logic.'
  },
  {
    title: 'Pentacam & AS-OCT Agent',
    role: 'Agent',
    description: 'Iterates over each imaging file, producing pentacam_processed_data with per-eye keratometry, pachymetry, and pattern descriptors.',
    inputs: ['images[]'],
    outputs: ['pentacam_processed_data'],
    safety: 'Tags low-quality scans and unknown eye attribution for downstream filtering.'
  },
  {
    title: 'Aggregate Pentacam Data (Code)',
    role: 'Code Node',
    description: 'Deterministically merges all scans into imaging_data_stored, guarding against OD/OS swaps, duplicates, and missing metrics.',
    inputs: ['pentacam_processed_data'],
    outputs: ['imaging_data_stored'],
    safety: 'Requires Kmax, BAD-D, pachymetry, posterior elevation per eye before enabling decisions.'
  },
  {
    title: 'Pentacam Interpretation Agent',
    role: 'Agent',
    description: 'Applies AAO + ESCRS rules, Belin–Ambrósio logic, CL washout status, and pattern analysis to produce interpretation_report.',
    inputs: ['imaging_data_stored', 'pentacam_processed_data', 'patient_history'],
    outputs: ['interpretation_report'],
    safety: 'Flags BAD-D ≥ 2.6, ART-Max < 300 µm, posterior elevation ≥ 20 µm, or ectatic patterns as high risk.'
  },
  {
    title: 'PTA & RSB Calculator (Code)',
    role: 'Code Node',
    description: 'Uses thinnest pachymetry, intended correction, flap/cap defaults, and Munnerlyn approximation to compute PTA/RSB table.',
    inputs: ['interpretation_report', 'patient_history.refraction'],
    outputs: ['pta_rsb_table'],
    safety: 'Hard stops at LASIK PTA > 0.40, SMILE PTA > 0.38, RSB < 300 µm before modality scoring.'
  },
  {
    title: 'Anterior Segment Specialist Agent (Initial)',
    role: 'Agent',
    description: 'Synthesizes chief complaint, imaging, and PTA/RSB to populate diagnosis_and_plan with modality eligibility, mandatory imaging data, and final recommendation.',
    inputs: ['patient_history', 'interpretation_report', 'pta_rsb_table'],
    outputs: ['diagnosis_and_plan'],
    safety: 'Ectasia risk overrides PTA/RSB; corneal lasers set to caution/contra when BAD-D ≥ 2.6, ART-Max < 300 µm, or washout incomplete.'
  },
  {
    title: 'Final Report Formatter (Code)',
    role: 'Code Node',
    description: 'Transforms diagnosis_and_plan plus patient_history into a deterministic Markdown report for the EMR.',
    inputs: ['diagnosis_and_plan', 'patient_history'],
    outputs: ['report_markdown'],
    safety: 'Ensures documentation of guardrails, references (AAO, ESCRS, Belin–Ambrósio), and preserves state for follow-up.'
  },
  {
    title: 'Anterior Segment Specialist Agent (Follow-Up)',
    role: 'Agent',
    description: 'When assessment_complete = True and no new files are present, answers follow-up questions referencing stored variables without recomputing.',
    inputs: ['diagnosis_and_plan', 'interpretation_report', 'patient_history'],
    outputs: ['followup_note'],
    safety: 'Cannot overturn baseline contraindications unless validated new imaging is provided.'
  }
];

const conversationVariables = [
  {
    name: 'patient_history',
    owner: 'General Ophthalmology Agent',
    description: 'Demographics, systemic/ocular history, risk factors, contact lens profile, and final history impression.',
    sample: 'chief_complaint, medical_history, contact_lens_profile, keratoconus_risk_factors_flag'
  },
  {
    name: 'pentacam_processed_data',
    owner: 'Pentacam & AS-OCT Agent',
    description: 'Per-scan metrics and heatmap summaries for OD/OS with quality notes.',
    sample: 'right_eye.analysis_type, left_eye.heatmap_summary, quality_and_special_findings'
  },
  {
    name: 'imaging_data_stored',
    owner: 'Aggregate Pentacam Data (Code)',
    description: 'Canonical per-eye dataset (k1, k2, kmax, BAD-D, pachymetry, ART-Max, elevation, indices).',
    sample: 'OD.kmax_d, OD.thinnest_pachymetry_um, OD.posterior_elevation_um'
  },
  {
    name: 'interpretation_report',
    owner: 'Pentacam Interpretation Agent',
    description: 'Structured tomography narrative: risk levels, parameter flags, recommendations, consistency checks, washout status.',
    sample: 'eye_interpretations[].belin_ambrosio_interpretation.bad_d_value'
  },
  {
    name: 'pta_rsb_table',
    owner: 'PTA & RSB Calculator (Code)',
    description: 'Per eye × modality PTA, RSB (µm), and assumptions (flap thickness, optical zone).',
    sample: 'OD.LASIK.pta, OD.LASIK.rsb_um, OD.LASIK.assumptions[]'
  },
  {
    name: 'diagnosis_and_plan',
    owner: 'Anterior Segment Specialist Agent',
    description: 'Mandatory imaging data, modality eligibility, final recommendation, next steps, and clinical flags.',
    sample: 'modality_eligibility.laser.SMILE.status, critical_flags[]'
  },
  {
    name: 'assessment_complete',
    owner: 'Set Assessment Complete (Assign Node)',
    description: 'Boolean string ("True"/"False") gating follow-up routing.',
    sample: '"True"'
  }
];

const safetyLayers = [
  {
    title: 'Intent Validation Gate',
    details: [
      'INITIAL_ASSESSMENT requires new files or explicit “analyze patient” requests.',
      'FOLLOW_UP_QUERY permitted only when assessment_complete = True and no new uploads exist.',
      'Otherwise, user receives a clarification prompt (UNHANDLED_QUERY).'
    ]
  },
  {
    title: 'Imaging Sufficiency & OD/OS Guardrails',
    details: [
      'Aggregate node refuses to populate imaging_data_stored unless BAD-D, thinnest pachy, posterior elevation, ART-Max are present per eye.',
      'Quality-control flags propagate downstream to force provisional or deferred recommendations.',
      'OD/OS mismatches trigger scan_consistency_checks and block lamellar decisions.'
    ]
  },
  {
    title: 'Ectasia Risk Overrides',
    details: [
      'BAD-D ≥ 2.6 or category Abnormal automatically contraindicates LASIK/Femto-LASIK/SMILE.',
      'ART-Max < 300 µm or posterior elevation ≥ 20 µm in ectatic pattern moves PRK/Trans-PRK to at most caution.',
      'Classic ectatic heatmaps or poor repeatability prevent “eligible” status regardless of PTA/RSB.'
    ]
  },
  {
    title: 'Biomechanical Thresholds',
    details: [
      'LASIK/Femto PTA > 0.40 or RSB < 300 µm = contraindicated.',
      'SMILE PTA > 0.38 or RSB < 300 µm = contraindicated.',
      'PRK/Trans-PRK require PTA ≤ 0.45, RSB ≥ 300 µm, complete CL washout, and acceptable tomography patterns.'
    ]
  },
  {
    title: 'Report & Follow-Up Integrity',
    details: [
      'Final report formatter documents AAO/ESCRS/Belin–Ambrósio references and stores diagnosis_and_plan for longitudinal reuse.',
      'Follow-up agent can only answer using stored variables, ensuring idempotent narratives.',
      'Any missing metrics prompt “Case inconclusive—repeat Pentacam” messaging instead of speculative guidance.'
    ]
  }
];

const pathways = [
  {
    title: 'Initial Assessment Path',
    badges: ['Documents uploaded', 'New imaging', 'assessment_complete = "False"'],
    steps: [
      'Start Node → Orchestrator Agent → Validate Orchestrator',
      'Doc Extractor + Merge code → General Ophthalmology Agent → patient_history',
      'Iterative Pentacam Agent → Aggregate Pentacam Data → imaging_data_stored',
      'Pentacam Interpretation Agent → interpretation_report',
      'PTA & RSB Calculator → pta_rsb_table',
      'Anterior Segment Specialist Agent (Initial) → diagnosis_and_plan → Final Report Formatter',
      'Assign assessment_complete = "True" and deliver Markdown report'
    ]
  },
  {
    title: 'Follow-Up Query Path',
    badges: ['No new files', 'assessment_complete = "True"'],
    steps: [
      'Start Node (no files) → Orchestrator Agent → Validate Orchestrator = FOLLOW_UP_QUERY',
      'Anterior Segment Specialist Agent (Follow-Up Mode) references stored patient_history, interpretation_report, diagnosis_and_plan',
      'Responds with short chart note covering metric deltas, risk trajectory, and next steps',
      'If new imaging arrives mid-convo, validation gate reroutes to Initial Assessment path'
    ]
  }
];

export function WorkflowOrchestrationScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="AEYE Logo" className="h-10 w-10" />
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">AEYE Agentic Workflow</p>
              <h1 className="text-xl font-semibold text-gray-900">Deterministic Orchestration Blueprint</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        <SectionHeader
          title="Multi-Node Workflow"
          subtitle="Agentic cooperation with deterministic code gates, aligned with AAO/ESCRS/BAD-D guidance"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {workflowNodes.map((node) => (
            <Card key={node.title} className="border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{node.title}</h3>
                  <p className="text-sm text-gray-500">{node.description}</p>
                </div>
                <Badge variant={node.role === 'Code Node' ? 'warning' : node.role === 'Agent' ? 'normal' : 'info'}>
                  {node.role}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Inputs</p>
                  <ul className="space-y-1 text-gray-600">
                    {node.inputs.map((input) => (
                      <li key={input}>• {input}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Outputs</p>
                  <ul className="space-y-1 text-gray-600">
                    {node.outputs.map((output) => (
                      <li key={output}>• {output}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-blue-50 border border-blue-100 p-3 text-sm text-blue-900">
                <span className="font-semibold">Safety:</span> {node.safety}
              </div>
            </Card>
          ))}
        </div>

        <SectionHeader
          title="Structured Conversation Variables"
          subtitle="Schema-locked memory objects keep the workflow idempotent and follow-up ready"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conversationVariables.map((variable) => (
            <Card key={variable.name} className="border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{variable.name}</h3>
                <Badge variant="normal">State</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">Owner: {variable.owner}</p>
              <p className="text-sm text-gray-700 mb-3">{variable.description}</p>
              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-500">
                Example keys: {variable.sample}
              </div>
            </Card>
          ))}
        </div>

        <SectionHeader
          title="Deterministic Safety Layers"
          subtitle="Hard-coded guardrails prevent unsafe refractive surgery recommendations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyLayers.map((layer) => (
            <Card key={layer.title} className="border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{layer.title}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {layer.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A74B8] mt-1.5"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <SectionHeader
          title="Workflow Paths"
          subtitle="Initial assessments and follow-ups stay synchronized through assessment_complete gate"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pathways.map((path) => (
            <Card key={path.title} className="border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{path.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {path.badges.map((badge) => (
                    <Badge key={badge} variant="info">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                {path.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </Card>
          ))}
        </div>

        <Card className="border-l-4 border-l-red-500 bg-white shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Guardrails</h3>
          <p className="text-gray-700 leading-relaxed">
            AEYE encodes AAO ectasia risk management, ESCRS pre-op screening, and Belin–Ambrósio Enhanced Ectasia Display logic. Lamellar
            procedures are blocked whenever BAD-D ≥ 2.6, ART-Max &lt; 300 µm, posterior elevation ≥ 20 µm, pattern-based ectasia is observed,
            PTA exceeds 0.40 (LASIK/Femto) or 0.38 (SMILE), or RSB falls below 300 µm. Surface ablation (PRK / Trans-PRK) requires clean
            tomography, complete contact lens washout (soft ≥14 d, RGP ≥28 d for ETM), and PTA ≤ 0.45 with RSB ≥ 300 µm. When data are
            missing or quality is poor, the Final Report Formatter produces an explicit “Case inconclusive — repeat Pentacam / extend washout”
            statement to keep the workflow clinically conservative and reproducible.
          </p>
        </Card>
      </main>
    </div>
  );
}
