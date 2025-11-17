import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

interface ImagingAnalysisScreenProps {
  onContinue: () => void;
}

export function ImagingAnalysisScreen({ onContinue }: ImagingAnalysisScreenProps) {
  const files = [
    { name: 'Pentacam_OD.xml', status: 'completed' as const },
    { name: 'Pentacam_OS.xml', status: 'completed' as const },
    { name: 'AS-OCT_OD.dcm', status: 'processing' as const },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-amber-600" />;
      case 'unsupported':
        return <XCircle className="w-5 h-5 text-red-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="normal">Processed</Badge>;
      case 'processing':
        return <Badge variant="warning">Parsing</Badge>;
      case 'unsupported':
        return <Badge variant="critical">Unsupported</Badge>;
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Imaging Analysis</h2>
          <p className="text-gray-600">Review processed imaging data and extracted metrics</p>
        </div>

        <Card className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">File Processing Status</h3>
          <div className="space-y-3">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  {getStatusIcon(file.status)}
                  <span className="text-sm font-medium text-gray-900">{file.name}</span>
                </div>
                {getStatusBadge(file.status)}
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">OD (Right Eye)</h3>
              <Badge variant="warning">Suspect</Badge>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">Kmax</span>
                <span className="text-sm font-semibold text-gray-900">45.2 D</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">Thinnest Pachymetry</span>
                <span className="text-sm font-semibold text-gray-900">512 µm</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">BAD-D</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">2.78</span>
                  <Badge variant="warning">Suspect</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">ART-Max</span>
                <span className="text-sm font-semibold text-gray-900">326 µm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Posterior Elevation</span>
                <span className="text-sm font-semibold text-gray-900">18 µm</span>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">OS (Left Eye)</h3>
              <Badge variant="normal">Normal</Badge>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">Kmax</span>
                <span className="text-sm font-semibold text-gray-900">43.8 D</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">Thinnest Pachymetry</span>
                <span className="text-sm font-semibold text-gray-900">534 µm</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">BAD-D</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">1.12</span>
                  <Badge variant="normal">Normal</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">ART-Max</span>
                <span className="text-sm font-semibold text-gray-900">412 µm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Posterior Elevation</span>
                <span className="text-sm font-semibold text-gray-900">12 µm</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex items-center justify-between">
          <Button variant="secondary">View Full Interpretations</Button>
          <Button onClick={onContinue}>Continue → Final Report</Button>
        </div>
      </main>
    </div>
  );
}
