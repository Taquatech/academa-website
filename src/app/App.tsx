

import { useState, useEffect } from "react";
import StepOneIcon from "../imports/StepOneIcon/index";
import StepTwoIcon from "../imports/StepTwoIcon/index";
import StepThreeIcon from "../imports/StepThreeIcon/index";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import {
  Search, ChevronRight, ArrowUpRight, ChevronDown, Menu, X, Plus, Minus,
  LayoutDashboard, BriefcaseBusiness, Presentation, GraduationCap, Users,
  BadgeDollarSign, BarChart3, CheckSquare, ShieldCheck, TriangleAlert,
  Zap, 
  Heart, Globe, Star, Target, Lightbulb, Award, MessageSquare,
} from "lucide-react";


import { AcademaLogoMark } from "../app/components/AcademaLogoMark";

type Page = "home" | "features" | "helpCenter" | "about" | "bookDemo" | "getStarted";

// ─── Logo ────────────────────────────────────────────────────────────────────

function AcademaLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center shrink-0">
      <AcademaLogoMark dark={dark} className="h-[22px] w-auto" />
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "FR", label: "Français" },
  { code: "HA", label: "Hausa" },
  { code: "YO", label: "Yorùbá" },
  { code: "IG", label: "Igbo" },
];

function Navbar({
  onNavigate,
  currentPage,
  variant = "main",
}: {
  onNavigate: (p: Page) => void;
  currentPage: Page;
  variant?: "main" | "helpCenter";
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("EN");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 580);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (variant === "helpCenter") {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[10px] bg-white/0 border-b border-black/5">
        <div className="max-w-[1260px] mx-auto px-8 h-[78px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate("home")} className="cursor-pointer">
              <AcademaLogo dark={scrolled} />
            </button>
            <div className="w-px h-7 bg-[#FFFFFF]" />
            <span className="font-['Gully',sans-serif] text-[20px] text-[#FFFFFF] leading-none">Help Center</span>
          </div>
          <button
            onClick={() => onNavigate("getStarted")}
            className="bg-[#081974] text-white font-['Gully',sans-serif] font-medium text-[16px] px-6 h-[43px] rounded-[8px] whitespace-nowrap hover:bg-[#061560] transition-colors"
          >
            Get Started
          </button>
        </div>
      </header>
    );
  }

  const navLinks: { label: string; page?: Page }[] = [
    { label: "Features", page: "features" },
    { label: "Support", page: "helpCenter" },
    { label: "About Us", page: "about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/0 border-b border-black/5">
      <div className="max-w-[1260px] mx-auto px-8 h-[72px] flex items-center justify-between">
        <button onClick={() => onNavigate("home")} className="cursor-pointer">
          <AcademaLogo dark={scrolled} />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => link.page && onNavigate(link.page)}
              className={`font-['Gully',sans-serif] text-[15px] transition-colors ${
                currentPage === link.page
                  ? "text-[#f0f0f0] font-medium"
                  : "text-[#F0F0F0] hover:text-[#9faffc]"
              } ${scrolled ? "text-black" : "text-white"} `}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 font-['Gully',sans-serif] text-[15px] text-[#f0f0f0] hover:text-[#9faffc] transition-colors h-[40px] px-2 rounded-[8px] hover:bg-[rgba(0,82,158,0.05)]"
            >
              <Globe size={15} className="text-[#f0f0f0] " />
              <span>{activeLang}</span>
              <ChevronDown size={13} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-[calc(100%+4px)] bg-white border border-black/10 rounded-[10px] shadow-lg py-1.5 min-w-[140px] z-50">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setActiveLang(l.code); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-[14px] font-['Gully',sans-serif] hover:bg-[rgba(0,82,158,0.06)] transition-colors ${activeLang === l.code ? "text-[#081974] font-medium" : "text-[#3a3a3a]"}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate("bookDemo")}
            className="flex items-center gap-1.5 font-['Gully',sans-serif] text-[15px] text-[#f0f0f0] hover:text-[#9faffc] transition-colors"
          >
            Book a demo
            <ArrowUpRight size={16} />
          </button>
          <button
            onClick={() => onNavigate("getStarted")}
            className="bg-[#081974] text-white font-['Gully',sans-serif] font-medium text-[15px] px-5 h-[40px] rounded-[8px] whitespace-nowrap hover:bg-[#1539eb] transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button className={`md:hidden p-2 ${scrolled ? "text-black" : "text-white"} md:text-black`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => { link.page && onNavigate(link.page); setMenuOpen(false); }}
              className="font-['Gully',sans-serif] text-[15px] text-[#3a3a3a] text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate("bookDemo"); setMenuOpen(false); }}
            className="font-['Gully',sans-serif] text-[15px] text-[#000846] text-left flex items-center gap-1"
          >
            Book a demo <ArrowUpRight size={15} />
          </button>
          <button
            onClick={() => { onNavigate("getStarted"); setMenuOpen(false); }}
            className="bg-[#081974] text-white font-['Gully',sans-serif] font-medium text-[15px] px-5 h-[40px] rounded-[8px] text-center"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 850);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className="bg-[#fafbfd] border-t border-black/5">
      <div className="max-w-[1260px] mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <AcademaLogo dark={scrolled} />
            <p className="font-['Gully',sans-serif] text-[14px] text-[#000419] leading-[1.5]">
              Revolutionizing School Management & Learning.
            </p>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-3">
            <p className="font-['Gully',sans-serif] font-semibold text-[14px] text-[#000526]">Platform</p>
            {["Features", "Student Portal", "Teacher Tools", "Admin Dashboard", "Mobile Access"].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate("features")}
                className="font-['Gully',sans-serif] text-[14px] text-[#000419] hover:text-[#081974] text-left transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <p className="font-['Gully',sans-serif] font-semibold text-[14px] text-[#000526]">Company</p>
            {[
              { label: "About Academa", page: "about" as Page },
              { label: "Blog" },
              { label: "Privacy Policy" },
              { label: "Terms of Use" },
              { label: "Careers" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => item.page && onNavigate(item.page)}
                className="font-['Gully',sans-serif] text-[14px] text-[#000419] hover:text-[#081974] text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Schools */}
          <div className="flex flex-col gap-3">
            <p className="font-['Gully',sans-serif] font-semibold text-[14px] text-[#000526]">Schools</p>
            {["Primary Schools", "Secondary Schools", "Tertiary Schools", "Colleges of Education", "How It Works"].map((item) => (
              <p key={item} className="font-['Gully',sans-serif] text-[14px] text-[#000419]">{item}</p>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <p className="font-['Gully',sans-serif] font-semibold text-[14px] text-[#000526]">Support</p>
            {[
              { label: "Contact Us" },
              { label: "Help Desk", page: "helpCenter" as Page },
              { label: "Book a demo" },
              { label: "Video Tutorials" },
              { label: "FAQs" },
              { label: "Technical Support" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => item.page && onNavigate(item.page)}
                className="font-['Gully',sans-serif] text-[14px] text-[#000419] hover:text-[#081974] text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {/* Social icons */}
              {[
                <svg key="fb" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                <svg key="ig" width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="black" strokeWidth="1.5"/><circle cx="12" cy="12" r="5" stroke="black" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="black"/></svg>,
                <svg key="x" width="18" height="18" viewBox="0 0 20 20" fill="black"><path d="M11.903 8.455L18.456 1h-1.561L11.207 7.48 6.384 1H1l6.883 9.967L1 20h1.561l6.02-6.953L13.616 20H19L11.903 8.455z"/></svg>,
              ].map((icon, i) => (
                <span key={i} className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity">{icon}</span>
              ))}
            </div>
            <p className="font-['Gully',sans-serif] text-[13px] text-[#000419] leading-[1.5]">
              16B Nkemba Street<br />Off Abak Road, Uyo,<br />Akwa Ibom State, Nigeria
            </p>
            <p className="font-['Gully',sans-serif] text-[13px] font-medium text-[#000419]">contact@academa.org</p>
            <p className="font-['Gully',sans-serif] text-[13px] text-[#000419]">
              (+234) 708 5980 906<br />(+234) 913 2954 676
            </p>
          </div>
        </div>

        <div className="border-t border-black/10 pt-6">
          <p className="font-['Gully',sans-serif] text-[13px] text-[#808080] text-center">
            © 2026 Academa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────

function CTASection({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <section className="bg-[#000526] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute right-0 top-0 opacity-20 pointer-events-none">
        <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
          {[
            [50, 40], [120, 80], [200, 30], [280, 120], [350, 60],
            [80, 160], [170, 200], [300, 180], [380, 240], [30, 230],
          ].map(([x, y], i) => (
            <path
              key={i}
              d={`M${x} ${y - 10}L${x + 4} ${y - 2}L${x + 10} ${y}L${x + 4} ${y + 2}L${x} ${y + 10}L${x - 4} ${y + 2}L${x - 10} ${y}L${x - 4} ${y - 2}Z`}
              fill="#454959"
            />
          ))}
        </svg>
      </div>
      <div className="absolute left-0 top-0 opacity-20 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          {[[60, 80], [140, 40], [240, 100], [100, 200], [220, 250]].map(([x, y], i) => (
            <path
              key={i}
              d={`M${x} ${y - 8}L${x + 3} ${y - 2}L${x + 8} ${y}L${x + 3} ${y + 2}L${x} ${y + 8}L${x - 3} ${y + 2}L${x - 8} ${y}L${x - 3} ${y - 2}Z`}
              fill="white"
              fillOpacity="0.35"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-[1260px] mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="flex flex-col gap-4 max-w-[580px]">
          <p className="font-['Gully',sans-serif] text-[14px] text-[#e9e9e9] tracking-wide">
            Ready To Get Started?
          </p>
          <h2 className="font-['Gully',sans-serif] font-semibold text-[40px] md:text-[44px] text-white leading-[1.2] tracking-tight">
            Start managing your school the{" "}
            <span className="text-[#00529e]">smarter way.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <button
            onClick={() => onNavigate("home")}
            className="bg-white text-[#000419] font-['Gully',sans-serif] font-medium text-[16px] h-[46px] px-8 rounded-[8px] whitespace-nowrap hover:bg-gray-100 transition-colors md:min-w-[280px]"
          >
            Get Started
          </button>
          <button
            onClick={() => onNavigate("helpCenter")}
            className="flex items-center justify-center gap-2 text-[#e9e9e9] font-['Gully',sans-serif] font-medium text-[16px] h-[46px] px-8 rounded-[8px] hover:text-white transition-colors"
          >
            Book a Demo Instead
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Landing Page ─────────────────────────────────────────────────────────────

function LandingPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const features = [
    {
      tag: "Finance & Accounts",
      tagColor: "#f0fdf4",
      tagTextColor: "#166534",
      title: "Every payment. Tracked. Collected.",
      desc: "End payment chaos with a clean, smart, and reliable school finance system.",
      points: ["Sort out fee records, bills, and receipts", "Track outstanding dues and arrears", "Implement multiple payment options", "Deliver payment records in seconds"],
      img: "../imports/AcademaWebsiteLandingPage-1/finance_img.png",
      reverse: false,
    },
    {
      tag: "Results & Academics",
      tagColor: "#eff6ff",
      tagTextColor: "#1e40af",
      title: "Results computed. Published. Done.",
      desc: "From entering scores to publishing results, every step is automated and accurate.",
      points: ["Flexible grading and scoring systems", "Automated result computation", "One-click result publishing", "Students access results on their portal"],
      img: "../imports/AcademaWebsiteLandingPage-1/results_img.png",
      reverse: true,
    },
    {
      tag: "Quizzes & Assessments",
      tagColor: "#faf5ff",
      tagTextColor: "#6b21a8",
      title: "Set the quiz. Walk away. Come back to scores.",
      desc: "Create and assign quizzes, and let Academa handle the grading automatically.",
      points: ["Create timed multiple-choice quizzes", "Auto-mark and record scores", "Track student performance trends", "Export results to student records"],
      img: "../imports/AcademaWebsiteLandingPage-1/quiz_&_assessment_img.png",
      reverse: false,
    },
    {
      tag: "HR & Staff",
      tagColor: "#fff7ed",
      tagTextColor: "#9a3412",
      title: "Your team, managed.",
      desc: "Manage staff records, roles, payroll, and performance all from one dashboard.",
      points: ["Staff profile and contract management", "Assign roles and subjects to teachers", "Leave and attendance tracking", "Bulk actions and departmental engagement"],
      img: "../imports/AcademaWebsiteLandingPage-1/staff_management_img.png",
      reverse: true,
    },
  ];

  const personas = [
    { role: "For Administrators", desc: "Full control over every aspect of your school — students, staff, finance, academics, and more.", img: "../imports/AcademaWebsiteLandingPage-1/for_admin_img.png" },
    { role: "For Teachers", desc: "Manage your classes, enter scores, assign quizzes, and communicate with parents effortlessly.", img: "../imports/AcademaWebsiteLandingPage-1/for_teachers_img.png" },
    { role: "For Students", desc: "Access results, fees, timetables, and assignments from one clean, intuitive portal.", img: "../imports/AcademaWebsiteLandingPage-1/for_students_img.png" },
    { role: "For Parents", desc: "Stay informed about your child's performance, fees, and school activities in real time.", img: "../imports/AcademaWebsiteLandingPage-1/for_parents_img.png" },
  ];

  const testimonials = [
    { name: "John Williams", role: "School Administrator", school: "Akwa Ibom State University", quote: "Academa has transformed how we manage our student records. What used to take weeks now takes minutes.", img: "../imports/AcademaWebsiteLandingPage-1/5879b20f93d5b747c6ea90df40f1d37fd79f75a0.png" },
    { name: "Ibrahim Taiwo", role: "Finance Officer", school: "University of Uyo", quote: "The fee tracking module alone has saved us so much time and reduced payment disputes dramatically.", img: "../imports/AcademaWebsiteLandingPage-1/aa3a778e23c8fb3584567ebce7d54e9ac1eb07b8.png" },
    { name: "Amaka Maduakor", role: "Principal", school: "Karmel Group of Schools", quote: "Our teachers love it. Setting quizzes and publishing results is now completely stress-free.", img: "../imports/AcademaWebsiteLandingPage-1/21f0deff0a28b0b1e523ade74b6ea80a96d725b4.png" },
    { name: "Sandra Aliyu", role: "IT Admin", school: "Life College of Education", quote: "Implementation was smooth and the support team was incredibly responsive throughout.", img: "../imports/AcademaWebsiteLandingPage-1/3b2a1ae3bc2c3af2f24ba932aca2293f13cf10ae.png" },
    { name: "Marcus Eli", role: "Vice Chancellor", school: "Ibom Metro Polytechnic", quote: "The analytics dashboard gives us insights we never had before. Decision-making is now data-driven.", img: "../imports/AcademaWebsiteLandingPage-1/3b2a1ae3bc2c3af2f24ba932aca2293f13cf10ae.png" },
  ];

  const steps = [
    { step: "01", icon: <Zap size={22} />, title: "Register", desc: "Create your school account and configure your institution profile in minutes." },
    { step: "02", icon: <Users size={22} />, title: "Get Everyone Onboard", desc: "Invite staff, import students, and set up roles for every team member." },
    { step: "03", icon: <BarChart3 size={22} />, title: "Perform Academa", desc: "Run your school fully — fees, results, timetables, HR, and more, all in one platform." },
  ];

  const faqs = [
    { q: "What types of schools can use Academa?", a: "Academa is built for all institution types — primary, secondary, tertiary, polytechnics, and colleges of education." },
    { q: "How long does it take to set up?", a: "Most schools are fully set up within 24–48 hours with our guided onboarding process and dedicated support team." },
    { q: "Can parents and students access the platform?", a: "Yes! Academa has dedicated portals for students and parents with access to results, fee statements, timetables, and more." },
    { q: "Is the data secure?", a: "Absolutely. We use industry-standard encryption and follow strict data privacy practices to keep all school data safe." },
    { q: "What if we need help after getting started?", a: "Our support team is available via live chat, email, and phone. We also have a full Help Center with guides for every role." },
  ];

  const schoolLogos = [
    { name: "Akwa Ibom State University", img: '/imports/AcademaWebsiteLandingPage-1/aksu-logo.png' },
    { name: "University of Uyo", img: "../imports/AcademaWebsiteLandingPage-1/uniuyo-logo.png" },
    { name: "Ibom Metropolitan Polytechnic", img: "../imports/AcademaWebsiteLandingPage-1/impoly-logo.png" },
    { name: "Hybrid Preparatory Schools", img: "../imports/AcademaWebsiteLandingPage-1/hybrid-logo.png" },
    { name: "Karmel Group of Schools", img: "../imports/AcademaWebsiteLandingPage-1/kamel-logo.png" },
    { name: "Life College of Education", img: "../imports/AcademaWebsiteLandingPage-1/lifecollege-logo.png" },
    { name: "Abia State College of Education", img: "../imports/AcademaWebsiteLandingPage-1/abiastate-logo.png" },
  ];

  return (
    <div className="min-h-screen bg-[#f2f8f8] font-['Gully',sans-serif]">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #060e21 42%, #0f2454 71%, #193987 100%)" }}>
        {/* Decorative dot-grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 918">
            <defs>
              <radialGradient id="hg1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00529E" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#000846" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="300" cy="600" rx="500" ry="400" fill="url(#hg1)" />
            <ellipse cx="1620" cy="700" rx="480" ry="380" fill="url(#hg1)" />
            <ellipse cx="960" cy="200" rx="600" ry="300" fill="url(#hg1)" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center pt-[180px] pb-0 px-8">
          {/* Copy block — centered */}
          <div className="flex flex-col items-center gap-[22px] w-full max-w-[900px] text-center">
            <span className="inline-flex bg-[rgba(0,82,158,0.16)] text-white text-[18px] px-[10px] py-[10px] rounded-[8px] leading-[1.14]">
              School Management, Reimagined.
            </span>
            <h1 className="font-semibold text-[56px] md:text-[66px] text-white/97 leading-[0.98] tracking-tight">
              The smartest way to run your school.
            </h1>
            <p className="text-[20px] text-white/91 leading-[1.33] max-w-[700px]">
              Academa helps schools run better — fees, results, students, staff and more, all in one platform.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-[10px] mt-[36px]">
            <button
              onClick={() => onNavigate("getStarted")}
              className="bg-[#001cb3] text-white font-medium text-[18px] h-[43px] px-7 rounded-[8px] hover:bg-[#0022d4] transition-colors whitespace-nowrap"
            >
              Get Started
            </button>
            <button
              onClick={() => onNavigate("bookDemo")}
              className="flex items-center gap-1 text-[#e9e9e9] font-medium text-[18px] h-[43px] px-5 rounded-[8px] hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Book a demo
              <ArrowUpRight size={22} className="text-[#e9e9e9]" />
            </button>
          </div>

          {/* Dashboard screenshot */}
          <div className="mt-[60px] w-full max-w-[1260px] flex justify-center">
            <div className="relative w-full rounded-[40px] overflow-hidden" style={{ background: "rgba(217,217,217,0.2)" }}>
              <div className="mx-[27px] my-[24px] rounded-[24px] overflow-hidden">
                <video
                  src="/imports/AcademaWebsiteLandingPage-1/Software_application_product__1080p.mp4"
                  aria-label="Academa platform dashboard"
                  className="w-full h-auto block"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Trusted by */}
      <div className="py-10 px-8 flex flex-col items-center gap-4">
          <p className="text-[15px] font-medium text-[#000c4c] text-center">Trusted by 10,000+ students and staff across.</p>
          <div
            className="w-full max-w-[1260px] overflow-hidden"
            style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
            onMouseEnter={(e) => {
              const track = e.currentTarget.querySelector<HTMLDivElement>("[data-carousel-track]");
              if (track) track.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              const track = e.currentTarget.querySelector<HTMLDivElement>("[data-carousel-track]");
              if (track) track.style.animationPlayState = "running";
            }}
          >
            <style>{`
              @keyframes marquee {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
            `}</style>
            <div
              data-carousel-track=""
              style={{ animation: "marquee 28s linear infinite", display: "flex", gap: "40px", width: "max-content" }}
            >
              {[...schoolLogos, ...schoolLogos].map((school, i) => (
                <div key={i} className="flex items-center gap-2.5 shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="w-[38px] h-[38px] rounded-full overflow-hidden bg-white">
                    <ImageWithFallback src={school.img} alt={school.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[14px] font-medium text-[#252525] whitespace-nowrap">{school.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* Everything section */}
      <section className="bg-white py-20">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="bg-[rgba(0,82,158,0.12)] text-[#081974] text-[14px] px-4 py-2 rounded-[6px] font-medium">Everything in one place</span>
            <h2 className="mt-5 font-semibold text-[38px] md:text-[44px] text-[#000419] leading-[1.1] tracking-tight">
              Everything your school needs,<br />finally in one place.
            </h2>
            <p className="mt-4 text-[16px] text-[#3a3a3a] max-w-[580px] mx-auto leading-[1.6]">
              From student enrollment to final exams, Academa connects every part of your school in a single, intuitive platform.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {features.map((feat, i) => (
              <div
                key={i}
                className={`flex flex-col ${feat.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
              >
                {/* Text */}
                <div className="flex-1 flex flex-col gap-5">
                  <span
                    className="inline-flex text-[13px] font-medium px-3 py-1.5 rounded-[6px] w-fit"
                    style={{ background: feat.tagColor, color: feat.tagTextColor }}
                  >
                    {feat.tag}
                  </span>
                  <h3 className="font-semibold text-[32px] text-[#000419] leading-[1.15] tracking-tight">{feat.title}</h3>
                  <p className="text-[16px] text-[#3a3a3a] leading-[1.6]">{feat.desc}</p>
                  <ul className="flex flex-col gap-2.5 mt-2">
                    {feat.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(8,25,116,0.1)] flex items-center justify-center">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="#081974" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="text-[15px] text-[#3a3a3a]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot */}
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-[520px] rounded-[12px] overflow-hidden shadow-xl border border-black/5">
                    <ImageWithFallback src={feat.img} alt={feat.title} className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="bg-[#f2f8f8] py-20">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex bg-[rgba(0,82,158,0.16)] text-[#081974] text-[14px] px-4 py-2 rounded-[8px]">Built For Everyone In Your School</span>
            <h2 className="mt-3 font-semibold text-[42px] text-[#000419] leading-[0.98] tracking-tight">One platform. Every role.</h2>
            <p className="mt-3 text-[16px] text-[#3a3a3a] leading-[1.44] max-w-[492px] mx-auto">Academa works for every stakeholder in your school — from the principal&apos;s office to the student&apos;s phone.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {personas.map((p, i) => (
              <div key={i} className="group relative h-[420px] rounded-[14px] overflow-hidden shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)]">
                <img
                  src={p.img as unknown as string}
                  alt={p.role}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: "grayscale(1)", transition: "filter 0.5s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.filter = "grayscale(0)")}
                  onMouseLeave={e => (e.currentTarget.style.filter = "grayscale(1)")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.68)] from-[28%] to-[rgba(102,102,102,0.14)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-[14px] pb-[26px] pl-[22px] pr-[27px] pointer-events-none">
                  <p className="font-semibold text-[22px] text-white tracking-[0.22px] leading-[1.36]">{p.role}</p>
                  <p className="text-[15px] text-white leading-[1.33] tracking-[0.21px]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="mb-12">
            <span className="inline-flex bg-[rgba(0,82,158,0.16)] text-[#081974] text-[14px] px-[10px] py-[10px] rounded-[8px] leading-[1.14]">What Schools Are Saying</span>
            <h2 className="mt-[14px] font-semibold text-[44px] text-[#000419] tracking-[0.44px] leading-[1.24]">Real schools. Real results.</h2>
            <p className="mt-3 text-[16px] text-[#3a3a3a]">Hear from administrators and educators using Academa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#fafbfd] border border-black/5 rounded-[12px] p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <ImageWithFallback src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-[14px] text-[#000419]">{t.name}</p>
                    <p className="text-[12px] text-[#808080]">{t.role} · {t.school}</p>
                  </div>
                </div>
                <p className="text-[14px] text-[#3a3a3a] leading-[1.6] italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex gap-0.5 mt-auto">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} fill="#f59e0b" className="text-[#f59e0b]" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Logos row */}
          <div className="mt-12 flex items-center justify-center gap-8 flex-wrap opacity-50">
            {schoolLogos.slice(0, 5).map((s) => (
              <div key={s.name} className="w-8 h-8 rounded-full overflow-hidden">
                <ImageWithFallback src={s.img} alt={s.name} className="w-full h-full object-cover" />
              </div>
            ))}
            <span className="text-[13px] text-[#000419] font-medium">Trusted across many schools</span>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="bg-[#060e21] py-[82px] relative overflow-hidden">
        <div className="max-w-[1260px] mx-auto px-8 relative z-10">
          {/* Header */}
          <div className="mb-[50px]">
            <span className="inline-flex bg-[rgba(0,82,158,0.16)] text-[#e9e9e9] text-[16px] px-[10px] py-[10px] rounded-[8px] leading-[1.14]">How It Works</span>
            <h2 className="mt-[22px] font-semibold text-[44px] text-[#e9e9e9] leading-[0.98] max-w-[555px]">Transform your school for the future in just 3 steps.</h2>
          </div>
          {/* Step cards */}
          <div className="flex flex-col md:flex-row gap-[24px] items-stretch">
            {[
              { badge: "#01", bg: "#ffd064", shadow: "#e8b149", textColor: "#081974", title: "Register", desc: "Create your admin account to get your school on Academa." },
              { badge: "#02", bg: "#dd5790", shadow: "#b03569", textColor: "white", title: "Get Everyone Onboard", desc: "Add your teachers, students, and staff to the Academa platform." },
              { badge: "#03", bg: "#64a68f", shadow: "#4d806e", textColor: "white", title: "Explore Academa", desc: "Set up your timetables, curriculum, term calendars, lesson plans, and more." },
            ].map((s, i) => (
              <div key={i} className="bg-white flex-1 h-[158px] rounded-[12px] overflow-hidden">
                <div className="flex gap-[15px] items-start pl-[24px] pr-[41px] pt-[34px] h-full">
                  {/* Badge + pole */}
                  <div className="w-[66px] h-full shrink-0">
                    {i === 0 && <StepOneIcon />}
                    {i === 1 && <StepTwoIcon />}
                    {i === 2 && <StepThreeIcon />}
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-[11px] flex-1 min-w-0">
                    <p className="font-semibold text-[20px] text-[#000846] leading-[1.14]">{s.title}</p>
                    <p className="text-[16px] text-[rgba(0,8,70,0.91)] leading-[1.14]">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* CTA */}
          <div className="mt-[50px]">
            <button
              onClick={() => onNavigate("features")}
              className="bg-[#001cb3] text-white flex items-center gap-[4px] h-[43px] px-[10px] rounded-[8px] hover:bg-[#0022d4] transition-colors"
            >
              <span className="text-[16px] font-medium whitespace-nowrap">Start Your Academa Journey</span>
              <ArrowUpRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#eef2f7] py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex gap-16 items-start">
            {/* Left: header */}
            <div className="w-[320px] shrink-0 sticky top-24">
              <span className="inline-block bg-[rgba(0,82,158,0.12)] text-[#081974] text-[13px] font-medium px-4 py-1.5 rounded-[6px] mb-5">We Know What You&apos;re Thinking</span>
              <h2 className="font-bold text-[40px] text-[#000419] leading-[1.1] tracking-tight">Let&apos;s answer your questions.</h2>
            </div>
            {/* Right: accordions + CTA */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col divide-y divide-black/10 border border-black/10 rounded-[12px] overflow-hidden bg-white/60">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <button
                      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/80 transition-colors"
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    >
                      <span className="font-medium text-[16px] text-[#000419]">{faq.q}</span>
                      {activeFaq === i
                        ? <Minus size={18} className="text-[#081974] shrink-0 ml-4" />
                        : <Plus size={18} className="text-[#081974] shrink-0 ml-4" />}
                    </button>
                    {activeFaq === i && (
                      <div className="px-6 pb-5">
                        <p className="text-[15px] text-[#3a3a3a] leading-[1.65]">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button
                  onClick={() => onNavigate("helpCenter")}
                  className="inline-flex items-center gap-2 bg-[#001cb3] text-white font-medium text-[15px] h-[44px] px-7 rounded-[8px] hover:bg-[#0022d4] transition-colors"
                >
                  See more questions
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

// ─── Features Page ────────────────────────────────────────────────────────────

function FeaturesPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 850);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const features = [
    {
      tag: "Finance & Accounts",
      tagColor: "#f0fdf4",
      tagTextColor: "#166534",
      title: "Every payment. Tracked. Collected.",
      desc: "End payment chaos with a clean, smart, and reliable school finance system. From fee setup to receipt generation, every naira is accounted for.",
      points: [
        "Sort out fee records, bills, receipts, and track dues",
        "Implement flexible staff payment options",
        "Automate bill dispatches to parents",
        "Deliver payment records in seconds",
        "Generate financial reports at any time",
      ],
      img: "../imports/AcademaWebsiteFeaturesPage-1/finance_img.png",
      reverse: false,
    },
    {
      tag: "Results & Academics",
      tagColor: "#eff6ff",
      tagTextColor: "#1e40af",
      title: "Results computed. Published. Done.",
      desc: "From entering scores to publishing results, every step is automated and accurate — no spreadsheets, no errors.",
      points: [
        "Flexible subject-based scoring and grading",
        "Automatic total and grade computation",
        "One-click result publishing for students",
        "Detailed academic performance reports",
        "Results available on multiple platforms",
      ],
      img: "../imports/AcademaWebsiteFeaturesPage-1/results_img.png",
      reverse: true,
    },
    {
      tag: "File Management",
      tagColor: "#fefce8",
      tagTextColor: "#854d0e",
      title: "Every school file. Always where you left it.",
      desc: "A centralized file manager for your entire institution. Keep every document organized, accessible, and never lose a file again.",
      points: [
        "Store documents from any device or location",
        "Share files across from the same library",
        "Manage file privacy and access controls",
        "Download personal files in one click",
      ],
      img: "../imports/AcademaWebsiteFeaturesPage-1/file_management_img.png",
      reverse: false,
    },
    {
      tag: "Quizzes & Assessments",
      tagColor: "#faf5ff",
      tagTextColor: "#6b21a8",
      title: "Set the quiz. Walk away. Come back to scores.",
      desc: "Create quizzes once, assign to students, and let Academa handle the grading. No manual marking, no waiting.",
      points: [
        "Create multiple-choice and structured quizzes",
        "Auto-mark and instantly record scores",
        "Track student performance trends over time",
        "Export quiz results to student records",
      ],
      img: "../imports/AcademaWebsiteFeaturesPage-1/quiz_&_assessment_img.png",
      reverse: true,
    },
    {
      tag: "Student Management",
      tagColor: "#ecfdf5",
      tagTextColor: "#065f46",
      title: "Every student. Fully accounted for.",
      desc: "Track every student lifecycle — from enrollment to graduation — with complete profiles and status tracking.",
      points: [
        "Tight lifecycle management per student",
        "Upload student data in bulk from spreadsheets",
        "Track enrollment, suspension, and graduation",
        "Enrich profiles to get the data you need",
        "Special enrollment records for each student",
      ],
      img: "../imports/AcademaWebsiteFeaturesPage-1/student_management_img.png",
      reverse: false,
    },
    {
      tag: "School Management",
      tagColor: "#f0f9ff",
      tagTextColor: "#0c4a6e",
      title: "Your school. Running like it should.",
      desc: "Manage your school calendar, timetable, communications, and system settings from one central admin dashboard.",
      points: [
        "Flexible and customizable timetable configuration",
        "System-wide settings and configurations",
        "Broadcast announcements and messages",
        "Role and permission management",
      ],
      img: "../imports/AcademaWebsiteFeaturesPage-1/school_management_img.png",
      reverse: true,
    },
    {
      tag: "Classroom Management",
      tagColor: "#fdf4ff",
      tagTextColor: "#701a75",
      title: "The classroom, extended beyond four walls.",
      desc: "Deliver learning content online to your students. Teachers can share materials, set tasks, and monitor engagement.",
      points: [
        "Upload course materials and reading resources",
        "Teachers create content-driven learning units",
        "Students access lessons from their devices",
        "Monitor and report student engagement",
      ],
      img: "../imports/AcademaWebsiteFeaturesPage-1/classroom_management_img.png",
      reverse: false,
    },
    {
      tag: "Staff & HR",
      tagColor: "#fff7ed",
      tagTextColor: "#9a3412",
      title: "Your team, managed.",
      desc: "Manage staff records, roles, assignments, and HR workflows from a single platform your admin team will love.",
      points: [
        "Staff profiles, contracts, and role management",
        "Assign roles and subjects to teachers",
        "Leave and attendance tracking",
        "Bulk actions and departmental oversight",
      ],
      img: "../imports/AcademaWebsiteFeaturesPage-1/staff_management_img.png",
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f2f8f8] font-['Gully',sans-serif]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-[130px] pb-20 bg-[#060E21]">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 400">
            <path d="M0 200C240 120 480 280 720 200C960 120 1200 280 1440 200L1440 400L0 400Z" fill="#000846"/>
          </svg>
        </div>
        <div className="max-w-[860px] mx-auto px-8 text-center relative z-10">
          <span className="bg-[rgba(0,82,158,0.16)] text-[#ffffff] text-[15px] px-4 py-2 rounded-[8px] font-medium">
            Features Overview
          </span>
          <h1 className="mt-6 font-semibold text-[48px] md:text-[56px] text-[#FFFFFF] leading-[1.05] tracking-tight">
            What if your school had a tool for everything?
          </h1>
          <p className="mt-5 text-[17px] text-[#ffffff] leading-[1.6] max-w-[680px] mx-auto">
            Academa does. Student records, fee tracking, staff communication, quizzes, e-learning, staff management, apps and more — all in one place, all working together.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <button
              onClick={() => onNavigate("home")}
              className="bg-[#081974] text-white font-medium text-[16px] h-[46px] px-7 rounded-[8px] hover:bg-[#061560] transition-colors"
            >
              Get Started Free
            </button>
            <button className="flex items-center gap-1.5 text-[#FFFFFF] font-medium text-[16px] h-[46px] px-5 border border-[rgba(8,25,116,0.2)] rounded-[8px] hover:bg-[#000846] transition-colors">
              Book a demo
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Feature sections */}
      <section className="bg-white py-10">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="flex flex-col gap-28 py-10">
            {features.map((feat, i) => (
              <div
                key={i}
                className={`flex flex-col ${feat.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-14`}
              >
                <div className="flex-1 flex flex-col gap-5">
                  <span
                    className="inline-flex text-[13px] font-medium px-3 py-1.5 rounded-[6px] w-fit"
                    style={{ background: feat.tagColor, color: feat.tagTextColor }}
                  >
                    {feat.tag}
                  </span>
                  <h2 className="font-semibold text-[30px] text-[#000419] leading-[1.2] tracking-tight">{feat.title}</h2>
                  <p className="text-[16px] text-[#3a3a3a] leading-[1.65]">{feat.desc}</p>
                  <ul className="flex flex-col gap-3 mt-1">
                    {feat.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[rgba(8,25,116,0.1)] flex items-center justify-center">
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                            <path d="M1 3.5L3 5.5L8 1" stroke="#081974" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="text-[15px] text-[#3a3a3a] leading-[1.5]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-[540px] rounded-[14px] overflow-hidden shadow-lg border border-black/5">
                    <ImageWithFallback src={feat.img} alt={feat.title} className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

// ─── Help Center Page ──────────────────────────────────────────────────────────

function HelpCenterPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [activeSection, setActiveSection] = useState("Administrator Guide");
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarItems = [
    { label: "Getting Started", icon: <LayoutDashboard size={18} /> },
    { label: "Administrator Guide", icon: <BriefcaseBusiness size={18} /> },
    { label: "Teacher Guide", icon: <Presentation size={18} /> },
    { label: "Student Guide", icon: <GraduationCap size={18} /> },
    { label: "Parent Guide", icon: <Users size={18} /> },
    { label: "Fee Payments", icon: <BadgeDollarSign size={18} /> },
    { label: "Results & Academics", icon: <BarChart3 size={18} /> },
    { label: "Quizzes & Assessments", icon: <CheckSquare size={18} /> },
    { label: "Account & Security", icon: <ShieldCheck size={18} /> },
    { label: "Troubleshooting", icon: <TriangleAlert size={18} /> },
  ];

  const adminContent = [
    {
      category: "Student Management",
      articles: [
        "How to Enroll a New Student",
        "How to Manage Student Profiles and Records",
        "How to Assign Students to Classes",
        "How to Handle Student Promotions and Class Transitions",
        "How to Manage Student Status — Active, Suspended, Graduated",
      ],
    },
    {
      category: "Staff & HR",
      articles: [
        "How to Add a New Staff Member",
        "How to Assign Roles and Subjects to Teachers",
        "How to Manage Staff Profiles and Records",
        "How to Deactivate or Remove a Staff Account",
      ],
    },
    {
      category: "Finance",
      articles: [
        "How to Set Up Fee Structures and Categories",
        "How to Assign Fees to Students or Classes",
        "How to Record a Fee Payment",
        "How to Track Outstanding Payments and Arrears",
        "How to Issue and Manage Receipts",
      ],
    },
    {
      category: "Academics",
      articles: [
        "How to Set Up the Academic Year and Terms",
        "How to Create and Manage Subjects",
        "How to Configure Grading Scales",
        "How to Generate and Publish Results",
      ],
    },
    {
      category: "Platform Management",
      articles: [
        "How to Set Up and Manage the School Timetable",
        "How to Use the School Calendar and Events",
        "How to Send Emails and SMS Through Academa",
        "How to Manage Files and School Storage",
        "How to Use Reports and Analytics",
        "How to Manage User Access and Permissions",
      ],
    },
  ];

  const chipTopics = [
    "How to Create Fee Categories",
    "How to Enter Student Scores",
    "How to Pay Your Fees in Full",
    "Understanding User Roles and Permissions",
    "How to Enroll a New Student",
  ];

  return (
    <div className="min-h-screen bg-[#fafbfd] font-['Gully',sans-serif]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#060E21] pt-[110px] pb-16">
        {/* Wave background */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 400">
            <path d="M-100 200C200 100 500 300 800 200C1100 100 1300 300 1600 200L1600 400L-100 400Z" fill="#000846"/>
            <path d="M-100 300C200 200 500 400 800 300C1100 200 1300 400 1600 300L1600 400L-100 400Z" fill="#000846"/>
          </svg>
        </div>
        <div className="max-w-[1140px] mx-auto px-8 relative z-10">
          <div className="flex flex-col items-center gap-8">
            <h1 className="font-semibold text-[44px] md:text-[50px] text-[#FFFFFF] leading-[1.0] tracking-tight text-center max-w-[820px]">
              Find answers, explore guides, and get the most out of Academa.
            </h1>

            {/* Search bar */}
            <div className="w-full max-w-[824px] bg-white rounded-[8px] h-[46px] flex items-center px-4 gap-3 shadow-sm border border-black/5">
              <Search size={20} className="text-[#081974] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={'Search for anything — "how to pay fees", "add a student", "publish results"...'}
                className="flex-1 font-['Gully',sans-serif] text-[15px] text-[#4c4c4c] bg-transparent outline-none placeholder-[#9a9a9a]"
              />
            </div>

            {/* Topic chips */}
            <div className="flex flex-wrap gap-2 justify-center max-w-[824px]">
              {chipTopics.map((topic, i) => (
                <button
                  key={i}
                  className={`text-[14px] px-4 py-2 rounded-[8px] font-['Gully',sans-serif] transition-colors ${
                    i === 0
                      ? "bg-[#cbddea] text-[#081974]"
                      : "bg-[rgba(0,82,158,0.12)] text-[#FFFFFF] hover:bg-[#cbddea]"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-[1260px] mx-auto px-8 py-16 flex gap-8 items-start">
        {/* Sidebar */}
        <aside className="shrink-0 w-[230px] hidden lg:block">
          <nav className="flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveSection(item.label)}
                className={`flex items-center gap-2.5 h-[36px] px-3 rounded-[8px] text-[15px] transition-colors text-left ${
                  activeSection === item.label
                    ? "bg-[#cedcf0] text-[#081974] font-semibold"
                    : "text-[#454859] hover:bg-[#f0f4f8]"
                }`}
              >
                <span className={activeSection === item.label ? "text-[#081974]" : "text-[#595959]"}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5">
            <button onClick={() => {}} className="text-[13px] text-black hover:underline">Help center</button>
            <ChevronRight size={13} />
            <span className="text-[13px] text-[#081974] font-medium">{activeSection}</span>
          </div>

          <h2 className="font-semibold text-[26px] text-black mb-2">{activeSection}</h2>
          <p className="text-[14px] text-[#3a3a3a] leading-[1.5] mb-8 max-w-[580px]">
            Everything administrators need to manage students, staff, finance, timetables, reports and the full platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {adminContent.map((section) => (
              <div key={section.category} className="flex flex-col gap-3">
                <p className="font-medium text-[12px] text-[#808080] uppercase tracking-wide">{section.category}</p>
                {section.articles.map((article) => (
                  <button
                    key={article}
                    className="text-[14px] text-[#081974] hover:underline text-left leading-[1.4]"
                  >
                    {article}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>

      <CTASection onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

// ─── About Us Page ─────────────────────────────────────────────────────────────

function AboutUsPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const values = [
    {
      icon: <Lightbulb size={22} />,
      title: "Innovation",
      desc: "We build solutions that anticipate the needs of African schools — solving real problems with thoughtful technology.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Reliability",
      desc: "Schools depend on us every day. We engineer for uptime, accuracy, and trust — because schools cannot afford downtime.",
    },
    {
      icon: <Target size={22} />,
      title: "Simplicity",
      desc: "Powerful tools should be easy to use. We obsess over making every feature accessible to every user, regardless of technical skill.",
    },
    {
      icon: <Globe size={22} />,
      title: "Impact",
      desc: "Our mission is bigger than software. We want every child, teacher, and parent in Africa to experience a better-run school.",
    },
    {
      icon: <Heart size={22} />,
      title: "Care",
      desc: "We treat every school as a partner, not a customer. Our support team goes the extra mile because your success is our success.",
    },
    {
      icon: <Award size={22} />,
      title: "Excellence",
      desc: "We hold ourselves to the highest standards in everything we build, every response we send, and every product decision we make.",
    },
  ];

  const team = [
    { name: "Effiong Emmanuel", role: "CEO & Co-Founder", quote: "Built Academa after seeing a school lose months of student records to a corrupted spreadsheet.", img: "../imports/AcademaWebsiteLandingPage-1/5879b20f93d5b747c6ea90df40f1d37fd79f75a0.png" },
    { name: "Aisha Ibrahim", role: "CTO & Co-Founder", quote: "Our technology is built for scale — from 50-student nurseries to 20,000-student universities.", img: "../imports/AcademaWebsiteLandingPage-1/aa3a778e23c8fb3584567ebce7d54e9ac1eb07b8.png" },
    { name: "Chukwudi Obi", role: "Head of Product", quote: "Every feature we build starts with listening to school administrators, teachers, and students.", img: "../imports/AcademaWebsiteLandingPage-1/21f0deff0a28b0b1e523ade74b6ea80a96d725b4.png" },
    { name: "Fatima Yusuf", role: "Head of Customer Success", quote: "We don't just onboard schools — we become part of their journey to excellence.", img: "../imports/AcademaWebsiteLandingPage-1/3b2a1ae3bc2c3af2f24ba932aca2293f13cf10ae.png" },
    { name: "Bassey Etim", role: "Lead Designer", quote: "Great design isn't decoration. It's what makes powerful software feel effortless.", img: "../imports/AcademaWebsiteLandingPage-1/3b2a1ae3bc2c3af2f24ba932aca2293f13cf10ae.png" },
  ];

  const stats = [
    { value: "10,000+", label: "Students & Staff" },
    { value: "50+", label: "Schools Onboarded" },
    { value: "6", label: "Nigerian States" },
    { value: "99.8%", label: "Platform Uptime" },
  ];

  const milestones = [
    { year: "2022", event: "Academa founded in Uyo, Akwa Ibom State, Nigeria." },
    { year: "2023", event: "First 10 schools onboarded. Launched core student and fee management modules." },
    { year: "2024", event: "Expanded to universities and polytechnics. Launched e-Learning and quiz modules." },
    { year: "2025", event: "Crossed 10,000 active users. Launched mobile apps for students and parents." },
    { year: "2026", event: "Now serving schools across 6 states, with full-suite HR and analytics." },
  ];

  return (
    <div className="min-h-screen bg-[#f2f8f8] font-['Gully',sans-serif]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#000526] pt-[120px] pb-24">
        {/* Decorative stars */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice">
            {[
              [100, 80], [250, 150], [450, 60], [700, 200], [900, 80], [1100, 160], [1300, 50], [1400, 220],
              [50, 300], [300, 380], [600, 320], [850, 400], [1200, 350], [200, 450], [750, 470],
            ].map(([x, y], i) => (
              <path
                key={i}
                d={`M${x} ${y - 10}L${x + 4} ${y - 2}L${x + 10} ${y}L${x + 4} ${y + 2}L${x} ${y + 10}L${x - 4} ${y + 2}L${x - 10} ${y}L${x - 4} ${y - 2}Z`}
                fill={i % 2 === 0 ? "#454959" : "white"}
                fillOpacity={i % 2 === 0 ? "1" : "0.4"}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-[900px] mx-auto px-8 text-center relative z-10">
          <span className="inline-flex bg-[rgba(0,82,158,0.3)] text-[#93c5fd] text-[14px] px-4 py-2 rounded-[8px] font-medium mb-6">
            About Academa
          </span>
          <h1 className="font-semibold text-[46px] md:text-[56px] text-white leading-[1.1] tracking-tight">
            Built for Africa&apos;s schools,<br />by people who understand them.
          </h1>
          <p className="mt-6 text-[18px] text-[#b0b8d0] leading-[1.65] max-w-[680px] mx-auto">
            Academa was born from a simple frustration: African schools deserved better tools. We built the platform we wished existed — and we haven&apos;t stopped since.
          </p>
          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <button
              onClick={() => onNavigate("features")}
              className="bg-white text-[#000419] font-medium text-[16px] h-[46px] px-8 rounded-[8px] hover:bg-gray-100 transition-colors"
            >
              See What We Built
            </button>
            <button className="flex items-center gap-2 border border-white/20 text-white font-medium text-[16px] h-[46px] px-7 rounded-[8px] hover:bg-white/10 transition-colors">
              Contact Us
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="max-w-[1260px] mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center flex flex-col gap-2">
                <p className="font-semibold text-[42px] text-[#081974] leading-none tracking-tight">{stat.value}</p>
                <p className="text-[15px] text-[#3a3a3a]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Story */}
      <section className="bg-[#f2f8f8] py-20">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="inline-flex bg-[rgba(0,82,158,0.12)] text-[#081974] text-[14px] px-4 py-2 rounded-[6px] font-medium mb-6">
                Our Story
              </span>
              <h2 className="font-semibold text-[36px] text-[#000419] leading-[1.2] tracking-tight mb-5">
                We started with a problem we lived through.
              </h2>
              <p className="text-[16px] text-[#3a3a3a] leading-[1.7] mb-5">
                In 2022, our founder watched a school administrator spend three days reconstructing student records after a hard drive failure. The school had been keeping everything in spreadsheets, with no backup, no structure, and no visibility.
              </p>
              <p className="text-[16px] text-[#3a3a3a] leading-[1.7] mb-5">
                That moment sparked a question: why were Nigerian schools — and African schools broadly — still struggling with problems that software could solve? Fee collection was manual. Results were computed on paper. Staff records lived in dusty filing cabinets.
              </p>
              <p className="text-[16px] text-[#3a3a3a] leading-[1.7]">
                We built Academa to change that. Not a foreign tool retrofitted for African schools — but a platform designed from the ground up, in Nigeria, for the realities our schools face every day.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <div className="bg-[#081974] rounded-[16px] p-8 text-white">
                  <p className="font-['Gully',sans-serif] font-semibold text-[20px] mb-6 text-[#93c5fd]">Our Mission</p>
                  <p className="text-[18px] leading-[1.65] font-medium">
                    To give every school in Africa — regardless of size or budget — access to world-class management software that helps administrators run better institutions, teachers teach more effectively, and students thrive.
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-[14px] text-[#93c5fd] font-medium">Our Vision</p>
                    <p className="text-[15px] text-white/80 leading-[1.6] mt-2">
                      An Africa where no school is held back by poor administration or lack of information systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="text-center mb-12">
            <span className="bg-[rgba(0,82,158,0.12)] text-[#081974] text-[14px] px-4 py-2 rounded-[6px] font-medium">What We Stand For</span>
            <h2 className="mt-5 font-semibold text-[36px] text-[#000419] tracking-tight">Our core values.</h2>
            <p className="mt-3 text-[16px] text-[#3a3a3a] max-w-[540px] mx-auto">
              These aren&apos;t words on a wall. They&apos;re the principles behind every product decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-[#fafbfd] border border-black/5 rounded-[12px] p-7 flex flex-col gap-4 hover:border-[rgba(8,25,116,0.15)] transition-colors">
                <div className="w-11 h-11 rounded-[10px] bg-[rgba(8,25,116,0.08)] flex items-center justify-center text-[#081974]">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-[18px] text-[#000419]">{v.title}</h3>
                <p className="text-[14px] text-[#3a3a3a] leading-[1.65]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f2f8f8] py-20">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="text-center mb-12">
            <span className="bg-[rgba(0,82,158,0.12)] text-[#081974] text-[14px] px-4 py-2 rounded-[6px] font-medium">The People</span>
            <h2 className="mt-5 font-semibold text-[36px] text-[#000419] tracking-tight">Meet the team behind Academa.</h2>
            <p className="mt-3 text-[16px] text-[#3a3a3a]">
              A passionate team of builders, educators, and problem-solvers based in Nigeria.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-[12px] border border-black/5 shadow-sm overflow-hidden w-full max-w-[220px] flex flex-col">
                <div className="h-[180px] overflow-hidden bg-[#e8eef5]">
                  <ImageWithFallback
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <p className="font-semibold text-[15px] text-[#000419]">{member.name}</p>
                  <p className="text-[13px] text-[#081974] font-medium">{member.role}</p>
                  <p className="text-[12px] text-[#808080] italic leading-[1.5] mt-1">&ldquo;{member.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-[860px] mx-auto px-8">
          <div className="text-center mb-12">
            <span className="bg-[rgba(0,82,158,0.12)] text-[#081974] text-[14px] px-4 py-2 rounded-[6px] font-medium">Our Journey</span>
            <h2 className="mt-5 font-semibold text-[36px] text-[#000419] tracking-tight">How we got here.</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[68px] top-0 bottom-0 w-px bg-[rgba(8,25,116,0.15)]" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start relative">
                  <div className="shrink-0 w-[68px] text-right">
                    <span className="font-semibold text-[14px] text-[#081974]">{m.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="shrink-0 w-3 h-3 rounded-full bg-[#081974] border-2 border-white shadow mt-[3px] relative z-10" />
                  <p className="text-[15px] text-[#3a3a3a] leading-[1.6] flex-1">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-[#f2f8f8] py-16">
        <div className="max-w-[860px] mx-auto px-8 text-center">
          <h2 className="font-semibold text-[30px] text-[#000419] tracking-tight mb-3">Want to get in touch?</h2>
          <p className="text-[16px] text-[#3a3a3a] mb-8">
            Whether you&apos;re a school administrator, a journalist, or a potential partner — we&apos;d love to hear from you.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-[15px] text-[#000419]">
              <MessageSquare size={17} className="text-[#081974]" />
              contact@academa.org
            </div>
            <div className="w-px h-5 bg-black/20" />
            <div className="flex items-center gap-2 text-[15px] text-[#000419]">
              <Globe size={17} className="text-[#081974]" />
              16B Nkemba Street, Uyo, Akwa Ibom State
            </div>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

// ─── Book Demo Page ───────────────────────────────────────────────────────────

function BookDemoPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", organisation: "", preferredContact: "email", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f2f8f8] font-['Gully',sans-serif] pt-[72px]">
      <div className="max-w-[1100px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-[100px]">
            <button onClick={() => onNavigate("home")} className="flex items-center gap-1.5 text-[#3a3a3a] text-[14px] hover:text-[#081974] transition-colors w-fit">
              <ChevronRight size={14} className="rotate-180" /> Back to home
            </button>
            <span className="inline-flex bg-[rgba(0,82,158,0.16)] text-[#081974] text-[13px] px-4 py-1.5 rounded-[6px] w-fit">Book a Demo</span>
            <h1 className="font-semibold text-[42px] text-[#000419] leading-[1.05] tracking-tight">See Academa in action.</h1>
            <p className="text-[16px] text-[#3a3a3a] leading-[1.6]">
              Schedule a personalised walkthrough with our team. We&apos;ll show you exactly how Academa can work for your school — no pressure, no commitment.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              {[
                { icon: "💬", label: "WhatsApp", detail: "Chat with us directly" },
                { icon: "📞", label: "Phone Call", detail: "We&apos;ll call you at your preferred time" },
                { icon: "✉️", label: "Email", detail: "Detailed follow-up to your inbox" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-[22px]">{item.icon}</span>
                  <div>
                    <p className="font-medium text-[15px] text-[#000419]">{item.label}</p>
                    <p className="text-[14px] text-[#3a3a3a]" dangerouslySetInnerHTML={{ __html: item.detail }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-5 bg-[rgba(0,82,158,0.06)] rounded-[12px]">
              <p className="font-medium text-[15px] text-[#081974] mb-1">Average response time</p>
              <p className="text-[14px] text-[#3a3a3a]">We typically respond within 2 hours on business days.</p>
            </div>
          </div>

          {/* Right: form or confirmation */}
          <div className="bg-white rounded-[16px] shadow-sm border border-black/5 p-8">
            {submitted ? (
              <div className="flex flex-col items-center text-center gap-5 py-10">
                <div className="w-16 h-16 rounded-full bg-[rgba(0,82,158,0.1)] flex items-center justify-center">
                  <CheckSquare size={32} className="text-[#081974]" />
                </div>
                <h2 className="font-semibold text-[24px] text-[#000419]">Request received!</h2>
                <p className="text-[15px] text-[#3a3a3a] leading-[1.6] max-w-[360px]">
                  Thanks {form.name.split(" ")[0]}! We&apos;ve received your demo request and will reach out via <strong>{form.preferredContact}</strong> within 2 hours.
                </p>
                <button onClick={() => onNavigate("home")} className="mt-2 bg-[#081974] text-white font-medium text-[15px] h-[44px] px-7 rounded-[8px] hover:bg-[#061560] transition-colors">
                  Back to home
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="font-semibold text-[22px] text-[#000419]">Schedule your demo</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#000419]">Full name <span className="text-red-500">*</span></label>
                    <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your full name"
                      className="h-[44px] px-4 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#000419]">Email address <span className="text-red-500">*</span></label>
                    <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@school.edu"
                      className="h-[44px] px-4 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#000419]">Phone number <span className="text-red-500">*</span></label>
                    <input required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+234 800 000 0000"
                      className="h-[44px] px-4 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#000419]">School / Organisation</label>
                    <input value={form.organisation} onChange={e => setForm(f => ({ ...f, organisation: e.target.value }))}
                      placeholder="e.g. Greenfield Academy"
                      className="h-[44px] px-4 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb]" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-medium text-[#000419]">Preferred contact method <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-3 gap-3">
                    {[{ value: "whatsapp", label: "WhatsApp", emoji: "💬" }, { value: "phone", label: "Phone call", emoji: "📞" }, { value: "email", label: "Email", emoji: "✉️" }].map(opt => (
                      <button type="button" key={opt.value}
                        onClick={() => setForm(f => ({ ...f, preferredContact: opt.value }))}
                        className={`flex flex-col items-center gap-1 py-3 rounded-[10px] border text-[13px] font-medium transition-all ${form.preferredContact === opt.value ? "border-[#081974] bg-[rgba(8,25,116,0.06)] text-[#081974]" : "border-black/10 text-[#3a3a3a] hover:border-[#081974]/40"}`}
                      >
                        <span className="text-[20px]">{opt.emoji}</span>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#000419]">What would you like to see? <span className="text-[#3a3a3a] font-normal">(optional)</span></label>
                  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="E.g. fee management, student results, e-learning..."
                    rows={3}
                    className="px-4 py-3 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb] resize-none" />
                </div>
                <button type="submit" className="mt-1 bg-[#081974] text-white font-medium text-[15px] h-[46px] rounded-[8px] hover:bg-[#061560] transition-colors flex items-center justify-center gap-2">
                  Request demo
                  <ArrowUpRight size={18} />
                </button>
                <p className="text-[12px] text-[#3a3a3a] text-center">We respect your privacy. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Get Started Page ─────────────────────────────────────────────────────────

function GetStartedPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [step, setStep] = useState<"form" | "done">("form");
  const [form, setForm] = useState({
    contactName: "", contactEmail: "", contactPhone: "", role: "",
    schoolName: "", schoolType: "", schoolAddress: "", studentCount: "", staffCount: "",
    modules: [] as string[], additionalInfo: "",
  });

  const schoolTypes = ["Primary School", "Secondary School", "Tertiary Institution", "Polytechnic", "College of Education", "Other"];
  const moduleOptions = ["Fee Management", "Student Results & Grading", "Attendance Tracking", "E-Learning / Quizzes", "Staff & HR Management", "Timetable & Scheduling", "Parent Portal", "Admin Dashboard"];

  const toggleModule = (m: string) => {
    setForm(f => ({ ...f, modules: f.modules.includes(m) ? f.modules.filter(x => x !== m) : [...f.modules, m] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("done");
  };

  if (step === "done") {
    return (
      <div className="min-h-screen bg-[#f2f8f8] font-['Gully',sans-serif] pt-[72px] flex items-center justify-center px-8">
        <div className="bg-white rounded-[20px] shadow-sm border border-black/5 p-12 max-w-[520px] w-full flex flex-col items-center text-center gap-6">
          <div className="w-20 h-20 rounded-full bg-[rgba(0,82,158,0.1)] flex items-center justify-center">
            <CheckSquare size={38} className="text-[#081974]" />
          </div>
          <div>
            <h2 className="font-semibold text-[28px] text-[#000419] mb-3">We&apos;ve got your request!</h2>
            <p className="text-[15px] text-[#3a3a3a] leading-[1.65]">
              Thanks, <strong>{form.contactName.split(" ")[0]}</strong>! We&apos;ve received the setup request for <strong>{form.schoolName}</strong>. Our team will review it and reach out to you within <strong>24 hours</strong> to confirm and begin the onboarding process.
            </p>
          </div>
          <div className="w-full bg-[rgba(0,82,158,0.06)] rounded-[12px] p-5 text-left">
            <p className="font-medium text-[14px] text-[#081974] mb-2">What happens next?</p>
            <ol className="flex flex-col gap-2">
              {["Our team reviews your school details", "We contact you to confirm and clarify", "Your Academa account is set up within 48 hours"].map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-[#3a3a3a]">
                  <span className="font-semibold text-[#081974] shrink-0">{i + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>
          <button onClick={() => onNavigate("home")} className="bg-[#081974] text-white font-medium text-[15px] h-[44px] px-8 rounded-[8px] hover:bg-[#061560] transition-colors">
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2f8f8] font-['Gully',sans-serif] pt-[72px]">
      <div className="max-w-[860px] mx-auto px-8 py-20">
        <div className="mb-10">
          <button onClick={() => onNavigate("home")} className="flex items-center gap-1.5 text-[#3a3a3a] text-[14px] hover:text-[#9faffc] transition-colors mb-6">
            <ChevronRight size={14} className="rotate-180" /> Back to home
          </button>
          <span className="inline-flex bg-[rgba(0,82,158,0.16)] text-[#081974] text-[13px] px-4 py-1.5 rounded-[6px] mb-4">Get Started</span>
          <h1 className="font-semibold text-[40px] text-[#000419] leading-[1.05] tracking-tight mt-3">Set up your school on Academa.</h1>
          <p className="mt-3 text-[16px] text-[#3a3a3a] leading-[1.6]">Tell us about your school and what you need. We&apos;ll get back to you within 24 hours to begin onboarding.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Contact info */}
          <div className="bg-white rounded-[16px] border border-black/5 shadow-sm p-7 flex flex-col gap-5">
            <h2 className="font-semibold text-[18px] text-[#000419]">Your Contact Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: "Full name", key: "contactName", placeholder: "Your full name", required: true },
                { label: "Email address", key: "contactEmail", placeholder: "you@school.edu", type: "email", required: true },
                { label: "Phone number", key: "contactPhone", placeholder: "+234 800 000 0000", type: "tel", required: true },
                { label: "Your role", key: "role", placeholder: "e.g. Principal, Administrator, IT Director" },
              ].map(f => (
                <div key={f.key} className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#000419]">{f.label}{f.required && <span className="text-red-500 ml-0.5">*</span>}</label>
                  <input
                    required={f.required}
                    type={f.type || "text"}
                    value={(form as Record<string, string | string[]>)[f.key]}
                    onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    placeholder={f.placeholder}
                    className="h-[44px] px-4 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* School info */}
          <div className="bg-white rounded-[16px] border border-black/5 shadow-sm p-7 flex flex-col gap-5">
            <h2 className="font-semibold text-[18px] text-[#000419]">School Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[13px] font-medium text-[#000419]">School name <span className="text-red-500">*</span></label>
                <input required value={form.schoolName} onChange={e => setForm(f => ({ ...f, schoolName: e.target.value }))}
                  placeholder="e.g. Greenfield Academy"
                  className="h-[44px] px-4 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#000419]">School type <span className="text-red-500">*</span></label>
                <select required value={form.schoolType} onChange={e => setForm(f => ({ ...f, schoolType: e.target.value }))}
                  className="h-[44px] px-4 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb]">
                  <option value="">Select type</option>
                  {schoolTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#000419]">School location</label>
                <input value={form.schoolAddress} onChange={e => setForm(f => ({ ...f, schoolAddress: e.target.value }))}
                  placeholder="City, State"
                  className="h-[44px] px-4 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#000419]">Approximate number of students</label>
                <input type="number" min="0" value={form.studentCount} onChange={e => setForm(f => ({ ...f, studentCount: e.target.value }))}
                  placeholder="e.g. 500"
                  className="h-[44px] px-4 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#000419]">Approximate number of staff</label>
                <input type="number" min="0" value={form.staffCount} onChange={e => setForm(f => ({ ...f, staffCount: e.target.value }))}
                  placeholder="e.g. 40"
                  className="h-[44px] px-4 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb]" />
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="bg-white rounded-[16px] border border-black/5 shadow-sm p-7 flex flex-col gap-5">
            <div>
              <h2 className="font-semibold text-[18px] text-[#000419]">What do you need?</h2>
              <p className="text-[14px] text-[#3a3a3a] mt-1">Select all the modules you&apos;d like set up for your school.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {moduleOptions.map(m => (
                <button type="button" key={m}
                  onClick={() => toggleModule(m)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-[10px] border text-[13px] font-medium text-left transition-all ${form.modules.includes(m) ? "border-[#081974] bg-[rgba(8,25,116,0.06)] text-[#081974]" : "border-black/10 text-[#3a3a3a] hover:border-[#081974]/40"}`}
                >
                  <div className={`w-4 h-4 rounded-[4px] border shrink-0 flex items-center justify-center transition-all ${form.modules.includes(m) ? "bg-[#081974] border-[#081974]" : "border-black/20"}`}>
                    {form.modules.includes(m) && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  {m}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-[#000419]">Anything else? <span className="text-[#3a3a3a] font-normal">(optional)</span></label>
              <textarea value={form.additionalInfo} onChange={e => setForm(f => ({ ...f, additionalInfo: e.target.value }))}
                placeholder="Tell us more about your school's specific needs..."
                rows={3}
                className="px-4 py-3 rounded-[8px] border border-black/15 text-[14px] text-[#000419] outline-none focus:border-[#081974] focus:ring-2 focus:ring-[rgba(8,25,116,0.1)] transition-all bg-[#f9fafb] resize-none" />
            </div>
          </div>

          <button type="submit" className="bg-[#081974] text-white font-medium text-[16px] h-[50px] rounded-[10px] hover:bg-[#061560] transition-colors flex items-center justify-center gap-2">
            Submit setup request
            <ArrowUpRight size={20} />
          </button>
          <p className="text-[12px] text-[#3a3a3a] text-center -mt-4">
            By submitting, you agree that we may contact you regarding your request. No spam.
          </p>
        </form>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navVariant = currentPage === "helpCenter" ? "helpCenter" : "main";

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} variant={navVariant} />
      {currentPage === "home" && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === "features" && <FeaturesPage onNavigate={handleNavigate} />}
      {currentPage === "helpCenter" && <HelpCenterPage onNavigate={handleNavigate} />}
      {currentPage === "about" && <AboutUsPage onNavigate={handleNavigate} />}
      {currentPage === "bookDemo" && <BookDemoPage onNavigate={handleNavigate} />}
      {currentPage === "getStarted" && <GetStartedPage onNavigate={handleNavigate} />}
    </div>
  );
}
