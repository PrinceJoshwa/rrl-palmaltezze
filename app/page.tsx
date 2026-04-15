
// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { motion, AnimatePresence, Variants } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import Image from "next/image"
// import Link from "next/link"
// import {
//   Phone, Building2, Leaf, Users, Zap, Train, Hospital, BookOpen,
//   ShoppingCart, Award, Mail, MapPin, ChevronDown, X, Wind, Footprints,
//   Waves, Music, Dumbbell, MonitorPlay, Landmark, Sun, ShieldCheck,
//   LayoutDashboard, Trees, Coffee, Table2, Construction, Download,
//   Maximize2, Lock, Unlock, ArrowLeft, ArrowRight, Star, Utensils, Gamepad2, Tv, Flower2, Briefcase,
//   TrendingUp, Key, Glasses, Frame, BrickWall, DoorOpen, AppWindow, Layers,
//   Bath, Wrench, PaintRoller, ArrowUpFromLine, BatteryCharging, Droplets,
//   CheckCircle, User, Smartphone, Calendar, Loader2
// } from "lucide-react"
// import { useForm, ValidationError } from '@formspree/react'

// import TowerBrochureModal from "@/components/TowerBrochureModal"
// import BrochureCTAModal from "@/components/BrochureCTAModal"

// // --- Shared Data ---
// type FormData = { name: string; email: string; phone: string; message?: string }

// const floorPlansData = [
//   { id: "01", type: "2BHK", facing: "North", area: 1265, dims: { living: "17'9\" x 11'6\"", dining: "8'6\" x 8'0\"", masterBed: "13'0\" x 12'0\"", bed2: "12'3\" x 11'6\"", kitchen: "8'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203915.png" },
//   { id: "02", type: "3BHK", facing: "North", area: 1495, dims: { living: "16'0\" x 12'0\"", dining: "8'6\" x 12'9\"", masterBed: "13'0\" x 12'0\"", bed2: "12'6\" x 12'0\"", bed3: "11'6\" x 12'0\"", kitchen: "11'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203938.png" },
//   { id: "03", type: "3BHK", facing: "North", area: 1630, dims: { living: "17'9\" x 12'0\"", dining: "8'6\" x 11'0\"", masterBed: "13'0\" x 11'6\"", bed2: "13'0\" x 11'6\"", bed3: "11'0\" x 11'6\"", kitchen: "9'0\" x 11'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203954.png" },
//   { id: "04", type: "3BHK", facing: "East", area: 1560, dims: { living: "28'0\" x 11'6\"", dining: "Combined w/ Living", masterBed: "12'0\" x 13'0\"", bed2: "11'0\" x 11'6\"", bed3: "12'0\" x 11'6\"", kitchen: "11'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204011.png" },
//   { id: "05", type: "3BHK", facing: "East", area: 1510, dims: { living: "11'6\" x 15'9\"", dining: "8'0\" x 12'9\"", masterBed: "13'0\" x 13'0\"", bed2: "11'0\" x 11'0\"", bed3: "10'3\" x 11'0\"", kitchen: "9'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204025.png" }
// ];

// const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };
// const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// export default function Home() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const router = useRouter()

//   const handleFormSubmit = async (data: FormData, formId: string): Promise<boolean> => {
//     // Merged the project name into the Formspree payload to retain the data previously sent to the PHP API
//     const formspreeData = { ...data, project: 'RRL Palm Altezze' };
    
//     try {
//       const response = await fetch(`https://formspree.io/f/${formId}`, { 
//         method: "POST", 
//         body: JSON.stringify(formspreeData), 
//         headers: { "Content-Type": "application/json", Accept: "application/json" } 
//       })
//       if (response.ok) { router.push("/c4/thankyou"); return true; } 
//       else { alert("Oops! There was a problem submitting your form. Please try again."); return false; }
//     } catch (error) { alert("An error occurred. Please check your connection and try again."); return false; }
//   }

//   const AnimatedCounter = ({ start = 0, end, duration = 2000, suffix = "", separator = false }: { start?: number; end: number; duration?: number; suffix?: string; separator?: boolean; }) => {
//     const [count, setCount] = useState(start)
//     useEffect(() => {
//       let startTime: number | null = null;
//       const step = (timestamp: number) => {
//         if (!startTime) startTime = timestamp;
//         const progress = Math.min((timestamp - startTime) / duration, 1);
//         setCount(Math.floor(start + (end - start) * progress));
//         if (progress < 1) window.requestAnimationFrame(step);
//       };
//       window.requestAnimationFrame(step);
//     }, [start, end, duration]);
//     return <span>{separator ? count.toLocaleString() : count}{suffix}</span>
//   }

//   return (
//     <main className="w-full overflow-x-hidden bg-[#FFFFFF] min-h-screen text-[#0A192F] font-sans selection:bg-[#D4AF37] selection:text-white">
      
//       {/* --- ELEGANT STICKY NAV --- */}
//       <header className="fixed top-0 w-full z-50 bg-[#0A192F]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
//         <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
//             <span className="text-xl font-serif text-white tracking-[0.2em] uppercase">Palm Altezze</span>
//           </div>
//           <div className="flex items-center gap-8">
//             <a href="tel:+918494966966" className="hidden md:flex items-center gap-2 text-sm text-white/80 hover:text-[#D4AF37] transition-colors">
//               <Phone className="w-4 h-4" /> 84 94 966 966
//             </a>
//             <Button onClick={() => setIsModalOpen(true)} className="bg-[#D4AF37] hover:bg-white text-[#0A192F] px-6 py-2 h-auto rounded-none text-xs font-bold uppercase tracking-widest transition-colors">
//               Cost Sheet
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* --- EDITORIAL HERO SECTION --- */}
// <section className="relative w-full min-h-screen bg-[#0A192F] flex items-center pt-20 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           {/* Desktop Image */}
//           <motion.img 
//             initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: "easeOut" }}
//             src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/ok.png" 
//             alt="Hero Desktop" 
//             className="hidden md:block w-full h-full object-fill opacity-40 mix-blend-screen" 
//           />
//           {/* Mobile Image */}
//           <motion.img 
//             initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: "easeOut" }}
//             src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20mobile%20banners%20(400%20x%20300%20px)/palm-altezze%20(1).png" 
//             alt="Hero Mobile" 
//             className="block md:hidden w-full h-full object-fill opacity-40 mix-blend-screen" 
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
//         </div>

//         <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 pb-16 lg:pb-0">
//           <motion.div className="flex-1 space-y-8 mt-12 lg:mt-0" initial="hidden" animate="visible" variants={staggerContainer}>
//             <motion.div variants={fadeUp} className="flex items-center gap-4">
//               <div className="h-[1px] w-12 bg-[#D4AF37]" />
//               <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Possession: Mid 2027</span>
//             </motion.div>
//             <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-serif text-white leading-[1.05]">
//               A Lifestyle <br />
//               <span className="text-[#D4AF37] italic font-light">Stands Tall.</span>
//             </motion.h1>
//             <motion.p variants={fadeUp} className="text-base md:text-xl text-white/70 font-light max-w-lg leading-relaxed">
//               Premium 2 & 3 BHK Apartments in Varthur. Experiencing Mivan Technology and a 16,000 Sq.ft Clubhouse.
//               <br /><span className="text-[10px] md:text-xs opacity-50 mt-4 block tracking-widest">RERA: PRM/KA/RERA/1251/308/PR/141025/008167</span>
//             </motion.p>
            
//             <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-8 border-t border-white/10">
//               {[ 
//                 { v: 50, l: "UDS Share", s: "%" }, 
//                 { v: 92, l: "Open Space", s: "%" }, 
//                 { v: 70, l: "Carpet Area", s: "%" }, 
//                 { v: 5, l: "Units/Floor", s: "" }, 
//                 { v: 16000, l: "Sq.ft Club", s: "", sep: true } 
//               ].map((stat, i) => (
//                 <div key={i}>
//                   <p className="text-2xl md:text-3xl font-light text-white"><AnimatedCounter end={stat.v} suffix={stat.s} separator={stat.sep} /></p>
//                   <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest mt-1">{stat.l}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="w-full max-w-md">
//             <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
//               <div className="absolute top-0 right-0 w-2 h-2 bg-[#D4AF37] m-4" />
//               <h3 className="text-2xl font-serif text-white mb-2">Enquire Now</h3>
//               <p className="text-white/50 text-xs tracking-widest uppercase mb-8">Priority Site Visit</p>
              
//               <form onSubmit={async (e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string }, "xldarjon"); e.currentTarget.reset(); }} className="space-y-6">
//                 <div className="relative">
//                   <input name="name" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Name" />
//                   <label className="absolute left-0 -top-3.5 text-[#D4AF37] text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Your Name</label>
//                 </div>
//                 <div className="relative">
//                   <input name="phone" type="tel" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Phone" />
//                   <label className="absolute left-0 -top-3.5 text-[#D4AF37] text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Mobile Number</label>
//                 </div>
//                 <div className="relative">
//                   <input name="email" type="email" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Email" />
//                   <label className="absolute left-0 -top-3.5 text-[#D4AF37] text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Email Address</label>
//                 </div>
//                 <Button type="submit" className="w-full bg-white hover:bg-[#D4AF37] text-[#0A192F] font-bold h-14 rounded-none uppercase tracking-widest text-sm mt-4 transition-colors">
//                   Request Call Back
//                 </Button>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- ELEGANT TOWER SHOWCASE --- */}
//       <section className="py-16 md:py-32 bg-[#FFFFFF]">
//         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
//               <div className="absolute -inset-4 border border-[#0A192F]/10 translate-x-4 translate-y-4" />
//               <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/WhatsApp%20Image%202025-12-01%20at%2010.21.07%20AM%20(1).jpeg" alt="Tower" className="w-full h-full object-fill relative z-10 shadow-2xl" />
//               <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-[#0A192F] p-6 md:p-8 text-white z-20 shadow-xl">
//                 <p className="text-xs text-[#D4AF37] tracking-widest uppercase mb-2">Structure</p>
//                 <p className="text-3xl md:text-4xl font-serif">23 Floors</p>
//               </div>
//             </motion.div>
            
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8 mt-8 lg:mt-0">
//               <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-serif text-[#0A192F] leading-tight">
//                 An Iconic <br /><span className="italic font-light text-[#D4AF37]">Landmark.</span>
//               </motion.h2>
//               <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-lg">
//                 Rising majestically above Varthur, Palm Altezze is more than just a residence; it's a statement of prestige. A masterpiece of modern engineering and sophisticated design.
//               </motion.p>
//               <motion.div variants={fadeUp} className="pt-4 md:pt-8">
//                 <Button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto bg-transparent border border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs transition-colors">
//                   <Download className="w-4 h-4 mr-2" /> Download Brochure
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROJECT AT A GLANCE (MINIMALIST GRID) --- */}
//       <section className="py-16 md:py-24 bg-[#F8F9FA] border-y border-gray-200">
//         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-8">
//             <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F]">Project <br/><span className="text-[#D4AF37] italic">At A Glance.</span></h2>
//             <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500">RERA & BMRDA Approved <br/> Off Varthur Road</p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12">
//             {[ { l: "Land Extent", v: "1.38 Acres" }, { l: "Structure", v: "B+G+23 Floors" }, { l: "Total Units", v: "115 Units" }, { l: "Configuration", v: "2 & 3 BHK" }, { l: "Size Range", v: "1265-1630 Sft" }, { l: "Technology", v: "Mivan Build" } ].map((item, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-l border-[#D4AF37] pl-4">
//                 <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 md:mb-2">{item.l}</p>
//                 <p className="text-base md:text-lg font-serif text-[#0A192F]">{item.v}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- ARCHITECTURE & VR (DEEP NAVY THEME) --- */}
//       <section className="py-16 md:py-32 bg-[#0A192F] text-white">
//         <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-16 md:space-y-32">
          
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8 order-2 lg:order-1">
//               <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-serif leading-tight">Architecture <br/><span className="italic text-[#D4AF37] font-light">Reimagined.</span></motion.h2>
//               <motion.p variants={fadeUp} className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-lg">
//                 Built for the Future. At RRL Palm Altezze, we combine high-tech Mivan Engineering with eco-friendly Solar Power and EV Charging. Located in the heart of the Silicon Triangle.
//               </motion.p>
//               <motion.div variants={fadeUp} className="border-l border-[#D4AF37] pl-6 py-2">
//                 <p className="text-xs md:text-sm font-bold tracking-widest uppercase">A world crafted for the art of living well.</p>
//               </motion.div>
//             </motion.div>
//             <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative aspect-[4/3] w-full order-1 lg:order-2">
//               <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/PALM%20ALTEZZE%202%20ok.png" alt="Architecture" className="w-full h-full object-fill shadow-2xl" />
//             </motion.div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
//                <div className="absolute inset-0 bg-[#D4AF37]/20 translate-x-4 -translate-y-4" />
//                <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Visualize%20Your%20Home%20Virtually%202.png" alt="VR" className="w-full h-full object-fill relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
//             </motion.div>
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6 md:space-y-8">
//               <motion.div variants={fadeUp} className="flex items-center gap-4 mt-8 lg:mt-0">
//                 <Glasses className="w-6 h-6 text-[#D4AF37]" />
//                 <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Immersive Experience</span>
//               </motion.div>
//               <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif leading-tight">Visualize Your <br/><span className="italic font-light">Home Virtually.</span></motion.h2>
//               <motion.p variants={fadeUp} className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-lg">
//                 Experience living in your next home before you buy. Book a session to explore our properties in immersive VR.
//               </motion.p>
//               <motion.div variants={fadeUp} className="pt-4 md:pt-8">
//                 {/* VR Formspree Form */}
//                 <form onSubmit={async (e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string }, "xkgkyavn"); setTimeout(() => window.location.href = "/vr-tour", 1000); }} className="flex flex-col sm:flex-row gap-4 max-w-lg">
//                   <input type="tel" name="phone" required placeholder="Enter Mobile Number" className="flex-1 bg-transparent border-b border-white/30 text-white placeholder-white/40 focus:border-[#D4AF37] outline-none px-2 py-3 md:py-0 font-light" />
//                   <input type="hidden" name="name" value="VR Request" /><input type="hidden" name="email" value="vr@request.com" />
//                   <Button type="submit" className="bg-[#D4AF37] text-[#0A192F] hover:bg-white rounded-none px-8 py-6 md:py-0 uppercase tracking-widest text-xs font-bold transition-colors">Book Now</Button>
//                 </form>
//               </motion.div>
//             </motion.div>
//           </div>

