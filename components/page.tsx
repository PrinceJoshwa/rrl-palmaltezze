// // // // // // // "use client"

// // // // // // // import { useState, useEffect } from "react"
// // // // // // // import { motion, AnimatePresence } from "framer-motion"
// // // // // // // import { Button } from "@/components/ui/button"
// // // // // // // import { Card } from "@/components/ui/card"
// // // // // // // import { Input } from "@/components/ui/input"
// // // // // // // import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// // // // // // // import { 
// // // // // // //   Building2, Leaf, Phone, Download, X, Wind, Footprints, 
// // // // // // //   Glasses, ArrowRight, MapPin, CheckCircle, Lock, Unlock 
// // // // // // // } from "lucide-react"

// // // // // // // // --- Shared Data from Original File ---
// // // // // // // const floorPlansData = [
// // // // // // //   { id: "01", type: "2BHK", facing: "North", area: 1265, dims: { living: "17'9\" x 11'6\"", masterBed: "13'0\" x 12'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203915.png" },
// // // // // // //   { id: "02", type: "3BHK", facing: "North", area: 1495, dims: { living: "16'0\" x 12'0\"", masterBed: "13'0\" x 12'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203938.png" },
// // // // // // //   { id: "03", type: "3BHK", facing: "North", area: 1630, dims: { living: "17'9\" x 12'0\"", masterBed: "13'0\" x 11'6\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203954.png" },
// // // // // // // ];

// // // // // // // export default function RRLPalmAltezzeTransactional() {
// // // // // // //   // --- Global Modal State ---
// // // // // // //   const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'brochure' | 'vr' | null }>({ isOpen: false, type: null });
// // // // // // //   const [isSubmitted, setIsSubmitted] = useState(false);
  
// // // // // // //   // Floorplan logic
// // // // // // //   const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});

// // // // // // //   const openModal = (type: 'brochure' | 'vr') => setModalState({ isOpen: true, type });
// // // // // // //   const closeModal = () => { setModalState({ isOpen: false, type: null }); setIsSubmitted(false); };

// // // // // // //   // --- Unified Form Handler ---
// // // // // // //   const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // // // // // //     e.preventDefault();
// // // // // // //     const form = e.currentTarget;
// // // // // // //     const formData = new FormData(form);
// // // // // // //     const data = Object.fromEntries(formData.entries());
    
// // // // // // //     // Determine which Formspree ID to use based on interaction
// // // // // // //     const formId = modalState.type === 'vr' ? 'xkgkyavn' : 'xldarjon';

// // // // // // //     // CRM Fire & Forget
// // // // // // //     fetch(modalState.type === 'vr' ? '/book-vr-experience-api.php' : '/enquire-now-api.php', {
// // // // // // //       method: 'POST',
// // // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // // //       body: JSON.stringify({ ...data, project: 'RRL Palm Altezze' }),
// // // // // // //     }).catch(console.error);

// // // // // // //     try {
// // // // // // //       const response = await fetch(`https://formspree.io/f/${formId}`, {
// // // // // // //         method: "POST",
// // // // // // //         body: JSON.stringify(data),
// // // // // // //         headers: { "Content-Type": "application/json", Accept: "application/json" },
// // // // // // //       });
// // // // // // //       if (response.ok) {
// // // // // // //         setIsSubmitted(true);
// // // // // // //         if (modalState.type === 'vr') {
// // // // // // //           setTimeout(() => { window.location.href = "/vr-tour"; }, 1500);
// // // // // // //         }
// // // // // // //       } else {
// // // // // // //         alert("Something went wrong. Please try again.");
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       alert("Network error. Please check your connection.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleFloorplanUnlock = (e: React.FormEvent<HTMLFormElement>, planId: string) => {
// // // // // // //     e.preventDefault();
// // // // // // //     // In a real scenario, you'd send this to Formspree too. Simulating success:
// // // // // // //     setUnlockedPlans(prev => ({ ...prev, [planId]: true }));
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <main className="w-full bg-[#1A120B] min-h-screen text-gray-200 font-sans selection:bg-[#d9a406] selection:text-black">
      
// // // // // // //       {/* ================= STICKY TRANSACTIONAL HEADER ================= */}
// // // // // // //       <header className="fixed top-0 w-full z-50 bg-[#2C1E16]/95 backdrop-blur-md border-b border-[#d9a406]/20 shadow-lg">
// // // // // // //         <div className="container mx-auto px-4 h-20 flex items-center justify-between">
// // // // // // //           <div className="flex flex-col">
// // // // // // //             <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide">RRL PALM ALTEZZE</span>
// // // // // // //             <span className="text-xs text-[#d9a406] font-medium tracking-widest uppercase">Varthur, Bangalore</span>
// // // // // // //           </div>
// // // // // // //           <div className="flex items-center gap-4">
// // // // // // //             <a href="tel:+918494966966" className="hidden md:flex items-center gap-2 text-white hover:text-[#d9a406] transition-colors">
// // // // // // //               <Phone className="w-4 h-4" /> +91 84 94 966 966
// // // // // // //             </a>
// // // // // // //             <Button onClick={() => openModal('brochure')} className="bg-[#d9a406] hover:bg-white text-black font-bold uppercase tracking-wider text-xs md:text-sm shadow-[0_0_15px_rgba(217,164,6,0.3)]">
// // // // // // //               <Download className="w-4 h-4 mr-2 hidden md:block" /> Get Cost Sheet
// // // // // // //             </Button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </header>

// // // // // // //       {/* ================= HERO: HIGH CONVERSION ================= */}
// // // // // // //       <section className="relative w-full min-h-[90vh] pt-24 pb-12 flex items-center bg-[#2C1E16]">
// // // // // // //         {/* Abstract Background overlay instead of pure image for better text/form contrast */}
// // // // // // //         <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/ok.png')] bg-cover bg-center" />
// // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-[#1A120B] via-[#1A120B]/80 to-transparent z-0" />
        
// // // // // // //         <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center mt-10">
          
// // // // // // //           <div className="space-y-6">
// // // // // // //             <div className="inline-flex items-center gap-2 bg-[#d9a406]/10 text-[#d9a406] px-4 py-2 rounded-full text-sm font-semibold border border-[#d9a406]/50">
// // // // // // //               Possession: Mid 2027
// // // // // // //             </div>
// // // // // // //             <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
// // // // // // //               A Lifestyle That <br /><span className="text-[#d9a406]">Stands Tall</span>
// // // // // // //             </h1>
// // // // // // //             <p className="text-xl text-gray-300 max-w-lg border-l-4 border-[#d9a406] pl-4">
// // // // // // //               Premium 2 & 3 BHK Apartments in Varthur. Featuring Mivan Technology & 50% UDS.
// // // // // // //               <br /><span className="text-sm opacity-60 font-normal mt-2 block">RERA: PRM/KA/RERA/1251/308/PR/141025/008167</span>
// // // // // // //             </p>

// // // // // // //             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
// // // // // // //               {[
// // // // // // //                 { v: "1.38", l: "Acres" },
// // // // // // //                 { v: "115", l: "Exclusive Units" },
// // // // // // //                 { v: "5", l: "Units/Floor" },
// // // // // // //                 { v: "16K", l: "Sq.ft Club" }
// // // // // // //               ].map((stat, i) => (
// // // // // // //                 <div key={i} className="bg-[#3E2B20]/50 p-4 rounded-xl border border-[#d9a406]/20 text-center">
// // // // // // //                   <p className="text-2xl font-bold text-[#d9a406]">{stat.v}</p>
// // // // // // //                   <p className="text-xs text-gray-400 uppercase tracking-wide">{stat.l}</p>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Inline Hero Form for Immediate Lead Capture */}
// // // // // // //           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md mx-auto lg:ml-auto">
// // // // // // //             <Card className="p-8 bg-[#2C1E16] shadow-2xl rounded-2xl border-t-4 border-[#d9a406] relative overflow-hidden">
// // // // // // //               <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9a406]/10 rounded-full blur-2xl" />
// // // // // // //               <div className="text-center mb-6 relative z-10">
// // // // // // //                 <h3 className="text-2xl font-bold text-white mb-2">Pre-Register Now</h3>
// // // // // // //                 <p className="text-gray-400 text-sm">Unlock special launch pricing & floor plans.</p>
// // // // // // //               </div>
// // // // // // //               <form onSubmit={handleLeadSubmit} className="space-y-4 relative z-10">
// // // // // // //                 <Input name="name" placeholder="Full Name" required className="bg-[#1A120B] border-[#d9a406]/30 text-white focus:border-[#d9a406] h-12" />
// // // // // // //                 <Input name="phone" type="tel" placeholder="Mobile Number" required className="bg-[#1A120B] border-[#d9a406]/30 text-white focus:border-[#d9a406] h-12" />
// // // // // // //                 <Input name="email" type="email" placeholder="Email Address" required className="bg-[#1A120B] border-[#d9a406]/30 text-white focus:border-[#d9a406] h-12" />
// // // // // // //                 <Button type="submit" className="w-full bg-[#d9a406] hover:bg-white text-black font-bold h-14 text-lg shadow-lg transition-all">
// // // // // // //                   Get Instant Access <ArrowRight className="w-5 h-5 ml-2" />
// // // // // // //                 </Button>
// // // // // // //               </form>
// // // // // // //             </Card>
// // // // // // //           </motion.div>

// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ================= TRANSACTIONAL VR SECTION ================= */}
// // // // // // //       <section className="py-20 bg-[#3E2B20]">
// // // // // // //         <div className="container mx-auto px-4">
// // // // // // //           <div className="bg-[#1A120B] rounded-3xl p-8 md:p-12 border border-[#d9a406]/20 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
// // // // // // //             <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#d9a406]/5 rounded-full blur-3xl" />
            
// // // // // // //             <div className="flex-1 space-y-6 z-10">
// // // // // // //               <h2 className="text-3xl md:text-5xl font-bold text-white">Experience Before <br/>You Buy.</h2>
// // // // // // //               <p className="text-lg text-gray-400">Step inside your future home with our immersive Virtual Reality tour. Available for exclusive early-access customers.</p>
// // // // // // //               <Button onClick={() => openModal('vr')} size="lg" className="bg-[#d9a406] text-black hover:bg-white font-bold gap-2 h-14 px-8 text-lg">
// // // // // // //                 <Glasses className="w-6 h-6" /> Book Free VR Session
// // // // // // //               </Button>
// // // // // // //             </div>
            
// // // // // // //             <div className="flex-1 w-full z-10">
// // // // // // //               <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Visualize%20Your%20Home%20Virtually%202.png" alt="VR Showcase" className="w-full h-[300px] object-cover rounded-xl shadow-2xl border border-white/10" />
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ================= LEAD-GATED FLOOR PLANS ================= */}
// // // // // // //       <section className="py-24 bg-[#1A120B]">
// // // // // // //         <div className="container mx-auto px-4">
// // // // // // //           <div className="text-center mb-16">
// // // // // // //             <h2 className="text-4xl font-bold text-white mb-4">Masterfully Planned Units</h2>
// // // // // // //             <p className="text-gray-400">115 Units | 5 Units Per Floor | 2 & 3 BHK Configurations</p>
// // // // // // //           </div>

// // // // // // //           <div className="grid md:grid-cols-3 gap-8">
// // // // // // //             {floorPlansData.map((plan) => (
// // // // // // //               <Card key={plan.id} className="bg-[#2C1E16] border-[#d9a406]/20 overflow-hidden group">
// // // // // // //                 <div className="p-6 border-b border-black/50 flex justify-between items-center">
// // // // // // //                   <div>
// // // // // // //                     <h3 className="text-2xl font-bold text-white">Unit {plan.id}</h3>
// // // // // // //                     <p className="text-[#d9a406] font-medium">{plan.type}</p>
// // // // // // //                   </div>
// // // // // // //                   <div className="text-right">
// // // // // // //                     <span className="text-3xl font-bold text-white">{plan.area}</span>
// // // // // // //                     <span className="text-xs text-gray-500 block">SQ.FT</span>
// // // // // // //                   </div>
// // // // // // //                 </div>
                
// // // // // // //                 <div className="relative aspect-square bg-[#1A120B]">
// // // // // // //                   <img src={plan.image} alt="Plan" className={`w-full h-full object-contain p-4 transition-all ${unlockedPlans[plan.id] ? 'blur-0' : 'blur-md opacity-40'}`} />
                  
// // // // // // //                   {!unlockedPlans[plan.id] && (
// // // // // // //                     <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center backdrop-blur-sm">
// // // // // // //                       <Lock className="w-8 h-8 text-[#d9a406] mb-4" />
// // // // // // //                       <h4 className="text-white font-bold mb-4">Plan Locked</h4>
// // // // // // //                       <form onSubmit={(e) => handleFloorplanUnlock(e, plan.id)} className="w-full space-y-3">
// // // // // // //                         <Input required name="name" placeholder="Name" className="h-10 bg-[#2C1E16] border-white/10 text-white text-sm" />
// // // // // // //                         <Input required name="phone" type="tel" placeholder="Phone" className="h-10 bg-[#2C1E16] border-white/10 text-white text-sm" />
// // // // // // //                         <Button type="submit" className="w-full bg-[#d9a406] text-black font-bold h-10">
// // // // // // //                           <Unlock className="w-4 h-4 mr-2" /> Unlock Now
// // // // // // //                         </Button>
// // // // // // //                       </form>
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </Card>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ================= UNIFIED GLOBAL MODAL ================= */}
// // // // // // //       <AnimatePresence>
// // // // // // //         {modalState.isOpen && (
// // // // // // //           <motion.div 
// // // // // // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // // // // // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
// // // // // // //             onClick={closeModal}
// // // // // // //           >
// // // // // // //             <motion.div 
// // // // // // //               initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
// // // // // // //               onClick={e => e.stopPropagation()}
// // // // // // //               className="bg-[#2C1E16] border border-[#d9a406]/50 p-8 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
// // // // // // //             >
// // // // // // //               <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="w-6 h-6" /></button>

// // // // // // //               {isSubmitted ? (
// // // // // // //                 <div className="text-center py-8">
// // // // // // //                   <CheckCircle className="w-16 h-16 text-[#d9a406] mx-auto mb-4" />
// // // // // // //                   <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
// // // // // // //                   <p className="text-gray-400 mb-6">
// // // // // // //                     {modalState.type === 'vr' ? "Redirecting to your VR experience..." : "Your brochure link will be sent shortly."}
// // // // // // //                   </p>
// // // // // // //                   <Button onClick={closeModal} className="bg-white text-black font-bold w-full">Close</Button>
// // // // // // //                 </div>
// // // // // // //               ) : (
// // // // // // //                 <>
// // // // // // //                   <div className="text-center mb-8">
// // // // // // //                     <h3 className="text-2xl font-bold text-white mb-2">
// // // // // // //                       {modalState.type === 'vr' ? "Book VR Experience" : "Download Brochure"}
// // // // // // //                     </h3>
// // // // // // //                     <p className="text-gray-400 text-sm">
// // // // // // //                       {modalState.type === 'vr' ? "Provide your details to unlock the virtual tour." : "Get instant access to floor plans and cost sheets."}
// // // // // // //                     </p>
// // // // // // //                   </div>

// // // // // // //                   <form onSubmit={handleLeadSubmit} className="space-y-4">
// // // // // // //                     <Input name="name" placeholder="Your Name" required className="bg-[#1A120B] border-[#4A3525] text-white h-12 focus:border-[#d9a406]" />
// // // // // // //                     <Input name="phone" type="tel" placeholder="Phone Number" required className="bg-[#1A120B] border-[#4A3525] text-white h-12 focus:border-[#d9a406]" />
// // // // // // //                     <Input name="email" type="email" placeholder="Email Address" required className="bg-[#1A120B] border-[#4A3525] text-white h-12 focus:border-[#d9a406]" />
// // // // // // //                     <Button type="submit" className="w-full bg-[#d9a406] text-black font-bold h-14 mt-4 text-lg hover:bg-white transition-colors">
// // // // // // //                       {modalState.type === 'vr' ? "Start Virtual Tour" : "Get Brochure PDF"}
// // // // // // //                     </Button>
// // // // // // //                   </form>
// // // // // // //                 </>
// // // // // // //               )}
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>

// // // // // // //       {/* ================= MOBILE STICKY CTA ================= */}
// // // // // // //       <div className="md:hidden fixed bottom-0 w-full z-40 bg-[#2C1E16] border-t border-[#d9a406]/30 p-3 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
// // // // // // //         <Button onClick={() => openModal('brochure')} className="flex-1 bg-[#d9a406] text-black font-bold h-12">
// // // // // // //           Brochure
// // // // // // //         </Button>
// // // // // // //         <a href="https://wa.me/918494966966" className="flex-1">
// // // // // // //           <Button variant="outline" className="w-full bg-[#1A120B] border-[#d9a406] text-[#d9a406] h-12 font-bold hover:bg-[#d9a406] hover:text-black">
// // // // // // //             WhatsApp
// // // // // // //           </Button>
// // // // // // //         </a>
// // // // // // //       </div>

// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }


// // // // // // "use client"

// // // // // // import { useState, useEffect } from "react"
// // // // // // import { motion, AnimatePresence, Variants } from "framer-motion"
// // // // // // import { Button } from "@/components/ui/button"
// // // // // // import { Card } from "@/components/ui/card"
// // // // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // // // // // import { Input } from "@/components/ui/input"
// // // // // // import Image from "next/image"
// // // // // // import Link from "next/link"
// // // // // // import {
// // // // // //   Phone, Building2, Leaf, Users, Zap, Train, Hospital, BookOpen,
// // // // // //   ShoppingCart, Award, Mail, MapPin, X, Wind, Footprints, Waves, Music,
// // // // // //   Dumbbell, MonitorPlay, Landmark, Sun, ShieldCheck, LayoutDashboard, Trees,
// // // // // //   Coffee, Table2, Construction, Download, Maximize2, Lock, Unlock, ArrowRight, Star,
// // // // // //   Utensils, Gamepad2, Tv, Flower2, Briefcase, TrendingUp, Key, Glasses,
// // // // // //   Frame, BrickWall, DoorOpen, AppWindow, Layers, Bath, Wrench, PaintRoller,
// // // // // //   ArrowUpFromLine, BatteryCharging, Droplets, CheckCircle, ChevronDown
// // // // // // } from "lucide-react"

// // // // // // // --- Shared Data from Original File ---
// // // // // // const floorPlansData = [
// // // // // //   { id: "01", type: "2BHK", facing: "North", area: 1265, dims: { living: "17'9\" x 11'6\"", dining: "8'6\" x 8'0\"", masterBed: "13'0\" x 12'0\"", bed2: "12'3\" x 11'6\"", kitchen: "8'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203915.png" },
// // // // // //   { id: "02", type: "3BHK", facing: "North", area: 1495, dims: { living: "16'0\" x 12'0\"", dining: "8'6\" x 12'9\"", masterBed: "13'0\" x 12'0\"", bed2: "12'6\" x 12'0\"", bed3: "11'6\" x 12'0\"", kitchen: "11'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203938.png" },
// // // // // //   { id: "03", type: "3BHK", facing: "North", area: 1630, dims: { living: "17'9\" x 12'0\"", dining: "8'6\" x 11'0\"", masterBed: "13'0\" x 11'6\"", bed2: "13'0\" x 11'6\"", bed3: "11'0\" x 11'6\"", kitchen: "9'0\" x 11'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203954.png" },
// // // // // //   { id: "04", type: "3BHK", facing: "East", area: 1560, dims: { living: "28'0\" x 11'6\"", dining: "Combined w/ Living", masterBed: "12'0\" x 13'0\"", bed2: "11'0\" x 11'6\"", bed3: "12'0\" x 11'6\"", kitchen: "11'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204011.png" },
// // // // // //   { id: "05", type: "3BHK", facing: "East", area: 1510, dims: { living: "11'6\" x 15'9\"", dining: "8'0\" x 12'9\"", masterBed: "13'0\" x 13'0\"", bed2: "11'0\" x 11'0\"", bed3: "10'3\" x 11'0\"", kitchen: "9'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204025.png" }
// // // // // // ];

// // // // // // export default function RRLPalmAltezzeFull() {
// // // // // //   // --- Global Modal State ---
// // // // // //   const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'brochure' | 'vr' | null }>({ isOpen: false, type: null });
// // // // // //   const [isSubmitted, setIsSubmitted] = useState(false);
  
// // // // // //   // Floorplan logic
// // // // // //   const [activeTab, setActiveTab] = useState("all");
// // // // // //   const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});

// // // // // //   const filteredPlans = activeTab === "all" ? floorPlansData : floorPlansData.filter(p => p.type === activeTab);

// // // // // //   const openModal = (type: 'brochure' | 'vr') => setModalState({ isOpen: true, type });
// // // // // //   const closeModal = () => { setModalState({ isOpen: false, type: null }); setIsSubmitted(false); };

// // // // // //   // --- Unified Form Handler ---
// // // // // //   const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // // // // //     e.preventDefault();
// // // // // //     const form = e.currentTarget;
// // // // // //     const formData = new FormData(form);
// // // // // //     const data = Object.fromEntries(formData.entries());
    
// // // // // //     const formId = modalState.type === 'vr' ? 'xkgkyavn' : 'xldarjon';

// // // // // //     fetch(modalState.type === 'vr' ? '/book-vr-experience-api.php' : '/enquire-now-api.php', {
// // // // // //       method: 'POST',
// // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // //       body: JSON.stringify({ ...data, project: 'RRL Palm Altezze' }),
// // // // // //     }).catch(console.error);

// // // // // //     try {
// // // // // //       const response = await fetch(`https://formspree.io/f/${formId}`, {
// // // // // //         method: "POST",
// // // // // //         body: JSON.stringify(data),
// // // // // //         headers: { "Content-Type": "application/json", Accept: "application/json" },
// // // // // //       });
// // // // // //       if (response.ok) {
// // // // // //         setIsSubmitted(true);
// // // // // //         if (modalState.type === 'vr') {
// // // // // //           setTimeout(() => { window.location.href = "/vr-tour"; }, 1500);
// // // // // //         }
// // // // // //       } else {
// // // // // //         alert("Something went wrong. Please try again.");
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       alert("Network error. Please check your connection.");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleFloorplanUnlock = (e: React.FormEvent<HTMLFormElement>, planId: string) => {
// // // // // //     e.preventDefault();
// // // // // //     setUnlockedPlans(prev => ({ ...prev, [planId]: true }));
// // // // // //   };

// // // // // //   // --- Shared Animations ---
// // // // // //   const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// // // // // //   return (
// // // // // //     <main className="w-full bg-[#1A120B] min-h-screen text-gray-200 font-sans selection:bg-[#d9a406] selection:text-black overflow-x-hidden">
      
// // // // // //       {/* ================= STICKY HEADER ================= */}
// // // // // //       <header className="fixed top-0 w-full z-50 bg-[#2C1E16]/95 backdrop-blur-md border-b border-[#d9a406]/20 shadow-lg">
// // // // // //         <div className="container mx-auto px-4 h-20 flex items-center justify-between">
// // // // // //           <div className="flex flex-col">
// // // // // //             <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide">RRL PALM ALTEZZE</span>
// // // // // //             <span className="text-xs text-[#d9a406] font-medium tracking-widest uppercase">Varthur, Bangalore</span>
// // // // // //           </div>
// // // // // //           <div className="flex items-center gap-4">
// // // // // //             <a href="tel:+918494966966" className="hidden md:flex items-center gap-2 text-white hover:text-[#d9a406] transition-colors font-semibold">
// // // // // //               <Phone className="w-4 h-4" /> +91 84 94 966 966
// // // // // //             </a>
// // // // // //             <Button onClick={() => openModal('brochure')} className="bg-[#d9a406] hover:bg-white text-black font-bold uppercase tracking-wider text-xs md:text-sm shadow-[0_0_15px_rgba(217,164,6,0.3)]">
// // // // // //               <Download className="w-4 h-4 mr-2 hidden md:block" /> Get Cost Sheet
// // // // // //             </Button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </header>

// // // // // //       {/* ================= HERO ================= */}
// // // // // //       <section className="relative w-full min-h-screen pt-24 pb-12 flex items-center bg-[#2C1E16]">
// // // // // //         <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/ok.png')] bg-cover bg-center" />
// // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-[#1A120B] via-[#1A120B]/90 to-transparent z-0" />
// // // // // //         <motion.div className="absolute top-0 right-0 w-96 h-96 bg-[#d9a406] rounded-full opacity-10 blur-[100px]" animate={{ y: [0, 30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }} />
        
// // // // // //         <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center mt-10">
// // // // // //           <motion.div className="space-y-8" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
// // // // // //             <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-[#d9a406]/10 text-[#d9a406] px-4 py-2 rounded-full text-sm font-semibold border border-[#d9a406]/50">
// // // // // //               Possession: Mid 2027
// // // // // //             </motion.div>
// // // // // //             <motion.div variants={fadeIn} className="space-y-4">
// // // // // //               <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
// // // // // //                 A Lifestyle That <br /><span className="text-[#d9a406]">Stands Tall</span>
// // // // // //               </h1>
// // // // // //               <p className="text-xl md:text-2xl text-gray-300">
// // // // // //                 Premium 2 & 3 BHK Apartments in Varthur. <br />
// // // // // //                 <span className="text-sm opacity-60 font-normal">RERA: PRM/KA/RERA/1251/308/PR/141025/008167</span>
// // // // // //               </p>
// // // // // //             </motion.div>

// // // // // //             <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
// // // // // //               {[
// // // // // //                 { v: "50%", l: "UDS Share" }, { v: "92%", l: "Open Space" }, { v: "70%", l: "Carpet Area" }, 
// // // // // //                 { v: "5", l: "Units / Floor" }, { v: "16,000", l: "Sq.ft Clubhouse" }
// // // // // //               ].map((stat, i) => (
// // // // // //                 <div key={i} className="space-y-1">
// // // // // //                   <p className="text-3xl font-bold text-[#d9a406]">{stat.v}</p>
// // // // // //                   <p className="text-xs text-gray-400 uppercase tracking-wide">{stat.l}</p>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </motion.div>
// // // // // //           </motion.div>

// // // // // //           <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md mx-auto lg:ml-auto">
// // // // // //             <Card className="p-8 bg-[#2C1E16] shadow-2xl rounded-2xl border-t-4 border-[#d9a406] relative overflow-hidden">
// // // // // //                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9a406]/10 rounded-full blur-2xl" />
// // // // // //               <div className="text-center mb-6 relative z-10">
// // // // // //                 <h3 className="text-2xl font-bold text-white mb-2">Enquire Now</h3>
// // // // // //                 <p className="text-gray-400 text-sm">Register to avail pre-launch benefits.</p>
// // // // // //               </div>
// // // // // //               <form onSubmit={handleLeadSubmit} className="space-y-4 relative z-10">
// // // // // //                 <Input name="name" placeholder="Your Name" required className="bg-[#1A120B] border-[#4A3525] text-white focus:border-[#d9a406] h-12" />
// // // // // //                 <Input name="phone" type="tel" placeholder="Mobile Number" required className="bg-[#1A120B] border-[#4A3525] text-white focus:border-[#d9a406] h-12" />
// // // // // //                 <Input name="email" type="email" placeholder="Email Address" required className="bg-[#1A120B] border-[#4A3525] text-white focus:border-[#d9a406] h-12" />
// // // // // //                 <Button type="submit" className="w-full bg-[#d9a406] hover:bg-white text-black font-bold h-14 text-lg shadow-lg transition-all">
// // // // // //                   Get Instant Call Back
// // // // // //                 </Button>
// // // // // //               </form>
// // // // // //             </Card>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //         <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
// // // // // //           <ChevronDown className="w-6 h-6 text-[#d9a406]" />
// // // // // //         </motion.div>
// // // // // //       </section>

// // // // // //       {/* ================= TOWER SHOWCASE ================= */}
// // // // // //       <section className="py-20 bg-[#1A120B]">
// // // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // // // //           <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative w-full aspect-[4/3] md:h-[500px]">
// // // // // //             <div className="absolute inset-0 bg-[#d9a406] rounded-2xl -rotate-2 opacity-20" />
// // // // // //             <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/WhatsApp%20Image%202025-12-01%20at%2010.21.07%20AM%20(1).jpeg" alt="Tower Elevation" className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-[#2C1E16]" />
// // // // // //             <div className="absolute bottom-8 right-8 bg-[#2C1E16]/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-[#d9a406]">
// // // // // //               <p className="text-sm text-gray-400 font-bold uppercase">Structure</p>
// // // // // //               <p className="text-xl font-bold text-[#d9a406]">23 Floors</p>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //           <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
// // // // // //             <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">An Iconic <br /><span className="text-[#d9a406]">Landmark</span></h2>
// // // // // //             <div className="w-20 h-1 bg-[#d9a406] rounded-full" />
// // // // // //             <p className="text-lg text-gray-400 leading-relaxed">Rising majestically above Varthur, Palm Altezze is more than just a residence; it's a statement of prestige.</p>
// // // // // //             <Button size="lg" onClick={() => openModal('brochure')} className="bg-[#2C1E16] hover:bg-[#3E2B20] text-[#d9a406] gap-2 border border-[#d9a406]">
// // // // // //               <Download className="w-4 h-4" /> Download Brochure
// // // // // //             </Button>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= PROJECT AT A GLANCE ================= */}
// // // // // //       <section className="py-20 bg-[#2C1E16] border-y border-[#d9a406]/10">
// // // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // // // //           <div className="text-center mb-16">
// // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-[#d9a406] mb-4">Project At A Glance</h2>
// // // // // //             <p className="text-xl text-gray-400 max-w-2xl mx-auto">RERA & BMRDA Approved | Off Varthur Road</p>
// // // // // //           </div>
// // // // // //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
// // // // // //             {[
// // // // // //               { label: "Land Extent", value: "1.38 Acres" }, { label: "Structure", value: "B + G + 23 Floors" },
// // // // // //               { label: "Units", value: "115 Units" }, { label: "Configuration", value: "2 & 3 BHK" },
// // // // // //               { label: "Size Range", value: "1265 - 1630 Sq.ft" }, { label: "Construction", value: "Mivan Technology" }
// // // // // //             ].map((item, index) => (
// // // // // //               <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
// // // // // //                 <Card className="p-6 text-center hover:scale-105 transition-all duration-300 border border-[#d9a406]/20 bg-[#1A120B] h-full flex flex-col justify-center shadow-lg">
// // // // // //                   <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{item.label}</p>
// // // // // //                   <p className="text-lg font-bold text-[#d9a406]">{item.value}</p>
// // // // // //                 </Card>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= ARCHITECTURE & VR ================= */}
// // // // // //       <section className="py-20 bg-[#1A120B] overflow-hidden">
// // // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-32">
          
// // // // // //           {/* Architecture */}
// // // // // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// // // // // //             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
// // // // // //               <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[#d9a406]">Architecture <br /> Reimagined</h2>
// // // // // //               <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
// // // // // //                 <p>Built for the Future. <br />At RRL Palm Altezze, we combine high-tech Mivan Engineering with eco-friendly Solar Power and EV Charging. Located in the heart of the Silicon Triangle.</p>
// // // // // //                 <div className="pt-4 border-l-4 border-[#d9a406] pl-6">
// // // // // //                   <p className="text-xl font-bold text-white uppercase tracking-wider">A WORLD CRAFTED FOR THE ART OF LIVING WELL</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
// // // // // //               <div className="absolute inset-0 bg-[#d9a406] rounded-2xl transform rotate-3 opacity-20"></div>
// // // // // //               <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/PALM%20ALTEZZE%202%20ok.png" alt="Architecture" className="relative rounded-2xl shadow-2xl border border-[#d9a406]/20 w-full object-cover" />
// // // // // //             </motion.div>
// // // // // //           </div>

// // // // // //           {/* VR Section */}
// // // // // //           <div className="bg-[#2C1E16] rounded-3xl p-8 md:p-12 border border-[#d9a406]/20 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
// // // // // //              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#d9a406]/5 rounded-full blur-3xl" />
// // // // // //             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 space-y-6 z-10">
// // // // // //               <h2 className="text-3xl md:text-5xl font-bold text-white">Visualize Your <br /><span className="text-[#d9a406]">Home Virtually</span></h2>
// // // // // //               <div className="w-16 h-1 bg-[#d9a406] rounded-full"></div>
// // // // // //               <p className="text-xl text-gray-400">Experience living in your next home before you buy. Book a session to explore our properties in immersive VR.</p>
// // // // // //               <Button size="lg" className="bg-[#d9a406] text-black hover:bg-white font-bold gap-2" onClick={() => openModal('vr')}>
// // // // // //                 <Glasses className="w-5 h-5" /> Book a VR Session Today
// // // // // //               </Button>
// // // // // //             </motion.div>
// // // // // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 w-full z-10 relative">
// // // // // //                <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Visualize%20Your%20Home%20Virtually%202.png" alt="VR Showcase" className="w-full h-[400px] object-cover rounded-2xl shadow-2xl border border-white/10 transition-transform duration-700 hover:scale-105" />
// // // // // //             </motion.div>
// // // // // //           </div>

// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= SOLAR & USP ================= */}
// // // // // //       <section className="py-20 bg-[#2C1E16]">
// // // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
// // // // // //             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative w-full rounded-2xl overflow-hidden border border-[#d9a406]/30 shadow-[0_0_50px_rgba(217,164,6,0.1)] h-[400px]">
// // // // // //               <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Power.png" alt="Solar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
// // // // // //             </motion.div>
// // // // // //             <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
// // // // // //               <div className="flex items-center gap-3 mb-2">
// // // // // //                 <Sun className="w-8 h-8 text-[#d9a406] animate-spin-slow" />
// // // // // //                 <span className="text-[#d9a406] font-bold tracking-widest uppercase text-sm">Sustainability</span>
// // // // // //               </div>
// // // // // //               <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Power Up <br /> With <span className="text-[#d9a406]">Solar</span></h2>
// // // // // //               <p className="text-lg text-gray-300 leading-relaxed">Solar lights for common areas — reducing your current bill every month.</p>
// // // // // //             </motion.div>
// // // // // //           </div>

// // // // // //           {/* USP Grid */}
// // // // // //           <div className="text-center mb-16">
// // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose <span className="text-[#d9a406]">Palm Altezze?</span></h2>
// // // // // //           </div>
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // // //             {[
// // // // // //               { icon: Construction, title: "Mivan Technology", iconC: ShieldCheck, items: ["Strong Monolithic Structures", "Leak-proof walls", "Earthquake Resistant"] },
// // // // // //               { icon: Sun, title: "Solar Powered", iconC: Zap, items: ["Solar lighting (Common)", "Reduced maintenance", "Eco-friendly Energy"] },
// // // // // //               { icon: Landmark, title: "50% UDS", iconC: Award, items: ["True 50% Undivided Share", "Higher appreciation", "Rare in Bangalore"] }
// // // // // //             ].map((usp, index) => (
// // // // // //               <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-[#1A120B] p-8 rounded-2xl shadow-xl border-t-4 border-[#d9a406] group hover:bg-[#3E2B20] transition-colors">
// // // // // //                 <div className="w-16 h-16 bg-[#d9a406]/10 rounded-full flex items-center justify-center mb-6">
// // // // // //                   <usp.icon className="w-8 h-8 text-[#d9a406]" />
// // // // // //                 </div>
// // // // // //                 <h3 className="text-2xl font-bold text-white mb-4">{usp.title}</h3>
// // // // // //                 <ul className="space-y-2 text-sm text-gray-400">
// // // // // //                   {usp.items.map((item, i) => <li key={i} className="flex items-center gap-2"><usp.iconC className="w-4 h-4 text-[#d9a406]" /> {item}</li>)}
// // // // // //                 </ul>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= HEALTHY LIVING ================= */}
// // // // // //       <section className="py-20 bg-[#1A120B]">
// // // // // //          <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // // // //           <motion.div className="max-w-xl text-center lg:text-left" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
// // // // // //             <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">Step Into <br /><span className="text-[#d9a406]">Healthy Living</span></h2>
// // // // // //             <div className="border-l-4 border-[#d9a406] pl-6 mb-12">
// // // // // //               <p className="text-gray-300 font-bold uppercase tracking-wide text-sm leading-relaxed">AT RRL PALM ALTEZZE, YOU DON'T JUST GET A HOME — YOU GET A LIFESTYLE.</p>
// // // // // //             </div>
// // // // // //             <div className="flex flex-col sm:flex-row gap-10 justify-center lg:justify-start">
// // // // // //               <div className="flex flex-col items-center lg:items-start gap-4 group">
// // // // // //                 <div className="w-16 h-16 rounded-full bg-[#d9a406]/10 flex items-center justify-center group-hover:bg-[#d9a406] transition-colors border border-[#d9a406]/30">
// // // // // //                   <Wind className="w-8 h-8 text-[#d9a406] group-hover:text-black transition-colors" />
// // // // // //                 </div>
// // // // // //                 <p className="font-bold text-white text-sm max-w-[150px] uppercase text-center lg:text-left">FRESH AIR & GREEN SURROUNDINGS</p>
// // // // // //               </div>
// // // // // //               <div className="flex flex-col items-center lg:items-start gap-4 group">
// // // // // //                 <div className="w-16 h-16 rounded-full bg-[#d9a406]/10 flex items-center justify-center group-hover:bg-[#d9a406] transition-colors border border-[#d9a406]/30">
// // // // // //                   <Footprints className="w-8 h-8 text-[#d9a406] group-hover:text-black transition-colors" />
// // // // // //                 </div>
// // // // // //                 <p className="font-bold text-white text-sm max-w-[150px] uppercase text-center lg:text-left">SAFE, WELL-LIT TRACK FOR ALL AGES</p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //           <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
// // // // // //             <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Step%20Into%20Healthy%20Living.png" alt="Healthy Living" className="w-full rounded-2xl shadow-2xl border border-[#d9a406]/20" />
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= FLOOR PLANS (GATED) ================= */}
// // // // // //       <section className="py-24 bg-[#2C1E16]" id="floorplans">
// // // // // //         <div className="container mx-auto px-4 max-w-7xl">
// // // // // //           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
// // // // // //             <div>
// // // // // //               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masterfully <span className="text-[#d9a406]">Planned</span></h2>
// // // // // //               <p className="text-gray-400 max-w-xl">115 Units | 5 Units Per Floor <br />Choose from our range of 5 distinct unit layouts.</p>
// // // // // //             </div>
// // // // // //             <div className="flex gap-2 bg-[#1A120B] p-1 rounded-lg border border-[#d9a406]/20">
// // // // // //               {["all", "2BHK", "3BHK"].map((tab) => (
// // // // // //                 <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === tab ? "bg-[#d9a406] text-black shadow-lg" : "text-gray-400 hover:text-white"}`}>
// // // // // //                   {tab.toUpperCase()}
// // // // // //                 </button>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // // // // //             <AnimatePresence mode="popLayout">
// // // // // //               {filteredPlans.map((plan) => (
// // // // // //                 <motion.div key={plan.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
// // // // // //                   <Card className="bg-[#1A120B] border-[#d9a406]/20 overflow-hidden group hover:border-[#d9a406] transition-all duration-300">
// // // // // //                     <div className="p-6 border-b border-black/50 bg-[#2C1E16]">
// // // // // //                       <div className="flex justify-between items-start mb-4">
// // // // // //                         <div><h3 className="text-2xl font-bold text-white">Unit {plan.id}</h3><p className="text-[#d9a406] font-medium">{plan.type}</p></div>
// // // // // //                         <div className="bg-[#1A120B] text-white px-3 py-1 rounded-full text-xs font-semibold">{plan.facing} Facing</div>
// // // // // //                       </div>
// // // // // //                       <div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-white">{plan.area}</span><span className="text-gray-500 font-medium">SFT</span></div>
// // // // // //                     </div>
// // // // // //                     <div className="p-6 space-y-3">
// // // // // //                       <div className="flex justify-between text-sm"><span className="text-gray-500">Living</span><span className="text-gray-300">{plan.dims.living || "N/A"}</span></div>
// // // // // //                       <div className="flex justify-between text-sm"><span className="text-gray-500">Master Bed</span><span className="text-gray-300">{plan.dims.masterBed}</span></div>
// // // // // //                     </div>
                    
