import { Card } from '../../components/Card';
import { SectionHeader } from '../../components/SectionHeader';
import { Badge } from '../../components/Badge';
import { ModuleContainer } from '../../components/ModuleContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/Tabs';

export function PostSurgicalModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Post-Surgical Evaluation"
        subtitle="Detect decentration, ectasia, and epithelial remodeling patterns"
      />

      <Tabs defaultValue="overview" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="decentration">Decentration</TabsTrigger>
          <TabsTrigger value="regression">Regression</TabsTrigger>
          <TabsTrigger value="ectasia">Ectasia Detection</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Post-Op Timeline</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm text-blue-900">Pre-Op Date</span>
                  <span className="font-semibold text-blue-900">May 3, 2025</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm text-blue-900">Surgery Date (LASIK OD)</span>
                  <span className="font-semibold text-blue-900">June 15, 2025</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm text-blue-900">Current Exam (Post-Op)</span>
                  <span className="font-semibold text-blue-900">November 15, 2025 (5 months)</span>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-amber-200">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Early Ectasia Indicators</h3>
              <p className="text-sm text-amber-800 mb-3">
                Five months post-op signs:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Badge variant="warning">Alert</Badge>
                  <span className="text-amber-800">Kmax increased from 44.4 D → 45.2 D</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="critical">Critical</Badge>
                  <span className="text-red-800">Pachymetry declined: 524 µm → 512 µm</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="warning">Alert</Badge>
                  <span className="text-amber-800">BAD-D worsened: 2.44 → 2.78</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="border-l-4 border-l-red-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Provisional Diagnosis</h3>
            <p className="text-gray-700">
              <span className="font-semibold text-red-700">Suspected Post-LASIK Ectasia (Early Stage):</span> Progressive steepening and thinning in the post-op period suggest corneal biomechanical failure. Immediate CXL intervention recommended to stabilize cornea.
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="decentration">
          <Card className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ablation Zone Decentration Analysis</h3>
            <div className="bg-gradient-to-br from-blue-100 to-red-100 rounded-lg h-48 flex items-center justify-center mb-4">
              <p className="text-gray-600">Ablation Zone Heatmap with Decentration Vector</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Decentration Distance</span>
                <span className="text-sm font-semibold text-gray-900">0.8 mm</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Decentration Direction</span>
                <span className="text-sm font-semibold text-gray-900">Inferonasal</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <span className="text-sm text-amber-900">Clinical Significance</span>
                <Badge variant="warning">Borderline</Badge>
              </div>
            </div>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Decentration Assessment</h3>
            <p className="text-gray-700">
              Mild inferonasal decentration (0.8 mm) detected. While technically &lt; 1.0 mm, combined with underlying keratoconus morphology, decentration may contribute to ongoing optical aberrations and ectasia progression.
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="regression">
          <Card className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Refractive Regression Analysis</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-700 mb-2">Planned Ablation Depth (Pre-Op)</p>
                <p className="text-2xl font-bold text-gray-900">92 µm</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2">Effective Ablation Depth (Calculated from Current Pachy)</p>
                <p className="text-2xl font-bold text-gray-900">80 µm</p>
              </div>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-900">
                  <span className="font-semibold">Regression:</span> -0.27 D/month over 5 months
                </p>
                <p className="text-xs text-amber-800 mt-1">Moderate regression rate; suggests incomplete initial flattening.</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Epithelial Remodeling Patterns</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm font-semibold text-blue-900">Epithelial Thinning Pattern</p>
                <p className="text-xs text-blue-800 mt-1">Central epithelial remodeling detected; patient likely compensating for stromal refractive changes.</p>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm font-semibold text-amber-900">Bow-Tie Remodeling</p>
                <p className="text-xs text-amber-800 mt-1">Epithelium thinner inferiorly, suggesting post-op ectatic changes concentrating at the inferior cone.</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ectasia">
          <Card className="border-2 border-red-200 mb-6">
            <h3 className="text-lg font-semibold text-red-900 mb-4">Early Ectasia Detection Module</h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-red-900">Kmax Progression</span>
                  <Badge variant="critical">High Risk</Badge>
                </div>
                <p className="text-xs text-red-800">+0.8 D over 5 months post-op = accelerated steepening</p>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-red-900">Pachymetric Thinning</span>
                  <Badge variant="critical">High Risk</Badge>
                </div>
                <p className="text-xs text-red-800">-12 µm over 5 months = rapid stromal loss beyond normal post-op pattern</p>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-red-900">Central Island / Irregular Astig</span>
                  <Badge variant="warning">Present</Badge>
                </div>
                <p className="text-xs text-red-800">Topographic irregularity index elevated; suggests uneven stromal remodeling</p>
              </div>
            </div>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ectasia Probability Score</h3>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-700">Early Ectasia Risk (Dupps-Randleman Index)</span>
                <span className="text-3xl font-bold text-red-700">71%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-red-600 h-3 rounded-full" style={{ width: '71%' }}></div>
              </div>
            </div>

            <p className="text-gray-700">
              <span className="font-semibold text-red-700">URGENT INTERVENTION RECOMMENDED:</span> Early-stage post-LASIK ectasia. Immediate CXL (same-day or within 1 week) strongly advised to halt progression and stabilize cornea before further decompensation.
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleContainer>
  );
}