//         </div>
//       </section>

//       {/* --- SOLAR, USP & HEALTHY LIVING --- */}
//       <section className="py-16 md:py-32 bg-[#FFFFFF]">
//         <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-16 md:space-y-32">
          
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
//               <motion.div variants={fadeUp} className="flex items-center gap-4 text-[#0A192F]">
//                 <Sun className="w-5 h-5 text-[#D4AF37]" />
//                 <span className="text-xs font-bold uppercase tracking-[0.2em]">Sustainability</span>
//               </motion.div>
//               <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-[#0A192F]">Power Up <br/>With <span className="italic text-[#D4AF37] font-light">Solar.</span></motion.h2>
//               <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-500 font-light max-w-md">Solar lights for common areas — reducing your current bill every month while protecting the environment.</motion.p>
//             </motion.div>
//             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[250px] md:h-[400px] overflow-hidden">
//                <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Power.png" alt="Solar" className="w-full h-full object-fill object-center grayscale hover:grayscale-0 transition-all duration-700" />
//             </motion.div>
//           </div>

//           <div>
//             <div className="mb-10 md:mb-16">
//               <h2 className="text-3xl font-serif text-[#0A192F] mb-4">Why Choose <span className="italic text-[#D4AF37]">Palm Altezze?</span></h2>
//               <div className="h-[1px] w-full bg-gray-200" />
//             </div>
//             <div className="grid md:grid-cols-3 gap-12">
//                {[
//                 { icon: Construction, title: "Mivan Technology", items: [{ i: ShieldCheck, t: "Strong Monolithic Structures" }, { i: ShieldCheck, t: "Leak-proof walls" }, { i: ShieldCheck, t: "Earthquake Resistant" }] },
//                 { icon: Sun, title: "Solar Powered", items: [{ i: Zap, t: "Solar lighting (Common Areas)" }, { i: Zap, t: "Reduced maintenance" }, { i: Zap, t: "Eco-friendly Energy" }] },
//                 { icon: Landmark, title: "50% UDS", items: [{ i: Award, t: "True 50% Undivided Share" }, { i: Award, t: "Higher appreciation" }, { i: Award, t: "Rare in Bangalore" }] }
//               ].map((usp, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
//                   <usp.icon className="w-10 h-10 text-[#D4AF37] mb-6" strokeWidth={1} />
//                   <h3 className="text-xl font-serif text-[#0A192F] mb-6">{usp.title}</h3>
//                   <ul className="space-y-4 text-sm text-gray-500 font-light">
//                     {usp.items.map((item, idx) => <li key={idx} className="flex items-center gap-3"><item.i className="w-4 h-4 text-[#D4AF37]" /> {item.t}</li>)}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-16 border-t border-gray-200">
//              <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} className="order-2 lg:order-1 relative aspect-[4/5] md:aspect-square">
//                 <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Step%20Into%20Healthy%20Living.png" alt="Healthy" className="w-full h-full object-fill" />
//              </motion.div>
//              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 lg:order-2 space-y-8 md:space-y-12">
//                <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-[#0A192F]">Step Into <br/><span className="italic text-[#D4AF37] font-light">Healthy Living.</span></motion.h2>
//                <motion.p variants={fadeUp} className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400">At RRL Palm Altezze, you don't just get a home — you get a lifestyle.</motion.p>
//                <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-8">
//                  <div className="border-t border-[#0A192F] pt-6">
//                    <Wind className="w-6 h-6 text-[#D4AF37] mb-4" strokeWidth={1.5} />
//                    <p className="text-sm uppercase tracking-widest font-bold text-[#0A192F]">Fresh Air & <br/>Green Surroundings</p>
//                  </div>
//                  <div className="border-t border-[#0A192F] pt-6">
//                    <Footprints className="w-6 h-6 text-[#D4AF37] mb-4" strokeWidth={1.5} />
//                    <p className="text-sm uppercase tracking-widest font-bold text-[#0A192F]">Safe, Well-Lit <br/>Track For All Ages</p>
//                  </div>
//                </motion.div>
//              </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* --- MASTERFULLY PLANNED (FLOOR PLANS - NAVY THEME) --- */}
//       <section className="py-16 md:py-32 bg-[#0A192F] text-white" id="floorplans">
//         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
//             <div className="max-w-xl">
//               <h2 className="text-4xl md:text-6xl font-serif mb-6">Masterfully <span className="italic text-[#D4AF37] font-light">Planned.</span></h2>
//               <p className="text-white/60 font-light leading-relaxed">115 Units | 5 Units Per Floor | Choose from our range of 5 distinct unit layouts designed for absolute spatial efficiency.</p>
//             </div>
//             <div className="flex gap-4">
//               <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2" />
//               <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 max-w-[150px]">Explore the blueprints below</p>
//             </div>
//           </div>

//           <div className="border-t border-white/20">
//             {floorPlansData.map((plan, i) => {
//               const [isOpen, setIsOpen] = useState(false);
//               const [isUnlocked, setIsUnlocked] = useState(false);

//               return (
//                 <div key={plan.id} className="border-b border-white/10">
//                   <div className="py-6 md:py-8 flex flex-wrap items-center justify-between cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
//                     <div className="flex items-center gap-4 md:gap-16 w-full md:w-auto">
//                       <span className="text-xl md:text-2xl font-serif text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">{plan.id}</span>
//                       <h3 className="text-2xl md:text-4xl font-serif text-white">{plan.type}</h3>
//                       <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">{plan.facing} Facing</span>
//                     </div>
//                     <div className="flex items-center gap-4 md:gap-8 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
//                       <div className="text-right">
//                         <span className="text-xl md:text-3xl font-light">{plan.area}</span>
//                         <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] ml-2">Sq.Ft</span>
//                       </div>
//                       <ChevronDown className={`w-6 h-6 text-white/50 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
//                     </div>
//                   </div>

//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
//                         <div className="py-6 md:py-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
//                           <div className="space-y-6">
//                             <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Room Dimensions</p>
//                             <div className="grid grid-cols-2 gap-y-6 md:gap-y-8 gap-x-4 text-xs md:text-sm font-light">
//                               <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Facing</p><p>{plan.facing}</p></div>
//                               <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Living</p><p>{plan.dims.living}</p></div>
//                               {plan.dims.dining && <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Dining</p><p>{plan.dims.dining}</p></div>}
//                               <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Master Bed</p><p>{plan.dims.masterBed}</p></div>
//                               {plan.dims.bed2 && <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Bedroom 2</p><p>{plan.dims.bed2}</p></div>}
//                               {plan.dims.bed3 && <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Bedroom 3</p><p>{plan.dims.bed3}</p></div>}
//                               <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Kitchen</p><p>{plan.dims.kitchen}</p></div>
//                             </div>
//                           </div>
                          
//                           <div className="relative aspect-video bg-white/5 p-4 flex items-center justify-center">
//                             <img src={plan.image} alt="Plan" className={`max-h-full max-w-full object-contain transition-all duration-1000 ${isUnlocked ? 'blur-0' : 'blur-xl opacity-30 grayscale'}`} />
                            
//                             {!isUnlocked ? (
//                               <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 bg-[#0A192F]/60 backdrop-blur-md text-center">
//                                 <Lock className="w-6 h-6 text-[#D4AF37] mb-4 md:mb-6" />
//                                 <form onSubmit={(e) => { e.preventDefault(); setIsUnlocked(true); }} className="w-full max-w-xs space-y-4">
//                                   <input required name="name" placeholder="Name" className="w-full bg-transparent border-b border-white/30 py-2 text-center text-sm focus:border-[#D4AF37] outline-none placeholder-white/50" />
//                                   <input required name="phone" type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-white/30 py-2 text-center text-sm focus:border-[#D4AF37] outline-none placeholder-white/50" />
//                                   <Button type="submit" className="w-full bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] rounded-none text-xs uppercase tracking-widest mt-4">Unlock Blueprint</Button>
//                                 </form>
//                               </div>
//                             ) : (
//                               <div className="absolute bottom-4 right-4">
//                                 <a href="https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Palm%20Altezze%20Brochure_compressed.pdf?ik-attachment=true" download="Palm_Altezze_Brochure.pdf">
//                                   <Button variant="outline" className="border-white/20 bg-[#0A192F]/80 backdrop-blur text-xs uppercase tracking-widest rounded-none hover:bg-white hover:text-[#0A192F]">Download PDF</Button>
//                                 </a>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* --- AMENITIES (RESTORED INTERACTIVE TABS) --- */}
//       <section className="py-16 md:py-32 bg-[#0A192F]">
//         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
//           <motion.div className="text-center mb-10 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
//              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-4">30+ World-Class Amenities</p>
//              <h2 className="text-4xl md:text-5xl font-serif text-white">The Club <span className="italic font-light">Altezze.</span></h2>
//              <p className="text-sm md:text-base text-white/60 font-light mt-4 md:mt-6 max-w-xl mx-auto leading-relaxed">A sprawling 16,000 Sq.ft sanctuary where leisure meets lifestyle, spread across ground, 1st, and 2nd floors.</p>
//           </motion.div>

//           <Tabs defaultValue="clubhouse" className="w-full">
//             <div className="flex justify-center mb-10 md:mb-16 w-full">
//               <TabsList className="bg-white/5 p-1.5 rounded-2xl md:rounded-full border border-white/10 backdrop-blur-md flex flex-col md:flex-row h-auto w-full md:w-auto gap-2 md:gap-0">
//                 <TabsTrigger value="clubhouse" className="w-full md:w-auto rounded-xl md:rounded-full px-4 md:px-8 py-3 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0A192F] text-white/50 transition-all font-bold tracking-widest uppercase text-[10px] md:text-xs">
//                   Clubhouse (16,000 Sft)
//                 </TabsTrigger>
//                 <TabsTrigger value="outdoor" className="w-full md:w-auto rounded-xl md:rounded-full px-4 md:px-8 py-3 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0A192F] text-white/50 transition-all font-bold tracking-widest uppercase text-[10px] md:text-xs">
//                   Outdoor & Recreational
//                 </TabsTrigger>
//               </TabsList>
//             </div>

