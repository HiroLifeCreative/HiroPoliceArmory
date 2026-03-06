import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Clock,
  Lock,
  User,
  Search,
  Zap
} from 'lucide-react';
import { weapons, type Weapon, type ItemSection } from '../data/gameData';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  // Armory State
  const [selectedSection, setSelectedSection] = useState<ItemSection>('Armamento');
  const [cooldowns, setCooldowns] = useState<Record<string, number>>({});

  // Mock Officer Data
  const officerName = "Nelson Herrera";
  const officerRank = "Comandante";

  // Cooldown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCooldowns(prev => {
        const next = { ...prev };
        let changed = false;
        Object.keys(next).forEach(key => {
          if (next[key] > 0) {
            next[key] -= 1;
            changed = true;
          } else {
            delete next[key];
            changed = true;
          }
        });
        return changed ? next : prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRequestWeapon = (weapon: Weapon) => {
    if (cooldowns[weapon.id]) return;
    setCooldowns(prev => ({ ...prev, [weapon.id]: weapon.cooldown }));
    console.log(`Requested weapon: ${weapon.label}`);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const sections: ItemSection[] = ['Armamento', 'Suministros', 'Accesorios'];

  const filteredWeapons = weapons.filter(w => w.section === selectedSection);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 p-4 font-sans"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm" onClick={onClose} />

      {/* Main Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
        className="relative w-full max-w-7xl h-[85vh] bg-[#111319] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-slate-800/50"
      >
        
        {/* Header Area */}
        <div className="relative z-10 p-8 pb-0 flex flex-col gap-8 bg-[#111319]">
            {/* Top Row: Branding & Officer */}
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-5">
                    <div className="p-3.5 bg-[#1a1d26] rounded-2xl border border-slate-700/30 shadow-lg">
                        <Shield className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">
                                ARMERÍA POLICIAL
                            </h1>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <p className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">NOMBRE DEL SERVIDOR</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-[#161922] px-5 py-2.5 rounded-xl border border-slate-800/50">
                    <div className="text-right">
                        <div className="text-white text-sm font-bold tracking-wide">{officerName}</div>
                        <div className="flex items-center justify-end gap-1.5 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            <div className="text-blue-500 text-[10px] uppercase tracking-widest font-bold">{officerRank}</div>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#1f2330] flex items-center justify-center border border-slate-700/30">
                        <User size={18} className="text-slate-400" />
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-8 border-b border-slate-800/50 mt-4">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => setSelectedSection(section)}
                    className={`relative pb-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                      selectedSection === section
                        ? 'text-blue-500'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {section}
                    {selectedSection === section && (
                        <motion.div 
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        />
                    )}
                  </button>
                ))}
            </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col bg-[#111319] overflow-hidden relative">
          
          {/* Grid */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredWeapons.map((weapon) => {
                  const isOnCooldown = (cooldowns[weapon.id] || 0) > 0;
                  return (
                    <motion.div
                      key={weapon.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      layout
                      className="group relative bg-[#161922] rounded-2xl overflow-hidden flex flex-col border border-slate-800/50 hover:border-slate-700 transition-all duration-300"
                    >
                      {/* Image Area */}
                      <div className="relative h-40 w-full overflow-hidden bg-[#0f1116]">
                        <img 
                          src={weapon.image} 
                          alt={weapon.label}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[9px] font-bold text-slate-300 uppercase tracking-wider border border-white/10">
                                {weapon.category}
                            </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1 gap-4">
                        <div>
                            <h3 className="text-base font-bold text-white leading-tight mb-1">{weapon.label}</h3>
                            <div className="flex items-center gap-1.5">
                                <Zap size={10} className="text-blue-500" />
                                <span className="text-[10px] text-slate-400 font-medium">
                                    {weapon.extras && weapon.extras.length > 0 ? `${weapon.extras.length} Accesorios` : 'Estándar'}
                                </span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                          onClick={() => handleRequestWeapon(weapon)}
                          disabled={isOnCooldown}
                          className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                            isOnCooldown
                              ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                              : 'bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white shadow-blue-900/30'
                          }`}
                        >
                          {isOnCooldown ? (
                            <div className="flex items-center gap-2">
                              <Clock size={12} className="animate-spin-slow" />
                              <span>{formatTime(cooldowns[weapon.id])}</span>
                            </div>
                          ) : (
                            <span>Solicitar</span>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
              {filteredWeapons.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-24 flex flex-col items-center justify-center text-center border border-dashed border-slate-800 rounded-3xl bg-slate-900/20"
                >
                  <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6 border border-slate-800 shadow-inner">
                    <Search className="w-8 h-8 text-slate-600" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Sin Resultados</h3>
                  <p className="text-slate-500 text-sm max-w-xs">No se encontraron items en la categoría <span className="text-blue-400 font-bold">{selectedSection}</span>.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