// // // // // //                     <div className="relative aspect-square bg-black border-t border-[#d9a406]/10">
// // // // // //                       <img src={plan.image} alt={`Plan ${plan.id}`} className={`w-full h-full object-contain p-2 transition-all duration-700 ${unlockedPlans[plan.id] ? 'blur-0' : 'blur-xl opacity-40'}`} />
                      
// // // // // //                       {!unlockedPlans[plan.id] ? (
// // // // // //                         <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1A120B]/80 p-6 text-center backdrop-blur-sm">
// // // // // //                           <Lock className="w-8 h-8 text-[#d9a406] mb-4" />
// // // // // //                           <h4 className="text-white font-bold mb-4">Plan Locked</h4>
// // // // // //                           <form onSubmit={(e) => handleFloorplanUnlock(e, plan.id)} className="w-full space-y-3">
// // // // // //                             <Input required name="name" placeholder="Name" className="h-10 bg-[#2C1E16] border-[#d9a406]/30 text-white text-sm focus:border-[#d9a406]" />
// // // // // //                             <Input required name="phone" type="tel" placeholder="Phone" className="h-10 bg-[#2C1E16] border-[#d9a406]/30 text-white text-sm focus:border-[#d9a406]" />
// // // // // //                             <Button type="submit" className="w-full bg-[#d9a406] text-black font-bold h-10 hover:bg-white">
// // // // // //                               <Unlock className="w-4 h-4 mr-2" /> Unlock to View
// // // // // //                             </Button>
// // // // // //                           </form>
// // // // // //                         </div>
// // // // // //                       ) : (
// // // // // //                         <div className="absolute bottom-4 left-0 right-0 flex justify-center">
// // // // // //                           <Button variant="secondary" size="sm" className="bg-[#d9a406] text-black hover:bg-white font-bold" onClick={() => openModal('brochure')}>
// // // // // //                              Download Full PDF
// // // // // //                           </Button>
// // // // // //                         </div>
// // // // // //                       )}
// // // // // //                     </div>
// // // // // //                   </Card>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //             </AnimatePresence>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= AMENITIES ================= */}
// // // // // //       <section className="py-20 bg-[#1A120B]">
// // // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // // // //           <div className="text-center mb-16">
// // // // // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">30+ World-Class Amenities</h2>
// // // // // //             <p className="text-xl text-[#d9a406]">A 16,000 Sq.ft Clubhouse where leisure meets lifestyle.</p>
// // // // // //           </div>

// // // // // //           <Tabs defaultValue="clubhouse" className="w-full">
// // // // // //             <div className="flex justify-center mb-12">
// // // // // //               <TabsList className="bg-[#2C1E16] p-1 rounded-full border border-[#d9a406]/20">
// // // // // //                 <TabsTrigger value="clubhouse" className="rounded-full px-8 py-3 data-[state=active]:bg-[#d9a406] data-[state=active]:text-black text-gray-400 transition-all font-semibold">
// // // // // //                   Clubhouse (16,000 Sft)
// // // // // //                 </TabsTrigger>
// // // // // //                 <TabsTrigger value="outdoor" className="rounded-full px-8 py-3 data-[state=active]:bg-[#d9a406] data-[state=active]:text-black text-gray-400 transition-all font-semibold">
// // // // // //                   Outdoor & Recreational
// // // // // //                 </TabsTrigger>
// // // // // //               </TabsList>
// // // // // //             </div>

// // // // // //             <TabsContent value="clubhouse">
// // // // // //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
// // // // // //                 {[
// // // // // //                   { icon: LayoutDashboard, label: "Reception Hall" }, { icon: BookOpen, label: "Reading Lounge" },
// // // // // //                   { icon: Gamepad2, label: "Indoor Games" }, { icon: Users, label: "Kids Play Area" },
// // // // // //                   { icon: Leaf, label: "Meditation Hall" }, { icon: Coffee, label: "Lounge Area" },
// // // // // //                   { icon: Music, label: "Party Hall" }, { icon: Utensils, label: "Dining Area" },
// // // // // //                   { icon: Dumbbell, label: "Ultra Gym" }, { icon: Wind, label: "Steam & Sauna" },
// // // // // //                   { icon: Footprints, label: "Cardio Room" }, { icon: MonitorPlay, label: "Mini Theatre" },
// // // // // //                   { icon: Table2, label: "Billiards Table" }, { icon: Table2, label: "Table Tennis" },
// // // // // //                   { icon: Users, label: "Association Room" }, { icon: Tv, label: "Guest Rooms" }
// // // // // //                 ].map((item, i) => (
// // // // // //                   <div key={i} className="flex items-center gap-4 bg-[#2C1E16] border border-[#3E2B20] p-4 rounded-xl hover:border-[#d9a406] transition-colors group">
// // // // // //                     <item.icon className="w-5 h-5 text-[#d9a406] group-hover:scale-110 transition-transform" />
// // // // // //                     <span className="text-gray-300 font-medium group-hover:text-white">{item.label}</span>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </TabsContent>
            
// // // // // //             <TabsContent value="outdoor">
// // // // // //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
// // // // // //                  {[
// // // // // //                   { icon: Waves, label: "Swimming Pool" }, { icon: Waves, label: "Kids Pool" },
// // // // // //                   { icon: Waves, label: "Jacuzzi" }, { icon: LayoutDashboard, label: "Multipurpose Court" },
// // // // // //                   { icon: Footprints, label: "Skating Rink" }, { icon: Footprints, label: "Jogging Track" },
// // // // // //                   { icon: Landmark, label: "Amphitheatre" }, { icon: Flower2, label: "Butterfly Garden" },
// // // // // //                   { icon: Users, label: "Senior Seating" }, { icon: Waves, label: "Fountain" },
// // // // // //                   { icon: Trees, label: "Planting Deck" }, { icon: LayoutDashboard, label: "Chess Pawn" }
// // // // // //                 ].map((item, i) => (
// // // // // //                   <div key={i} className="flex items-center gap-4 bg-[#2C1E16] border border-[#3E2B20] p-4 rounded-xl hover:border-[#d9a406] transition-colors group">
// // // // // //                     <item.icon className="w-5 h-5 text-[#d9a406] group-hover:scale-110 transition-transform" />
// // // // // //                     <span className="text-gray-300 font-medium group-hover:text-white">{item.label}</span>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </TabsContent>
// // // // // //           </Tabs>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= SPECIFICATIONS ================= */}
// // // // // //       <section className="py-24 bg-[#2C1E16]">
// // // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // // // //           <div className="mb-16 text-center">
// // // // // //             <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">Premium</h2>
// // // // // //             <p className="text-3xl font-light uppercase tracking-widest text-[#d9a406]">Specifications</p>
// // // // // //           </div>
// // // // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
// // // // // //             <div className="space-y-0">
// // // // // //               {[
// // // // // //                 { icon: Frame, title: "Framed Structure", desc: "Mivan Constructions" },
// // // // // //                 { icon: BrickWall, title: "Walls", desc: '8" RCC walls (Concrete walls)' },
// // // // // //                 { icon: DoorOpen, title: "Doors", desc: "WPC Doors for Main & Internal doors" },
// // // // // //                 { icon: AppWindow, title: "Window", desc: "UPVC windows with mosquito mesh" },
// // // // // //                 { icon: Layers, title: "Flooring", desc: "2'x4' vitrified tiles flooring for living, dining, kitchen & bedrooms. 15\"x15\" Anti-skid tiles for balcony." },
// // // // // //                 { icon: Bath, title: "Toilet", desc: "Kerovit by Kajaria bath fittings. 2'x1' anti skid ceramic tiles." },
// // // // // //                 { icon: Wrench, title: "Plumbing", desc: "Supreme / Ashirvad CPVC CP fittings with Jaguar / Parryware." }
// // // // // //               ].map((s, i) => (
// // // // // //                  <div key={i} className="flex gap-5 py-6 border-b border-[#4A3525]">
// // // // // //                   <div className="shrink-0 pt-1"><s.icon className="w-8 h-8 text-[#d9a406]" /></div>
// // // // // //                   <div><h4 className="font-bold text-lg text-white uppercase mb-1">{s.title}</h4><p className="text-gray-400 text-sm">{s.desc}</p></div>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //             <div className="relative h-full min-h-[600px] w-full hidden lg:block">
// // // // // //               <div className="absolute inset-0 bg-[#d9a406]/10 rounded-t-full border border-[#d9a406]/30"></div>
// // // // // //               <img src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/generated-image%20(54).png" alt="Interior" className="w-full h-full object-cover rounded-t-full shadow-2xl" />
// // // // // //             </div>
// // // // // //             <div className="space-y-0">
// // // // // //                {[
// // // // // //                 { icon: PaintRoller, title: "Painting", desc: "2 Coats of Nippon Putty. One Coat of primer & Two Coats of Nippon Emulsion for internal walls. Nippon Exterior for external." },
// // // // // //                 { icon: Zap, title: "Electrical", desc: "Concealed Finolex / Anchor copper wiring. Anchor Roma Modular Switches." },
// // // // // //                 { icon: Tv, title: "Communication", desc: "Telephone points in Living & TV point in Living and Master Bedroom." },
// // // // // //                 { icon: Droplets, title: "Water Supply", desc: "Water supply from bore well with overhead tank." },
// // // // // //                 { icon: ArrowUpFromLine, title: "Lift", desc: "3 Lifts of fully Automatic with 8 passenger and 1 service lift." },
// // // // // //                 { icon: BatteryCharging, title: "Generator", desc: "100% power back-up for each flat, lift, motor & common area lighting." }
// // // // // //               ].map((s, i) => (
// // // // // //                  <div key={i} className="flex gap-5 py-6 border-b border-[#4A3525]">
// // // // // //                   <div className="shrink-0 pt-1"><s.icon className="w-8 h-8 text-[#d9a406]" /></div>
// // // // // //                   <div><h4 className="font-bold text-lg text-white uppercase mb-1">{s.title}</h4><p className="text-gray-400 text-sm">{s.desc}</p></div>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= BROCHURE CTA BIG BANNER ================= */}
// // // // // //       <section className="py-12 bg-[#1A120B]">
// // // // // //         <div className="container mx-auto px-4 max-w-6xl">
// // // // // //           <div className="relative rounded-2xl overflow-hidden group border border-[#d9a406]/30 h-[360px] md:h-[400px]">
// // // // // //             <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL-palm-altezze-banner2.webp')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
// // // // // //             <div className="absolute inset-0 bg-gradient-to-r from-[#1A120B]/95 via-[#1A120B]/80 to-[#1A120B]/40" />
// // // // // //             <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 space-y-6">
// // // // // //               <h2 className="text-2xl md:text-5xl font-serif tracking-wider text-white">GET COST SHEET & BROCHURE</h2>
// // // // // //               <div className="w-24 h-1 bg-[#d9a406] rounded-full" />
// // // // // //               <p className="text-gray-300 max-w-xl text-sm md:text-lg">Click below to download brochure of Palm Altezze & register for special offers.</p>
// // // // // //               <Button onClick={() => openModal('brochure')} className="bg-[#d9a406] hover:bg-white text-black px-12 py-6 text-lg font-bold uppercase shadow-[0_0_20px_rgba(217,164,6,0.4)]">
// // // // // //                 Download Now
// // // // // //               </Button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= REVIEWS ================= */}
// // // // // //       <section className="py-24 bg-[#2C1E16]">
// // // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // // // //           <div className="text-center mb-12">
// // // // // //             <h2 className="text-4xl font-serif text-white font-bold">Client Testimonials</h2>
// // // // // //             <div className="flex items-center gap-3 mt-4 justify-center">
// // // // // //               <div className="flex gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 text-[#d9a406] fill-[#d9a406]" />)}</div>
// // // // // //               <span className="text-gray-300 text-sm font-medium">5.0 Average on Google</span>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //             {[
// // // // // //               { name: "Anusha V", role: "Home Buyer", loc: "RRL Palacio", text: "After doing lot of research I purchased a flat. My kid loves the society! I like their gym, movie theater and rooftop pool." },
// // // // // //               { name: "Rahil R", role: "Home Buyer", loc: "RRL Palacio", text: "Spacious and well-designed apartments. Friendly staff, great amenities like clubhouse, gym, pool. Pet-friendly." },
// // // // // //               { name: "Kishore Babu", role: "Home Buyer", loc: "RRL Palm Altezze", text: "Structure quality is very good, very good atmosphere with all around Greenery. Great amenities like home theater, steam & sauna, gym." }
// // // // // //             ].map((review, idx) => (
// // // // // //               <div key={idx} className="bg-[#1A120B] p-6 rounded-2xl border border-[#4A3525] hover:border-[#d9a406] transition-colors flex flex-col h-full">
// // // // // //                 <div className="flex items-center gap-3 mb-4">
// // // // // //                   <div className="w-10 h-10 rounded-full bg-[#3E2B20] flex items-center justify-center text-[#d9a406] font-bold">{review.name.charAt(0)}</div>
// // // // // //                   <div><h4 className="font-bold text-white text-sm">{review.name}</h4><p className="text-xs text-[#d9a406]">{review.loc}</p></div>
// // // // // //                 </div>
// // // // // //                 <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#d9a406] fill-[#d9a406]" />)}</div>
// // // // // //                 <p className="text-gray-400 text-sm leading-relaxed italic flex-grow">"{review.text}"</p>
// // // // // //                 <div className="pt-4 border-t border-[#3E2B20] mt-4"><span className="text-xs font-semibold text-[#1A120B] bg-[#d9a406] px-3 py-1 rounded-full">{review.role}</span></div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= CONNECTIVITY ================= */}
// // // // // //       <section className="py-20 bg-[#1A120B]">
// // // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // // // //           <div className="space-y-8">
// // // // // //             <div>
// // // // // //               <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Quick Access to <br /> <span className="text-[#d9a406]">Varthur Road</span></h2>
// // // // // //               <p className="text-gray-400 text-lg">Palm Altezze benefits from low traffic volumes on Varthur Road. Three roads seamlessly connect to the main road in minutes.</p>
// // // // // //             </div>
// // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// // // // // //               {[
// // // // // //                 { icon: Train, title: "Transport", items: ["Purple Line Metro", "Carmelaram Station", "SH-35 Connectivity"] },
// // // // // //                 { icon: BookOpen, title: "Schools", items: ["Vasishta & Vagdevi Vilas", "The Foundation School", "VIBGYOR High School"] },
// // // // // //                 { icon: ShoppingCart, title: "Malls", items: ["Phoenix Marketcity", "Virginia Mall", "Inorbit Mall"] },
// // // // // //                 { icon: Hospital, title: "Hospitals", items: ["Manipal Hospital", "Sahasra Hospitals", "Cloudnine Hospital"] }
// // // // // //               ].map((cat, i) => (
// // // // // //                 <div key={i} className="bg-[#2C1E16] p-6 rounded-2xl border border-[#4A3525] group">
// // // // // //                   <div className="flex items-center gap-3 mb-4 border-b border-[#3E2B20] pb-3">
// // // // // //                     <cat.icon className="w-6 h-6 text-[#d9a406]" />
// // // // // //                     <h3 className="font-bold text-white">{cat.title}</h3>
// // // // // //                   </div>
// // // // // //                   <ul className="space-y-2 text-sm text-gray-400">
// // // // // //                     {cat.items.map((item, idx) => <li key={idx}>• {item}</li>)}
// // // // // //                   </ul>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden border border-[#d9a406]/30">
// // // // // //             <iframe src="https://www.google.com/maps?q=Varthur,Bangalore&output=embed" width="100%" height="100%" className="absolute inset-0 border-0 filter opacity-80 mix-blend-luminosity" loading="lazy"></iframe>
// // // // // //             <div className="absolute bottom-6 right-6 bg-[#1A120B]/90 p-4 rounded-xl border border-[#d9a406] shadow-xl backdrop-blur-sm">
// // // // // //               <div className="flex items-center gap-3">
// // // // // //                 <MapPin className="w-8 h-8 text-[#d9a406]" />
// // // // // //                 <div><p className="text-white font-bold text-sm">RRL Palm Altezze</p><p className="text-xs text-gray-400">Janthagondanahalli, Varthur</p></div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= FAQs ================= */}
// // // // // //       <section className="py-20 bg-[#2C1E16]">
// // // // // //         <div className="container mx-auto px-4 max-w-4xl">
// // // // // //            <div className="text-center mb-16">
// // // // // //             <h2 className="text-4xl font-bold text-[#d9a406] mb-4">Frequently Asked Questions</h2>
// // // // // //           </div>
// // // // // //           <div className="space-y-4">
// // // // // //             {[
// // // // // //               { q: "What is the total area of RRL Palm Altezze?", a: "Built on 1.38 acres of land with 92% open space, featuring 1 tower with B+G+23 floors." },
// // // // // //               { q: "How many units are there per floor?", a: "Each floor has 5 units, offering a mix of 2 BHK and 3 BHK apartments." },
// // // // // //               { q: "What construction technology is used?", a: "We use Mivan construction technology with RCC framed structure." },
// // // // // //               { q: "What is the payment plan?", a: "Pay only 5% now with no pre-EMI till possession. Flexible plans available." }
// // // // // //             ].map((faq, i) => (
// // // // // //               <details key={i} className="group bg-[#1A120B] border border-[#4A3525] rounded-xl p-6 cursor-pointer">
// // // // // //                 <summary className="text-white font-bold flex justify-between list-none">
// // // // // //                   {faq.q} <span className="text-[#d9a406] group-open:rotate-45 transition-transform">+</span>
// // // // // //                 </summary>
// // // // // //                 <p className="text-gray-400 mt-4 text-sm leading-relaxed">{faq.a}</p>
// // // // // //               </details>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= JOURNEY ================= */}
// // // // // //       <section className="py-24 bg-[#1A120B] overflow-hidden">
// // // // // //         <div className="container mx-auto px-4 md:px-8 max-w-6xl">
// // // // // //            <div className="text-center mb-20">
// // // // // //             <h2 className="text-4xl font-serif font-bold text-white mb-4">Discover Our <span className="text-[#d9a406]">Journey</span></h2>
// // // // // //             <div className="h-1 w-24 bg-[#d9a406] mx-auto rounded-full" />
// // // // // //           </div>
// // // // // //           <div className="grid md:grid-cols-4 gap-6 text-center">
// // // // // //             {[
// // // // // //               { year: "Trust", title: "On-Time Delivery", icon: Key },
// // // // // //               { year: "Expertise", title: "High-Rise & Premium", icon: Building2 },
// // // // // //               { year: "Innovation", title: "Pioneer in Commercial", icon: Briefcase },
// // // // // //               { year: "Growth", title: "200% Appreciation", icon: TrendingUp }
// // // // // //             ].map((j, i) => (
// // // // // //               <div key={i} className="bg-[#2C1E16] p-8 rounded-2xl border border-[#4A3525]">
// // // // // //                  <j.icon className="w-12 h-12 text-[#d9a406] mx-auto mb-4" />
// // // // // //                  <span className="text-xs text-[#d9a406] font-bold uppercase tracking-widest">{j.year}</span>
// // // // // //                  <h3 className="text-lg font-bold text-white mt-2">{j.title}</h3>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= COMPLETED PROJECTS ================= */}
// // // // // //       <section className="py-20 bg-[#2C1E16]">
// // // // // //         <div className="container mx-auto px-4 max-w-5xl">
// // // // // //            <h2 className="text-4xl font-serif font-bold text-white text-center mb-12">Successfully Completed <span className="text-[#d9a406]">Projects</span></h2>
// // // // // //            <div className="grid md:grid-cols-2 gap-8">
// // // // // //              {[
// // // // // //                { name: "RRL Palacio", loc: "Medahalli", status: "READY TO MOVE", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png" },
// // // // // //                { name: "RRL Nature Woods", loc: "Sarjapur", status: "COMPLETED", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png" }
// // // // // //              ].map((p, i) => (
// // // // // //                <div key={i} className="bg-[#1A120B] rounded-2xl overflow-hidden border border-[#4A3525]">
// // // // // //                  <div className="relative aspect-video">
// // // // // //                    <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-80" />
// // // // // //                    <span className="absolute top-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded border border-[#d9a406]">{p.status}</span>
// // // // // //                  </div>
// // // // // //                  <div className="p-6">
// // // // // //                    <h3 className="text-xl font-bold text-[#d9a406] mb-2">{p.name}</h3>
// // // // // //                    <p className="text-gray-400 text-sm mb-4"><MapPin className="inline w-4 h-4 mr-1" />{p.loc}, Bangalore</p>
// // // // // //                    <Button variant="outline" className="w-full border-[#d9a406] text-[#d9a406] hover:bg-[#d9a406] hover:text-black">View Details</Button>
// // // // // //                  </div>
// // // // // //                </div>
// // // // // //              ))}
// // // // // //            </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= CONTACT ================= */}
// // // // // //       <section className="py-20 bg-[#1A120B] border-t border-[#d9a406]/30">
// // // // // //         <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-2 gap-12">
// // // // // //           <div>
// // // // // //             <h2 className="text-4xl font-bold text-[#d9a406] mb-6">Get In Touch</h2>
// // // // // //             <div className="space-y-6">
// // // // // //               <div className="flex items-start gap-4"><MapPin className="w-6 h-6 text-[#d9a406]" /><p className="text-gray-300">Sy. No - 73/6 (Old 73/5), RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087.</p></div>
// // // // // //               <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-[#d9a406]" /><a href="tel:+918494966966" className="text-white font-bold hover:text-[#d9a406] transition-colors">+91 84 94 966 966</a></div>
// // // // // //               <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-[#d9a406]" /><a href="mailto:enquiry@rrlbuilders.com" className="text-gray-300 hover:text-[#d9a406] transition-colors">enquiry@rrlbuilders.com</a></div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <Card className="p-8 bg-[#2C1E16] border-[#4A3525]">
// // // // // //              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
// // // // // //              <form onSubmit={handleLeadSubmit} className="space-y-4">
// // // // // //                 <Input name="name" placeholder="Name" required className="bg-[#1A120B] border-[#4A3525] text-white focus:border-[#d9a406]" />
// // // // // //                 <Input name="email" type="email" placeholder="Email" required className="bg-[#1A120B] border-[#4A3525] text-white focus:border-[#d9a406]" />
// // // // // //                 <Input name="phone" type="tel" placeholder="Phone" required className="bg-[#1A120B] border-[#4A3525] text-white focus:border-[#d9a406]" />
// // // // // //                 <Button type="submit" className="w-full bg-[#d9a406] text-black font-bold h-12">Submit Enquiry</Button>
// // // // // //               </form>
// // // // // //           </Card>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= UNIFIED GLOBAL MODAL ================= */}
// // // // // //       <AnimatePresence>
// // // // // //         {modalState.isOpen && (
// // // // // //           <motion.div 
// // // // // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // // // // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
// // // // // //             onClick={closeModal}
// // // // // //           >
// // // // // //             <motion.div 
// // // // // //               initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
// // // // // //               onClick={e => e.stopPropagation()}
// // // // // //               className="bg-[#2C1E16] border border-[#d9a406]/50 p-8 rounded-2xl w-full max-w-md relative shadow-[0_0_50px_rgba(217,164,6,0.15)]"
// // // // // //             >
// // // // // //               <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="w-6 h-6" /></button>

// // // // // //               {isSubmitted ? (
// // // // // //                 <div className="text-center py-8">
// // // // // //                   <CheckCircle className="w-16 h-16 text-[#d9a406] mx-auto mb-4" />
// // // // // //                   <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
// // // // // //                   <p className="text-gray-400 mb-6">
// // // // // //                     {modalState.type === 'vr' ? "Redirecting to your VR experience..." : "Your brochure link will be sent shortly."}
// // // // // //                   </p>
// // // // // //                   <Button onClick={closeModal} className="bg-white text-black font-bold w-full">Close</Button>
// // // // // //                 </div>
// // // // // //               ) : (
// // // // // //                 <>
// // // // // //                   <div className="text-center mb-8">
// // // // // //                     <h3 className="text-2xl font-bold text-white mb-2">
// // // // // //                       {modalState.type === 'vr' ? "Book VR Experience" : "Download Brochure"}
// // // // // //                     </h3>
// // // // // //                     <p className="text-gray-400 text-sm">
// // // // // //                       {modalState.type === 'vr' ? "Provide your details to unlock the virtual tour." : "Get instant access to floor plans and cost sheets."}
// // // // // //                     </p>
// // // // // //                   </div>

// // // // // //                   <form onSubmit={handleLeadSubmit} className="space-y-4">
// // // // // //                     <Input name="name" placeholder="Your Name" required className="bg-[#1A120B] border-[#4A3525] text-white h-12 focus:border-[#d9a406]" />
// // // // // //                     <Input name="phone" type="tel" placeholder="Phone Number" required className="bg-[#1A120B] border-[#4A3525] text-white h-12 focus:border-[#d9a406]" />
// // // // // //                     <Input name="email" type="email" placeholder="Email Address" required className="bg-[#1A120B] border-[#4A3525] text-white h-12 focus:border-[#d9a406]" />
// // // // // //                     <Button type="submit" className="w-full bg-[#d9a406] text-black font-bold h-14 mt-4 text-lg hover:bg-white transition-colors">
// // // // // //                       {modalState.type === 'vr' ? "Start Virtual Tour" : "Get Brochure PDF"}
// // // // // //                     </Button>
// // // // // //                   </form>
// // // // // //                 </>
// // // // // //               )}
// // // // // //             </motion.div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //       {/* ================= MOBILE STICKY CTA ================= */}
// // // // // //       <div className="md:hidden fixed bottom-0 w-full z-40 bg-[#2C1E16] border-t border-[#d9a406]/30 p-3 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
// // // // // //         <Button onClick={() => openModal('brochure')} className="flex-1 bg-[#d9a406] text-black font-bold h-12">Brochure</Button>
// // // // // //         <a href="https://wa.me/918494966966" className="flex-1">
// // // // // //           <Button variant="outline" className="w-full bg-[#1A120B] border-[#d9a406] text-[#d9a406] h-12 font-bold hover:bg-[#d9a406] hover:text-black">WhatsApp</Button>
// // // // // //         </a>
// // // // // //       </div>

// // // // // //     </main>
// // // // // //   );
// // // // // // }

// // // // // "use client"

// // // // // import { useState, useEffect } from "react"
// // // // // import { motion, AnimatePresence } from "framer-motion"
// // // // // import { Button } from "@/components/ui/button"
// // // // // import { Input } from "@/components/ui/input"
// // // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // // // // import {
// // // // //   Phone, Leaf, Users, Zap, Train, Hospital, BookOpen,
// // // // //   ShoppingCart, Award, Mail, MapPin, X, Wind, Footprints, Waves, Music,
// // // // //   Dumbbell, MonitorPlay, Landmark, Sun, ShieldCheck, LayoutDashboard, Trees,
// // // // //   Coffee, Table2, Construction, Download, Lock, Unlock, ArrowRight, Star,
// // // // //   Utensils, Gamepad2, Tv, Flower2, Briefcase, TrendingUp, Key, Glasses,
// // // // //   Frame, BrickWall, DoorOpen, AppWindow, Layers, Bath, Wrench, PaintRoller,
// // // // //   ArrowUpFromLine, BatteryCharging, Droplets, CheckCircle, ChevronRight
// // // // // } from "lucide-react"

