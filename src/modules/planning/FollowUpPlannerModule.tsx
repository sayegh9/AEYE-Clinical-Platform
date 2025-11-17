import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { SectionHeader } from '../../components/SectionHeader';
import { ModuleContainer } from '../../components/ModuleContainer';

export function FollowUpPlannerModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Follow-Up Planner"
        subtitle="Auto-generate KC monitoring timeline with automated alerts"
      />

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Follow-Up Schedule (Next 24 Months)</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-4 p-4 bg-red-50 border-l-4 border-l-red-600 rounded">
            <Badge variant="critical">URGENT</Badge>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">CXL Consultation</p>
              <p className="text-sm text-gray-700 mt-1">Next 1 week</p>
              <p className="text-xs text-gray-600 mt-1">Immediate cross-linking evaluation due to progressive KC and early ectasia signs</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-amber-50 border-l-4 border-l-amber-600 rounded">
            <Badge variant="warning">HIGH PRIORITY</Badge>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Post-CXL 1-Month Visit</p>
              <p className="text-sm text-gray-700 mt-1">CXL date + 4 weeks</p>
              <p className="text-xs text-gray-600 mt-1">BCVA, refraction, topography, pachymetry to assess healing and early stability</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-blue-50 border-l-4 border-l-blue-600 rounded">
            <Badge variant="normal">STANDARD</Badge>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Post-CXL 3-Month Visit</p>
              <p className="text-sm text-gray-700 mt-1">CXL date + 12 weeks</p>
              <p className="text-xs text-gray-600 mt-1">Full workup + biomechanics (ORA); verify CH recovery and Kmax plateau</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-blue-50 border-l-4 border-l-blue-600 rounded">
            <Badge variant="normal">STANDARD</Badge>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Post-CXL 6-Month Visit</p>
              <p className="text-sm text-gray-700 mt-1">CXL date + 24 weeks</p>
              <p className="text-xs text-gray-600 mt-1">Comprehensive repeat assessment; compare all metrics to pre-CXL baseline</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-blue-50 border-l-4 border-l-blue-600 rounded">
            <Badge variant="normal">STANDARD</Badge>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Post-CXL 12-Month Visit</p>
              <p className="text-sm text-gray-700 mt-1">CXL date + 52 weeks</p>
              <p className="text-xs text-gray-600 mt-1">Definitive efficacy assessment; plan next intervention (repeat CXL, surgical options, etc.)</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-green-50 border-l-4 border-l-green-600 rounded">
            <Badge variant="normal">LONG-TERM</Badge>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Annual Surveillance (Year 2+)</p>
              <p className="text-sm text-gray-700 mt-1">Every 12 months</p>
              <p className="text-xs text-gray-600 mt-1">Maintain annual topography + refraction to monitor for late progression or late ectasia</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mb-8 border-2 border-amber-200">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">Progression Monitoring Alerts</h3>
        <div className="space-y-3">
          <div className="p-3 bg-amber-50 rounded-lg">
            <p className="font-semibold text-amber-900">Alert: Kmax increase ≥ 0.5 D per 6 months</p>
            <p className="text-sm text-amber-800 mt-1">→ Action: Consider repeat CXL or urgent intervention</p>
          </div>
          <div className="p-3 bg-amber-50 rounded-lg">
            <p className="font-semibold text-amber-900">Alert: Pachymetry decrease ≥ 10 µm per 6 months</p>
            <p className="text-sm text-amber-800 mt-1">→ Action: Escalate monitoring frequency; assess for rapid decompensation</p>
          </div>
          <div className="p-3 bg-red-50 rounded-lg">
            <p className="font-semibold text-red-900">Alert: BAD-D increase ≥ 0.3 or new acute hydrops</p>
            <p className="text-sm text-red-800 mt-1">→ Action: Urgent ophthalmology review; consider corneal transplant evaluation</p>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Clinic Customization Options</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span className="text-sm text-gray-700">Auto-generate SMS appointment reminders (1 week prior)</span>
          </label>
          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span className="text-sm text-gray-700">Email summary report post-visit</span>
          </label>
          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm text-gray-700">Export to EHR calendar (HL7/FHIR)</span>
          </label>
          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm text-gray-700">Custom reminder interval (default: clinic standard)</span>
          </label>
        </div>
      </Card>
    </ModuleContainer>
  );
}
