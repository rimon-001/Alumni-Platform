import React, { useState, useMemo } from 'react';
import {
  Users,
  GraduationCap,
  Calendar,
  Bell,
  Search,
  Shield,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileText,
  Plus,
  Trash2,
  Download,
  Eye,
  ChevronRight,
  ChevronLeft,
  Building,
  Award,
  Globe,
  Lock,
  ArrowRight,
  Check,
  Send,
  UserCheck,
  UserX,
  Archive,
  RefreshCw,
  LogOut,
  LayoutDashboard,
  Settings,
  X,
  Key,
  Edit,
  Camera,
  Upload
} from 'lucide-react';

const INITIAL_ALUMNI = [
  {
    id: 'ALM-10234',
    name: 'Md. Rahim Hasan',
    email: 'rahim.hasan@techfrontier.io',
    phone: '+880 1712-345678',
    department: 'Computer Science & Engineering',
    program: 'B.Sc. CSE',
    batch: '2022',
    admissionYear: '2018',
    graduationYear: '2022',
    designation: 'Senior Software Engineer',
    organization: 'Google Vertex AI Labs',
    workLocation: 'Dhaka / Remote',
    linkedin: 'https://linkedin.com/in/rahim-hasan',
    website: 'https://rahimhasan.dev',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    status: 'ACTIVE',
    privacyHideContact: true,
    bio: 'Passionate about distributed systems, cloud computing, and mentoring young engineers in campus workshops.',
    appliedDate: '2022-11-15',
    password: 'password123',
    allowSelfPasswordReset: true,
    passwordResetRequested: false
  },
  {
    id: 'ALM-10521',
    name: 'Karim Ahmed',
    email: 'k.ahmed@infrasolutions.com',
    phone: '+880 1819-876543',
    department: 'Electrical & Electronic Engineering',
    program: 'B.Sc. EEE',
    batch: '2023',
    admissionYear: '2019',
    graduationYear: '2023',
    designation: 'Power Grid Specialist',
    organization: 'National Grid Infrastructure',
    workLocation: 'Chattogram',
    linkedin: 'https://linkedin.com/in/karimahmed-eee',
    website: '',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    status: 'ACTIVE',
    privacyHideContact: false,
    bio: 'Pioneering clean renewable integration across metropolitan substations and electrical testbeds.',
    appliedDate: '2023-08-20',
    password: 'password123',
    allowSelfPasswordReset: false,
    passwordResetRequested: false
  },
  {
    id: 'ALM-10872',
    name: 'Sakib Khan',
    email: 'sakib.khan@fintechasia.co',
    phone: '+880 1911-223344',
    department: 'Business Administration',
    program: 'BBA - Finance',
    batch: '2024',
    admissionYear: '2020',
    graduationYear: '2024',
    designation: 'Investment Analyst',
    organization: 'Apex Capital Partners',
    workLocation: 'Dhaka',
    linkedin: 'https://linkedin.com/in/sakib-capital',
    website: '',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    status: 'PENDING',
    privacyHideContact: true,
    bio: 'Focused on growth equity, emerging venture capital in South Asia, and ESG compliant enterprise portfolios.',
    appliedDate: '2026-09-18',
    password: 'password123',
    allowSelfPasswordReset: true,
    passwordResetRequested: false
  },
  {
    id: 'ALM-10945',
    name: 'Nusrat Jahan',
    email: 'nusrat.jahan@studioforma.arch',
    phone: '+880 1622-998877',
    department: 'Architecture',
    program: 'B.Arch',
    batch: '2021',
    admissionYear: '2016',
    graduationYear: '2021',
    designation: 'Lead Sustainable Architect',
    organization: 'Studio Forma & Habitat',
    workLocation: 'Dhaka & Singapore',
    linkedin: 'https://linkedin.com/in/nusrat-jahan-arch',
    website: 'https://nusratstudio.art',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    status: 'ACTIVE',
    privacyHideContact: false,
    bio: 'Winner of National Green Urban Planning Award 2025; advocating for eco-materials and rainwater harvesting design.',
    appliedDate: '2021-12-05',
    password: 'password123',
    allowSelfPasswordReset: true,
    passwordResetRequested: false
  },
  {
    id: 'ALM-11022',
    name: 'Dr. Tanvir Hossain',
    email: 'tanvir.biotech@genlab.org',
    phone: '+880 1515-443322',
    department: 'Biotechnology & Genetic Engineering',
    program: 'M.Sc. Biotech',
    batch: '2019',
    admissionYear: '2017',
    graduationYear: '2019',
    designation: 'Senior Genomic Researcher',
    organization: 'Institute of Medical Genomics',
    workLocation: 'Dhaka',
    linkedin: 'https://linkedin.com/in/tanvir-genomics',
    website: '',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400',
    status: 'ACTIVE',
    privacyHideContact: true,
    bio: 'Postdoc fellow working on precision disease therapeutics and agricultural genome modification for drought resilience.',
    appliedDate: '2020-02-14',
    password: 'password123',
    allowSelfPasswordReset: true,
    passwordResetRequested: false
  },
  {
    id: 'ALM-11204',
    name: 'Farhana Yasmin',
    email: 'farhana.y@designcraft.org',
    phone: '+880 1788-990011',
    department: 'Computer Science & Engineering',
    program: 'B.Sc. CSE',
    batch: '2024',
    admissionYear: '2020',
    graduationYear: '2024',
    designation: 'UX Design Architect',
    organization: 'Innovate Solutions Ltd',
    workLocation: 'Sylhet',
    linkedin: 'https://linkedin.com/in/farhana-ux',
    website: '',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    status: 'PENDING',
    privacyHideContact: false,
    bio: 'Designing human-centric healthcare digital systems with accessibility best practices.',
    appliedDate: '2026-09-22',
    password: 'password123',
    allowSelfPasswordReset: true,
    passwordResetRequested: false
  }
];

const INITIAL_EVENTS = [
  {
    id: 'EVT-101',
    title: 'Grand Alumni Grand Gala & Reunion 2026',
    date: '2026-10-24',
    formattedDate: '24 October 2026',
    time: '06:00 PM - 10:30 PM',
    location: 'Institute Main Auditorium & Grand Lawn',
    category: 'Reunion',
    banner: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=900',
    description: 'Celebrate our shared history, catch up with distinguished batchmates, enjoy an alumni orchestra performance, and meet the faculty leadership.',
    maxSeats: 800,
    registeredCount: 642,
    registrationDeadline: '2026-10-15',
    isRegisteredByMe: true
  },
  {
    id: 'EVT-102',
    title: 'Global Tech & Innovation Leadership Conclave',
    date: '2026-11-12',
    formattedDate: '12 November 2026',
    time: '10:00 AM - 04:00 PM',
    location: 'Virtual Event (Zoom & Institute Broadcast)',
    category: 'Conference',
    banner: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=900',
    description: 'Renowned alumni from Silicon Valley, London, and Tokyo convene to debate AI governance, startup scaleups, and venture pipelines.',
    maxSeats: 1500,
    registeredCount: 920,
    registrationDeadline: '2026-11-05',
    isRegisteredByMe: false
  },
  {
    id: 'EVT-103',
    title: 'Alumni Mentorship Circle: Class of 2026 Kickoff',
    date: '2026-12-05',
    formattedDate: '05 December 2026',
    time: '03:00 PM - 07:00 PM',
    location: 'Academic Seminar Hall 3',
    category: 'Mentorship',
    banner: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=900',
    description: 'A curated 1-on-1 networking evening pairing graduating seniors with industry veteran alumni in Engineering, Finance, and Research.',
    maxSeats: 250,
    registeredCount: 198,
    registrationDeadline: '2026-11-28',
    isRegisteredByMe: false
  }
];

const INITIAL_NOTICES = [
  {
    id: 'NTC-301',
    title: 'Annual Alumni General Assembly & Executive Council Elections 2026',
    date: '24 SEP 2026',
    category: 'Governance',
    priority: 'HIGH',
    summary: 'Nominations are now open for the Alumni Association Executive Board 2026–2028. All verified alumni are eligible to cast their ballots.',
    documentUrl: '#'
  },
  {
    id: 'NTC-302',
    title: 'Establishment of Endowment Fellowship Fund for Undergraduate Scholars',
    date: '18 SEP 2026',
    category: 'Scholarship',
    priority: 'NORMAL',
    summary: 'The alumni federation pledges 25,000,000 BDT in matching grants to sponsor 120 meritorious engineering and medicine scholars this upcoming semester.',
    documentUrl: '#'
  },
  {
    id: 'NTC-303',
    title: 'Submission of Scholarly Profiles for the 40th Jubilee Memorial Book',
    date: '10 SEP 2026',
    category: 'Publication',
    priority: 'NORMAL',
    summary: 'Please submit your recent doctoral completions, patent publications, and industry recognitions for the institutional archive.',
    documentUrl: '#'
  }
];

const INITIAL_GALLERY = [
  {
    id: 'GAL-1',
    album: 'Convocation 2025 Ceremony',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    count: '48 Photos'
  },
  {
    id: 'GAL-2',
    album: 'Silver Jubilee Grand Reunion',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    count: '112 Photos'
  },
  {
    id: 'GAL-3',
    album: 'Annual Inter-Batch Cricket Cup',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    count: '64 Photos'
  },
  {
    id: 'GAL-4',
    album: 'Research Excellence & Innovation Expo',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    count: '35 Photos'
  }
];

