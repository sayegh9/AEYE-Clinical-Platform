import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { SectionHeader } from '../../components/SectionHeader';
import { ModuleContainer } from '../../components/ModuleContainer';

export function QualityControlModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Quality Control Agent"
        subtitle="Blink artifact detection, alignment warnings, and repeatability assessment"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="border-2 border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-900">Image Quality</h3>
            <Badge variant="normal">Pass</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Alignment</span>
              <span className="text-sm font-semibold text-green-700">Centered</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Focus</span>
              <span className="text-sm font-semibold text-green-700">Sharp</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Coverage</span>
              <span className="text-sm font-semibold text-green-700">Complete</span>
            </div>
          </div>
        </Card>

        <Card className="border-2 border-amber-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-amber-900">Artifact Warnings</h3>
            <Badge variant="warning">1 Alert</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">⚠</span>
              <span className="text-sm text-amber-800">Possible mild blink artifact (inferior region)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-green-800">No CL warp or double-ring detected</span>
            </div>
          </div>
        </Card>

        <Card className="border-2 border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-900">Repeatability</h3>
            <Badge variant="normal">Excellent</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Kmax Consistency</span>
              <span className="text-sm font-semibold text-green-700">±0.1 D</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Pachy CV</span>
              <span className="text-sm font-semibold text-green-700">2.1%</span>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">QC Summary</h3>
        <p className="text-gray-700">
          Pentacam image quality is acceptable for clinical analysis. Recommend repeat acquisition if artifact affects interpretation.
        </p>
      </Card>
    </ModuleContainer>
  );
}
