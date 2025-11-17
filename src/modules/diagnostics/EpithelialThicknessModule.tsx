import { Card } from '../../components/Card';
import { MetricCard } from '../../components/MetricCard';
import { SectionHeader } from '../../components/SectionHeader';
import { Badge } from '../../components/Badge';
import { ModuleContainer } from '../../components/ModuleContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/Tabs';

export function EpithelialThicknessModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Epithelial Thickness Map (ETM)"
        subtitle="Automatic epithelial thinning detection and pattern analysis"
      />

      <Tabs defaultValue="metrics" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="maps">Heatmap</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <MetricCard
              label="Minimum Thickness"
              value={37}
              unit="µm"
              status="warning"
              trend="up"
              trendValue="+2 µm vs baseline"
            />
            <MetricCard
              label="Maximum Thickness"
              value={62}
              unit="µm"
              status="normal"
              trend="down"
              trendValue="-1 µm vs baseline"
            />
            <MetricCard
              label="Min-Max Difference"
              value={25}
              unit="µm"
              status="normal"
              trend="up"
              trendValue="+3 µm vs baseline"
            />
          </div>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ETM Classification</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div>
                  <p className="font-semibold text-amber-900">Pattern: Bow-Tie</p>
                  <p className="text-sm text-amber-800 mt-1">Classic inferior-superior thinning pattern</p>
                </div>
                <Badge variant="warning">Suspect KC</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div>
                  <p className="font-semibold text-blue-900">Differentiation: Masked vs True KC</p>
                  <p className="text-sm text-blue-800 mt-1">Probability: 78% True KC based on pattern</p>
                </div>
                <Badge variant="warning">78%</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <p className="font-semibold text-green-900">Post-LASIK Assessment</p>
                  <p className="text-sm text-green-800 mt-1">No significant epithelial compensation detected</p>
                </div>
                <Badge variant="normal">Clear</Badge>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="maps">
          <Card>
            <div className="bg-gradient-to-b from-blue-100 to-red-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-600">ETM Heatmap Visualization</p>
            </div>
            <p className="text-xs text-gray-500 mt-4">Blue = Thicker | Red = Thinner</p>
          </Card>
        </TabsContent>

        <TabsContent value="patterns">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <h3 className="font-semibold text-gray-900 mb-3">Detected Patterns</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Bow-tie thinning (70% confidence)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Inferior decentration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>No donut pattern</span>
                </li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-semibold text-gray-900 mb-3">KC Risk Indicators</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Epithelial remodeling:</span>
                  <Badge variant="warning">Present</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span>Stromal thinning:</span>
                  <Badge variant="warning">Mild</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span>Asymmetric profile:</span>
                  <Badge variant="normal">Within limits</Badge>
                </li>
              </ul>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analysis">
          <Card className="border-l-4 border-l-amber-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Clinical Interpretation</h3>
            <p className="text-gray-700 leading-relaxed">
              ETM analysis reveals a classic bow-tie epithelial thinning pattern with 78% probability of true keratoconus rather than masked/subclinical form. The minimum epithelial thickness of 37 µm is below normal (typically 50–55 µm), suggesting active epithelial remodeling. Post-LASIK compensation is not evident. Recommend close monitoring and potential CXL intervention to arrest progression.
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleContainer>
  );
}