//             <TabsContent value="clubhouse">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
//                 {[
//                   { icon: LayoutDashboard, label: "Reception Hall" }, { icon: BookOpen, label: "Reading Lounge" },
//                   { icon: Gamepad2, label: "Indoor Games" }, { icon: Users, label: "Kids Play Area" },
//                   { icon: Leaf, label: "Meditation Hall" }, { icon: Coffee, label: "Lounge Area" },
//                   { icon: Music, label: "Party Hall" }, { icon: Utensils, label: "Dining Area" },
//                   { icon: Dumbbell, label: "Ultra Gym" }, { icon: Wind, label: "Steam & Sauna" },
//                   { icon: Footprints, label: "Cardio Room" }, { icon: MonitorPlay, label: "Mini Theatre" },
//                   { icon: Table2, label: "Billiards Table" }, { icon: Table2, label: "Table Tennis" },
//                   { icon: Users, label: "Association Room" }, { icon: Tv, label: "Guest Rooms" }
//                 ].map((item, i) => (
//                   <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 bg-white/5 border border-white/10 p-4 rounded-none hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-default">
//                     <div className="hidden md:block w-1.5 h-1.5 bg-[#D4AF37] group-hover:scale-150 transition-transform" />
//                     <item.icon className="w-6 h-6 md:w-5 md:h-5 text-white/40 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
//                     <span className="text-xs md:text-sm font-light text-white/80 group-hover:text-white transition-colors">{item.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>
            
//             <TabsContent value="outdoor">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
//                  {[
//                   { icon: Waves, label: "Swimming Pool" }, { icon: Waves, label: "Kids Pool" },
//                   { icon: Waves, label: "Jacuzzi" }, { icon: LayoutDashboard, label: "Multipurpose Court" },
//                   { icon: Footprints, label: "Cricket Pitch" }, { icon: LayoutDashboard, label: "Basketball Court" },
//                   { icon: LayoutDashboard, label: "Throwball Court" }, { icon: Footprints, label: "Skating Rink" },
//                   { icon: Footprints, label: "Jogging Track" }, { icon: Landmark, label: "Amphitheatre" },
//                   { icon: Flower2, label: "Butterfly Garden" }, { icon: Users, label: "Senior Seating" },
//                   { icon: Waves, label: "Fountain" }, { icon: Trees, label: "Planting Deck" },
//                   { icon: LayoutDashboard, label: "Chess Pawn" }, { icon: Footprints, label: "Hopscotch" }
//                 ].map((item, i) => (
//                   <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 bg-white/5 border border-white/10 p-4 rounded-none hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-default">
//                     <div className="hidden md:block w-1.5 h-1.5 bg-[#D4AF37] group-hover:scale-150 transition-transform" />
//                     <item.icon className="w-6 h-6 md:w-5 md:h-5 text-white/40 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
//                     <span className="text-xs md:text-sm font-light text-white/80 group-hover:text-white transition-colors">{item.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* --- SPECIFICATIONS (RESTORED 3 COLUMN WITH FULL 13 ITEMS & ICONS) --- */}
//       <section className="py-16 md:py-32 bg-[#FFFFFF]">
//         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
//           <div className="text-center mb-16 md:mb-24">
//             <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-4">Premium <span className="italic text-[#D4AF37]">Specifications.</span></h2>
//             <div className="w-[1px] h-12 md:h-16 bg-[#D4AF37] mx-auto mt-6 md:mt-8" />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-16 items-start">
//             <div className="space-y-0">
//               {[
//                 { icon: Frame, title: "Framed Structure", desc: "Mivan Constructions" },
//                 { icon: BrickWall, title: "Walls", desc: '8" RCC walls (Concrete walls)' },
//                 { icon: DoorOpen, title: "Doors", desc: "WPC Doors for Main & Internal doors" },
//                 { icon: AppWindow, title: "Window", desc: "UPVC windows with mosquito mesh" },
//                 { icon: Layers, title: "Flooring", desc: "2'x4' vitrified tiles flooring for living, dining, kitchen & bedrooms. 15\"x15\" Anti-skid tiles for balcony." },
//                 { icon: Bath, title: "Toilet", desc: "Kerovit by Kajaria bath fittings. 2'x1' anti skid ceramic tiles. Provision for exhaust fan." },
//                 { icon: Wrench, title: "Plumbing", desc: "Supreme / Ashirvad CPVC CP fittings with Jaguar / Parryware sanitary fittings." }
//               ].map((s, i) => (
//                  <div key={i} className="flex gap-4 md:gap-6 py-6 md:py-8 border-b border-gray-200">
//                   <div className="shrink-0 pt-1"><s.icon className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" strokeWidth={1} /></div>
//                   <div><h4 className="font-serif text-base md:text-lg text-[#0A192F] mb-1 md:mb-2">{s.title}</h4><p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed">{s.desc}</p></div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="relative h-full min-h-[600px] w-full hidden lg:block py-8">
//               <div className="absolute inset-0 bg-[#0A192F] rounded-full blur-[100px] opacity-5"></div>
//               <img src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/generated-image%20(54).png" alt="Premium Apartment Interior" className="relative z-10 w-full h-full object-fill shadow-2xl border border-gray-100" />
//             </div>

//             <div className="space-y-0">
//                {[
//                 { icon: PaintRoller, title: "Painting", desc: "2 Coats of Nippon Putty. One Coat of primer & Two Coats of Nippon Emulsion for internal walls. Nippon Exterior for external." },
//                 { icon: Zap, title: "Electrical", desc: "Concealed Finolex / Anchor copper wiring. Anchor Roma Modular Switches. A/C point in Bedrooms & Geyser with separate circuits." },
//                 { icon: Tv, title: "Communication", desc: "Telephone points in Living & TV point in Living and Master Bedroom." },
//                 { icon: Droplets, title: "Water Supply", desc: "Water supply from bore well with overhead tank." },
//                 { icon: ArrowUpFromLine, title: "Lift", desc: "3 Lifts of fully Automatic with 8 passenger and 1 service lift of KONE / OTIS / Equivalent make." },
//                 { icon: BatteryCharging, title: "Generator", desc: "100% power back-up for each flat, lift, motor & common area lighting." }
//               ].map((s, i) => (
//                  <div key={i} className="flex gap-4 md:gap-6 py-6 md:py-8 border-b border-gray-200 lg:last:border-b-0">
//                   <div className="shrink-0 pt-1"><s.icon className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" strokeWidth={1} /></div>
//                   <div><h4 className="font-serif text-base md:text-lg text-[#0A192F] mb-1 md:mb-2">{s.title}</h4><p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed">{s.desc}</p></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- BROCHURE CTA (FULL BLEED IMAGE) --- */}
//       <section className="relative w-full h-[50vh] md:h-[60vh] bg-[#0A192F] flex items-center justify-center text-center">
//         <div className="absolute inset-0 z-0">
//           <img src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL-palm-altezze-banner2.webp" alt="Brochure Background" className="w-full h-full object-fill opacity-30" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent" />
//         </div>
//         <div className="relative z-10 px-6 max-w-2xl">
//           <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 md:mb-6 tracking-wide">The Complete Overview</h2>
//           <p className="text-sm md:text-base text-white/70 font-light mb-8 md:mb-10">Download the brochure of Palm Altezze & register for exclusive early-access offers.</p>
//           <Button onClick={() => setIsModalOpen(true)} className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] px-8 md:px-10 py-5 md:py-6 rounded-none text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors w-full sm:w-auto">
//             Download Cost Sheet & Brochure
//           </Button>
//         </div>
//       </section>

//       {/* --- REVIEWS (WITH GOOGLE ICON RESTORED) --- */}
//       <section className="py-16 md:py-32 bg-[#0A192F] text-white overflow-hidden">
//          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
//            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8 border-b border-white/10 pb-8">
//              <h2 className="text-4xl md:text-5xl font-serif">Client <span className="italic text-[#D4AF37] font-light">Testimonials.</span></h2>
             
//              {/* RESTORED GOOGLE REVIEWS BADGE */}
//              <div className="flex flex-col items-start md:items-end">
//                <div className="flex items-center gap-2 mb-2 bg-white px-4 py-2 rounded-full shadow-sm">
//                  <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
//                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
//                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
//                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
//                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
//                  </svg>
//                  <span className="text-[10px] font-bold text-[#0A192F] uppercase tracking-widest">Google Reviews</span>
//                </div>
//                <div className="flex gap-1 justify-start md:justify-end">{[1,2,3,4,5].map(i=><Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />)}</div>
//                <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">5.0 Average</p>
//              </div>
//            </div>

//            <div className="grid md:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-20">
//              {[
//                { type: "text", name: "Anusha V", loc: "RRL Palacio", text: "After doing lot of research I purchased a flat in RRL Palacio. My kid loves the society! I like their gym, movie theater and rooftop pool." },
//                { type: "text", name: "Rahil R", loc: "RRL Palacio", text: "Spacious and well-designed apartments. Friendly staff, great amenities like clubhouse, gym, pool, and sports courts. Pet-friendly and perfect for families. Highly recommended!" },
//                { type: "video", url: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1" },
//                { type: "text", name: "Chaitanya S", loc: "RRL Palacio", text: "Good builder & team. Value for money. Well planned & organised. Shout out to Kavya - she works tirelessly to accommodate customers. They won best amenities award!" },
//                { type: "text", name: "Nagarajan K", loc: "RRL Palacio", text: "The marketing team was very supportive with documents and responded to all queries on time. Premium amenities at an affordable price point in this neighborhood." },
//                { type: "video", url: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1" },
//                { type: "text", name: "Kishore Babu", loc: "RRL Palm Altezze", text: "Structure quality is very good, very good atmosphere with all around Greenery and spacious balcony view. Great amenities like home theater, steam & sauna, gym... Best choice for anyone!" },
//                { type: "text", name: "Prabhakaran S", loc: "RRL Palm Altezze", text: "This location is rarely available at such a good price, especially including interiors. Construction quality is very good. Marketing Manager Kavya is very professional." },
//                { type: "text", name: "Sagar Mana", loc: "RRL Palm Altezze", text: "Nice apartment, Premium flat with no common wall, future strategic location. Many new companies are setting up their offices, units, R&D Centers including manufacturing firms." }
//              ].map((item, i) => (
//                <div key={i} className="flex flex-col">
//                  {item.type === "text" ? (
//                    <>
//                      <div className="mb-6"><span className="text-6xl font-serif text-[#D4AF37] leading-none opacity-50">"</span><p className="text-sm md:text-base text-white/80 font-light leading-relaxed -mt-4">{item.text}</p></div>
//                      <div className="mt-auto pt-6 border-t border-white/10">
//                        <p className="font-bold text-xs md:text-sm uppercase tracking-wider">{item.name}</p>
//                        <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest">{item.loc}</p>
//                      </div>
//                    </>
//                  ) : (
//                    <div className="w-full aspect-[16/9] md:aspect-square bg-white/5 border border-white/10 p-2">
//                      <iframe src={item.url} className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500" allowFullScreen></iframe>
//                    </div>
//                  )}
//                </div>
//              ))}
//            </div>
//          </div>
//       </section>

