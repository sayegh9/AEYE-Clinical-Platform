import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { SectionHeader } from '../../components/SectionHeader';
import { ModuleContainer } from '../../components/ModuleContainer';

export function HeatmapParsingModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Heatmap Parsing Module"
        subtitle="AI-driven tomography interpretation with cone detection and hotspot analysis"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Kmax Heatmap (OD)</h3>
          <div className="bg-gradient-to-br from-blue-100 via-yellow-100 to-red-100 rounded-lg h-48 flex items-center justify-center border-2 border-gray-200">
            <p className="text-gray-600">Anterior Curvature Heatmap</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">Blue (flattest) → Red (steepest)</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Posterior Elevation (OD)</h3>
          <div className="bg-gradient-to-br from-green-100 via-blue-100 to-red-100 rounded-lg h-48 flex items-center justify-center border-2 border-gray-200">
            <p className="text-gray-600">Posterior Surface Heatmap</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">Green (normal) → Red (elevated cone)</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cone Detection</h3>
          <div className="space-y-2">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-semibold text-amber-900">Primary Cone</p>
              <p className="text-xs text-amber-800 mt-1">Location: Inferocenter, apex ~4.2 D steeper than baseline</p>
            </div>
            <Badge variant="warning" className="mt-2">Suspect KC</Badge>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Island Detection</h3>
          <div className="space-y-2">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-semibold text-green-900">Status</p>
              <p className="text-xs text-green-800 mt-1">No posterior island detected</p>
            </div>
            <Badge variant="normal">Clear</Badge>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Decentration Analysis</h3>
          <div className="space-y-2">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-semibold text-amber-900">Horizontal Offset</p>
              <p className="text-xs text-amber-800 mt-1">-0.6 mm (nasal)</p>
            </div>
            <Badge variant="warning">Borderline</Badge>
          </div>
        </Card>
      </div>

      <Card className="border-l-4 border-l-amber-500">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Heatmap Interpretation Summary</h3>
        <p className="text-gray-700">
          AI analysis reveals a central inferocentric cone consistent with keratoconus morphology. Anterior and posterior surface heatmaps show coordinate steepening pattern. No posterior island or secondary cones detected. Decentration is mild. Overall profile aligns with suspect keratoconus classification.
        </p>
      </Card>
    </ModuleContainer>
  );
}
