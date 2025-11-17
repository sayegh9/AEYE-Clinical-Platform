import { Card } from '../../components/Card';
import { SectionHeader } from '../../components/SectionHeader';
import { Badge } from '../../components/Badge';
import { ModuleContainer } from '../../components/ModuleContainer';
import { AlertTriangle, AlertCircle, CheckCircle2 } from 'lucide-react';

export function SafetyFlagsModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Red-Flag Safety Agent"
        subtitle="Pre-screening emergency alert layer for critical findings"
      />

      <div className="mb-6 p-4 bg-red-50 border-l-4 border-l-red-600 rounded-lg flex gap-4">
        <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-red-900">CRITICAL ALERT DETECTED</h3>
          <p className="text-sm text-red-800 mt-1">Multiple red flags identified. Clinical intervention recommended before surgical planning.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-200">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h3 className="text-lg font-semibold text-red-900">Critical Flags</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-red-900">Suspect Keratoconus</span>
                <Badge variant="critical">Critical</Badge>
              </div>
              <p className="text-xs text-red-800">BAD-D 2.78 indicates forme fruste keratoconus. High ectasia risk.</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-red-900">Progressive Thinning</span>
                <Badge variant="critical">Critical</Badge>
              </div>
              <p className="text-xs text-red-800">Pachymetry declined -12 µm in 6 months. Rapid progression detected.</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-red-900">Biomechanical Compromise</span>
                <Badge variant="critical">Critical</Badge>
              </div>
              <p className="text-xs text-red-800">CH 9.2 mmHg indicates severely reduced corneal stiffness.</p>
            </div>
          </div>
        </Card>

        <Card className="border-2 border-amber-200">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            <h3 className="text-lg font-semibold text-amber-900">Warning Flags</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-amber-900">Patient Age &lt; 25</span>
                <Badge variant="warning">Warning</Badge>
              </div>
              <p className="text-xs text-amber-800">Age 23: Higher KC progression risk in younger patients.</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-amber-900">Atopic History</span>
                <Badge variant="warning">Warning</Badge>
              </div>
              <p className="text-xs text-amber-800">Seasonal allergies reported. Risk factor for eye rubbing.</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-amber-900">Borderline ART-Max</span>
                <Badge variant="warning">Warning</Badge>
              </div>
              <p className="text-xs text-amber-800">ART-Max 326 µm below safety margin for LASIK/PRK.</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="border-2 border-green-200 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          <h3 className="text-lg font-semibold text-green-900">Clear Findings</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-green-900">No evidence of epithelial defects or scars</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-green-900">No acute hydrops or significant stromal scarring</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-green-900">No keratoglobus or severe inferior steepening</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-green-900">No active keratitis</span>
          </div>
        </div>
      </Card>

      <Card className="border-l-4 border-l-red-600">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Clinical Recommendation</h3>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-red-700">CONTRAINDICATION: Corneal refractive surgery (LASIK/PRK/SMILE) is NOT recommended for this patient.</span> Multiple critical flags including suspect keratoconus, rapid pachymetric thinning, and biomechanical compromise create unacceptable ectasia risk.
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Recommended Plan:</span> (1) Urgent CXL consultation to stabilize corneal collagen; (2) Repeat topography + biomechanics in 1 month post-CXL initiation; (3) Counsel patient on disease nature, progression risk, and CXL timeline; (4) Consider ICL implantation as refractive option once corneal stability confirmed.
        </p>
      </Card>
    </ModuleContainer>
  );
}
