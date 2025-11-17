import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Download, Copy, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

interface FinalReportScreenProps {
  onStartFollowUp: () => void;
}

export function FinalReportScreen({ onStartFollowUp }: FinalReportScreenProps) {
  const getModalityIcon = (status: string) => {
    switch (status) {
      case 'eligible':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'caution':
        return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case 'contraindicated':
        return <XCircle className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="AEYE Logo" className="h-10 w-10" />
            <h1 className="text-xl font-semibold text-gray-900">AEYE</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Clinical Assessment Report</h2>
            <p className="text-gray-600">Complete evaluation and surgical recommendations</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">
              <Copy className="w-4 h-4 mr-2" />
              Copy Report
            </Button>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <Card className="mb-6 border-l-4 border-l-amber-500">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Critical Flags</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="critical">OD BAD-D 2.78 (Suspect)</Badge>
            <Badge variant="warning">OD ART-Max 326 µm (Borderline)</Badge>
            <Badge variant="warning">Age &lt;21</Badge>
            <Badge variant="critical">Eye Rubbing Behavior</Badge>
          </div>
        </Card>

        <Card className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex gap-4">
              <span className="text-gray-600 w-32">Patient:</span>
              <span className="text-gray-900 font-medium">John Doe, 23 years old</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-600 w-32">Assessment Date:</span>
              <span className="text-gray-900">November 15, 2025</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-600 w-32">Reason for Visit:</span>
              <span className="text-gray-900">Refractive surgery evaluation for myopia correction</span>
            </div>
          </div>
        </Card>

        <Card className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Mandatory Imaging Metrics</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Metric</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">OD (Right)</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">OS (Left)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Kmax</td>
                  <td className="py-3 px-4 text-center text-gray-900">45.2 D</td>
                  <td className="py-3 px-4 text-center text-gray-900">43.8 D</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Thinnest Pachymetry</td>
                  <td className="py-3 px-4 text-center text-gray-900">512 µm</td>
                  <td className="py-3 px-4 text-center text-gray-900">534 µm</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">BAD-D</td>
                  <td className="py-3 px-4 text-center font-semibold text-amber-700">2.78 (Suspect)</td>
                  <td className="py-3 px-4 text-center text-gray-900">1.12 (Normal)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">ART-Max</td>
                  <td className="py-3 px-4 text-center font-semibold text-amber-700">326 µm</td>
                  <td className="py-3 px-4 text-center text-gray-900">412 µm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Posterior Elevation</td>
                  <td className="py-3 px-4 text-center text-gray-900">18 µm</td>
                  <td className="py-3 px-4 text-center text-gray-900">12 µm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">PTA & RSB Analysis</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Modality</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">OD (Right)</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">OS (Left)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">LASIK</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getModalityIcon('contraindicated')}
                      <span className="text-red-700 font-medium">Contraindicated</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getModalityIcon('caution')}
                      <span className="text-amber-700 font-medium">Caution</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">PRK</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getModalityIcon('caution')}
                      <span className="text-amber-700 font-medium">Caution</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getModalityIcon('eligible')}
                      <span className="text-green-700 font-medium">Eligible</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">SMILE</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getModalityIcon('contraindicated')}
                      <span className="text-red-700 font-medium">Contraindicated</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getModalityIcon('eligible')}
                      <span className="text-green-700 font-medium">Eligible</span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">ICL</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getModalityIcon('eligible')}
                      <span className="text-green-700 font-medium">Eligible</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getModalityIcon('eligible')}
                      <span className="text-green-700 font-medium">Eligible</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Decisions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                {getModalityIcon('contraindicated')}
                LASIK - OD Contraindicated
              </h4>
              <ul className="ml-7 space-y-1 text-sm text-gray-700">
                <li>• BAD-D index 2.78 indicates forme fruste keratoconus</li>
                <li>• ART-Max 326 µm below safety threshold for ablation depth</li>
                <li>• High risk of post-operative ectasia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                {getModalityIcon('caution')}
                PRK - OD Caution
              </h4>
              <ul className="ml-7 space-y-1 text-sm text-gray-700">
                <li>• Surface ablation reduces ectasia risk but borderline metrics remain</li>
                <li>• Close monitoring required if proceeding</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                {getModalityIcon('eligible')}
                ICL - Bilateral Eligible
              </h4>
              <ul className="ml-7 space-y-1 text-sm text-gray-700">
                <li>• No corneal tissue removal, preserves structural integrity</li>
                <li>• Suitable for both eyes given current metrics</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="border-l-4 border-l-[#0A74B8]">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Final Recommendation</h3>
          <p className="text-gray-800 leading-relaxed">
            Based on topographic analysis showing suspect ectasia indicators in the right eye (BAD-D 2.78, borderline ART-Max 326 µm) combined with behavioral risk factors, corneal refractive surgery is <span className="font-semibold text-red-700">not recommended for OD</span>. <span className="font-semibold text-[#0A74B8]">ICL implantation</span> represents the safest refractive option for bilateral correction. Consider repeat topography in 6 months to monitor progression. Patient counseling regarding eye rubbing cessation is mandatory.
          </p>
        </Card>

        <div className="mt-8 flex justify-center">
          <Button onClick={onStartFollowUp}>
            Start Follow-Up Mode
          </Button>
        </div>
      </main>
    </div>
  );
}
