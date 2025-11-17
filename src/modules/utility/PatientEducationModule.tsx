import { Card } from '../../components/Card';
import { SectionHeader } from '../../components/SectionHeader';
import { ModuleContainer } from '../../components/ModuleContainer';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function PatientEducationModule() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  return (
    <ModuleContainer>
      <SectionHeader
        title="Patient-Friendly Explanation Mode"
        subtitle="Non-technical educational summaries and visual KC risk explanation"
      />

      <Card className="mb-8 border-l-4 border-l-[#0A74B8]">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Vision Assessment Summary</h3>
        <p className="text-gray-700 leading-relaxed">
          Your eye exam shows signs of a condition called <span className="font-semibold">keratoconus</span>, which means your cornea (the clear front part of your eye) is gradually becoming thinner and changing shape. This can affect your vision over time. The good news is that we have treatments to help stop this change and protect your vision.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-2 border-red-200">
          <h3 className="text-lg font-semibold text-red-900 mb-3">KC Risk Level</h3>
          <div className="text-5xl font-bold text-red-700 mb-2">62%</div>
          <p className="text-sm text-gray-700">Based on your test results, we're concerned about progressive change.</p>
        </Card>

        <Card className="border-2 border-amber-200">
          <h3 className="text-lg font-semibold text-amber-900 mb-3">What This Means</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Your cornea is thinner than normal</li>
            <li>• It's getting progressively steeper</li>
            <li>• You may need special treatment</li>
          </ul>
        </Card>

        <Card className="border-2 border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-3">Good News</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Treatment can stop progression</li>
            <li>• We caught it early</li>
            <li>• Options are available</li>
          </ul>
        </Card>
      </div>

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">What Should You Do?</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-semibold text-blue-900 mb-1">1. See a Cornea Specialist</p>
            <p className="text-sm text-blue-800">We recommend consulting with an eye specialist who treats keratoconus.</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-semibold text-blue-900 mb-1">2. Consider Corneal Cross-Linking (CXL)</p>
            <p className="text-sm text-blue-800">This is a procedure that strengthens your cornea and stops progression. It takes about 30 minutes and we perform it in our clinic.</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-semibold text-blue-900 mb-1">3. Avoid Eye Rubbing</p>
            <p className="text-sm text-blue-800">Rubbing your eyes can make keratoconus worse. We'll teach you techniques to avoid this.</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-semibold text-blue-900 mb-1">4. Regular Follow-Up</p>
            <p className="text-sm text-blue-800">We'll monitor your eyes closely to track any changes and adjust your treatment plan as needed.</p>
          </div>
        </div>
      </Card>

      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {[
            {
              q: "What is keratoconus?",
              a: "Keratoconus is a progressive eye disease in which the clear front layer of your eye (cornea) gradually becomes thin and changes into a cone-like shape. This can affect your vision."
            },
            {
              q: "Will I go blind?",
              a: "With proper management and treatment, most people with keratoconus maintain useful vision throughout their lives. Early detection and CXL treatment can stop or slow progression."
            },
            {
              q: "Is it hereditary?",
              a: "Keratoconus does tend to run in families, but not everyone with a family history will develop it. Environmental factors like eye rubbing also play a role."
            },
            {
              q: "Can I still get corrective surgery?",
              a: "Traditional LASIK surgery is not recommended for keratoconus. However, an ICL (Implantable Contact Lens) or other refractive options may be suitable after your cornea is stabilized with CXL."
            },
            {
              q: "How often do I need follow-up visits?",
              a: "Initially, every 1–3 months. This helps us monitor your condition and ensure your treatment is working. After stabilization, visits can be spaced further apart."
            }
          ].map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === faq.q ? null : faq.q)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    expandedFAQ === faq.q ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === faq.q && (
                <div className="px-4 pb-4 text-sm text-gray-700 border-t border-gray-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources & Support</h3>
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">Patient Support Groups</p>
            <p className="text-sm text-gray-600 mt-1">Connect with others who have keratoconus and share experiences.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">Educational Videos</p>
            <p className="text-sm text-gray-600 mt-1">Watch videos explaining keratoconus, CXL, and post-treatment care.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">Downloadable Guides</p>
            <p className="text-sm text-gray-600 mt-1">Take home printed materials about your condition and next steps.</p>
          </div>
        </div>
      </Card>
    </ModuleContainer>
  );
}
