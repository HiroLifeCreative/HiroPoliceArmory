




export type Rank = 'Cadete' | 'Oficial' | 'Sargento' | 'Inspector' | 'SWAT';
export type ItemSection = 'Armamento' | 'Suministros' | 'Accesorios';

export interface Weapon {
  id: string;
  label: string;
  category: 'cuerpo a cuerpo' | 'pistola' | 'subfusil' | 'rifle' | 'pesada' | 'equipo' | 'curación' | 'otro';
  rank: Rank;
  cooldown: number; // seconds
  extras?: string[];
  image: string;
  section: ItemSection;
}

export const weapons: Weapon[] = [
  { 
    id: 'weapon_nightstick', 
    label: 'Porra Policial', 
    category: 'cuerpo a cuerpo', 
    rank: 'Cadete', 
    cooldown: 60,
    extras: ['Linterna'],
    image: 'https://images.unsplash.com/photo-1598556885318-48a82d294324?w=500&q=80',
    section: 'Armamento'
  },
  { 
    id: 'weapon_flashlight', 
    label: 'Linterna Táctica', 
    category: 'cuerpo a cuerpo', 
    rank: 'Cadete', 
    cooldown: 30,
    image: 'https://images.unsplash.com/photo-1542317854-f9596aa56fd9?w=500&q=80',
    section: 'Accesorios'
  },
  { 
    id: 'item_handcuffs', 
    label: 'Esposas', 
    category: 'equipo', 
    rank: 'Cadete', 
    cooldown: 10,
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&q=80',
    section: 'Accesorios'
  },
  { 
    id: 'item_radio', 
    label: 'Radio Policial', 
    category: 'equipo', 
    rank: 'Cadete', 
    cooldown: 0,
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&q=80',
    section: 'Accesorios'
  },
  { 
    id: 'item_armor', 
    label: 'Chaleco Kevlar', 
    category: 'equipo', 
    rank: 'Cadete', 
    cooldown: 300,
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&q=80',
    section: 'Suministros'
  },
  { 
    id: 'weapon_stun_gun', 
    label: 'Taser', 
    category: 'pistola', 
    rank: 'Cadete', 
    cooldown: 120,
    extras: ['Cartucho Extra'],
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&q=80',
    section: 'Armamento'
  },
  { 
    id: 'weapon_combatpistol', 
    label: 'Pistola de Combate', 
    category: 'pistola', 
    rank: 'Oficial', 
    cooldown: 300,
    extras: ['Cargador Ampliado', 'Linterna'],
    image: 'https://images.unsplash.com/photo-1585589266882-2cb13766bf14?w=500&q=80',
    section: 'Armamento'
  },
  { 
    id: 'item_medkit', 
    label: 'Botiquín', 
    category: 'curación', 
    rank: 'Oficial', 
    cooldown: 600,
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?w=500&q=80',
    section: 'Suministros'
  },
  { 
    id: 'weapon_pump shotgun', 
    label: 'Escopeta Corredera', 
    category: 'pesada', 
    rank: 'Oficial', 
    cooldown: 600,
    extras: ['Munición Goma'],
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?w=500&q=80',
    section: 'Armamento'
  },
  { 
    id: 'weapon_smg', 
    label: 'Subfusil SMG', 
    category: 'subfusil', 
    rank: 'Sargento', 
    cooldown: 900,
    extras: ['Mira Holográfica', 'Grip'],
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&q=80',
    section: 'Armamento'
  },
  { 
    id: 'weapon_carbinerifle', 
    label: 'Carabina', 
    category: 'rifle', 
    rank: 'Inspector', 
    cooldown: 1200,
    extras: ['Mira Avanzada', 'Silenciador', 'Grip Táctico'],
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&q=80',
    section: 'Armamento'
  },
  { 
    id: 'weapon_sniperrifle', 
    label: 'Francotirador', 
    category: 'rifle', 
    rank: 'SWAT', 
    cooldown: 1800,
    extras: ['Mira Térmica', 'Camuflaje'],
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&q=80',
    section: 'Armamento'
  },
  { 
    id: 'weapon_specialcarbine', 
    label: 'Carabina Especial', 
    category: 'rifle', 
    rank: 'SWAT', 
    cooldown: 1500,
    extras: ['Cargador Tambor', 'Mira Punto Rojo'],
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&q=80',
    section: 'Armamento'
  },
  { 
    id: 'weapon_smoke', 
    label: 'Gas Lacrimógeno', 
    category: 'pesada', 
    rank: 'SWAT', 
    cooldown: 300,
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&q=80',
    section: 'Suministros'
  }
];

export interface NPCModel {
  id: string;
  label: string;
  category: 'civil' | 'gang' | 'police' | 'medic' | 'animal';
}

export const npcModels: NPCModel[] = [
  { id: 'a_m_y_beach_01', label: 'Playero Joven', category: 'civil' },
  { id: 'a_f_y_business_01', label: 'Mujer de Negocios', category: 'civil' },
  { id: 'g_m_y_ballas_01', label: 'Balla', category: 'gang' },
  { id: 'g_m_y_famca_01', label: 'Familia', category: 'gang' },
  { id: 's_m_y_cop_01', label: 'Policía LSPD', category: 'police' },
  { id: 's_m_y_swat_01', label: 'SWAT', category: 'police' },
  { id: 's_m_m_paramedic_01', label: 'Paramédico', category: 'medic' },
  { id: 'a_c_rottweiler', label: 'Rottweiler', category: 'animal' },
];

export interface Animation {
  dict: string;
  name: string;
  label: string;
  category: 'gestos' | 'baile' | 'acciones' | 'deportes';
}

export const animations: Animation[] = [
  { dict: 'anim@mp_player_intcelebrationmale@thumbs_up', name: 'thumbs_up', label: 'Pulgar Arriba', category: 'gestos' },
  { dict: 'anim@mp_player_intcelebrationmale@face_palm', name: 'face_palm', label: 'Face Palm', category: 'gestos' },
  { dict: 'missminuteman_1ig_2', name: 'handsup_base', label: 'Manos Arriba', category: 'acciones' },
  { dict: 'amb@world_human_push_ups@male@base', name: 'base', label: 'Flexiones', category: 'deportes' },
  { dict: 'anim@amb@nightclub@dancers@crowddance_facedj@', name: 'hi_dance_facedj_09_v2_male^1', label: 'Baile Club', category: 'baile' },
];
