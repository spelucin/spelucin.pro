import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { C } from "../constants";
import { Card, Eyebrow, SectionH2 } from "./CommonComponents";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "./ui/carousel";

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  carouselImages: string[];
  challenge: string;
  strategy: string[];
  impact: string[];
}

const projectImages: Record<string, { image: string, carouselImages: string[] }> = {
  ecommerce: {
    image: "/img/portfolio/ecommerce_owlbox/ecommerce_owlbox_page-0001.jpg",
    carouselImages: [
      "/img/portfolio/ecommerce_owlbox/ecommerce_owlbox_page-0001.jpg",
      "/img/portfolio/ecommerce_owlbox/ecommerce_owlbox_page-0004.jpg",
      "/img/portfolio/ecommerce_owlbox/ecommerce_owlbox_page-0007.jpg",
      "/img/portfolio/ecommerce_owlbox/ecommerce_owlbox_page-0008.jpg",
      "/img/portfolio/ecommerce_owlbox/ecommerce_owlbox_page-0009.jpg",
      "/img/portfolio/ecommerce_owlbox/ecommerce_owlbox_page-0010.jpg",
    ]
  },
  laboratoria: {
    image: "/img/portfolio/laboratoria/laboratoria_dashboard_page-0001.jpg",
    carouselImages: [
      "/img/portfolio/laboratoria/laboratoria_dashboard_page-0001.jpg",
      "/img/portfolio/laboratoria/laboratoria_dashboard_page-0002.jpg",
      "/img/portfolio/laboratoria/laboratoria_dashboard_page-0003.jpg",
      "/img/portfolio/laboratoria/laboratoria_dashboard_page-0004.jpg",
    ]
  },
  "seo-notebook": {
    image: "/img/portfolio/seo_notebook/seo_notebook_page-0001.jpg",
    carouselImages: [
      "/img/portfolio/seo_notebook/seo_notebook_page-0001.jpg",
      "/img/portfolio/seo_notebook/seo_notebook_page-0002.jpg",
      "/img/portfolio/seo_notebook/seo_notebook_page-0003.jpg",
      "/img/portfolio/seo_notebook/seo_notebook_page-0005.jpg",
      "/img/portfolio/seo_notebook/seo_notebook_page-0006.jpg",
      "/img/portfolio/seo_notebook/seo_notebook_page-0008.jpg",
      "/img/portfolio/seo_notebook/seo_notebook_page-0009.jpg",
    ]
  },
  "llm-attribution": {
    image: "/img/portfolio/llm_notebook/llm_notebook_page-0001.jpg",
    carouselImages: [
      "/img/portfolio/llm_notebook/llm_notebook_page-0001.jpg",
      "/img/portfolio/llm_notebook/llm_notebook_page-0002.jpg",
    ]
  }
};

