import { useEffect, useState } from 'react';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import ResumeSection from './components/ResumeSection.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import {
  CONTACT_INFO,
  DIGITAL_ADVANTAGES,
  PERSONAL_PROJECTS,
  PROJECT_HIGHLIGHTS,
  PROJECTS,
} from './data/siteData.js';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  message: '',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPersonalProject, setSelectedPersonalProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resetSelections = () => {
    setSelectedProject(null);
    setSelectedPersonalProject(null);
  };

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    resetSelections();
    setIsMenuOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`來自作品集的專案諮詢 - ${formData.name}`);
    const body = encodeURIComponent(
      `姓名：${formData.name}\n聯絡信箱：${formData.email}\n\n訊息內容：\n${formData.message}`,
    );

    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setShowSuccess(true);
    setFormData(INITIAL_FORM_STATE);
    window.setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-slate-800">
      <Navigation
        activeTab={activeTab}
        isMenuOpen={isMenuOpen}
        scrolled={scrolled}
        onSelectTab={handleSelectTab}
        onToggleMenu={() => setIsMenuOpen((previous) => !previous)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />

      <main className="px-6 pb-20 pt-24">
        {activeTab === 'portfolio' && !selectedProject ? (
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="連結人、城市與自然" subtitle="十一年的實踐軌跡。" />
            <ProjectGrid items={PROJECTS} onSelect={setSelectedProject} buttonLabel="查看詳情" />
          </div>
        ) : null}

        {activeTab === 'portfolio' && selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            backLabel="返回作品列表"
            onBack={() => setSelectedProject(null)}
            contentTitle="專案概述與設計理念"
            metadataLabels={{ year: '年份：', client: '業主：', area: '面積：' }}
            highlights={PROJECT_HIGHLIGHTS}
            highlightsTitle="核心價值與工法"
          />
        ) : null}

        {activeTab === 'personal' && !selectedPersonalProject ? (
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="數位轉型與技術整合" subtitle="前瞻性的景觀工程工具。" />
            <ProjectGrid
              items={PERSONAL_PROJECTS}
              onSelect={setSelectedPersonalProject}
              buttonLabel="查看專案細節"
              showIcons
            />
          </div>
        ) : null}

        {activeTab === 'personal' && selectedPersonalProject ? (
          <ProjectDetail
            project={selectedPersonalProject}
            backLabel="返回專案列表"
            onBack={() => setSelectedPersonalProject(null)}
            contentTitle="開發動機與技術應用"
            metadataLabels={{ year: '發表年份：', client: '應用場景：', area: '技術領域：' }}
            highlights={DIGITAL_ADVANTAGES}
            highlightsTitle="數位化設計優勢"
            variant="personal"
          />
        ) : null}

        {activeTab === 'about' ? <AboutSection /> : null}
        {activeTab === 'resume' ? <ResumeSection /> : null}
        {activeTab === 'contact' ? (
          <ContactSection
            formData={formData}
            showSuccess={showSuccess}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