const INITIAL_MESSAGES = [
  {
    id: 'MSG-01',
    senderName: 'Sultana Razia',
    senderEmail: 'sultana.r@cantab.net',
    phone: '+880 1711-002233',
    subject: 'Transcript Authentication & Alumni Verification Request',
    message: 'Greetings Office of Alumni Affairs, I graduated in 2017 (CSE) and need expedited certified verification credentials for my doctoral application in Cambridge.',
    date: '2026-09-23',
    status: 'UNREAD'
  },
  {
    id: 'MSG-02',
    senderName: 'Tanveer M. Chowdhury',
    senderEmail: 'tanveer.chowdhury@grameenphone.com',
    phone: '+880 1914-998877',
    subject: 'Corporate Internship Collaboration Offer for Batch 2027',
    message: 'Our corporate technology group wants to sponsor 20 fast-track campus software internships exclusively for current 3rd-year students.',
    date: '2026-09-21',
    status: 'READ'
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('public');
  const [publicTab, setPublicTab] = useState('home');
  const [portalTab, setPortalTab] = useState('overview');
  const [adminTab, setAdminTab] = useState('dashboard');

  const [alumniList, setAlumniList] = useState(INITIAL_ALUMNI);
  const [eventsList, setEventsList] = useState(INITIAL_EVENTS);
  const [noticesList, setNoticesList] = useState(INITIAL_NOTICES);
  const [messagesList, setMessagesList] = useState(INITIAL_MESSAGES);
  const [activityLogs, setActivityLogs] = useState([
    { id: 'LOG-1', time: '10:15 AM, Today', text: 'Admin approved registration for Nusrat Jahan (Arch 2021)' },
    { id: 'LOG-2', time: 'Yesterday', text: 'New event published: Grand Alumni Gala & Reunion 2026' },
    { id: 'LOG-3', time: '22 Sep 2026', text: 'System backup completed. 2,450 records verified' }
  ]);

  const [isAlumniLoggedIn, setIsAlumniLoggedIn] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true);
  const [currentAlumniUser, setCurrentAlumniUser] = useState({
    id: 'ALM-10111',
    name: 'Jahidul Islam',
    batch: '2020',
    department: 'Computer Science & Engineering',
    designation: 'Senior Cloud Platform Engineer',
    organization: 'Hyperscale Cloud Technologies',
    email: 'jahid.islam@cloudtech.org',
    phone: '+880 1711-229988',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400',
    profileCompleteness: 95,
    privacyHideContact: true,
    notificationsCount: 4
  });

  const [activeModal, setActiveModal] = useState(null);
  const [selectedAlumniForDetail, setSelectedAlumniForDetail] = useState(null);
  const [selectedAlumniForEdit, setSelectedAlumniForEdit] = useState(null);
  const [selectedAlumniForPassword, setSelectedAlumniForPassword] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (title, type = 'success') => {
    setToastMessage({ title, type });
    setTimeout(() => setToastMessage(null), 3800);
  };

  const addLog = (text) => {
    setActivityLogs(prev => [
      { id: `LOG-${Date.now()}`, time: 'Just now', text },
      ...prev.slice(0, 19)
    ]);
  };

  const handleAlumniLoginAttempt = () => {
    if (isAlumniLoggedIn) {
      setCurrentView('portal');
    } else {
      setActiveModal('alumniLogin');
    }
  };

  const handleAdminModeAttempt = () => {
    if (isAdminLoggedIn) {
      setCurrentView('admin');
    } else {
      setActiveModal('adminLogin');
    }
  };

  const handleAlumniLogout = () => {
    setIsAlumniLoggedIn(false);
    setCurrentView('public');
    showToast('You have been logged out of the Alumni Portal.');
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setCurrentView('public');
    showToast('Admin session terminated.');
  };

  const handleApproveAlumni = (id) => {
    const target = alumniList.find(a => a.id === id);
    setAlumniList(prev => prev.map(a => a.id === id ? { ...a, status: 'ACTIVE' } : a));
    addLog(`Approved alumni registration for ${target ? target.name : id}`);
    showToast(`Approved applicant ${target ? target.name : id}! Now live in directory.`);
  };

  const handleRejectAlumni = (id) => {
    const target = alumniList.find(a => a.id === id);
    setAlumniList(prev => prev.filter(a => a.id !== id));
    addLog(`Rejected and removed application for ${target ? target.name : id}`);
    showToast(`Application rejected & purged.`, 'error');
  };

  const handleStatusChange = (id, newStatus) => {
    const target = alumniList.find(a => a.id === id);
    setAlumniList(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
    addLog(`Alumni status updated to ${newStatus} for ${target ? target.name : id}`);
    showToast(`Status updated to ${newStatus}`);
  };

  const handleDeleteAlumni = (id) => {
    const target = alumniList.find(a => a.id === id);
    setAlumniList(prev => prev.filter(a => a.id !== id));
    addLog(`Permanently deleted record ${id}`);
    showToast(`Deleted ${target?.name || 'Alumni record'}`, 'error');
  };

  const handleSaveEditedAlumni = (updatedData) => {
    setAlumniList(prev => prev.map(a => a.id === updatedData.id ? { ...a, ...updatedData } : a));
    addLog(`Admin updated records for ${updatedData.name} (${updatedData.id})`);
    showToast(`Updated profile details for ${updatedData.name}!`);
    setActiveModal(null);
  };

  const handleSaveAdminPasswordChange = (alumniId, newPassword, allowSelfReset) => {
    setAlumniList(prev => prev.map(a => a.id === alumniId ? {
      ...a,
      password: newPassword,
      allowSelfPasswordReset: allowSelfReset,
      passwordResetRequested: false
    } : a));
    addLog(`Admin updated security credentials for alumni ${alumniId}`);
    showToast('Credentials updated & permission saved.');
    setActiveModal(null);
  };

  const handleEventRsvpToggle = (eventId) => {
    setEventsList(prev => prev.map(evt => {
      if (evt.id === eventId) {
        const nextState = !evt.isRegisteredByMe;
        return {
          ...evt,
          isRegisteredByMe: nextState,
          registeredCount: nextState ? evt.registeredCount + 1 : evt.registeredCount - 1
        };
      }
      return evt;
    }));
    const event = eventsList.find(e => e.id === eventId);
    showToast(`RSVP status updated for ${event?.title.slice(0, 24)}...`);
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Department', 'Batch', 'Designation', 'Organization', 'Status'];
    const rows = alumniList.map(a => [
      `"${a.id}"`,
      `"${a.name}"`,
      `"${a.email}"`,
      `"${a.phone}"`,
      `"${a.department}"`,
      `"${a.batch}"`,
      `"${a.designation}"`,
      `"${a.organization}"`,
      `"${a.status}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `institute_alumni_directory_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Alumni records exported to CSV successfully');
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#101828] flex flex-col font-sans selection:bg-[#155EEF] selection:text-white">
      {/* Top Demo Bar */}
      <header className="sticky top-0 z-50 bg-[#0B1F3A] text-white border-b border-[#1E3A63] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setCurrentView('public'); setPublicTab('home'); }}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#155EEF] to-[#D6A84F] flex items-center justify-center font-bold text-white shadow-inner tracking-wider">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block leading-tight">INSTITUTE ALUMNI</span>
                <span className="text-[11px] font-medium tracking-widest text-[#D6A84F] uppercase">Leadership & Networking</span>
              </div>
            </div>

            <div className="hidden md:flex items-center bg-[#102A4E] p-1 rounded-xl border border-[#1E3A63]/60 shadow-inner">
              <button
                onClick={() => setCurrentView('public')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  currentView === 'public' ? 'bg-[#155EEF] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                Public Website
              </button>
              <button
                onClick={() => setCurrentView('register')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  currentView === 'register' ? 'bg-[#155EEF] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                Join Network (5-Step)
              </button>
              <button
                onClick={handleAlumniLoginAttempt}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  currentView === 'portal' ? 'bg-[#155EEF] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                Alumni Portal
                {isAlumniLoggedIn && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
              </button>
              <button
                onClick={handleAdminModeAttempt}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  currentView === 'admin' ? 'bg-[#D6A84F] text-[#0B1F3A] font-bold shadow-sm' : 'text-[#D6A84F] hover:text-amber-300'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                Admin Panel
                {alumniList.filter(a => a.status === 'PENDING').length > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-red-600 text-white font-bold">
                    {alumniList.filter(a => a.status === 'PENDING').length}
                  </span>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2">
              {currentView !== 'admin' ? (
                <button
                  onClick={handleAdminModeAttempt}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border border-[#D6A84F]/60 text-[#D6A84F] hover:bg-[#D6A84F] hover:text-[#0B1F3A] transition flex items-center gap-1"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Admin Mode</span>
                </button>
              ) : (
                <button
                  onClick={handleAdminLogout}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-600 text-slate-300 hover:bg-slate-700 transition flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Admin Logout</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Switcher */}
        <div className="md:hidden flex overflow-x-auto bg-[#071629] px-2 py-1.5 border-t border-[#1E3A63] text-xs gap-1">
          <button onClick={() => setCurrentView('public')} className={`px-3 py-1 rounded whitespace-nowrap ${currentView === 'public' ? 'bg-[#155EEF] text-white font-bold' : 'text-slate-300'}`}>Public Site</button>
          <button onClick={() => setCurrentView('register')} className={`px-3 py-1 rounded whitespace-nowrap ${currentView === 'register' ? 'bg-[#155EEF] text-white font-bold' : 'text-slate-300'}`}>Register</button>
          <button onClick={handleAlumniLoginAttempt} className={`px-3 py-1 rounded whitespace-nowrap ${currentView === 'portal' ? 'bg-[#155EEF] text-white font-bold' : 'text-slate-300'}`}>Alumni Portal</button>
          <button onClick={handleAdminModeAttempt} className={`px-3 py-1 rounded whitespace-nowrap ${currentView === 'admin' ? 'bg-[#D6A84F] text-[#0B1F3A] font-bold' : 'text-[#D6A84F]'}`}>Admin Panel</button>
        </div>
      </header>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0B1F3A] text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700 animate-slide-in">
          {toastMessage.type === 'error' ? (
            <AlertTriangle className="w-5 h-5 text-red-400" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-[#D6A84F]" />
          )}
          <span className="text-sm font-medium">{toastMessage.title}</span>
        </div>
      )}

      {/* Main Views */}
      <main className="flex-1 flex flex-col">
        {currentView === 'public' && (
          <PublicWebsiteView
            publicTab={publicTab}
            setPublicTab={setPublicTab}
            onJoinClick={() => setCurrentView('register')}
            onLoginClick={() => setActiveModal('alumniLogin')}
            alumniList={alumniList.filter(a => a.status === 'ACTIVE')}
            eventsList={eventsList}
            noticesList={noticesList}
            onSelectAlumni={(alumni) => { setSelectedAlumniForDetail(alumni); setActiveModal('viewAlumni'); }}
            onContactSubmit={(newMsg) => {
              setMessagesList(prev => [newMsg, ...prev]);
              showToast('Thank you! Your message has been routed to Institute Alumni Administration.');
            }}
          />
        )}

        {currentView === 'register' && (
          <RegistrationWizard
            onCancel={() => setCurrentView('public')}
            onSubmitSuccess={(newAlumniData) => {
              setAlumniList(prev => [newAlumniData, ...prev]);
              addLog(`New pending alumni application submitted by ${newAlumniData.name} (${newAlumniData.department})`);
              showToast('Application Submitted! Sent to Administration for verification.');
              setCurrentView('admin');
              setAdminTab('pending');
            }}
          />
        )}

        {currentView === 'portal' && (
          <AlumniPortalView
            user={currentAlumniUser}
            setUser={setCurrentAlumniUser}
            portalTab={portalTab}
            setPortalTab={setPortalTab}
            alumniList={alumniList.filter(a => a.status === 'ACTIVE')}
            eventsList={eventsList}
            noticesList={noticesList}
            onEventRsvp={handleEventRsvpToggle}
            onSelectAlumni={(alumni) => { setSelectedAlumniForDetail(alumni); setActiveModal('viewAlumni'); }}
            onLogout={handleAlumniLogout}
          />
        )}

        {currentView === 'admin' && (
          <AdminPanelView
            adminTab={adminTab}
            setAdminTab={setAdminTab}
            alumniList={alumniList}
            eventsList={eventsList}
            noticesList={noticesList}
            messagesList={messagesList}
            activityLogs={activityLogs}
            onApprove={handleApproveAlumni}
            onReject={handleRejectAlumni}
            onStatusChange={handleStatusChange}
            onDelete={handleDeleteAlumni}
            onExportCSV={handleExportCSV}
            onOpenAddAlumni={() => setActiveModal('addAlumni')}
            onOpenAddNotice={() => setActiveModal('addNotice')}
            onOpenAddEvent={() => setActiveModal('addEvent')}
            onOpenEditAlumni={(alumni) => { setSelectedAlumniForEdit(alumni); setActiveModal('editAlumni'); }}
            onOpenPasswordModal={(alumni) => { setSelectedAlumniForPassword(alumni); setActiveModal('passwordAdmin'); }}
            onMarkMessageRead={(msgId) => {
              setMessagesList(prev => prev.map(m => m.id === msgId ? { ...m, status: 'READ' } : m));
              showToast('Message marked as processed.');
            }}
            onDeleteMessage={(msgId) => {
              setMessagesList(prev => prev.filter(m => m.id !== msgId));
              showToast('Message deleted.');
            }}
            onSelectAlumni={(alumni) => { setSelectedAlumniForDetail(alumni); setActiveModal('viewAlumni'); }}
            onAdminLogout={handleAdminLogout}
          />
        )}
      </main>

      {/* MODALS */}
      {activeModal === 'alumniLogin' && (
        <AlumniLoginModal
          onClose={() => setActiveModal(null)}
          onSuccessLogin={(userData) => {
            setIsAlumniLoggedIn(true);
            setCurrentAlumniUser(prev => ({ ...prev, ...userData }));
            setActiveModal(null);
            setCurrentView('portal');
            showToast(`Welcome back, ${userData.name}!`);
          }}
          alumniList={alumniList}
          onRequestReset={(email) => {
            setAlumniList(prev => prev.map(a => a.email.toLowerCase() === email.toLowerCase() ? { ...a, passwordResetRequested: true } : a));
            addLog(`Password reset requested by alumni with email: ${email}`);
            showToast('Reset request dispatched to Institute Registrar.');
            setActiveModal(null);
          }}
        />
      )}

      {activeModal === 'adminLogin' && (
        <AdminLoginModal
          onClose={() => setActiveModal(null)}
          onSuccessLogin={() => {
            setIsAdminLoggedIn(true);
            setActiveModal(null);
            setCurrentView('admin');
            showToast('Authenticated as Institute Administrator.');
          }}
        />
      )}

      {activeModal === 'editAlumni' && selectedAlumniForEdit && (
        <EditAlumniModal
          alumni={selectedAlumniForEdit}
          onClose={() => { setActiveModal(null); setSelectedAlumniForEdit(null); }}
          onSave={handleSaveEditedAlumni}
        />
      )}

      {activeModal === 'passwordAdmin' && selectedAlumniForPassword && (
        <AdminPasswordManagementModal
          alumni={selectedAlumniForPassword}
          onClose={() => { setActiveModal(null); setSelectedAlumniForPassword(null); }}
          onSavePassword={handleSaveAdminPasswordChange}
        />
      )}

      {activeModal === 'viewAlumni' && selectedAlumniForDetail && (
        <AlumniDetailModal
          alumni={selectedAlumniForDetail}
          onClose={() => { setActiveModal(null); setSelectedAlumniForDetail(null); }}
        />
      )}

      {activeModal === 'addAlumni' && (
        <AddAlumniAdminModal
          onClose={() => setActiveModal(null)}
          onAdd={(data) => {
            setAlumniList(prev => [data, ...prev]);
            addLog(`Admin directly added alumni record ${data.name}`);
            showToast(`Alumni record created for ${data.name}!`);
            setActiveModal(null);
          }}
        />
      )}

      {activeModal === 'addNotice' && (
        <AddNoticeModal
          onClose={() => setActiveModal(null)}
          onAdd={(noticeData) => {
            setNoticesList(prev => [noticeData, ...prev]);
            addLog(`Published official notice: ${noticeData.title}`);
            showToast('Notice published successfully!');
            setActiveModal(null);
          }}
        />
      )}

      {activeModal === 'addEvent' && (
        <AddEventModal
          onClose={() => setActiveModal(null)}
          onAdd={(eventData) => {
            setEventsList(prev => [eventData, ...prev]);
            addLog(`Organized new event: ${eventData.title}`);
            showToast('Event announced successfully!');
            setActiveModal(null);
          }}
        />
      )}
    </div>
  );
}

// -------------------------------------------------------------
// PUBLIC WEBSITE VIEW
// -------------------------------------------------------------
function PublicWebsiteView({
  publicTab,
  setPublicTab,
  onJoinClick,
  onLoginClick,
  alumniList,
  eventsList,
  noticesList,
  onSelectAlumni,
  onContactSubmit
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('ALL');
  const [batchFilter, setBatchFilter] = useState('ALL');

  const filteredAlumni = useMemo(() => {
    return alumniList.filter(alm => {
      const matchSearch = alm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alm.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alm.designation.toLowerCase().includes(searchTerm.toLowerCase());
      const matchDept = deptFilter === 'ALL' || alm.department === deptFilter;
      const matchBatch = batchFilter === 'ALL' || alm.batch === batchFilter;
      return matchSearch && matchDept && matchBatch;
    });
  }, [alumniList, searchTerm, deptFilter, batchFilter]);

  return (
    <div className="flex-1 flex flex-col">
      {/* Sub-Navbar */}
      <div className="bg-white border-b border-[#E4E7EC] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto py-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'directory', label: 'Alumni Directory' },
                { id: 'events', label: 'Events' },
                { id: 'notices', label: 'Notices' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'contact', label: 'Contact' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setPublicTab(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                    publicTab === item.id
                      ? 'bg-[#155EEF]/10 text-[#155EEF] font-semibold'
                      : 'text-[#667085] hover:text-[#101828] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={onLoginClick}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#0B1F3A] hover:text-[#155EEF] transition"
              >
                Login
              </button>
              <button
                onClick={onJoinClick}
                className="bg-[#155EEF] hover:bg-blue-700 text-white px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition shadow-sm flex items-center gap-1.5"
              >
                <span>Join Network</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* HOMEPAGE VIEW (MATCHING IMAGES) */}
      {/* ========================================================= */}
      {publicTab === 'home' && (
        <div className="bg-[#F7F9FC]">
          {/* SECTION 1: HERO */}
          <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0E2442] to-[#0B1F3A] text-white pt-20 pb-20 px-4 sm:px-6 lg:px-8 text-center border-b border-[#1E3A63]">
            <div className="max-w-4xl mx-auto space-y-6 relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#155EEF]/20 border border-[#155EEF]/40 text-[#D6A84F] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <Award className="w-3.5 h-3.5" /> Official Institute Alumni Network
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white">
                CONNECTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-[#D6A84F]">GENERATIONS</span>
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
                One community. Thousands of stories. Fostering lifelong fellowship, mentorship, academic prestige, and worldwide impact.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setPublicTab('directory')}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-[#0B1F3A] font-bold text-sm hover:bg-slate-100 transition shadow-lg flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4 text-[#155EEF]" />
                  <span>Explore Alumni</span>
                </button>
                <button
                  onClick={onJoinClick}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#155EEF] hover:bg-blue-600 text-white font-bold text-sm transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <span>Join Alumni Network</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Stat Counters Bar */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-14 border-t border-slate-700/60 mt-12">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">2,500+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-semibold">Alumni</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#D6A84F]">35+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-semibold">Batches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-400">20+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-semibold">Annual Events</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: ABOUT US */}
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">About Us</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] mt-2 mb-4 leading-tight">
                  Empowering graduates to lead, innovate, and give back.
                </h2>
                <p className="text-[#667085] text-sm leading-relaxed mb-8">
                  Founded with a vision to sustain the enduring brotherhood and sisterhood of our institute, the Alumni Platform bridges pioneering graduates across industries with emerging scholars.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-[#E4E7EC] shadow-sm">
                    <Building className="w-6 h-6 text-[#155EEF] mb-3" />
                    <h4 className="font-bold text-[#0B1F3A] text-sm">Global Chapters</h4>
                    <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                      Active circles spanning North America, Europe, Australia, and Asia.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-[#E4E7EC] shadow-sm">
                    <Award className="w-6 h-6 text-[#D6A84F] mb-3" />
                    <h4 className="font-bold text-[#0B1F3A] text-sm">Endowments</h4>
                    <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                      Over 25 scholarships funded entirely by alumni batches.
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo Card with Floating Badge */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=900"
                    alt="Alumni Gathering in Library"
                    className="w-full object-cover h-80 sm:h-96"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-[#E4E7EC] hidden sm:block max-w-xs">
                  <p className="text-xs font-bold text-[#0B1F3A]">Institutional Excellence</p>
                  <p className="text-[11px] text-[#667085] mt-1">
                    Connecting academic heritage with modern digital networking infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: MEET OUR ALUMNI */}
          <section className="py-16 bg-white border-y border-[#E4E7EC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">Distinguished Members</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mt-1">Meet Our Alumni</h3>
                </div>
                <button
                  onClick={() => setPublicTab('directory')}
                  className="mt-3 sm:mt-0 text-sm font-semibold text-[#155EEF] hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Explore full directory</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {alumniList.slice(0, 4).map(alumni => (
                  <div
                    key={alumni.id}
                    className="bg-[#F7F9FC] rounded-2xl p-5 border border-[#E4E7EC] hover:shadow-lg transition cursor-pointer flex flex-col justify-between"
                    onClick={() => onSelectAlumni(alumni)}
                  >
                    <div>
                      <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 border-2 border-white shadow-sm">
                        <img src={alumni.avatar} alt={alumni.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-bold text-[#0B1F3A] text-base leading-snug">{alumni.name}</h4>
                      <p className="text-xs font-semibold text-[#155EEF] mt-1">
                        {alumni.department.split('&')[0]} • Batch {alumni.batch}
                      </p>
                      <p className="text-xs text-[#667085] mt-2 line-clamp-2">
                        {alumni.designation} at <span className="text-[#101828] font-medium">{alumni.organization}</span>
                      </p>
                    </div>
                    <button className="mt-5 w-full py-2 bg-white rounded-xl text-xs font-bold text-[#0B1F3A] border border-[#E4E7EC] hover:bg-[#155EEF] hover:text-white transition">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: UPCOMING EVENTS */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">Calendar</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mt-1">Upcoming Events</h3>
              </div>
              <button
                onClick={() => setPublicTab('events')}
                className="text-sm font-semibold text-[#155EEF] hover:text-blue-800"
              >
                View all ({eventsList.length})
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {eventsList.map(evt => (
                <div key={evt.id} className="bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-sm flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="h-44 relative overflow-hidden">
                      <img src={evt.banner} alt={evt.title} className="w-full h-full object-cover" />
                      <span className="absolute top-3 right-3 bg-[#0B1F3A]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {evt.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center text-xs font-semibold text-[#D6A84F] gap-1.5 mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{evt.formattedDate}</span>
                      </div>
                      <h4 className="font-bold text-[#0B1F3A] text-base mb-2 line-clamp-1">{evt.title}</h4>
                      <p className="text-xs text-[#667085] line-clamp-2 leading-relaxed">{evt.description}</p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-[#E4E7EC] flex items-center justify-between text-xs">
                    <span className="text-[#667085] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {evt.location.split(',')[0]}
                    </span>
                    <button
                      onClick={() => setPublicTab('events')}
                      className="font-bold text-[#155EEF] hover:underline"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: LATEST NOTICES */}
          <section className="py-16 bg-[#F0F4FA] border-t border-[#E4E7EC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">Circulars</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mt-1">Latest Notices</h3>
                </div>
                <button
                  onClick={() => setPublicTab('notices')}
                  className="text-sm font-semibold text-[#155EEF] hover:text-blue-800"
                >
                  View all notices
                </button>
              </div>

              <div className="space-y-3">
                {noticesList.map(notice => (
                  <div
                    key={notice.id}
                    className="bg-white rounded-xl p-4 sm:p-5 border border-[#E4E7EC] hover:border-[#155EEF]/50 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer shadow-sm"
                    onClick={() => setPublicTab('notices')}
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="bg-[#155EEF]/10 text-[#155EEF] px-3 py-1.5 rounded-lg text-xs font-extrabold whitespace-nowrap">
                        {notice.date}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1F3A] text-sm sm:text-base hover:text-[#155EEF] transition">
                          {notice.title}
                        </h4>
                        <p className="text-xs text-[#667085] mt-0.5 line-clamp-1">{notice.summary}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#155EEF] whitespace-nowrap flex items-center gap-1">
                      Read Circular <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 6: CALL TO ACTION BANNER */}
          <section className="py-16 bg-[#0B1F3A] text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h3 className="text-2xl sm:text-4xl font-extrabold mb-4">Are you a graduate of the Institute?</h3>
              <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                Join thousands of verified alumni worldwide. Gain exclusive access to the directory, career opportunities, and invitations to campus galas.
              </p>
              <button
                onClick={onJoinClick}
                className="bg-[#D6A84F] hover:bg-amber-500 text-[#0B1F3A] font-extrabold px-8 py-3.5 rounded-xl transition shadow-lg inline-flex items-center gap-2"
              >
                <span>Complete 5-Step Registration</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* SECTION 7: INSTITUTIONAL FOOTER */}
          <footer className="bg-[#071629] text-white border-t border-[#1E3A63] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#155EEF] flex items-center justify-center font-bold text-white">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-base tracking-tight">ALUMNI PLATFORM</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Official networking and community portal representing thousands of esteemed graduates worldwide.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#D6A84F] mb-3">Quick Navigation</h5>
                <ul className="text-xs space-y-2 text-slate-300">
                  <li><button onClick={() => setPublicTab('directory')} className="hover:text-white">Alumni Directory</button></li>
                  <li><button onClick={() => setPublicTab('events')} className="hover:text-white">Conferences & Reunions</button></li>
                  <li><button onClick={() => setPublicTab('notices')} className="hover:text-white">Official Notices</button></li>
                  <li><button onClick={() => setPublicTab('about')} className="hover:text-white">About the Association</button></li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#D6A84F] mb-3">Office of Alumni Affairs</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Academic Administration Complex, Level 4<br />
                  Institute Campus, Dhaka 1216<br />
                  alumni-relations@institute.edu.bd<br />
                  +880 (2) 9876543
                </p>
              </div>

              <div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#D6A84F] mb-3">Verified Portal</h5>
                <p className="text-xs text-slate-400 mb-3">
                  All member entries are verified against university records.
                </p>
                <button
                  onClick={onJoinClick}
                  className="w-full py-2 bg-[#155EEF] hover:bg-blue-600 rounded-xl text-xs font-bold text-white transition"
                >
                  Join Network Now
                </button>
              </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
              © 2026 Institute Alumni Association. All rights reserved.
            </div>
          </footer>
        </div>
      )}

      {/* DIRECTORY TAB */}
      {publicTab === 'directory' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-[#0B1F3A]">Alumni Directory</h2>
            <p className="text-[#667085] text-sm mt-1">Discover, search, and connect with verified graduates of the Institute.</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E4E7EC] shadow-sm mb-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-6 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Search alumni by name, organization, designation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E4E7EC] text-sm focus:outline-none focus:border-[#155EEF]"
                />
              </div>

              <div className="sm:col-span-3">
                <select
                  value={deptFilter}
                  onChange={(e) => setDeptFilter(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#E4E7EC] text-sm bg-white focus:outline-none focus:border-[#155EEF]"
                >
                  <option value="ALL">All Departments</option>
                  <option value="Computer Science & Engineering">CSE</option>
                  <option value="Electrical & Electronic Engineering">EEE</option>
                  <option value="Business Administration">BBA / Business</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Biotechnology & Genetic Engineering">Biotechnology</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <select
                  value={batchFilter}
                  onChange={(e) => setBatchFilter(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#E4E7EC] text-sm bg-white focus:outline-none focus:border-[#155EEF]"
                >
                  <option value="ALL">All Batches</option>
                  <option value="2019">Batch 2019</option>
                  <option value="2021">Batch 2021</option>
                  <option value="2022">Batch 2022</option>
                  <option value="2023">Batch 2023</option>
                  <option value="2024">Batch 2024</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map(alumni => (
              <div
                key={alumni.id}
                className="bg-white rounded-2xl p-6 border border-[#E4E7EC] hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4">
                    <img src={alumni.avatar} alt={alumni.name} className="w-16 h-16 rounded-2xl object-cover border border-slate-200" />
                    <div>
                      <h4 className="font-bold text-[#0B1F3A] text-lg leading-tight">{alumni.name}</h4>
                      <p className="text-xs font-semibold text-[#155EEF] mt-1">{alumni.department}</p>
                      <span className="inline-block mt-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-[#155EEF]">
                        Batch {alumni.batch}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs">
                    <div className="flex items-center text-[#101828] font-medium gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{alumni.designation}</span>
                    </div>
                    <div className="flex items-center text-[#667085] gap-2">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>{alumni.organization}</span>
                    </div>
                    <div className="flex items-center text-[#667085] gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{alumni.workLocation}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  {alumni.privacyHideContact ? (
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Contact Masked
                    </span>
                  ) : (
                    <span className="text-[11px] text-green-700 flex items-center gap-1 font-medium">
                      <Mail className="w-3 h-3" /> Direct Contact
                    </span>
                  )}
                  <button
                    onClick={() => onSelectAlumni(alumni)}
                    className="px-3.5 py-1.5 bg-[#0B1F3A] hover:bg-[#155EEF] text-white rounded-xl text-xs font-semibold transition"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* OTHER TABS */}
      {publicTab === 'about' && (
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A]">About the Association</h2>
          <p className="text-slate-600 mt-2">Fostering alumni relations across national and global chapters.</p>
        </div>
      )}

      {publicTab === 'events' && (
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] mb-6">Events Calendar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {eventsList.map(evt => (
              <div key={evt.id} className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                <img src={evt.banner} alt={evt.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <span className="text-xs font-bold text-blue-600">{evt.formattedDate}</span>
                  <h4 className="font-bold text-base mt-1">{evt.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{evt.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {publicTab === 'notices' && (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-4">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] mb-4">Official Notices</h2>
          {noticesList.map(n => (
            <div key={n.id} className="bg-white p-5 rounded-2xl border shadow-sm">
              <span className="text-xs font-bold text-amber-600">{n.date}</span>
              <h4 className="font-bold text-base mt-1">{n.title}</h4>
              <p className="text-xs text-gray-600 mt-1">{n.summary}</p>
            </div>
          ))}
        </div>
      )}

      {publicTab === 'gallery' && (
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] mb-6">Memories & Photo Gallery</h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {INITIAL_GALLERY.map(g => (
              <div key={g.id} className="rounded-2xl overflow-hidden shadow-sm">
                <img src={g.image} alt={g.album} className="h-48 w-full object-cover" />
                <div className="p-3 bg-white border">
                  <h5 className="font-bold text-xs">{g.album}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {publicTab === 'contact' && (
        <PublicContactSection onSubmit={onContactSubmit} />
      )}
    </div>
  );
}

function PublicContactSection({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    onSubmit({
      id: `MSG-${Date.now()}`,
      senderName: form.name,
      senderEmail: form.email,
      phone: form.phone || 'N/A',
      subject: form.subject || 'General Inquiry',
      message: form.message,
      date: new Date().toISOString().slice(0, 10),
      status: 'UNREAD'
    });
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h2 className="text-2xl font-extrabold text-[#0B1F3A] mb-4">Contact Alumni Secretariat</h2>
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-bold mb-1">Full Name</label>
            <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 border rounded-xl" />
          </div>
          <div>
            <label className="block font-bold mb-1">Email</label>
            <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2 border rounded-xl" />
          </div>
          <div>
            <label className="block font-bold mb-1">Message</label>
            <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-3 py-2 border rounded-xl" />
          </div>
          <button type="submit" className="px-6 py-2.5 bg-[#155EEF] text-white font-bold rounded-xl">Send Message</button>
        </form>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 5-STEP REGISTRATION WIZARD (WITH FILE PHOTO UPLOAD)
// -------------------------------------------------------------
function RegistrationWizard({ onCancel, onSubmitSuccess }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: 'Male',
    email: '',
    phone: '',
    address: 'Dhaka, Bangladesh',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400',
    studentId: '',
    registrationNo: '',
    department: 'Computer Science & Engineering',
    program: 'B.Sc. CSE',
    batch: '2023',
    session: '2018-2019',
    admissionYear: '2019',
    graduationYear: '2023',
    occupation: 'Software Engineer',
    organization: '',
    designation: '',
    workLocation: 'Dhaka',
    linkedin: '',
    password: '',
    confirmPassword: ''
  });

  const [validationError, setValidationError] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, avatar: previewUrl }));
    }
  };

  const nextStep = () => {
    setValidationError('');
    if (step === 1 && (!formData.fullName || !formData.email || !formData.phone)) {
      setValidationError('Please fill in required personal fields (Name, Email, Phone).');
      return;
    }
    if (step === 2 && (!formData.studentId || !formData.batch)) {
      setValidationError('Student ID and Batch are required for academic verification.');
      return;
    }
    if (step === 3 && (!formData.organization || !formData.designation)) {
      setValidationError('Please specify your current organization and designation.');
      return;
    }
    if (step === 4) {
      if (!formData.password || formData.password.length < 6) {
        setValidationError('Password must be at least 6 characters.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setValidationError('Passwords do not match.');
        return;
      }
    }
    setStep(s => Math.min(s + 1, 5));
  };

  const handleFinalSubmit = () => {
    const finalRecord = {
      id: `ALM-${Math.floor(10000 + Math.random() * 90000)}`,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      department: formData.department,
      program: formData.program,
      batch: formData.batch,
      admissionYear: formData.admissionYear,
      graduationYear: formData.graduationYear,
      designation: formData.designation,
      organization: formData.organization,
      workLocation: formData.workLocation,
      linkedin: formData.linkedin || '#',
      website: '',
      avatar: formData.avatar,
      status: 'PENDING',
      privacyHideContact: true,
      bio: `${formData.designation} at ${formData.organization}.`,
      appliedDate: new Date().toISOString().slice(0, 10),
      password: formData.password,
      allowSelfPasswordReset: true,
      passwordResetRequested: false
    };
    onSubmitSuccess(finalRecord);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 flex-1 flex flex-col justify-center">
      <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-xl overflow-hidden">
        <div className="bg-[#0B1F3A] text-white p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D6A84F] font-bold">Registration Wizard</span>
              <h2 className="text-2xl font-extrabold text-white mt-1">Join the Alumni Network</h2>
            </div>
            <button onClick={onCancel} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {['Personal', 'Academic', 'Professional', 'Account', 'Review'].map((lbl, idx) => (
              <div key={lbl} className="text-center">
                <div className={`h-2 rounded-full mb-2 ${idx + 1 < step ? 'bg-[#D6A84F]' : idx + 1 === step ? 'bg-[#155EEF]' : 'bg-slate-700'}`} />
                <span className={`text-[11px] font-semibold hidden sm:inline ${idx + 1 === step ? 'text-white' : 'text-slate-400'}`}>
                  Step {idx + 1}: {lbl}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {validationError && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-bold text-[#0B1F3A] text-base border-b pb-2">Step 1 — Personal Details & Photo Upload</h3>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
                <div className="relative">
                  <img src={formData.avatar} alt="Preview" className="w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-md bg-white" />
                  <span className="absolute -bottom-1 -right-1 bg-[#155EEF] p-1.5 rounded-full text-white">
                    <Camera className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Profile Photo</label>
                  <p className="text-[11px] text-slate-500 mb-2">Upload a crisp photo from your computer or mobile device.</p>
                  <label className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-[#0B1F3A] hover:bg-slate-100 cursor-pointer shadow-sm">
                    <Upload className="w-3.5 h-3.5 text-[#155EEF]" />
                    <span>Choose File from Device</span>
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Md. Rahim Hasan"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E4E7EC] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={e => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E4E7EC] text-sm bg-white"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E4E7EC] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Phone Number *</label>
                  <input
                    type="text"
                    placeholder="+880 1700-000000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E4E7EC] text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-bold text-[#0B1F3A] text-base border-b pb-2">Step 2 — Academic Records</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Student ID *</label>
                  <input
                    type="text"
                    placeholder="e.g. 19-39821-1"
                    value={formData.studentId}
                    onChange={e => setFormData({ ...formData, studentId: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E4E7EC] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Batch *</label>
                  <input
                    type="text"
                    placeholder="2023"
                    value={formData.batch}
                    onChange={e => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC] text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Department</label>
                <select
                  value={formData.department}
                  onChange={e => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E4E7EC] text-sm bg-white"
                >
                  <option>Computer Science & Engineering</option>
                  <option>Electrical & Electronic Engineering</option>
                  <option>Business Administration</option>
                  <option>Architecture</option>
                  <option>Biotechnology & Genetic Engineering</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-bold text-[#0B1F3A] text-base border-b pb-2">Step 3 — Professional Background</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Current Organization *</label>
                  <input
                    type="text"
                    placeholder="e.g. Tech Solutions BD"
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E4E7EC] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Designation *</label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Software Engineer"
                    value={formData.designation}
                    onChange={e => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E4E7EC] text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="font-bold text-[#0B1F3A] text-base border-b pb-2">Step 4 — Account Credentials</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Create Password *</label>
                  <input
                    type="password"
                    placeholder="At least 6 characters"
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E4E7EC] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">Confirm Password *</label>
                  <input
                    type="password"
                    placeholder="Re-type password"
                    value={formData.confirmPassword}
                    onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E4E7EC] text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h3 className="font-bold text-[#0B1F3A] text-base border-b pb-2">Step 5 — Review Application</h3>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                  <img src={formData.avatar} alt="Review" className="w-12 h-12 rounded-xl object-cover border" />
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1F3A]">{formData.fullName}</h4>
                    <p className="text-[#155EEF]">{formData.email}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Academic:</span>
                  <span className="font-medium">{formData.department} (Batch {formData.batch})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Student ID:</span>
                  <span className="font-mono">{formData.studentId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Current Role:</span>
                  <span className="font-medium">{formData.designation} at {formData.organization}</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 pt-4 border-t border-[#E4E7EC] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(s => s - 1)}
                className="px-5 py-2.5 rounded-xl border border-[#E4E7EC] text-xs font-bold text-[#0B1F3A] hover:bg-slate-50 flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
            ) : (
              <button type="button" onClick={onCancel} className="px-5 py-2.5 text-xs font-bold text-slate-500">
                Cancel
              </button>
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2.5 rounded-xl bg-[#155EEF] hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinalSubmit}
                className="px-7 py-2.5 rounded-xl bg-[#D6A84F] hover:bg-amber-500 text-[#0B1F3A] text-xs font-extrabold transition shadow-md flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" /> Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// ALUMNI PORTAL VIEW
// -------------------------------------------------------------
function AlumniPortalView({ user, setUser, portalTab, setPortalTab, alumniList, eventsList, noticesList, onEventRsvp, onSelectAlumni, onLogout }) {
  const registeredEvents = eventsList.filter(e => e.isRegisteredByMe);

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-[#E4E7EC] shadow-sm text-center">
            <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-2xl object-cover mx-auto border-2 border-[#155EEF]" />
            <h3 className="font-extrabold text-[#0B1F3A] text-base mt-3">{user.name}</h3>
            <p className="text-xs text-[#155EEF] font-semibold">{user.department}</p>
            <p className="text-[11px] text-[#667085] mt-0.5">Batch {user.batch} • Verified Alumni</p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-left">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Profile Strength</span>
                <span className="text-[#155EEF]">{user.profileCompleteness}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-[#155EEF] h-2 rounded-full" style={{ width: `${user.profileCompleteness}%` }} />
              </div>
            </div>
          </div>

          <nav className="bg-white rounded-2xl p-2 border border-[#E4E7EC] shadow-sm space-y-1 text-xs font-semibold">
            {[
              { id: 'overview', label: 'Overview', icon: LayoutDashboard },
              { id: 'profile', label: 'My Profile', icon: GraduationCap },
              { id: 'events', label: 'Events & RSVPs', icon: Calendar },
              { id: 'notices', label: 'Notices', icon: Bell },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setPortalTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${
                    portalTab === item.id ? 'bg-[#155EEF] text-white' : 'text-[#667085] hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition border-t pt-3 mt-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </nav>
        </aside>

        <main className="lg:col-span-9 space-y-6">
          {portalTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#0B1F3A] to-[#155EEF] text-white p-6 sm:p-8 rounded-3xl shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#D6A84F]">Member Portal</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">Good morning, {user.name.split(' ')[0]}</h2>
                <p className="text-slate-200 text-xs sm:text-sm mt-1">
                  Welcome to your institutional hub. You have {registeredEvents.length} registered events.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-sm text-center">
                  <span className="text-xs text-[#667085] font-semibold block">Profile</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mt-1 block">95%</span>
                  <span className="text-[10px] text-green-600 font-bold">Verified</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-sm text-center">
                  <span className="text-xs text-[#667085] font-semibold block">Events</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#155EEF] mt-1 block">03</span>
                  <span className="text-[10px] text-slate-500">Scheduled</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-sm text-center">
                  <span className="text-xs text-[#667085] font-semibold block">Notices</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#D6A84F] mt-1 block">07</span>
                  <span className="text-[10px] text-slate-500">Active</span>
                </div>
              </div>
            </div>
          )}

          {portalTab === 'events' && (
            <div className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#0B1F3A]">Upcoming Events & Registrations</h3>
              <div className="space-y-4">
                {eventsList.map(evt => (
                  <div key={evt.id} className="p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-[#0B1F3A]">{evt.title}</h4>
                      <p className="text-xs text-[#667085]">{evt.formattedDate} • {evt.location}</p>
                    </div>
                    <button
                      onClick={() => onEventRsvp(evt.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                        evt.isRegisteredByMe ? 'bg-green-600 text-white' : 'bg-[#155EEF] text-white'
                      }`}
                    >
                      {evt.isRegisteredByMe ? 'Registered ✓' : 'Register'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {portalTab === 'settings' && (
            <div className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#0B1F3A]">Privacy Controls</h3>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-xs text-[#0B1F3A]">Mask Personal Email & Phone in Public Directory</p>
                  <p className="text-[11px] text-[#667085]">Hide contact details from public unauthenticated visitors.</p>
                </div>
                <input
                  type="checkbox"
                  checked={user.privacyHideContact}
                  onChange={e => setUser({ ...user, privacyHideContact: e.target.checked })}
                  className="w-5 h-5 accent-[#155EEF]"
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// ADMIN PANEL VIEW
// -------------------------------------------------------------
function AdminPanelView({
  adminTab,
  setAdminTab,
  alumniList,
  eventsList,
  noticesList,
  messagesList,
  activityLogs,
  onApprove,
  onReject,
  onStatusChange,
  onDelete,
  onExportCSV,
  onOpenAddAlumni,
  onOpenAddNotice,
  onOpenAddEvent,
  onOpenEditAlumni,
  onOpenPasswordModal,
  onMarkMessageRead,
  onDeleteMessage,
  onSelectAlumni,
  onAdminLogout
}) {
  const [adminSearch, setAdminSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [deptFilter, setDeptFilter] = useState('ALL');

  const pendingCount = alumniList.filter(a => a.status === 'PENDING').length;
  const resetRequestedCount = alumniList.filter(a => a.passwordResetRequested).length;

  const filteredAlumni = useMemo(() => {
    return alumniList.filter(a => {
      const matchSearch = a.name.toLowerCase().includes(adminSearch.toLowerCase()) ||
        a.id.toLowerCase().includes(adminSearch.toLowerCase()) ||
        a.email.toLowerCase().includes(adminSearch.toLowerCase());
      const matchStatus = statusFilter === 'ALL' || a.status === statusFilter;
      const matchDept = deptFilter === 'ALL' || a.department === deptFilter;
      return matchSearch && matchStatus && matchDept;
    });
  }, [alumniList, adminSearch, statusFilter, deptFilter]);

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-[#F7F9FC]">
      <aside className="w-full md:w-64 bg-[#0B1F3A] text-slate-300 p-4 border-r border-[#1E3A63] shrink-0 flex flex-col justify-between">
        <div>
          <div className="px-3 py-2 mb-4 border-b border-slate-700/60 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6A84F]">Admin Panel</span>
            <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">SUPER_ADMIN</span>
          </div>

          <nav className="space-y-1 text-xs font-semibold">
            <div className="text-[10px] uppercase tracking-wider text-slate-400 px-3 py-1 font-bold">Core</div>
            <button
              onClick={() => setAdminTab('dashboard')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition ${adminTab === 'dashboard' ? 'bg-[#155EEF] text-white' : 'hover:bg-[#102A4E]'}`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <div className="text-[10px] uppercase tracking-wider text-slate-400 px-3 py-1 pt-3 font-bold">Alumni Control</div>
            <button
              onClick={() => { setAdminTab('alumni'); setStatusFilter('ALL'); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition ${adminTab === 'alumni' && statusFilter !== 'PENDING' ? 'bg-[#155EEF] text-white' : 'hover:bg-[#102A4E]'}`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4" />
                <span>All Alumni</span>
              </div>
              <span className="text-[10px] bg-slate-700 text-white px-1.5 py-0.2 rounded-full">{alumniList.length}</span>
            </button>
            <button
              onClick={() => { setAdminTab('pending'); setStatusFilter('PENDING'); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition ${adminTab === 'pending' || (adminTab === 'alumni' && statusFilter === 'PENDING') ? 'bg-[#D6A84F] text-[#0B1F3A] font-bold' : 'hover:bg-[#102A4E]'}`}
            >
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4" />
                <span>Pending Queue</span>
              </div>
              {pendingCount > 0 && (
                <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.2 rounded-full font-bold">{pendingCount}</span>
              )}
            </button>

            <div className="text-[10px] uppercase tracking-wider text-slate-400 px-3 py-1 pt-3 font-bold">Content & Media</div>
            <button
              onClick={() => setAdminTab('notices')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition ${adminTab === 'notices' ? 'bg-[#155EEF] text-white' : 'hover:bg-[#102A4E]'}`}
            >
              <FileText className="w-4 h-4" />
              <span>Notices & Circulars</span>
            </button>
            <button
              onClick={() => setAdminTab('events')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition ${adminTab === 'events' ? 'bg-[#155EEF] text-white' : 'hover:bg-[#102A4E]'}`}
            >
              <Calendar className="w-4 h-4" />
              <span>Events & RSVPs</span>
            </button>
            <button
              onClick={() => setAdminTab('messages')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition ${adminTab === 'messages' ? 'bg-[#155EEF] text-white' : 'hover:bg-[#102A4E]'}`}
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4" />
                <span>Contact Messages</span>
              </div>
              {messagesList.filter(m => m.status === 'UNREAD').length > 0 && (
                <span className="text-[10px] bg-[#D6A84F] text-[#0B1F3A] font-bold px-1.5 py-0.2 rounded-full">
                  {messagesList.filter(m => m.status === 'UNREAD').length}
                </span>
              )}
            </button>

            <div className="text-[10px] uppercase tracking-wider text-slate-400 px-3 py-1 pt-3 font-bold">System</div>
            <button
              onClick={() => setAdminTab('logs')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition ${adminTab === 'logs' ? 'bg-[#155EEF] text-white' : 'hover:bg-[#102A4E]'}`}
            >
              <Shield className="w-4 h-4" />
              <span>Audit Logs</span>
            </button>
          </nav>
        </div>

        <div className="space-y-2 mt-6">
          <button
            onClick={onExportCSV}
            className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={onAdminLogout}
            className="w-full py-2 px-3 rounded-xl bg-red-900/30 text-red-300 hover:bg-red-900/50 text-xs font-semibold flex items-center justify-center gap-2 transition"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Admin Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {/* DASHBOARD */}
        {adminTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B1F3A]">Executive Dashboard</h2>
                <p className="text-xs text-[#667085]">Real-time operational pulse across batches, notices, and applications.</p>
              </div>
              <button
                onClick={onOpenAddAlumni}
                className="px-4 py-2 bg-[#155EEF] hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" /> Add Alumni
              </button>
            </div>

            {resetRequestedCount > 0 && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-amber-600" />
                  <span><strong>{resetRequestedCount}</strong> alumni requested password reset.</span>
                </div>
                <button
                  onClick={() => { setAdminTab('alumni'); setStatusFilter('ALL'); }}
                  className="font-bold underline text-amber-800"
                >
                  Manage Passwords
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-sm">
                <span className="text-xs text-[#667085] font-semibold">Total Alumni</span>
                <div className="text-3xl font-extrabold text-[#0B1F3A] mt-1">{alumniList.length}</div>
                <span className="text-[10px] text-green-600 font-bold">↑ +14 this month</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-sm">
                <span className="text-xs text-[#667085] font-semibold">Pending Review</span>
                <div className="text-3xl font-extrabold text-[#D6A84F] mt-1">{pendingCount}</div>
                <span className="text-[10px] text-amber-600 font-bold">Requires Action</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-sm">
                <span className="text-xs text-[#667085] font-semibold">Events Active</span>
                <div className="text-3xl font-extrabold text-[#155EEF] mt-1">{eventsList.length}</div>
                <span className="text-[10px] text-slate-500">1,760 RSVPs total</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-sm">
                <span className="text-xs text-[#667085] font-semibold">Published Notices</span>
                <div className="text-3xl font-extrabold text-indigo-900 mt-1">{noticesList.length}</div>
                <span className="text-[10px] text-slate-500">All batches broadcasted</span>
              </div>
            </div>

            {/* SVG Trends Bar Chart */}
            <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-[#0B1F3A] text-sm">Alumni Registration Trends (Annual Growth)</h3>
                  <p className="text-xs text-[#667085]">Year-on-year verification throughput by the registrar</p>
                </div>
                <span className="text-xs font-semibold text-[#155EEF] bg-blue-50 px-2.5 py-1 rounded-lg">2020 – 2026 YTD</span>
              </div>
              <div className="w-full h-44 flex items-end justify-between gap-3 pt-6 px-2">
                {[
                  { year: '2020', count: 180, h: '35%' },
                  { year: '2021', count: 290, h: '50%' },
                  { year: '2022', count: 420, h: '65%' },
                  { year: '2023', count: 610, h: '80%' },
                  { year: '2024', count: 750, h: '90%' },
                  { year: '2025', count: 910, h: '98%' },
                  { year: '2026', count: 450, h: '70%' },
                ].map(col => (
                  <div key={col.year} className="flex-1 flex flex-col items-center h-full justify-end group">
                    <span className="text-[10px] font-bold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition">{col.count}</span>
                    <div className="w-full bg-gradient-to-t from-[#0B1F3A] to-[#155EEF] rounded-t-lg transition-all duration-300 group-hover:to-[#D6A84F]" style={{ height: col.h }} />
                    <span className="text-[11px] font-medium text-slate-500 mt-2">{col.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Registrations Queue */}
            <div className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[#0B1F3A] text-sm">Recent Registrations Queue</h3>
                <button onClick={() => { setAdminTab('pending'); setStatusFilter('PENDING'); }} className="text-xs font-bold text-[#155EEF] hover:underline">
                  View Full Approval Queue →
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-[#667085] uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-2.5 px-3">Name</th>
                      <th className="py-2.5 px-3">Department</th>
                      <th className="py-2.5 px-3">Batch</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Quick Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {alumniList.slice(0, 5).map(alm => (
                      <tr key={alm.id} className="hover:bg-slate-50/80">
                        <td className="py-3 px-3 font-bold text-[#0B1F3A]">{alm.name}</td>
                        <td className="py-3 px-3 text-[#667085]">{alm.department}</td>
                        <td className="py-3 px-3 font-semibold">{alm.batch}</td>
                        <td className="py-3 px-3"><StatusBadge status={alm.status} /></td>
                        <td className="py-3 px-3 text-right">
                          {alm.status === 'PENDING' ? (
                            <button onClick={() => onApprove(alm.id)} className="px-2.5 py-1 bg-green-600 hover:bg-green-700 text-white rounded font-bold text-[10px]">
                              Approve
                            </button>
                          ) : (
                            <button onClick={() => onSelectAlumni(alm)} className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-[#0B1F3A] rounded font-bold text-[10px]">
                              View
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ALUMNI TABLE */}
        {(adminTab === 'alumni' || adminTab === 'pending') && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B1F3A]">{adminTab === 'pending' ? 'Pending Registrations' : 'Alumni Management'}</h2>
                <p className="text-xs text-[#667085]">Verify credentials, approve cohorts, archive records, and control account states.</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={onExportCSV} className="px-3.5 py-2 border border-[#E4E7EC] bg-white rounded-xl text-xs font-semibold text-[#0B1F3A] hover:bg-slate-50 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" /> CSV
                </button>
                <button onClick={onOpenAddAlumni} className="px-4 py-2 bg-[#155EEF] hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Plus className="w-3.5 h-3.5" /> Add Alumni
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#E4E7EC] shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-5 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search by name, ID, or email..."
                  value={adminSearch}
                  onChange={e => setAdminSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E4E7EC] text-xs focus:outline-none focus:border-[#155EEF]"
                />
              </div>
              <div className="sm:col-span-4">
                <select value={deptFilter} onChange={e => setDeptFilter(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC] text-xs bg-white focus:outline-none">
                  <option value="ALL">All Departments</option>
                  <option value="Computer Science & Engineering">CSE</option>
                  <option value="Electrical & Electronic Engineering">EEE</option>
                  <option value="Business Administration">BBA / Business</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Biotechnology & Genetic Engineering">Biotech</option>
                </select>
              </div>
              <div className="sm:col-span-3">
                <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC] text-xs bg-white focus:outline-none">
                  <option value="ALL">All Statuses</option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="PENDING">PENDING</option>
                  <option value="SUSPENDED">SUSPENDED</option>
                  <option value="ARCHIVED">ARCHIVED</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-[#667085] uppercase tracking-wider text-[10px] border-b border-[#E4E7EC]">
                    <tr>
                      <th className="py-3 px-4">Member Info</th>
                      <th className="py-3 px-4">Student ID</th>
                      <th className="py-3 px-4">Department / Batch</th>
                      <th className="py-3 px-4">Organization & Role</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredAlumni.map(alm => (
                      <tr key={alm.id} className="hover:bg-slate-50/70 transition">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img src={alm.avatar} alt={alm.name} className="w-9 h-9 rounded-xl object-cover border" />
                            <div>
                              <div className="font-bold text-[#0B1F3A] hover:underline cursor-pointer" onClick={() => onSelectAlumni(alm)}>
                                {alm.name}
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono">{alm.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono font-medium text-slate-600">{alm.id}</td>
                        <td className="py-3 px-4">
                          <span className="font-medium text-[#101828] block">{alm.department}</span>
                          <span className="text-[10px] text-slate-500">Batch {alm.batch}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-medium text-[#101828] block">{alm.designation}</span>
                          <span className="text-[10px] text-slate-500">{alm.organization}</span>
                        </td>
                        <td className="py-3 px-4">
                          <StatusBadge status={alm.status} />
                          {alm.passwordResetRequested && (
                            <span className="block text-[9px] text-amber-700 font-bold mt-1">Reset Wanted</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="inline-flex items-center gap-1">
                            {alm.status === 'PENDING' ? (
                              <>
                                <button onClick={() => onApprove(alm.id)} className="px-2.5 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-[10px] flex items-center gap-1">
                                  <UserCheck className="w-3 h-3" /> Approve
                                </button>
                                <button onClick={() => onReject(alm.id)} className="px-2 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-bold text-[10px]">
                                  Reject
                                </button>
                              </>
                            ) : (
                              <>
                                <button onClick={() => onSelectAlumni(alm)} title="View" className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600">
                                  <Eye className="w-3.5 h-3.5" />
                                </button>
                                <button onClick={() => onOpenEditAlumni(alm)} title="Edit details" className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600">
                                  <Edit className="w-3.5 h-3.5" />
                                </button>
                                <button onClick={() => onOpenPasswordModal(alm)} title="Password Security" className="p-1.5 hover:bg-amber-50 rounded-lg text-amber-600">
                                  <Key className="w-3.5 h-3.5" />
                                </button>
                                <button onClick={() => onStatusChange(alm.id, alm.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE')} title="Suspend/Activate" className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600">
                                  <UserX className="w-3.5 h-3.5" />
                                </button>
                                <button onClick={() => onDelete(alm.id)} title="Delete" className="p-1.5 hover:bg-red-100 rounded-lg text-red-600">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* NOTICES MANAGER */}
        {adminTab === 'notices' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B1F3A]">Notices & Circulars Manager</h2>
                <p className="text-xs text-[#667085]">Publish official press releases, voting ballots, and fellowship calls.</p>
              </div>
              <button onClick={onOpenAddNotice} className="px-4 py-2 bg-[#155EEF] hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <Plus className="w-3.5 h-3.5" /> Post New Notice
              </button>
            </div>
            <div className="grid gap-4">
              {noticesList.map(notice => (
                <div key={notice.id} className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-sm flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100">{notice.date}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-[#D6A84F]">{notice.category}</span>
                    </div>
                    <h4 className="font-bold text-[#0B1F3A] text-sm">{notice.title}</h4>
                    <p className="text-xs text-[#667085] mt-1">{notice.summary}</p>
                  </div>
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-lg">PUBLISHED</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EVENTS MANAGER */}
        {adminTab === 'events' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B1F3A]">Events & RSVPs Control</h2>
                <p className="text-xs text-[#667085]">Setup banquets, technical colloquiums, and export attendees rosters.</p>
              </div>
              <button onClick={onOpenAddEvent} className="px-4 py-2 bg-[#155EEF] hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <Plus className="w-3.5 h-3.5" /> Create Event
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {eventsList.map(evt => (
                <div key={evt.id} className="bg-white p-5 rounded-2xl border border-[#E4E7EC] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="font-bold text-[#155EEF]">{evt.formattedDate}</span>
                      <span className="font-semibold text-slate-500">RSVPs: <strong>{evt.registeredCount}</strong> / {evt.maxSeats}</span>
                    </div>
                    <h4 className="font-bold text-[#0B1F3A] text-base mb-1">{evt.title}</h4>
                    <p className="text-xs text-[#667085] line-clamp-2">{evt.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">{evt.id}</span>
                    <button onClick={() => alert(`Exporting RSVP list for: ${evt.title}`)} className="text-xs font-bold text-[#155EEF] hover:underline">
                      Export Attendees Roster
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MESSAGES */}
        {adminTab === 'messages' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0B1F3A]">Contact Inquiries & Secretariat Mail</h2>
              <p className="text-xs text-[#667085]">Live communications received from the public website contact form.</p>
            </div>
            <div className="space-y-4">
              {messagesList.map(msg => (
                <div key={msg.id} className={`p-6 rounded-2xl border transition ${msg.status === 'UNREAD' ? 'bg-blue-50/40 border-blue-200' : 'bg-white border-[#E4E7EC]'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-sm text-[#0B1F3A]">{msg.senderName} ({msg.senderEmail})</h4>
                      <p className="text-xs text-slate-400">{msg.phone} • {msg.date}</p>
                    </div>
                    {msg.status === 'UNREAD' && <span className="text-[10px] font-bold bg-[#155EEF] text-white px-2 py-0.5 rounded-full">NEW</span>}
                  </div>
                  <h5 className="font-bold text-xs text-[#0B1F3A] mb-1">Subject: {msg.subject}</h5>
                  <p className="text-xs text-[#667085] leading-relaxed mb-4 bg-white/70 p-3 rounded-xl border border-slate-100">"{msg.message}"</p>
                  <div className="flex items-center gap-2">
                    {msg.status === 'UNREAD' && (
                      <button onClick={() => onMarkMessageRead(msg.id)} className="px-3 py-1.5 bg-[#155EEF] text-white text-xs font-semibold rounded-lg hover:bg-blue-700">
                        Mark as Handled
                      </button>
                    )}
                    <button onClick={() => onDeleteMessage(msg.id)} className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-600 text-xs font-semibold rounded-lg">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AUDIT LOGS */}
        {adminTab === 'logs' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0B1F3A]">Security & Activity Audit Logs</h2>
              <p className="text-xs text-[#667085]">Chronological record of status changes, verifications, and system events.</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#E4E7EC] shadow-sm divide-y divide-slate-100">
              {activityLogs.map(log => (
                <div key={log.id} className="p-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#155EEF]" />
                    <span className="text-[#0B1F3A] font-medium">{log.text}</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function StatusBadge({ status }) {
  switch (status) {
    case 'ACTIVE':
      return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800">ACTIVE</span>;
    case 'PENDING':
      return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">PENDING</span>;
    case 'SUSPENDED':
      return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-800">SUSPENDED</span>;
    case 'ARCHIVED':
      return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 text-slate-700">ARCHIVED</span>;
    default:
      return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-800">{status}</span>;
  }
}

// -------------------------------------------------------------
// AUTH MODALS
// -------------------------------------------------------------
function AlumniLoginModal({ onClose, onSuccessLogin, alumniList, onRequestReset }) {
  const [email, setEmail] = useState('jahid.islam@cloudtech.org');
  const [password, setPassword] = useState('password123');
  const [isForgotView, setIsForgotView] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const matched = alumniList.find(a => a.email.toLowerCase() === email.toLowerCase());
    if (!matched) {
      setError('No alumni record found with this email.');
      return;
    }
    if (matched.status !== 'ACTIVE') {
      setError(`Your application status is ${matched.status}. Active status required.`);
      return;
    }
    onSuccessLogin(matched);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!resetEmail) return;
    onRequestReset(resetEmail);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 border border-[#E4E7EC] shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#155EEF]" />
            <h3 className="font-extrabold text-[#0B1F3A] text-lg">Alumni Portal Login</h3>
          </div>
          <button onClick={onClose}><X className="w-5 h-5 text-slate-400" /></button>
        </div>

        {error && <div className="mb-3 p-2.5 rounded-xl bg-red-50 text-red-700 text-xs font-semibold">{error}</div>}

        {!isForgotView ? (
          <form onSubmit={handleLogin} className="space-y-3 text-xs">
            <div>
              <label className="block font-bold mb-1">Email Address</label>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-bold">Password</label>
                <button type="button" onClick={() => setIsForgotView(true)} className="text-[#155EEF] hover:underline">Forgot password?</button>
              </div>
              <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
            </div>
            <button type="submit" className="w-full py-2.5 bg-[#155EEF] hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm">
              Sign In to Portal
            </button>
          </form>
        ) : (
          <form onSubmit={handleForgotSubmit} className="space-y-3 text-xs">
            <p className="text-slate-600">Enter your registered email. The admin will verify and grant password reset access.</p>
            <div>
              <label className="block font-bold mb-1">Registered Email</label>
              <input required type="email" value={resetEmail} onChange={e => setResetEmail(e.target.value)} placeholder="name@domain.com" className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
            </div>
            <button type="submit" className="w-full py-2 bg-[#D6A84F] text-[#0B1F3A] font-bold rounded-xl">Request Admin Reset</button>
            <button type="button" onClick={() => setIsForgotView(false)} className="w-full py-2 text-slate-500 font-semibold">Back to Login</button>
          </form>
        )}
      </div>
    </div>
  );
}

function AdminLoginModal({ onClose, onSuccessLogin }) {
  const [adminEmail, setAdminEmail] = useState('admin@institute.edu.bd');
  const [adminPass, setAdminPass] = useState('admin123');

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    onSuccessLogin();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 border border-[#E4E7EC] shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#D6A84F]" />
            <h3 className="font-extrabold text-[#0B1F3A] text-lg">Admin Secretariat Login</h3>
          </div>
          <button onClick={onClose}><X className="w-5 h-5 text-slate-400" /></button>
        </div>
        <form onSubmit={handleAdminSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-bold mb-1">Administrative Email</label>
            <input required type="email" value={adminEmail} onChange={e => setAdminEmail(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
          </div>
          <div>
            <label className="block font-bold mb-1">Secretariat Password</label>
            <input required type="password" value={adminPass} onChange={e => setAdminPass(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
          </div>
          <button type="submit" className="w-full py-2.5 bg-[#0B1F3A] hover:bg-[#155EEF] text-white font-bold rounded-xl shadow-sm">
            Authenticate Administrator
          </button>
        </form>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// CRUD & DETAILS MODALS
// -------------------------------------------------------------
function EditAlumniModal({ alumni, onClose, onSave }) {
  const [formData, setFormData] = useState({ ...alumni });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 border border-[#E4E7EC] shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-extrabold text-[#0B1F3A] text-lg">Edit Alumni & Academic Record</h3>
          <button onClick={onClose}><X className="w-5 h-5 text-slate-400" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-bold mb-1">Full Legal Name</label>
            <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 rounded-xl border" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold mb-1">Email</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 py-2 rounded-xl border" />
            </div>
            <div>
              <label className="block font-bold mb-1">Phone</label>
              <input type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full px-3 py-2 rounded-xl border" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold mb-1">Department</label>
              <input type="text" value={formData.department} onChange={e => setFormData({ ...formData, department: e.target.value })} className="w-full px-3 py-2 rounded-xl border" />
            </div>
            <div>
              <label className="block font-bold mb-1">Batch</label>
              <input type="text" value={formData.batch} onChange={e => setFormData({ ...formData, batch: e.target.value })} className="w-full px-3 py-2 rounded-xl border" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold mb-1">Current Organization</label>
              <input type="text" value={formData.organization} onChange={e => setFormData({ ...formData, organization: e.target.value })} className="w-full px-3 py-2 rounded-xl border" />
            </div>
            <div>
              <label className="block font-bold mb-1">Designation / Role</label>
              <input type="text" value={formData.designation} onChange={e => setFormData({ ...formData, designation: e.target.value })} className="w-full px-3 py-2 rounded-xl border" />
            </div>
          </div>
          <div>
            <label className="block font-bold mb-1">Account Lifecycle Status</label>
            <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} className="w-full px-3 py-2 rounded-xl border bg-white">
              <option value="ACTIVE">ACTIVE</option>
              <option value="PENDING">PENDING</option>
              <option value="SUSPENDED">SUSPENDED</option>
              <option value="ARCHIVED">ARCHIVED</option>
            </select>
          </div>
          <div className="pt-4 flex justify-end gap-2 border-t">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-[#155EEF] text-white font-bold">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AdminPasswordManagementModal({ alumni, onClose, onSavePassword }) {
  const [newPassword, setNewPassword] = useState('');
  const [allowSelfReset, setAllowSelfReset] = useState(alumni.allowSelfPasswordReset || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword) return;
    onSavePassword(alumni.id, newPassword, allowSelfReset);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 border shadow-2xl">
        <h3 className="font-extrabold text-[#0B1F3A] text-lg mb-2">Password Security Management</h3>
        <p className="text-xs text-slate-500 mb-4">Set a replacement password for <strong>{alumni.name}</strong> or permit self-reset.</p>
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold mb-1">Set New Password</label>
            <input required type="text" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Type new secure password" className="w-full px-3 py-2 rounded-xl border font-mono" />
          </div>
          <div className="p-3 bg-slate-50 border rounded-xl flex items-center justify-between">
            <div>
              <span className="font-bold block">Allow Self-Password Reset</span>
              <span className="text-[10px] text-slate-500">Student can reset password without admin call.</span>
            </div>
            <input type="checkbox" checked={allowSelfReset} onChange={e => setAllowSelfReset(e.target.checked)} className="w-4 h-4 accent-[#155EEF]" />
          </div>
          <div className="pt-3 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-[#0B1F3A] text-white font-bold">Update Security</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AlumniDetailModal({ alumni, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#E4E7EC] shadow-2xl relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-black">
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-4 mb-4">
          <img src={alumni.avatar} alt={alumni.name} className="w-16 h-16 rounded-2xl object-cover" />
          <div>
            <h3 className="font-extrabold text-[#0B1F3A] text-lg">{alumni.name}</h3>
            <p className="text-xs text-[#155EEF] font-semibold">{alumni.department} • Batch {alumni.batch}</p>
          </div>
        </div>
        <p className="text-xs text-[#667085] leading-relaxed mb-4">{alumni.bio}</p>
        <div className="text-xs space-y-1.5 border-t pt-3">
          <div><strong>Role:</strong> {alumni.designation} at {alumni.organization}</div>
          <div><strong>Location:</strong> {alumni.workLocation}</div>
          <div><strong>Email:</strong> {alumni.email}</div>
          <div><strong>Status:</strong> <StatusBadge status={alumni.status} /></div>
        </div>
      </div>
    </div>
  );
}

function AddAlumniAdminModal({ onClose, onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('Computer Science & Engineering');
  const [batch, setBatch] = useState('2024');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onAdd({
      id: `ALM-${Math.floor(10000 + Math.random() * 90000)}`,
      name,
      email,
      phone: '+880 1700-112233',
      department: dept,
      batch,
      designation: 'Professional',
      organization: 'Institute Graduate',
      workLocation: 'Dhaka',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      status: 'ACTIVE',
      privacyHideContact: false,
      bio: 'Directly added by admin.'
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#E4E7EC] shadow-2xl">
        <h3 className="font-extrabold text-[#0B1F3A] text-lg mb-4">Add Verified Alumni</h3>
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-bold mb-1">Full Name</label>
            <input required type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
          </div>
          <div>
            <label className="block font-bold mb-1">Email</label>
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-bold mb-1">Department</label>
              <input type="text" value={dept} onChange={e => setDept(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
            </div>
            <div>
              <label className="block font-bold mb-1">Batch</label>
              <input type="text" value={batch} onChange={e => setBatch(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
            </div>
          </div>
          <div className="pt-4 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-[#155EEF] text-white font-bold">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AddNoticeModal({ onClose, onAdd }) {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !summary) return;
    onAdd({
      id: `NTC-${Math.floor(100 + Math.random() * 900)}`,
      title,
      date: '24 SEP 2026',
      category: 'Announcement',
      priority: 'NORMAL',
      summary,
      documentUrl: '#'
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#E4E7EC] shadow-2xl">
        <h3 className="font-extrabold text-[#0B1F3A] text-lg mb-4">Post Notice</h3>
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-bold mb-1">Title</label>
            <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
          </div>
          <div>
            <label className="block font-bold mb-1">Summary</label>
            <textarea required rows={3} value={summary} onChange={e => setSummary(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
          </div>
          <div className="pt-4 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-[#155EEF] text-white font-bold">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AddEventModal({ onClose, onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({
      id: `EVT-${Math.floor(100 + Math.random() * 900)}`,
      title,
      date: '2026-11-20',
      formattedDate: '20 November 2026',
      time: '06:00 PM',
      location: 'Institute Auditorium',
      category: 'Reunion',
      banner: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=900',
      description: 'Campus alumni gathering and dinner.',
      maxSeats: 500,
      registeredCount: 0,
      registrationDeadline: '2026-11-15',
      isRegisteredByMe: false
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#E4E7EC] shadow-2xl">
        <h3 className="font-extrabold text-[#0B1F3A] text-lg mb-4">Create Event</h3>
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-bold mb-1">Title</label>
            <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-[#E4E7EC]" />
          </div>
          <div className="pt-4 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-[#155EEF] text-white font-bold">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}