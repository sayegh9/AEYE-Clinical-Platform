import { Card } from '../../components/Card';
import { MetricCard } from '../../components/MetricCard';
import { SectionHeader } from '../../components/SectionHeader';
import { Badge } from '../../components/Badge';
import { ModuleContainer } from '../../components/ModuleContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/Tabs';
import { CheckCircle2, AlertTriangle, XCircle, Slider } from 'lucide-react';

export function SurgicalPlannerModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Surgical Planning Assistant"
        subtitle="Ablation simulation, optical zone optimization, and modality safety margins"
      />

      <Tabs defaultValue="simulation" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="simulation">Ablation Simulation</TabsTrigger>
          <TabsTrigger value="icz">Optical Zone & ICZ</TabsTrigger>
          <TabsTrigger value="modalities">Modality Comparison</TabsTrigger>
          <TabsTrigger value="icl">ICL Planning</TabsTrigger>
        </TabsList>

        <TabsContent value="simulation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ablation Depth Calculation (OD)</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Refraction: -5.5 D sphere, -2.0 D cylinder</p>
                  <p className="text-sm font-semibold text-gray-900">Simulated Ablation Depth: 92 µm</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Pre-Op Pachymetry: 512 µm</p>
                  <p className="text-sm font-semibold text-gray-900">Residual Stromal Bed: 420 µm</p>
                </div>
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-red-800">
                    <span className="font-semibold">UNSAFE:</span> RSB &lt; 250 µm minimum (ESCRS)
                  </span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ablation Depth Profile</h3>
              <div className="bg-gradient-to-b from-blue-100 to-amber-100 rounded-lg h-40 flex items-center justify-center">
                <p className="text-gray-600">Corneal Profile Chart</p>
              </div>
            </Card>
          </div>

          <Card className="border-l-4 border-l-red-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ablation Safety Verdict</h3>
            <p className="text-gray-700">
              Proposed LASIK ablation exceeds safe stromal bed thickness. Corneal thinning from keratoconus morphology combined with required ablation depth creates unacceptable post-operative ectasia risk. Ablation is NOT RECOMMENDED.
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="icz">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Optical Zone Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Suggested OZ (Optical Zone)</span>
                  <span className="text-sm font-semibold text-gray-900">6.0 mm</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Treatment OZ</span>
                  <span className="text-sm font-semibold text-gray-900">6.5 mm</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Transition Zone</span>
                  <span className="text-sm font-semibold text-gray-900">1.0 mm</span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Irregular Cornea Adjustment</h3>
              <p className="text-sm text-gray-700 mb-3">
                Due to irregular topography (suspect keratoconus), standard OZ calculations may not apply. Customized ablation profile recommended if proceeding.
              </p>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm font-semibold text-amber-900">Recommendation</p>
                <p className="text-xs text-amber-800 mt-1">Evaluate wavefront-guided or topography-guided ablation, not standard algorithm.</p>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="modalities">
          <div className="space-y-4 mb-6">
            <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
              <div className="flex items-center gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-semibold text-red-900">LASIK (OD)</h3>
              </div>
              <div className="space-y-2 text-sm text-red-800">
                <p><span className="font-semibold">RSB:</span> 420 µm (UNSAFE &lt; 250 µm min, &lt; 300 µm recommended)</p>
                <p><span className="font-semibold">Keratoconus Risk:</span> Forme fruste KC contraindicates all stromal tissue removal</p>
                <p><span className="font-semibold">Verdict:</span> CONTRAINDICATED</p>
              </div>
            </div>

            <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-semibold text-red-900">PRK (OD)</h3>
              </div>
              <div className="space-y-2 text-sm text-red-800">
                <p><span className="font-semibold">Advantage:</span> No stromal flap preserves biomechanical integrity</p>
                <p><span className="font-semibold">Risk:</span> Surface ablation still removes tissue; keratoconus progression post-op likely</p>
                <p><span className="font-semibold">Verdict:</span> CAUTION—Only if patient heavily counseled and CXL planned</p>
              </div>
            </div>

            <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-900">ICL / Phakic IOL</h3>
              </div>
              <div className="space-y-2 text-sm text-green-800">
                <p><span className="font-semibold">Advantage:</span> No tissue removal; preserves corneal structure</p>
                <p><span className="font-semibold">Ideal For:</span> Suspect/true keratoconus with refractive needs</p>
                <p><span className="font-semibold">Verdict:</span> ELIGIBLE—Recommended modality for this patient</p>
              </div>
            </div>
          </div>

          <Card className="border-l-4 border-l-[#0A74B8]">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Surgical Modality Summary</h3>
            <p className="text-gray-700">
              Due to suspected keratoconus, aggressive biomechanical compromise, and rapid progression, tissue-removing procedures (LASIK/PRK/SMILE) carry prohibitive ectasia risk. ICL implantation is the preferred refractive modality, allowing full refractive correction without corneal surface modification.
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="icl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <MetricCard
              label="Anterior Chamber Depth (ACD)"
              value={3.2}
              unit="mm"
              status="normal"
            />
            <MetricCard
              label="White-to-White (WTW)"
              value={11.8}
              unit="mm"
              status="normal"
            />
            <MetricCard
              label="Endothelial Cell Density (ECD)"
              value={2650}
              unit="cells/mm²"
              status="normal"
            />
          </div>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ICL Sizing & Planning</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <span className="text-sm text-blue-900">Recommended ICL Size</span>
                <span className="text-sm font-semibold text-blue-900">13.2 mm</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <span className="text-sm text-blue-900">Required Refraction Correction</span>
                <span className="text-sm font-semibold text-blue-900">-5.5 D sphere, -2.0 D cylinder</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <span className="text-sm text-blue-900">Expected Post-Op UCVA</span>
                <span className="text-sm font-semibold text-blue-900">20/20 (estimated)</span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-semibold text-green-900 mb-2">ICL Candidacy: ELIGIBLE</p>
              <ul className="text-xs text-green-800 space-y-1">
                <li>✓ ACD 3.0–3.8 mm (Patient: 3.2 mm, optimal)</li>
                <li>✓ WTW 11.5–12.5 mm (Patient: 11.8 mm, suitable)</li>
                <li>✓ Stable refraction ≥ 12 months</li>
                <li>✓ ECD &gt; 2000 cells/mm² (Patient: 2650, excellent)</li>
              </ul>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleContainer>
  );
}
