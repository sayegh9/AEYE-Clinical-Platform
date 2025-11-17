import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { SectionHeader } from '../../components/SectionHeader';
import { ModuleContainer } from '../../components/ModuleContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/Tabs';

export function CXLPlanningModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="CXL Planning Module"
        subtitle="Standard vs. accelerated vs. transepithelial decision-tree with safety parameters"
      />

      <Tabs defaultValue="decision" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="decision">Decision Tree</TabsTrigger>
          <TabsTrigger value="modality">Modality Comparison</TabsTrigger>
          <TabsTrigger value="protocol">Protocol Details</TabsTrigger>
          <TabsTrigger value="schedule">Post-CXL Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="decision">
          <Card className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">CXL Candidacy Algorithm</h3>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-semibold text-green-900">✓ Pachymetry &gt; 400 µm?</p>
                <p className="text-sm text-green-800 mt-1">Patient: 512 µm (PASS) → Safe for standard epithelium-off CXL</p>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-semibold text-green-900">✓ Progressive KC or Ectasia?</p>
                <p className="text-sm text-green-800 mt-1">BAD-D 2.78 + Kmax ↑ + Pachy ↓ (PASS) → CXL indicated to arrest progression</p>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-semibold text-green-900">✓ Informed Consent & Counseling?</p>
                <p className="text-sm text-green-800 mt-1">Patient education completed (PASS) → Patient understands CXL rationale and timeline</p>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="font-semibold text-amber-900">⚠ Recent Epithelial Trauma or Surface Disease?</p>
                <p className="text-sm text-amber-800 mt-1">None reported (PASS) → Suitable for epithelium-off; consider epithelium-on if concerned</p>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-semibold text-green-900">✓ Overall CXL Recommendation</p>
                <p className="text-sm text-green-800 mt-1 font-semibold">ELIGIBLE — Proceed with Standard Epithelium-Off CXL</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="modality">
          <div className="space-y-4 mb-6">
            <Card className="border-2 border-green-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-green-900">Standard Epithelium-Off (Epi-off)</h3>
                <Badge variant="normal">RECOMMENDED</Badge>
              </div>
              <div className="space-y-2 text-sm text-green-800">
                <p><span className="font-semibold">Duration:</span> 30 minutes (+ epithelial debridement ~2 min)</p>
                <p><span className="font-semibold">UV-A Dose:</span> 3 mW/cm² for 30 min (5.4 J/cm²)</p>
                <p><span className="font-semibold">Riboflavin Saturation:</span> 20 min soaking (15 min pre-, 5 min intra-op)</p>
                <p><span className="font-semibold">Efficacy:</span> Maximum collagen cross-link depth (~300 µm into stroma)</p>
                <p><span className="font-semibold">Cost:</span> Standard (baseline)</p>
              </div>
            </Card>

            <Card className="border-2 border-amber-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-amber-900">Accelerated (Epi-off, 9 mW/cm²)</h3>
                <Badge variant="warning">ALTERNATIVE</Badge>
              </div>
              <div className="space-y-2 text-sm text-amber-800">
                <p><span className="font-semibold">Duration:</span> 10 minutes (faster procedure)</p>
                <p><span className="font-semibold">UV-A Dose:</span> 9 mW/cm² for 10 min (5.4 J/cm² same as standard)</p>
                <p><span className="font-semibold">Riboflavin Saturation:</span> Same (20 min soaking required)</p>
                <p><span className="font-semibold">Efficacy:</span> Equivalent to standard if dose-matched</p>
                <p><span className="font-semibold">Notes:</span> Reduced treatment time; equivalent collagen strengthening if performed correctly</p>
              </div>
            </Card>

            <Card className="border-2 border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-blue-900">Transepithelial (Epi-on)</h3>
                <Badge variant="warning">NOT RECOMMENDED</Badge>
              </div>
              <div className="space-y-2 text-sm text-blue-800">
                <p><span className="font-semibold">Advantage:</span> Faster recovery, less pain, lower infection risk</p>
                <p><span className="font-semibold">Disadvantage:</span> Reduced efficacy (~30% less cross-linking due to epithelial barrier)</p>
                <p><span className="font-semibold">When Used:</span> Mild progression, patient preference for comfort, or if epi-off contraindicated</p>
                <p><span className="font-semibold">This Patient:</span> Standard epi-off preferred due to aggressive KC phenotype</p>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="protocol">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Standard CXL Protocol (Epi-off)</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-900 mb-1">Pre-Op Preparation</p>
                <ul className="text-sm text-blue-800 space-y-1 ml-4">
                  <li>• Topical anesthesia (proparacaine 0.5%, 3 drops)</li>
                  <li>• Patient counseling on post-op discomfort (3–5 days)</li>
                  <li>• Verify pachymetry ≥ 400 µm (Patient: 512 µm ✓)</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="font-semibold text-green-900 mb-1">Intraoperative Procedure</p>
                <ul className="text-sm text-green-800 space-y-1 ml-4">
                  <li>• Remove corneal epithelium (via abrasion or laser, ~50 µm depth)</li>
                  <li>• Apply riboflavin 0.1% (isotonic) for 15 minutes until stroma saturated</li>
                  <li>• Verify riboflavin penetration depth via Tyndall effect</li>
                  <li>• Apply UV-A (365 nm, 3 mW/cm²) for 30 minutes with continuous irrigation</li>
                  <li>• Maintain anterior chamber stability and monitor corneal thickness</li>
                </ul>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-semibold text-amber-900 mb-1">Post-Op Care</p>
                <ul className="text-sm text-amber-800 space-y-1 ml-4">
                  <li>• Bandage contact lens (BCL) for 3–5 days during re-epithelialization</li>
                  <li>• Topical antibiotics (moxifloxacin 0.5%, 4×/day) for 1 week</li>
                  <li>• Topical NSAIDs (ketorolac 0.5%, 4×/day) for comfort/inflammation</li>
                  <li>• Avoid swimming, contact sports for 2 weeks</li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Post-CXL Follow-Up Schedule (Months 1–12)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Timepoint</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Exam Components</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-900">1 Month</td>
                    <td className="py-3 px-4 text-gray-700">BCVA, refraction, topography, pachymetry</td>
                    <td className="py-3 px-4 text-gray-700">Early healing, gross stability</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-900">3 Months</td>
                    <td className="py-3 px-4 text-gray-700">Full workup + biomechanics (ORA)</td>
                    <td className="py-3 px-4 text-gray-700">Verify stiffness recovery, Kmax plateau</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-900">6 Months</td>
                    <td className="py-3 px-4 text-gray-700">Full workup + repeat Pentacam</td>
                    <td className="py-3 px-4 text-gray-700">Assess long-term stability, compare pre-CXL baseline</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold text-gray-900">12 Months</td>
                    <td className="py-3 px-4 text-gray-700">Comprehensive repeat assessment</td>
                    <td className="py-3 px-4 text-gray-700">Definitive CXL efficacy, determine next intervention</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleContainer>
  );
}