// // // // // // --- Data ---
// // // // // const floorPlansData = [
// // // // //   { id: "01", type: "2BHK", facing: "North", area: 1265, dims: { living: "17'9\" x 11'6\"", masterBed: "13'0\" x 12'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203915.png" },
// // // // //   { id: "02", type: "3BHK", facing: "North", area: 1495, dims: { living: "16'0\" x 12'0\"", masterBed: "13'0\" x 12'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203938.png" },
// // // // //   { id: "03", type: "3BHK", facing: "North", area: 1630, dims: { living: "17'9\" x 12'0\"", masterBed: "13'0\" x 11'6\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203954.png" },
// // // // // ];

// // // // // export default function RRLPalmAltezzeRedesign() {
// // // // //   const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'brochure' | 'vr' | null }>({ isOpen: false, type: null });
// // // // //   const [isSubmitted, setIsSubmitted] = useState(false);
// // // // //   const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});

// // // // //   const openModal = (type: 'brochure' | 'vr') => setModalState({ isOpen: true, type });
// // // // //   const closeModal = () => { setModalState({ isOpen: false, type: null }); setIsSubmitted(false); };

// // // // //   const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // // // //     e.preventDefault();
// // // // //     const formId = modalState.type === 'vr' ? 'xkgkyavn' : 'xldarjon';
// // // // //     setIsSubmitted(true);
// // // // //     if (modalState.type === 'vr') {
// // // // //       setTimeout(() => { window.location.href = "/vr-tour"; }, 1500);
// // // // //     }
// // // // //   };

// // // // //   const handleFloorplanUnlock = (e: React.FormEvent<HTMLFormElement>, planId: string) => {
// // // // //     e.preventDefault();
// // // // //     setUnlockedPlans(prev => ({ ...prev, [planId]: true }));
// // // // //   };

// // // // //   return (
// // // // //     <main className="w-full bg-[#030712] min-h-screen text-slate-300 font-sans selection:bg-[#E5C158] selection:text-black overflow-x-hidden">
      
// // // // //       {/* ================= FLOATING GLASS HEADER ================= */}
// // // // //       <header className="fixed top-6 w-full z-50 px-4 md:px-8 flex justify-center">
// // // // //         <div className="w-full max-w-7xl bg-[#0F172A]/70 backdrop-blur-xl border border-white/10 rounded-full h-16 flex items-center justify-between px-6 md:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
// // // // //           <div className="flex items-center gap-3">
// // // // //             <div className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
// // // // //             <span className="text-lg md:text-xl font-serif font-bold text-white tracking-widest uppercase">Palm Altezze</span>
// // // // //           </div>
// // // // //           <div className="flex items-center gap-6">
// // // // //             <a href="tel:+918494966966" className="hidden md:flex items-center gap-2 text-sm text-slate-300 hover:text-[#E5C158] transition-colors">
// // // // //               <Phone className="w-4 h-4" /> 84 94 966 966
// // // // //             </a>
// // // // //             <button onClick={() => openModal('brochure')} className="bg-[#E5C158] text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(229,193,88,0.2)]">
// // // // //               Cost Sheet
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </header>

// // // // //       {/* ================= IMMERSIVE HERO ================= */}
// // // // //       <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center pt-20">
// // // // //         {/* Full Bleed Background */}
// // // // //         <div className="absolute inset-0 z-0">
// // // // //           <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/ok.png" alt="Hero" className="w-full h-full object-cover" />
// // // // //           <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-[#030712]/40 to-[#030712] z-10" />
// // // // //         </div>

// // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20 grid lg:grid-cols-12 gap-8 items-center">
          
// // // // //           {/* Left Text */}
// // // // //           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="lg:col-span-7 space-y-6">
// // // // //             <div className="inline-block border border-[#E5C158]/50 bg-[#E5C158]/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[#E5C158] text-xs font-bold tracking-widest uppercase">
// // // // //               RERA Approved • Mid 2027
// // // // //             </div>
// // // // //             <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.1]">
// // // // //               Elevate Your <br />
// // // // //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] to-[#FDE68A]">Perspective.</span>
// // // // //             </h1>
// // // // //             <p className="text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed">
// // // // //               Premium 2 & 3 BHK luxury residences in Varthur. Featuring 50% UDS, Mivan Technology, and an expansive 16,000 sq.ft clubhouse.
// // // // //             </p>
// // // // //           </motion.div>

// // // // //           {/* Right Floating Glass Form */}
// // // // //           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
// // // // //             <div className="bg-[#0F172A]/60 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
// // // // //               <div className="absolute top-0 right-0 w-40 h-40 bg-[#E5C158] rounded-full mix-blend-screen filter blur-[80px] opacity-20" />
// // // // //               <h3 className="text-2xl font-bold text-white mb-2">Priority Access</h3>
// // // // //               <p className="text-sm text-slate-400 mb-6">Register to unlock exclusive launch pricing.</p>
              
// // // // //               <form onSubmit={handleLeadSubmit} className="space-y-4 relative z-10">
// // // // //                 <Input name="name" placeholder="Full Name" required className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-[#E5C158] transition-all" />
// // // // //                 <Input name="phone" type="tel" placeholder="Mobile Number" required className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-[#E5C158] transition-all" />
// // // // //                 <Input name="email" type="email" placeholder="Email Address" required className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-[#E5C158] transition-all" />
// // // // //                 <Button type="submit" className="w-full bg-[#E5C158] hover:bg-white text-black font-bold h-14 rounded-xl text-lg mt-2 transition-all group">
// // // // //                   Unlock Details <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
// // // // //                 </Button>
// // // // //               </form>
// // // // //             </div>
// // // // //           </motion.div>

// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ================= BENTO BOX GLANCE & USP ================= */}
// // // // //       <section className="py-24 bg-[#030712] relative">
// // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // // //           <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
// // // // //             <div>
// // // // //               <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">By The <span className="text-[#E5C158]">Numbers</span></h2>
// // // // //               <p className="text-slate-400">A masterpiece of modern engineering.</p>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Bento Grid */}
// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px]">
// // // // //             {/* Big Stat Box */}
// // // // //             <div className="md:col-span-2 md:row-span-2 bg-[#0F172A] rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
// // // // //                <div className="absolute -bottom-10 -right-10 text-[#1E293B] group-hover:text-[#E5C158]/10 transition-colors duration-500">
// // // // //                   <Construction className="w-64 h-64" />
// // // // //                </div>
// // // // //                <div className="relative z-10 h-full flex flex-col justify-between">
// // // // //                  <div className="w-12 h-12 rounded-full bg-[#E5C158]/10 flex items-center justify-center text-[#E5C158]"><ShieldCheck /></div>
// // // // //                  <div>
// // // // //                    <h3 className="text-5xl font-bold text-white mb-2">Mivan</h3>
// // // // //                    <p className="text-slate-400 text-lg">Monolithic Technology. Zero leakages, earthquake resistant, and unmatched strength.</p>
// // // // //                  </div>
// // // // //                </div>
// // // // //             </div>

// // // // //             {/* Small Stat Boxes */}
// // // // //             <div className="bg-[#0F172A] rounded-3xl p-6 border border-white/5 flex flex-col justify-center items-center text-center">
// // // // //               <p className="text-4xl font-bold text-[#E5C158] mb-1">50%</p>
// // // // //               <p className="text-xs uppercase tracking-widest text-slate-400">UDS Share</p>
// // // // //             </div>
            
// // // // //             <div className="bg-[#0F172A] rounded-3xl p-6 border border-white/5 flex flex-col justify-center items-center text-center">
// // // // //                <p className="text-4xl font-bold text-[#E5C158] mb-1">115</p>
// // // // //               <p className="text-xs uppercase tracking-widest text-slate-400">Exclusive Units</p>
// // // // //             </div>

// // // // //             <div className="bg-[#0F172A] rounded-3xl p-6 border border-white/5 flex flex-col justify-center items-center text-center">
// // // // //                <p className="text-4xl font-bold text-[#E5C158] mb-1">1.38</p>
// // // // //               <p className="text-xs uppercase tracking-widest text-slate-400">Acres Extent</p>
// // // // //             </div>

// // // // //             <div className="bg-gradient-to-br from-[#E5C158] to-[#B49335] rounded-3xl p-6 flex flex-col justify-between cursor-pointer shadow-[0_0_30px_rgba(229,193,88,0.2)] hover:scale-[1.02] transition-transform" onClick={() => openModal('brochure')}>
// // // // //                <Download className="text-black w-8 h-8" />
// // // // //                <div>
// // // // //                  <p className="text-black font-bold text-xl leading-tight">Download <br/>Brochure</p>
// // // // //                </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ================= SPLIT SCREEN VR ================= */}
// // // // //       <section className="py-24 bg-[#030712]">
// // // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // // //           <div className="flex flex-col lg:flex-row gap-0 rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0F172A]">
            
// // // // //             <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
// // // // //               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white uppercase tracking-wider w-fit mb-6">
// // // // //                 <Glasses className="w-4 h-4 text-[#E5C158]" /> Immersive Experience
// // // // //               </div>
// // // // //               <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Walk through your <br/><span className="text-[#E5C158]">future home.</span></h2>
// // // // //               <p className="text-slate-400 text-lg mb-10 leading-relaxed">Don't just look at pictures. Experience the volume, light, and layout of our premium residences through our exclusive Virtual Reality tour.</p>
// // // // //               <Button onClick={() => openModal('vr')} className="bg-white text-black hover:bg-[#E5C158] h-14 px-8 rounded-xl font-bold w-fit transition-all">
// // // // //                 Book Free VR Session
// // // // //               </Button>
// // // // //             </div>

// // // // //             <div className="flex-1 relative min-h-[400px]">
// // // // //               <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Visualize%20Your%20Home%20Virtually%202.png" alt="VR" className="absolute inset-0 w-full h-full object-cover" />
// // // // //               {/* Sleek Gradient Fade */}
// // // // //               <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0F172A] to-transparent hidden lg:block" />
// // // // //             </div>

// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ================= GATED FLOOR PLANS ================= */}
// // // // //       <section className="py-24 bg-[#030712] relative overflow-hidden" id="floorplans">
// // // // //         {/* Subtle grid background */}
// // // // //         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light" />
        
// // // // //         <div className="container mx-auto px-4 max-w-7xl relative z-10">
// // // // //           <div className="text-center mb-16">
// // // // //             <h2 className="text-4xl font-serif text-white mb-4">Architectural <span className="text-[#E5C158]">Blueprints</span></h2>
// // // // //             <p className="text-slate-400">Unlock to view high-resolution 2BHK & 3BHK floor plans.</p>
// // // // //           </div>

// // // // //           <div className="grid md:grid-cols-3 gap-8">
// // // // //             {floorPlansData.map((plan) => (
// // // // //               <div key={plan.id} className="group relative bg-[#0F172A]/50 rounded-[2rem] border border-white/10 p-6 hover:border-[#E5C158]/50 transition-colors backdrop-blur-sm">
// // // // //                 <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-6">
// // // // //                   <div>
// // // // //                     <h3 className="text-3xl font-bold text-white font-serif">{plan.type}</h3>
// // // // //                     <p className="text-slate-400 text-sm mt-1">Unit {plan.id} • {plan.facing} Facing</p>
// // // // //                   </div>
// // // // //                   <div className="text-right">
// // // // //                     <span className="text-3xl font-light text-[#E5C158]">{plan.area}</span>
// // // // //                     <span className="text-xs text-slate-500 block uppercase tracking-widest">Sq.Ft</span>
// // // // //                   </div>
// // // // //                 </div>
                
// // // // //                 <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
// // // // //                   <img src={plan.image} alt="Plan" className={`w-full h-full object-contain p-4 transition-all duration-700 ${unlockedPlans[plan.id] ? 'blur-0 scale-100' : 'blur-xl scale-110 opacity-30 grayscale'}`} />
                  
// // // // //                   {!unlockedPlans[plan.id] && (
// // // // //                     <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
// // // // //                       <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-md">
// // // // //                         <Lock className="w-5 h-5 text-[#E5C158]" />
// // // // //                       </div>
// // // // //                       <form onSubmit={(e) => handleFloorplanUnlock(e, plan.id)} className="w-full space-y-3">
// // // // //                         <Input required name="name" placeholder="Name" className="h-12 bg-black/50 border-white/10 text-white rounded-xl focus:border-[#E5C158] text-center" />
// // // // //                         <Input required name="phone" type="tel" placeholder="Phone" className="h-12 bg-black/50 border-white/10 text-white rounded-xl focus:border-[#E5C158] text-center" />
// // // // //                         <Button type="submit" className="w-full bg-[#E5C158] text-black font-bold h-12 rounded-xl">
// // // // //                           <Unlock className="w-4 h-4 mr-2" /> Unlock Blueprint
// // // // //                         </Button>
// // // // //                       </form>
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ================= MINIMALIST AMENITIES MARQUEE/GRID ================= */}
// // // // //       <section className="py-24 bg-[#0F172A] border-y border-white/5">
// // // // //         <div className="container mx-auto px-4 max-w-7xl">
// // // // //           <div className="flex flex-col md:flex-row gap-12 items-center">
// // // // //             <div className="md:w-1/3">
// // // // //               <h2 className="text-4xl font-serif text-white mb-4">The Club <br/> <span className="text-[#E5C158]">Altezze.</span></h2>
// // // // //               <p className="text-slate-400 mb-8 leading-relaxed">A 16,000 sq.ft sanctuary designed for absolute leisure. Featuring over 30+ meticulously crafted amenities.</p>
// // // // //               <Button variant="outline" onClick={() => openModal('brochure')} className="border-[#E5C158] text-[#E5C158] hover:bg-[#E5C158] hover:text-black rounded-full px-8 h-12">
// // // // //                 Download Full List
// // // // //               </Button>
// // // // //             </div>
            
// // // // //             <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
// // // // //               {[
// // // // //                 { icon: Waves, label: "Infinity Pool" }, { icon: Dumbbell, label: "Ultra Gym" },
// // // // //                 { icon: MonitorPlay, label: "Mini Theatre" }, { icon: Wind, label: "Steam & Sauna" },
// // // // //                 { icon: Gamepad2, label: "Indoor Games" }, { icon: Leaf, label: "Zen Garden" },
// // // // //                 { icon: Coffee, label: "Club Lounge" }, { icon: Music, label: "Party Hall" },
// // // // //                 { icon: Table2, label: "Billiards" }
// // // // //               ].map((item, i) => (
// // // // //                 <div key={i} className="bg-[#030712]/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:bg-white/5 transition-colors">
// // // // //                   <item.icon className="w-6 h-6 text-[#E5C158]" strokeWidth={1.5} />
// // // // //                   <span className="text-sm font-medium text-slate-300">{item.label}</span>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ================= UNIFIED GLOBAL MODAL ================= */}
// // // // //       <AnimatePresence>
// // // // //         {modalState.isOpen && (
// // // // //           <motion.div 
// // // // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // // // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
// // // // //             onClick={closeModal}
// // // // //           >
// // // // //             <motion.div 
// // // // //               initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
// // // // //               onClick={e => e.stopPropagation()}
// // // // //               className="bg-[#0F172A] border border-white/10 p-10 rounded-[2.5rem] w-full max-w-md relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
// // // // //             >
// // // // //               <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E5C158] rounded-full filter blur-[80px] opacity-20" />
              
// // // // //               <button onClick={closeModal} className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/5 p-2 rounded-full"><X className="w-5 h-5" /></button>

// // // // //               {isSubmitted ? (
// // // // //                 <div className="text-center py-8 relative z-10">
// // // // //                   <div className="w-20 h-20 bg-[#E5C158]/10 rounded-full flex items-center justify-center mx-auto mb-6">
// // // // //                     <CheckCircle className="w-10 h-10 text-[#E5C158]" />
// // // // //                   </div>
// // // // //                   <h3 className="text-3xl font-serif text-white mb-2">Confirmed.</h3>
// // // // //                   <p className="text-slate-400 mb-8">
// // // // //                     {modalState.type === 'vr' ? "Redirecting to your VR experience..." : "Your brochure link will be sent shortly."}
// // // // //                   </p>
// // // // //                   <Button onClick={closeModal} className="bg-white text-black font-bold w-full rounded-xl h-12">Return to site</Button>
// // // // //                 </div>
// // // // //               ) : (
// // // // //                 <div className="relative z-10">
// // // // //                   <div className="mb-8">
// // // // //                     <h3 className="text-3xl font-serif text-white mb-2">
// // // // //                       {modalState.type === 'vr' ? "Book VR Tour" : "Request Info"}
// // // // //                     </h3>
// // // // //                     <p className="text-slate-400 text-sm">
// // // // //                       {modalState.type === 'vr' ? "Unlock the immersive virtual walkthrough." : "Get instant access to floor plans and cost sheets."}
// // // // //                     </p>
// // // // //                   </div>

// // // // //                   <form onSubmit={handleLeadSubmit} className="space-y-4">
// // // // //                     <Input name="name" placeholder="Your Name" required className="bg-black/50 border-white/10 text-white h-14 rounded-xl focus:border-[#E5C158]" />
// // // // //                     <Input name="phone" type="tel" placeholder="Phone Number" required className="bg-black/50 border-white/10 text-white h-14 rounded-xl focus:border-[#E5C158]" />
// // // // //                     <Input name="email" type="email" placeholder="Email Address" required className="bg-black/50 border-white/10 text-white h-14 rounded-xl focus:border-[#E5C158]" />
// // // // //                     <Button type="submit" className="w-full bg-[#E5C158] text-black font-bold h-14 rounded-xl mt-4 text-lg hover:bg-white transition-all">
// // // // //                       {modalState.type === 'vr' ? "Access Tour" : "Download PDF"}
// // // // //                     </Button>
// // // // //                   </form>
// // // // //                 </div>
// // // // //               )}
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>

// // // // //       {/* ================= MOBILE STICKY CTA ================= */}
// // // // //       <div className="md:hidden fixed bottom-6 left-4 right-4 z-40 flex gap-3">
// // // // //         <Button onClick={() => openModal('brochure')} className="flex-1 bg-[#E5C158] text-black font-bold h-14 rounded-2xl shadow-2xl">
// // // // //           Brochure
// // // // //         </Button>
// // // // //         <a href="https://wa.me/918494966966" className="flex-1">
// // // // //           <Button variant="outline" className="w-full bg-[#0F172A]/90 backdrop-blur-md border-white/10 text-white h-14 font-bold rounded-2xl shadow-2xl">
// // // // //             WhatsApp
// // // // //           </Button>
// // // // //         </a>
// // // // //       </div>

// // // // //     </main>
// // // // //   );
// // // // // }

// // // // "use client"

// // // // import { useState, useEffect } from "react"
// // // // import { motion, AnimatePresence, Variants } from "framer-motion"
// // // // import { Button } from "@/components/ui/button"
// // // // import { Card } from "@/components/ui/card"
// // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // // // import { Input } from "@/components/ui/input"
// // // // import Image from "next/image"
// // // // import Link from "next/link"
// // // // import {
// // // //   Phone, Building2, Leaf, Users, Zap, Train, Hospital, BookOpen,
// // // //   ShoppingCart, Award, Mail, MapPin, X, Wind, Footprints, Waves, Music,
// // // //   Dumbbell, MonitorPlay, Landmark, Sun, ShieldCheck, LayoutDashboard, Trees,
// // // //   Coffee, Table2, Construction, Download, Maximize2, Lock, Unlock, ArrowRight, Star,
// // // //   Utensils, Gamepad2, Tv, Flower2, Briefcase, TrendingUp, Key, Glasses,
// // // //   Frame, BrickWall, DoorOpen, AppWindow, Layers, Bath, Wrench, PaintRoller,
// // // //   ArrowUpFromLine, BatteryCharging, Droplets, CheckCircle, ChevronDown
// // // // } from "lucide-react"

// // // // // --- ORIGINAL FLOOR PLANS DATA ---
// // // // const floorPlansData = [
// // // //   { id: "01", type: "2BHK", facing: "North", area: 1265, dims: { living: "17'9\" x 11'6\"", dining: "8'6\" x 8'0\"", masterBed: "13'0\" x 12'0\"", bed2: "12'3\" x 11'6\"", kitchen: "8'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203915.png" },
// // // //   { id: "02", type: "3BHK", facing: "North", area: 1495, dims: { living: "16'0\" x 12'0\"", dining: "8'6\" x 12'9\"", masterBed: "13'0\" x 12'0\"", bed2: "12'6\" x 12'0\"", bed3: "11'6\" x 12'0\"", kitchen: "11'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203938.png" },
// // // //   { id: "03", type: "3BHK", facing: "North", area: 1630, dims: { living: "17'9\" x 12'0\"", dining: "8'6\" x 11'0\"", masterBed: "13'0\" x 11'6\"", bed2: "13'0\" x 11'6\"", bed3: "11'0\" x 11'6\"", kitchen: "9'0\" x 11'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203954.png" },
// // // //   { id: "04", type: "3BHK", facing: "East", area: 1560, dims: { living: "28'0\" x 11'6\"", dining: "Combined w/ Living", masterBed: "12'0\" x 13'0\"", bed2: "11'0\" x 11'6\"", bed3: "12'0\" x 11'6\"", kitchen: "11'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204011.png" },
// // // //   { id: "05", type: "3BHK", facing: "East", area: 1510, dims: { living: "11'6\" x 15'9\"", dining: "8'0\" x 12'9\"", masterBed: "13'0\" x 13'0\"", bed2: "11'0\" x 11'0\"", bed3: "10'3\" x 11'0\"", kitchen: "9'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204025.png" }
// // // // ];

// // // // export default function RRLPalmAltezzeComplete() {
// // // //   // --- Global Modal State ---
// // // //   const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'brochure' | 'vr' | null }>({ isOpen: false, type: null });
// // // //   const [isSubmitted, setIsSubmitted] = useState(false);
  
// // // //   // Floorplan logic
// // // //   const [activeTab, setActiveTab] = useState("all");
// // // //   const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});

// // // //   const filteredPlans = activeTab === "all" ? floorPlansData : floorPlansData.filter(p => p.type === activeTab);

// // // //   const openModal = (type: 'brochure' | 'vr') => setModalState({ isOpen: true, type });
// // // //   const closeModal = () => { setModalState({ isOpen: false, type: null }); setIsSubmitted(false); };

// // // //   // --- Unified Form Handler ---
// // // //   const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // // //     e.preventDefault();
// // // //     const form = e.currentTarget;
// // // //     const formData = new FormData(form);
// // // //     const data = Object.fromEntries(formData.entries());
    
// // // //     const formId = modalState.type === 'vr' ? 'xkgkyavn' : 'xldarjon';

// // // //     fetch(modalState.type === 'vr' ? '/book-vr-experience-api.php' : '/enquire-now-api.php', {
// // // //       method: 'POST',
// // // //       headers: { 'Content-Type': 'application/json' },
// // // //       body: JSON.stringify({ ...data, project: 'RRL Palm Altezze' }),
// // // //     }).catch(console.error);

// // // //     try {
// // // //       const response = await fetch(`https://formspree.io/f/${formId}`, {
// // // //         method: "POST",
// // // //         body: JSON.stringify(data),
// // // //         headers: { "Content-Type": "application/json", Accept: "application/json" },
// // // //       });
// // // //       if (response.ok) {
// // // //         setIsSubmitted(true);
// // // //         if (modalState.type === 'vr') {
// // // //           setTimeout(() => { window.location.href = "/vr-tour"; }, 1500);
// // // //         }
// // // //       } else {
// // // //         alert("Something went wrong. Please try again.");
// // // //       }
// // // //     } catch (error) {
// // // //       alert("Network error. Please check your connection.");
// // // //     }
// // // //   };

// // // //   const handleFloorplanUnlock = (e: React.FormEvent<HTMLFormElement>, planId: string) => {
// // // //     e.preventDefault();
// // // //     setUnlockedPlans(prev => ({ ...prev, [planId]: true }));
// // // //   };

// // // //   // ========== HERO SLIDER COMPONENT (RESTORED) ==========
// // // //   const HeroImageBanner = () => {
// // // //     const [currentSlide, setCurrentSlide] = useState(0);

// // // //     const images = [
// // // //       { id: 1, desktop: "https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/ok.png", mobile: "https://ik.imagekit.io/j0xzq9pns/RRl%20website%20mobile%20banners%20(400%20x%20300%20px)/ok.png?updatedAt=1766849914416", alt: "RRL Palm Altezze Hero Banner" },
// // // //     ];

// // // //     useEffect(() => {
// // // //       if (images.length > 1) {
// // // //         const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % images.length), 5000);
// // // //         return () => clearInterval(timer);
// // // //       }
// // // //     }, [images.length]);

// // // //     return (
// // // //       <section className="relative w-full bg-[#0B1E36] overflow-hidden pt-20">
// // // //         <div className="block md:hidden relative w-full aspect-[4/3] overflow-hidden">
// // // //           <AnimatePresence mode="wait">
// // // //             <motion.img key={currentSlide} src={images[currentSlide].mobile} alt={images[currentSlide].alt} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full object-cover" />
// // // //           </AnimatePresence>
// // // //         </div>
// // // //         <div className="hidden md:block h-[50vh] lg:h-[70vh] relative w-full">
// // // //           <AnimatePresence mode="wait">
// // // //             <motion.img key={currentSlide} src={images[currentSlide].desktop} alt={images[currentSlide].alt} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full object-cover" />
// // // //           </AnimatePresence>
// // // //           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-transparent to-transparent" />
// // // //         </div>
// // // //       </section>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <main className="w-full bg-[#F4F4F6] min-h-screen text-[#0B1E36] font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      
// // // //       {/* ================= STICKY HEADER ================= */}
// // // //       <header className="fixed top-4 w-full z-50 px-4 md:px-8 flex justify-center">
// // // //         <div className="w-full max-w-7xl bg-[#0B1E36]/95 backdrop-blur-xl border border-white/10 rounded-full h-16 flex items-center justify-between px-6 md:px-8 shadow-xl">
// // // //           <div className="flex items-center gap-3">
// // // //             <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
// // // //             <span className="text-lg md:text-xl font-serif font-bold text-white tracking-widest uppercase">Palm Altezze</span>
// // // //           </div>
// // // //           <div className="flex items-center gap-6">
// // // //             <a href="tel:+918494966966" className="hidden md:flex items-center gap-2 text-sm text-slate-300 hover:text-[#D4AF37] transition-colors font-semibold">
// // // //               <Phone className="w-4 h-4" /> 84 94 966 966
// // // //             </a>
// // // //             <button onClick={() => openModal('brochure')} className="bg-[#D4AF37] text-[#0B1E36] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md">
// // // //               Cost Sheet
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       {/* ================= HERO SLIDER ================= */}
// // // //       <HeroImageBanner />

// // // //       {/* ================= HERO CONTENT & FORM ================= */}
// // // //       <section className="relative w-full pb-20 pt-10 flex items-center bg-[#0B1E36] -mt-1 z-10">
// // // //         <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
// // // //           <div className="space-y-8">
// // // //             <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-semibold border border-[#D4AF37]/50">
// // // //               Possession: Mid 2027
// // // //             </div>
// // // //             <div className="space-y-4">
// // // //               <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
// // // //                 A Lifestyle That <br /><span className="text-[#D4AF37]">Stands Tall</span>
// // // //               </h1>
// // // //               <p className="text-xl md:text-2xl text-slate-300">
// // // //                 Premium 2 & 3 BHK Apartments in Varthur. <br />
// // // //                 <span className="text-sm opacity-60 font-normal">RERA: PRM/KA/RERA/1251/308/PR/141025/008167</span>
// // // //               </p>
// // // //             </div>

