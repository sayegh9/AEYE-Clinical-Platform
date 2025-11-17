import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { SectionHeader } from '../../components/SectionHeader';
import { ModuleContainer } from '../../components/ModuleContainer';

export function CrossDeviceModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Cross-Device Harmonization"
        subtitle="Normalize indices across Pentacam, Galilei, and MS-39 platforms"
      />

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Compatibility Report</h3>
        <p className="text-gray-700 mb-4">
          This assessment uses Pentacam ELEV data. The following indices are harmonized for comparison across other platforms:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Index</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Pentacam (ELEV)</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Galilei (Equiv)</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">MS-39 (Equiv)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 px-4 text-gray-700">Kmax</td>
                <td className="py-3 px-4 text-center">45.2 D</td>
                <td className="py-3 px-4 text-center">45.0 D (+0.2)</td>
                <td className="py-3 px-4 text-center">45.4 D (-0.2)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-700">Pachymetry</td>
                <td className="py-3 px-4 text-center">512 µm</td>
                <td className="py-3 px-4 text-center">514 µm (-2)</td>
                <td className="py-3 px-4 text-center">510 µm (+2)</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 px-4 text-gray-700">Posterior Elevation</td>
                <td className="py-3 px-4 text-center">18 µm (BFS 7.4mm)</td>
                <td className="py-3 px-4 text-center">Schimtz BFS 7.3mm</td>
                <td className="py-3 px-4 text-center">BFS 7.5mm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 text-gray-700">BAD-D Equivalent</td>
                <td className="py-3 px-4 text-center">2.78</td>
                <td className="py-3 px-4 text-center">2.76 (Galilei Keratoconus Index ≈ BAD-D)</td>
                <td className="py-3 px-4 text-center">2.80 (MS-39 Keratoconus Pred ≈ BAD-D)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-2 border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-3">Pentacam ELEV</h3>
          <p className="text-xs text-gray-600 mb-3">Primary device for this assessment</p>
          <Badge variant="normal">Reference</Badge>
        </Card>

        <Card className="border-2 border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Galilei Dual Scheimflug</h3>
          <p className="text-xs text-gray-600 mb-3">Equivalent harmonized metrics available</p>
          <Badge variant="normal">±0.2 D (Kmax)</Badge>
        </Card>

        <Card className="border-2 border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Topcon MS-39</h3>
          <p className="text-xs text-gray-600 mb-3">Slit-scanning laser for cross-validation</p>
          <Badge variant="normal">±0.2 D (Kmax)</Badge>
        </Card>
      </div>

      <Card className="border-l-4 border-l-blue-500">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Harmonization Notes</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <span className="font-semibold">Kmax Cross-Platform Variance:</span> Typically ±0.1–0.3 D across devices due to different topographic algorithms and reference surfaces.
          </li>
          <li>
            <span className="font-semibold">Pachymetry Calibration:</span> Pentacam ultrasound pachymetry can differ ±5 µm from Galilei optical; MS-39 usually ±2 µm of Pentacam.
          </li>
          <li>
            <span className="font-semibold">BAD-D Equivalency:</span> Galilei Keratoconus Index and MS-39 Keratoconus Prediction Index are mathematically equivalent to Pentacam BAD-D; clinical thresholds remain consistent across platforms.
          </li>
          <li>
            <span className="font-semibold">Clinical Recommendation:</span> If serial monitoring is planned, use the same device for consistency unless harmonization adjustments are applied.
          </li>
        </ul>
      </Card>
    </ModuleContainer>
  );
}
