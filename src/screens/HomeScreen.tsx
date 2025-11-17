import { Button } from '../components/Button';
import { FileText, ArrowRight } from 'lucide-react';

interface HomeScreenProps {
  onStartNew: () => void;
  onContinue: () => void;
}

export function HomeScreen({ onStartNew, onContinue }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="AEYE Logo" className="h-10 w-10" />
            <h1 className="text-xl font-semibold text-gray-900">AEYE</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="AEYE" className="h-24 w-24" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            AEYE — Automated Ophthalmology Assistant
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clinical decision-support tool for refractive surgery and keratoconus assessment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          <button
            onClick={onStartNew}
            className="group bg-white border-2 border-[#0A74B8] rounded-xl p-8 hover:bg-[#0A74B8] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#0A74B8] group-hover:bg-white flex items-center justify-center transition-colors">
                <FileText className="w-8 h-8 text-white group-hover:text-[#0A74B8] transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A74B8] group-hover:text-white transition-colors mb-2">
                  Start New Assessment
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                  Begin a new patient evaluation
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={onContinue}
            className="group bg-white border-2 border-[#2FB3C4] rounded-xl p-8 hover:bg-[#2FB3C4] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#2FB3C4] group-hover:bg-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-8 h-8 text-white group-hover:text-[#2FB3C4] transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2FB3C4] group-hover:text-white transition-colors mb-2">
                  Continue Previous Assessment
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                  Resume an existing evaluation
                </p>
              </div>
            </div>
          </button>
        </div>

        <div className="flex justify-center gap-6 text-sm">
          <Button variant="tertiary">Documentation</Button>
          <span className="text-gray-300">|</span>
          <Button variant="tertiary">Settings</Button>
        </div>
      </main>
    </div>
  );
}