// // // //             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
// // // //               {[
// // // //                 { v: "50%", l: "UDS Share" }, { v: "92%", l: "Open Space" }, { v: "70%", l: "Carpet Area" }, 
// // // //                 { v: "5", l: "Units / Floor" }, { v: "16,000", l: "Sq.ft Clubhouse" }
// // // //               ].map((stat, i) => (
// // // //                 <div key={i} className="space-y-1">
// // // //                   <p className="text-3xl font-bold text-[#D4AF37]">{stat.v}</p>
// // // //                   <p className="text-xs text-slate-400 uppercase tracking-wide">{stat.l}</p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <div className="w-full max-w-md mx-auto lg:ml-auto">
// // // //             <Card className="p-8 bg-white shadow-2xl rounded-3xl border border-slate-200 relative overflow-hidden">
// // // //               <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl" />
// // // //               <div className="text-center mb-6 relative z-10">
// // // //                 <h3 className="text-2xl font-bold text-[#0B1E36] mb-2">Enquire Now</h3>
// // // //                 <p className="text-slate-500 text-sm">Register to avail pre-launch benefits.</p>
// // // //               </div>
// // // //               <form onSubmit={handleLeadSubmit} className="space-y-4 relative z-10">
// // // //                 <Input name="name" placeholder="Your Name" required className="bg-[#F4F4F6] border-transparent text-[#0B1E36] focus:border-[#D4AF37] h-12 rounded-xl" />
// // // //                 <Input name="phone" type="tel" placeholder="Mobile Number" required className="bg-[#F4F4F6] border-transparent text-[#0B1E36] focus:border-[#D4AF37] h-12 rounded-xl" />
// // // //                 <Input name="email" type="email" placeholder="Email Address" required className="bg-[#F4F4F6] border-transparent text-[#0B1E36] focus:border-[#D4AF37] h-12 rounded-xl" />
// // // //                 <Button type="submit" className="w-full bg-[#0B1E36] hover:bg-[#1E3A8A] text-white font-bold h-14 rounded-xl text-lg shadow-lg transition-all">
// // // //                   Get Instant Call Back
// // // //                 </Button>
// // // //               </form>
// // // //             </Card>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= TOWER SHOWCASE (RESTORED) ================= */}
// // // //       <section className="py-20 bg-[#F4F4F6]">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // //           <div className="relative w-full aspect-[4/3] md:h-[500px]">
// // // //             <div className="absolute inset-0 bg-[#D4AF37] rounded-3xl -rotate-2 opacity-20" />
// // // //             <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/WhatsApp%20Image%202025-12-01%20at%2010.21.07%20AM%20(1).jpeg" alt="Tower Elevation" className="relative w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white" />
// // // //             <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-[#D4AF37]">
// // // //               <p className="text-sm text-slate-500 font-bold uppercase">Structure</p>
// // // //               <p className="text-xl font-bold text-[#0B1E36]">23 Floors</p>
// // // //             </div>
// // // //           </div>
// // // //           <div className="space-y-6">
// // // //             <h2 className="text-4xl md:text-5xl font-serif text-[#0B1E36] leading-tight">An Iconic <br /><span className="text-[#D4AF37]">Landmark</span></h2>
// // // //             <div className="w-20 h-1 bg-[#D4AF37] rounded-full" />
// // // //             <p className="text-lg text-slate-600 leading-relaxed">Rising majestically above Varthur, Palm Altezze is more than just a residence; it's a statement of prestige.</p>
// // // //             <Button size="lg" onClick={() => openModal('brochure')} className="bg-[#0B1E36] hover:bg-[#1E3A8A] text-white gap-2 rounded-xl">
// // // //               <Download className="w-4 h-4" /> Download Brochure
// // // //             </Button>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= PROJECT AT A GLANCE (RESTORED) ================= */}
// // // //       <section className="py-20 bg-[#0B1E36]">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Project At A Glance</h2>
// // // //             <p className="text-xl text-[#D4AF37] max-w-2xl mx-auto">RERA & BMRDA Approved | Off Varthur Road</p>
// // // //           </div>
// // // //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
// // // //             {[
// // // //               { label: "Land Extent", value: "1.38 Acres" }, { label: "Structure", value: "B + G + 23 Floors" },
// // // //               { label: "Units", value: "115 Units" }, { label: "Configuration", value: "2 & 3 BHK" },
// // // //               { label: "Size Range", value: "1265 - 1630 Sq.ft" }, { label: "Construction", value: "Mivan Technology" }
// // // //             ].map((item, index) => (
// // // //               <Card key={index} className="p-6 text-center hover:scale-105 transition-all duration-300 border border-white/10 bg-white/5 h-full flex flex-col justify-center shadow-lg rounded-2xl">
// // // //                 <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">{item.label}</p>
// // // //                 <p className="text-lg font-bold text-white">{item.value}</p>
// // // //               </Card>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= ARCHITECTURE SECTION (RESTORED) ================= */}
// // // //       <section className="py-20 bg-[#F4F4F6] overflow-hidden">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// // // //             <div>
// // // //               <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[#0B1E36]">Architecture <br /> <span className="text-[#D4AF37]">Reimagined</span></h2>
// // // //               <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
// // // //                 <p>Built for the Future. <br />At RRL Palm Altezze, we combine high-tech Mivan Engineering with eco-friendly Solar Power and EV Charging. Located in the heart of the Silicon Triangle, your commute just got shorter and your view just got better.</p>
// // // //                 <div className="pt-4 border-l-4 border-[#D4AF37] pl-6">
// // // //                   <p className="text-xl font-bold text-[#0B1E36] uppercase tracking-wider">A WORLD CRAFTED FOR THE ART OF LIVING WELL</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <div className="relative">
// // // //               <div className="absolute inset-0 bg-[#0B1E36] rounded-3xl transform rotate-3 opacity-10"></div>
// // // //               <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/PALM%20ALTEZZE%202%20ok.png" alt="Architecture" className="relative rounded-3xl shadow-xl border-4 border-white w-full object-cover" />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= VR SHOWCASE (RESTORED) ================= */}
// // // //       <section className="py-20 bg-[#0B1E36]">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // //             <div className="space-y-6">
// // // //               <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Visualize Your <br /><span className="text-[#D4AF37]">Home Virtually</span></h2>
// // // //               <div className="w-16 h-1 bg-[#D4AF37] rounded-full"></div>
// // // //               <p className="text-xl text-slate-300">Experience living in your next home before you buy. Book a session to explore our properties in immersive VR.</p>
// // // //               <Button size="lg" className="bg-[#D4AF37] text-[#0B1E36] hover:bg-white font-bold gap-2 rounded-xl" onClick={() => openModal('vr')}>
// // // //                 <Glasses className="w-5 h-5" /> Book a VR Session Today
// // // //               </Button>
// // // //             </div>
// // // //             <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 md:h-[450px]">
// // // //                <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Visualize%20Your%20Home%20Virtually%202.png" alt="VR Showcase" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
// // // //                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/80 via-transparent to-transparent z-10" />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= SOLAR POWER (RESTORED) ================= */}
// // // //       <section className="py-20 bg-[#F4F4F6]">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // //             <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[400px]">
// // // //               <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Power.png" alt="Solar Power" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
// // // //             </div>
// // // //             <div className="space-y-6">
// // // //               <div className="flex items-center gap-3 mb-2">
// // // //                 <Sun className="w-8 h-8 text-[#D4AF37] animate-spin-slow" />
// // // //                 <span className="text-[#0B1E36] font-bold tracking-widest uppercase text-sm">Sustainability</span>
// // // //               </div>
// // // //               <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E36] leading-tight">Power Up <br /> With <span className="text-[#D4AF37]">Solar</span></h2>
// // // //               <p className="text-lg text-slate-600 leading-relaxed">Solar lights for common areas — reducing your current bill every month.</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= USP SECTION (RESTORED) ================= */}
// // // //       <section className="py-20 bg-[#0B1E36]">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose <span className="text-[#D4AF37]">Palm Altezze?</span></h2>
// // // //             <p className="text-slate-400">Unmatched features that set us apart from the competition.</p>
// // // //           </div>
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //             {[
// // // //               { icon: Construction, title: "Mivan Technology", iconC: ShieldCheck, items: ["Strong Monolithic Structures", "Leak-proof walls", "Earthquake Resistant"] },
// // // //               { icon: Sun, title: "Solar Powered", iconC: Zap, items: ["Solar lighting (Common Areas)", "Reduced maintenance", "Eco-friendly Energy"] },
// // // //               { icon: Landmark, title: "50% UDS", iconC: Award, items: ["True 50% Undivided Share", "Higher appreciation", "Rare in Bangalore"] }
// // // //             ].map((usp, index) => (
// // // //               <div key={index} className="bg-white/5 p-8 rounded-3xl shadow-xl border-t-4 border-[#D4AF37] hover:bg-white/10 transition-colors">
// // // //                 <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
// // // //                   <usp.icon className="w-8 h-8 text-[#D4AF37]" />
// // // //                 </div>
// // // //                 <h3 className="text-2xl font-bold text-white mb-4">{usp.title}</h3>
// // // //                 <ul className="space-y-2 text-sm text-slate-300">
// // // //                   {usp.items.map((item, i) => <li key={i} className="flex items-center gap-2"><usp.iconC className="w-4 h-4 text-[#D4AF37]" /> {item}</li>)}
// // // //                 </ul>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= HEALTHY LIVING SECTION (RESTORED) ================= */}
// // // //       <section className="py-20 bg-[#F4F4F6]">
// // // //          <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // //           <div className="max-w-xl text-center lg:text-left">
// // // //             <h2 className="text-4xl md:text-6xl font-serif text-[#0B1E36] mb-6 leading-tight">Step Into <br /><span className="text-[#D4AF37]">Healthy Living</span></h2>
// // // //             <div className="border-l-4 border-[#D4AF37] pl-6 mb-12">
// // // //               <p className="text-slate-600 font-bold uppercase tracking-wide text-sm leading-relaxed">AT RRL PALM ALTEZZE, YOU DON'T JUST GET A HOME — YOU GET A LIFESTYLE.</p>
// // // //             </div>
// // // //             <div className="flex flex-col sm:flex-row gap-10 justify-center lg:justify-start">
// // // //               <div className="flex flex-col items-center lg:items-start gap-4 group">
// // // //                 <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-200">
// // // //                   <Wind className="w-8 h-8 text-[#D4AF37]" />
// // // //                 </div>
// // // //                 <p className="font-bold text-[#0B1E36] text-sm max-w-[150px] uppercase text-center lg:text-left">FRESH AIR & GREEN SURROUNDINGS</p>
// // // //               </div>
// // // //               <div className="flex flex-col items-center lg:items-start gap-4 group">
// // // //                 <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-200">
// // // //                   <Footprints className="w-8 h-8 text-[#D4AF37]" />
// // // //                 </div>
// // // //                 <p className="font-bold text-[#0B1E36] text-sm max-w-[150px] uppercase text-center lg:text-left">SAFE, WELL-LIT TRACK FOR ALL AGES</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           <div>
// // // //             <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Step%20Into%20Healthy%20Living.png" alt="Healthy Living" className="w-full rounded-3xl shadow-xl border border-slate-200" />
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= FLOOR PLANS (RESTORED) ================= */}
// // // //       <section className="py-24 bg-[#0B1E36]" id="floorplans">
// // // //         <div className="container mx-auto px-4 max-w-7xl">
// // // //           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
// // // //             <div>
// // // //               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Masterfully <span className="text-[#D4AF37]">Planned</span></h2>
// // // //               <p className="text-slate-400 max-w-xl">115 Units | 5 Units Per Floor <br />Choose from our range of 5 distinct unit layouts.</p>
// // // //             </div>
// // // //             <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
// // // //               {["all", "2BHK", "3BHK"].map((tab) => (
// // // //                 <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab ? "bg-[#D4AF37] text-[#0B1E36]" : "text-slate-400 hover:text-white"}`}>
// // // //                   {tab.toUpperCase()}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // // //             <AnimatePresence mode="popLayout">
// // // //               {filteredPlans.map((plan) => (
// // // //                 <motion.div key={plan.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
// // // //                   <Card className="bg-white/5 border border-white/10 overflow-hidden rounded-3xl hover:border-[#D4AF37]/50 transition-all duration-300">
// // // //                     <div className="p-6 border-b border-white/5">
// // // //                       <div className="flex justify-between items-start mb-4">
// // // //                         <div><h3 className="text-2xl font-bold text-white">Unit {plan.id}</h3><p className="text-[#D4AF37] font-medium">{plan.type}</p></div>
// // // //                         <div className="bg-[#0B1E36] text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/10">{plan.facing} Facing</div>
// // // //                       </div>
// // // //                       <div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-white">{plan.area}</span><span className="text-slate-500 font-medium">SFT</span></div>
// // // //                     </div>
// // // //                     <div className="p-6 space-y-3">
// // // //                       <div className="flex justify-between text-sm"><span className="text-slate-400">Living</span><span className="text-white">{plan.dims.living || "N/A"}</span></div>
// // // //                       <div className="flex justify-between text-sm"><span className="text-slate-400">Master Bed</span><span className="text-white">{plan.dims.masterBed}</span></div>
// // // //                     </div>
// // // //                     <div className="relative aspect-square bg-[#F4F4F6] border-t border-white/5">
// // // //                       <img src={plan.image} alt={`Plan ${plan.id}`} className={`w-full h-full object-contain p-4 transition-all duration-700 ${unlockedPlans[plan.id] ? 'blur-0' : 'blur-xl opacity-60 grayscale'}`} />
// // // //                       {!unlockedPlans[plan.id] ? (
// // // //                         <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B1E36]/80 p-6 text-center backdrop-blur-sm">
// // // //                           <Lock className="w-8 h-8 text-[#D4AF37] mb-4" />
// // // //                           <h4 className="text-white font-bold mb-4">Plan Locked</h4>
// // // //                           <form onSubmit={(e) => handleFloorplanUnlock(e, plan.id)} className="w-full space-y-3">
// // // //                             <Input required name="name" placeholder="Name" className="h-10 bg-white/10 border-white/20 text-white text-sm focus:border-[#D4AF37]" />
// // // //                             <Input required name="phone" type="tel" placeholder="Phone" className="h-10 bg-white/10 border-white/20 text-white text-sm focus:border-[#D4AF37]" />
// // // //                             <Button type="submit" className="w-full bg-[#D4AF37] text-[#0B1E36] font-bold h-10 hover:bg-white rounded-lg">
// // // //                               <Unlock className="w-4 h-4 mr-2" /> Unlock to View
// // // //                             </Button>
// // // //                           </form>
// // // //                         </div>
// // // //                       ) : (
// // // //                         <div className="absolute bottom-4 left-0 right-0 flex justify-center">
// // // //                           <Button size="sm" className="bg-[#0B1E36] text-white hover:bg-[#1E3A8A] font-bold shadow-lg" onClick={() => openModal('brochure')}>
// // // //                              Download Full PDF
// // // //                           </Button>
// // // //                         </div>
// // // //                       )}
// // // //                     </div>
// // // //                   </Card>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= FULL AMENITIES TABS (RESTORED) ================= */}
// // // //       <section className="py-20 bg-[#F4F4F6]">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E36] mb-4">30+ World-Class Amenities</h2>
// // // //             <p className="text-xl text-slate-600">A 16,000 Sq.ft Clubhouse where leisure meets lifestyle.</p>
// // // //           </div>

// // // //           <Tabs defaultValue="clubhouse" className="w-full">
// // // //             <div className="flex justify-center mb-12">
// // // //               <TabsList className="bg-white p-1 rounded-full border border-slate-200 shadow-sm">
// // // //                 <TabsTrigger value="clubhouse" className="rounded-full px-8 py-3 data-[state=active]:bg-[#0B1E36] data-[state=active]:text-white text-slate-500 transition-all font-bold">
// // // //                   Clubhouse (16,000 Sft)
// // // //                 </TabsTrigger>
// // // //                 <TabsTrigger value="outdoor" className="rounded-full px-8 py-3 data-[state=active]:bg-[#0B1E36] data-[state=active]:text-white text-slate-500 transition-all font-bold">
// // // //                   Outdoor & Recreational
// // // //                 </TabsTrigger>
// // // //               </TabsList>
// // // //             </div>

// // // //             <TabsContent value="clubhouse">
// // // //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
// // // //                 {[
// // // //                   { icon: LayoutDashboard, label: "Reception Hall" }, { icon: BookOpen, label: "Reading Lounge" },
// // // //                   { icon: Gamepad2, label: "Indoor Games" }, { icon: Users, label: "Kids Play Area" },
// // // //                   { icon: Leaf, label: "Meditation Hall" }, { icon: Coffee, label: "Lounge Area" },
// // // //                   { icon: Music, label: "Party Hall" }, { icon: Utensils, label: "Dining Area" },
// // // //                   { icon: Dumbbell, label: "Ultra Gym" }, { icon: Wind, label: "Steam & Sauna" },
// // // //                   { icon: Footprints, label: "Cardio Room" }, { icon: MonitorPlay, label: "Mini Theatre" },
// // // //                   { icon: Table2, label: "Billiards Table" }, { icon: Table2, label: "Table Tennis" },
// // // //                   { icon: Users, label: "Association Room" }, { icon: Tv, label: "Guest Rooms" }
// // // //                 ].map((item, i) => (
// // // //                   <div key={i} className="flex items-center gap-4 bg-white border border-slate-200 shadow-sm p-4 rounded-2xl hover:border-[#D4AF37] hover:shadow-md transition-all">
// // // //                     <item.icon className="w-5 h-5 text-[#D4AF37]" />
// // // //                     <span className="text-[#0B1E36] font-medium">{item.label}</span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </TabsContent>
            
// // // //             <TabsContent value="outdoor">
// // // //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
// // // //                  {[
// // // //                   { icon: Waves, label: "Swimming Pool" }, { icon: Waves, label: "Kids Pool" },
// // // //                   { icon: Waves, label: "Jacuzzi" }, { icon: LayoutDashboard, label: "Multipurpose Court" },
// // // //                   { icon: Footprints, label: "Cricket Pitch" }, { icon: LayoutDashboard, label: "Basketball Court" },
// // // //                   { icon: LayoutDashboard, label: "Throwball Court" }, { icon: Footprints, label: "Skating Rink" },
// // // //                   { icon: Footprints, label: "Jogging Track" }, { icon: Landmark, label: "Amphitheatre" },
// // // //                   { icon: Flower2, label: "Butterfly Garden" }, { icon: Users, label: "Senior Seating" },
// // // //                   { icon: Waves, label: "Fountain" }, { icon: Trees, label: "Planting Deck" },
// // // //                   { icon: LayoutDashboard, label: "Chess Pawn" }, { icon: Footprints, label: "Hopscotch" }
// // // //                 ].map((item, i) => (
// // // //                   <div key={i} className="flex items-center gap-4 bg-white border border-slate-200 shadow-sm p-4 rounded-2xl hover:border-[#D4AF37] hover:shadow-md transition-all">
// // // //                     <item.icon className="w-5 h-5 text-[#D4AF37]" />
// // // //                     <span className="text-[#0B1E36] font-medium">{item.label}</span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </TabsContent>
// // // //           </Tabs>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= SPECIFICATIONS (RESTORED FULL) ================= */}
// // // //       <section className="py-24 bg-[#0B1E36]">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // // //           <div className="mb-16 text-center">
// // // //             <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">Premium</h2>
// // // //             <p className="text-3xl font-light uppercase tracking-widest text-[#D4AF37]">Specifications</p>
// // // //           </div>
// // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
// // // //             <div className="space-y-0">
// // // //               {[
// // // //                 { icon: Frame, title: "Framed Structure", desc: "Mivan Constructions" },
// // // //                 { icon: BrickWall, title: "Walls", desc: '8" RCC walls (Concrete walls)' },
// // // //                 { icon: DoorOpen, title: "Doors", desc: "WPC Doors for Main & Internal doors" },
// // // //                 { icon: AppWindow, title: "Window", desc: "UPVC windows with mosquito mesh" },
// // // //                 { icon: Layers, title: "Flooring", desc: "2'x4' vitrified tiles flooring for living, dining, kitchen & bedrooms. 15\"x15\" Anti-skid tiles for balcony." },
// // // //                 { icon: Bath, title: "Toilet", desc: "Kerovit by Kajaria bath fittings. 2'x1' anti skid ceramic tiles. Provision for exhaust fan." },
// // // //                 { icon: Wrench, title: "Plumbing", desc: "Supreme / Ashirvad CPVC CP fittings with Jaguar / Parryware sanitary fittings." }
// // // //               ].map((s, i) => (
// // // //                  <div key={i} className="flex gap-5 py-6 border-b border-white/10">
// // // //                   <div className="shrink-0 pt-1"><s.icon className="w-8 h-8 text-[#D4AF37]" /></div>
// // // //                   <div><h4 className="font-bold text-lg text-white uppercase mb-1">{s.title}</h4><p className="text-slate-400 text-sm">{s.desc}</p></div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //             <div className="relative h-full min-h-[600px] w-full hidden lg:block">
// // // //               <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-t-full border border-white/10"></div>
// // // //               <img src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/generated-image%20(54).png" alt="Interior" className="w-full h-full object-cover rounded-t-full shadow-2xl" />
// // // //             </div>
// // // //             <div className="space-y-0">
// // // //                {[
// // // //                 { icon: PaintRoller, title: "Painting", desc: "2 Coats of Nippon Putty. One Coat of primer & Two Coats of Nippon Emulsion for internal walls. Nippon Exterior for external." },
// // // //                 { icon: Zap, title: "Electrical", desc: "Concealed Finolex / Anchor copper wiring. Anchor Roma Modular Switches. A/C point in Bedrooms & Geyser with separate circuits." },
// // // //                 { icon: Tv, title: "Communication", desc: "Telephone points in Living & TV point in Living and Master Bedroom." },
// // // //                 { icon: Droplets, title: "Water Supply", desc: "Water supply from bore well with overhead tank." },
// // // //                 { icon: ArrowUpFromLine, title: "Lift", desc: "3 Lifts of fully Automatic with 8 passenger and 1 service lift of KONE / OTIS / Equivalent make." },
// // // //                 { icon: BatteryCharging, title: "Generator", desc: "100% power back-up for each flat, lift, motor & common area lighting." }
// // // //               ].map((s, i) => (
// // // //                  <div key={i} className="flex gap-5 py-6 border-b border-white/10">
// // // //                   <div className="shrink-0 pt-1"><s.icon className="w-8 h-8 text-[#D4AF37]" /></div>
// // // //                   <div><h4 className="font-bold text-lg text-white uppercase mb-1">{s.title}</h4><p className="text-slate-400 text-sm">{s.desc}</p></div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= BROCHURE CTA BIG BANNER (RESTORED) ================= */}
// // // //       <section className="py-12 bg-[#F4F4F6]">
// // // //         <div className="container mx-auto px-4 max-w-6xl">
// // // //           <div className="relative rounded-3xl overflow-hidden group shadow-xl h-[360px] md:h-[400px]">
// // // //             <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL-palm-altezze-banner2.webp')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
// // // //             <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/95 via-[#0B1E36]/80 to-[#0B1E36]/40" />
// // // //             <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 space-y-6">
// // // //               <h2 className="text-2xl md:text-5xl font-serif tracking-wider text-white">GET COST SHEET & BROCHURE</h2>
// // // //               <div className="w-24 h-1 bg-[#D4AF37] rounded-full" />
// // // //               <p className="text-slate-300 max-w-xl text-sm md:text-lg">Click below to download brochure of Palm Altezze & register for special offers.</p>
// // // //               <Button onClick={() => openModal('brochure')} className="bg-[#D4AF37] hover:bg-white text-[#0B1E36] px-12 py-6 text-lg font-bold uppercase shadow-lg rounded-xl">
// // // //                 Download Now
// // // //               </Button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= REVIEWS SECTION (RESTORED FULL LIST + VIDEOS) ================= */}
// // // //       <section className="py-24 relative bg-white overflow-hidden border-y border-slate-200">
// // // //         <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-20" style={{ backgroundImage: `url('https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766479785/CLIENTS_BACKGROUND_1_sfkdst.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
// // // //           <div className="text-center mb-12">
// // // //             <h2 className="text-4xl font-serif text-[#0B1E36] font-bold">Client Testimonials</h2>
// // // //             <div className="flex items-center gap-3 mt-4 justify-center">
// // // //               <div className="flex items-center gap-1 bg-[#F4F4F6] border border-slate-200 px-3 py-1 rounded-full shadow-sm">
// // // //                 <span className="font-bold text-slate-700 text-sm">Google Reviews</span>
// // // //               </div>
// // // //               <div className="flex gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />)}</div>
// // // //               <span className="text-slate-600 text-sm font-medium">5.0 Average</span>
// // // //             </div>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {[
// // // //               { type: "text", name: "Anusha V", role: "Happy Home Buyer", location: "RRL Palacio", text: "After doing lot of research I purchased a flat in RRL Palacio. My kid loves the society! I like their gym, movie theater and rooftop pool." },
// // // //               { type: "text", name: "Rahil R", role: "Happy Home Buyer", location: "RRL Palacio", text: "Spacious and well-designed apartments. Friendly staff, great amenities like clubhouse, gym, pool, and sports courts. Pet-friendly and perfect for families. Highly recommended!" },
// // // //               { type: "video", name: "Video1", url: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1" },
// // // //               { type: "text", name: "Chaitanya S", role: "Happy Home Buyer", location: "RRL Palacio", text: "Good builder & team. Value for money. Well planned & organised. Shout out to Kavya - she works tirelessly to accommodate customers. They won best amenities award!" },
// // // //               { type: "text", name: "Nagarajan K", role: "Happy Home Buyer", location: "RRL Palacio", text: "The marketing team was very supportive with documents and responded to all queries on time. Premium amenities at an affordable price point in this neighborhood." },
// // // //               { type: "video", name: "Video2", url: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1" },
// // // //               { type: "text", name: "Kishore Babu", role: "Happy Home Buyer", location: "RRL Palm Altezze", text: "Structure quality is very good, very good atmosphere with all around Greenery and spacious balcony view. Great amenities like home theater, steam & sauna, gym. Best choice for anyone!" },
// // // //               { type: "text", name: "Prabhakaran S", role: "Happy Home Buyer", location: "RRL Palm Altezze", text: "This location is rarely available at such a good price, especially including interiors. Construction quality is very good. Marketing Manager Kavya is very professional." },
// // // //               { type: "text", name: "Sagar Mana", role: "Happy Home Buyer", location: "RRL Palm Altezze", text: "Nice apartment, Premium flat with no common wall, future strategic location. Many new companies are setting up their offices, units, R&D Centers including manufacturing firms." }
// // // //             ].map((item, idx) => (
// // // //               <div key={idx} className="h-full">
// // // //                 {item.type === 'video' ? (
// // // //                   <div className="bg-[#F4F4F6] p-6 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow h-full flex flex-col">
// // // //                     <div className="rounded-xl overflow-hidden bg-[#0B1E36] relative flex-grow min-h-[200px]">
// // // //                       <iframe src={item.url} allowFullScreen className="absolute inset-0 w-full h-full border-0"></iframe>
// // // //                     </div>
// // // //                     <div className="pt-4 border-t border-slate-200 mt-4"><span className="text-xs font-bold text-[#0B1E36] bg-[#D4AF37] px-3 py-1 rounded-full">Happy Home Buyer</span></div>
// // // //                   </div>
// // // //                 ) : (
// // // //                   <div className="bg-[#F4F4F6] p-6 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow h-full flex flex-col">
// // // //                     <div className="flex items-start justify-between mb-4">
// // // //                       <div className="flex items-center gap-3">
// // // //                         <div className="w-10 h-10 rounded-full bg-[#0B1E36] flex items-center justify-center text-white font-bold text-sm shadow-sm">{item.name?.charAt(0)}</div>
// // // //                         <div><h4 className="font-bold text-[#0B1E36] text-sm">{item.name}</h4><p className="text-xs text-slate-500">{item.location}</p></div>
// // // //                       </div>
// // // //                     </div>
// // // //                     <div className="mb-4 flex-grow">
// // // //                       <div className="flex gap-0.5 mb-2">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />)}</div>
// // // //                       <p className="text-slate-600 text-sm leading-relaxed italic">"{item.text}"</p>
// // // //                     </div>
// // // //                     <div className="pt-4 border-t border-slate-200 flex justify-between items-center mt-auto">
// // // //                       <span className="text-xs font-bold text-[#0B1E36] bg-[#D4AF37]/20 border border-[#D4AF37]/50 px-3 py-1 rounded-full">{item.role}</span>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= CONNECTIVITY & MAP (RESTORED) ================= */}
// // // //       <section className="py-20 bg-[#0B1E36]">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // //           <div className="space-y-8">
// // // //             <div>
// // // //               <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Quick Access to <br /> <span className="text-[#D4AF37]">Varthur Road</span></h2>
// // // //               <p className="text-slate-300 text-lg">Palm Altezze benefits from low traffic volumes on Varthur Road. Three roads seamlessly connect to the main road in minutes.</p>
// // // //             </div>
// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// // // //               {[
// // // //                 { icon: Train, title: "Transport", items: ["Purple Line Metro", "Carmelaram Station", "BMTC / Ola / Uber", "SH-35 Connectivity"] },
// // // //                 { icon: BookOpen, title: "Schools", items: ["Vasishta & Vagdevi Vilas", "The Foundation School", "Orchids International", "VIBGYOR High School", "The Prodigies Int."] },
// // // //                 { icon: ShoppingCart, title: "Malls", items: ["Phoenix Marketcity", "Virginia Mall", "Park Square Mall", "Inorbit Mall"] },
// // // //                 { icon: Hospital, title: "Hospitals", items: ["Manipal Hospital", "City Hospital", "Sahasra Hospitals", "Cloudnine Hospital", "The Eye Foundation"] }
// // // //               ].map((cat, i) => (
// // // //                 <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 group hover:border-[#D4AF37] transition-colors">
// // // //                   <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
// // // //                     <cat.icon className="w-6 h-6 text-[#D4AF37]" />
// // // //                     <h3 className="font-bold text-white group-hover:text-[#D4AF37] transition-colors">{cat.title}</h3>
// // // //                   </div>
// // // //                   <ul className="space-y-2 text-sm text-slate-400">
// // // //                     {cat.items.map((item, idx) => <li key={idx}>• {item}</li>)}
// // // //                   </ul>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //           <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
// // // //             <iframe src="https://www.google.com/maps?q=Varthur,Bangalore&output=embed" width="100%" height="100%" className="absolute inset-0 border-0 opacity-70 mix-blend-luminosity" loading="lazy"></iframe>
// // // //             <div className="absolute bottom-6 right-6 bg-[#0B1E36]/90 p-4 rounded-xl border border-[#D4AF37] shadow-xl backdrop-blur-sm">
// // // //               <div className="flex items-center gap-3">
// // // //                 <MapPin className="w-8 h-8 text-[#D4AF37]" />
// // // //                 <div><p className="text-white font-bold text-sm">RRL Palm Altezze</p><p className="text-xs text-slate-400">Janthagondanahalli, Varthur</p></div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= FAQs (RESTORED FULL LIST & CATEGORIES) ================= */}
// // // //       <section className="py-20 bg-[#F4F4F6]">
// // // //         <div className="container mx-auto px-4 max-w-4xl">
// // // //            <div className="text-center mb-16">
// // // //             <h2 className="text-4xl font-bold text-[#0B1E36] mb-4">Frequently Asked Questions</h2>
// // // //             <p className="text-lg text-slate-500">Find answers to common questions about RRL Palm Altezze</p>
// // // //           </div>
          
// // // //           <div className="space-y-12">
// // // //             {[
// // // //               { cat: "General", faqs: [{ q: "What is the total area of RRL Palm Altezze?", a: "RRL Palm Altezze is built on 1.38 acres of land with 92% open space, featuring 1 tower with B+G+23 floors." }, { q: "How many units are there per floor?", a: "Each floor has 5 units, offering a mix of 2 BHK and 3 BHK apartments with varying configurations." }, { q: "What is the price range?", a: "Prices start from ₹1 Crore onwards for 2 & 3 BHK premium apartments." }] },
// // // //               { cat: "Amenities", faqs: [{ q: "How many amenities are available?", a: "RRL Palm Altezze features 30+ world-class amenities including swimming pool, gym, yoga deck, sports courts, and much more." }, { q: "Is there a clubhouse?", a: "Yes, there is a 16,000 sq.ft clubhouse with multiple facilities spread across ground, 1st, and 2nd floors." }, { q: "Are there facilities for children?", a: "Yes, we have indoor and outdoor children's play areas, kids' pool, and various recreational facilities." }] },
// // // //               { cat: "Construction & Specifications", faqs: [{ q: "What construction technology is used?", a: "We use Mivan construction technology with RCC framed structure designed as per IS codes for earthquake resistance." }, { q: "What is the power backup arrangement?", a: "100% generator backup is provided for each flat, lifts, motor, and common area lighting." }, { q: "What are the flooring specifications?", a: "Vitrified tiles (2'x4') for living, dining, kitchen & bedrooms, and anti-skid tiles for balconies." }] },
// // // //               { cat: "Location & Connectivity", faqs: [{ q: "How is the connectivity to Whitefield?", a: "Located along State Highway 35, which directly connects to Whitefield, Brookfield, and other major areas." }, { q: "Is there metro connectivity?", a: "Yes, Nallurahalli Metro Station is nearby, providing easy access to the Purple Line." }, { q: "What schools and hospitals are nearby?", a: "Multiple schools including Chrysalis High, Delhi Public School, and hospitals like Manipal Hospital are within proximity." }] },
// // // //               { cat: "Payment & Possession", faqs: [{ q: "What is the payment plan?", a: "Pay only 5% now with no pre-EMI till possession. Flexible payment plans available." }, { q: "When is the expected possession?", a: "Possession is expected as per the project timeline. Contact our sales team for specific details." }, { q: "Are there any hidden charges?", a: "No hidden charges. All costs are transparent and clearly mentioned in the agreement." }] }
// // // //             ].map((section, sIdx) => (
// // // //               <div key={sIdx}>
// // // //                 <h3 className="text-2xl font-bold text-[#0B1E36] mb-6 pb-2 border-b-2 border-[#D4AF37] text-center">{section.cat}</h3>
// // // //                 <div className="space-y-4">
// // // //                   {section.faqs.map((faq, i) => (
// // // //                     <details key={i} className="group bg-white border border-slate-200 rounded-xl p-6 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
// // // //                       <summary className="text-[#0B1E36] font-bold flex justify-between list-none">
// // // //                         {faq.q} <span className="text-[#D4AF37] font-bold group-open:rotate-45 transition-transform">+</span>
// // // //                       </summary>
// // // //                       <p className="text-slate-600 mt-4 text-sm leading-relaxed">{faq.a}</p>
// // // //                     </details>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           <div className="mt-16 bg-[#0B1E36] rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
// // // //             <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
// // // //             <p className="text-lg mb-6 opacity-90">Our sales team is ready to help you with any queries</p>
// // // //             <a href="tel:+918494966966" className="inline-block bg-[#D4AF37] text-[#0B1E36] font-bold px-8 py-3 rounded-xl hover:bg-white transition-colors">
// // // //               Call: 84 94 966 966
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= JOURNEY (RESTORED) ================= */}
// // // //       <section className="py-24 bg-[#0B1E36] overflow-hidden">
// // // //         <div className="container mx-auto px-4 md:px-8 max-w-6xl">
// // // //            <div className="text-center mb-20">
// // // //             <h2 className="text-4xl font-serif font-bold text-white mb-4">Discover Our <span className="text-[#D4AF37]">Journey</span></h2>
// // // //             <div className="h-1 w-24 bg-[#D4AF37] mx-auto rounded-full" />
// // // //           </div>
// // // //           <div className="grid md:grid-cols-4 gap-6 text-center">
// // // //             {[
// // // //               { year: "Trust", title: "On-Time Delivery", desc: "We take pride in our track record of delivering projects on or before schedule, as promised.", icon: Key },
// // // //               { year: "Expertise", title: "High-Rise & Premium", desc: "Accommodates high-rise premium projects and mid-size luxury homes with A1 quality.", icon: Building2 },
// // // //               { year: "Innovation", title: "Pioneer in Commercial", desc: "Leading the way in landmark commercial projects.", icon: Briefcase },
// // // //               { year: "Growth", title: "200% Appreciation", desc: "Our completed projects have seen a massive 200% capital appreciation in just 2 years.", icon: TrendingUp }
// // // //             ].map((j, i) => (
// // // //               <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#D4AF37] transition-all">
// // // //                  <j.icon className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
// // // //                  <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-widest">{j.year}</span>
// // // //                  <h3 className="text-lg font-bold text-white mt-2 mb-2">{j.title}</h3>
// // // //                  <p className="text-sm text-slate-400">{j.desc}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= COMPLETED PROJECTS (RESTORED) ================= */}
// // // //       <section className="py-20 bg-[#F4F4F6]">
// // // //         <div className="container mx-auto px-4 max-w-5xl">
// // // //            <h2 className="text-4xl font-serif font-bold text-[#0B1E36] text-center mb-12">Successfully Completed <span className="text-[#D4AF37]">Projects</span></h2>
// // // //            <div className="grid md:grid-cols-2 gap-8">
// // // //              {[
// // // //                { name: "RRL Palacio", loc: "Medahalli, Bangalore", units: "103 Units", status: "READY TO MOVE", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png", type: "Luxury Apartment", config: "2, 3 BHK", acres: "1.5 Acres", possession: "Early possession granted" },
// // // //                { name: "RRL Nature Woods", loc: "Sarjapur, Bangalore", units: "148 Units", status: "COMPLETED", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png", type: "Premium Apartment", config: "2, 3 BHK", acres: "1.5 Acres", possession: "Early possession granted" }
// // // //              ].map((p, i) => (
// // // //                <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md group flex flex-col">
// // // //                  <div className="relative aspect-video">
// // // //                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
// // // //                    <span className="absolute top-4 left-4 bg-[#0B1E36] text-white text-xs font-bold px-3 py-1 rounded border border-[#D4AF37]">{p.status}</span>
// // // //                  </div>
// // // //                  <div className="p-6 flex flex-col flex-grow">
// // // //                     <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-1">{p.type}</p>
// // // //                     <h3 className="text-2xl font-bold text-[#0B1E36] mb-4">{p.name}</h3>
// // // //                     <div className="mt-2 mb-6 p-3 bg-[#F4F4F6] rounded-lg border border-slate-200">
// // // //                       <p className="text-sm font-bold text-[#0B1E36]">{p.possession}</p>
// // // //                     </div>
// // // //                     <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-100 py-4 mb-6">
// // // //                       <div><p className="text-xs uppercase text-slate-500">Location</p><p className="text-sm font-medium text-[#0B1E36]">{p.loc}</p></div>
// // // //                       <div><p className="text-xs uppercase text-slate-500">Config</p><p className="text-sm font-medium text-[#0B1E36]">{p.config}</p></div>
// // // //                       <div><p className="text-xs uppercase text-slate-500">Area</p><p className="text-sm font-medium text-[#0B1E36]">{p.acres}</p></div>
// // // //                       <div><p className="text-xs uppercase text-slate-500">Units</p><p className="text-sm font-medium text-[#0B1E36]">{p.units}</p></div>
// // // //                     </div>
// // // //                    <Button variant="outline" className="w-full mt-auto border-slate-300 text-[#0B1E36] hover:bg-[#0B1E36] hover:text-white rounded-xl">Details <ArrowRight className="w-4 h-4 ml-2"/></Button>
// // // //                  </div>
// // // //                </div>
// // // //              ))}
// // // //            </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= CONTACT FOOTER (RESTORED FULL) ================= */}
// // // //       <section className="py-20 bg-[#0B1E36] border-t border-white/10">
// // // //         <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-2 gap-12">
// // // //           <div>
// // // //             <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">Get In Touch</h2>
// // // //             <div className="space-y-6">
// // // //               <div className="flex items-start gap-4"><MapPin className="w-6 h-6 text-white" /><p className="text-slate-300">Sy. No - 73/6 (Old 73/5), RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087.</p></div>
// // // //               <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-white" /><a href="tel:+918494966966" className="text-slate-300 font-bold hover:text-[#D4AF37] transition-colors">+91 84 94 966 966</a></div>
// // // //               <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-white" /><a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="text-slate-300 hover:text-[#D4AF37] transition-colors">enquiry@rrlbuildersanddevelopers.com</a></div>
// // // //             </div>
// // // //           </div>
// // // //           <Card className="p-8 shadow-xl bg-white border-transparent rounded-3xl">
// // // //             <h3 className="text-2xl font-bold text-[#0B1E36] mb-6">Send Message</h3>
// // // //             <form onSubmit={handleLeadSubmit} className="space-y-4">
// // // //               <Input name="name" placeholder="Name" required className="bg-[#F4F4F6] border-transparent text-[#0B1E36] focus:border-[#D4AF37] rounded-xl h-12" />
// // // //               <Input name="email" type="email" placeholder="Email" required className="bg-[#F4F4F6] border-transparent text-[#0B1E36] focus:border-[#D4AF37] rounded-xl h-12" />
// // // //               <Input name="phone" type="tel" placeholder="Phone" required className="bg-[#F4F4F6] border-transparent text-[#0B1E36] focus:border-[#D4AF37] rounded-xl h-12" />
// // // //               <textarea name="message" rows={4} className="w-full p-3 bg-[#F4F4F6] border-transparent rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition" placeholder="Message"></textarea>
// // // //               <Button type="submit" className="w-full bg-[#0B1E36] hover:bg-[#1E3A8A] text-white font-bold h-12 rounded-xl">Send Message</Button>
// // // //             </form>
// // // //           </Card>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= UNIFIED GLOBAL MODAL ================= */}
// // // //       <AnimatePresence>
// // // //         {modalState.isOpen && (
// // // //           <motion.div 
// // // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1E36]/90 backdrop-blur-md p-4"
// // // //             onClick={closeModal}
// // // //           >
// // // //             <motion.div 
// // // //               initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
// // // //               onClick={e => e.stopPropagation()}
// // // //               className="bg-white border border-slate-200 p-10 rounded-[2.5rem] w-full max-w-md relative shadow-2xl overflow-hidden"
// // // //             >
// // // //               <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37] rounded-full filter blur-[60px] opacity-20" />
// // // //               <button onClick={closeModal} className="absolute top-6 right-6 text-slate-400 hover:text-[#0B1E36] bg-[#F4F4F6] p-2 rounded-full transition-colors"><X className="w-5 h-5" /></button>