//       {/* --- CONNECTIVITY & LOCATION --- */}
//       <section className="py-16 md:py-32 bg-[#FFFFFF]">
//         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
//           <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//             <div className="lg:col-span-5 space-y-12 md:space-y-16">
//               <div>
//                 <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6">Prime <span className="italic text-[#D4AF37] font-light">Location.</span></h2>
//                 <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">Off Varthur Road. Palm Altezze benefits from low traffic volumes while offering three routes that seamlessly connect to the main road in minutes.</p>
//               </div>
//               <div className="space-y-8 md:space-y-12">
//                 {[
//                   { t: "Transport", items: ["Purple Line Metro", "Carmelaram Station", "BMTC / Ola / Uber", "SH-35 Connectivity"] },
//                   { t: "Schools", items: ["Vasishta & Vagdevi Vilas", "The Foundation School", "Orchids International", "VIBGYOR High School", "The Prodigies Int."] },
//                   { t: "Malls", items: ["Phoenix Marketcity", "Virginia Mall", "Park Square Mall", "Inorbit Mall"] },
//                   { t: "Hospitals", items: ["Manipal Hospital", "City Hospital", "Sahasra Hospitals", "Cloudnine Hospital", "The Eye Foundation"] }
//                 ].map((cat, i) => (
//                   <div key={i} className="relative pl-6 border-l border-gray-200">
//                     <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37] -left-[5px] top-1.5" />
//                     <h3 className="text-base md:text-lg font-bold text-[#0A192F] uppercase tracking-wider mb-4">{cat.t}</h3>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 text-xs md:text-sm font-light text-gray-500">
//                       {cat.items.map((item, idx) => <li key={idx}>{item}</li>)}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="lg:col-span-7 h-[400px] md:h-[600px] lg:h-full min-h-[400px] md:min-h-[600px] w-full bg-gray-100 relative p-2">
//               <div className="absolute inset-0 border border-gray-200 m-2 pointer-events-none z-10" />
//               <iframe src="https://www.google.com/maps?q=Varthur,Bangalore&output=embed" width="100%" height="100%" className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//               <div className="absolute bottom-4 left-4 right-4 md:right-auto md:bottom-8 md:left-8 bg-white p-4 md:p-6 shadow-2xl z-20 max-w-none md:max-w-xs border border-gray-100">
//                 <p className="text-xs md:text-sm font-bold text-[#0A192F] uppercase tracking-wider mb-1 md:mb-2">RRL Palm Altezze</p>
//                 <p className="text-[10px] md:text-xs text-gray-500 font-light leading-relaxed">Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FAQs, COMPLETED PROJECTS, JOURNEY --- */}
//       <section className="py-16 md:py-32 bg-[#0A192F] text-white">
//         <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-20 md:space-y-40">
          
//           {/* FAQs */}
//           <div>
//              <div className="text-center mb-12 md:mb-20">
//                <h2 className="text-4xl md:text-5xl font-serif mb-6">Frequently Asked <span className="italic text-[#D4AF37] font-light">Questions.</span></h2>
//                <div className="w-[1px] h-12 md:h-16 bg-[#D4AF37] mx-auto" />
//              </div>
//              <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
//                {[
//                  { cat: "General", faqs: [{ q: "What is the total area of RRL Palm Altezze?", a: "RRL Palm Altezze is built on 1.38 acres of land with 92% open space, featuring 1 tower with B+G+23 floors." }, { q: "How many units are there per floor?", a: "Each floor has 5 units, offering a mix of 2 BHK and 3 BHK apartments." }, { q: "What is the price range?", a: "Prices start from ₹1 Crore onwards for 2 & 3 BHK premium apartments." }] },
//                  { cat: "Amenities", faqs: [{ q: "How many amenities are available?", a: "RRL Palm Altezze features 30+ world-class amenities including swimming pool, gym, yoga deck, sports courts." }, { q: "Is there a clubhouse?", a: "Yes, there is a 16,000 sq.ft clubhouse with multiple facilities." }, { q: "Are there facilities for children?", a: "Yes, we have indoor and outdoor children's play areas, kids' pool." }] },
//                  { cat: "Construction", faqs: [{ q: "What construction technology is used?", a: "We use Mivan construction technology with RCC framed structure designed for earthquake resistance." }, { q: "What is the power backup?", a: "100% generator backup is provided for each flat, lifts, motor, and common area lighting." }] },
//                  { cat: "Location", faqs: [{ q: "How is the connectivity to Whitefield?", a: "Located along SH 35, which directly connects to Whitefield, Brookfield, and other major areas." }, { q: "Is there metro connectivity?", a: "Yes, Nallurahalli Metro Station is nearby." }] },
//                  { cat: "Payment", faqs: [{ q: "What is the payment plan?", a: "Pay only 5% now with no pre-EMI till possession. Flexible payment plans available." }, { q: "Are there any hidden charges?", a: "No hidden charges. All costs are transparent and clearly mentioned." }] }
//                ].map((section, sIdx) => (
//                  <div key={sIdx}>
//                    <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-6 md:mb-8">{section.cat}</h3>
//                    <div className="space-y-0 border-t border-white/10">
//                      {section.faqs.map((faq, i) => {
//                        const [isOpen, setIsOpen] = useState(false);
//                        return (
//                          <div key={i} className="border-b border-white/10">
//                            <button className="w-full text-left py-4 md:py-6 flex justify-between items-center outline-none group" onClick={()=>setIsOpen(!isOpen)}>
//                              <span className="text-base md:text-lg font-light text-white group-hover:text-[#D4AF37] transition-colors">{faq.q}</span>
//                              <span className={`text-[#D4AF37] transition-transform duration-500 flex-shrink-0 ml-4 ${isOpen ? 'rotate-45' : ''}`}>+</span>
//                            </button>
//                            <AnimatePresence>{isOpen && <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}}><p className="pb-6 text-xs md:text-sm text-white/50 font-light leading-relaxed pr-4 md:pr-8">{faq.a}</p></motion.div>}</AnimatePresence>
//                          </div>
//                        )
//                      })}
//                    </div>
//                  </div>
//                ))}
//              </div>
//           </div>

//           {/* Completed Projects */}
//           <div>
//             <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 border-b border-white/10 pb-6 md:pb-8">
//               <h2 className="text-4xl md:text-5xl font-serif">Completed <span className="italic text-[#D4AF37] font-light">Projects.</span></h2>
//               <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50">Our Legacy</p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-10 md:gap-12">
//                {[
//                  { name: "RRL Palacio", loc: "Medahalli", status: "READY TO MOVE", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png", type: "Luxury Apartment", config: "2, 3 BHK", acres: "1.5 Acres", units: "103", possession: "Early possession granted", href: "/projects/palacio" },
//                  { name: "RRL Nature Woods", loc: "Sarjapur", status: "COMPLETED", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png", type: "Premium Apartment", config: "2, 3 BHK", acres: "1.5 Acres", units: "148", possession: "Early possession granted", href: "/projects/nature-woods" }
//                ].map((p, i) => (
//                  <div key={i} className="group">
//                    <Link href={p.href} className="block relative aspect-[16/9] w-full overflow-hidden mb-4 md:mb-6">
//                      <img src={p.img} alt={p.name} className="w-full h-full object-fill grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
//                      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#0A192F] text-white text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-1.5 uppercase tracking-widest border border-[#D4AF37]">{p.status}</div>
//                    </Link>
//                    <p className="text-[8px] md:text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold mb-2">{p.type}</p>
//                    <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6">{p.name}</h3>
//                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-6 md:mb-8 text-xs md:text-sm font-light text-white/70">
//                      <p><span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1">Location</span>{p.loc}</p>
//                      <p><span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1">Config</span>{p.config}</p>
//                      <p><span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1">Area</span>{p.acres}</p>
//                      <p><span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1">Units</span>{p.units}</p>
//                    </div>
//                    <div className="flex gap-4">
//                      <Link href={p.href} className="flex-1"><Button className="w-full bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#0A192F] rounded-none uppercase tracking-widest text-xs h-12 transition-colors">Details</Button></Link>
//                      <a href="tel:+918494966966" className="w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-[#0A192F] transition-colors"><Phone className="w-4 h-4" /></a>
//                    </div>
//                  </div>
//                ))}
//              </div>
//           </div>

//           {/* Journey */}
//           <div>
//             <div className="mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 border-b border-white/10 pb-6 md:pb-8">
//               <h2 className="text-4xl md:text-5xl font-serif">Discover Our <span className="italic text-[#D4AF37] font-light">Journey.</span></h2>
//             </div>
//             <div className="grid md:grid-cols-4 gap-x-8 gap-y-8 md:gap-y-12">
//                {[
//                 { year: "Trust", title: "On-Time Delivery", desc: "Delivering projects on or before schedule, as promised." },
//                 { year: "Expertise", title: "High-Rise & Premium", desc: "Mid-size luxury homes with A1 quality." },
//                 { year: "Innovation", title: "Commercial Pioneer", desc: "Leading the way in landmark commercial projects." },
//                 { year: "Growth", title: "200% Appreciation", desc: "Massive capital appreciation in just 2 years." }
//               ].map((j, i) => (
//                 <div key={i} className="border-t border-[#D4AF37]/50 pt-4 md:pt-6">
//                   <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] mb-2 md:mb-3">{j.year}</p>
//                   <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3">{j.title}</h3>
//                   <p className="text-xs md:text-sm font-light text-white/50 leading-relaxed">{j.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* --- EDITORIAL FOOTER & CONTACT --- */}
//       <footer className="pt-16 pb-28 md:py-32 bg-[#FFFFFF]">
//         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
//           <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
//             <div className="lg:col-span-5 space-y-10 md:space-y-16">
//               <h2 className="text-4xl md:text-6xl font-serif text-[#0A192F] leading-tight">Let's <br/><span className="italic text-[#D4AF37] font-light">Connect.</span></h2>
//               <div className="space-y-8 md:space-y-10 border-l border-gray-200 pl-6 md:pl-8">
//                 <div>
//                   <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Location</p>
//                   <p className="text-xs md:text-sm text-[#0A192F] leading-relaxed max-w-xs">Sy. No - 73/6 (Old 73/5), RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087.</p>
//                 </div>
//                 <div>
//                   <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Phone</p>
//                   <a href="tel:+918494966966" className="text-xl md:text-2xl font-serif text-[#0A192F] hover:text-[#D4AF37] transition-colors">+91 84 94 966 966</a>
//                 </div>
//                 <div>
//                   <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Email</p>
//                   <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="text-xs md:text-sm text-[#0A192F] hover:text-[#D4AF37] transition-colors break-words">enquiry@rrlbuildersanddevelopers.com</a>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-7 bg-[#F8F9FA] p-6 md:p-16 border border-gray-200">
//                <h3 className="text-xl md:text-2xl font-serif text-[#0A192F] mb-8 md:mb-10">Send a Message</h3>
//                <form onSubmit={async(e)=>{ e.preventDefault(); const fd = new FormData(e.currentTarget); await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string, message: fd.get('message') as string }, "xldarjon"); e.currentTarget.reset(); }} className="space-y-6 md:space-y-8">
//                   <div className="relative">
//                     <input name="name" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Name" />
//                     <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Full Name</label>
//                   </div>
//                   <div className="relative">
//                     <input name="email" type="email" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Email" />
//                     <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Email Address</label>
//                   </div>
//                   <div className="relative">
//                     <input name="phone" type="tel" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Phone" />
//                     <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Mobile Number</label>
//                   </div>
//                   <div className="relative pt-2 md:pt-4">
//                     <textarea name="message" rows={3} className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent resize-none text-sm md:text-base" placeholder="Message" />
//                     <label className="absolute left-0 top-0 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-7 peer-focus:top-0 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Your Message (Optional)</label>
//                   </div>
//                   <Button type="submit" className="w-full bg-[#0A192F] hover:bg-[#D4AF37] text-white hover:text-[#0A192F] font-bold h-12 md:h-14 rounded-none uppercase tracking-widest text-xs md:text-sm mt-6 md:mt-8 transition-colors">Submit Enquiry</Button>
//                </form>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* --- GLOBAL ENQUIRY MODAL --- */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A192F]/90 backdrop-blur-xl p-4" onClick={() => setIsModalOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <motion.div className="w-full max-w-lg bg-[#FFFFFF] p-8 md:p-16 relative" onClick={e => e.stopPropagation()} initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}>
//               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-[#0A192F] transition-colors"><X className="w-6 h-6" /></button>
              
//               <h3 className="text-2xl md:text-3xl font-serif text-[#0A192F] mb-2">Cost Sheet & Brochure</h3>
//               <p className="text-xs md:text-sm text-gray-500 mb-8 md:mb-10 font-light">Register to download instant access.</p>
              
