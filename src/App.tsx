import React, { useState } from 'react';
import { Goal as GolfBall, Flag, Users, Trophy, ChevronRight, Mail, Target, UserCheck, Thermometer, Menu, X, Globe, LogIn, UserPlus } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { translations } from './translations';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const t = translations[language];

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 relative z-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GolfBall className="w-8 h-8 text-emerald-600" />
              <span className="text-xl font-bold">PinSeeking</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-emerald-600">{t.features}</a>
              <a href="#pricing" className="text-gray-600 hover:text-emerald-600">{t.pricing}</a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600">{t.contact}</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="p-2 text-gray-600 hover:text-emerald-600 flex items-center"
                >
                  <Globe className="w-5 h-5" />
                  <span className="ml-1 text-sm uppercase">{language}</span>
                </button>
                {languageMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-40">
                    <button 
                      onClick={() => { setLanguage('en'); setLanguageMenuOpen(false); }}
                      className="w-full px-4 py-2 text-left flex items-center hover:bg-gray-100"
                    >
                      <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4 mr-2" />
                      English
                    </button>
                    <button 
                      onClick={() => { setLanguage('th'); setLanguageMenuOpen(false); }}
                      className="w-full px-4 py-2 text-left flex items-center hover:bg-gray-100"
                    >
                      <img src="https://flagcdn.com/w40/th.png" alt="Thai" className="w-6 h-4 mr-2" />
                      ไทย
                    </button>
                  </div>
                )}
              </div>
              <button className="text-gray-600 hover:text-emerald-600 flex items-center">
                <LogIn className="w-5 h-5" />
                <span className="ml-1">{t.login}</span>
              </button>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors flex items-center">
                <UserPlus className="w-5 h-5" />
                <span className="ml-1">{t.signup}</span>
              </button>
            </div>
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 z-50">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-emerald-600">{t.features}</a>
                <a href="#pricing" className="text-gray-600 hover:text-emerald-600">{t.pricing}</a>
                <a href="#contact" className="text-gray-600 hover:text-emerald-600">{t.contact}</a>
                <div className="flex flex-col space-y-2">
                  <button 
                    onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }}
                    className="text-gray-600 hover:text-emerald-600 flex items-center"
                  >
                    <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4 mr-2" />
                    English
                  </button>
                  <button 
                    onClick={() => { setLanguage('th'); setMobileMenuOpen(false); }}
                    className="text-gray-600 hover:text-emerald-600 flex items-center"
                  >
                    <img src="https://flagcdn.com/w40/th.png" alt="Thai" className="w-6 h-4 mr-2" />
                    ไทย
                  </button>
                </div>
                <button className="text-gray-600 hover:text-emerald-600 flex items-center">
                  <LogIn className="w-5 h-5" />
                  <span className="ml-1">{t.login}</span>
                </button>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center">
                  <UserPlus className="w-5 h-5" />
                  <span className="ml-1">{t.signup}</span>
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80&w=2940')`
            }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 min-h-[60vh] md:min-h-[80vh] flex items-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
                {t.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8">
                {t.heroSubtitle}
              </p>
              <div className="flex justify-center">
                <button className="bg-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-emerald-700 transition-colors flex items-center text-base md:text-lg">
                  {t.bookNow} <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <Flag className="w-10 md:w-12 h-10 md:h-12 text-emerald-600 mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-3">{t.courseAnalysis}</h3>
                <p className="text-sm md:text-base text-gray-600">{t.courseAnalysisDesc}</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <Users className="w-10 md:w-12 h-10 md:h-12 text-emerald-600 mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-3">{t.proCoaching}</h3>
                <p className="text-sm md:text-base text-gray-600">{t.proCoachingDesc}</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <Trophy className="w-10 md:w-12 h-10 md:h-12 text-emerald-600 mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-3">{t.performanceTracking}</h3>
                <p className="text-sm md:text-base text-gray-600">{t.performanceTrackingDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Sections */}
        {/* Practice Smarter Section */}
        <section className="relative overflow-hidden">
          <Parallax speed={-20}>
            <div className="min-h-[60vh] md:h-screen flex items-center py-16 md:py-0">
              <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-4 md:space-y-6">
                  <Target className="w-12 md:w-16 h-12 md:h-16 text-emerald-600" />
                  <h2 className="text-3xl md:text-4xl font-bold">{t.practiceSmarter}</h2>
                  <p className="text-lg md:text-xl text-gray-600">{t.practiceSmarterDesc}</p>
                </div>
                <Parallax speed={10}>
                  <img 
                    src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80" 
                    alt="Golf Practice" 
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </Parallax>
              </div>
            </div>
          </Parallax>
        </section>

        {/* PGA Pro Lessons Section */}
        <section className="relative overflow-hidden bg-gray-50">
          <Parallax speed={-20}>
            <div className="min-h-[60vh] md:h-screen flex items-center py-16 md:py-0">
              <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <Parallax speed={10}>
                  <img 
                    src="https://images.unsplash.com/photo-1535132011086-b8818f016104?auto=format&fit=crop&w=800&q=80" 
                    alt="Golf Instructor" 
                    className="rounded-2xl shadow-2xl w-full order-2 md:order-1"
                  />
                </Parallax>
                <div className="space-y-4 md:space-y-6 order-1 md:order-2">
                  <UserCheck className="w-12 md:w-16 h-12 md:h-16 text-emerald-600" />
                  <h2 className="text-3xl md:text-4xl font-bold">{t.learnFromPros}</h2>
                  <p className="text-lg md:text-xl text-gray-600">{t.learnFromProsDesc}</p>
                </div>
              </div>
            </div>
          </Parallax>
        </section>

        {/* Beat the Heat Section */}
        <section className="relative overflow-hidden">
          <Parallax speed={-20}>
            <div className="min-h-[60vh] md:h-screen flex items-center py-16 md:py-0">
              <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-4 md:space-y-6">
                  <Thermometer className="w-12 md:w-16 h-12 md:h-16 text-emerald-600" />
                  <h2 className="text-3xl md:text-4xl font-bold">{t.beatTheHeat}</h2>
                  <p className="text-lg md:text-xl text-gray-600">{t.beatTheHeatDesc}</p>
                </div>
                <Parallax speed={10}>
                  <img 
                    src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80" 
                    alt="Indoor Golf Facility" 
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </Parallax>
              </div>
            </div>
          </Parallax>
        </section>

        {/* Social Proof */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.trustedBy}</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8 opacity-60">
              <img src="https://images.unsplash.com/photo-1585685076984-4eb2adf7b95c?w=200&h=50&fit=crop&auto=format" alt="Golf Brand" className="h-8 md:h-12 object-contain" />
              <img src="https://images.unsplash.com/photo-1592922823354-c4e9995cf333?w=200&h=50&fit=crop&auto=format" alt="Golf Brand" className="h-8 md:h-12 object-contain" />
              <img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=200&h=50&fit=crop&auto=format" alt="Golf Brand" className="h-8 md:h-12 object-contain" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-600 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{t.readyToTransform}</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">{t.joinThousands}</p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-2 bg-white rounded-full p-2">
              <Mail className="w-6 h-6 text-gray-400 hidden sm:block ml-4" />
              <input
                type="email"
                placeholder={t.enterEmail}
                className="w-full sm:flex-1 px-4 py-2 sm:py-0 border rounded-full sm:border-none focus:ring-0 text-gray-800 placeholder-gray-400"
              />
              <button className="w-full sm:w-auto bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
                {t.getStarted}
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <GolfBall className="w-6 h-6 text-emerald-600" />
                <span className="font-bold">PinSeeking</span>
              </div>
              <p className="text-sm md:text-base text-gray-600">© 2025 PinSeeking. {t.allRightsReserved}</p>
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  );
}

export default App;