// // // //               {isSubmitted ? (
// // // //                 <div className="text-center py-8 relative z-10">
// // // //                   <div className="w-20 h-20 bg-[#0B1E36]/5 rounded-full flex items-center justify-center mx-auto mb-6">
// // // //                     <CheckCircle className="w-10 h-10 text-[#0B1E36]" />
// // // //                   </div>
// // // //                   <h3 className="text-3xl font-serif text-[#0B1E36] mb-2">Confirmed.</h3>
// // // //                   <p className="text-slate-500 mb-8">
// // // //                     {modalState.type === 'vr' ? "Redirecting to your VR experience..." : "Your brochure link will be sent shortly."}
// // // //                   </p>
// // // //                   <Button onClick={closeModal} className="bg-[#0B1E36] hover:bg-[#1E3A8A] text-white font-bold w-full rounded-xl h-12 shadow-md">Return to site</Button>
// // // //                 </div>
// // // //               ) : (
// // // //                 <div className="relative z-10">
// // // //                   <div className="mb-8">
// // // //                     <h3 className="text-3xl font-serif text-[#0B1E36] mb-2">
// // // //                       {modalState.type === 'vr' ? "Book VR Tour" : "Request Info"}
// // // //                     </h3>
// // // //                     <p className="text-slate-500 text-sm">
// // // //                       {modalState.type === 'vr' ? "Unlock the immersive virtual walkthrough." : "Get instant access to floor plans and cost sheets."}
// // // //                     </p>
// // // //                   </div>
// // // //                   <form onSubmit={handleLeadSubmit} className="space-y-4">
// // // //                     <Input name="name" placeholder="Your Name" required className="bg-[#F4F4F6] border-transparent text-[#0B1E36] h-14 rounded-xl focus:border-[#D4AF37] focus:bg-white transition-all" />
// // // //                     <Input name="phone" type="tel" placeholder="Phone Number" required className="bg-[#F4F4F6] border-transparent text-[#0B1E36] h-14 rounded-xl focus:border-[#D4AF37] focus:bg-white transition-all" />
// // // //                     <Input name="email" type="email" placeholder="Email Address" required className="bg-[#F4F4F6] border-transparent text-[#0B1E36] h-14 rounded-xl focus:border-[#D4AF37] focus:bg-white transition-all" />
// // // //                     <Button type="submit" className="w-full bg-[#0B1E36] hover:bg-[#1E3A8A] text-white font-bold h-14 rounded-xl mt-4 text-lg transition-all shadow-md">
// // // //                       {modalState.type === 'vr' ? "Access Tour" : "Download PDF"}
// // // //                     </Button>
// // // //                   </form>
// // // //                 </div>
// // // //               )}
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* ================= MOBILE STICKY CTA ================= */}
// // // //       <div className="md:hidden fixed bottom-6 left-4 right-4 z-40 flex gap-3">
// // // //         <Button onClick={() => openModal('brochure')} className="flex-1 bg-[#D4AF37] hover:bg-white text-white hover:text-[#0B1E36] font-bold h-14 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all">
// // // //           Brochure
// // // //         </Button>
// // // //         <a href="https://wa.me/918494966966" className="flex-1">
// // // //           <Button variant="outline" className="w-full bg-[#0B1E36]/95 backdrop-blur-md border-transparent text-white hover:bg-white hover:text-[#0B1E36] h-14 font-bold rounded-2xl shadow-xl transition-all">
// // // //             WhatsApp
// // // //           </Button>
// // // //         </a>
// // // //       </div>

// // // //     </main>
// // // //   );
// // // // }

// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import { useRouter } from "next/navigation"
// // // import { motion, AnimatePresence, Variants } from "framer-motion"
// // // import { Button } from "@/components/ui/button"
// // // import { Card } from "@/components/ui/card"
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // // import { Input } from "@/components/ui/input"
// // // import { Label } from "@/components/ui/label"
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogHeader,
// // //   DialogTitle,
// // //   DialogTrigger,
// // // } from "@/components/ui/dialog"
// // // import Image from "next/image"
// // // import Link from "next/link"
// // // import {
// // //   Phone, Building2, Leaf, Users, Zap, Train, Hospital, BookOpen,
// // //   ShoppingCart, Award, Mail, MapPin, ChevronDown, X, Wind, Footprints,
// // //   Waves, Music, Dumbbell, MonitorPlay, Landmark, Sun, ShieldCheck,
// // //   LayoutDashboard, Trees, Coffee, Table2, Construction, Download,
// // //   Paintbrush, Maximize, Lightbulb, Maximize2, Lock, Unlock, ArrowLeft,
// // //   ArrowRight, Star, Globe, Utensils, Gamepad2, Tv, Flower2, Briefcase,
// // //   TrendingUp, Key, Glasses, Frame, BrickWall, DoorOpen, AppWindow, Layers,
// // //   Bath, Wrench, PaintRoller, ArrowUpFromLine, BatteryCharging, Droplets,
// // //   CheckCircle, User, Smartphone, Calendar, Loader2
// // // } from "lucide-react"
// // // import type React from "react"
// // // import { useForm, ValidationError } from '@formspree/react'

// // // // Custom components from original file
// // // import TowerBrochureModal from "@/components/TowerBrochureModal"
// // // import BrochureCTAModal from "@/components/BrochureCTAModal"

// // // // --- Shared Form Data Type ---
// // // type FormData = {
// // //   name: string
// // //   email: string
// // //   phone: string
// // //   message?: string
// // // }

// // // // --- Floor Plans Data ---
// // // const floorPlansData = [
// // //   { id: "01", type: "2BHK", facing: "North", area: 1265, dims: { living: "17'9\" x 11'6\"", dining: "8'6\" x 8'0\"", masterBed: "13'0\" x 12'0\"", bed2: "12'3\" x 11'6\"", kitchen: "8'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203915.png" },
// // //   { id: "02", type: "3BHK", facing: "North", area: 1495, dims: { living: "16'0\" x 12'0\"", dining: "8'6\" x 12'9\"", masterBed: "13'0\" x 12'0\"", bed2: "12'6\" x 12'0\"", bed3: "11'6\" x 12'0\"", kitchen: "11'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203938.png" },
// // //   { id: "03", type: "3BHK", facing: "North", area: 1630, dims: { living: "17'9\" x 12'0\"", dining: "8'6\" x 11'0\"", masterBed: "13'0\" x 11'6\"", bed2: "13'0\" x 11'6\"", bed3: "11'0\" x 11'6\"", kitchen: "9'0\" x 11'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203954.png" },
// // //   { id: "04", type: "3BHK", facing: "East", area: 1560, dims: { living: "28'0\" x 11'6\"", dining: "Combined w/ Living", masterBed: "12'0\" x 13'0\"", bed2: "11'0\" x 11'6\"", bed3: "12'0\" x 11'6\"", kitchen: "11'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204011.png" },
// // //   { id: "05", type: "3BHK", facing: "East", area: 1510, dims: { living: "11'6\" x 15'9\"", dining: "8'0\" x 12'9\"", masterBed: "13'0\" x 13'0\"", bed2: "11'0\" x 11'0\"", bed3: "10'3\" x 11'0\"", kitchen: "9'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204025.png" }
// // // ];

// // // export default function Home() {
// // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // //   const router = useRouter()

// // //   const handleFormSubmit = async (data: FormData, formId: string): Promise<boolean> => {
// // //     fetch('/enquire-now-api.php', {
// // //       method: 'POST',
// // //       headers: { 'Content-Type': 'application/json' },
// // //       body: JSON.stringify({ name: data.name, phone: data.phone, email: data.email, project: 'RRL Palm Altezze' }),
// // //     }).catch(console.error)

// // //     try {
// // //       const response = await fetch(`https://formspree.io/f/${formId}`, {
// // //         method: "POST",
// // //         body: JSON.stringify(data),
// // //         headers: { "Content-Type": "application/json", Accept: "application/json" },
// // //       })
// // //       if (response.ok) {
// // //         router.push("/c4/thankyou")
// // //         return true
// // //       } else {
// // //         alert("Oops! There was a problem submitting your form. Please try again.")
// // //         return false
// // //       }
// // //     } catch (error) {
// // //       alert("An error occurred. Please check your connection and try again.")
// // //       return false
// // //     }
// // //   }

// // //   // Animation variants
// // //   const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }
// // //   const scaleVariants: Variants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } }
// // //   const itemVariants: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }

// // //   // Animated Counter Helper
// // //   const AnimatedCounter = ({ start = 0, end, duration = 2000, suffix = "", separator = false }: { start?: number; end: number; duration?: number; suffix?: string; separator?: boolean; }) => {
// // //     const [count, setCount] = useState(start)
// // //     useEffect(() => {
// // //       let startTime: number | null = null;
// // //       const step = (timestamp: number) => {
// // //         if (!startTime) startTime = timestamp;
// // //         const progress = Math.min((timestamp - startTime) / duration, 1);
// // //         const current = Math.floor(start + (end - start) * progress);
// // //         setCount(current);
// // //         if (progress < 1) window.requestAnimationFrame(step);
// // //       };
// // //       window.requestAnimationFrame(step);
// // //     }, [start, end, duration]);
// // //     return <span>{separator ? count.toLocaleString() : count}{suffix}</span>
// // //   }

// // //   // ========== HERO SLIDER ==========
// // //   const HeroImageBanner = () => {
// // //     const [currentSlide, setCurrentSlide] = useState(0);
// // //     const images = [
// // //       { id: 1, desktop: "https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/ok.png", mobile: "https://ik.imagekit.io/j0xzq9pns/RRl%20website%20mobile%20banners%20(400%20x%20300%20px)/ok.png?updatedAt=1766849914416", alt: "RRL Palm Altezze Hero Banner" },
// // //     ];
// // //     useEffect(() => {
// // //       if (images.length > 1) {
// // //         const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % images.length), 5000);
// // //         return () => clearInterval(timer);
// // //       }
// // //     }, [images.length]);

// // //     return (
// // //       <section className="relative w-full bg-[#0B1E36] overflow-hidden border-b border-slate-200">
// // //         <div className="block md:hidden relative w-full aspect-[4/3] overflow-hidden pt-20">
// // //           <AnimatePresence mode="wait">
// // //             <motion.img key={currentSlide} src={images[currentSlide].mobile} alt={images[currentSlide].alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full object-contain" />
// // //           </AnimatePresence>
// // //         </div>
// // //         <div className="hidden md:block h-[60vh] lg:h-[80vh] relative pt-20">
// // //           <AnimatePresence mode="wait">
// // //             <motion.img key={currentSlide} src={images[currentSlide].desktop} alt={images[currentSlide].alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full object-cover" />
// // //           </AnimatePresence>
// // //         </div>
// // //       </section>
// // //     );
// // //   };

// // //   // ========== HERO SECTION ==========
// // //   const HeroSection = () => {
// // //     const [heroFormData, setHeroFormData] = useState({ name: "", email: "", phone: "" })
// // //     const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement>) => setHeroFormData({ ...heroFormData, [e.target.name]: e.target.value })
// // //     const onHeroSubmit = async (e: React.FormEvent) => {
// // //       e.preventDefault()
// // //       const success = await handleFormSubmit(heroFormData, "xldarjon")
// // //       if (success) setHeroFormData({ name: "", email: "", phone: "" })
// // //     }

// // //     return (
// // //       <section className="relative w-full min-h-screen bg-[#0B1E36] overflow-hidden pt-12 pb-12 flex items-center">
// // //         <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E36] via-[#0f2a4a] to-[#0B1E36] opacity-90 z-0" />
// // //         <motion.div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full opacity-10 blur-[100px]" animate={{ y: [0, 30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }} />
        
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
// // //             <motion.div className="space-y-8" initial="hidden" animate="visible" variants={containerVariants}>
// // //               <motion.div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-bold border border-[#D4AF37]/50" variants={itemVariants}>
// // //                 <motion.span className="w-2 h-2 bg-[#D4AF37] rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} />
// // //                 Possession: Mid 2027
// // //               </motion.div>

// // //               <motion.div className="space-y-4" variants={itemVariants}>
// // //                 <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
// // //                   A Lifestyle That <br /><span className="text-[#D4AF37] italic">Stands Tall</span>
// // //                 </h1>
// // //                 <p className="text-xl md:text-2xl text-slate-300 font-light">
// // //                   Premium 2 & 3 BHK Apartments in Varthur. <br />
// // //                   <span className="text-sm opacity-60 font-normal">RERA: PRM/KA/RERA/1251/308/PR/141025/008167</span>
// // //                 </p>
// // //               </motion.div>

// // //               <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-t border-white/10 pt-8" variants={containerVariants}>
// // //                 {[
// // //                   { v: 50, l: "UDS Share", suf: "%" }, { v: 92, l: "Open Space", suf: "%" }, { v: 70, l: "Carpet Area", suf: "%" },
// // //                   { v: 5, l: "Units / Floor", suf: "" }, { v: 16000, l: "Sq.ft Clubhouse", suf: "", sep: true }
// // //                 ].map((stat, i) => (
// // //                   <motion.div key={i} variants={itemVariants} className="space-y-1 relative">
// // //                     <p className="text-3xl font-bold text-[#D4AF37] flex items-center">
// // //                        <AnimatedCounter end={stat.v} suffix={stat.suf} separator={stat.sep} />
// // //                     </p>
// // //                     <p className="text-xs text-slate-400 uppercase tracking-wide font-bold">{stat.l}</p>
// // //                   </motion.div>
// // //                 ))}
// // //               </motion.div>
// // //             </motion.div>

// // //             <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="w-full max-w-md mx-auto lg:ml-auto">
// // //               <Card className="p-8 bg-[#FDFBF7] shadow-2xl rounded-3xl border-t-4 border-[#D4AF37]">
// // //                 <div className="text-center mb-6">
// // //                   <h3 className="text-2xl font-bold text-[#0B1E36] mb-2">Enquire Now</h3>
// // //                   <p className="text-slate-500 text-sm">Register to avail pre-launch benefits & priority site visit.</p>
// // //                 </div>
// // //                 <form onSubmit={onHeroSubmit} className="space-y-4">
// // //                   <input type="text" name="name" value={heroFormData.name} onChange={handleHeroChange} placeholder="Your Name" required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all text-[#0B1E36] shadow-sm" />
// // //                   <input type="tel" name="phone" value={heroFormData.phone} onChange={handleHeroChange} placeholder="Mobile Number" required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all text-[#0B1E36] shadow-sm" />
// // //                   <input type="email" name="email" value={heroFormData.email} onChange={handleHeroChange} placeholder="Email Address" required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all text-[#0B1E36] shadow-sm" />
// // //                   <Button type="submit" size="lg" className="w-full bg-[#0B1E36] hover:bg-[#D4AF37] hover:text-[#0B1E36] text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all rounded-xl">
// // //                     Get Instant Call Back
// // //                   </Button>
// // //                   <p className="text-xs text-slate-400 text-center mt-4">By submitting, you agree to our privacy policy.</p>
// // //                 </form>
// // //               </Card>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //         <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
// // //           <ChevronDown className="w-6 h-6 text-[#D4AF37]" />
// // //         </motion.div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== TOWER SHOWCASE ==========
// // //   const TowerShowcaseSection = () => {
// // //     const [isModalOpen, setIsModalOpen] = useState(false);
// // //     return (
// // //       <>
// // //         <section className="py-24 bg-[#FDFBF7]">
// // //           <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // //               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative w-full aspect-[4/3] md:h-[500px]">
// // //                 <div className="absolute inset-0 bg-[#D4AF37] rounded-[2rem] -rotate-2 opacity-20" />
// // //                 <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/WhatsApp%20Image%202025-12-01%20at%2010.21.07%20AM%20(1).jpeg" alt="RRL Palm Altezze Tower Elevation" className="relative w-full h-full object-fill rounded-[2rem] shadow-2xl border-4 border-white" />
// // //                 <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-[#D4AF37]">
// // //                   <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Structure</p>
// // //                   <p className="text-xl font-bold text-[#0B1E36]">23 Floors</p>
// // //                 </div>
// // //               </motion.div>
// // //               <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
// // //                 <h2 className="text-4xl md:text-5xl font-serif text-[#0B1E36] leading-tight">
// // //                   An Iconic <br /><span className="text-[#D4AF37] italic">Landmark</span>
// // //                 </h2>
// // //                 <div className="w-20 h-1 bg-[#D4AF37] rounded-full" />
// // //                 <p className="text-lg text-slate-600 leading-relaxed">
// // //                   Rising majestically above Varthur, Palm Altezze is more than just a residence; it's a statement of prestige.
// // //                 </p>
// // //                 <div className="pt-6">
// // //                   <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-[#0B1E36] hover:bg-[#D4AF37] hover:text-[#0B1E36] text-white gap-2 rounded-xl h-12">
// // //                     <Download className="w-4 h-4" /> Download Brochure
// // //                   </Button>
// // //                 </div>
// // //               </motion.div>
// // //             </div>
// // //           </div>
// // //         </section>
// // //         <TowerBrochureModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
// // //       </>
// // //     );
// // //   };

// // //   // ========== PROJECT AT A GLANCE ==========
// // //   const ProjectGlanceSection = () => {
// // //     const specs = [
// // //       { label: "Land Extent", value: "1.38 Acres" }, { label: "Structure", value: "B + G + 23 Floors" },
// // //       { label: "Units", value: "115 Units" }, { label: "Configuration", value: "2 & 3 BHK" },
// // //       { label: "Size Range", value: "1265 - 1630 Sq.ft" }, { label: "Construction", value: "Mivan Technology" },
// // //     ]
// // //     return (
// // //       <section className="py-24 bg-[#0B1E36]">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
// // //             <motion.h2 className="text-4xl md:text-5xl font-serif text-white mb-4" variants={itemVariants}>Project At A Glance</motion.h2>
// // //             <motion.p className="text-xl text-[#D4AF37] max-w-2xl mx-auto" variants={itemVariants}>RERA & BMRDA Approved | Off Varthur Road</motion.p>
// // //           </motion.div>
// // //           <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
// // //             {specs.map((item, index) => (
// // //               <motion.div key={index} variants={itemVariants}>
// // //                 <Card className="p-6 text-center hover:scale-105 transition-all duration-300 border border-white/10 bg-white/5 h-full flex flex-col justify-center shadow-lg rounded-2xl backdrop-blur-sm">
// // //                   <p className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-bold">{item.label}</p>
// // //                   <p className="text-lg font-bold text-white">{item.value}</p>
// // //                 </Card>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== ARCHITECTURE SECTION ==========
// // //   const ArchitectureSection = () => {
// // //     return (
// // //       <section className="py-24 bg-[#FDFBF7] text-[#0B1E36] overflow-hidden relative">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
// // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// // //             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
// // //               <h2 className="text-4xl md:text-6xl font-serif mb-6">Architecture <br /><span className="italic text-[#D4AF37]">Reimagined</span></h2>
// // //               <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
// // //                 <p>Built for the Future. <br />At RRL Palm Altezze, we combine high-tech Mivan Engineering with eco-friendly Solar Power and EV Charging. Located in the heart of the Silicon Triangle, your commute just got shorter and your view just got better.</p>
// // //                 <div className="pt-4 border-l-4 border-[#D4AF37] pl-6 bg-white p-6 rounded-r-2xl shadow-sm">
// // //                   <p className="text-xl font-bold text-[#0B1E36] uppercase tracking-wider">A WORLD CRAFTED FOR THE ART OF LIVING WELL</p>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
// // //               <div className="absolute inset-0 bg-[#D4AF37] rounded-[2rem] transform rotate-3 opacity-20"></div>
// // //               <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/PALM%20ALTEZZE%202%20ok.png" alt="RRL Palm Altezze Architecture" className="relative rounded-[2rem] shadow-2xl border-4 border-white w-full object-cover" />
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== VR SHOWCASE SECTION ==========
// // //   const VRShowcaseSection = () => {
// // //     const [isVRModalOpen, setIsVRModalOpen] = useState(false)
// // //     const [state, handleSubmit] = useForm("xkgkyavn");

// // //     const handleVRSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // //       e.preventDefault()
// // //       const form = e.currentTarget
// // //       const nameVal = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? ''
// // //       const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? ''
// // //       const emailVal = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? ''
// // //       fetch('/book-vr-experience-api.php', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ name: nameVal, phone: phoneVal, email: emailVal, project: 'RRL Palm Altezze' }),
// // //       }).catch(console.error)
// // //       await handleSubmit(e)
// // //     }

// // //     useEffect(() => {
// // //       if (state.succeeded) {
// // //         const timer = setTimeout(() => { setIsVRModalOpen(false); window.location.href = "/vr-tour"; }, 1000)
// // //         return () => clearTimeout(timer)
// // //       }
// // //     }, [state.succeeded])

// // //     return (
// // //       <section className="py-24 bg-[#0B1E36]">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#D4AF37] p-2 rounded-[3rem] shadow-2xl relative overflow-hidden">
// // //             <div className="bg-[#0B1E36] rounded-[2.5rem] w-full h-full absolute inset-0 z-0 m-2"></div>
            
// // //             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 p-12 lg:p-16 relative z-10">
// // //               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white uppercase tracking-wider mb-2">
// // //                   <Glasses className="w-4 h-4 text-[#D4AF37]" /> Virtual Reality
// // //               </div>
// // //               <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
// // //                 Visualize Your <br /><span className="text-[#D4AF37] italic">Home Virtually</span>
// // //               </h2>
// // //               <p className="text-xl text-slate-300 font-light">
// // //                 Experience living in your next home before you buy. Book a session to explore our properties in immersive VR.
// // //               </p>
// // //               <Button size="lg" className="bg-[#D4AF37] text-[#0B1E36] hover:bg-white font-bold gap-2 rounded-xl h-14" onClick={() => setIsVRModalOpen(true)}>
// // //                 <Glasses className="w-5 h-5" /> Book a VR Session Today
// // //               </Button>
// // //             </motion.div>

// // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative w-full overflow-hidden aspect-[584/500] md:aspect-auto md:h-full z-10 rounded-r-[2.5rem]">
// // //               <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36] via-transparent to-transparent z-10 hidden lg:block" />
// // //               <picture className="block w-full h-full">
// // //                 <source media="(max-width: 768px)" srcSet="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/Visualize%20Your%20Home%20Virtually.png?updatedAt=1766849722950" />
// // //                 <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Visualize%20Your%20Home%20Virtually%202.png?updatedAt=1766849828982" alt="VR Interior Showcase" loading="lazy" className="w-full h-full object-fill transition-transform duration-700 hover:scale-105" />
// // //               </picture>
// // //             </motion.div>
// // //           </div>
// // //         </div>

// // //         <AnimatePresence>
// // //           {isVRModalOpen && (
// // //             <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1E36]/90 backdrop-blur-md p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsVRModalOpen(false)}>
// // //               <motion.div className="bg-[#FDFBF7] border border-slate-200 p-10 rounded-[2.5rem] w-full max-w-md relative shadow-2xl overflow-hidden" initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} onClick={(e) => e.stopPropagation()}>
// // //                 <button onClick={() => setIsVRModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-[#0B1E36] bg-white p-2 border border-slate-200 rounded-full transition-colors"><X className="w-5 h-5" /></button>

// // //                 {state.succeeded ? (
// // //                   <div className="flex flex-col items-center justify-center py-6 text-center">
// // //                     <CheckCircle className="w-16 h-16 text-[#D4AF37] mb-4" />
// // //                     <h3 className="text-2xl font-serif font-bold text-[#0B1E36] mb-2">Booking Confirmed!</h3>
// // //                     <p className="text-slate-500 mb-6">We'll contact you shortly to schedule your VR experience.</p>
// // //                     <Button onClick={() => setIsVRModalOpen(false)} variant="outline" className="border-slate-200 text-[#0B1E36] hover:bg-[#0B1E36] hover:text-white rounded-xl">Close</Button>
// // //                   </div>
// // //                 ) : (
// // //                   <>
// // //                     <div className="text-center mb-8">
// // //                       <h3 className="text-3xl font-serif text-[#0B1E36] mb-2">Book <span className="italic text-[#D4AF37]">VR Experience</span></h3>
// // //                       <p className="text-slate-500 text-sm">Fill in your details to schedule a session.</p>
// // //                     </div>

// // //                     <form onSubmit={handleVRSubmit} className="space-y-4">
// // //                       <input type="hidden" name="subject" value="New VR Session Booking" />
// // //                       <div className="space-y-2"><div className="relative"><User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" /><input name="name" type="text" placeholder="Your Name" className="w-full bg-white border border-slate-200 py-3 pl-10 pr-4 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition-colors shadow-sm" required /></div></div>
// // //                       <div className="space-y-2"><div className="relative"><Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" /><input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-white border border-slate-200 py-3 pl-10 pr-4 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition-colors shadow-sm" required /></div></div>
// // //                       <div className="space-y-2"><div className="relative"><Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" /><input name="email" type="email" placeholder="Email Address" className="w-full bg-white border border-slate-200 py-3 pl-10 pr-4 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition-colors shadow-sm" required /><ValidationError prefix="Email" field="email" errors={state.errors} /></div></div>
// // //                       <div className="space-y-2"><div className="relative"><Calendar className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" /><input name="preferred_date" type="text" placeholder="Preferred Date/Time (Optional)" className="w-full bg-white border border-slate-200 py-3 pl-10 pr-4 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition-colors shadow-sm" /></div></div>
                      
