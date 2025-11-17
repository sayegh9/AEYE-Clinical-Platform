import { Home, Upload, FileText, BarChart3, ClipboardList, MessageSquare, Zap, TrendingUp, Cpu, Wrench, AlertCircle, Grid3x3, Cast, Scissors, BarChart2, FileJson, HelpCircle, Copy, Settings as SettingsIcon } from 'lucide-react';

interface SidebarProps {
  activeModule: string;
  onModuleSelect: (module: string) => void;
}

const sections = [
  {
    title: 'Core Workflow',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'new-assessment', label: 'New Assessment', icon: ClipboardList },
      { id: 'upload', label: 'Upload Files', icon: Upload },
      { id: 'history', label: 'History Extraction', icon: FileText },
      { id: 'imaging', label: 'Tomography Analysis', icon: BarChart3 },
      { id: 'report', label: 'Final Report', icon: FileText },
      { id: 'workflow', label: 'Agentic Workflow', icon: BarChart3 },
      { id: 'followup', label: 'Follow-Up Assistant', icon: MessageSquare },
    ]
  },
  {
    title: 'Advanced Diagnostics',
    items: [
      { id: 'etm', label: 'Epithelial Thickness Map', icon: Grid3x3 },
      { id: 'progression', label: 'Progression Tracker', icon: TrendingUp },
      { id: 'biomechanical', label: 'Biomechanical Analysis', icon: Cpu },
      { id: 'post-surgical', label: 'Post-Surgical Evaluation', icon: Zap },
      { id: 'qc', label: 'Quality Control Agent', icon: AlertCircle },
      { id: 'safety', label: 'Red-Flag Safety Agent', icon: AlertCircle },
      { id: 'heatmap', label: 'Heatmap Parsing Module', icon: Grid3x3 },
      { id: 'cross-device', label: 'Cross-Device Harmonization', icon: Cast },
    ]
  },
  {
    title: 'Surgical Planning',
    items: [
      { id: 'surgical-plan', label: 'Surgical Planning Assistant', icon: Scissors },
      { id: 'cxl-plan', label: 'CXL Planning Module', icon: Wrench },
      { id: 'counseling', label: 'Counseling Score', icon: BarChart2 },
      { id: 'followup-plan', label: 'Follow-Up Planner', icon: ClipboardList },
      { id: 'analytics', label: 'Population Analytics', icon: BarChart2 },
    ]
  },
  {
    title: 'Utility Tools',
    items: [
      { id: 'emr-export', label: 'EMR Export', icon: FileJson },
      { id: 'patient-edu', label: 'Patient Education', icon: HelpCircle },
      { id: 'batch', label: 'Batch Processing', icon: Copy },
    ]
  }
];

export function Sidebar({ activeModule, onModuleSelect }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 z-50 overflow-y-auto pt-4">
      <div className="px-4 mb-8">
        <div className="flex items-center gap-2 mb-1">
          <img src="/logo.png" alt="AEYE" className="h-8 w-8" />
          <span className="text-lg font-bold text-[#0A74B8]">AEYE</span>
        </div>
        <p className="text-xs text-gray-500">Clinical Decision Support</p>
      </div>

      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx} className="mb-6">
          <div className="px-4 py-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {section.title}
            </h3>
          </div>
          <nav className="space-y-1 px-2">
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeModule === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onModuleSelect(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-100 text-[#0A74B8]'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      ))}

      <div className="px-4 py-4 border-t border-gray-200 mt-6">
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <SettingsIcon className="w-4 h-4" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}
