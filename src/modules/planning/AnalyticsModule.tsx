import { Card } from '../../components/Card';
import { SectionHeader } from '../../components/SectionHeader';
import { ModuleContainer } from '../../components/ModuleContainer';

export function AnalyticsModule() {
  return (
    <ModuleContainer>
      <SectionHeader
        title="Population Analytics Dashboard"
        subtitle="KC incidence, screening trends, and safety metrics across cohorts"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Assessments (YTD)</h3>
          <p className="text-4xl font-bold text-[#0A74B8] mb-2">1,247</p>
          <p className="text-sm text-gray-600">+18% vs. last year</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">KC Positive Cases</h3>
          <p className="text-4xl font-bold text-amber-700 mb-2">342</p>
          <p className="text-sm text-gray-600">27.4% incidence rate</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">CXL Candidates</h3>
          <p className="text-4xl font-bold text-red-700 mb-2">89</p>
          <p className="text-sm text-gray-600">26.0% of KC cases</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Red-Flag Frequency Distribution</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700 w-32">Suspect KC (BAD-D &gt; 2.6)</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
              <span className="text-sm font-semibold text-gray-700 w-12">67%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700 w-32">Pachymetric Thin (&lt;480µm)</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-amber-600 h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
              <span className="text-sm font-semibold text-gray-700 w-12">42%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700 w-32">Progressive Thinning</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '28%' }}></div>
              </div>
              <span className="text-sm font-semibold text-gray-700 w-12">28%</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">QC Score Distribution</h3>
          <div className="bg-gradient-to-r from-green-100 via-yellow-100 to-red-100 rounded-lg h-12 flex items-center justify-between px-4 mb-2">
            <span className="text-xs font-semibold text-gray-700">Excellent</span>
            <span className="text-xs font-semibold text-gray-700">Fair</span>
            <span className="text-xs font-semibold text-gray-700">Poor</span>
          </div>
          <p className="text-sm text-gray-600">86% Excellent | 12% Fair | 2% Poor</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Screening Failure Analysis</h3>
        <p className="text-sm text-gray-700 mb-4">
          Percentage of patients found ineligible for refractive surgery (any modality):
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Reason for Ineligibility</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Count</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">% of KC Cases</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 px-4 text-gray-700">Suspect/True Keratoconus</td>
                <td className="py-3 px-4 text-center font-semibold">287</td>
                <td className="py-3 px-4 text-center">83.9%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-700">Insufficient Pachymetry</td>
                <td className="py-3 px-4 text-center font-semibold">31</td>
                <td className="py-3 px-4 text-center">9.1%</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 px-4 text-gray-700">Corneal Scarring/Opacification</td>
                <td className="py-3 px-4 text-center font-semibold">14</td>
                <td className="py-3 px-4 text-center">4.1%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 text-gray-700">Other/Systemic Contraindication</td>
                <td className="py-3 px-4 text-center font-semibold">10</td>
                <td className="py-3 px-4 text-center">2.9%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </ModuleContainer>
  );
}
