import { Card } from '../../components/Card';
import { MetricCard } from '../../components/MetricCard';
import { SectionHeader } from '../../components/SectionHeader';
import { Badge } from '../../components/Badge';
import { ModuleContainer } from '../../components/ModuleContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/Tabs';

export function BiomechanicalModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Biomechanical Analysis"
        subtitle="Corvis ST & ORA metrics with unified risk assessment"
      />

      <Tabs defaultValue="metrics" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="metrics">ORA Metrics</TabsTrigger>
          <TabsTrigger value="corvis">Corvis Metrics</TabsTrigger>
          <TabsTrigger value="unified">Unified Risk Index</TabsTrigger>
          <TabsTrigger value="cxl">CXL Candidacy</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <MetricCard
              label="Corneal Hysteresis (CH)"
              value={9.2}
              unit="mmHg"
              status="warning"
              trend="down"
              trendValue="Low elasticity"
            />
            <MetricCard
              label="Corneal Resistance Factor (CRF)"
              value={10.4}
              unit="mmHg"
              status="warning"
              trend="down"
              trendValue="Reduced resistance"
            />
            <MetricCard
              label="IOPg (Gaussian)"
              value={16.2}
              unit="mmHg"
              status="normal"
            />
          </div>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ORA Clinical Interpretation</h3>
            <p className="text-gray-700 mb-4">
              Low corneal hysteresis (9.2 mmHg) indicates reduced biomechanical resilience, consistent with keratoconus pathology. CRF reduction suggests compromised corneal structural integrity.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <span className="text-sm font-semibold text-amber-900">Corneal Stiffness Status</span>
                <Badge variant="warning">Compromised</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <span className="text-sm font-semibold text-amber-900">Biomechanical Stability</span>
                <Badge variant="warning">Borderline</Badge>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="corvis">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <MetricCard
              label="SSI (Stiffness Slope)"
              value={6.8}
              unit=""
              status="warning"
              trend="down"
              trendValue="Low stiffness"
            />
            <MetricCard
              label="CBI (Corneal Biomechanical Index)"
              value={38}
              unit=""
              status="warning"
              trend="down"
              trendValue="Ectasia risk"
            />
            <MetricCard
              label="TBI (Tissue Biomechanical Index)"
              value={2.1}
              unit=""
              status="warning"
            />
            <MetricCard
              label="DA (Deformation Amplitude)"
              value={1.24}
              unit="mm"
              status="warning"
            />
          </div>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Corvis ST Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Parameter</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Value</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Reference Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">Pachymetry Slope</td>
                    <td className="py-3 px-4 text-center font-semibold">-0.42 µm/mm</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant="critical">Abnormal</Badge>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">≥ -0.1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">AR Ratio</td>
                    <td className="py-3 px-4 text-center font-semibold">1.58</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant="warning">Suspect</Badge>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">&lt; 1.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="unified">
          <Card className="mb-6 border-2 border-amber-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Unified Biomechanical Risk Index</h3>
              <div className="text-right">
                <div className="text-5xl font-bold text-amber-700">7.2</div>
                <p className="text-sm text-amber-600">Moderate to High Risk</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-xs font-semibold text-amber-700 uppercase mb-2">Topographic Risk</p>
                <p className="text-2xl font-bold text-amber-700">42%</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-xs font-semibold text-amber-700 uppercase mb-2">Biomechanical Risk</p>
                <p className="text-2xl font-bold text-amber-700">68%</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-xs font-semibold text-amber-700 uppercase mb-2">Clinical Risk Factors</p>
                <p className="text-2xl font-bold text-amber-700">35%</p>
              </div>
            </div>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Fusion Summary</h3>
            <p className="text-gray-700">
              Combined topographic and biomechanical analysis indicates moderate-to-high ectasia risk. Corneal stiffness reduction (CH 9.2, CRF 10.4) amplifies topographic suspicion. Recommend cautious approach to refractive surgery or prioritize CXL stabilization.
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="cxl">
          <Card className="border-2 border-green-200 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">CXL Candidacy</h3>
              <Badge variant="normal">Eligible</Badge>
            </div>
            <p className="text-gray-700 mb-4">
              Biomechanical metrics support CXL intervention to restore corneal rigidity and arrest progression.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>CH &lt; 10: Yes (9.2), indicates need for stiffening</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Pachymetry &gt; 400 µm: Yes (512 µm), safe for standard CXL</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Progressive KC: Yes, CXL indicated</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span>CXL Modality: Standard (epithelium-off) or accelerated (9 mW/cm²)</span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Expected Post-CXL Improvements</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm font-semibold text-blue-900 mb-1">CH Recovery</p>
                <p className="text-xs text-blue-800">Typically improves 1–3 mmHg post-CXL at 3–6 months</p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm font-semibold text-blue-900 mb-1">Stability Window</p>
                <p className="text-xs text-blue-800">Recomm ended re-evaluation: 1, 3, 6, 12 months post-CXL</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleContainer>
  );
}
