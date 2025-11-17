import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { SectionHeader } from '../../components/SectionHeader';
import { ModuleContainer } from '../../components/ModuleContainer';
import { Upload, Play, Download, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function BatchProcessingModule() {
  const [files, setFiles] = useState<string[]>([]);
  const [processing, setProcessing] = useState(false);

  return (
    <ModuleContainer>
      <SectionHeader
        title="Batch Processing Mode"
        subtitle="Process multiple tomography sets for clinic high-volume scanning"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Files</h3>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0A74B8] transition-colors cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const files = Array.from(e.dataTransfer.files).map((f) => f.name);
              setFiles((prev) => [...prev, ...files]);
            }}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Drag and drop Pentacam/AS-OCT files here</p>
            <p className="text-sm text-gray-500">or click to browse</p>
          </div>
          <p className="text-xs text-gray-500 mt-3">Supported: .xml, .dcm, .pcsv</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing Settings</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Batch Name</label>
              <input
                type="text"
                placeholder="Clinic Screening - Nov 2025"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A74B8]"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Processing Priority</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A74B8]">
                <option>Normal (background)</option>
                <option>High (priority queue)</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Output Format</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A74B8]">
                <option>CSV Summary Report</option>
                <option>FHIR Bundle (ZIP)</option>
                <option>JSON Lines (NDJSON)</option>
              </select>
            </div>
          </div>
        </Card>

        <Card className="border-2 border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Batch Status</h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold text-gray-600">Files Uploaded</p>
              <p className="text-3xl font-bold text-blue-700">{files.length}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600">Ready to Process</p>
              <p className="text-2xl font-bold text-green-700">{files.length > 0 ? '✓' : '—'}</p>
            </div>
            <Button
              onClick={() => setProcessing(true)}
              disabled={files.length === 0}
              className="w-full flex items-center justify-center gap-2 mt-4"
            >
              <Play className="w-4 h-4" />
              Start Processing
            </Button>
          </div>
        </Card>
      </div>

      {files.length > 0 && (
        <Card className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">File Queue ({files.length} files)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Filename</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Type</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, idx) => (
                  <tr key={idx} className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}>
                    <td className="py-3 px-4 text-gray-700">{file}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                        Pending
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">{file.endsWith('.xml') ? 'Pentacam' : 'AS-OCT'}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => setFiles((prev) => prev.filter((_, i) => i !== idx))}
                        className="text-red-600 hover:text-red-800 text-sm font-semibold"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {processing && (
        <Card className="mb-8 border-2 border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-4">Processing in Progress...</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Overall Progress</span>
              <span className="text-sm font-semibold text-gray-700">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-600 h-3 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <div className="text-sm text-gray-600">
              <p>Processed: 9 of 20 files</p>
              <p>Est. time remaining: ~3 minutes</p>
            </div>
          </div>
        </Card>
      )}

      <Card className="border-l-4 border-l-amber-500">
        <div className="flex gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
          <h3 className="text-lg font-semibold text-amber-900">Important Notes</h3>
        </div>
        <ul className="space-y-2 text-sm text-amber-800">
          <li>• Batch processing runs in the background; you can close the browser</li>
          <li>• Processing time: ~30 seconds per file depending on device and complexity</li>
          <li>• Results will be available in your Dashboard when complete</li>
          <li>• CSV reports include flagged cases for clinical review</li>
          <li>• For 100+ files, contact support for server-side batch API</li>
        </ul>
      </Card>
    </ModuleContainer>
  );
}
