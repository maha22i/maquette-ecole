import { useState } from 'react';

interface Offre {
    id: number;
    titre: string;
    entreprise: string;
    type: string;
    secteur: string;
    lieu: string;
    dateDebut: string;
    duree: string;
    description: string;
    descriptionComplete: string;
    competences: string[];
    avantages: string[];
    contact: string;
    email: string;
    effectif: string;
    remuneration: string;
    publieLe: string;
}

const OffresSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOffre, setSelectedOffre] = useState<Offre | null>(null);
    const [filters, setFilters] = useState({
        type: '',
        secteur: '',
        localisation: '',
        duree: ''
    });

    const offres: Offre[] = [
        {
            id: 1,
            titre: 'Développeur Web Junior',
            entreprise: 'Tech Corp',
            type: 'Stage',
            secteur: 'Informatique',
            lieu: 'Le Havre',
            dateDebut: '2024-03-01',
            duree: '3 mois',
            description: 'Développement d\'applications web modernes avec React et Node.js',
            descriptionComplete: "Nous recherchons un(e) stagiaire passionné(e) par le développement web pour rejoindre notre équipe technique.\n\nVos missions principales :\n• Participer au développement de notre application SaaS en React / TypeScript\n• Concevoir et intégrer des interfaces utilisateur modernes et responsives\n• Contribuer au développement de l'API REST en Node.js / Express\n• Écrire des tests unitaires et participer aux revues de code\n• Participer aux rituels agiles (daily, sprint review, rétrospective)\n\nEnvironnement technique :\nReact, TypeScript, Node.js, PostgreSQL, Docker, Git, CI/CD\n\nCe stage est une excellente opportunité pour monter en compétences dans un environnement professionnel bienveillant, avec un accompagnement personnalisé par un développeur senior.",
            competences: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Git', 'SQL'],
            avantages: ['Télétravail partiel', 'Tickets restaurant', 'Transport remboursé à 50%', 'Équipe bienveillante'],
            contact: 'Mme. Claire Dubois — CTO',
            email: 'recrutement@techcorp.fr',
            effectif: '45 employés',
            remuneration: '600€ / mois',
            publieLe: '2024-01-20',
        },
        {
            id: 2,
            titre: 'Assistant Marketing Digital',
            entreprise: 'Marketing Pro',
            type: 'Alternance',
            secteur: 'Marketing',
            lieu: 'Rouen',
            dateDebut: '2024-04-01',
            duree: '12 mois',
            description: 'Gestion des réseaux sociaux et campagnes digitales pour nos clients',
            descriptionComplete: "Rejoignez notre agence de marketing digital en alternance et participez à la stratégie de communication de nos clients.\n\nVos missions :\n• Gérer et animer les réseaux sociaux de nos clients (Instagram, LinkedIn, Facebook)\n• Créer du contenu visuel et rédactionnel engageant\n• Planifier et suivre les campagnes publicitaires (Google Ads, Meta Ads)\n• Analyser les performances et rédiger des rapports mensuels\n• Participer à l'élaboration des stratégies marketing\n• Réaliser une veille concurrentielle et tendances\n\nVous travaillerez aux côtés d'une équipe de 5 consultants expérimentés qui vous accompagneront tout au long de votre alternance.",
            competences: ['Réseaux sociaux', 'Canva', 'Google Ads', 'Rédaction web', 'Analytics', 'SEO'],
            avantages: ['Formation continue', 'Ambiance startup', 'Événements d\'équipe', 'MacBook fourni'],
            contact: 'M. Thomas Renard — Directeur',
            email: 'rh@marketingpro.fr',
            effectif: '12 employés',
            remuneration: '950€ / mois',
            publieLe: '2024-02-01',
        },
        {
            id: 3,
            titre: 'Technicien Réseaux',
            entreprise: 'NormandieTech',
            type: 'Stage',
            secteur: 'Informatique',
            lieu: 'Le Havre',
            dateDebut: '2024-03-15',
            duree: '6 mois',
            description: 'Installation et maintenance de réseaux informatiques pour nos clients PME',
            descriptionComplete: "NormandieTech recrute un(e) stagiaire technicien(ne) réseaux pour renforcer son équipe Infrastructure.\n\nVos missions :\n• Installer et configurer des équipements réseau (switchs, routeurs, bornes Wi-Fi)\n• Effectuer la maintenance préventive et curative des parcs informatiques\n• Participer au déploiement de réseaux locaux chez nos clients\n• Configurer les services réseau (DHCP, DNS, Active Directory)\n• Assurer le monitoring et la supervision avec Zabbix\n• Rédiger la documentation technique des interventions\n\nVous interviendrez aussi bien sur site que chez nos clients (PME et collectivités locales de la région havraise).",
            competences: ['TCP/IP', 'Windows Server', 'Cisco', 'Linux', 'Câblage', 'Cybersécurité'],
            avantages: ['Véhicule de service', 'Certifications financées', 'Mutuelle', 'Prime de déplacement'],
            contact: 'M. Julien Morel — Responsable technique',
            email: 'stages@normandietech.fr',
            effectif: '45 employés',
            remuneration: '700€ / mois',
            publieLe: '2024-01-28',
        },
        {
            id: 4,
            titre: 'Technicien Électricité',
            entreprise: 'ENGIE Le Havre',
            type: 'Stage',
            secteur: 'Industrie',
            lieu: 'Le Havre',
            dateDebut: '2024-05-01',
            duree: '4 mois',
            description: 'Maintenance électrique et domotique sur installations industrielles et tertiaires',
            descriptionComplete: "ENGIE recrute un(e) stagiaire pour son agence du Havre, spécialisée dans les installations électriques industrielles et tertiaires.\n\nVos missions :\n• Participer aux chantiers d'installation électrique (tirage de câbles, raccordements)\n• Réaliser des opérations de maintenance préventive\n• Effectuer des diagnostics de pannes et dépannages\n• Lire et interpréter les schémas électriques\n• Respecter les normes de sécurité et les habilitations électriques\n• Rédiger les comptes-rendus d'intervention\n\nVous serez accompagné(e) par un technicien expérimenté et travaillerez sur des sites variés (usines, bureaux, résidences).",
            competences: ['Câblage électrique', 'Schémas électriques', 'Domotique', 'Habilitation électrique', 'Normes NFC 15-100'],
            avantages: ['Grand groupe', 'EPI fournis', 'Indemnité repas', 'Possibilité d\'embauche'],
            contact: 'Mme. Sophie Laurent — RH',
            email: 'stages.lehavre@engie.com',
            effectif: '120 employés (agence)',
            remuneration: '650€ / mois',
            publieLe: '2024-02-10',
        },
    ];

    const filteredOffres = offres.filter(offre => {
        const matchesSearch = offre.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            offre.entreprise.toLowerCase().includes(searchTerm.toLowerCase()) ||
            offre.competences.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesType = !filters.type || offre.type === filters.type;
        const matchesSecteur = !filters.secteur || offre.secteur === filters.secteur;
        const matchesLieu = !filters.localisation || offre.lieu.toLowerCase().includes(filters.localisation.toLowerCase());
        return matchesSearch && matchesType && matchesSecteur && matchesLieu;
    });

    const inputStyle = {
        padding: '10px 14px',
        border: '2px solid var(--color-gray-200)',
        borderRadius: '10px',
        fontSize: '14px',
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        backgroundColor: 'var(--color-gray-50)',
        boxSizing: 'border-box' as const,
        width: '100%',
    };

    return (
        <div>
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: 'var(--spacing-xs)' }}>
                    Rechercher des offres
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Trouvez le stage ou l'alternance qui vous correspond
                </p>
            </div>

            {/* Search and Filters */}
            <div className="card" style={{ padding: '1.25rem', marginBottom: '1.25rem' }}>
                <div style={{ position: 'relative', marginBottom: '12px' }}>
                    <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gray-400)', display: 'flex', alignItems: 'center' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" /><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Rechercher par titre, entreprise, compétences..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            ...inputStyle,
                            padding: '12px 14px 12px 44px',
                            border: '2px solid var(--color-gray-200)',
                            fontSize: 'var(--text-base)',
                        }}
                        onFocus={e => { e.target.style.borderColor = '#10b981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)'; e.target.style.backgroundColor = '#fff'; }}
                        onBlur={e => { e.target.style.borderColor = 'var(--color-gray-200)'; e.target.style.boxShadow = 'none'; e.target.style.backgroundColor = 'var(--color-gray-50)'; }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                    <select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })} style={inputStyle}>
                        <option value="">Tous les types</option>
                        <option value="Stage">Stage</option>
                        <option value="Alternance">Alternance</option>
                    </select>
                    <select value={filters.secteur} onChange={(e) => setFilters({ ...filters, secteur: e.target.value })} style={inputStyle}>
                        <option value="">Tous les secteurs</option>
                        <option value="Informatique">Informatique</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Industrie">Industrie</option>
                    </select>
                    <input
                        type="text" placeholder="Localisation"
                        value={filters.localisation}
                        onChange={(e) => setFilters({ ...filters, localisation: e.target.value })}
                        style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = '#10b981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)'; e.target.style.backgroundColor = '#fff'; }}
                        onBlur={e => { e.target.style.borderColor = 'var(--color-gray-200)'; e.target.style.boxShadow = 'none'; e.target.style.backgroundColor = 'var(--color-gray-50)'; }}
                    />
                    <select value={filters.duree} onChange={(e) => setFilters({ ...filters, duree: e.target.value })} style={inputStyle}>
                        <option value="">Toutes les durées</option>
                        <option value="3">3 mois</option>
                        <option value="6">6 mois</option>
                        <option value="12">12 mois</option>
                    </select>
                </div>
            </div>

            {/* Results Count */}
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', marginBottom: '1rem', fontWeight: 500 }}>
                {filteredOffres.length} offre{filteredOffres.length > 1 ? 's' : ''} trouvée{filteredOffres.length > 1 ? 's' : ''}
            </p>

            {/* Results Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
                {filteredOffres.map((offre) => (
                    <div
                        key={offre.id}
                        style={{
                            backgroundColor: 'white', borderRadius: '14px', padding: '1.25rem',
                            border: '1px solid var(--color-gray-200)',
                            transition: 'all 0.2s', cursor: 'pointer',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'; }}
                        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--color-gray-200)'; }}
                        onClick={() => setSelectedOffre(offre)}
                    >
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                            <div style={{
                                width: '44px', height: '44px', borderRadius: '10px',
                                background: offre.secteur === 'Informatique' ? 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))' : offre.secteur === 'Marketing' ? 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(168,85,247,0.05))' : 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.05))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                {offre.secteur === 'Informatique' ? (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#3B82F6" strokeWidth="2" /><path d="M8 21H16M12 17V21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" /></svg>
                                ) : offre.secteur === 'Marketing' ? (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" /><path d="M13.73 21a2 2 0 01-3.46 0" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" /></svg>
                                ) : (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                )}
                            </div>
                            <span style={{
                                padding: '4px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: 700,
                                backgroundColor: offre.type === 'Stage' ? 'rgba(59,130,246,0.1)' : 'rgba(16,185,129,0.1)',
                                color: offre.type === 'Stage' ? '#2563EB' : '#059669',
                                textTransform: 'uppercase', letterSpacing: '0.03em',
                            }}>
                                {offre.type}
                            </span>
                        </div>

                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-gray-900)', margin: '0 0 4px' }}>
                            {offre.titre}
                        </h3>
                        <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gray-600)', margin: '0 0 8px' }}>
                            {offre.entreprise}
                        </p>
                        <p style={{ fontSize: '13px', color: 'var(--color-gray-500)', margin: '0 0 14px', lineHeight: 1.5 }}>
                            {offre.description}
                        </p>

                        {/* Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                            {offre.competences.slice(0, 3).map((c, i) => (
                                <span key={i} style={{
                                    padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 600,
                                    backgroundColor: 'var(--color-gray-100)', color: 'var(--color-gray-600)',
                                }}>{c}</span>
                            ))}
                            {offre.competences.length > 3 && (
                                <span style={{ padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, backgroundColor: 'var(--color-gray-100)', color: 'var(--color-gray-500)' }}>+{offre.competences.length - 3}</span>
                            )}
                        </div>

                        {/* Meta */}
                        <div style={{ display: 'flex', gap: '14px', marginBottom: '14px', fontSize: '12px', color: 'var(--color-gray-500)' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.03 7.03 1 12 1C16.97 1 21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" /></svg>
                                {offre.lieu}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                {offre.duree}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                {new Date(offre.dateDebut).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                            </span>
                        </div>

                        {/* Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedOffre(offre); }}
                            style={{
                                width: '100%', padding: '10px', borderRadius: '10px',
                                background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                                color: 'white', border: 'none', fontSize: '13px', fontWeight: 700,
                                cursor: 'pointer', transition: 'all 0.2s',
                                boxShadow: '0 2px 8px rgba(5,150,105,0.25)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(5,150,105,0.35)'; }}
                            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(5,150,105,0.25)'; }}
                        >
                            Voir l'offre
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>
                ))}
            </div>

            {filteredOffres.length === 0 && (
                <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'white', borderRadius: '14px', border: '1px solid var(--color-gray-200)' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 12px', display: 'block', color: 'var(--color-gray-300)' }}><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" /><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-gray-500)', marginBottom: '4px', fontWeight: 600 }}>Aucune offre trouvée</p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-400)' }}>Essayez de modifier vos critères de recherche</p>
                </div>
            )}

            {/* ===== MODAL DÉTAILS OFFRE ===== */}
            {selectedOffre && (
                <div
                    onClick={() => setSelectedOffre(null)}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 9999,
                        backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '2rem', animation: 'fadeIn 0.2s ease',
                    }}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            backgroundColor: 'white', borderRadius: '16px',
                            width: '100%', maxWidth: '720px', maxHeight: '90vh',
                            overflow: 'hidden', display: 'flex', flexDirection: 'column',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)', animation: 'slideUp 0.25s ease',
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1.5rem 2rem',
                            background: 'linear-gradient(135deg, #059669 0%, #10b981 60%, #34d399 100%)',
                            color: 'white', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                            position: 'relative', overflow: 'hidden',
                        }}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <span style={{
                                    display: 'inline-block', padding: '3px 10px', borderRadius: '6px', fontSize: '11px',
                                    fontWeight: 700, backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '10px',
                                    textTransform: 'uppercase', letterSpacing: '0.05em',
                                }}>
                                    {selectedOffre.type} — {selectedOffre.secteur}
                                </span>
                                <h2 style={{ margin: '0 0 6px', fontSize: '1.3rem', fontWeight: 800 }}>{selectedOffre.titre}</h2>
                                <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                                    {selectedOffre.entreprise} — {selectedOffre.effectif}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedOffre(null)}
                                style={{
                                    background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '10px',
                                    width: '36px', height: '36px', cursor: 'pointer', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    transition: 'background 0.15s', flexShrink: 0,
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div style={{ padding: '1.5rem 2rem', overflowY: 'auto', flex: 1 }}>
                            {/* Quick Info */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '1.5rem' }}>
                                {[
                                    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.03 7.03 1 12 1C16.97 1 21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" /></svg>, label: 'Lieu', value: selectedOffre.lieu },
                                    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>, label: 'Durée', value: selectedOffre.duree },
                                    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>, label: 'Début', value: new Date(selectedOffre.dateDebut).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) },
                                    { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 1V23M17 5H9.5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14H14.5C16.99 14 19 16.01 19 18.5C19 20.99 16.99 23 14.5 23H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>, label: 'Rémunération', value: selectedOffre.remuneration },
                                ].map((item, i) => (
                                    <div key={i} style={{
                                        padding: '12px', borderRadius: '10px',
                                        backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-100)',
                                        textAlign: 'center',
                                    }}>
                                        <div style={{ color: '#059669', marginBottom: '4px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                        <div style={{ fontSize: '10px', color: 'var(--color-gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '2px' }}>{item.label}</div>
                                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gray-800)' }}>{item.value}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Description */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                    Description du poste
                                </div>
                                <div style={{
                                    whiteSpace: 'pre-wrap', fontSize: '14px', color: 'var(--color-gray-700)',
                                    lineHeight: 1.7, fontFamily: 'var(--font-secondary)',
                                    padding: '16px', borderRadius: '12px',
                                    backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-100)',
                                }}>
                                    {selectedOffre.descriptionComplete}
                                </div>
                            </div>

                            {/* Compétences */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                    Compétences recherchées
                                </div>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    {selectedOffre.competences.map((c, i) => (
                                        <span key={i} style={{
                                            padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                                            backgroundColor: 'rgba(16,185,129,0.08)', color: '#059669',
                                            border: '1px solid rgba(16,185,129,0.15)',
                                        }}>{c}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Avantages */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                    Avantages
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                    {selectedOffre.avantages.map((a, i) => (
                                        <div key={i} style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            padding: '10px 12px', borderRadius: '10px',
                                            backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-100)',
                                            fontSize: '13px', color: 'var(--color-gray-700)', fontWeight: 500,
                                        }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            {a}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact */}
                            <div style={{
                                padding: '16px', borderRadius: '12px',
                                background: 'linear-gradient(135deg, rgba(5,150,105,0.04), rgba(16,185,129,0.06))',
                                border: '1px solid rgba(16,185,129,0.12)',
                            }}>
                                <div style={{ fontSize: '11px', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                                    Contact
                                </div>
                                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-gray-800)', marginBottom: '4px' }}>{selectedOffre.contact}</div>
                                <div style={{ fontSize: '13px', color: 'var(--color-gray-600)' }}>{selectedOffre.email}</div>
                                <div style={{ fontSize: '11px', color: 'var(--color-gray-400)', marginTop: '8px' }}>
                                    Publiée le {new Date(selectedOffre.publieLe).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div style={{
                            padding: '1rem 2rem', borderTop: '1px solid var(--color-gray-200)',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            backgroundColor: 'var(--color-gray-50)',
                        }}>
                            <button
                                onClick={() => setSelectedOffre(null)}
                                style={{
                                    padding: '10px 20px', borderRadius: '10px',
                                    backgroundColor: 'transparent', border: '1px solid var(--color-gray-200)',
                                    color: 'var(--color-gray-600)', fontSize: '13px', fontWeight: 600,
                                    cursor: 'pointer', transition: 'all 0.15s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                Fermer
                            </button>
                            <button
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    padding: '10px 24px', borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                                    border: 'none', color: 'white', fontSize: '14px', fontWeight: 700,
                                    cursor: 'pointer', transition: 'all 0.2s',
                                    boxShadow: '0 3px 10px rgba(5,150,105,0.3)',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 5px 16px rgba(5,150,105,0.4)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(5,150,105,0.3)'; }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                Postuler à cette offre
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { opacity: 0; transform: translateY(20px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
            `}</style>
        </div>
    );
};

export default OffresSearch;