//               <form onSubmit={async (e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); const ok = await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string }, "xldarjon"); if(ok) setIsModalOpen(false); }} className="space-y-6 md:space-y-8">
//                 <div className="relative">
//                   <input name="name" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Name" />
//                   <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Full Name</label>
//                 </div>
//                 <div className="relative">
//                   <input name="phone" type="tel" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Phone" />
//                   <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Mobile Number</label>
//                 </div>
//                 <div className="relative">
//                   <input name="email" type="email" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Email" />
//                   <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Email Address</label>
//                 </div>
//                 <Button type="submit" className="w-full bg-[#0A192F] hover:bg-[#D4AF37] text-white hover:text-[#0A192F] font-bold h-12 md:h-14 rounded-none uppercase tracking-widest text-xs md:text-sm mt-6 md:mt-8 transition-colors">Download Now</Button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* --- MOBILE STICKY CTA --- */}
//       <div className="md:hidden fixed bottom-0 w-full z-40 bg-white border-t border-gray-200 p-3 sm:p-4 flex gap-3 sm:gap-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
//         <Button onClick={() => setIsModalOpen(true)} className="flex-1 bg-[#D4AF37] text-[#0A192F] font-bold h-12 rounded-none uppercase tracking-widest text-[10px] sm:text-xs px-2">
//           Brochure
//         </Button>
//         <a href="https://wa.me/918494966966" className="flex-1">
//           <Button variant="outline" className="w-full bg-transparent border-[#0A192F] text-[#0A192F] h-12 font-bold rounded-none uppercase tracking-widest text-[10px] sm:text-xs px-2">
//             WhatsApp
//           </Button>
//         </a>
//       </div>

//     </main>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import Link from "next/link"
import {
  Phone, Building2, Leaf, Users, Zap, Train, Hospital, BookOpen,
  ShoppingCart, Award, Mail, MapPin, ChevronDown, X, Wind, Footprints,
  Waves, Music, Dumbbell, MonitorPlay, Landmark, Sun, ShieldCheck,
  LayoutDashboard, Trees, Coffee, Table2, Construction, Download,
  Maximize2, Lock, Unlock, ArrowLeft, ArrowRight, Star, Utensils, Gamepad2, Tv, Flower2, Briefcase,
  TrendingUp, Key, Glasses, Frame, BrickWall, DoorOpen, AppWindow, Layers,
  Bath, Wrench, PaintRoller, ArrowUpFromLine, BatteryCharging, Droplets,
  CheckCircle, User, Smartphone, Calendar, Loader2
} from "lucide-react"

// --- Shared Data ---
type FormData = { name: string; email: string; phone: string; message?: string }