// // //                       <Button type="submit" disabled={state.submitting} className="w-full bg-[#0B1E36] text-white font-bold text-lg h-14 rounded-xl hover:bg-[#D4AF37] hover:text-[#0B1E36] mt-4 transition-colors">
// // //                         {state.submitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Scheduling...</> : "Confirm Booking"}
// // //                       </Button>
// // //                     </form>
// // //                   </>
// // //                 )}
// // //               </motion.div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== SOLAR POWER SECTION ==========
// // //   const SolarPowerSection = () => {
// // //     return (
// // //       <section className="py-24 bg-[#FDFBF7]">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // //             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative w-full rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl aspect-[584/500] md:aspect-auto md:h-[450px]">
// // //               <picture className="block w-full h-full">
// // //                 <source media="(max-width: 768px)" srcSet="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Power.png?updatedAt=1766849830876" />
// // //                 <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Power.png?updatedAt=1766849830876" alt="Solar Power Integration" loading="lazy" className="w-full h-full object-fill transition-transform duration-700 hover:scale-105" />
// // //               </picture>
// // //             </motion.div>
// // //             <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 lg:pl-8">
// // //               <div className="flex items-center gap-3 mb-2 bg-white w-fit px-4 py-2 rounded-full shadow-sm border border-slate-100">
// // //                 <Sun className="w-6 h-6 text-[#D4AF37] animate-spin-slow" />
// // //                 <span className="text-[#0B1E36] font-bold tracking-widest uppercase text-sm">Sustainability</span>
// // //               </div>
// // //               <h2 className="text-4xl md:text-6xl font-serif text-[#0B1E36] leading-tight">
// // //                 Power Up <br /> With <span className="italic text-[#D4AF37]">Solar</span>
// // //               </h2>
// // //               <p className="text-lg text-slate-600 leading-relaxed">
// // //                 Solar lights for common areas — reducing your current bill every month.
// // //               </p>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== USP SECTION ==========
// // //   const USPSection = () => {
// // //     return (
// // //       <section className="py-24 bg-[#0B1E36]">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Why Choose <span className="italic text-[#D4AF37]">Palm Altezze?</span></h2>
// // //             <p className="text-slate-400">Unmatched features that set us apart from the competition.</p>
// // //           </div>
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {[
// // //               { icon: Construction, title: "Mivan Technology", items: [{ i: ShieldCheck, t: "Strong Monolithic Structures" }, { i: ShieldCheck, t: "Leak-proof walls" }, { i: ShieldCheck, t: "Earthquake Resistant" }] },
// // //               { icon: Sun, title: "Solar Powered", items: [{ i: Zap, t: "Solar lighting (Common Areas)" }, { i: Zap, t: "Reduced maintenance" }, { i: Zap, t: "Eco-friendly Energy" }] },
// // //               { icon: Landmark, title: "50% UDS", items: [{ i: Award, t: "True 50% Undivided Share" }, { i: Award, t: "Higher appreciation" }, { i: Award, t: "Rare in Bangalore" }] }
// // //             ].map((usp, index) => (
// // //               <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 p-8 rounded-[2rem] shadow-xl border border-white/10 group hover:border-[#D4AF37] hover:bg-white/10 transition-all">
// // //                 <div className="w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform">
// // //                   <usp.icon className="w-8 h-8 text-[#0B1E36]" />
// // //                 </div>
// // //                 <h3 className="text-2xl font-bold text-white mb-4 font-serif">{usp.title}</h3>
// // //                 <ul className="space-y-3 text-sm text-slate-300">
// // //                   {usp.items.map((item, i) => <li key={i} className="flex items-center gap-3"><item.i className="w-4 h-4 text-[#D4AF37]" /> {item.t}</li>)}
// // //                 </ul>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== HEALTHY LIVING SECTION ==========
// // //   const HealthyLivingSection = () => (
// // //     <section className="py-24 bg-[#FDFBF7] overflow-hidden">
// // //       <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // //           <motion.div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
// // //             <h2 className="text-4xl md:text-6xl font-serif text-[#0B1E36] mb-6 leading-tight">
// // //               Step Into <br /><span className="italic text-[#D4AF37]">Healthy Living</span>
// // //             </h2>
// // //             <div className="border-l-4 border-[#D4AF37] pl-4 lg:pl-6 mb-8 lg:mb-12 mx-auto lg:mx-0 max-w-md">
// // //               <p className="text-slate-600 font-bold uppercase tracking-wide text-xs sm:text-sm leading-relaxed">
// // //                 AT RRL PALM ALTEZZE, YOU DON'T JUST GET A HOME — YOU GET A LIFESTYLE.
// // //               </p>
// // //             </div>
// // //             <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 justify-center lg:justify-start">
// // //               <div className="flex flex-col items-center lg:items-start gap-4 group text-center lg:text-left">
// // //                 <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:bg-[#D4AF37] transition-colors duration-300">
// // //                   <Wind className="w-8 h-8 text-[#0B1E36] transition-colors duration-300" />
// // //                 </div>
// // //                 <p className="font-bold text-[#0B1E36] text-xs sm:text-sm max-w-[150px] leading-tight uppercase">FRESH AIR & <br />GREEN SURROUNDINGS</p>
// // //               </div>
// // //               <div className="flex flex-col items-center lg:items-start gap-4 group text-center lg:text-left">
// // //                 <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:bg-[#D4AF37] transition-colors duration-300">
// // //                   <Footprints className="w-8 h-8 text-[#0B1E36] transition-colors duration-300" />
// // //                 </div>
// // //                 <p className="font-bold text-[#0B1E36] text-xs sm:text-sm max-w-[150px] leading-tight uppercase">SAFE, WELL-LIT <br />TRACK FOR ALL AGES</p>
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           <div className="block lg:hidden">
// // //             <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl border border-slate-200">
// // //               <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Step%20Into%20Healthy%20Living.png?updatedAt=1766849830763" alt="RRL Palm Altezze Healthy Living Mobile" className="w-full h-full object-contain" loading="lazy" />
// // //             </div>
// // //           </div>

// // //           <motion.div className="hidden lg:block relative h-full" initial="hidden" animate="visible" variants={scaleVariants}>
// // //             <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Step%20Into%20Healthy%20Living.png?updatedAt=1766849830763" alt="RRL Palm Altezze Healthy Living" className="w-full h-full object-contain rounded-[2rem] shadow-2xl border border-slate-100" />
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )

// // //   // ========== FLOOR PLANS SECTION ==========
// // //   const FloorPlansSection = () => {
// // //     const [activeTab, setActiveTab] = useState("all");
// // //     const [unlockedPlans, setUnlockedPlans] = useState<Record<string, boolean>>({});
// // //     const [formOpenId, setFormOpenId] = useState<string | null>(null);

// // //     const filteredPlans = activeTab === "all" ? floorPlansData : floorPlansData.filter(p => p.type === activeTab);

// // //     const handleUnlockSubmit = async (e: React.FormEvent<HTMLFormElement>, planId: string) => {
// // //       e.preventDefault();
// // //       const formData = new FormData(e.currentTarget);
// // //       const data = { name: formData.get('name') as string, phone: formData.get('phone') as string, email: formData.get('email') as string, message: `Request to unlock floor plan for Unit ${planId}` };
// // //       const success = true; 
// // //       if (success) { setUnlockedPlans(prev => ({ ...prev, [planId]: true })); setFormOpenId(null); }
// // //     };

// // //     return (
// // //       <section className="py-24 bg-[#0B1E36]" id="floorplans">
// // //         <div className="container mx-auto px-4 max-w-7xl">
// // //           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
// // //             <div>
// // //               <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Masterfully <span className="italic text-[#D4AF37]">Planned</span></h2>
// // //               <p className="text-slate-400 max-w-xl">115 Units | 5 Units Per Floor <br />Choose from our range of 5 distinct unit layouts.</p>
// // //             </div>
// // //             <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
// // //               {["all", "2BHK", "3BHK"].map((tab) => (
// // //                 <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab ? "bg-[#D4AF37] text-[#0B1E36] shadow-lg" : "text-slate-400 hover:text-white"}`}>
// // //                   {tab.toUpperCase()}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // //             <AnimatePresence mode="popLayout">
// // //               {filteredPlans.map((plan) => (
// // //                 <motion.div key={plan.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group">
// // //                   <Card className="bg-white/5 border border-white/10 overflow-hidden rounded-[2rem] hover:border-[#D4AF37]/50 transition-all duration-300">
// // //                     <div className="p-6 border-b border-white/5 bg-[#0B1E36]/50">
// // //                       <div className="flex justify-between items-start mb-4">
// // //                         <div><h3 className="text-2xl font-serif font-bold text-white">Unit {plan.id}</h3><p className="text-[#D4AF37] font-bold">{plan.type}</p></div>
// // //                         <div className="bg-white/10 text-white hover:bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">{plan.facing} Facing</div>
// // //                       </div>
// // //                       <div className="flex items-baseline gap-1"><span className="text-4xl font-light text-white">{plan.area}</span><span className="text-slate-500 font-bold tracking-widest uppercase text-xs">Sq.Ft</span></div>
// // //                     </div>
// // //                     <div className="p-6 space-y-3">
// // //                       <div className="flex justify-between text-sm"><span className="text-slate-400">Living</span><span className="text-white font-medium">{plan.dims.living || "N/A"}</span></div>
// // //                       <div className="flex justify-between text-sm"><span className="text-slate-400">Master Bed</span><span className="text-white font-medium">{plan.dims.masterBed}</span></div>
// // //                     </div>
// // //                     <div className="p-4 bg-[#0B1E36]">
// // //                       <Dialog onOpenChange={(open) => { if (!open) setFormOpenId(null); }}>
// // //                         <DialogTrigger asChild>
// // //                           <Button className="w-full bg-[#D4AF37] hover:bg-white text-[#0B1E36] font-bold rounded-xl transition-colors">
// // //                             <Maximize2 className="w-4 h-4 mr-2" /> View Floor Plans
// // //                           </Button>
// // //                         </DialogTrigger>
// // //                         <DialogContent className="bg-[#FDFBF7] border border-slate-200 text-[#0B1E36] max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw] rounded-[2rem]">
// // //                           <DialogHeader>
// // //                             <DialogTitle className="text-2xl font-serif font-bold text-[#0B1E36] flex items-center gap-2">
// // //                               Unit {plan.id} - {plan.type} ({plan.area} SFT)
// // //                               {unlockedPlans[plan.id] && (<div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200 uppercase tracking-widest">Unlocked</div>)}
// // //                             </DialogTitle>
// // //                           </DialogHeader>
// // //                           <div className="mt-4 grid md:grid-cols-2 gap-8">
// // //                             <div className="relative aspect-square bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-inner">
// // //                               <img src={plan.image} alt={`Plan ${plan.id}`} className={`w-full h-full object-contain transition-all duration-700 ${unlockedPlans[plan.id] ? 'blur-0' : 'blur-xl scale-110 opacity-40 grayscale'}`} />
// // //                               {!unlockedPlans[plan.id] && (
// // //                                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 z-10 p-4 text-center backdrop-blur-sm">
// // //                                   <div className="bg-white p-4 rounded-full border border-slate-200 shadow-lg mb-4"><Lock className="w-6 h-6 text-[#0B1E36]" /></div>
// // //                                   <p className="text-[#0B1E36] font-bold text-lg font-serif">Blueprint Locked</p>
// // //                                   <p className="text-sm text-slate-500 mt-2 mb-4 max-w-[200px]">Unlock to view high-resolution floor plan</p>
// // //                                   <Button size="sm" className="bg-[#0B1E36] text-white hover:bg-[#D4AF37] hover:text-[#0B1E36] rounded-xl font-bold" onClick={() => setFormOpenId(plan.id)}>
// // //                                     <Unlock className="w-4 h-4 mr-2" /> Unlock Now
// // //                                   </Button>
// // //                                 </div>
// // //                               )}
// // //                             </div>
// // //                             <div className="space-y-6 flex flex-col justify-center min-h-[400px]">
// // //                               {formOpenId !== plan.id ? (
// // //                                 <div className="animate-in fade-in slide-in-from-right-4 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm h-full flex flex-col">
// // //                                   <h4 className="text-xl font-serif font-bold border-b border-slate-100 pb-4 text-[#0B1E36] mb-6">Room Dimensions</h4>
// // //                                   <dl className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm flex-grow">
// // //                                     <dt className="text-slate-500 uppercase tracking-wider text-xs font-bold">Facing</dt><dd className="font-bold text-end text-[#0B1E36]">{plan.facing}</dd>
// // //                                     <dt className="text-slate-500 uppercase tracking-wider text-xs font-bold">Living</dt><dd className="font-bold text-end text-[#0B1E36]">{plan.dims.living}</dd>
// // //                                     {plan.dims.dining && <><dt className="text-slate-500 uppercase tracking-wider text-xs font-bold">Dining</dt><dd className="font-bold text-end text-[#0B1E36]">{plan.dims.dining}</dd></>}
// // //                                     <dt className="text-slate-500 uppercase tracking-wider text-xs font-bold">Master Bed</dt><dd className="font-bold text-end text-[#0B1E36]">{plan.dims.masterBed}</dd>
// // //                                     {plan.dims.bed2 && <><dt className="text-slate-500 uppercase tracking-wider text-xs font-bold">Bedroom 2</dt><dd className="font-bold text-end text-[#0B1E36]">{plan.dims.bed2}</dd></>}
// // //                                     {plan.dims.bed3 && <><dt className="text-slate-500 uppercase tracking-wider text-xs font-bold">Bedroom 3</dt><dd className="font-bold text-end text-[#0B1E36]">{plan.dims.bed3}</dd></>}
// // //                                     <dt className="text-slate-500 uppercase tracking-wider text-xs font-bold">Kitchen</dt><dd className="font-bold text-end text-[#0B1E36]">{plan.dims.kitchen}</dd>
// // //                                   </dl>
// // //                                   <div className="mt-8 pt-6 border-t border-slate-100">
// // //                                     {!unlockedPlans[plan.id] ? (
// // //                                       <Button className="w-full bg-[#0B1E36] hover:bg-[#D4AF37] hover:text-[#0B1E36] text-white font-bold h-12 rounded-xl" onClick={() => setFormOpenId(plan.id)}>
// // //                                         <Unlock className="w-4 h-4 mr-2" /> Unlock Floor Plan
// // //                                       </Button>
// // //                                     ) : (
// // //                                       <div className="grid grid-cols-1 gap-3">
// // //                                         <a href="https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Palm%20Altezze%20Brochure_compressed.pdf?ik-attachment=true" download="Palm_Altezze_Brochure.pdf" className="w-full">
// // //                                           <Button variant="outline" className="w-full border-slate-200 text-[#0B1E36] hover:bg-[#0B1E36] hover:text-white transition-colors h-12 rounded-xl font-bold">
// // //                                             Download PDF
// // //                                           </Button>
// // //                                         </a>
// // //                                       </div>
// // //                                     )}
// // //                                   </div>
// // //                                 </div>
// // //                               ) : (
// // //                                 <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm animate-in fade-in slide-in-from-right-4 relative h-full flex flex-col justify-center">
// // //                                   <button onClick={() => setFormOpenId(null)} className="absolute top-6 right-6 text-slate-400 hover:text-[#0B1E36]"><X className="w-5 h-5" /></button>
// // //                                   <div className="mb-6 flex items-center gap-2 text-[#0B1E36]">
// // //                                     <ArrowLeft className="w-5 h-5 cursor-pointer hover:text-[#D4AF37]" onClick={() => setFormOpenId(null)} />
// // //                                     <h4 className="text-2xl font-serif font-bold text-[#0B1E36]">Unlock Access</h4>
// // //                                   </div>
// // //                                   <p className="text-sm text-slate-500 mb-8">Enter your details to instantly view the floor plan.</p>
// // //                                   <form onSubmit={(e) => handleUnlockSubmit(e, plan.id)} className="space-y-4">
// // //                                     <div className="space-y-2"><Label className="text-slate-600 font-bold text-xs uppercase tracking-widest">Name</Label><Input required name="name" placeholder="Your Name" className="bg-[#FDFBF7] border-slate-200 text-[#0B1E36] h-12 rounded-xl focus:border-[#D4AF37]" /></div>
// // //                                     <div className="space-y-2"><Label className="text-slate-600 font-bold text-xs uppercase tracking-widest">Phone</Label><Input required name="phone" type="tel" placeholder="Your Phone" className="bg-[#FDFBF7] border-slate-200 text-[#0B1E36] h-12 rounded-xl focus:border-[#D4AF37]" /></div>
// // //                                     <div className="space-y-2"><Label className="text-slate-600 font-bold text-xs uppercase tracking-widest">Email</Label><Input required name="email" type="email" placeholder="Your Email" className="bg-[#FDFBF7] border-slate-200 text-[#0B1E36] h-12 rounded-xl focus:border-[#D4AF37]" /></div>
// // //                                     <Button type="submit" className="w-full bg-[#0B1E36] hover:bg-[#D4AF37] hover:text-[#0B1E36] text-white font-bold h-14 rounded-xl mt-4 text-lg transition-colors"><Unlock className="w-5 h-5 mr-2" /> Unlock Blueprint</Button>
// // //                                   </form>
// // //                                 </div>
// // //                               )}
// // //                             </div>
// // //                           </div>
// // //                         </DialogContent>
// // //                       </Dialog>
// // //                     </div>
// // //                   </Card>
// // //                 </motion.div>
// // //               ))}
// // //             </AnimatePresence>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== DETAILED AMENITIES ==========
// // //   const AmenitiesSection = () => {
// // //     const AmenityPill = ({ icon: Icon, label }: { icon: any, label: string }) => (
// // //       <div className="flex items-center gap-4 bg-white border border-slate-200 shadow-sm p-4 rounded-2xl hover:border-[#D4AF37] transition-all group cursor-default hover:shadow-md">
// // //         <div className="w-2 h-2 rounded-full bg-[#0B1E36] group-hover:bg-[#D4AF37] group-hover:scale-150 transition-all"></div>
// // //         {Icon && <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#0B1E36] transition-colors" />}
// // //         <span className="text-slate-700 font-medium group-hover:text-[#0B1E36] transition-colors">{label}</span>
// // //       </div>
// // //     )
// // //     const Activity = ({ className }: { className?: string }) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> )

// // //     return (
// // //       <section className="py-24 bg-[#FDFBF7]">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
// // //             <h2 className="text-4xl md:text-5xl font-serif text-[#0B1E36] mb-4 font-bold">30+ World-Class <span className="italic text-[#D4AF37]">Amenities</span></h2>
// // //             <p className="text-xl text-slate-500">A 16,000 Sq.ft Clubhouse where leisure meets lifestyle.</p>
// // //           </motion.div>

// // //           <Tabs defaultValue="clubhouse" className="w-full">
// // //             <div className="flex justify-center mb-12">
// // //               <TabsList className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm">
// // //                 <TabsTrigger value="clubhouse" className="rounded-full px-8 py-3 data-[state=active]:bg-[#0B1E36] data-[state=active]:text-white text-slate-500 transition-all font-bold">
// // //                   Clubhouse (16,000 Sft)
// // //                 </TabsTrigger>
// // //                 <TabsTrigger value="outdoor" className="rounded-full px-8 py-3 data-[state=active]:bg-[#0B1E36] data-[state=active]:text-white text-slate-500 transition-all font-bold">
// // //                   Outdoor & Recreational
// // //                 </TabsTrigger>
// // //               </TabsList>
// // //             </div>

// // //             <TabsContent value="clubhouse">
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
// // //                 <AmenityPill icon={LayoutDashboard} label="Reception Hall" />
// // //                 <AmenityPill icon={BookOpen} label="Reading Lounge" />
// // //                 <AmenityPill icon={Gamepad2} label="Indoor Games" />
// // //                 <AmenityPill icon={Users} label="Kids Play Area" />
// // //                 <AmenityPill icon={Leaf} label="Meditation Hall" />
// // //                 <AmenityPill icon={Coffee} label="Lounge Area" />
// // //                 <AmenityPill icon={Music} label="Party Hall" />
// // //                 <AmenityPill icon={Utensils} label="Dining Area" />
// // //                 <AmenityPill icon={Dumbbell} label="Ultra Gym" />
// // //                 <AmenityPill icon={Wind} label="Steam & Sauna" />
// // //                 <AmenityPill icon={Footprints} label="Cardio Room" />
// // //                 <AmenityPill icon={MonitorPlay} label="Mini Theatre" />
// // //                 <AmenityPill icon={Table2} label="Billiards Table" />
// // //                 <AmenityPill icon={Table2} label="Table Tennis" />
// // //                 <AmenityPill icon={Users} label="Association Room" />
// // //                 <AmenityPill icon={Tv} label="Guest Rooms" />
// // //               </div>
// // //             </TabsContent>

// // //             <TabsContent value="outdoor">
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
// // //                 <AmenityPill icon={Waves} label="Swimming Pool" />
// // //                 <AmenityPill icon={Waves} label="Kids Pool" />
// // //                 <AmenityPill icon={Waves} label="Jacuzzi" />
// // //                 <AmenityPill icon={LayoutDashboard} label="Multipurpose Court" />
// // //                 <AmenityPill icon={Activity} label="Cricket Pitch" />
// // //                 <AmenityPill icon={Activity} label="Basketball Court" />
// // //                 <AmenityPill icon={Activity} label="Throwball Court" />
// // //                 <AmenityPill icon={Footprints} label="Skating Rink" />
// // //                 <AmenityPill icon={Footprints} label="Jogging Track" />
// // //                 <AmenityPill icon={Landmark} label="Amphitheatre" />
// // //                 <AmenityPill icon={Flower2} label="Butterfly Garden" />
// // //                 <AmenityPill icon={Users} label="Senior Seating" />
// // //                 <AmenityPill icon={Waves} label="Fountain" />
// // //                 <AmenityPill icon={Trees} label="Planting Deck" />
// // //                 <AmenityPill icon={LayoutDashboard} label="Chess Pawn" />
// // //                 <AmenityPill icon={Footprints} label="Hopscotch" />
// // //               </div>
// // //             </TabsContent>
// // //           </Tabs>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== SPECIFICATIONS ==========
// // //   const Specifications = () => {
// // //     return (
// // //       <section className="py-24 bg-[#0B1E36] text-white">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <div className="mb-16 text-center">
// // //             <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">
// // //               Premium <span className="italic text-[#D4AF37]">Specifications</span>
// // //             </h2>
// // //             <p className="text-lg text-slate-400">Built with uncompromising quality.</p>
// // //           </div>

// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
// // //             <div className="space-y-0">
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><Frame className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Framed Structure</h4><p className="text-slate-400 text-sm leading-relaxed">Mivan Constructions</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><BrickWall className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Walls</h4><p className="text-slate-400 text-sm leading-relaxed">8" RCC walls (Concrete walls)</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><DoorOpen className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Doors</h4><p className="text-slate-400 text-sm leading-relaxed">WPC Doors for Main & Internal doors</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><AppWindow className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Window</h4><p className="text-slate-400 text-sm leading-relaxed">UPVC windows with mosquito mesh</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><Layers className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Flooring</h4><p className="text-slate-400 text-sm leading-relaxed">2'x4' vitrified tiles flooring for living, dining, kitchen & bedrooms. 15"x15" Anti-skid tiles for balcony.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><Bath className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Toilet</h4><p className="text-slate-400 text-sm leading-relaxed">Kerovit by Kajaria bath fittings. 2'x1' anti skid ceramic tiles. Provision for exhaust fan.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10 lg:border-b-0">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><Wrench className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Plumbing</h4><p className="text-slate-400 text-sm leading-relaxed">Supreme / Ashirvad CPVC CP fittings with Jaguar / Parryware sanitary fittings.</p></div>
// // //               </div>
// // //             </div>

// // //             <div className="relative h-full min-h-[600px] w-full hidden lg:block">
// // //               <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-[100px] opacity-10"></div>
// // //               <img src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/generated-image%20(54).png" alt="Premium Apartment Interior" className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border border-white/10" />
// // //             </div>

// // //             <div className="space-y-0">
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><PaintRoller className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Painting</h4><p className="text-slate-400 text-sm leading-relaxed">2 Coats of Nippon Putty. One Coat of primer & Two Coats of Nippon Emulsion for internal walls. Nippon Exterior for external.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><Zap className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Electrical</h4><p className="text-slate-400 text-sm leading-relaxed">Concealed Finolex / Anchor copper wiring. Anchor Roma Modular Switches. A/C point in Bedrooms & Geyser with separate circuits.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><Tv className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Communication</h4><p className="text-slate-400 text-sm leading-relaxed">Telephone points in Living & TV point in Living and Master Bedroom.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><Droplets className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Water Supply</h4><p className="text-slate-400 text-sm leading-relaxed">Water supply from bore well with overhead tank.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><ArrowUpFromLine className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Lift</h4><p className="text-slate-400 text-sm leading-relaxed">3 Lifts of fully Automatic with 8 passenger and 1 service lift of KONE / OTIS / Equivalent make.</p></div>
// // //               </div>
// // //               <div className="flex gap-5 py-6 border-b border-white/10 lg:border-b-0">
// // //                 <div className="shrink-0 pt-1 bg-white/5 p-3 rounded-xl border border-white/10"><BatteryCharging className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} /></div>
// // //                 <div><h4 className="font-bold text-lg text-white mb-1">Generator</h4><p className="text-slate-400 text-sm leading-relaxed">100% power back-up for each flat, lift, motor & common area lighting.</p></div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== MID PAGE CTA (COMMENTED OUT AS IN ORIGINAL) ==========
// // //   {/* const MidPageCtaSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
// // //     ... original code was commented out ...
// // //   }
// // //   */}

// // //   // ========== BROCHURE CTA SECTION ==========
// // //   const BrochureCTASection = () => {
// // //     const [isModalOpen, setIsModalOpen] = useState(false);
// // //     return (
// // //       <>
// // //         <section className="py-24 bg-[#FDFBF7]">
// // //           <div className="container mx-auto px-4 max-w-6xl">
// // //             <div className="relative rounded-[3rem] overflow-hidden group border border-slate-200 shadow-2xl h-[360px] md:h-[400px]">
// // //               <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL-palm-altezze-banner2.webp')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
// // //               <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/95 via-[#0B1E36]/80 to-[#0B1E36]/40" />
// // //               <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-8 space-y-6">
// // //                 <h2 className="text-3xl md:text-5xl font-serif tracking-wider text-white">
// // //                   GET COST SHEET & BROCHURE
// // //                 </h2>
// // //                 <div className="w-20 md:w-24 h-1 bg-[#D4AF37] rounded-full" />
// // //                 <p className="text-slate-300 max-w-xl text-sm md:text-lg font-light">
// // //                   Click below to download brochure of Palm Altezze & register for special offers.
// // //                 </p>
// // //                 <Button onClick={() => setIsModalOpen(true)} className="bg-[#D4AF37] hover:bg-white text-[#0B1E36] px-10 md:px-12 py-6 text-sm md:text-lg rounded-xl font-bold uppercase tracking-wider transition-all shadow-lg">
// // //                   Download Now
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>
// // //         <BrochureCTAModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
// // //       </>
// // //     );
// // //   };

// // //   // ========== REVIEWS SECTION ==========
// // //   const ReviewsSection = () => {
// // //     const testimonialData = [
// // //       { type: "text", name: "Anusha V", role: "Happy Home Buyer", location: "RRL Palacio", rating: 5, testimonial: "After doing lot of research I purchased a flat in RRL Palacio. My kid loves the society! I like their gym, movie theater and rooftop pool." },
// // //       { type: "text", name: "Rahil R", role: "Happy Home Buyer", location: "RRL Palacio", rating: 5, testimonial: "Spacious and well-designed apartments. Friendly staff, great amenities like clubhouse, gym, pool, and sports courts. Pet-friendly and perfect for families. Highly recommended!" },
// // //       { type: "video", name: "VideoTestimonial1", videoUrl: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1" },
// // //       { type: "text", name: "Chaitanya Samprajan", role: "Happy Home Buyer", location: "RRL Palacio", rating: 5, testimonial: "Good builder & team. Value for money. Well planned & organised. Shout out to Kavya - she works tirelessly to accommodate customers. They won best amenities award!" },
// // //       { type: "text", name: "Nagarajan K", role: "Happy Home Buyer", location: "RRL Palacio", rating: 5, testimonial: "The marketing team was very supportive with documents and responded to all queries on time. Premium amenities at an affordable price point in this neighborhood." },
// // //       { type: "video", name: "VideoTestimonial2", videoUrl: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1" },
// // //       { type: "text", name: "Kishore Babu", role: "Happy Home Buyer", location: "RRL Palm Altezze", rating: 5, testimonial: "Structure quality is very good, very good atmosphere with all around Greenery and spacious balcony view. Great amenities like home theater, steam & sauna, gym, open barbeque facing swimming pool. Very impressed with CRECHE and Automation (Schneider make). Best choice for anyone!" },
// // //       { type: "text", name: "Prabhakaran Surineni", role: "Happy Home Buyer", location: "RRL Palm Altezze", rating: 5, testimonial: "This location is rarely available at such a good price, especially including interiors. Construction quality is very good. Marketing Manager Kavya is very professional - always available to answer questions and treated us politely. RRL Builders deliver good quality with a great team!" },
// // //       { type: "text", name: "Sagar Mana", role: "Happy Home Buyer", location: "RRL Palm Altezze", rating: 5, testimonial: "Nice apartment, Premium flat with no common wall, future strategic location. Many new companies are setting up their offices, units, R&D Centers including manufacturing firms. Potential growth in this area!" },
// // //     ]

// // //     const GoogleIcon = () => (
// // //       <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
// // //         <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
// // //         <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
// // //         <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
// // //         <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
// // //       </svg>
// // //     )

// // //     return (
// // //       <section className="py-24 relative bg-[#FDFBF7] overflow-hidden">
// // //         <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-30" style={{ backgroundImage: `url('https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766479785/CLIENTS_BACKGROUND_1_sfkdst.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl md:text-5xl font-serif text-[#0B1E36] font-bold mb-4">Client <span className="italic text-[#D4AF37]">Testimonials</span></h2>
// // //             <div className="flex items-center gap-3 justify-center">
// // //               <div className="flex items-center gap-1 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
// // //                 <GoogleIcon />
// // //                 <span className="font-bold text-[#0B1E36] text-sm">Google Reviews</span>
// // //               </div>
// // //               <div className="flex gap-1">
// // //                 {[1, 2, 3, 4, 5].map((i) => (<Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />))}
// // //               </div>
// // //               <span className="text-slate-600 text-sm font-medium">5.0 Average</span>
// // //             </div>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {testimonialData.map((item, index) => (
// // //               <div key={index} className="h-full">
// // //                 {item.type === "video" ? (
// // //                   <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/95 backdrop-blur-sm p-4 rounded-[2rem] shadow-md border border-slate-200 hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 h-full flex flex-col">
// // //                     <div className="rounded-[1.5rem] overflow-hidden shadow-inner bg-black relative flex-grow min-h-[250px]">
// // //                       <iframe src={item.videoUrl} title={item.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full absolute inset-0"></iframe>
// // //                     </div>
// // //                   </motion.div>
// // //                 ) : (
// // //                   <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/95 backdrop-blur-sm p-8 rounded-[2rem] shadow-md border border-slate-200 hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 h-full flex flex-col justify-between">
// // //                     <div>
// // //                       <div className="flex items-start justify-between mb-6">
// // //                         <div className="flex items-center gap-4">
// // //                           <div className="w-12 h-12 rounded-full bg-[#0B1E36] flex items-center justify-center text-white font-bold text-lg shadow-inner font-serif">
// // //                             {item.name ? item.name.charAt(0) : "U"}
// // //                           </div>
// // //                           <div>
// // //                             <h4 className="font-bold text-[#0B1E36]">{item.name}</h4>
// // //                             <p className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">{item.location}</p>
// // //                           </div>
// // //                         </div>
// // //                         <GoogleIcon />
// // //                       </div>
// // //                       <div className="mb-6 flex-grow">
// // //                         <div className="flex gap-1 mb-4">
// // //                           {[...Array(item.rating || 5)].map((_, i) => (<Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />))}
// // //                         </div>
// // //                         <p className="text-slate-600 text-sm leading-relaxed italic">"{item.testimonial}"</p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="pt-4 border-t border-slate-100 flex justify-end items-center mt-auto">
// // //                       <span className="text-[10px] font-bold text-[#0B1E36] bg-[#FDFBF7] border border-slate-200 px-3 py-1.5 rounded-full uppercase tracking-widest">
// // //                         {item.role}
// // //                       </span>
// // //                     </div>
// // //                   </motion.div>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== CONNECTIVITY (COMBINED FULL CONTENT) ==========
// // //   const ConnectivitySection = () => (
// // //     <section className="py-24 bg-[#0B1E36] border-b border-white/10">
// // //       <div className="container mx-auto px-4 max-w-7xl">
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Prime <span className="italic text-[#D4AF37]">Location</span></h2>
// // //           <p className="text-slate-400">Off Varthur Road. Connected to everything that matters.</p>
// // //         </div>
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //           {[
// // //             { icon: Building2, title: "Tech Hubs", items: ["ITPL Main Road", "Wipro SEZ", "RGA Tech Park", "Sigma Tech Park"] },
// // //             { icon: ShoppingCart, title: "Malls", items: ["Nexus Whitefield", "Nexus Shantiniketan", "Phoenix Marketcity", "Inorbit Mall"] },
// // //             { icon: BookOpen, title: "Education", items: ["Chrysalis High", "Vagdevi Vilas", "Ryan International", "Delhi Public School"] },
// // //             { icon: Hospital, title: "Hospitals", items: ["Manipal Varthur", "Sahasra Hospital", "Cloudnine Hospital", "Sankara Eye Hospital"] },
// // //           ].map((cat, i) => (
// // //             <Card key={i} className="p-8 border border-white/10 shadow-lg bg-white/5 hover:bg-white/10 hover:border-[#D4AF37] transition-all group rounded-[2rem]">
// // //               <div className="w-14 h-14 bg-[#0B1E36] rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#D4AF37] transition-colors"><cat.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#0B1E36]" /></div>
// // //               <h3 className="text-xl font-bold mb-4 text-white">{cat.title}</h3>
// // //               <ul className="space-y-3 text-sm text-slate-400">
// // //                 {cat.items.map((item, idx) => <li key={idx} className="flex items-start gap-3"><span className="text-[#D4AF37] font-bold">•</span> {item}</li>)}
// // //               </ul>
// // //             </Card>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )

// // //   const Connectivity = () => {
// // //     return (
// // //       <section className="py-24 bg-[#0B1E36]">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// // //             <div className="space-y-8">
// // //               <div>
// // //                 <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
// // //                   Quick Access to <br /> <span className="italic text-[#D4AF37]">Varthur Road</span>
// // //                 </h2>
// // //                 <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-[#D4AF37] pl-4">
// // //                   Palm Altezze benefits from low traffic volumes on Varthur Road. The community enjoys easy accessibility, with three roads seamlessly connecting to the main road in minutes.
// // //                 </p>
// // //               </div>
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// // //                 {[
// // //                   { icon: Train, title: "Transport", items: ["Purple Line Metro", "Carmelaram Station", "BMTC / Ola / Uber", "SH-35 Connectivity"] },
// // //                   { icon: BookOpen, title: "Schools", items: ["Vasishta & Vagdevi Vilas", "The Foundation School", "Orchids International", "VIBGYOR High School", "The Prodigies Int."] },
// // //                   { icon: ShoppingCart, title: "Malls", items: ["Phoenix Marketcity", "Virginia Mall", "Park Square Mall", "Inorbit Mall"] },
// // //                   { icon: Hospital, title: "Hospitals", items: ["Manipal Hospital", "City Hospital", "Sahasra Hospitals", "Cloudnine Hospital", "The Eye Foundation"] }
// // //                 ].map((cat, i) => (
// // //                   <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37] transition-colors group shadow-md">
// // //                     <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
// // //                       <cat.icon className="w-5 h-5 text-[#D4AF37]" />
// // //                       <h3 className="font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors">{cat.title}</h3>
// // //                     </div>
// // //                     <ul className="space-y-1.5 text-xs text-slate-400 leading-relaxed">
// // //                       {cat.items.map((item, idx) => <li key={idx}>• {item}</li>)}
// // //                     </ul>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             <div className="relative h-full min-h-[600px] rounded-[3rem] overflow-hidden border border-white/10 bg-[#0B1E36] flex items-center justify-center group shadow-2xl p-2">
// // //               <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
// // //                 <iframe src="https://www.google.com/maps?q=Varthur,Bangalore&output=embed" width="100%" height="100%" className="absolute inset-0 border-0 opacity-70 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="RRL Palm Altezze Location"></iframe>
// // //                 <div className="absolute bottom-6 left-6 bg-[#0B1E36]/95 p-4 rounded-2xl border border-[#D4AF37] shadow-xl backdrop-blur-md">
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="bg-white/10 p-2 rounded-xl"><MapPin className="w-6 h-6 text-[#D4AF37]" /></div>
// // //                     <div><p className="text-white font-bold text-sm">RRL Palm Altezze</p><p className="text-xs text-slate-400">Janthagondanahalli, Varthur</p></div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== FAQS SECTION ==========
// // //   const FAQsSection = () => {
// // //     const faqs = [
// // //       { category: "General", questions: [{ q: "What is the total area of RRL Palm Altezze?", a: "RRL Palm Altezze is built on 1.38 acres of land with 92% open space, featuring 1 tower with B+G+23 floors." }, { q: "How many units are there per floor?", a: "Each floor has 5 units, offering a mix of 2 BHK and 3 BHK apartments with varying configurations." }, { q: "What is the price range?", a: "Prices start from ₹1 Crore onwards for 2 & 3 BHK premium apartments." }] },
// // //       { category: "Amenities", questions: [{ q: "How many amenities are available?", a: "RRL Palm Altezze features 30+ world-class amenities including swimming pool, gym, yoga deck, sports courts, and much more." }, { q: "Is there a clubhouse?", a: "Yes, there is a 16,000 sq.ft clubhouse with multiple facilities spread across ground, 1st, and 2nd floors." }, { q: "Are there facilities for children?", a: "Yes, we have indoor and outdoor children's play areas, kids' pool, and various recreational facilities." }] },
// // //       { category: "Construction & Specifications", questions: [{ q: "What construction technology is used?", a: "We use Mivan construction technology with RCC framed structure designed as per IS codes for earthquake resistance." }, { q: "What is the power backup arrangement?", a: "100% generator backup is provided for each flat, lifts, motor, and common area lighting." }, { q: "What are the flooring specifications?", a: "Vitrified tiles (2'x4') for living, dining, kitchen & bedrooms, and anti-skid tiles for balconies." }] },
// // //       { category: "Location & Connectivity", questions: [{ q: "How is the connectivity to Whitefield?", a: "Located along State Highway 35, which directly connects to Whitefield, Brookfield, and other major areas." }, { q: "Is there metro connectivity?", a: "Yes, Nallurahalli Metro Station is nearby, providing easy access to the Purple Line." }, { q: "What schools and hospitals are nearby?", a: "Multiple schools including Chrysalis High, Delhi Public School, and hospitals like Manipal Hospital are within proximity." }] },
// // //       { category: "Payment & Possession", questions: [{ q: "What is the payment plan?", a: "Pay only 5% now with no pre-EMI till possession. Flexible payment plans available." }, { q: "When is the expected possession?", a: "Possession is expected as per the project timeline. Contact our sales team for specific details." }, { q: "Are there any hidden charges?", a: "No hidden charges. All costs are transparent and clearly mentioned in the agreement." }] },
// // //     ]

// // //     const [openQuestions, setOpenQuestions] = useState<Record<number, number | null>>({})
// // //     const toggleQuestion = (sectionIndex: number, qIndex: number) => setOpenQuestions((prev) => ({ ...prev, [sectionIndex]: prev[sectionIndex] === qIndex ? null : qIndex }))

// // //     return (
// // //       <section className="py-24 bg-[#FDFBF7]">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1E36] mb-4 text-balance">Frequently Asked <span className="italic text-[#D4AF37]">Questions</span></h2>
// // //             <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">Find answers to common questions about RRL Palm Altezze</p>
// // //           </div>
// // //           <div className="space-y-16">
// // //             {faqs.map((section, sectionIndex) => (
// // //               <div key={sectionIndex}>
// // //                 <h3 className="text-2xl font-serif font-bold text-[#0B1E36] mb-8 pb-4 border-b border-slate-200 text-center uppercase tracking-widest">{section.category}</h3>
// // //                 <div className="space-y-4 max-w-4xl mx-auto">
// // //                   {section.questions.map((item, qIndex) => {
// // //                     const isOpen = openQuestions[sectionIndex] === qIndex
// // //                     return (
// // //                       <Card key={qIndex} onClick={() => toggleQuestion(sectionIndex, qIndex)} className={`p-6 border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden rounded-2xl ${isOpen ? "border-[#D4AF37]/50" : ""}`}>
// // //                         <div className="flex justify-between items-center gap-4">
// // //                           <h4 className="font-bold text-base sm:text-lg text-[#0B1E36]">{item.q}</h4>
// // //                           <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-2xl font-bold text-[#D4AF37]">+</motion.div>
// // //                         </div>
// // //                         <AnimatePresence>
// // //                           {isOpen && (
// // //                             <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="mt-4 pt-4 border-t border-slate-100">
// // //                               <p className="text-slate-600 leading-relaxed">{item.a}</p>
// // //                             </motion.div>
// // //                           )}
// // //                         </AnimatePresence>
// // //                       </Card>
// // //                     )
// // //                   })}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="mt-20 bg-[#0B1E36] rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
// // //             <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-[80px]" />
// // //             <div className="relative z-10">
// // //               <h3 className="text-3xl font-serif font-bold mb-4">Still have questions?</h3>
// // //               <p className="text-lg mb-8 text-slate-300">Our sales team is ready to help you with any queries</p>
// // //               <a href="tel:+918494966966" className="inline-block bg-[#D4AF37] text-[#0B1E36] font-bold px-10 py-4 rounded-xl hover:bg-white transition-colors text-lg shadow-lg">Call: 84 94 966 966</a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== JOURNEY SECTION ==========
// // //   const Journey = () => {
// // //     const milestones = [
// // //       { year: "Trust", title: "On-Time Delivery", description: "We take pride in our track record of delivering projects on or before schedule, as promised.", icon: Key },
// // //       { year: "Expertise", title: "High-Rise & Premium", description: "Accommodates high-rise premium projects and mid-size luxury homes with A1 quality.", icon: Building2 },
// // //       { year: "Innovation", title: "Pioneer in Commercial", description: "Leading the way in landmark commercial projects.", icon: Briefcase },
// // //       { year: "Growth", title: "200% Appreciation", description: "Our completed projects have seen a massive 200% capital appreciation in just 2 years.", icon: TrendingUp },
// // //     ]
// // //     return (
// // //       <section className="py-24 bg-[#0B1E36] relative overflow-hidden">
// // //         <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
// // //           <div className="text-center mb-20">
// // //             <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Discover Our <span className="italic text-[#D4AF37]">Journey</span></motion.h2>
// // //             <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }} className="h-1 bg-[#D4AF37] mx-auto rounded-full" />
// // //           </div>
// // //           <div className="relative">
// // //             <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 md:translate-x-0">
// // //               <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="w-full bg-[#D4AF37] origin-top" />
// // //             </div>
// // //             <div className="space-y-12">
// // //               {milestones.map((item, index) => (
// // //                 <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: index * 0.1 }} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
// // //                   <div className="w-full md:w-1/2 pl-12 md:pl-0">
// // //                     <div className={`p-8 rounded-[2rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group relative ${index % 2 === 0 ? "md:text-left md:mr-12" : "md:text-right md:ml-12"}`}>
// // //                       <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white/5 border-t border-r border-white/10 rotate-45 transition-colors ${index % 2 === 0 ? "-right-2.5 border-l-0 border-b-0" : "-left-2.5 border-t-0 border-r-0 border-b border-l"}`}></div>
// // //                       <div className={`flex items-center gap-4 mb-4 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
// // //                         <div className="p-4 bg-white/10 rounded-2xl text-[#D4AF37]"><item.icon className="w-6 h-6" /></div>
// // //                         <div><span className="block text-xs text-white/50 font-bold tracking-widest uppercase mb-1">{item.year}</span><h3 className="text-2xl font-serif font-bold text-white">{item.title}</h3></div>
// // //                       </div>
// // //                       <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
// // //                     <div className="w-4 h-4 rounded-full bg-[#0B1E36] border-2 border-[#D4AF37] relative z-10"><div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-75"></div></div>
// // //                   </div>
// // //                   <div className="w-full md:w-1/2 hidden md:block"></div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== COMPLETE PROJECT SECTION ==========
// // //   const CompleteProject = () => {
// // //     const WhatsAppIcon = ({ className }: { className?: string }) => (
// // //       <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>
// // //     )
// // //     const projects = [
// // //       { name: "RRL Palacio", location: "Medahalli, Bangalore", type: "Luxury Apartment", status: "READY TO MOVE", image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531", mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png?updatedAt=1766849721531", href: "/projects/palacio", acres: "1.5 Acres", units: "103 Units", config: "2, 3 BHK", possession: "Early possession granted" },
// // //       { name: "RRL Nature Woods", location: "Sarjapur, Bangalore", type: "Premium Apartment", status: "Completed", image: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502", mobileImage: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png?updatedAt=1766849724502", href: "/projects/nature-woods", acres: "1.5 Acres", units: "148 Units", config: "2, 3 BHK", possession: "Early possession granted" },
// // //     ]

// // //     return (
// // //       <section className="py-24 bg-[#FDFBF7]">
// // //         <h1 className="text-[#0B1E36] font-serif mb-16 text-4xl md:text-5xl font-bold text-center">Successfully Completed <span className="italic text-[#D4AF37]">Projects</span></h1>
// // //         <div className="container mx-auto px-4 max-w-6xl">
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// // //             {projects.map((project, index) => (
// // //               <motion.div key={index} className="group h-full" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
// // //                 <div className="bg-white rounded-[2rem] shadow-md overflow-hidden h-full flex flex-col border border-slate-200 hover:shadow-2xl transition-all">
// // //                   <Link href={project.href} className="relative w-full overflow-hidden aspect-[366/256] md:aspect-[16/9]">
// // //                     <Image src={project.mobileImage} alt={project.name} fill className="block md:hidden object-fill group-hover:scale-105 transition-transform duration-700" />
// // //                     <Image src={project.image} alt={project.name} fill priority={index === 0} className="hidden md:block object-fill group-hover:scale-105 transition-transform duration-700" />
// // //                     <div className="absolute inset-0 bg-[#0B1E36]/10" />
// // //                     <span className="absolute top-6 left-6 bg-[#0B1E36] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg tracking-widest">{project.status}</span>
// // //                   </Link>
// // //                   <div className="p-8 flex flex-col flex-grow">
// // //                     <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-widest mb-2">{project.type}</p>
// // //                     <Link href={project.href}><h3 className="text-2xl font-serif font-bold text-[#0B1E36] hover:text-[#D4AF37] transition-colors">{project.name}</h3></Link>
// // //                     <div className="mt-4 mb-6 p-4 bg-[#FDFBF7] rounded-xl border border-slate-100"><p className="text-sm font-bold text-[#0B1E36]">{project.possession}</p></div>
// // //                     <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-b border-slate-100 py-6 mb-8">
// // //                       <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest mb-1">Location</p><p className="text-sm font-bold text-[#0B1E36]">{project.location}</p></div>
// // //                       <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest mb-1">Config</p><p className="text-sm font-bold text-[#0B1E36]">{project.config}</p></div>
// // //                       <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest mb-1">Area</p><p className="text-sm font-bold text-[#0B1E36]">{project.acres}</p></div>
// // //                       <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest mb-1">Units</p><p className="text-sm font-bold text-[#0B1E36]">{project.units}</p></div>
// // //                     </div>
// // //                     <div className="mt-auto flex gap-3">
// // //                       <a href="https://wa.me/918494966966" target="_blank" className="h-12 w-12 flex items-center justify-center rounded-xl border border-slate-200 text-green-600 hover:bg-green-600 hover:text-white transition-all bg-[#FDFBF7]"><WhatsAppIcon className="h-6 w-6" /></a>
// // //                       <a href="tel:+918494966966" className="flex-none flex items-center justify-center h-12 w-12 rounded-xl border border-slate-200 text-[#0B1E36] hover:bg-[#0B1E36] hover:text-white transition-all bg-[#FDFBF7]"><Phone className="h-5 w-5" /></a>
// // //                       <Link href={project.href} className="flex-1"><button className="w-full h-12 bg-[#0B1E36] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-[#D4AF37] group-hover:text-[#0B1E36] transition-all duration-300">Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button></Link>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== CONTACT ==========
// // //   const ContactSection = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
// // //     const initialData = { name: "", email: "", phone: "", message: "" }
// // //     const [data, setData] = useState(initialData)
// // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData({ ...data, [e.target.name]: e.target.value })
// // //     const localSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (await onSubmit(data)) setData(initialData); }

// // //     return (
// // //       <section className="py-24 bg-[#0B1E36] border-t border-white/10">
// // //         <div className="container mx-auto px-4 max-w-7xl">
// // //           <div className="grid md:grid-cols-2 gap-16">
// // //             <div>
// // //               <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Get In <span className="italic text-[#D4AF37]">Touch</span></h2>
// // //               <div className="space-y-8">
// // //                 <div className="flex items-start gap-6"><div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"><MapPin className="w-5 h-5 text-[#D4AF37]" /></div><p className="text-slate-300 text-sm leading-relaxed mt-3">Sy. No - 73/6 (Old 73/5), RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087.</p></div>
// // //                 <div className="flex items-center gap-6"><div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"><Phone className="w-5 h-5 text-[#D4AF37]" /></div><a href="tel:+918494966966" className="text-white font-bold text-xl hover:text-[#D4AF37] transition-colors">+91 84 94 966 966</a></div>
// // //                 <div className="flex items-center gap-6"><div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"><Mail className="w-5 h-5 text-[#D4AF37]" /></div><a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="text-slate-300 hover:text-[#D4AF37] transition-colors">enquiry@rrlbuildersanddevelopers.com</a></div>
// // //               </div>
// // //             </div>
// // //             <Card className="p-8 md:p-10 shadow-2xl bg-[#FDFBF7] border-transparent rounded-[2rem]">
// // //               <h3 className="text-2xl font-bold text-[#0B1E36] mb-8 font-serif">Send Message</h3>
// // //               <form onSubmit={localSubmit} className="space-y-5">
// // //                 <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-4 bg-white border border-slate-200 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition shadow-sm" placeholder="Name" />
// // //                 <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-4 bg-white border border-slate-200 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition shadow-sm" placeholder="Email" />
// // //                 <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-4 bg-white border border-slate-200 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition shadow-sm" placeholder="Phone" />
// // //                 <textarea name="message" value={data.message} onChange={handleChange} rows={4} className="w-full p-4 bg-white border border-slate-200 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition shadow-sm" placeholder="Message"></textarea>
// // //                 <Button type="submit" className="w-full bg-[#0B1E36] hover:bg-[#D4AF37] hover:text-[#0B1E36] text-white font-bold h-14 rounded-xl text-lg transition-colors">Send Message</Button>
// // //               </form>
// // //             </Card>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }

// // //   // ========== MODAL ==========
// // //   const EnquiryModal = ({ onSubmit }: { onSubmit: (data: FormData) => Promise<boolean> }) => {
// // //     const initialData = { name: "", email: "", phone: "" }
// // //     const [data, setData] = useState(initialData)
// // //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, [e.target.name]: e.target.value })
// // //     const localSubmit = async (e: React.FormEvent) => { e.preventDefault(); if (await onSubmit(data)) { setData(initialData); setIsModalOpen(false); } }

// // //     return (
// // //       <AnimatePresence>
// // //         {isModalOpen && (
// // //           <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1E36]/90 backdrop-blur-md p-4" onClick={() => setIsModalOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
// // //             <motion.div className="relative w-full max-w-md p-10 bg-[#FDFBF7] border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()} initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
// // //               <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37] rounded-full filter blur-[60px] opacity-20" />
// // //               <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-[#0B1E36] bg-white p-2 border border-slate-200 rounded-full transition-colors"><X className="w-5 h-5" /></button>
// // //               <h3 className="text-3xl font-serif font-bold text-[#0B1E36] mb-8 text-center relative z-10">Quick <span className="italic text-[#D4AF37]">Enquiry</span></h3>
// // //               <form onSubmit={localSubmit} className="space-y-4 relative z-10">
// // //                 <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-4 bg-white border border-slate-200 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition shadow-sm" placeholder="Name" />
// // //                 <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-4 bg-white border border-slate-200 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition shadow-sm" placeholder="Email" />
// // //                 <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-4 bg-white border border-slate-200 rounded-xl text-[#0B1E36] focus:border-[#D4AF37] outline-none transition shadow-sm" placeholder="Phone" />
// // //                 <Button type="submit" className="w-full bg-[#0B1E36] hover:bg-[#D4AF37] hover:text-[#0B1E36] text-white font-bold h-14 rounded-xl mt-4 text-lg transition-colors shadow-lg">Submit</Button>
// // //               </form>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     )
// // //   }

// // //   // ========== AWARDS SECTION (COMMENTED OUT AS IN ORIGINAL) ==========
// // //   {/*
// // //   const AwardsSection = () => {
// // //     return (
// // //       <section className="py-20 bg-black border-t border-[#333]">
// // //         <div className="container mx-auto px-4 text-center">
// // //           <h2 className="text-4xl font-bold text-[#d9a406] mb-8">Awards & Recognition</h2>
// // //           <p className="text-gray-400">Awarded for Premium Architecture & Sustainable Development.</p>
// // //         </div>
// // //       </section>
// // //     )
// // //   }
// // //   */}

// // //   return (
// // //     <main className="w-full bg-[#FDFBF7] min-h-screen text-[#0B1E36] font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#0B1E36]">
// // //       <HeroImageBanner />
// // //       <HeroSection />
// // //       <TowerShowcaseSection />
// // //       <ProjectGlanceSection />
// // //       <ArchitectureSection />
// // //       <VRShowcaseSection />
// // //       <SolarPowerSection />
// // //       <USPSection />
// // //       <HealthyLivingSection />
// // //       <FloorPlansSection />
// // //       <AmenitiesSection />
// // //       {/* <SpecificationsSection /> */}
// // //       <Specifications />
// // //       {/* <MidPageCtaSection onSubmit={handleFormSubmit} /> */}
// // //       <BrochureCTASection />
// // //       <ReviewsSection />
// // //       <ConnectivitySection />
// // //       {/* <PremiumSpecifications /> */}
// // //       <Connectivity />
// // //       <FAQsSection />
// // //       {/* <AwardsSection /> */}
// // //       <CompleteProject />
// // //       <Journey />
// // //       <ContactSection onSubmit={(data) => handleFormSubmit(data, "xldarjon")} />
// // //       <EnquiryModal onSubmit={(data) => handleFormSubmit(data, "xldarjon")} />
// // //     </main>
// // //   )
// // // }

// // "use client"

// // import { useState, useEffect } from "react"
// // import { useRouter } from "next/navigation"
// // import { motion, AnimatePresence, Variants } from "framer-motion"
// // import { Button } from "@/components/ui/button"
// // import { Card } from "@/components/ui/card"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// // import Image from "next/image"
// // import Link from "next/link"
// // import {
// //   Phone, Building2, Leaf, Users, Zap, Train, Hospital, BookOpen,
// //   ShoppingCart, Award, Mail, MapPin, ChevronDown, X, Wind, Footprints,
// //   Waves, Music, Dumbbell, MonitorPlay, Landmark, Sun, ShieldCheck,
// //   LayoutDashboard, Trees, Coffee, Table2, Construction, Download,
// //   Maximize2, Lock, Unlock, ArrowLeft, ArrowRight, Star, Utensils, Gamepad2, Tv, Flower2, Briefcase,
// //   TrendingUp, Key, Glasses, Frame, BrickWall, DoorOpen, AppWindow, Layers,
// //   Bath, Wrench, PaintRoller, ArrowUpFromLine, BatteryCharging, Droplets,
// //   CheckCircle, User, Smartphone, Calendar, Loader2
// // } from "lucide-react"
// // import { useForm, ValidationError } from '@formspree/react'

// // import TowerBrochureModal from "@/components/TowerBrochureModal"
// // import BrochureCTAModal from "@/components/BrochureCTAModal"

// // // --- Shared Data ---
// // type FormData = { name: string; email: string; phone: string; message?: string }

// // const floorPlansData = [
// //   { id: "01", type: "2BHK", facing: "North", area: 1265, dims: { living: "17'9\" x 11'6\"", dining: "8'6\" x 8'0\"", masterBed: "13'0\" x 12'0\"", bed2: "12'3\" x 11'6\"", kitchen: "8'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203915.png" },
// //   { id: "02", type: "3BHK", facing: "North", area: 1495, dims: { living: "16'0\" x 12'0\"", dining: "8'6\" x 12'9\"", masterBed: "13'0\" x 12'0\"", bed2: "12'6\" x 12'0\"", bed3: "11'6\" x 12'0\"", kitchen: "11'6\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203938.png" },
// //   { id: "03", type: "3BHK", facing: "North", area: 1630, dims: { living: "17'9\" x 12'0\"", dining: "8'6\" x 11'0\"", masterBed: "13'0\" x 11'6\"", bed2: "13'0\" x 11'6\"", bed3: "11'0\" x 11'6\"", kitchen: "9'0\" x 11'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20203954.png" },
// //   { id: "04", type: "3BHK", facing: "East", area: 1560, dims: { living: "28'0\" x 11'6\"", dining: "Combined w/ Living", masterBed: "12'0\" x 13'0\"", bed2: "11'0\" x 11'6\"", bed3: "12'0\" x 11'6\"", kitchen: "11'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204011.png" },
// //   { id: "05", type: "3BHK", facing: "East", area: 1510, dims: { living: "11'6\" x 15'9\"", dining: "8'0\" x 12'9\"", masterBed: "13'0\" x 13'0\"", bed2: "11'0\" x 11'0\"", bed3: "10'3\" x 11'0\"", kitchen: "9'0\" x 8'0\"" }, image: "https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Screenshot%202026-03-10%20204025.png" }
// // ];

// // const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };
// // const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// // export default function Home() {
// //   const [isModalOpen, setIsModalOpen] = useState(false)
// //   const router = useRouter()

// //   const handleFormSubmit = async (data: FormData, formId: string): Promise<boolean> => {
// //     fetch('/enquire-now-api.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.name, phone: data.phone, email: data.email, project: 'RRL Palm Altezze' }) }).catch(console.error)
// //     try {
// //       const response = await fetch(`https://formspree.io/f/${formId}`, { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json", Accept: "application/json" } })
// //       if (response.ok) { router.push("/c4/thankyou"); return true; } 
// //       else { alert("Oops! There was a problem submitting your form. Please try again."); return false; }
// //     } catch (error) { alert("An error occurred. Please check your connection and try again."); return false; }
// //   }

// //   const AnimatedCounter = ({ start = 0, end, duration = 2000, suffix = "", separator = false }: { start?: number; end: number; duration?: number; suffix?: string; separator?: boolean; }) => {
// //     const [count, setCount] = useState(start)
// //     useEffect(() => {
// //       let startTime: number | null = null;
// //       const step = (timestamp: number) => {
// //         if (!startTime) startTime = timestamp;
// //         const progress = Math.min((timestamp - startTime) / duration, 1);
// //         setCount(Math.floor(start + (end - start) * progress));
// //         if (progress < 1) window.requestAnimationFrame(step);
// //       };
// //       window.requestAnimationFrame(step);
// //     }, [start, end, duration]);
// //     return <span>{separator ? count.toLocaleString() : count}{suffix}</span>
// //   }

// //   return (
// //     <main className="w-full bg-[#FFFFFF] min-h-screen text-[#0A192F] font-sans selection:bg-[#D4AF37] selection:text-white">
      
// //       {/* --- ELEGANT STICKY NAV --- */}
// //       <header className="fixed top-0 w-full z-50 bg-[#0A192F]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
// //         <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
// //           <div className="flex items-center gap-4">
// //             <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
// //             <span className="text-xl font-serif text-white tracking-[0.2em] uppercase">Palm Altezze</span>
// //           </div>
// //           <div className="flex items-center gap-8">
// //             <a href="tel:+918494966966" className="hidden md:flex items-center gap-2 text-sm text-white/80 hover:text-[#D4AF37] transition-colors">
// //               <Phone className="w-4 h-4" /> 84 94 966 966
// //             </a>
// //             <Button onClick={() => setIsModalOpen(true)} className="bg-[#D4AF37] hover:bg-white text-[#0A192F] px-6 py-2 h-auto rounded-none text-xs font-bold uppercase tracking-widest transition-colors">
// //               Cost Sheet
// //             </Button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* --- EDITORIAL HERO SECTION --- */}
// //       <section className="relative w-full min-h-screen bg-[#0A192F] flex items-center pt-20 overflow-hidden">
// //         <div className="absolute inset-0 z-0">
// //           <motion.img 
// //             initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: "easeOut" }}
// //             src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/ok.png" 
// //             alt="Hero" 
// //             className="w-full h-full object-fill opacity-40 mix-blend-screen" 
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-transparent" />
// //           <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
// //         </div>

// //         <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
// //           <motion.div className="flex-1 space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
// //             <motion.div variants={fadeUp} className="flex items-center gap-4">
// //               <div className="h-[1px] w-12 bg-[#D4AF37]" />
// //               <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Possession: Mid 2027</span>
// //             </motion.div>
// //             <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-[7rem] font-serif text-white leading-[1.05]">
// //               A Lifestyle <br />
// //               <span className="text-[#D4AF37] italic font-light">Stands Tall.</span>
// //             </motion.h1>
// //             <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/70 font-light max-w-lg leading-relaxed">
// //               Premium 2 & 3 BHK Apartments in Varthur. Experiencing Mivan Technology and a 16,000 Sq.ft Clubhouse.
// //               <br /><span className="text-xs opacity-50 mt-4 block tracking-widest">RERA: PRM/KA/RERA/1251/308/PR/141025/008167</span>
// //             </motion.p>
            
// //             <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-8 border-t border-white/10">
// //               {[ 
// //                 { v: 50, l: "UDS Share", s: "%" }, 
// //                 { v: 92, l: "Open Space", s: "%" }, 
// //                 { v: 70, l: "Carpet Area", s: "%" }, 
// //                 { v: 5, l: "Units/Floor", s: "" }, 
// //                 { v: 16000, l: "Sq.ft Club", s: "", sep: true } 
// //               ].map((stat, i) => (
// //                 <div key={i}>
// //                   <p className="text-3xl font-light text-white"><AnimatedCounter end={stat.v} suffix={stat.s} separator={stat.sep} /></p>
// //                   <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest mt-1">{stat.l}</p>
// //                 </div>
// //               ))}
// //             </motion.div>
// //           </motion.div>

// //           <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="w-full max-w-md">
// //             <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
// //               <div className="absolute top-0 right-0 w-2 h-2 bg-[#D4AF37] m-4" />
// //               <h3 className="text-2xl font-serif text-white mb-2">Enquire Now</h3>
// //               <p className="text-white/50 text-xs tracking-widest uppercase mb-8">Priority Site Visit</p>
              
// //               <form onSubmit={async (e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string }, "xldarjon"); e.currentTarget.reset(); }} className="space-y-6">
// //                 <div className="relative">
// //                   <input name="name" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Name" />
// //                   <label className="absolute left-0 -top-3.5 text-[#D4AF37] text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Your Name</label>
// //                 </div>
// //                 <div className="relative">
// //                   <input name="phone" type="tel" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Phone" />
// //                   <label className="absolute left-0 -top-3.5 text-[#D4AF37] text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Mobile Number</label>
// //                 </div>
// //                 <div className="relative">
// //                   <input name="email" type="email" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Email" />
// //                   <label className="absolute left-0 -top-3.5 text-[#D4AF37] text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Email Address</label>
// //                 </div>
// //                 <Button type="submit" className="w-full bg-white hover:bg-[#D4AF37] text-[#0A192F] font-bold h-14 rounded-none uppercase tracking-widest text-sm mt-4 transition-colors">
// //                   Request Call Back
// //                 </Button>
// //               </form>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* --- ELEGANT TOWER SHOWCASE --- */}
// //       <section className="py-32 bg-[#FFFFFF]">
// //         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
// //           <div className="grid lg:grid-cols-2 gap-20 items-center">
// //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
// //               <div className="absolute -inset-4 border border-[#0A192F]/10 translate-x-4 translate-y-4" />
// //               <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/WhatsApp%20Image%202025-12-01%20at%2010.21.07%20AM%20(1).jpeg" alt="Tower" className="w-full h-full object-fill relative z-10 shadow-2xl" />
// //               <div className="absolute -bottom-8 -right-8 bg-[#0A192F] p-8 text-white z-20 shadow-xl">
// //                 <p className="text-xs text-[#D4AF37] tracking-widest uppercase mb-2">Structure</p>
// //                 <p className="text-4xl font-serif">23 Floors</p>
// //               </div>
// //             </motion.div>
            
// //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
// //               <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-serif text-[#0A192F] leading-tight">
// //                 An Iconic <br /><span className="italic font-light text-[#D4AF37]">Landmark.</span>
// //               </motion.h2>
// //               <motion.p variants={fadeUp} className="text-lg text-gray-600 font-light leading-relaxed max-w-lg">
// //                 Rising majestically above Varthur, Palm Altezze is more than just a residence; it's a statement of prestige. A masterpiece of modern engineering and sophisticated design.
// //               </motion.p>
// //               <motion.div variants={fadeUp} className="pt-8">
// //                 <Button onClick={() => setIsModalOpen(true)} className="bg-transparent border border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs transition-colors">
// //                   <Download className="w-4 h-4 mr-2" /> Download Brochure
// //                 </Button>
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- PROJECT AT A GLANCE (MINIMALIST GRID) --- */}
// //       <section className="py-24 bg-[#F8F9FA] border-y border-gray-200">
// //         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
// //           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
// //             <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F]">Project <br/><span className="text-[#D4AF37] italic">At A Glance.</span></h2>
// //             <p className="text-sm uppercase tracking-widest text-gray-500">RERA & BMRDA Approved <br/> Off Varthur Road</p>
// //           </div>
// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
// //             {[ { l: "Land Extent", v: "1.38 Acres" }, { l: "Structure", v: "B+G+23 Floors" }, { l: "Total Units", v: "115 Units" }, { l: "Configuration", v: "2 & 3 BHK" }, { l: "Size Range", v: "1265-1630 Sft" }, { l: "Technology", v: "Mivan Build" } ].map((item, i) => (
// //               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-l border-[#D4AF37] pl-4">
// //                 <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">{item.l}</p>
// //                 <p className="text-lg font-serif text-[#0A192F]">{item.v}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- ARCHITECTURE & VR (DEEP NAVY THEME) --- */}
// //       <section className="py-32 bg-[#0A192F] text-white">
// //         <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-32">
          
