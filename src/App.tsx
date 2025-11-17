import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomeScreen } from './screens/HomeScreen';
import { FileUploadScreen } from './screens/FileUploadScreen';
import { PatientHistoryScreen } from './screens/PatientHistoryScreen';
import { ImagingAnalysisScreen } from './screens/ImagingAnalysisScreen';
import { FinalReportScreen } from './screens/FinalReportScreen';
import { FollowUpChatScreen } from './screens/FollowUpChatScreen';
import { EpithelialThicknessModule } from './modules/diagnostics/EpithelialThicknessModule';
import { ProgressionTrackerModule } from './modules/diagnostics/ProgressionTrackerModule';
import { BiomechanicalModule } from './modules/diagnostics/BiomechanicalModule';
import { PostSurgicalModule } from './modules/diagnostics/PostSurgicalModule';
import { SafetyFlagsModule } from './modules/diagnostics/SafetyFlagsModule';
import { QualityControlModule } from './modules/diagnostics/QualityControlModule';
import { HeatmapParsingModule } from './modules/diagnostics/HeatmapParsingModule';
import { CrossDeviceModule } from './modules/diagnostics/CrossDeviceModule';
import { SurgicalPlannerModule } from './modules/planning/SurgicalPlannerModule';
import { CounselingScoreModule } from './modules/planning/CounselingScoreModule';
import { CXLPlanningModule } from './modules/planning/CXLPlanningModule';
import { FollowUpPlannerModule } from './modules/planning/FollowUpPlannerModule';
import { AnalyticsModule } from './modules/planning/AnalyticsModule';
import { EMRExportModule } from './modules/utility/EMRExportModule';
import { PatientEducationModule } from './modules/utility/PatientEducationModule';
import { BatchProcessingModule } from './modules/utility/BatchProcessingModule';

type Module = 'dashboard' | 'new-assessment' | 'upload' | 'history' | 'imaging' | 'report' | 'followup'
  | 'etm' | 'progression' | 'biomechanical' | 'post-surgical' | 'qc' | 'safety' | 'heatmap' | 'cross-device'
  | 'surgical-plan' | 'cxl-plan' | 'counseling' | 'followup-plan' | 'analytics'
  | 'emr-export' | 'patient-edu' | 'batch';

function App() {
  const [activeModule, setActiveModule] = useState<Module>('dashboard');

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
      case 'new-assessment':
        return <HomeScreen onStartNew={() => setActiveModule('upload')} onContinue={() => setActiveModule('upload')} />;
      case 'upload':
        return <FileUploadScreen onContinue={() => setActiveModule('history')} />;
      case 'history':
        return <PatientHistoryScreen onContinue={() => setActiveModule('imaging')} />;
      case 'imaging':
        return <ImagingAnalysisScreen onContinue={() => setActiveModule('report')} />;
      case 'report':
        return <FinalReportScreen onStartFollowUp={() => setActiveModule('followup')} />;
      case 'followup':
        return <FollowUpChatScreen />;
      case 'etm':
        return <EpithelialThicknessModule />;
      case 'progression':
        return <ProgressionTrackerModule />;
      case 'biomechanical':
        return <BiomechanicalModule />;
      case 'post-surgical':
        return <PostSurgicalModule />;
      case 'safety':
        return <SafetyFlagsModule />;
      case 'qc':
        return <QualityControlModule />;
      case 'heatmap':
        return <HeatmapParsingModule />;
      case 'cross-device':
        return <CrossDeviceModule />;
      case 'surgical-plan':
        return <SurgicalPlannerModule />;
      case 'cxl-plan':
        return <CXLPlanningModule />;
      case 'counseling':
        return <CounselingScoreModule />;
      case 'followup-plan':
        return <FollowUpPlannerModule />;
      case 'analytics':
        return <AnalyticsModule />;
      case 'emr-export':
        return <EMRExportModule />;
      case 'patient-edu':
        return <PatientEducationModule />;
      case 'batch':
        return <BatchProcessingModule />;
      default:
        return <HomeScreen onStartNew={() => setActiveModule('upload')} onContinue={() => setActiveModule('upload')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar activeModule={activeModule} onModuleSelect={setActiveModule} />
      {renderModule()}
    </div>
  );
}

export default App;
