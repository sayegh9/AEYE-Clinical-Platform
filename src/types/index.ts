export interface PatientHistory {
  chiefComplaint: string;
  ocularHistory: string[];
  systemicHistory: string[];
  familyHistory: string[];
  contactLensUse: {
    current: boolean;
    washoutDays?: number;
  };
  riskFlags: RiskFlag[];
}

export interface RiskFlag {
  label: string;
  severity: 'warning' | 'critical';
}

export interface ImagingFile {
  id: string;
  name: string;
  type: 'pentacam' | 'as-oct';
  status: 'processing' | 'completed' | 'unsupported';
  thumbnail?: string;
}

export interface EyeMetrics {
  kmax: number;
  thinnestPachymetry: number;
  badD: {
    value: number;
    status: 'normal' | 'suspect' | 'abnormal';
  };
  artMax: number;
  posteriorElevation: number;
}

export interface Modality {
  name: 'LASIK' | 'PRK' | 'SMILE' | 'ICL';
  status: 'eligible' | 'caution' | 'contraindicated';
}

export interface Assessment {
  id: string;
  patientName: string;
  date: string;
  status: 'in-progress' | 'completed';
}
