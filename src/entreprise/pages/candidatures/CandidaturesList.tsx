import { useState } from 'react';

interface EleveProfile {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    classe: string;
    formation: string;
    dateNaissance: string;
    adresse: string;
    competences: string[];
    langues: string[];
    experiences: { titre: string; lieu: string; periode: string }[];
    formations: { titre: string; etablissement: string; periode: string }[];
    lettreMotivation: string;
}

interface Candidature {
    id: number;
    eleve: EleveProfile;
    dateCandidature: string;
    statut: 'pending' | 'viewed' | 'accepted' | 'rejected';
    offre: string;
}

const CandidaturesList = () => {
    const [filter, setFilter] = useState<'all' | 'pending' | 'viewed' | 'accepted' | 'rejected'>('all');
    const [selectedCandidature, setSelectedCandidature] = useState<Candidature | null>(null);
    const [activeTab, setActiveTab] = useState<'profil' | 'cv' | 'motivation'>('profil');

    const candidatures: Candidature[] = [
        {
            id: 1,
            eleve: {
                nom: 'Dupont', prenom: 'Marie',
                email: 'marie.dupont@lycee.ac-normandie.fr',
                telephone: '06 55 44 33 22',
                classe: 'Terminale Bac Pro CIEL',
                formation: 'Cybersécurité, Informatique et réseaux, Électronique',
                dateNaissance: '2006-08-03',
                adresse: '8 Rue Victor Hugo, 76600 Le Havre',
                competences: ['React', 'TypeScript', 'Node.js', 'SQL', 'Git', 'HTML/CSS'],
                langues: ['Français (natif)', 'Anglais (B2)', 'Allemand (A2)'],
                experiences: [
                    { titre: 'Stage développement', lieu: 'Normandie Web Agency', periode: 'Mars 2024 (6 semaines)' },
                    { titre: 'Stage découverte', lieu: 'OVHcloud — Datacenter Gravelines', periode: 'Juin 2023 (2 semaines)' },
                ],
                formations: [
                    { titre: 'Bac Pro CIEL', etablissement: 'Lycée Bartholdi, Le Havre', periode: '2022 - 2025' },
                    { titre: 'Brevet des collèges (Mention Très Bien)', etablissement: 'Collège Raoul Dufy, Le Havre', periode: '2022' },
                ],
                lettreMotivation: "Madame, Monsieur,\n\nActuellement en Terminale Bac Pro CIEL au Lycée Bartholdi, je suis passionnée par le développement web et les technologies modernes. Mon expérience de stage chez Normandie Web Agency m'a permis de travailler sur des projets concrets en React et Node.js.\n\nJe suis motivée, rigoureuse et j'ai un réel intérêt pour le développement fullstack. Je serais ravie de mettre mes compétences au service de votre entreprise et d'approfondir mes connaissances dans un environnement professionnel stimulant.\n\nDans l'attente de votre retour, je reste à votre disposition pour un entretien.\n\nCordialement,\nMarie Dupont",
            },
            dateCandidature: '2024-02-14',
            statut: 'pending',
            offre: 'Développeur Web Junior'
        },
        {
            id: 2,
            eleve: {
                nom: 'Martin', prenom: 'Jean',
                email: 'jean.martin@lycee.ac-normandie.fr',
                telephone: '06 98 76 54 32',
                classe: '1ère Bac Pro MELEC',
                formation: 'Métiers de l\'Électricité et de ses Environnements Connectés',
                dateNaissance: '2007-11-22',
                adresse: '45 Avenue Foch, 76600 Le Havre',
                competences: ['Marketing digital', 'Réseaux sociaux', 'Canva', 'Pack Office', 'Communication'],
                langues: ['Français (natif)', 'Espagnol (A2)'],
                experiences: [
                    { titre: 'Stage découverte', lieu: 'Agence Com\'Havre', periode: 'Juin 2023 (1 semaine)' },
                ],
                formations: [
                    { titre: 'Bac Pro MELEC', etablissement: 'Lycée Bartholdi, Le Havre', periode: '2022 - 2025' },
                    { titre: 'Brevet des collèges', etablissement: 'Collège Léo Lagrange, Le Havre', periode: '2022' },
                ],
                lettreMotivation: "Madame, Monsieur,\n\nÉlève en première Bac Pro au Lycée Bartholdi, je souhaite effectuer un stage en marketing pour découvrir le monde de la communication d'entreprise.\n\nCréatif et curieux, je maîtrise les outils de création graphique et les réseaux sociaux. Je serai ravi d'apporter mon énergie et mes idées à votre équipe.\n\nCordialement,\nJean Martin",
            },
            dateCandidature: '2024-02-13',
            statut: 'viewed',
            offre: 'Assistant Marketing'
        },
        {
            id: 3,
            eleve: {
                nom: 'Bernard', prenom: 'Sophie',
                email: 'sophie.bernard@lycee.ac-normandie.fr',
                telephone: '06 12 34 56 78',
                classe: 'Terminale Bac Pro CIEL',
                formation: 'Cybersécurité, Informatique et réseaux, Électronique',
                dateNaissance: '2006-05-14',
                adresse: '12 Rue des Lilas, 76600 Le Havre',
                competences: ['HTML/CSS', 'JavaScript', 'Python', 'Réseaux TCP/IP', 'Linux'],
                langues: ['Français (natif)', 'Anglais (B1)'],
                experiences: [
                    { titre: 'Stage découverte', lieu: 'Mairie du Havre — Service informatique', periode: 'Juin 2023 (2 semaines)' },
                ],
                formations: [
                    { titre: 'Bac Pro CIEL', etablissement: 'Lycée Bartholdi, Le Havre', periode: '2022 - 2025' },
                    { titre: 'Brevet des collèges (Mention Bien)', etablissement: 'Collège Descartes, Le Havre', periode: '2022' },
                ],
                lettreMotivation: "Madame, Monsieur,\n\nPassionnée par le développement web depuis plusieurs années, je candidate pour le poste de développeuse web junior dans votre entreprise.\n\nMes compétences en HTML, CSS, JavaScript et Python, acquises au cours de ma formation en Bac Pro CIEL, me permettent de prendre en charge des projets variés. Mon stage en service informatique m'a appris à travailler en équipe et à respecter les délais.\n\nJe suis disponible immédiatement et motivée à rejoindre votre équipe.\n\nCordialement,\nSophie Bernard",
            },
            dateCandidature: '2024-02-12',
            statut: 'accepted',
            offre: 'Développeur Web Junior'
        },
    ];

    const filteredCandidatures = candidatures.filter(c => filter === 'all' || c.statut === filter);

    const getStatusBadge = (statut: string) => {
        const styles = {
            pending: { bg: 'rgba(251, 191, 36, 0.1)', color: '#D97706', text: 'En attente', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> },
            viewed: { bg: 'rgba(59, 130, 246, 0.1)', color: '#2563EB', text: 'Vue', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" /></svg> },
            accepted: { bg: 'rgba(16, 185, 129, 0.1)', color: '#059669', text: 'Acceptée', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
            rejected: { bg: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', text: 'Refusée', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> },
        };
        const style = styles[statut as keyof typeof styles];
        return (
            <span style={{
                padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                backgroundColor: style.bg, color: style.color,
                display: 'inline-flex', alignItems: 'center', gap: '5px',
            }}>
                {style.icon} {style.text}
            </span>
        );
    };

    const getInitials = (prenom: string, nom: string) => `${prenom[0]}${nom[0]}`;

    const getAge = (dateNaissance: string) => {
        const today = new Date();
        const birth = new Date(dateNaissance);
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
        return age;
    };

    return (
        <div>
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: 'var(--spacing-xs)' }}>
                    Candidatures reçues
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Gérez les candidatures des élèves
                </p>
            </div>

            {/* Filters */}
            <div className="card" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {[
                        { value: 'all', label: 'Toutes', count: candidatures.length },
                        { value: 'pending', label: 'En attente', count: candidatures.filter(c => c.statut === 'pending').length },
                        { value: 'viewed', label: 'Vues', count: candidatures.filter(c => c.statut === 'viewed').length },
                        { value: 'accepted', label: 'Acceptées', count: candidatures.filter(c => c.statut === 'accepted').length },
                        { value: 'rejected', label: 'Refusées', count: candidatures.filter(c => c.statut === 'rejected').length }
                    ].map((btn) => (
                        <button
                            key={btn.value}
                            onClick={() => setFilter(btn.value as typeof filter)}
                            style={{
                                padding: '8px 16px', border: 'none', borderRadius: '8px',
                                fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                                backgroundColor: filter === btn.value ? 'var(--color-primary)' : 'var(--color-gray-100)',
                                color: filter === btn.value ? 'white' : 'var(--color-gray-700)',
                                transition: 'all 0.15s',
                            }}
                        >
                            {btn.label} ({btn.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Élève</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Classe</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Offre</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Date</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Statut</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'right', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCandidatures.map((candidature) => (
                                <tr
                                    key={candidature.id}
                                    style={{ borderBottom: '1px solid var(--color-gray-200)', transition: 'background-color 0.15s' }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <td style={{ padding: 'var(--spacing-md)', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                                        {candidature.eleve.prenom} {candidature.eleve.nom}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {candidature.eleve.classe}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {candidature.offre}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(candidature.dateCandidature).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        {getStatusBadge(candidature.statut)}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                                            <button
                                                onClick={() => { setSelectedCandidature(candidature); setActiveTab('profil'); }}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '5px',
                                                    padding: '6px 12px', borderRadius: '8px',
                                                    backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-200)',
                                                    color: 'var(--color-gray-700)', fontSize: '12px', fontWeight: 600,
                                                    cursor: 'pointer', transition: 'all 0.15s',
                                                }}
                                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'; }}
                                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'; }}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" /></svg>
                                                Voir
                                            </button>
                                            {candidature.statut === 'pending' && (
                                                <>
                                                    <button style={{
                                                        display: 'flex', alignItems: 'center', gap: '5px',
                                                        padding: '6px 12px', borderRadius: '8px',
                                                        background: 'linear-gradient(135deg, #059669, #10b981)',
                                                        border: 'none', color: 'white', fontSize: '12px', fontWeight: 600,
                                                        cursor: 'pointer', transition: 'all 0.15s',
                                                        boxShadow: '0 2px 6px rgba(5,150,105,0.25)',
                                                    }}
                                                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                                                    >
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                        Accepter
                                                    </button>
                                                    <button style={{
                                                        display: 'flex', alignItems: 'center', gap: '5px',
                                                        padding: '6px 12px', borderRadius: '8px',
                                                        backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                                                        color: '#EF4444', fontSize: '12px', fontWeight: 600,
                                                        cursor: 'pointer', transition: 'all 0.15s',
                                                    }}
                                                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.15)'; }}
                                                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.08)'; }}
                                                    >
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                                                        Refuser
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

            {/* Modal Profil Élève */}
            {selectedCandidature && (
                <div
                    onClick={() => setSelectedCandidature(null)}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 9999,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '2rem',
                        animation: 'fadeIn 0.2s ease',
                    }}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            backgroundColor: 'white', borderRadius: '16px',
                            width: '100%', maxWidth: '720px', maxHeight: '90vh',
                            overflow: 'hidden', display: 'flex', flexDirection: 'column',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                            animation: 'slideUp 0.25s ease',
                        }}
                    >
                        {/* Modal Header */}
                        <div style={{
                            padding: '1.5rem 2rem',
                            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                            color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '56px', height: '56px', borderRadius: '14px',
                                    backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '20px', fontWeight: 800, color: 'white',
                                }}>
                                    {getInitials(selectedCandidature.eleve.prenom, selectedCandidature.eleve.nom)}
                                </div>
                                <div>
                                    <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>
                                        {selectedCandidature.eleve.prenom} {selectedCandidature.eleve.nom}
                                    </h2>
                                    <p style={{ margin: '2px 0 0', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                                        {selectedCandidature.eleve.classe} — {getAge(selectedCandidature.eleve.dateNaissance)} ans
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                {getStatusBadge(selectedCandidature.statut)}
                                <button
                                    onClick={() => setSelectedCandidature(null)}
                                    style={{
                                        background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '10px',
                                        width: '36px', height: '36px', cursor: 'pointer', color: 'white',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'background 0.15s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div style={{ display: 'flex', borderBottom: '2px solid var(--color-gray-100)', padding: '0 2rem' }}>
                            {(['profil', 'cv', 'motivation'] as const).map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        padding: '12px 20px', border: 'none', background: 'none',
                                        fontWeight: 600, fontSize: '13px', cursor: 'pointer',
                                        color: activeTab === tab ? '#1E3A8A' : 'var(--color-gray-500)',
                                        borderBottom: activeTab === tab ? '2px solid #1E3A8A' : '2px solid transparent',
                                        marginBottom: '-2px', transition: 'all 0.15s',
                                    }}
                                >
                                    {tab === 'profil' ? 'Profil' : tab === 'cv' ? 'CV' : 'Lettre de motivation'}
                                </button>
                            ))}
                        </div>

                        {/* Modal Body */}
                        <div style={{ padding: '1.5rem 2rem', overflowY: 'auto', flex: 1 }}>

                            {/* TAB: Profil */}
                            {activeTab === 'profil' && (
                                <div>
                                    <div style={{
                                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px',
                                        marginBottom: '1.5rem',
                                    }}>
                                        {[
                                            { label: 'Email', value: selectedCandidature.eleve.email, icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" /><path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" /></svg> },
                                            { label: 'Téléphone', value: selectedCandidature.eleve.telephone, icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.27 21 19.9 20.97C10.42 20.4 3.6 13.58 3.03 4.1C3 3.73 3 3.36 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.34 8.05 2.81C8.14 3.36 8.3 3.89 8.52 4.4L7.02 5.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> },
                                            { label: 'Date de naissance', value: new Date(selectedCandidature.eleve.dateNaissance).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }), icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> },
                                            { label: 'Adresse', value: selectedCandidature.eleve.adresse, icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.03 7.03 1 12 1C16.97 1 21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" /></svg> },
                                        ].map((item, i) => (
                                            <div key={i} style={{
                                                padding: '12px 14px', borderRadius: '10px',
                                                backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-100)',
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-gray-500)', fontSize: '11px', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                                                    {item.icon} {item.label}
                                                </div>
                                                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gray-800)' }}>
                                                    {item.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Candidature Info */}
                                    <div style={{
                                        padding: '16px', borderRadius: '12px',
                                        background: 'linear-gradient(135deg, rgba(30,58,138,0.04) 0%, rgba(59,130,246,0.06) 100%)',
                                        border: '1px solid rgba(59,130,246,0.12)',
                                    }}>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                            Candidature
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                                            <div>
                                                <div style={{ fontSize: '11px', color: 'var(--color-gray-500)' }}>Offre</div>
                                                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gray-800)' }}>{selectedCandidature.offre}</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '11px', color: 'var(--color-gray-500)' }}>Date</div>
                                                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gray-800)' }}>
                                                    {new Date(selectedCandidature.dateCandidature).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '11px', color: 'var(--color-gray-500)' }}>Formation</div>
                                                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gray-800)' }}>{selectedCandidature.eleve.formation}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB: CV */}
                            {activeTab === 'cv' && (
                                <div>
                                    {/* Compétences */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                            Compétences
                                        </div>
                                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                            {selectedCandidature.eleve.competences.map((c, i) => (
                                                <span key={i} style={{
                                                    padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                                                    backgroundColor: 'rgba(59,130,246,0.08)', color: '#2563EB',
                                                    border: '1px solid rgba(59,130,246,0.15)',
                                                }}>{c}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Langues */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                            Langues
                                        </div>
                                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                            {selectedCandidature.eleve.langues.map((l, i) => (
                                                <span key={i} style={{
                                                    padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                                                    backgroundColor: 'rgba(16,185,129,0.08)', color: '#059669',
                                                    border: '1px solid rgba(16,185,129,0.15)',
                                                }}>{l}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Expériences */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                            Expériences professionnelles
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {selectedCandidature.eleve.experiences.map((exp, i) => (
                                                <div key={i} style={{
                                                    padding: '12px 14px', borderRadius: '10px',
                                                    backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-100)',
                                                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                                                }}>
                                                    <div style={{
                                                        width: '32px', height: '32px', borderRadius: '8px',
                                                        backgroundColor: 'rgba(124,58,237,0.08)', color: '#7C3AED',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                                    }}>
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="currentColor" strokeWidth="2" /></svg>
                                                    </div>
                                                    <div>
                                                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gray-800)' }}>{exp.titre}</div>
                                                        <div style={{ fontSize: '12px', color: 'var(--color-gray-600)', marginTop: '2px' }}>{exp.lieu}</div>
                                                        <div style={{ fontSize: '11px', color: 'var(--color-gray-400)', marginTop: '2px' }}>{exp.periode}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Formations */}
                                    <div>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                            Formation
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {selectedCandidature.eleve.formations.map((f, i) => (
                                                <div key={i} style={{
                                                    padding: '12px 14px', borderRadius: '10px',
                                                    backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-100)',
                                                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                                                }}>
                                                    <div style={{
                                                        width: '32px', height: '32px', borderRadius: '8px',
                                                        backgroundColor: 'rgba(59,130,246,0.08)', color: '#2563EB',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                                    }}>
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3L1 9L12 15L23 9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M1 9V17L12 23L23 17V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                    </div>
                                                    <div>
                                                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gray-800)' }}>{f.titre}</div>
                                                        <div style={{ fontSize: '12px', color: 'var(--color-gray-600)', marginTop: '2px' }}>{f.etablissement}</div>
                                                        <div style={{ fontSize: '11px', color: 'var(--color-gray-400)', marginTop: '2px' }}>{f.periode}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB: Lettre de motivation */}
                            {activeTab === 'motivation' && (
                                <div>
                                    <div style={{
                                        padding: '24px', borderRadius: '12px',
                                        backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-100)',
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                            <div style={{
                                                width: '32px', height: '32px', borderRadius: '8px',
                                                backgroundColor: 'rgba(30,58,138,0.08)', color: '#1E3A8A',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gray-800)' }}>Lettre de motivation</div>
                                                <div style={{ fontSize: '11px', color: 'var(--color-gray-500)' }}>Pour le poste : {selectedCandidature.offre}</div>
                                            </div>
                                        </div>
                                        <div style={{
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '14px',
                                            color: 'var(--color-gray-700)',
                                            lineHeight: 1.7,
                                            fontFamily: 'var(--font-secondary)',
                                        }}>
                                            {selectedCandidature.eleve.lettreMotivation}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        {selectedCandidature.statut === 'pending' && (
                            <div style={{
                                padding: '1rem 2rem',
                                borderTop: '1px solid var(--color-gray-200)',
                                display: 'flex', justifyContent: 'flex-end', gap: '8px',
                                backgroundColor: 'var(--color-gray-50)',
                            }}>
                                <button
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        padding: '10px 20px', borderRadius: '10px',
                                        backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                                        color: '#EF4444', fontSize: '13px', fontWeight: 600,
                                        cursor: 'pointer', transition: 'all 0.15s',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.15)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.08)'; }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                                    Refuser la candidature
                                </button>
                                <button
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        padding: '10px 20px', borderRadius: '10px',
                                        background: 'linear-gradient(135deg, #059669, #10b981)',
                                        border: 'none', color: 'white', fontSize: '13px', fontWeight: 600,
                                        cursor: 'pointer', transition: 'all 0.15s',
                                        boxShadow: '0 2px 8px rgba(5,150,105,0.3)',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(5,150,105,0.4)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(5,150,105,0.3)'; }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    Accepter la candidature
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </div>
    );
};

export default CandidaturesList;
