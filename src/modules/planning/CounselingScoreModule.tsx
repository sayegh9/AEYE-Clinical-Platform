import { Card } from '../../components/Card';
import { SectionHeader } from '../../components/SectionHeader';
import { Badge } from '../../components/Badge';
import { ModuleContainer } from '../../components/ModuleContainer';

export function CounselingScoreModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Counseling Score"
        subtitle="Composite safety index and patient education summary"
      />

      <div className="mb-8">
        <Card className="border-2 border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Overall Counseling Risk Score</h3>
              <p className="text-gray-600">Composite index of topographic, biomechanical, and clinical factors</p>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold text-amber-700">62</div>
              <p className="text-sm font-semibold text-amber-600">HIGH RISK</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32">
                <p className="text-sm font-semibold text-gray-700">BAD-D Score</p>
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-700 w-12">85/100</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-32">
                <p className="text-sm font-semibold text-gray-700">Biomechanical Index</p>
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-amber-500 h-3 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-700 w-12">68/100</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-32">
                <p className="text-sm font-semibold text-gray-700">Age/Risk Factors</p>
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-amber-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-700 w-12">45/100</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-32">
                <p className="text-sm font-semibold text-gray-700">Surgical Suitability</p>
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-700 w-12">20/100</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-2 border-red-200">
          <h3 className="font-semibold text-gray-900 mb-3">Major Risk Factors</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">•</span>
              <span>Suspected keratoconus (BAD-D 2.78)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">•</span>
              <span>Rapid pachymetric thinning (-12 µm/6mo)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">•</span>
              <span>Compromised biomechanics (CH 9.2)</span>
            </li>
          </ul>
        </Card>

        <Card className="border-2 border-amber-200">
          <h3 className="font-semibold text-gray-900 mb-3">Moderate Risk Factors</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Age 23 (higher KC incidence)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Atopic history (eye rubbing risk)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Myopia (KC association)</span>
            </li>
          </ul>
        </Card>

        <Card className="border-2 border-green-200">
          <h3 className="font-semibold text-gray-900 mb-3">Protective Factors</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Good ECD (2650 cells/mm²)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Adequate pachymetry (512 µm)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>No scars or acute pathology</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card className="border-l-4 border-l-amber-500 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Counseling Summary</h3>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">Diagnosis:</span> Your corneal topography shows signs of keratoconus, a condition where the cornea thins and progressively steepens over time.
          </p>
          <p>
            <span className="font-semibold text-gray-900">Refractive Surgery Suitability:</span> Because of your keratoconus risk profile, traditional laser eye surgery (LASIK, PRK) is not recommended. These procedures remove corneal tissue, which could worsen your condition.
          </p>
          <p>
            <span className="font-semibold text-gray-900">Recommended Path:</span> We recommend ICL (Implantable Contact Lens) implantation—a permanent lens placed inside the eye that corrects your vision without removing corneal tissue.
          </p>
          <p>
            <span className="font-semibold text-gray-900">Disease Management:</span> We also recommend corneal cross-linking (CXL), a procedure that strengthens your cornea to prevent further progression.
          </p>
          <p>
            <span className="font-semibold text-gray-900">Follow-Up:</span> Regular monitoring (every 1–3 months initially) is essential to track disease progression and optimize your treatment plan.
          </p>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions for the Patient</h3>
        <ul className="space-y-3 text-sm">
          <li className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900">Do you rub your eyes frequently?</p>
            <p className="text-xs text-blue-800 mt-1">Eye rubbing accelerates KC progression. Behavior modification is critical.</p>
          </li>
          <li className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900">Have you noticed any changes in your vision or astigmatism?</p>
            <p className="text-xs text-blue-800 mt-1">Rapidly changing refraction suggests active KC progression.</p>
          </li>
          <li className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900">Are you willing to commit to close follow-up?</p>
            <p className="text-xs text-blue-800 mt-1">Disease monitoring and intervention timing are essential to outcomes.</p>
          </li>
        </ul>
      </Card>
    </ModuleContainer>
  );
}