const floorPlansData = [
  { id: "01", type: "2BHK", facing: "North", area: 1265, dims: { living: "17'9\" x 11'6\"", dining: "8'6\" x 8'0\"", masterBed: "13'0\" x 12'0\"", bed2: "12'3\" x 11'6\"", kitchen: "8'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203915.png" },
  { id: "02", type: "3BHK", facing: "North", area: 1495, dims: { living: "16'0\" x 12'0\"", dining: "8'6\" x 12'9\"", masterBed: "13'0\" x 12'0\"", bed2: "12'6\" x 12'0\"", bed3: "11'6\" x 12'0\"", kitchen: "11'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203938.png" },
  { id: "03", type: "3BHK", facing: "North", area: 1630, dims: { living: "17'9\" x 12'0\"", dining: "8'6\" x 11'0\"", masterBed: "13'0\" x 11'6\"", bed2: "13'0\" x 11'6\"", bed3: "11'0\" x 11'6\"", kitchen: "9'0\" x 11'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203954.png" },
  { id: "04", type: "3BHK", facing: "East", area: 1560, dims: { living: "28'0\" x 11'6\"", dining: "Combined w/ Living", masterBed: "12'0\" x 13'0\"", bed2: "11'0\" x 11'6\"", bed3: "12'0\" x 11'6\"", kitchen: "11'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204011.png" },
  { id: "05", type: "3BHK", facing: "East", area: 1510, dims: { living: "11'6\" x 15'9\"", dining: "8'0\" x 12'9\"", masterBed: "13'0\" x 13'0\"", bed2: "11'0\" x 11'0\"", bed3: "10'3\" x 11'0\"", kitchen: "9'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204025.png" }
];

const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showModalSuccess, setShowModalSuccess] = useState(false)
  const [activeForm, setActiveForm] = useState<string | null>(null)
  const router = useRouter()

  const handleFormSubmit = async (
    data: FormData, 
    formId: string, 
    options: { redirect?: boolean, downloadBrochure?: boolean } = { redirect: true }
  ): Promise<boolean> => {
    const formspreeData = { ...data, project: 'RRL Palm Altezze' };
    
    // --> ALWAYS hit the main CRM API first
    fetch('/enquire-now-api.php', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ name: data.name, phone: data.phone, email: data.email, project: 'RRL Palm Altezze' }) 
    }).catch(console.error);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, { 
        method: "POST", 
        body: JSON.stringify(formspreeData), 
        headers: { "Content-Type": "application/json", Accept: "application/json" } 
      })

      if (response.ok) {
        // Trigger Brochure Download & specific brochure CRM dynamically if requested
        if (options.downloadBrochure) {
          fetch('/download-brochure-api.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formspreeData),
          }).catch(console.error);

          const link = document.createElement("a");
          link.href = "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Palm%20Altezze%20Brochure_compressed.pdf?ik-attachment=true";
          link.download = "Palm Altezze Brochure.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        if (options.redirect) {
          router.push("/c4/thankyou"); 
        }
        return true; 
      } else { 
        // Catch the specific 422 error and log it to the console
        const errorData = await response.json();
        console.error("Formspree 422 Error Details:", errorData);
        
        // Show the exact error message to you on the screen
        const errorText = errorData.errors 
          ? errorData.errors.map((e: any) => e.message).join(", ") 
          : "Validation failed.";
          
        alert(`Formspree Error: ${errorText}. Check the console for details.`); 
        return false; 
      }
    } catch (error) { 
      console.error("Fetch Error:", error);
      alert("A network error occurred. Please check your connection and try again."); 
      return false; 
    }
  }

  const AnimatedCounter = ({ start = 0, end, duration = 2000, suffix = "", separator = false }: { start?: number; end: number; duration?: number; suffix?: string; separator?: boolean; }) => {
    const [count, setCount] = useState(start)
    useEffect(() => {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(start + (end - start) * progress));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }, [start, end, duration]);
    return <span>{separator ? count.toLocaleString() : count}{suffix}</span>
  }

  return (
    <main className="w-full overflow-x-hidden bg-[#FFFFFF] min-h-screen text-[#0A192F] font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* --- ELEGANT STICKY NAV --- */}
      <header className="fixed top-0 w-full z-50 bg-[#0A192F]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-xl font-serif text-white tracking-[0.2em] uppercase">Palm Altezze</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="tel:+918494966966" className="hidden md:flex items-center gap-2 text-sm text-white/80 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-4 h-4" /> 84 94 966 966
            </a>
            <Button onClick={() => setIsModalOpen(true)} className="bg-[#D4AF37] hover:bg-white text-[#0A192F] px-6 py-2 h-auto rounded-none text-xs font-bold uppercase tracking-widest transition-colors">
              Cost Sheet
            </Button>
          </div>
        </div>
      </header>

      {/* --- EDITORIAL HERO SECTION --- */}
      <section className="relative w-full min-h-screen bg-[#0A192F] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Desktop Image */}
          <motion.img 
            initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: "easeOut" }}
            src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/ok.png" 
            alt="Hero Desktop" 
            className="hidden md:block w-full h-full object-fill opacity-40 mix-blend-screen" 
          />
          {/* Mobile Image */}
          <motion.img 
            initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: "easeOut" }}
            src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20mobile%20banners%20(400%20x%20300%20px)/palm-altezze%20(1).png" 
            alt="Hero Mobile" 
            className="block md:hidden w-full h-full object-fill opacity-40 mix-blend-screen" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 pb-16 lg:pb-0">
          <motion.div className="flex-1 space-y-8 mt-12 lg:mt-0" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Possession: Mid 2027</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-serif text-white leading-[1.05]">
              A Lifestyle <br />
              <span className="text-[#D4AF37] italic font-light">Stands Tall.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-xl text-white/70 font-light max-w-lg leading-relaxed">
              Premium 2 & 3 BHK Apartments in Varthur. Experiencing Mivan Technology and a 16,000 Sq.ft Clubhouse.
              <br /><span className="text-[10px] md:text-xs opacity-50 mt-4 block tracking-widest">RERA: PRM/KA/RERA/1251/308/PR/141025/008167</span>
            </motion.p>
            
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-8 border-t border-white/10">
              {[ 
                { v: 50, l: "UDS Share", s: "%" }, 
                { v: 92, l: "Open Space", s: "%" }, 
                { v: 70, l: "Carpet Area", s: "%" }, 
                { v: 5, l: "Units/Floor", s: "" }, 
                { v: 16000, l: "Sq.ft Club", s: "", sep: true } 
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-light text-white"><AnimatedCounter end={stat.v} suffix={stat.s} separator={stat.sep} /></p>
                  <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest mt-1">{stat.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="w-full max-w-md">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#D4AF37] m-4" />
              <h3 className="text-2xl font-serif text-white mb-2">Enquire Now</h3>
              <p className="text-white/50 text-xs tracking-widest uppercase mb-8">Priority Site Visit</p>
              
              <form onSubmit={async (e) => { 
                  e.preventDefault(); 
                  setActiveForm('hero');
                  const fd = new FormData(e.currentTarget); 
                  await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string }, "xldarjon"); 
                  setActiveForm(null);
                  e.currentTarget.reset(); 
                }} className="space-y-6">
                <div className="relative">
                  <input name="name" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Name" />
                  <label className="absolute left-0 -top-3.5 text-[#D4AF37] text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Your Name</label>
                </div>
                <div className="relative">
                  <input name="phone" type="tel" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Phone" />
                  <label className="absolute left-0 -top-3.5 text-[#D4AF37] text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Mobile Number</label>
                </div>
                <div className="relative">
                  <input name="email" type="email" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Email" />
                  <label className="absolute left-0 -top-3.5 text-[#D4AF37] text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Email Address</label>
                </div>
                <Button type="submit" disabled={activeForm === 'hero'} className="w-full bg-white hover:bg-[#D4AF37] text-[#0A192F] font-bold h-14 rounded-none uppercase tracking-widest text-sm mt-4 transition-colors">
                  {activeForm === 'hero' ? "Please Wait..." : "Request Call Back"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ELEGANT TOWER SHOWCASE --- */}
      <section className="py-16 md:py-32 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 border border-[#0A192F]/10 translate-x-4 translate-y-4" />
              <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/WhatsApp%20Image%202025-12-01%20at%2010.21.07%20AM%20(1).jpeg" alt="Tower" className="w-full h-full object-fill relative z-10 shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-[#0A192F] p-6 md:p-8 text-white z-20 shadow-xl">
                <p className="text-xs text-[#D4AF37] tracking-widest uppercase mb-2">Structure</p>
                <p className="text-3xl md:text-4xl font-serif">23 Floors</p>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8 mt-8 lg:mt-0">
              <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-serif text-[#0A192F] leading-tight">
                An Iconic <br /><span className="italic font-light text-[#D4AF37]">Landmark.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-lg">
                Rising majestically above Varthur, Palm Altezze is more than just a residence; it's a statement of prestige. A masterpiece of modern engineering and sophisticated design.
              </motion.p>
              <motion.div variants={fadeUp} className="pt-4 md:pt-8">
                <Button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto bg-transparent border border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Download Brochure
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJECT AT A GLANCE (MINIMALIST GRID) --- */}
      <section className="py-16 md:py-24 bg-[#F8F9FA] border-y border-gray-200">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F]">Project <br/><span className="text-[#D4AF37] italic">At A Glance.</span></h2>
            <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500">RERA & BMRDA Approved <br/> Off Varthur Road</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12">
            {[ { l: "Land Extent", v: "1.38 Acres" }, { l: "Structure", v: "B+G+23 Floors" }, { l: "Total Units", v: "115 Units" }, { l: "Configuration", v: "2 & 3 BHK" }, { l: "Size Range", v: "1265-1630 Sft" }, { l: "Technology", v: "Mivan Build" } ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-l border-[#D4AF37] pl-4">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 md:mb-2">{item.l}</p>
                <p className="text-base md:text-lg font-serif text-[#0A192F]">{item.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ARCHITECTURE & VR (DEEP NAVY THEME) --- */}
      <section className="py-16 md:py-32 bg-[#0A192F] text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-16 md:space-y-32">
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8 order-2 lg:order-1">
              <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-serif leading-tight">Architecture <br/><span className="italic text-[#D4AF37] font-light">Reimagined.</span></motion.h2>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-lg">
                Built for the Future. At RRL Palm Altezze, we combine high-tech Mivan Engineering with eco-friendly Solar Power and EV Charging. Located in the heart of the Silicon Triangle.
              </motion.p>
              <motion.div variants={fadeUp} className="border-l border-[#D4AF37] pl-6 py-2">
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase">A world crafted for the art of living well.</p>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative aspect-[4/3] w-full order-1 lg:order-2">
              <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/PALM%20ALTEZZE%202%20ok.png" alt="Architecture" className="w-full h-full object-fill shadow-2xl" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
               <div className="absolute inset-0 bg-[#D4AF37]/20 translate-x-4 -translate-y-4" />
               <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Visualize%20Your%20Home%20Virtually%202.png" alt="VR" className="w-full h-full object-fill relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6 md:space-y-8">
              <motion.div variants={fadeUp} className="flex items-center gap-4 mt-8 lg:mt-0">
                <Glasses className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Immersive Experience</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif leading-tight">Visualize Your <br/><span className="italic font-light">Home Virtually.</span></motion.h2>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-lg">
                Experience living in your next home before you buy. Book a session to explore our properties in immersive VR.
              </motion.p>
              <motion.div variants={fadeUp} className="pt-4 md:pt-8">
                {/* VR Form */}
                <form onSubmit={async (e) => { 
                    e.preventDefault(); 
                    setActiveForm('vr');
                    const fd = new FormData(e.currentTarget); 
                    await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string }, "xkgkyavn", { redirect: false }); 
                    window.location.href = "/vr-tour"; 
                  }} className="flex flex-col sm:flex-row gap-4 max-w-lg">
                  <input type="tel" name="phone" required placeholder="Enter Mobile Number" className="flex-1 bg-transparent border-b border-white/30 text-white placeholder-white/40 focus:border-[#D4AF37] outline-none px-2 py-3 md:py-0 font-light" />
                  <input type="hidden" name="name" value="VR Request" /><input type="hidden" name="email" value="vr@request.com" />
                  <Button type="submit" disabled={activeForm === 'vr'} className="bg-[#D4AF37] text-[#0A192F] hover:bg-white rounded-none px-8 py-6 md:py-0 uppercase tracking-widest text-xs font-bold transition-colors">
                    {activeForm === 'vr' ? "Booking..." : "Book Now"}
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- SOLAR, USP & HEALTHY LIVING --- */}
      <section className="py-16 md:py-32 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-16 md:space-y-32">
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeUp} className="flex items-center gap-4 text-[#0A192F]">
                <Sun className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Sustainability</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-[#0A192F]">Power Up <br/>With <span className="italic text-[#D4AF37] font-light">Solar.</span></motion.h2>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-500 font-light max-w-md">Solar lights for common areas — reducing your current bill every month while protecting the environment.</motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[250px] md:h-[400px] overflow-hidden">
               <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Power.png" alt="Solar" className="w-full h-full object-fill object-center grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>

          <div>
            <div className="mb-10 md:mb-16">
              <h2 className="text-3xl font-serif text-[#0A192F] mb-4">Why Choose <span className="italic text-[#D4AF37]">Palm Altezze?</span></h2>
              <div className="h-[1px] w-full bg-gray-200" />
            </div>
            <div className="grid md:grid-cols-3 gap-12">
               {[
                { icon: Construction, title: "Mivan Technology", items: [{ i: ShieldCheck, t: "Strong Monolithic Structures" }, { i: ShieldCheck, t: "Leak-proof walls" }, { i: ShieldCheck, t: "Earthquake Resistant" }] },
                { icon: Sun, title: "Solar Powered", items: [{ i: Zap, t: "Solar lighting (Common Areas)" }, { i: Zap, t: "Reduced maintenance" }, { i: Zap, t: "Eco-friendly Energy" }] },
                { icon: Landmark, title: "50% UDS", items: [{ i: Award, t: "True 50% Undivided Share" }, { i: Award, t: "Higher appreciation" }, { i: Award, t: "Rare in Bangalore" }] }
              ].map((usp, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                  <usp.icon className="w-10 h-10 text-[#D4AF37] mb-6" strokeWidth={1} />
                  <h3 className="text-xl font-serif text-[#0A192F] mb-6">{usp.title}</h3>
                  <ul className="space-y-4 text-sm text-gray-500 font-light">
                    {usp.items.map((item, idx) => <li key={idx} className="flex items-center gap-3"><item.i className="w-4 h-4 text-[#D4AF37]" /> {item.t}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-16 border-t border-gray-200">
             <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} className="order-2 lg:order-1 relative aspect-[4/5] md:aspect-square">
                <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Step%20Into%20Healthy%20Living.png" alt="Healthy" className="w-full h-full object-fill" />
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 lg:order-2 space-y-8 md:space-y-12">
               <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-[#0A192F]">Step Into <br/><span className="italic text-[#D4AF37] font-light">Healthy Living.</span></motion.h2>
               <motion.p variants={fadeUp} className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400">At RRL Palm Altezze, you don't just get a home — you get a lifestyle.</motion.p>
               <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-8">
                 <div className="border-t border-[#0A192F] pt-6">
                   <Wind className="w-6 h-6 text-[#D4AF37] mb-4" strokeWidth={1.5} />
                   <p className="text-sm uppercase tracking-widest font-bold text-[#0A192F]">Fresh Air & <br/>Green Surroundings</p>
                 </div>
                 <div className="border-t border-[#0A192F] pt-6">
                   <Footprints className="w-6 h-6 text-[#D4AF37] mb-4" strokeWidth={1.5} />
                   <p className="text-sm uppercase tracking-widest font-bold text-[#0A192F]">Safe, Well-Lit <br/>Track For All Ages</p>
                 </div>
               </motion.div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* --- MASTERFULLY PLANNED (FLOOR PLANS - NAVY THEME) --- */}
      <section className="py-16 md:py-32 bg-[#0A192F] text-white" id="floorplans">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">Masterfully <span className="italic text-[#D4AF37] font-light">Planned.</span></h2>
              <p className="text-white/60 font-light leading-relaxed">115 Units | 5 Units Per Floor | Choose from our range of 5 distinct unit layouts designed for absolute spatial efficiency.</p>
            </div>
            <div className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2" />
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 max-w-[150px]">Explore the blueprints below</p>
            </div>
          </div>

          <div className="border-t border-white/20">
            {floorPlansData.map((plan, i) => {
              const [isOpen, setIsOpen] = useState(false);
              const [isUnlocked, setIsUnlocked] = useState(false);
              const [isUnlocking, setIsUnlocking] = useState(false);

              return (
                <div key={plan.id} className="border-b border-white/10">
                  <div className="py-6 md:py-8 flex flex-wrap items-center justify-between cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
                    <div className="flex items-center gap-4 md:gap-16 w-full md:w-auto">
                      <span className="text-xl md:text-2xl font-serif text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">{plan.id}</span>
                      <h3 className="text-2xl md:text-4xl font-serif text-white">{plan.type}</h3>
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">{plan.facing} Facing</span>
                    </div>
                    <div className="flex items-center gap-4 md:gap-8 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                      <div className="text-right">
                        <span className="text-xl md:text-3xl font-light">{plan.area}</span>
                        <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] ml-2">Sq.Ft</span>
                      </div>
                      <ChevronDown className={`w-6 h-6 text-white/50 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="py-6 md:py-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                          <div className="space-y-6">
                            <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Room Dimensions</p>
                            <div className="grid grid-cols-2 gap-y-6 md:gap-y-8 gap-x-4 text-xs md:text-sm font-light">
                              <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Facing</p><p>{plan.facing}</p></div>
                              <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Living</p><p>{plan.dims.living}</p></div>
                              {plan.dims.dining && <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Dining</p><p>{plan.dims.dining}</p></div>}
                              <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Master Bed</p><p>{plan.dims.masterBed}</p></div>
                              {plan.dims.bed2 && <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Bedroom 2</p><p>{plan.dims.bed2}</p></div>}
                              {plan.dims.bed3 && <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Bedroom 3</p><p>{plan.dims.bed3}</p></div>}
                              <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Kitchen</p><p>{plan.dims.kitchen}</p></div>
                            </div>
                          </div>
                          
                          <div className="relative aspect-video bg-white/5 p-4 flex items-center justify-center">
                            <img src={plan.image} alt="Plan" className={`max-h-full max-w-full object-contain transition-all duration-1000 ${isUnlocked ? 'blur-0' : 'blur-xl opacity-30 grayscale'}`} />
                            
                            {!isUnlocked ? (
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 bg-[#0A192F]/60 backdrop-blur-md text-center">
                                <Lock className="w-6 h-6 text-[#D4AF37] mb-4 md:mb-6" />
                                <form onSubmit={async (e) => { 
                                    e.preventDefault(); 
                                    setIsUnlocking(true);
                                    const fd = new FormData(e.currentTarget); 
                                    await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: 'floorplan@request.com' }, "xldarjon", { redirect: false }); 
                                    setIsUnlocking(false);
                                    setIsUnlocked(true); 
                                  }} className="w-full max-w-xs space-y-4">
                                  <input required name="name" placeholder="Name" className="w-full bg-transparent border-b border-white/30 py-2 text-center text-sm focus:border-[#D4AF37] outline-none placeholder-white/50" />
                                  <input required name="phone" type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-white/30 py-2 text-center text-sm focus:border-[#D4AF37] outline-none placeholder-white/50" />
                                  <Button type="submit" disabled={isUnlocking} className="w-full bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] rounded-none text-xs uppercase tracking-widest mt-4">
                                    {isUnlocking ? "Unlocking..." : "Unlock Blueprint"}
                                  </Button>
                                </form>
                              </div>
                            ) : (
                              <div className="absolute bottom-4 right-4">
                                <a href="https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Palm%20Altezze%20Brochure_compressed.pdf?ik-attachment=true" download="Palm_Altezze_Brochure.pdf">
                                  <Button variant="outline" className="border-white/20 bg-[#0A192F]/80 backdrop-blur text-xs uppercase tracking-widest rounded-none hover:bg-white hover:text-[#0A192F]">Download PDF</Button>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- AMENITIES (RESTORED INTERACTIVE TABS) --- */}
      <section className="py-16 md:py-32 bg-[#0A192F]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div className="text-center mb-10 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
             <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-4">30+ World-Class Amenities</p>
             <h2 className="text-4xl md:text-5xl font-serif text-white">The Club <span className="italic font-light">Altezze.</span></h2>
             <p className="text-sm md:text-base text-white/60 font-light mt-4 md:mt-6 max-w-xl mx-auto leading-relaxed">A sprawling 16,000 Sq.ft sanctuary where leisure meets lifestyle, spread across ground, 1st, and 2nd floors.</p>
          </motion.div>

          <Tabs defaultValue="clubhouse" className="w-full">
            <div className="flex justify-center mb-10 md:mb-16 w-full">
              <TabsList className="bg-white/5 p-1.5 rounded-2xl md:rounded-full border border-white/10 backdrop-blur-md flex flex-col md:flex-row h-auto w-full md:w-auto gap-2 md:gap-0">
                <TabsTrigger value="clubhouse" className="w-full md:w-auto rounded-xl md:rounded-full px-4 md:px-8 py-3 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0A192F] text-white/50 transition-all font-bold tracking-widest uppercase text-[10px] md:text-xs">
                  Clubhouse (16,000 Sft)
                </TabsTrigger>
                <TabsTrigger value="outdoor" className="w-full md:w-auto rounded-xl md:rounded-full px-4 md:px-8 py-3 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0A192F] text-white/50 transition-all font-bold tracking-widest uppercase text-[10px] md:text-xs">
                  Outdoor & Recreational
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="clubhouse">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { icon: LayoutDashboard, label: "Reception Hall" }, { icon: BookOpen, label: "Reading Lounge" },
                  { icon: Gamepad2, label: "Indoor Games" }, { icon: Users, label: "Kids Play Area" },
                  { icon: Leaf, label: "Meditation Hall" }, { icon: Coffee, label: "Lounge Area" },
                  { icon: Music, label: "Party Hall" }, { icon: Utensils, label: "Dining Area" },
                  { icon: Dumbbell, label: "Ultra Gym" }, { icon: Wind, label: "Steam & Sauna" },
                  { icon: Footprints, label: "Cardio Room" }, { icon: MonitorPlay, label: "Mini Theatre" },
                  { icon: Table2, label: "Billiards Table" }, { icon: Table2, label: "Table Tennis" },
                  { icon: Users, label: "Association Room" }, { icon: Tv, label: "Guest Rooms" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 bg-white/5 border border-white/10 p-4 rounded-none hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-default">
                    <div className="hidden md:block w-1.5 h-1.5 bg-[#D4AF37] group-hover:scale-150 transition-transform" />
                    <item.icon className="w-6 h-6 md:w-5 md:h-5 text-white/40 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
                    <span className="text-xs md:text-sm font-light text-white/80 group-hover:text-white transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="outdoor">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                 {[
                  { icon: Waves, label: "Swimming Pool" }, { icon: Waves, label: "Kids Pool" },
                  { icon: Waves, label: "Jacuzzi" }, { icon: LayoutDashboard, label: "Multipurpose Court" },
                  { icon: Footprints, label: "Cricket Pitch" }, { icon: LayoutDashboard, label: "Basketball Court" },
                  { icon: LayoutDashboard, label: "Throwball Court" }, { icon: Footprints, label: "Skating Rink" },
                  { icon: Footprints, label: "Jogging Track" }, { icon: Landmark, label: "Amphitheatre" },
                  { icon: Flower2, label: "Butterfly Garden" }, { icon: Users, label: "Senior Seating" },
                  { icon: Waves, label: "Fountain" }, { icon: Trees, label: "Planting Deck" },
                  { icon: LayoutDashboard, label: "Chess Pawn" }, { icon: Footprints, label: "Hopscotch" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 bg-white/5 border border-white/10 p-4 rounded-none hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-default">
                    <div className="hidden md:block w-1.5 h-1.5 bg-[#D4AF37] group-hover:scale-150 transition-transform" />
                    <item.icon className="w-6 h-6 md:w-5 md:h-5 text-white/40 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
                    <span className="text-xs md:text-sm font-light text-white/80 group-hover:text-white transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* --- SPECIFICATIONS (RESTORED 3 COLUMN WITH FULL 13 ITEMS & ICONS) --- */}
      <section className="py-16 md:py-32 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-4">Premium <span className="italic text-[#D4AF37]">Specifications.</span></h2>
            <div className="w-[1px] h-12 md:h-16 bg-[#D4AF37] mx-auto mt-6 md:mt-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-16 items-start">
            <div className="space-y-0">
              {[
                { icon: Frame, title: "Framed Structure", desc: "Mivan Constructions" },
                { icon: BrickWall, title: "Walls", desc: '8" RCC walls (Concrete walls)' },
                { icon: DoorOpen, title: "Doors", desc: "WPC Doors for Main & Internal doors" },
                { icon: AppWindow, title: "Window", desc: "UPVC windows with mosquito mesh" },
                { icon: Layers, title: "Flooring", desc: "2'x4' vitrified tiles flooring for living, dining, kitchen & bedrooms. 15\"x15\" Anti-skid tiles for balcony." },
                { icon: Bath, title: "Toilet", desc: "Kerovit by Kajaria bath fittings. 2'x1' anti skid ceramic tiles. Provision for exhaust fan." },
                { icon: Wrench, title: "Plumbing", desc: "Supreme / Ashirvad CPVC CP fittings with Jaguar / Parryware sanitary fittings." }
              ].map((s, i) => (
                 <div key={i} className="flex gap-4 md:gap-6 py-6 md:py-8 border-b border-gray-200">
                  <div className="shrink-0 pt-1"><s.icon className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" strokeWidth={1} /></div>
                  <div><h4 className="font-serif text-base md:text-lg text-[#0A192F] mb-1 md:mb-2">{s.title}</h4><p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed">{s.desc}</p></div>
                </div>
              ))}
            </div>
            
            <div className="relative h-full min-h-[600px] w-full hidden lg:block py-8">
              <div className="absolute inset-0 bg-[#0A192F] rounded-full blur-[100px] opacity-5"></div>
              <img src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/generated-image%20(54).png" alt="Premium Apartment Interior" className="relative z-10 w-full h-full object-fill shadow-2xl border border-gray-100" />
            </div>

            <div className="space-y-0">
               {[
                { icon: PaintRoller, title: "Painting", desc: "2 Coats of Nippon Putty. One Coat of primer & Two Coats of Nippon Emulsion for internal walls. Nippon Exterior for external." },
                { icon: Zap, title: "Electrical", desc: "Concealed Finolex / Anchor copper wiring. Anchor Roma Modular Switches. A/C point in Bedrooms & Geyser with separate circuits." },
                { icon: Tv, title: "Communication", desc: "Telephone points in Living & TV point in Living and Master Bedroom." },
                { icon: Droplets, title: "Water Supply", desc: "Water supply from bore well with overhead tank." },
                { icon: ArrowUpFromLine, title: "Lift", desc: "3 Lifts of fully Automatic with 8 passenger and 1 service lift of KONE / OTIS / Equivalent make." },
                { icon: BatteryCharging, title: "Generator", desc: "100% power back-up for each flat, lift, motor & common area lighting." }
              ].map((s, i) => (
                 <div key={i} className="flex gap-4 md:gap-6 py-6 md:py-8 border-b border-gray-200 lg:last:border-b-0">
                  <div className="shrink-0 pt-1"><s.icon className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" strokeWidth={1} /></div>
                  <div><h4 className="font-serif text-base md:text-lg text-[#0A192F] mb-1 md:mb-2">{s.title}</h4><p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed">{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BROCHURE CTA (FULL BLEED IMAGE) --- */}
      <section className="relative w-full h-[50vh] md:h-[60vh] bg-[#0A192F] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL-palm-altezze-banner2.webp" alt="Brochure Background" className="w-full h-full object-fill opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent" />
        </div>
        <div className="relative z-10 px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 md:mb-6 tracking-wide">The Complete Overview</h2>
          <p className="text-sm md:text-base text-white/70 font-light mb-8 md:mb-10">Download the brochure of Palm Altezze & register for exclusive early-access offers.</p>
          <Button onClick={() => setIsModalOpen(true)} className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] px-8 md:px-10 py-5 md:py-6 rounded-none text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors w-full sm:w-auto">
            Download Cost Sheet & Brochure
          </Button>
        </div>
      </section>

      {/* --- REVIEWS (WITH GOOGLE ICON RESTORED) --- */}
      <section className="py-16 md:py-32 bg-[#0A192F] text-white overflow-hidden">
         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8 border-b border-white/10 pb-8">
             <h2 className="text-4xl md:text-5xl font-serif">Client <span className="italic text-[#D4AF37] font-light">Testimonials.</span></h2>
             
             {/* RESTORED GOOGLE REVIEWS BADGE */}
             <div className="flex flex-col items-start md:items-end">
               <div className="flex items-center gap-2 mb-2 bg-white px-4 py-2 rounded-full shadow-sm">
                 <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                   <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                   <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                   <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                   <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                 </svg>
                 <span className="text-[10px] font-bold text-[#0A192F] uppercase tracking-widest">Google Reviews</span>
               </div>
               <div className="flex gap-1 justify-start md:justify-end">{[1,2,3,4,5].map(i=><Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />)}</div>
               <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">5.0 Average</p>
             </div>
           </div>

           <div className="grid md:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-20">
             {[
               { type: "text", name: "Anusha V", loc: "RRL Palacio", text: "After doing lot of research I purchased a flat in RRL Palacio. My kid loves the society! I like their gym, movie theater and rooftop pool." },
               { type: "text", name: "Rahil R", loc: "RRL Palacio", text: "Spacious and well-designed apartments. Friendly staff, great amenities like clubhouse, gym, pool, and sports courts. Pet-friendly and perfect for families. Highly recommended!" },
               { type: "video", url: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1" },
               { type: "text", name: "Chaitanya S", loc: "RRL Palacio", text: "Good builder & team. Value for money. Well planned & organised. Shout out to Kavya - she works tirelessly to accommodate customers. They won best amenities award!" },
               { type: "text", name: "Nagarajan K", loc: "RRL Palacio", text: "The marketing team was very supportive with documents and responded to all queries on time. Premium amenities at an affordable price point in this neighborhood." },
               { type: "video", url: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1" },
               { type: "text", name: "Kishore Babu", loc: "RRL Palm Altezze", text: "Structure quality is very good, very good atmosphere with all around Greenery and spacious balcony view. Great amenities like home theater, steam & sauna, gym... Best choice for anyone!" },
               { type: "text", name: "Prabhakaran S", loc: "RRL Palm Altezze", text: "This location is rarely available at such a good price, especially including interiors. Construction quality is very good. Marketing Manager Kavya is very professional." },
               { type: "text", name: "Sagar Mana", loc: "RRL Palm Altezze", text: "Nice apartment, Premium flat with no common wall, future strategic location. Many new companies are setting up their offices, units, R&D Centers including manufacturing firms." }
             ].map((item, i) => (
               <div key={i} className="flex flex-col">
                 {item.type === "text" ? (
                   <>
                     <div className="mb-6"><span className="text-6xl font-serif text-[#D4AF37] leading-none opacity-50">"</span><p className="text-sm md:text-base text-white/80 font-light leading-relaxed -mt-4">{item.text}</p></div>
                     <div className="mt-auto pt-6 border-t border-white/10">
                       <p className="font-bold text-xs md:text-sm uppercase tracking-wider">{item.name}</p>
                       <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest">{item.loc}</p>
                     </div>
                   </>
                 ) : (
                   <div className="w-full aspect-[16/9] md:aspect-square bg-white/5 border border-white/10 p-2">
                     <iframe src={item.url} className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500" allowFullScreen></iframe>
                   </div>
                 )}
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* --- CONNECTIVITY & LOCATION --- */}
      <section className="py-16 md:py-32 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-12 md:space-y-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6">Prime <span className="italic text-[#D4AF37] font-light">Location.</span></h2>
                <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">Off Varthur Road. Palm Altezze benefits from low traffic volumes while offering three routes that seamlessly connect to the main road in minutes.</p>
              </div>
              <div className="space-y-8 md:space-y-12">
                {[
                  { t: "Transport", items: ["Purple Line Metro", "Carmelaram Station", "BMTC / Ola / Uber", "SH-35 Connectivity"] },
                  { t: "Schools", items: ["Vasishta & Vagdevi Vilas", "The Foundation School", "Orchids International", "VIBGYOR High School", "The Prodigies Int."] },
                  { t: "Malls", items: ["Phoenix Marketcity", "Virginia Mall", "Park Square Mall", "Inorbit Mall"] },
                  { t: "Hospitals", items: ["Manipal Hospital", "City Hospital", "Sahasra Hospitals", "Cloudnine Hospital", "The Eye Foundation"] }
                ].map((cat, i) => (
                  <div key={i} className="relative pl-6 border-l border-gray-200">
                    <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37] -left-[5px] top-1.5" />
                    <h3 className="text-base md:text-lg font-bold text-[#0A192F] uppercase tracking-wider mb-4">{cat.t}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 text-xs md:text-sm font-light text-gray-500">
                      {cat.items.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 h-[400px] md:h-[600px] lg:h-full min-h-[400px] md:min-h-[600px] w-full bg-gray-100 relative p-2">
              <div className="absolute inset-0 border border-gray-200 m-2 pointer-events-none z-10" />
              <iframe src="https://www.google.com/maps?q=Varthur,Bangalore&output=embed" width="100%" height="100%" className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className="absolute bottom-4 left-4 right-4 md:right-auto md:bottom-8 md:left-8 bg-white p-4 md:p-6 shadow-2xl z-20 max-w-none md:max-w-xs border border-gray-100">
                <p className="text-xs md:text-sm font-bold text-[#0A192F] uppercase tracking-wider mb-1 md:mb-2">RRL Palm Altezze</p>
                <p className="text-[10px] md:text-xs text-gray-500 font-light leading-relaxed">Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQs, COMPLETED PROJECTS, JOURNEY --- */}
      <section className="py-16 md:py-32 bg-[#0A192F] text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-20 md:space-y-40">
          
          {/* FAQs */}
          <div>
             <div className="text-center mb-12 md:mb-20">
               <h2 className="text-4xl md:text-5xl font-serif mb-6">Frequently Asked <span className="italic text-[#D4AF37] font-light">Questions.</span></h2>
               <div className="w-[1px] h-12 md:h-16 bg-[#D4AF37] mx-auto" />
             </div>
             <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
               {[
                 { cat: "General", faqs: [{ q: "What is the total area of RRL Palm Altezze?", a: "RRL Palm Altezze is built on 1.38 acres of land with 92% open space, featuring 1 tower with B+G+23 floors." }, { q: "How many units are there per floor?", a: "Each floor has 5 units, offering a mix of 2 BHK and 3 BHK apartments." }, { q: "What is the price range?", a: "Prices start from ₹1 Crore onwards for 2 & 3 BHK premium apartments." }] },
                 { cat: "Amenities", faqs: [{ q: "How many amenities are available?", a: "RRL Palm Altezze features 30+ world-class amenities including swimming pool, gym, yoga deck, sports courts." }, { q: "Is there a clubhouse?", a: "Yes, there is a 16,000 sq.ft clubhouse with multiple facilities." }, { q: "Are there facilities for children?", a: "Yes, we have indoor and outdoor children's play areas, kids' pool." }] },
                 { cat: "Construction", faqs: [{ q: "What construction technology is used?", a: "We use Mivan construction technology with RCC framed structure designed for earthquake resistance." }, { q: "What is the power backup?", a: "100% generator backup is provided for each flat, lifts, motor, and common area lighting." }] },
                 { cat: "Location", faqs: [{ q: "How is the connectivity to Whitefield?", a: "Located along SH 35, which directly connects to Whitefield, Brookfield, and other major areas." }, { q: "Is there metro connectivity?", a: "Yes, Nallurahalli Metro Station is nearby." }] },
                 { cat: "Payment", faqs: [{ q: "What is the payment plan?", a: "Pay only 5% now with no pre-EMI till possession. Flexible payment plans available." }, { q: "Are there any hidden charges?", a: "No hidden charges. All costs are transparent and clearly mentioned." }] }
               ].map((section, sIdx) => (
                 <div key={sIdx}>
                   <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-6 md:mb-8">{section.cat}</h3>
                   <div className="space-y-0 border-t border-white/10">
                     {section.faqs.map((faq, i) => {
                       const [isOpen, setIsOpen] = useState(false);
                       return (
                         <div key={i} className="border-b border-white/10">
                           <button className="w-full text-left py-4 md:py-6 flex justify-between items-center outline-none group" onClick={()=>setIsOpen(!isOpen)}>
                             <span className="text-base md:text-lg font-light text-white group-hover:text-[#D4AF37] transition-colors">{faq.q}</span>
                             <span className={`text-[#D4AF37] transition-transform duration-500 flex-shrink-0 ml-4 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                           </button>
                           <AnimatePresence>{isOpen && <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}}><p className="pb-6 text-xs md:text-sm text-white/50 font-light leading-relaxed pr-4 md:pr-8">{faq.a}</p></motion.div>}</AnimatePresence>
                         </div>
                       )
                     })}
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Completed Projects */}
          <div>
            <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 border-b border-white/10 pb-6 md:pb-8">
              <h2 className="text-4xl md:text-5xl font-serif">Completed <span className="italic text-[#D4AF37] font-light">Projects.</span></h2>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50">Our Legacy</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
               {[
                 { name: "RRL Palacio", loc: "Medahalli", status: "READY TO MOVE", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png", type: "Luxury Apartment", config: "2, 3 BHK", acres: "1.5 Acres", units: "103", possession: "Early possession granted", href: "/projects/palacio" },
                 { name: "RRL Nature Woods", loc: "Sarjapur", status: "COMPLETED", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png", type: "Premium Apartment", config: "2, 3 BHK", acres: "1.5 Acres", units: "148", possession: "Early possession granted", href: "/projects/nature-woods" }
               ].map((p, i) => (
                 <div key={i} className="group">
                   <Link href={p.href} className="block relative aspect-[16/9] w-full overflow-hidden mb-4 md:mb-6">
                     <img src={p.img} alt={p.name} className="w-full h-full object-fill grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                     <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#0A192F] text-white text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-1.5 uppercase tracking-widest border border-[#D4AF37]">{p.status}</div>
                   </Link>
                   <p className="text-[8px] md:text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold mb-2">{p.type}</p>
                   <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6">{p.name}</h3>
                   <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-6 md:mb-8 text-xs md:text-sm font-light text-white/70">
                     <p><span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1">Location</span>{p.loc}</p>
                     <p><span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1">Config</span>{p.config}</p>
                     <p><span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1">Area</span>{p.acres}</p>
                     <p><span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1">Units</span>{p.units}</p>
                   </div>
                   <div className="flex gap-4">
                     <Link href={p.href} className="flex-1"><Button className="w-full bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#0A192F] rounded-none uppercase tracking-widest text-xs h-12 transition-colors">Details</Button></Link>
                     <a href="tel:+918494966966" className="w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-[#0A192F] transition-colors"><Phone className="w-4 h-4" /></a>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Journey */}
          <div>
            <div className="mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 border-b border-white/10 pb-6 md:pb-8">
              <h2 className="text-4xl md:text-5xl font-serif">Discover Our <span className="italic text-[#D4AF37] font-light">Journey.</span></h2>
            </div>
            <div className="grid md:grid-cols-4 gap-x-8 gap-y-8 md:gap-y-12">
               {[
                { year: "Trust", title: "On-Time Delivery", desc: "Delivering projects on or before schedule, as promised." },
                { year: "Expertise", title: "High-Rise & Premium", desc: "Mid-size luxury homes with A1 quality." },
                { year: "Innovation", title: "Commercial Pioneer", desc: "Leading the way in landmark commercial projects." },
                { year: "Growth", title: "200% Appreciation", desc: "Massive capital appreciation in just 2 years." }
              ].map((j, i) => (
                <div key={i} className="border-t border-[#D4AF37]/50 pt-4 md:pt-6">
                  <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] mb-2 md:mb-3">{j.year}</p>
                  <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3">{j.title}</h3>
                  <p className="text-xs md:text-sm font-light text-white/50 leading-relaxed">{j.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- EDITORIAL FOOTER & CONTACT --- */}
      <footer className="pt-16 pb-28 md:py-32 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-5 space-y-10 md:space-y-16">
              <h2 className="text-4xl md:text-6xl font-serif text-[#0A192F] leading-tight">Let's <br/><span className="italic text-[#D4AF37] font-light">Connect.</span></h2>
              <div className="space-y-8 md:space-y-10 border-l border-gray-200 pl-6 md:pl-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Location</p>
                  <p className="text-xs md:text-sm text-[#0A192F] leading-relaxed max-w-xs">Sy. No - 73/6 (Old 73/5), RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087.</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Phone</p>
                  <a href="tel:+918494966966" className="text-xl md:text-2xl font-serif text-[#0A192F] hover:text-[#D4AF37] transition-colors">+91 84 94 966 966</a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Email</p>
                  <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="text-xs md:text-sm text-[#0A192F] hover:text-[#D4AF37] transition-colors break-words">enquiry@rrlbuildersanddevelopers.com</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F8F9FA] p-6 md:p-16 border border-gray-200">
               <h3 className="text-xl md:text-2xl font-serif text-[#0A192F] mb-8 md:mb-10">Send a Message</h3>
               <form onSubmit={async(e)=>{ 
                   e.preventDefault(); 
                   setActiveForm('footer');
                   const fd = new FormData(e.currentTarget); 
                   await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string, message: fd.get('message') as string }, "xldarjon"); 
                   setActiveForm(null);
                   e.currentTarget.reset(); 
                 }} className="space-y-6 md:space-y-8">
                  <div className="relative">
                    <input name="name" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Name" />
                    <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Full Name</label>
                  </div>
                  <div className="relative">
                    <input name="email" type="email" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Email" />
                    <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Email Address</label>
                  </div>
                  <div className="relative">
                    <input name="phone" type="tel" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Phone" />
                    <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Mobile Number</label>
                  </div>
                  <div className="relative pt-2 md:pt-4">
                    <textarea name="message" rows={3} className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent resize-none text-sm md:text-base" placeholder="Message" />
                    <label className="absolute left-0 top-0 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-7 peer-focus:top-0 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Your Message (Optional)</label>
                  </div>
                  <Button type="submit" disabled={activeForm === 'footer'} className="w-full bg-[#0A192F] hover:bg-[#D4AF37] text-white hover:text-[#0A192F] font-bold h-12 md:h-14 rounded-none uppercase tracking-widest text-xs md:text-sm mt-6 md:mt-8 transition-colors">
                    {activeForm === 'footer' ? "Sending..." : "Submit Enquiry"}
                  </Button>
               </form>
            </div>
          </div>
        </div>
      </footer>

      {/* --- GLOBAL ENQUIRY MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A192F]/90 backdrop-blur-xl p-4" onClick={() => setIsModalOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="w-full max-w-lg bg-[#FFFFFF] p-8 md:p-16 relative" onClick={e => e.stopPropagation()} initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}>
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-[#0A192F] transition-colors"><X className="w-6 h-6" /></button>
              
              {showModalSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle className="w-14 h-14 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-[#0A192F] mb-2">Thank You!</h3>
                  <p className="text-gray-500 text-sm md:text-base">Your brochure is downloading…</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#0A192F] mb-2">Cost Sheet & Brochure</h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-8 md:mb-10 font-light">Register to download instant access.</p>
                  
                  <form onSubmit={async (e) => { 
                      e.preventDefault(); 
                      setActiveForm('modal');
                      const fd = new FormData(e.currentTarget); 
                      
                      const ok = await handleFormSubmit(
                        { name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string }, 
                        "xldarjon",
                        { redirect: false, downloadBrochure: true }
                      ); 

                      if (ok) {
                        setShowModalSuccess(true);
                        setTimeout(() => {
                          setIsModalOpen(false);
                          setShowModalSuccess(false);
                        }, 2000);
                      }
                      setActiveForm(null);
                    }} className="space-y-6 md:space-y-8">
                    <div className="relative">
                      <input name="name" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Name" />
                      <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Full Name</label>
                    </div>
                    <div className="relative">
                      <input name="phone" type="tel" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Phone" />
                      <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Mobile Number</label>
                    </div>
                    <div className="relative">
                      <input name="email" type="email" required className="w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent text-sm md:text-base" placeholder="Email" />
                      <label className="absolute left-0 -top-3.5 text-gray-500 text-[10px] md:text-xs transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Email Address</label>
                    </div>
                    <Button type="submit" disabled={activeForm === 'modal'} className="w-full bg-[#0A192F] hover:bg-[#D4AF37] text-white hover:text-[#0A192F] font-bold h-12 md:h-14 rounded-none uppercase tracking-widest text-xs md:text-sm mt-6 md:mt-8 transition-colors">
                      {activeForm === 'modal' ? "Submitting..." : "Download Now"}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE STICKY CTA --- */}
      <div className="md:hidden fixed bottom-0 w-full z-40 bg-white border-t border-gray-200 p-3 sm:p-4 flex gap-3 sm:gap-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <Button onClick={() => setIsModalOpen(true)} className="flex-1 bg-[#D4AF37] text-[#0A192F] font-bold h-12 rounded-none uppercase tracking-widest text-[10px] sm:text-xs px-2">
          Brochure
        </Button>
        <a href="https://wa.me/918494966966" className="flex-1">
          <Button variant="outline" className="w-full bg-transparent border-[#0A192F] text-[#0A192F] h-12 font-bold rounded-none uppercase tracking-widest text-[10px] sm:text-xs px-2">
            WhatsApp
          </Button>
        </a>
      </div>

    </main>
  )
}