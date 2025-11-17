import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Edit3 } from 'lucide-react';

interface PatientHistoryScreenProps {
  onContinue: () => void;
}

export function PatientHistoryScreen({ onContinue }: PatientHistoryScreenProps) {
  const riskFlags = [
    { label: 'Age <21', severity: 'warning' as const },
    { label: 'Eye Rubbing', severity: 'critical' as const },
    { label: 'Atopy', severity: 'warning' as const },
  ];

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

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Extracted Patient History</h2>
          <p className="text-gray-600">Review and edit the extracted information from clinical documents</p>
        </div>

        <Card className="mb-6">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Chief Complaint
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0A74B8] focus:border-transparent"
              rows={2}
              defaultValue="Patient seeks refractive surgery evaluation for myopia correction"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Ocular History</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A74B8] mt-1.5"></span>
                  <span>Myopia since age 12</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A74B8] mt-1.5"></span>
                  <span>No previous ocular surgeries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A74B8] mt-1.5"></span>
                  <span>Stable refraction for 2 years</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Systemic History</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A74B8] mt-1.5"></span>
                  <span>Seasonal allergies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A74B8] mt-1.5"></span>
                  <span>No autoimmune disorders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A74B8] mt-1.5"></span>
                  <span>No diabetes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Family History</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A74B8] mt-1.5"></span>
                  <span>Father: Myopia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A74B8] mt-1.5"></span>
                  <span>No family history of keratoconus</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Contact Lens Use</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-1">Current soft contact lens wearer</p>
                <p className="text-sm font-semibold text-[#0A74B8]">Washout: 14 days completed</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Risk Flags</h3>
            <div className="flex flex-wrap gap-2">
              {riskFlags.map((flag, index) => (
                <Badge key={index} variant={flag.severity}>
                  {flag.label}
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <Button variant="secondary">
            <Edit3 className="w-4 h-4 inline mr-2" />
            Edit Manually
          </Button>
          <Button onClick={onContinue}>
            Continue → Imaging Analysis
          </Button>
        </div>
      </main>
    </div>
  );
}