export function PortfolioSection({ sectionStyle }: { sectionStyle: React.CSSProperties }) {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsData = t('portfolio.projects', { returnObjects: true });
  const projects = (Array.isArray(projectsData) ? projectsData : []).map((p: any) => ({
    ...p,
    ...projectImages[p.id]
  })) as Project[];

  return (
    <section id="casos" style={{ ...sectionStyle }}>
      <div style={{ marginBottom: 48 }}>
        <Eyebrow>{t('portfolio.eyebrow')}</Eyebrow>
        <SectionH2>{t('portfolio.title')}</SectionH2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: 32,
        }}
      >
        {projects.map((p, i) => (
          <Card
            key={i}
            style={{
              padding: "0",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div style={{ height: 240, width: "100%", overflow: "hidden", position: "relative" }}>
                 <img 
                   src={p.image} 
                   alt={p.title} 
                   style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
                 />
                 <div style={{ 
                    position: "absolute", 
                    inset: 0, 
                    background: "linear-gradient(to top, rgba(6,20,15,0.7) 0%, transparent 50%)" 
                 }} />
            </div>

            <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
              <h3 style={{ fontFamily: "Lexend, sans-serif", fontSize: "1.3rem", color: C.text, margin: "0 0 12px 0", fontWeight: 600 }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: `${C.text}70`, lineHeight: 1.6, margin: "0 0 24px 0" }}>
                {p.shortDesc}
              </p>
              
              <button
                onClick={() => setSelectedProject(p)}
                style={{
                    marginTop: "auto",
                    background: "transparent",
                    color: C.sage,
                    border: `1px solid ${C.sage}40`,
                    padding: "12px 24px",
                    borderRadius: 99,
                    fontFamily: "Lexend, sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    width: "fit-content",
                    transition: "all 0.3s"
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${C.sage}15`;
                    e.currentTarget.style.borderColor = C.sage;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = `${C.sage}40`;
                }}
              >
                {t('portfolio.viewCase')} <ArrowUpRight size={16} />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl w-full h-full lg:h-[90vh] bg-[#06140f] border-none p-0 overflow-hidden lg:rounded-[1.5rem] shadow-[0_0_80px_rgba(0,0,0,0.9)] ring-1 ring-[#acd8b9]/10">
          {selectedProject && (
            <div className="relative h-full overflow-y-auto custom-scroll flex flex-col pt-12 lg:pt-16">
              {/* Header: Title and context at the top */}
              <div className="w-full max-w-3xl mx-auto px-8 mb-8 text-center">
                <p className="text-[#acd8b9] font-bold text-[10px] tracking-[0.4em] uppercase mb-4">
                  {t('portfolio.caseStudy')}
                </p>
                <DialogTitle className="text-3xl lg:text-5xl font-bold text-white font-lexend leading-tight">
                  {selectedProject.title}
                </DialogTitle>
              </div>

              {/* Visual Panel: Cinematic Image Carousel */}
              <div className="w-full bg-black/20 relative aspect-[2/1] lg:aspect-[2.4/1] flex-shrink-0">
                <Carousel className="w-full h-full" opts={{ loop: true }}>
                  <CarouselContent className="h-full">
                    {selectedProject.carouselImages.map((img, i) => (
                      <CarouselItem key={i} className="h-full">
                        <div className="w-full h-full relative">
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* Minimalist Navigation */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20">
                     <CarouselPrevious className="static translate-y-0 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-[#06140f] transition-all" />
                     <CarouselNext className="static translate-y-0 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-[#06140f] transition-all" />
                  </div>

                  <CarouselDots className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20" />
                </Carousel>
              </div>

              {/* Information Panel: Content Flow */}
              <div className="w-full max-w-3xl mx-auto p-8 lg:p-12 flex flex-col">
                <div className="space-y-16">
                  <div className="space-y-8">
                    <p className="text-[#fff8eb]/90 text-lg lg:text-xl leading-relaxed font-inter font-light">
                      {selectedProject.challenge}
                    </p>
                    
                    <div className="pt-8 border-t border-white/10">
                      <ul className="space-y-4 list-none p-0 m-0 text-white/70 text-base">
                        {selectedProject.strategy.map((s, i) => (
                          <li key={i} className="flex gap-4">
                            <span className="text-[#acd8b9] opacity-50 font-mono">/</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-[#acd8b9] font-bold text-[10px] tracking-widest uppercase opacity-60 mb-8">
                      {t('portfolio.sections.impact')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.impact.map((imp, i) => (
                        <div key={i} className="bg-[#acd8b9]/5 border border-[#acd8b9]/10 p-6 rounded-2xl flex gap-4 items-center group hover:bg-[#acd8b9]/10 transition-all">
                          <CheckCircle2 size={18} className="text-[#acd8b9] flex-shrink-0" />
                          <span className="text-white font-medium text-sm leading-snug text-balance">
                            {imp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <DialogClose className="fixed lg:absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md hover:bg-white/10 text-white/80 hover:text-white transition-all z-50">
            <X size={20} />
          </DialogClose>
        </DialogContent>
      </Dialog>
      
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(172, 216, 185, 0.2); border-radius: 99px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: rgba(172, 216, 185, 0.4); }
      `}</style>
    </section>
  );
}

