import { Card } from '../../components/Card';
import { MetricCard } from '../../components/MetricCard';
import { SectionHeader } from '../../components/SectionHeader';
import { Badge } from '../../components/Badge';
import { ModuleContainer } from '../../components/ModuleContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/Tabs';

export function ProgressionTrackerModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Progression Tracker"
        subtitle="Compare latest vs. previous tomography and track progression risk"
      />

      <Tabs defaultValue="metrics" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="risk">Progression Risk</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <MetricCard
              label="ΔKmax (OD)"
              value={"+0.8"}
              unit="D"
              status="warning"
              trend="up"
              trendValue="vs 6 months ago"
            />
            <MetricCard
              label="Δpachy (OD)"
              value={"-12"}
              unit="µm"
              status="warning"
              trend="down"
              trendValue="vs 6 months ago"
            />
            <MetricCard
              label="Δelevation (OD)"
              value={"+3.2"}
              unit="µm"
              status="warning"
              trend="up"
              trendValue="vs 6 months ago"
            />
            <MetricCard
              label="ΔBAD-D (OD)"
              value={"+0.34"}
              unit=""
              status="critical"
              trend="up"
              trendValue="vs 6 months ago"
            />
          </div>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Comparison Table (OD)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Metric</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Baseline (May 2025)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Current (Nov 2025)</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Change</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">Kmax</td>
                    <td className="py-3 px-4 text-center">44.4 D</td>
                    <td className="py-3 px-4 text-center font-semibold">45.2 D</td>
                    <td className="py-3 px-4 text-center text-amber-700 font-semibold">+0.8 D</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant="warning">Progressing</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Thinnest Pachymetry</td>
                    <td className="py-3 px-4 text-center">524 µm</td>
                    <td className="py-3 px-4 text-center font-semibold">512 µm</td>
                    <td className="py-3 px-4 text-center text-red-700 font-semibold">-12 µm</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant="critical">Alert</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">BAD-D</td>
                    <td className="py-3 px-4 text-center">2.44</td>
                    <td className="py-3 px-4 text-center font-semibold">2.78</td>
                    <td className="py-3 px-4 text-center text-red-700 font-semibold">+0.34</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant="critical">High Risk</Badge>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">Posterior Elevation</td>
                    <td className="py-3 px-4 text-center">15 µm</td>
                    <td className="py-3 px-4 text-center font-semibold">18 µm</td>
                    <td className="py-3 px-4 text-center text-amber-700 font-semibold">+3 µm</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant="warning">Monitor</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="trends">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Kmax Trend (6-month view)</h3>
              <div className="bg-gradient-to-r from-blue-100 to-amber-100 rounded-lg h-40 flex items-center justify-center">
                <p className="text-gray-600">Trend Graph Placeholder</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">Upward trend: +0.133 D/month</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Pachymetry Trend (6-month view)</h3>
              <div className="bg-gradient-to-r from-green-100 to-red-100 rounded-lg h-40 flex items-center justify-center">
                <p className="text-gray-600">Trend Graph Placeholder</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">Downward trend: -2 µm/month</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risk">
          <Card className="mb-6 border-2 border-red-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Progression Probability</h3>
              <div className="text-right">
                <div className="text-4xl font-bold text-red-700">68%</div>
                <p className="text-sm text-gray-600">High Risk</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-700">ESCRS Rules</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-700">75%</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-700">Belin Rules</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '61%' }}></div>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-700">61%</span>
              </div>
            </div>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommendation</h3>
            <p className="text-gray-700">
              High progression probability warrants urgent consideration of corneal cross-linking (CXL) to stabilize corneal collagen. Repeat imaging in 1 month recommended. Patient should be counseled on progression risk and intervention timeline.
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </ModuleContainer>
  );
}
