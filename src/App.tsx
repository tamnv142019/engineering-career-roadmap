import { useState } from 'react'
import './index.css'
import { 
  Code, 
  Users, 
  Briefcase, 
  Award, 
  ChevronRight, 
  CheckCircle, 
  Book, 
  Wrench, 
  Brain, 
  TrendingUp,
  Globe
} from 'lucide-react'
import translations from './translations';

export default function EngineeringCareerRoadmap() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'timeline' | 'levels' | 'skills'>('timeline');
  const [language, setLanguage] = useState<'en' | 'vi'>('vi');

  const i18n = translations[language];

  const levelColors = ['bg-green-500', 'bg-blue-500', 'bg-purple-600', 'bg-amber-600', 'bg-red-600'];
  const levelIcons = [Code, Briefcase, Award, Brain, Users];

  const levels = i18n.levels.map((level, index) => ({
    ...level,
    color: levelColors[index],
    icon: levelIcons[index]
  }));

  const timeline = i18n.timeline;
  const mustHaveSkills = i18n.skills;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="w-screen max-w-full max-h-screen overflow-auto px-6 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-all"
            >
              <Globe className="w-5 h-5" />
              {language === 'en' ? 'VI- Tiếng Việt' : 'EN-English'}
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-3">
              {i18n.labels.title}
            </h1>
            <p className="text-slate-300 text-lg">
              {i18n.labels.subtitle}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap justify-center">
          {[
            { id: 'timeline', label: i18n.labels.timeline, icon: TrendingUp },
            { id: 'levels', label: i18n.labels.levels, icon: Award },
            { id: 'skills', label: i18n.labels.skills, icon: Wrench }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Timeline View */}
        {activeTab === 'timeline' && (
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white font-bold px-4 py-2 rounded-lg min-w-[140px] text-center">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{item.focus}</h3>
                    <p className="text-slate-400">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Levels Detail View */}
        {activeTab === 'levels' && (
          <div className="space-y-6">
            {levels.map((level, index) => {
              const Icon = level.icon;
              const isExpanded = expandedLevel === index;
              
              return (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
                >
                  {/* Header */}
                  <div
                    className={`${level.color} p-6 cursor-pointer hover:opacity-90 transition-all`}
                    onClick={() => setExpandedLevel(isExpanded ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Icon className="w-8 h-8 text-white" />
                        <div>
                          <h2 className="text-3xl font-bold text-white">{level.level}</h2>
                          <p className="text-white text-opacity-90">{level.duration}</p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-8 h-8 text-white transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  {isExpanded && (
                    <div className="p-6 space-y-6">
                      {/* Technical Skills */}
                      <div>
                        <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          {i18n.labels.technicalSkills}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {level.categories.technical.map((skill, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-slate-300 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Experience */}
                      <div>
                        <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                          <Briefcase className="w-5 h-5" />
                          {i18n.labels.projectExperience}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {level.categories.projects.map((project, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-slate-300 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                              <span>{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Soft Skills */}
                      <div>
                        <h3 className="text-xl font-bold text-pink-400 mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          {i18n.labels.softSkills}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {level.categories.softSkills.map((skill, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-slate-300 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Learning Resources */}
                      <div>
                        <h3 className="text-xl font-bold text-orange-400 mb-3 flex items-center gap-2">
                          <Book className="w-5 h-5" />
                          {i18n.labels.learningPath}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {level.categories.learning.map((resource, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-slate-300 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                              <span>{resource}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Skills View */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mustHaveSkills.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Tips */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            {i18n.labels.importantNotes}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white text-sm">
            {i18n.labels.notes.map((note, index) => (
              <div key={index}>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
