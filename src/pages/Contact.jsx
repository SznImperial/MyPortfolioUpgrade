import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import emailjs from "emailjs-com"; 
import { 
    FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, 
    FiRefreshCw, FiCheckCircle 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// --- CENTRAL DATA MANAGEMENT OBJECT ---
const contactData = {
    email: "adetolaabdulkareemayomide@gmail.com",
    phone: "+234 707 249 5804",
    address: "68, Bola Street, Lagos Mainland, Lagos",
    github: "https://github.com/SznImperial",
    whatsappLink: "https://wa.me/2347072495804", 
    linkedinLink: "#", 
};

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);

    // --- EMAILJS LOGIC ---
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm(
                "service_lq1k0nq", 
                "template_doz1e94", 
                e.target,
                "SWAIDwgTLJUzWbUsv" 
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSubmitted(true);
                    setIsSending(false);
                    setTimeout(() => setSubmitted(false), 5000); 
                },
                (error) => {
                    console.log(error.text);
                    alert("Transmission failed. Check network status.");
                    setIsSending(false);
                }
            );

        e.target.reset();
    };
    // --- END EMAILJS LOGIC ---

    return (
        // FIX: Replaced py-32 with pt-40 to push content below the fixed Navbar 
        // when this page is rendered alone via React Router.
        <section id="contact" className="pt-40 pb-16 bg-deep-black min-h-screen relative overflow-hidden">
            
            {/* Background Cyber Grid */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_top,#39ff1405_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                        <span className="text-neon-green">04.</span> Initialize_Comms
                    </h2>
                    <div className="h-[1px] flex-grow bg-white/10"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* LEFT: Connection Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Let's <span className="text-neon-green">Collaborate</span>
                        </h3>
                        <p className="text-gray-400 mb-10 leading-relaxed">
                            I am currently open for internships and freelance projects. Reach out, and let's build something scalable.
                        </p>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-neon-green/30 transition-colors">
                                <div className="mt-1 text-neon-green"><FiMail size={20} /></div>
                                <div>
                                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Email Protocol</div>
                                    <a href={`mailto:${contactData.email}`} className="text-white hover:text-neon-green transition-colors break-all">
                                        {contactData.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-neon-green/30 transition-colors">
                                <div className="mt-1 text-neon-green"><FiPhone size={20} /></div>
                                <div>
                                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Voice Channel</div>
                                    <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="text-white hover:text-neon-green transition-colors">
                                        {contactData.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-neon-green/30 transition-colors">
                                <div className="mt-1 text-neon-green"><FiMapPin size={20} /></div>
                                <div>
                                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Base of Operations</div>
                                    <span className="text-white">{contactData.address}</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-10 flex gap-4">
                            <a href={contactData.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-neon-green hover:text-black transition-all duration-300">
                                <FiGithub size={20} />
                            </a>
                            <a href={contactData.linkedinLink} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-neon-green hover:text-black transition-all duration-300">
                                <FiLinkedin size={20} />
                            </a>
                            <a href={contactData.whatsappLink} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-neon-green hover:text-black transition-all duration-300">
                                <FaWhatsapp size={20} />
                            </a>
                        </div>

                    </motion.div>


                    {/* RIGHT: The Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm relative"
                    >
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neon-green/30 rounded-tr-xl"></div>

                        <form onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Identity / Name</label>
                                <input 
                                    type="text" 
                                    name="user_name" 
                                    placeholder="Enter your name"
                                    required
                                    disabled={isSending} 
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all disabled:opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Return Address / Email</label>
                                <input 
                                    type="email" 
                                    name="user_email" 
                                    placeholder="Enter your email"
                                    required
                                    disabled={isSending} 
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all disabled:opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Transmission / Message</label>
                                <textarea 
                                    rows="4"
                                    name="message" 
                                    placeholder="Write your message..."
                                    required
                                    disabled={isSending} 
                                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all resize-none disabled:opacity-50"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                disabled={isSending} 
                                className="w-full py-4 bg-neon-green text-black font-bold font-mono rounded hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden disabled:bg-gray-600"
                            >
                                {isSending ? (
                                    <>
                                        <FiRefreshCw className="animate-spin" />
                                        <span className="relative z-10">TRANSMITTING...</span>
                                    </>
                                ) : (
                                    <>
                                        <FiSend />
                                        <span className="relative z-10">DEPLOY_MESSAGE</span>
                                    </>
                                )}
                            </button>
                        </form>

                    </motion.div>

                </div>
                
                {/* Footer Copyright */}
                <div className="mt-32 pt-8 border-t border-white/10 text-center text-gray-600 font-mono text-xs">
                    <p>&copy; 2025 IMPERIAL. All systems nominal.</p>
                </div>

            </div>
        </section>
    );
};

export default Contact;