// //           <div className="grid lg:grid-cols-2 gap-20 items-center">
// //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8 order-2 lg:order-1">
// //               <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-serif leading-tight">Architecture <br/><span className="italic text-[#D4AF37] font-light">Reimagined.</span></motion.h2>
// //               <motion.p variants={fadeUp} className="text-lg text-white/70 font-light leading-relaxed max-w-lg">
// //                 Built for the Future. At RRL Palm Altezze, we combine high-tech Mivan Engineering with eco-friendly Solar Power and EV Charging. Located in the heart of the Silicon Triangle.
// //               </motion.p>
// //               <motion.div variants={fadeUp} className="border-l border-[#D4AF37] pl-6 py-2">
// //                 <p className="text-sm font-bold tracking-widest uppercase">A world crafted for the art of living well.</p>
// //               </motion.div>
// //             </motion.div>
// //             <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative aspect-[4/3] w-full order-1 lg:order-2">
// //               <img src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/PALM%20ALTEZZE%202%20ok.png" alt="Architecture" className="w-full h-full object-fill shadow-2xl" />
// //             </motion.div>
// //           </div>

// //           <div className="grid lg:grid-cols-2 gap-20 items-center">
// //             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
// //                <div className="absolute inset-0 bg-[#D4AF37]/20 translate-x-4 -translate-y-4" />
// //                <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Visualize%20Your%20Home%20Virtually%202.png" alt="VR" className="w-full h-full object-fill relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
// //             </motion.div>
// //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
// //               <motion.div variants={fadeUp} className="flex items-center gap-4">
// //                 <Glasses className="w-6 h-6 text-[#D4AF37]" />
// //                 <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Immersive Experience</span>
// //               </motion.div>
// //               <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-serif leading-tight">Visualize Your <br/><span className="italic font-light">Home Virtually.</span></motion.h2>
// //               <motion.p variants={fadeUp} className="text-lg text-white/70 font-light leading-relaxed max-w-lg">
// //                 Experience living in your next home before you buy. Book a session to explore our properties in immersive VR.
// //               </motion.p>
// //               <motion.div variants={fadeUp} className="pt-8">
// //                 {/* VR Formspree Form */}
// //                 <form onSubmit={async (e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string }, "xkgkyavn"); setTimeout(() => window.location.href = "/vr-tour", 1000); }} className="flex flex-col sm:flex-row gap-4 max-w-lg">
// //                   <input type="tel" name="phone" required placeholder="Enter Mobile Number" className="flex-1 bg-transparent border-b border-white/30 text-white placeholder-white/40 focus:border-[#D4AF37] outline-none px-2 font-light" />
// //                   <input type="hidden" name="name" value="VR Request" /><input type="hidden" name="email" value="vr@request.com" />
// //                   <Button type="submit" className="bg-[#D4AF37] text-[#0A192F] hover:bg-white rounded-none px-8 uppercase tracking-widest text-xs font-bold transition-colors">Book Now</Button>
// //                 </form>
// //               </motion.div>
// //             </motion.div>
// //           </div>

// //         </div>
// //       </section>

// //       {/* --- SOLAR, USP & HEALTHY LIVING --- */}
// //       <section className="py-32 bg-[#FFFFFF]">
// //         <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-32">
          
// //           <div className="grid lg:grid-cols-2 gap-16 items-center">
// //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
// //               <motion.div variants={fadeUp} className="flex items-center gap-4 text-[#0A192F]">
// //                 <Sun className="w-5 h-5 text-[#D4AF37]" />
// //                 <span className="text-xs font-bold uppercase tracking-[0.2em]">Sustainability</span>
// //               </motion.div>
// //               <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-[#0A192F]">Power Up <br/>With <span className="italic text-[#D4AF37] font-light">Solar.</span></motion.h2>
// //               <motion.p variants={fadeUp} className="text-lg text-gray-500 font-light max-w-md">Solar lights for common areas — reducing your current bill every month while protecting the environment.</motion.p>
// //             </motion.div>
// //             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[300px] md:h-[400px] overflow-hidden">
// //                <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Power.png" alt="Solar" className="w-full h-full object-fill object-center grayscale hover:grayscale-0 transition-all duration-700" />
// //             </motion.div>
// //           </div>

// //           <div>
// //             <div className="mb-16">
// //               <h2 className="text-3xl font-serif text-[#0A192F] mb-4">Why Choose <span className="italic text-[#D4AF37]">Palm Altezze?</span></h2>
// //               <div className="h-[1px] w-full bg-gray-200" />
// //             </div>
// //             <div className="grid md:grid-cols-3 gap-12">
// //                {[
// //                 { icon: Construction, title: "Mivan Technology", items: [{ i: ShieldCheck, t: "Strong Monolithic Structures" }, { i: ShieldCheck, t: "Leak-proof walls" }, { i: ShieldCheck, t: "Earthquake Resistant" }] },
// //                 { icon: Sun, title: "Solar Powered", items: [{ i: Zap, t: "Solar lighting (Common Areas)" }, { i: Zap, t: "Reduced maintenance" }, { i: Zap, t: "Eco-friendly Energy" }] },
// //                 { icon: Landmark, title: "50% UDS", items: [{ i: Award, t: "True 50% Undivided Share" }, { i: Award, t: "Higher appreciation" }, { i: Award, t: "Rare in Bangalore" }] }
// //               ].map((usp, i) => (
// //                 <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
// //                   <usp.icon className="w-10 h-10 text-[#D4AF37] mb-6" strokeWidth={1} />
// //                   <h3 className="text-xl font-serif text-[#0A192F] mb-6">{usp.title}</h3>
// //                   <ul className="space-y-4 text-sm text-gray-500 font-light">
// //                     {usp.items.map((item, idx) => <li key={idx} className="flex items-center gap-3"><item.i className="w-4 h-4 text-[#D4AF37]" /> {item.t}</li>)}
// //                   </ul>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="grid lg:grid-cols-2 gap-16 items-center pt-16 border-t border-gray-200">
// //              <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} className="order-2 lg:order-1 relative aspect-[4/5] md:aspect-square">
// //                 <img src="https://ik.imagekit.io/j0xzq9pns/RRL%20palm%20altezzee%20page%20images%20(336%20x%20448%20px)/Step%20Into%20Healthy%20Living.png" alt="Healthy" className="w-full h-full object-fill" />
// //              </motion.div>
// //              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 lg:order-2 space-y-12">
// //                <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-[#0A192F]">Step Into <br/><span className="italic text-[#D4AF37] font-light">Healthy Living.</span></motion.h2>
// //                <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">At RRL Palm Altezze, you don't just get a home — you get a lifestyle.</motion.p>
// //                <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-8">
// //                  <div className="border-t border-[#0A192F] pt-6">
// //                    <Wind className="w-6 h-6 text-[#D4AF37] mb-4" strokeWidth={1.5} />
// //                    <p className="text-sm uppercase tracking-widest font-bold text-[#0A192F]">Fresh Air & <br/>Green Surroundings</p>
// //                  </div>
// //                  <div className="border-t border-[#0A192F] pt-6">
// //                    <Footprints className="w-6 h-6 text-[#D4AF37] mb-4" strokeWidth={1.5} />
// //                    <p className="text-sm uppercase tracking-widest font-bold text-[#0A192F]">Safe, Well-Lit <br/>Track For All Ages</p>
// //                  </div>
// //                </motion.div>
// //              </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- MASTERFULLY PLANNED (FLOOR PLANS - NAVY THEME) --- */}
// //       <section className="py-32 bg-[#0A192F] text-white" id="floorplans">
// //         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
// //           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
// //             <div className="max-w-xl">
// //               <h2 className="text-4xl md:text-6xl font-serif mb-6">Masterfully <span className="italic text-[#D4AF37] font-light">Planned.</span></h2>
// //               <p className="text-white/60 font-light leading-relaxed">115 Units | 5 Units Per Floor | Choose from our range of 5 distinct unit layouts designed for absolute spatial efficiency.</p>
// //             </div>
// //             <div className="flex gap-4">
// //               <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2" />
// //               <p className="text-xs uppercase tracking-widest text-white/50 max-w-[150px]">Explore the blueprints below</p>
// //             </div>
// //           </div>

