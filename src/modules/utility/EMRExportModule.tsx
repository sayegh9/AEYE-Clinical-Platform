import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { SectionHeader } from '../../components/SectionHeader';
import { Badge } from '../../components/Badge';
import { ModuleContainer } from '../../components/ModuleContainer';
import { Download, Copy, FileJson, FileText } from 'lucide-react';
import { useState } from 'react';

export function EMRExportModule() {
  const [selectedFormat, setSelectedFormat] = useState('fhir');
  const [selectedTemplate, setSelectedTemplate] = useState('assessment');

  return (
    <ModuleContainer>
      <SectionHeader
        title="EMR Export"
        subtitle="Export assessment data in structured formats (FHIR/HL7, JSON, XML)"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Format</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer" style={{ borderColor: selectedFormat === 'fhir' ? '#0A74B8' : '#e5e7eb', backgroundColor: selectedFormat === 'fhir' ? '#eff6ff' : '#ffffff' }}>
              <input
                type="radio"
                value="fhir"
                checked={selectedFormat === 'fhir'}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-4 h-4"
              />
              <div>
                <p className="font-semibold text-gray-900">FHIR (Fast Healthcare Interoperability Resources)</p>
                <p className="text-xs text-gray-600">HL7 FHIR-compliant JSON bundle for EHR integration</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer" style={{ borderColor: selectedFormat === 'hl7' ? '#0A74B8' : '#e5e7eb', backgroundColor: selectedFormat === 'hl7' ? '#eff6ff' : '#ffffff' }}>
              <input
                type="radio"
                value="hl7"
                checked={selectedFormat === 'hl7'}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-4 h-4"
              />
              <div>
                <p className="font-semibold text-gray-900">HL7 v2.5</p>
                <p className="text-xs text-gray-600">Legacy HL7 v2.5 message format for older systems</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer" style={{ borderColor: selectedFormat === 'json' ? '#0A74B8' : '#e5e7eb', backgroundColor: selectedFormat === 'json' ? '#eff6ff' : '#ffffff' }}>
              <input
                type="radio"
                value="json"
                checked={selectedFormat === 'json'}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-4 h-4"
              />
              <div>
                <p className="font-semibold text-gray-900">JSON</p>
                <p className="text-xs text-gray-600">AEYE native JSON schema for custom integration</p>
              </div>
            </label>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Template</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer" style={{ borderColor: selectedTemplate === 'assessment' ? '#0A74B8' : '#e5e7eb', backgroundColor: selectedTemplate === 'assessment' ? '#eff6ff' : '#ffffff' }}>
              <input
                type="radio"
                value="assessment"
                checked={selectedTemplate === 'assessment'}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-4 h-4"
              />
              <div>
                <p className="font-semibold text-gray-900">Refractive Surgery Assessment</p>
                <p className="text-xs text-gray-600">Full diagnostic report with all imaging & recommendations</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer" style={{ borderColor: selectedTemplate === 'kc' ? '#0A74B8' : '#e5e7eb', backgroundColor: selectedTemplate === 'kc' ? '#eff6ff' : '#ffffff' }}>
              <input
                type="radio"
                value="kc"
                checked={selectedTemplate === 'kc'}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-4 h-4"
              />
              <div>
                <p className="font-semibold text-gray-900">Keratoconus Staging Report</p>
                <p className="text-xs text-gray-600">KC classification, biomechanics, and progression data</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer" style={{ borderColor: selectedTemplate === 'counseling' ? '#0A74B8' : '#e5e7eb', backgroundColor: selectedTemplate === 'counseling' ? '#eff6ff' : '#ffffff' }}>
              <input
                type="radio"
                value="counseling"
                checked={selectedTemplate === 'counseling'}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-4 h-4"
              />
              <div>
                <p className="font-semibold text-gray-900">Pre-Op Counseling Summary</p>
                <p className="text-xs text-gray-600">Patient-friendly summary + risks & recommendations</p>
              </div>
            </label>
          </div>
        </Card>
      </div>

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Preview</h3>
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-100 overflow-x-auto mb-4" style={{ maxHeight: '300px' }}>
          <pre className="text-xs">{`{
  "resourceType": "Bundle",
  "type": "document",
  "entry": [
    {
      "resource": {
        "resourceType": "DiagnosticReport",
        "id": "aeye-assessment-001",
        "status": "final",
        "subject": {
          "reference": "Patient/john-doe-23"
        },
        "code": {
          "coding": [
            {
              "system": "http://aeye.ai/diagnostics",
              "code": "refractive-surgery-assessment",
              "display": "Refractive Surgery & KC Assessment"
            }
          ]
        },
        "result": [
          {
            "reference": "Observation/kmax-od",
            "value": 45.2
          },
          {
            "reference": "Observation/bad-d-od",
            "value": 2.78,
            "status": "suspect"
          }
        ]
      }
    }
  ]
}`}</pre>
        </div>

        <div className="flex gap-3">
          <Button variant="secondary" className="flex items-center gap-2">
            <Copy className="w-4 h-4" />
            Copy to Clipboard
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Export
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FileJson className="w-5 h-5 text-[#0A74B8]" />
            FHIR Bundle
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Full FHIR R4 bundle with all observations, measurements, and clinical recommendations.
          </p>
          <ul className="text-xs text-gray-600 space-y-1 mb-4">
            <li>✓ DiagnosticReport</li>
            <li>✓ Observation (all metrics)</li>
            <li>✓ Patient demographics</li>
            <li>✓ Procedure recommendations</li>
          </ul>
          <Badge variant="normal">Production Ready</Badge>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#2FB3C4]" />
            Narrative Report
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Formatted text report suitable for printing or clinical documentation.
          </p>
          <ul className="text-xs text-gray-600 space-y-1 mb-4">
            <li>✓ CDA-compliant format</li>
            <li>✓ Sections: History, Findings, Assessment, Plan</li>
            <li>✓ Physician signature block</li>
            <li>✓ PDF generation support</li>
          </ul>
          <Badge variant="normal">PDF Ready</Badge>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FileJson className="w-5 h-5 text-green-600" />
            Custom JSON
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            AEYE native JSON with full data model and nested relationships.
          </p>
          <ul className="text-xs text-gray-600 space-y-1 mb-4">
            <li>✓ Complete assessment object</li>
            <li>✓ All derived indices</li>
            <li>✓ Timestamp & audit trail</li>
            <li>✓ API webhook compatible</li>
          </ul>
          <Badge variant="normal">Schema v1.0</Badge>
        </Card>
      </div>
    </ModuleContainer>
  );
}
