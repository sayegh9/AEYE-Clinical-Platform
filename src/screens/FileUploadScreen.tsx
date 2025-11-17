import { useState } from 'react';
import { Button } from '../components/Button';
import { Upload, X, FileText, Image } from 'lucide-react';

interface FileUploadScreenProps {
  onContinue: () => void;
}

export function FileUploadScreen({ onContinue }: FileUploadScreenProps) {
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);
  const [imagingFiles, setImagingFiles] = useState<File[]>([]);

  const handleDocumentDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setDocumentFiles(prev => [...prev, ...files]);
  };

  const handleImagingDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setImagingFiles(prev => [...prev, ...files]);
  };

  const removeDocument = (index: number) => {
    setDocumentFiles(prev => prev.filter((_, i) => i !== index));
  };

  const removeImaging = (index: number) => {
    setImagingFiles(prev => prev.filter((_, i) => i !== index));
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Upload Clinical Data</h2>
          <p className="text-gray-600">Upload patient documents and imaging files to begin the assessment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-[#0A74B8]" />
              <h3 className="text-lg font-semibold text-gray-900">Clinical Documents</h3>
            </div>

            <div
              onDrop={handleDocumentDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0A74B8] transition-colors cursor-pointer"
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Drag and drop files here</p>
              <p className="text-sm text-gray-500">or click to browse</p>
            </div>

            {documentFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                {documentFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-700">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeDocument(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Image className="w-5 h-5 text-[#2FB3C4]" />
              <h3 className="text-lg font-semibold text-gray-900">Imaging Files</h3>
            </div>

            <div
              onDrop={handleImagingDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2FB3C4] transition-colors cursor-pointer"
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Drag and drop Pentacam / AS-OCT scans</p>
              <p className="text-sm text-gray-500">or click to browse</p>
            </div>

            {imagingFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                {imagingFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <Image className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-700">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeImaging(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0A74B8] text-white flex items-center justify-center text-sm font-medium">1</div>
              <span className="text-sm font-medium text-gray-700">Upload Files</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-sm font-medium">2</div>
              <span className="text-sm text-gray-500">Patient History</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-sm font-medium">3</div>
              <span className="text-sm text-gray-500">Imaging Analysis</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-sm font-medium">4</div>
              <span className="text-sm text-gray-500">Final Report</span>
            </div>
          </div>

          <Button
            onClick={onContinue}
            disabled={documentFiles.length === 0 && imagingFiles.length === 0}
          >
            Continue →
          </Button>
        </div>
      </main>
    </div>
  );
}
