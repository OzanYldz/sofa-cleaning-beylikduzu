import { useState } from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Droplet, 
  MapPin, 
  Globe, 
  Sparkles, 
  Info, 
  Check,
  Languages,
  Calendar,
  Layers,
  HeartHandshake
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"en" | "ru" | "ar" | "tr">("en");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between relative overflow-x-hidden font-sans antialiased">
      
      {/* Structural Top Accent Line (Clean Water Turkuaz) */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-clean-turkuaz z-50"></div>

      {/* Cozy & Trust-oriented Gentle Background Blurs */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-b from-clean-turkuaz-light/50 via-white/40 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-40 right-[-100px] w-96 h-96 bg-clean-turkuaz-light/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-12 left-[-100px] w-80 h-80 bg-cozy-gold-light rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* HEADER SECTION */}
      <header id="main-header" className="w-full max-w-6xl mx-auto px-6 pt-8 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200/60 bg-white/70 backdrop-blur-xs sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-clean-turkuaz-light border border-clean-turkuaz/20 flex items-center justify-center text-clean-turkuaz-dark font-bold text-lg shadow-xs">
            S
          </div>
          <div className="text-center sm:text-left">
            <span className="font-bold text-lg tracking-wide text-slate-900 block leading-tight">
              SOFA<span className="text-clean-turkuaz font-extrabold">CLEANING</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-clean-turkuaz-dark font-extrabold">
              Professional Service
            </span>
          </div>
        </div>

        {/* Local Area Information Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-600">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200/70 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-clean-turkuaz" /> Beylikdüzü & Neighborhoods
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-clean-turkuaz-light text-clean-turkuaz-dark font-bold border border-clean-turkuaz/10">
            <Globe className="w-3.5 h-3.5" /> sofacleaningbeylikduzu.com
          </span>
        </div>
      </header>

      {/* HERO SECTION */}
      <main id="main-content" className="w-full max-w-4xl mx-auto px-6 py-12 md:py-16 flex-grow flex flex-col items-center text-center">
        
        {/* Coming Soon Status Tag */}
        <div className="mb-6">
          <div className="bg-clean-turkuaz-light px-4 py-1.5 rounded-full border border-clean-turkuaz/20 shadow-xs inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clean-turkuaz opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-clean-turkuaz"></span>
            </span>
            <span className="text-clean-turkuaz-dark text-xs font-bold uppercase tracking-wider">
              Service Portal Coming Soon
            </span>
          </div>
        </div>

        {/* H1 Title strictly requested */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-950 font-sans">
          Professional Sofa & Mattress Cleaning <br />
          <span className="text-clean-turkuaz font-extrabold">in Beylikdüzü</span>
        </h1>

        {/* Main Text strictly requested */}
        <p className="max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed font-normal mb-10 bg-white/40 p-4 rounded-xl border border-slate-100 backdrop-blur-xs">
          We provide professional deep extraction cleaning for your sofas, mattresses, and armchairs. We combine German engineered Kärcher equipment with effective, safe cleaning solutions to ensure a hygienic home for your family. Fast, reliable, and thorough service.
        </p>

        {/* Highlighted Feature Banner */}
        <div className="w-full max-w-2xl bg-white border border-clean-turkuaz/15 hover:border-clean-turkuaz/30 rounded-2xl p-5 shadow-sm mb-12 flex flex-col sm:flex-row items-center gap-4 text-left transition-all">
          <div className="w-12 h-12 rounded-full bg-clean-turkuaz-light flex items-center justify-center shrink-0 border border-clean-turkuaz/10">
            <Layers className="w-6 h-6 text-clean-turkuaz" />
          </div>
          <div>
            <span className="text-xs font-bold text-cozy-gold uppercase tracking-wider">Featured Technology</span>
            <p className="text-sm text-slate-900 font-semibold mt-0.5">
              Premium German Engineered Equipment: Deep Extraction Technology
            </p>
            <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
              Our high suction deep washing technology forces pristine water down to the deeper upholstery materials, lifting set in grit, allergens, skin flakes, and unpleasant odors instantly.
            </p>
          </div>
        </div>

        {/* Feature Grid strictly matching requested items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mb-8">
          
          {/* Support Feature */}
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl flex items-start gap-4 hover:shadow-xs transition-all text-left group hover:border-clean-turkuaz/20">
            <div className="w-10 h-10 rounded-lg bg-clean-turkuaz-light text-clean-turkuaz flex items-center justify-center font-bold text-sm shrink-0 border border-clean-turkuaz/10">
              EN
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">EN & TR</h4>
              <p className="text-xs text-slate-500 mt-1 font-normal leading-relaxed">
                English & Turkish speaking support. Friendly communication with zero language barriers.
              </p>
            </div>
          </div>

          {/* Technology Feature */}
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl flex items-start gap-4 hover:shadow-xs transition-all text-left group hover:border-cozy-gold-accent/20">
            <div className="w-10 h-10 rounded-lg bg-cozy-gold-light flex items-center justify-center text-lg shrink-0 border border-cozy-gold-accent/15">
              🇩🇪
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">German Engineered</h4>
              <p className="text-xs text-slate-500 mt-1 font-normal leading-relaxed">
                Professional German engineered deep cleaning technology utilizing authentic Kärcher extractors for maximum performance.
              </p>
            </div>
          </div>

          {/* Solutions Feature */}
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl flex items-start gap-4 hover:shadow-xs transition-all text-left group hover:border-clean-turkuaz/20">
            <div className="w-10 h-10 rounded-lg bg-clean-turkuaz-light flex items-center justify-center text-lg shrink-0 border border-clean-turkuaz/10">
              🧼
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Eco Friendly Solutions</h4>
              <p className="text-xs text-slate-500 mt-1 font-normal leading-relaxed">
                Eco friendly and safe cleaning solutions. Completely non toxic, pet safe, and baby safe detergents for your peace of mind.
              </p>
            </div>
          </div>

          {/* Local Area Feature */}
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl flex items-start gap-4 hover:shadow-xs transition-all text-left group hover:border-cozy-gold-accent/20">
            <div className="w-10 h-10 rounded-lg bg-cozy-gold-light flex items-center justify-center text-lg shrink-0 border border-cozy-gold-accent/15">
              📍
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Local Service Coverage</h4>
              <p className="text-xs text-slate-500 mt-1 font-normal leading-relaxed">
                Serving Beylikdüzü and surrounding areas. Fast dispatch to Yakuplu, Kavaklı, Marina, and nearby neighborhoods.
              </p>
            </div>
          </div>

        </div>

        {/* Clean approachability prompt */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium px-4 py-2 rounded-lg bg-white border border-slate-200/60 shadow-xs max-w-sm mt-4">
          <HeartHandshake className="w-4 h-4 text-clean-turkuaz" />
          <span>Your trust is our greatest asset. Local. Safe. Professional.</span>
        </div>

      </main>

      {/* MULTILINGUAL LOCAL SEO INDEX (Required and highly informative) */}
      <section id="multilingual-seo-guides" className="w-full bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-widest text-clean-turkuaz font-extrabold block mb-1">Local Resource Guides</span>
            <h2 className="text-xs text-slate-500 font-medium max-w-md mx-auto">
              Select your language to browse professional support guidelines and local coverage information.
            </h2>
            
            {/* Custom Tabs */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              {[
                { name: "English Guide", code: "en" },
                { name: "Русский (Химчистка)", code: "ru" },
                { name: "العربية (تنظيف كنب)", code: "ar" },
                { name: "Türkçe Başvuru", code: "tr" }
              ].map((language) => (
                <button
                  key={language.code}
                  onClick={() => setActiveTab(language.code as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    activeTab === language.code 
                      ? "bg-clean-turkuaz-light text-clean-turkuaz-dark border border-clean-turkuaz/20 shadow-xs font-bold" 
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>

          {/* Directory Content Area */}
          <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl max-w-3xl mx-auto text-xs sm:text-sm leading-relaxed text-slate-600 block">
            
            {activeTab === "en" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h3 className="font-bold text-slate-900 text-sm">Professional Sofa & Mattress Cleaning Guide</h3>
                  <span className="text-[9px] font-bold text-clean-turkuaz bg-clean-turkuaz-light px-2.5 py-0.5 rounded uppercase tracking-wider">English</span>
                </div>
                <p className="font-light">
                  Homeowners trust us for supreme <strong className="font-semibold text-slate-900">sofa cleaning beylikduzu</strong> and experienced <strong className="font-semibold text-slate-900">mattress cleaning beylikduzu</strong>. With our <strong className="font-semibold text-slate-900">deep upholstery cleaning</strong> processes, we tackle rigorous stains, sweat residues, dust allergens, and deep pet dander. Experience pristine hygiene on your fabric chairs, modular couches, and bed mattresses with professional friendly local cleaner support.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-clean-turkuaz" /> German engineered vacuuming</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-clean-turkuaz" /> Pet safe extraction solutions</span>
                </div>
              </motion.div>
            )}

            {activeTab === "ru" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h3 className="font-bold text-slate-900 text-sm">Химчистка диванов и матрасов в Бейликдюзю</h3>
                  <span className="text-[9px] font-bold text-clean-turkuaz bg-clean-turkuaz-light px-2.5 py-0.5 rounded uppercase tracking-wider">Русский</span>
                </div>
                <p className="font-light">
                  Качественная и доступная <strong className="font-semibold text-slate-900">химчистка диванов бейликдюзю</strong> готова вернуть вашей домашней мягкой мебели первозданную свежесть. Мы проводим глубокую влажную чистку мягких кресел, матрасов, ковровых покрытий и стульев. Профессиональное немецкое оборудование позволяет удалить въевшиеся пятна чая, кофе, следы домашних животных и пылевых клещей за один визит.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-clean-turkuaz" /> Безопасная био-химия</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-clean-turkuaz" /> Удаление неприятных запахов</span>
                </div>
              </motion.div>
            )}

            {activeTab === "ar" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4" dir="rtl">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h3 className="font-bold text-slate-900 text-sm" dir="rtl">خدمات تنظيف كنب متكاملة في بيليكدوزو</h3>
                  <span className="text-[9px] font-bold text-clean-turkuaz bg-clean-turkuaz-light px-2.5 py-0.5 rounded uppercase tracking-wider" dir="ltr">العربية</span>
                </div>
                <p className="font-light leading-relaxed">
                  نحن نوفر لكم خدمة <strong className="font-semibold text-slate-900">تنظيف كنب في بيليكدوزو</strong> عالية الجودة بالاعتماد على أحدث أجهزة الاستخلاص والشفط العميق من ماركة كارشر الألمانية. نقوم بإزالة البقع الداكنة والأوساخ وعث الفراش والروائح بشكل آمن تماماً على الأطفال والحيوانات الأليفة مع توفير دعم باللغتين التركية والإنجليزية لتسهيل تواصلكم.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 text-[11px] text-slate-500 font-medium justify-start">
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-clean-turkuaz" /> مواد صديقة للبيئة</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-clean-turkuaz" /> تنظيف المراتب والكنب بالكامل</span>
                </div>
              </motion.div>
            )}

            {activeTab === "tr" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h3 className="font-bold text-slate-900 text-sm">Koltuk, Kanepe ve Yatak Yıkama Hizmeti</h3>
                  <span className="text-[9px] font-bold text-clean-turkuaz bg-clean-turkuaz-light px-2.5 py-0.5 rounded uppercase tracking-wider">Türkçe</span>
                </div>
                <p className="font-light">
                  Beylikdüzü sakinleri için profesyonel koltuk yıkama, kanepe dezenfeksiyonu ve derinlemesine yatak temizleme çözümleri sağlıyoruz. Vakumlu Alman Kärcher makinelerimiz ve bitkisel bazlı deterjanlarımızla koltuk liflerindeki kirleri ve bakterileri tamamen söküp atıyoruz. Evcil hayvan sahipleri ve çocuklu aileler için en güvenli temizlik garantisi!
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-clean-turkuaz" /> Kärcher vakumlu temizlik</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-clean-turkuaz" /> Bitkisel şampuanlarla ekstraksiyon</span>
                </div>
              </motion.div>
            )}

          </div>

          {/* Hidden/Organic bottom keywords specifically requested */}
          <div className="mt-12 pt-6 border-t border-slate-200 mx-auto text-center">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4 font-mono">Sofi Cleaning Local Optimization Index</span>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-slate-400">
              <span className="hover:text-slate-600 transition-colors">sofa cleaning</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-slate-600 transition-colors">mattress cleaning</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-slate-600 transition-colors">deep upholstery cleaning</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-slate-600 transition-colors">couch washing beylikduzu</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-slate-600 transition-colors">химчистка диванов бейликдюзю</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-slate-600 transition-colors">تنظيف كنب في بيليكدوزو</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-slate-600 transition-colors">koltuk yıkama beylikdüzü</span>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer id="footer" className="w-full bg-slate-100 border-t border-slate-200 py-10 px-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wide text-slate-800">SOFA CLEANING BEYLİKDÜZÜ</span>
            <span className="w-1.5 h-3.5 bg-clean-turkuaz rounded-full" />
            <span className="font-normal text-slate-500">sofacleaningbeylikduzu.com</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-slate-400">
            <span>Official Portal Opening August 2026</span>
          </div>

          <div>
            <p className="font-normal text-[11px] text-slate-400">&copy; 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