// //           <div className="border-t border-white/20">
// //             {floorPlansData.map((plan, i) => {
// //               const [isOpen, setIsOpen] = useState(false);
// //               const [isUnlocked, setIsUnlocked] = useState(false);

// //               return (
// //                 <div key={plan.id} className="border-b border-white/10">
// //                   <div className="py-8 flex flex-wrap items-center justify-between cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
// //                     <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
// //                       <span className="text-2xl font-serif text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">{plan.id}</span>
// //                       <h3 className="text-3xl md:text-4xl font-serif text-white">{plan.type}</h3>
// //                       <span className="hidden md:block text-xs uppercase tracking-widest text-white/40">{plan.facing} Facing</span>
// //                     </div>
// //                     <div className="flex items-center gap-8 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
// //                       <div className="text-right">
// //                         <span className="text-2xl md:text-3xl font-light">{plan.area}</span>
// //                         <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] ml-2">Sq.Ft</span>
// //                       </div>
// //                       <ChevronDown className={`w-6 h-6 text-white/50 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
// //                     </div>
// //                   </div>

// //                   <AnimatePresence>
// //                     {isOpen && (
// //                       <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
// //                         <div className="py-8 grid lg:grid-cols-2 gap-12 items-center">
// //                           <div className="space-y-6">
// //                             <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Room Dimensions</p>
// //                             <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-sm font-light">
// //                               <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Facing</p><p>{plan.facing}</p></div>
// //                               <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Living</p><p>{plan.dims.living}</p></div>
// //                               {plan.dims.dining && <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Dining</p><p>{plan.dims.dining}</p></div>}
// //                               <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Master Bed</p><p>{plan.dims.masterBed}</p></div>
// //                               {plan.dims.bed2 && <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Bedroom 2</p><p>{plan.dims.bed2}</p></div>}
// //                               {plan.dims.bed3 && <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Bedroom 3</p><p>{plan.dims.bed3}</p></div>}
// //                               <div><p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Kitchen</p><p>{plan.dims.kitchen}</p></div>
// //                             </div>
// //                           </div>
                          
// //                           <div className="relative aspect-video bg-white/5 p-4 flex items-center justify-center">
// //                             <img src={plan.image} alt="Plan" className={`max-h-full max-w-full object-contain transition-all duration-1000 ${isUnlocked ? 'blur-0' : 'blur-xl opacity-30 grayscale'}`} />
                            
// //                             {!isUnlocked ? (
// //                               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#0A192F]/60 backdrop-blur-md text-center">
// //                                 <Lock className="w-6 h-6 text-[#D4AF37] mb-6" />
// //                                 <form onSubmit={(e) => { e.preventDefault(); setIsUnlocked(true); }} className="w-full max-w-xs space-y-4">
// //                                   <input required name="name" placeholder="Name" className="w-full bg-transparent border-b border-white/30 py-2 text-center text-sm focus:border-[#D4AF37] outline-none placeholder-white/50" />
// //                                   <input required name="phone" type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-white/30 py-2 text-center text-sm focus:border-[#D4AF37] outline-none placeholder-white/50" />
// //                                   <Button type="submit" className="w-full bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] rounded-none text-xs uppercase tracking-widest mt-4">Unlock Blueprint</Button>
// //                                 </form>
// //                               </div>
// //                             ) : (
// //                               <div className="absolute bottom-4 right-4">
// //                                 <a href="https://ik.imagekit.io/j0xzq9pns/RRL%20Palm%20plans/Palm%20Altezze%20Brochure_compressed.pdf?ik-attachment=true" download="Palm_Altezze_Brochure.pdf">
// //                                   <Button variant="outline" className="border-white/20 bg-[#0A192F]/80 backdrop-blur text-xs uppercase tracking-widest rounded-none hover:bg-white hover:text-[#0A192F]">Download PDF</Button>
// //                                 </a>
// //                               </div>
// //                             )}
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </div>
// //               )
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- AMENITIES (RESTORED INTERACTIVE TABS) --- */}
// //       <section className="py-32 bg-[#0A192F]">
// //         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
// //           <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
// //              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-4">30+ World-Class Amenities</p>
// //              <h2 className="text-4xl md:text-5xl font-serif text-white">The Club <span className="italic font-light">Altezze.</span></h2>
// //              <p className="text-white/60 font-light mt-6 max-w-xl mx-auto">A sprawling 16,000 Sq.ft sanctuary where leisure meets lifestyle, spread across ground, 1st, and 2nd floors.</p>
// //           </motion.div>

// //           <Tabs defaultValue="clubhouse" className="w-full">
// //             <div className="flex justify-center mb-16">
// //               <TabsList className="bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
// //                 <TabsTrigger value="clubhouse" className="rounded-full px-8 py-3 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0A192F] text-white/50 transition-all font-bold tracking-widest uppercase text-xs">
// //                   Clubhouse (16,000 Sft)
// //                 </TabsTrigger>
// //                 <TabsTrigger value="outdoor" className="rounded-full px-8 py-3 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#0A192F] text-white/50 transition-all font-bold tracking-widest uppercase text-xs">
// //                   Outdoor & Recreational
// //                 </TabsTrigger>
// //               </TabsList>
// //             </div>

// //             <TabsContent value="clubhouse">
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                 {[
// //                   { icon: LayoutDashboard, label: "Reception Hall" }, { icon: BookOpen, label: "Reading Lounge" },
// //                   { icon: Gamepad2, label: "Indoor Games" }, { icon: Users, label: "Kids Play Area" },
// //                   { icon: Leaf, label: "Meditation Hall" }, { icon: Coffee, label: "Lounge Area" },
// //                   { icon: Music, label: "Party Hall" }, { icon: Utensils, label: "Dining Area" },
// //                   { icon: Dumbbell, label: "Ultra Gym" }, { icon: Wind, label: "Steam & Sauna" },
// //                   { icon: Footprints, label: "Cardio Room" }, { icon: MonitorPlay, label: "Mini Theatre" },
// //                   { icon: Table2, label: "Billiards Table" }, { icon: Table2, label: "Table Tennis" },
// //                   { icon: Users, label: "Association Room" }, { icon: Tv, label: "Guest Rooms" }
// //                 ].map((item, i) => (
// //                   <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-none hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-default">
// //                     <div className="w-1.5 h-1.5 bg-[#D4AF37] group-hover:scale-150 transition-transform" />
// //                     <item.icon className="w-5 h-5 text-white/40 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
// //                     <span className="text-sm font-light text-white/80 group-hover:text-white transition-colors">{item.label}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </TabsContent>
            
// //             <TabsContent value="outdoor">
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                  {[
// //                   { icon: Waves, label: "Swimming Pool" }, { icon: Waves, label: "Kids Pool" },
// //                   { icon: Waves, label: "Jacuzzi" }, { icon: LayoutDashboard, label: "Multipurpose Court" },
// //                   { icon: Footprints, label: "Cricket Pitch" }, { icon: LayoutDashboard, label: "Basketball Court" },
// //                   { icon: LayoutDashboard, label: "Throwball Court" }, { icon: Footprints, label: "Skating Rink" },
// //                   { icon: Footprints, label: "Jogging Track" }, { icon: Landmark, label: "Amphitheatre" },
// //                   { icon: Flower2, label: "Butterfly Garden" }, { icon: Users, label: "Senior Seating" },
// //                   { icon: Waves, label: "Fountain" }, { icon: Trees, label: "Planting Deck" },
// //                   { icon: LayoutDashboard, label: "Chess Pawn" }, { icon: Footprints, label: "Hopscotch" }
// //                 ].map((item, i) => (
// //                   <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-none hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-default">
// //                     <div className="w-1.5 h-1.5 bg-[#D4AF37] group-hover:scale-150 transition-transform" />
// //                     <item.icon className="w-5 h-5 text-white/40 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
// //                     <span className="text-sm font-light text-white/80 group-hover:text-white transition-colors">{item.label}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </TabsContent>
// //           </Tabs>
// //         </div>
// //       </section>

// //       {/* --- SPECIFICATIONS (RESTORED 3 COLUMN WITH FULL 13 ITEMS & ICONS) --- */}
// //       <section className="py-32 bg-[#FFFFFF]">
// //         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
// //           <div className="text-center mb-24">
// //             <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-4">Premium <span className="italic text-[#D4AF37]">Specifications.</span></h2>
// //             <div className="w-[1px] h-16 bg-[#D4AF37] mx-auto mt-8" />
// //           </div>

// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
// //             <div className="space-y-0">
// //               {[
// //                 { icon: Frame, title: "Framed Structure", desc: "Mivan Constructions" },
// //                 { icon: BrickWall, title: "Walls", desc: '8" RCC walls (Concrete walls)' },
// //                 { icon: DoorOpen, title: "Doors", desc: "WPC Doors for Main & Internal doors" },
// //                 { icon: AppWindow, title: "Window", desc: "UPVC windows with mosquito mesh" },
// //                 { icon: Layers, title: "Flooring", desc: "2'x4' vitrified tiles flooring for living, dining, kitchen & bedrooms. 15\"x15\" Anti-skid tiles for balcony." },
// //                 { icon: Bath, title: "Toilet", desc: "Kerovit by Kajaria bath fittings. 2'x1' anti skid ceramic tiles. Provision for exhaust fan." },
// //                 { icon: Wrench, title: "Plumbing", desc: "Supreme / Ashirvad CPVC CP fittings with Jaguar / Parryware sanitary fittings." }
// //               ].map((s, i) => (
// //                  <div key={i} className="flex gap-6 py-8 border-b border-gray-200">
// //                   <div className="shrink-0 pt-1"><s.icon className="w-8 h-8 text-[#D4AF37]" strokeWidth={1} /></div>
// //                   <div><h4 className="font-serif text-lg text-[#0A192F] mb-2">{s.title}</h4><p className="text-gray-500 text-sm font-light leading-relaxed">{s.desc}</p></div>
// //                 </div>
// //               ))}
// //             </div>
            
// //             <div className="relative h-full min-h-[600px] w-full hidden lg:block py-8">
// //               <div className="absolute inset-0 bg-[#0A192F] rounded-full blur-[100px] opacity-5"></div>
// //               <img src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/generated-image%20(54).png" alt="Premium Apartment Interior" className="relative z-10 w-full h-full object-fill shadow-2xl border border-gray-100" />
// //             </div>

// //             <div className="space-y-0">
// //                {[
// //                 { icon: PaintRoller, title: "Painting", desc: "2 Coats of Nippon Putty. One Coat of primer & Two Coats of Nippon Emulsion for internal walls. Nippon Exterior for external." },
// //                 { icon: Zap, title: "Electrical", desc: "Concealed Finolex / Anchor copper wiring. Anchor Roma Modular Switches. A/C point in Bedrooms & Geyser with separate circuits." },
// //                 { icon: Tv, title: "Communication", desc: "Telephone points in Living & TV point in Living and Master Bedroom." },
// //                 { icon: Droplets, title: "Water Supply", desc: "Water supply from bore well with overhead tank." },
// //                 { icon: ArrowUpFromLine, title: "Lift", desc: "3 Lifts of fully Automatic with 8 passenger and 1 service lift of KONE / OTIS / Equivalent make." },
// //                 { icon: BatteryCharging, title: "Generator", desc: "100% power back-up for each flat, lift, motor & common area lighting." }
// //               ].map((s, i) => (
// //                  <div key={i} className="flex gap-6 py-8 border-b border-gray-200 lg:last:border-b-0">
// //                   <div className="shrink-0 pt-1"><s.icon className="w-8 h-8 text-[#D4AF37]" strokeWidth={1} /></div>
// //                   <div><h4 className="font-serif text-lg text-[#0A192F] mb-2">{s.title}</h4><p className="text-gray-500 text-sm font-light leading-relaxed">{s.desc}</p></div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- RESTORED COMMENTED SECTIONS (AS THEY WERE IN ORIGINAL) --- */}
// //       {/* <MidPageCtaSection onSubmit={handleFormSubmit} /> */}

// //       {/* --- BROCHURE CTA (FULL BLEED IMAGE) --- */}
// //       <section className="relative w-full h-[60vh] bg-[#0A192F] flex items-center justify-center text-center">
// //         <div className="absolute inset-0 z-0">
// //           <img src="https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL-palm-altezze-banner2.webp" alt="Brochure Background" className="w-full h-full object-fill opacity-30" />
// //           <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent" />
// //         </div>
// //         <div className="relative z-10 px-6 max-w-2xl">
// //           <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-wide">The Complete Overview</h2>
// //           <p className="text-white/70 font-light mb-10">Download the brochure of Palm Altezze & register for exclusive early-access offers.</p>
// //           <Button onClick={() => setIsModalOpen(true)} className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] px-10 py-6 rounded-none text-xs font-bold uppercase tracking-widest transition-colors">
// //             Download Cost Sheet & Brochure
// //           </Button>
// //         </div>
// //       </section>

// //       {/* --- REVIEWS (WITH GOOGLE ICON RESTORED) --- */}
// //       <section className="py-32 bg-[#0A192F] text-white overflow-hidden">
// //          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
// //            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/10 pb-8">
// //              <h2 className="text-4xl md:text-5xl font-serif">Client <span className="italic text-[#D4AF37] font-light">Testimonials.</span></h2>
             
// //              {/* RESTORED GOOGLE REVIEWS BADGE */}
// //              <div className="flex flex-col items-end">
// //                <div className="flex items-center gap-2 mb-2 bg-white px-4 py-2 rounded-full shadow-sm">
// //                  <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
// //                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
// //                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
// //                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
// //                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
// //                  </svg>
// //                  <span className="text-[10px] font-bold text-[#0A192F] uppercase tracking-widest">Google Reviews</span>
// //                </div>
// //                <div className="flex gap-1 justify-end">{[1,2,3,4,5].map(i=><Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />)}</div>
// //                <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">5.0 Average</p>
// //              </div>
// //            </div>

// //            <div className="grid md:grid-cols-3 gap-x-12 gap-y-20">
// //              {[
// //                { type: "text", name: "Anusha V", loc: "RRL Palacio", text: "After doing lot of research I purchased a flat in RRL Palacio. My kid loves the society! I like their gym, movie theater and rooftop pool." },
// //                { type: "text", name: "Rahil R", loc: "RRL Palacio", text: "Spacious and well-designed apartments. Friendly staff, great amenities like clubhouse, gym, pool, and sports courts. Pet-friendly and perfect for families. Highly recommended!" },
// //                { type: "video", url: "https://www.youtube.com/embed/VPPeIBhPXSc?autoplay=0&mute=0&loop=1&playlist=VPPeIBhPXSc&controls=1" },
// //                { type: "text", name: "Chaitanya S", loc: "RRL Palacio", text: "Good builder & team. Value for money. Well planned & organised. Shout out to Kavya - she works tirelessly to accommodate customers. They won best amenities award!" },
// //                { type: "text", name: "Nagarajan K", loc: "RRL Palacio", text: "The marketing team was very supportive with documents and responded to all queries on time. Premium amenities at an affordable price point in this neighborhood." },
// //                { type: "video", url: "https://www.youtube.com/embed/-IcK_Ac0dVQ?autoplay=0&mute=0&loop=1&playlist=-IcK_Ac0dVQ&controls=1" },
// //                { type: "text", name: "Kishore Babu", loc: "RRL Palm Altezze", text: "Structure quality is very good, very good atmosphere with all around Greenery and spacious balcony view. Great amenities like home theater, steam & sauna, gym... Best choice for anyone!" },
// //                { type: "text", name: "Prabhakaran S", loc: "RRL Palm Altezze", text: "This location is rarely available at such a good price, especially including interiors. Construction quality is very good. Marketing Manager Kavya is very professional." },
// //                { type: "text", name: "Sagar Mana", loc: "RRL Palm Altezze", text: "Nice apartment, Premium flat with no common wall, future strategic location. Many new companies are setting up their offices, units, R&D Centers including manufacturing firms." }
// //              ].map((item, i) => (
// //                <div key={i} className="flex flex-col">
// //                  {item.type === "text" ? (
// //                    <>
// //                      <div className="mb-6"><span className="text-6xl font-serif text-[#D4AF37] leading-none opacity-50">"</span><p className="text-white/80 font-light leading-relaxed -mt-4">{item.text}</p></div>
// //                      <div className="mt-auto pt-6 border-t border-white/10">
// //                        <p className="font-bold text-sm uppercase tracking-wider">{item.name}</p>
// //                        <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest">{item.loc}</p>
// //                      </div>
// //                    </>
// //                  ) : (
// //                    <div className="w-full aspect-[9/16] md:aspect-square bg-white/5 border border-white/10 p-2">
// //                      <iframe src={item.url} className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500" allowFullScreen></iframe>
// //                    </div>
// //                  )}
// //                </div>
// //              ))}
// //            </div>
// //          </div>
// //       </section>

// //       {/* --- CONNECTIVITY & LOCATION --- */}
// //       <section className="py-32 bg-[#FFFFFF]">
// //         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
// //           <div className="grid lg:grid-cols-12 gap-16 items-start">
// //             <div className="lg:col-span-5 space-y-16">
// //               <div>
// //                 <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6">Prime <span className="italic text-[#D4AF37] font-light">Location.</span></h2>
// //                 <p className="text-gray-600 font-light leading-relaxed">Off Varthur Road. Palm Altezze benefits from low traffic volumes while offering three routes that seamlessly connect to the main road in minutes.</p>
// //               </div>
// //               <div className="space-y-12">
// //                 {[
// //                   { t: "Transport", items: ["Purple Line Metro", "Carmelaram Station", "BMTC / Ola / Uber", "SH-35 Connectivity"] },
// //                   { t: "Schools", items: ["Vasishta & Vagdevi Vilas", "The Foundation School", "Orchids International", "VIBGYOR High School", "The Prodigies Int."] },
// //                   { t: "Malls", items: ["Phoenix Marketcity", "Virginia Mall", "Park Square Mall", "Inorbit Mall"] },
// //                   { t: "Hospitals", items: ["Manipal Hospital", "City Hospital", "Sahasra Hospitals", "Cloudnine Hospital", "The Eye Foundation"] }
// //                 ].map((cat, i) => (
// //                   <div key={i} className="relative pl-6 border-l border-gray-200">
// //                     <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37] -left-[5px] top-1.5" />
// //                     <h3 className="text-lg font-bold text-[#0A192F] uppercase tracking-wider mb-4">{cat.t}</h3>
// //                     <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm font-light text-gray-500">
// //                       {cat.items.map((item, idx) => <li key={idx}>{item}</li>)}
// //                     </ul>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="lg:col-span-7 h-[600px] lg:h-full min-h-[600px] w-full bg-gray-100 relative p-2">
// //               <div className="absolute inset-0 border border-gray-200 m-2 pointer-events-none z-10" />
// //               <iframe src="https://www.google.com/maps?q=Varthur,Bangalore&output=embed" width="100%" height="100%" className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
// //               <div className="absolute bottom-8 left-8 bg-white p-6 shadow-2xl z-20 max-w-xs border border-gray-100">
// //                 <p className="text-sm font-bold text-[#0A192F] uppercase tracking-wider mb-2">RRL Palm Altezze</p>
// //                 <p className="text-xs text-gray-500 font-light leading-relaxed">Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- FAQs, COMPLETED PROJECTS, JOURNEY --- */}
// //       <section className="py-32 bg-[#0A192F] text-white">
// //         <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-40">
          
// //           {/* FAQs */}
// //           <div>
// //              <div className="text-center mb-20">
// //                <h2 className="text-4xl md:text-5xl font-serif mb-6">Frequently Asked <span className="italic text-[#D4AF37] font-light">Questions.</span></h2>
// //                <div className="w-[1px] h-16 bg-[#D4AF37] mx-auto" />
// //              </div>
// //              <div className="max-w-4xl mx-auto space-y-16">
// //                {[
// //                  { cat: "General", faqs: [{ q: "What is the total area of RRL Palm Altezze?", a: "RRL Palm Altezze is built on 1.38 acres of land with 92% open space, featuring 1 tower with B+G+23 floors." }, { q: "How many units are there per floor?", a: "Each floor has 5 units, offering a mix of 2 BHK and 3 BHK apartments." }, { q: "What is the price range?", a: "Prices start from ₹1 Crore onwards for 2 & 3 BHK premium apartments." }] },
// //                  { cat: "Amenities", faqs: [{ q: "How many amenities are available?", a: "RRL Palm Altezze features 30+ world-class amenities including swimming pool, gym, yoga deck, sports courts." }, { q: "Is there a clubhouse?", a: "Yes, there is a 16,000 sq.ft clubhouse with multiple facilities." }, { q: "Are there facilities for children?", a: "Yes, we have indoor and outdoor children's play areas, kids' pool." }] },
// //                  { cat: "Construction", faqs: [{ q: "What construction technology is used?", a: "We use Mivan construction technology with RCC framed structure designed for earthquake resistance." }, { q: "What is the power backup?", a: "100% generator backup is provided for each flat, lifts, motor, and common area lighting." }] },
// //                  { cat: "Location", faqs: [{ q: "How is the connectivity to Whitefield?", a: "Located along SH 35, which directly connects to Whitefield, Brookfield, and other major areas." }, { q: "Is there metro connectivity?", a: "Yes, Nallurahalli Metro Station is nearby." }] },
// //                  { cat: "Payment", faqs: [{ q: "What is the payment plan?", a: "Pay only 5% now with no pre-EMI till possession. Flexible payment plans available." }, { q: "Are there any hidden charges?", a: "No hidden charges. All costs are transparent and clearly mentioned." }] }
// //                ].map((section, sIdx) => (
// //                  <div key={sIdx}>
// //                    <h3 className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-8">{section.cat}</h3>
// //                    <div className="space-y-0 border-t border-white/10">
// //                      {section.faqs.map((faq, i) => {
// //                        const [isOpen, setIsOpen] = useState(false);
// //                        return (
// //                          <div key={i} className="border-b border-white/10">
// //                            <button className="w-full text-left py-6 flex justify-between items-center outline-none group" onClick={()=>setIsOpen(!isOpen)}>
// //                              <span className="text-lg font-light text-white group-hover:text-[#D4AF37] transition-colors">{faq.q}</span>
// //                              <span className={`text-[#D4AF37] transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>+</span>
// //                            </button>
// //                            <AnimatePresence>{isOpen && <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}}><p className="pb-6 text-sm text-white/50 font-light leading-relaxed pr-8">{faq.a}</p></motion.div>}</AnimatePresence>
// //                          </div>
// //                        )
// //                      })}
// //                    </div>
// //                  </div>
// //                ))}
// //              </div>
// //           </div>

// //           {/* RESTORED COMMENTED SECTION */}
// //           {/* <AwardsSection /> */}

// //           {/* Completed Projects */}
// //           <div>
// //             <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
// //               <h2 className="text-4xl md:text-5xl font-serif">Completed <span className="italic text-[#D4AF37] font-light">Projects.</span></h2>
// //               <p className="text-xs uppercase tracking-[0.2em] text-white/50">Our Legacy</p>
// //             </div>
// //             <div className="grid md:grid-cols-2 gap-12">
// //                {[
// //                  { name: "RRL Palacio", loc: "Medahalli", status: "READY TO MOVE", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Palacio.png", type: "Luxury Apartment", config: "2, 3 BHK", acres: "1.5 Acres", units: "103", possession: "Early possession granted", href: "/projects/palacio" },
// //                  { name: "RRL Nature Woods", loc: "Sarjapur", status: "COMPLETED", img: "https://ik.imagekit.io/j0xzq9pns/Project/RRL%20project%20explore%20(366%20x%20256%20px)/RRL%20Nature%20Woods.png", type: "Premium Apartment", config: "2, 3 BHK", acres: "1.5 Acres", units: "148", possession: "Early possession granted", href: "/projects/nature-woods" }
// //                ].map((p, i) => (
// //                  <div key={i} className="group">
// //                    <Link href={p.href} className="block relative aspect-[16/9] w-full overflow-hidden mb-6">
// //                      <img src={p.img} alt={p.name} className="w-full h-full object-fill grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
// //                      <div className="absolute top-6 left-6 bg-[#0A192F] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest border border-[#D4AF37]">{p.status}</div>
// //                    </Link>
// //                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold mb-2">{p.type}</p>
// //                    <h3 className="text-3xl font-serif mb-6">{p.name}</h3>
// //                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-8 text-sm font-light text-white/70">
// //                      <p><span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Location</span>{p.loc}</p>
// //                      <p><span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Config</span>{p.config}</p>
// //                      <p><span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Area</span>{p.acres}</p>
// //                      <p><span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Units</span>{p.units}</p>
// //                    </div>
// //                    <div className="flex gap-4">
// //                      <Link href={p.href} className="flex-1"><Button className="w-full bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#0A192F] rounded-none uppercase tracking-widest text-xs h-12 transition-colors">Details</Button></Link>
// //                      <a href="tel:+918494966966" className="w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-[#0A192F] transition-colors"><Phone className="w-4 h-4" /></a>
// //                    </div>
// //                  </div>
// //                ))}
// //             </div>
// //           </div>

// //           {/* Journey */}
// //           <div>
// //             <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
// //               <h2 className="text-4xl md:text-5xl font-serif">Discover Our <span className="italic text-[#D4AF37] font-light">Journey.</span></h2>
// //             </div>
// //             <div className="grid md:grid-cols-4 gap-x-8 gap-y-12">
// //                {[
// //                 { year: "Trust", title: "On-Time Delivery", desc: "Delivering projects on or before schedule, as promised." },
// //                 { year: "Expertise", title: "High-Rise & Premium", desc: "Mid-size luxury homes with A1 quality." },
// //                 { year: "Innovation", title: "Commercial Pioneer", desc: "Leading the way in landmark commercial projects." },
// //                 { year: "Growth", title: "200% Appreciation", desc: "Massive capital appreciation in just 2 years." }
// //               ].map((j, i) => (
// //                 <div key={i} className="border-t border-[#D4AF37]/50 pt-6">
// //                   <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] mb-3">{j.year}</p>
// //                   <h3 className="text-xl font-serif mb-3">{j.title}</h3>
// //                   <p className="text-sm font-light text-white/50 leading-relaxed">{j.desc}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //         </div>
// //       </section>

// //       {/* --- EDITORIAL FOOTER & CONTACT --- */}
// //       <footer className="py-32 bg-[#FFFFFF]">
// //         <div className="container mx-auto px-6 md:px-12 max-w-7xl">
// //           <div className="grid lg:grid-cols-12 gap-20">
// //             <div className="lg:col-span-5 space-y-16">
// //               <h2 className="text-5xl md:text-6xl font-serif text-[#0A192F] leading-tight">Let's <br/><span className="italic text-[#D4AF37] font-light">Connect.</span></h2>
// //               <div className="space-y-10 border-l border-gray-200 pl-8">
// //                 <div>
// //                   <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Location</p>
// //                   <p className="text-sm text-[#0A192F] leading-relaxed max-w-xs">Sy. No - 73/6 (Old 73/5), RRL Palm Altezze, Janthagondanahalli, Varthur, Bengaluru, Karnataka - 560 087.</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Phone</p>
// //                   <a href="tel:+918494966966" className="text-2xl font-serif text-[#0A192F] hover:text-[#D4AF37] transition-colors">+91 84 94 966 966</a>
// //                 </div>
// //                 <div>
// //                   <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Email</p>
// //                   <a href="mailto:enquiry@rrlbuildersanddevelopers.com" className="text-sm text-[#0A192F] hover:text-[#D4AF37] transition-colors">enquiry@rrlbuildersanddevelopers.com</a>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="lg:col-span-7 bg-[#F8F9FA] p-10 md:p-16 border border-gray-200">
// //                <h3 className="text-2xl font-serif text-[#0A192F] mb-10">Send a Message</h3>
// //                <form onSubmit={async(e)=>{ e.preventDefault(); const fd = new FormData(e.currentTarget); await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string, message: fd.get('message') as string }, "xldarjon"); e.currentTarget.reset(); }} className="space-y-8">
// //                   <div className="relative">
// //                     <input name="name" required className="w-full bg-transparent border-b border-gray-300 py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Name" />
// //                     <label className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Full Name</label>
// //                   </div>
// //                   <div className="relative">
// //                     <input name="email" type="email" required className="w-full bg-transparent border-b border-gray-300 py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Email" />
// //                     <label className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Email Address</label>
// //                   </div>
// //                   <div className="relative">
// //                     <input name="phone" type="tel" required className="w-full bg-transparent border-b border-gray-300 py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Phone" />
// //                     <label className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Mobile Number</label>
// //                   </div>
// //                   <div className="relative pt-4">
// //                     <textarea name="message" rows={3} className="w-full bg-transparent border-b border-gray-300 py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent resize-none" placeholder="Message" />
// //                     <label className="absolute left-0 top-0 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-7 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Your Message (Optional)</label>
// //                   </div>
// //                   <Button type="submit" className="w-full bg-[#0A192F] hover:bg-[#D4AF37] text-white hover:text-[#0A192F] font-bold h-14 rounded-none uppercase tracking-widest text-sm mt-8 transition-colors">Submit Enquiry</Button>
// //                </form>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>

// //       {/* --- GLOBAL ENQUIRY MODAL --- */}
// //       <AnimatePresence>
// //         {isModalOpen && (
// //           <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A192F]/90 backdrop-blur-xl p-4" onClick={() => setIsModalOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
// //             <motion.div className="w-full max-w-lg bg-[#FFFFFF] p-10 md:p-16 relative" onClick={e => e.stopPropagation()} initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}>
// //               <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-[#0A192F] transition-colors"><X className="w-6 h-6" /></button>
              
// //               <h3 className="text-3xl font-serif text-[#0A192F] mb-2">Cost Sheet & Brochure</h3>
// //               <p className="text-sm text-gray-500 mb-10 font-light">Register to download instant access.</p>
              
// //               <form onSubmit={async (e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); const ok = await handleFormSubmit({ name: fd.get('name') as string, phone: fd.get('phone') as string, email: fd.get('email') as string }, "xldarjon"); if(ok) setIsModalOpen(false); }} className="space-y-8">
// //                 <div className="relative">
// //                   <input name="name" required className="w-full bg-transparent border-b border-gray-300 py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Name" />
// //                   <label className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Full Name</label>
// //                 </div>
// //                 <div className="relative">
// //                   <input name="phone" type="tel" required className="w-full bg-transparent border-b border-gray-300 py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Phone" />
// //                   <label className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Mobile Number</label>
// //                 </div>
// //                 <div className="relative">
// //                   <input name="email" type="email" required className="w-full bg-transparent border-b border-gray-300 py-3 text-[#0A192F] focus:border-[#D4AF37] outline-none transition-colors peer placeholder-transparent" placeholder="Email" />
// //                   <label className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37] uppercase tracking-widest">Email Address</label>
// //                 </div>
// //                 <Button type="submit" className="w-full bg-[#0A192F] hover:bg-[#D4AF37] text-white hover:text-[#0A192F] font-bold h-14 rounded-none uppercase tracking-widest text-sm mt-8 transition-colors">Download Now</Button>
// //               </form>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* --- MOBILE STICKY CTA --- */}
// //       <div className="md:hidden fixed bottom-0 w-full z-40 bg-white border-t border-gray-200 p-4 flex gap-4">
// //         <Button onClick={() => setIsModalOpen(true)} className="flex-1 bg-[#D4AF37] text-[#0A192F] font-bold h-12 rounded-none uppercase tracking-widest text-xs">
// //           Brochure
// //         </Button>
// //         <a href="https://wa.me/918494966966" className="flex-1">
// //           <Button variant="outline" className="w-full bg-transparent border-[#0A192F] text-[#0A192F] h-12 font-bold rounded-none uppercase tracking-widest text-xs">
// //             WhatsApp
// //           </Button>
// //         </a>
// //       </div>

// //     </main>
// //   )
// // }

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
//     fetch('/enquire-now-api.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.name, phone: data.phone, email: data.email, project: 'RRL Palm Altezze' }) }).catch(console.error)
//     try {
//       const response = await fetch(`https://formspree.io/f/${formId}`, { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json", Accept: "application/json" } })
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
//       <section className="relative w-full min-h-screen bg-[#0A192F] flex items-center pt-20 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <motion.img 
//             initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: "easeOut" }}
//             src="https://ik.imagekit.io/j0xzq9pns/RRl%20website%20banners%20(1536%20x%20752%20px)/ok.png" 
//             alt="Hero" 
//             className="w-full h-full object-fill opacity-40 mix-blend-screen" 
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
//             </div>
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