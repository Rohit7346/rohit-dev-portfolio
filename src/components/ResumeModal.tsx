import React, { useRef, useState, useEffect } from 'react';
import { X, Download, FileText, Image as ImageIcon, Printer, Check, Loader2, Phone, Mail, Github, MapPin } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const [downloadingFormat, setDownloadingFormat] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerDownload = async (format: 'pdf' | 'png' | 'jpg') => {
    if (!resumeRef.current) return;
    setDownloadingFormat(format);

    try {
      // High-resolution canvas rendering
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2.5,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      if (format === 'png') {
        const link = document.createElement('a');
        link.download = 'Rohit_K_Resume.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      } else if (format === 'jpg') {
        const link = document.createElement('a');
        link.download = 'Rohit_K_Resume.jpg';
        link.href = canvas.toDataURL('image/jpeg', 0.95);
        link.click();
      } else if (format === 'pdf') {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Rohit_K_Resume.pdf');
      }

      setDownloadSuccess(format.toUpperCase());
      setTimeout(() => setDownloadSuccess(null), 3000);
    } catch (err) {
      console.error('Failed to export resume:', err);
    } finally {
      setDownloadingFormat(null);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Modal Top Action Bar */}
        <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">Rohit K — Resume</h3>
              <p className="text-[11px] text-slate-400">Official Curriculum Vitae</p>
            </div>
          </div>

          {/* Download & Print Actions */}
          <div className="flex items-center flex-wrap gap-2">
            {/* PDF Button */}
            <button
              onClick={() => triggerDownload('pdf')}
              disabled={!!downloadingFormat}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 disabled:opacity-50 transition-all"
              title="Download as PDF document"
            >
              {downloadingFormat === 'pdf' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : downloadSuccess === 'PDF' ? (
                <Check className="w-3.5 h-3.5 text-white" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>PDF</span>
            </button>

            {/* PNG Button */}
            <button
              onClick={() => triggerDownload('png')}
              disabled={!!downloadingFormat}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 disabled:opacity-50 transition-colors"
              title="Download as high-res PNG image"
            >
              {downloadingFormat === 'png' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : downloadSuccess === 'PNG' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              )}
              <span>PNG</span>
            </button>

            {/* JPG Button */}
            <button
              onClick={() => triggerDownload('jpg')}
              disabled={!!downloadingFormat}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 disabled:opacity-50 transition-colors"
              title="Download as JPG image"
            >
              {downloadingFormat === 'jpg' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : downloadSuccess === 'JPG' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
              )}
              <span>JPG</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-slate-950 flex justify-center">
          
          {/* THE RESUME DOCUMENT SHEET (White Paper Format) */}
          <div
            ref={resumeRef}
            id="resume-document"
            className="w-full max-w-[760px] bg-white text-slate-900 shadow-2xl rounded-sm p-8 sm:p-12 font-sans select-text border border-slate-200"
            style={{ minHeight: '1020px' }}
          >
            {/* Header */}
            <div className="text-center pb-4 border-b border-slate-300">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-slate-900 uppercase">
                ROHIT K
              </h1>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-600 font-medium mt-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>Bengaluru, India</span>
              </div>

              {/* Contact Bar */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2.5 text-xs text-slate-700 font-mono">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-slate-600" />
                  <span>+91-7899117346</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-600" />
                  <a href="mailto:rohit132005kv@gmail.com" className="hover:underline">
                    rohit132005kv@gmail.com
                  </a>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1">
                  <Github className="w-3 h-3 text-slate-600" />
                  <a href="https://github.com/Rohit7346" target="_blank" rel="noreferrer" className="hover:underline">
                    github.com/Rohit7346
                  </a>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-800">
                EDUCATION
              </h2>
              <div className="mt-2 text-xs">
                <div className="flex justify-between items-center font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <img src="/logos/msruas-logo.png" alt="MSRUAS Logo" className="h-5 w-auto object-contain scale-125" />
                    <span>M S Ramaiah University of Applied Sciences</span>
                  </div>
                  <span className="font-normal italic text-slate-700">Aug 2023 – July 2027</span>
                </div>
                <div className="flex justify-between items-baseline text-slate-800 mt-0.5">
                  <span className="italic">B.E., Computer Science and Engineering — <strong className="font-bold">CGPA – 9.33</strong></span>
                  <span className="text-slate-600">Bengaluru, India</span>
                </div>
              </div>
            </div>

            {/* Coursework / Skills */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-800">
                COURSEWORK / SKILLS
              </h2>
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-y-1 gap-x-4 text-xs text-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span>Data Structures & Algorithms</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span>Operating Systems</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span>Database Management System (DBMS)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span>Network Security</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span>Artificial Intelligence</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 font-bold">•</span>
                  <span>OOPS Concept</span>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-800">
                PROJECTS
              </h2>

              {/* Project 1 */}
              <div className="mt-2.5">
                <div className="text-xs font-bold text-slate-900">
                  <span>Army Digital Information System</span>
                  <span className="font-normal text-slate-600"> | Spring Boot, Spring Data JPA, HTML, CSS, JavaScript, PostgreSQL</span>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] sm:text-xs text-slate-800 list-disc list-outside pl-4 leading-relaxed">
                  <li>
                    Developed a full-stack military-grade user management system with dual-mode (online/offline) functionality and role-based access control.
                  </li>
                  <li>
                    Implemented comprehensive CRUD operations with Excel import/export capabilities and real-time user session management with automatic timeout features.
                  </li>
                  <li>
                    Allows multiple users to login simultaneously, each having their own session time for security and tracking purposes.
                  </li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="mt-3.5">
                <div className="text-xs font-bold text-slate-900">
                  <span>Collaborative Presentation Editor</span>
                  <span className="font-normal text-slate-600"> | React, Vite, Tailwind CSS, Spring Boot, MongoDB</span>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] sm:text-xs text-slate-800 list-disc list-outside pl-4 leading-relaxed">
                  <li>
                    Developed a full-stack PowerPoint-like presentation editor with editable slides, text, shapes, images, tables, charts, themes, layouts, and Ribbon-based controls.
                  </li>
                  <li>
                    Implemented real-time collaborative editing with role-based access, synchronized slide/object updates, object locking, collaborator presence, and version checkpoints.
                  </li>
                  <li>
                    Built MongoDB-backed autosave and presentation persistence, preserving complete slide elements, chart/table data, formatting, and presentation state across reloads and reopening.
                  </li>
                  <li>
                    Developed advanced features including PowerPoint import, presentation CMS, data binding, presentation analytics, Smart Slide Remix, and Auto Arrange.
                  </li>
                </ul>
              </div>
            </div>

            {/* Internship Section */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-800">
                INTERNSHIP
              </h2>
              <div className="mt-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <img src="/logos/bel-logo.png" alt="BEL Logo" className="h-5 w-auto object-contain" />
                    <span>Bharat Electronics Limited (BEL)</span>
                  </div>
                  <span className="font-normal italic text-slate-700">Aug 2025 – Sep 2025</span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-slate-800 mt-0.5">
                  <span className="italic font-medium">Intern - Software Solutions Division</span>
                  <span className="text-slate-600">Bengaluru, India</span>
                </div>
                <ul className="mt-1 space-y-1 text-[11px] sm:text-xs text-slate-800 list-disc list-outside pl-4 leading-relaxed">
                  <li>
                    Gained a clear understanding of Software Development Life Cycle (SDLC) and its stages—from requirement analysis to deployment and maintenance.
                  </li>
                  <li>
                    Worked on small development and testing tasks related to the project workflow under supervision.
                  </li>
                  <li>
                    Collaborated with research and engineering teams to enhance system accuracy and efficiency.
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-800">
                TECHNICAL SKILLS
              </h2>
              <div className="mt-2 space-y-1 text-xs text-slate-800 leading-relaxed">
                <div>
                  <strong className="font-bold text-slate-900">Languages:</strong> Java, Python, C, C++, JavaScript
                </div>
                <div>
                  <strong className="font-bold text-slate-900">Tools:</strong> VS Code, IntelliJ IDEA, Eclipse, Git, GitHub
                </div>
                <div>
                  <strong className="font-bold text-slate-900">Databases:</strong> MySQL, MongoDB, PostgreSQL
                </div>
                <div>
                  <strong className="font-bold text-slate-900">Frameworks:</strong> Spring, Hibernate, React
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
