import { useState } from 'react';

interface EleveProfile {
    nom: string;
    prenom: string;
    photo: string;
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
}

interface Convention {
    id: number;
    eleve: EleveProfile;
    dateDebut: string;
    dateFin: string;
    poste: string;
    statut: 'pending' | 'partial' | 'signed' | 'active';
    signatures: {
        entreprise: boolean;
        eleve: boolean;
        parent: boolean;
        direction: boolean;
    };
}

const signatureLabels: Record<string, { label: string; abbr: string; color: string }> = {
    entreprise: { label: 'Entreprise', abbr: 'E', color: '#3B82F6' },
    eleve: { label: 'Élève', abbr: 'É', color: '#8B5CF6' },
    parent: { label: 'Parent', abbr: 'P', color: '#F59E0B' },
    direction: { label: 'Direction', abbr: 'D', color: '#EF4444' },
};

const ConventionsList = () => {
    const [selectedConvention, setSelectedConvention] = useState<Convention | null>(null);
    const [activeTab, setActiveTab] = useState<'profil' | 'cv'>('profil');

    const conventions: Convention[] = [
        {
            id: 1,
            eleve: {
                nom: 'Bernard', prenom: 'Sophie',
                photo: '',
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
            },
            dateDebut: '2024-03-01',
            dateFin: '2024-05-31',
            poste: 'Assistante développement web',
            statut: 'pending',
            signatures: { entreprise: false, eleve: false, parent: false, direction: false }
        },
        {
            id: 2,
            eleve: {
                nom: 'Martin', prenom: 'Jean',
                photo: '',
                email: 'jean.martin@lycee.ac-normandie.fr',
                telephone: '06 98 76 54 32',
                classe: 'Terminale Bac Pro MELEC',
                formation: 'Métiers de l\'Électricité et de ses Environnements Connectés',
                dateNaissance: '2006-11-22',
                adresse: '45 Avenue Foch, 76600 Le Havre',
                competences: ['Câblage électrique', 'Domotique', 'Automates programmables', 'Habilitation électrique', 'Schémas électriques'],
                langues: ['Français (natif)', 'Espagnol (A2)'],
                experiences: [
                    { titre: 'Stage électricité', lieu: 'ENGIE — Agence Le Havre', periode: 'Nov 2023 (3 semaines)' },
                    { titre: 'Stage découverte', lieu: 'Electricité Martin (entreprise familiale)', periode: 'Juin 2022 (1 semaine)' },
                ],
                formations: [
                    { titre: 'Bac Pro MELEC', etablissement: 'Lycée Bartholdi, Le Havre', periode: '2022 - 2025' },
                    { titre: 'Brevet des collèges', etablissement: 'Collège Léo Lagrange, Le Havre', periode: '2022' },
                ],
            },
            dateDebut: '2024-02-15',
            dateFin: '2024-07-15',
            poste: 'Technicien électricité',
            statut: 'partial',
            signatures: { entreprise: true, eleve: true, parent: false, direction: false }
        },
        {
            id: 3,
            eleve: {
                nom: 'Dupont', prenom: 'Marie',
                photo: '',
                email: 'marie.dupont@lycee.ac-normandie.fr',
                telephone: '06 55 44 33 22',
                classe: 'Terminale Bac Pro CIEL',
                formation: 'Cybersécurité, Informatique et réseaux, Électronique',
                dateNaissance: '2006-08-03',
                adresse: '8 Rue Victor Hugo, 76600 Le Havre',
                competences: ['React', 'TypeScript', 'Node.js', 'Base de données SQL', 'Git'],
                langues: ['Français (natif)', 'Anglais (B2)', 'Allemand (A2)'],
                experiences: [
                    { titre: 'Stage développement', lieu: 'Normandie Web Agency', periode: 'Mars 2024 (6 semaines)' },
                    { titre: 'Stage découverte', lieu: 'OVHcloud — Datacenter Gravelines', periode: 'Juin 2023 (2 semaines)' },
                ],
                formations: [
                    { titre: 'Bac Pro CIEL', etablissement: 'Lycée Bartholdi, Le Havre', periode: '2022 - 2025' },
                    { titre: 'Brevet des collèges (Mention Très Bien)', etablissement: 'Collège Raoul Dufy, Le Havre', periode: '2022' },
                ],
            },
            dateDebut: '2024-01-10',
            dateFin: '2024-06-10',
            poste: 'Développeuse web fullstack',
            statut: 'signed',
            signatures: { entreprise: true, eleve: true, parent: true, direction: true }
        },
    ];

    const getStatusBadge = (statut: string) => {
        const styles = {
            pending: { bg: 'rgba(251, 191, 36, 0.1)', color: '#D97706', text: 'En attente', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> },
            partial: { bg: 'rgba(59, 130, 246, 0.1)', color: '#2563EB', text: 'Partiellement signée', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M11 4H4V20H20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M9 15L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> },
            signed: { bg: 'rgba(16, 185, 129, 0.1)', color: '#059669', text: 'Signée', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
            active: { bg: 'rgba(16, 185, 129, 0.1)', color: '#059669', text: 'Active', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
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
                    Conventions de stage
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Gérez et signez les conventions électroniquement
                </p>
            </div>

            <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Élève</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Période</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Statut</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Signatures</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'right', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {conventions.map((convention) => (
                                <tr
                                    key={convention.id}
                                    style={{ borderBottom: '1px solid var(--color-gray-200)', transition: 'background-color 0.15s' }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <td style={{ padding: 'var(--spacing-md)', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                                        {convention.eleve.prenom} {convention.eleve.nom}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(convention.dateDebut).toLocaleDateString('fr-FR')} - {new Date(convention.dateFin).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        {getStatusBadge(convention.statut)}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <div style={{ display: 'flex', gap: '6px' }}>
                                            {Object.entries(convention.signatures).map(([key, signed]) => {
                                                const info = signatureLabels[key];
                                                return (
                                                    <div
                                                        key={key}
                                                        title={`${info.label} : ${signed ? 'Signé' : 'En attente'}`}
                                                        style={{
                                                            width: '30px', height: '30px', borderRadius: '50%',
                                                            backgroundColor: signed ? info.color : 'var(--color-gray-200)',
                                                            color: signed ? 'white' : 'var(--color-gray-500)',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            fontSize: '11px', fontWeight: 700,
                                                            transition: 'transform 0.15s',
                                                            cursor: 'default',
                                                        }}
                                                    >
                                                        {info.abbr}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                                            <button
                                                onClick={() => { setSelectedConvention(convention); setActiveTab('profil'); }}
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
                                            {!convention.signatures.entreprise && (
                                                <button style={{
                                                    display: 'flex', alignItems: 'center', gap: '5px',
                                                    padding: '6px 12px', borderRadius: '8px',
                                                    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                                                    border: 'none', color: 'white', fontSize: '12px', fontWeight: 600,
                                                    cursor: 'pointer', transition: 'all 0.15s',
                                                    boxShadow: '0 2px 6px rgba(30,58,138,0.2)',
                                                }}
                                                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(30,58,138,0.3)'; }}
                                                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(30,58,138,0.2)'; }}
                                                >
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M11 4H4V20H20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M9 15L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                                    Signer
                                                </button>
                                            )}
                                            <button style={{
                                                display: 'flex', alignItems: 'center', gap: '5px',
                                                padding: '6px 12px', borderRadius: '8px',
                                                backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-200)',
                                                color: 'var(--color-gray-700)', fontSize: '12px', fontWeight: 600,
                                                cursor: 'pointer', transition: 'all 0.15s',
                                            }}
                                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'; }}
                                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'; }}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                PDF
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Légende signatures */}
            <div style={{ marginTop: '1rem', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {Object.entries(signatureLabels).map(([key, info]) => (
                    <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-gray-600)' }}>
                        <div style={{
                            width: '20px', height: '20px', borderRadius: '50%',
                            backgroundColor: info.color, color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '10px', fontWeight: 700,
                        }}>{info.abbr}</div>
                        {info.label}
                    </div>
                ))}
            </div>

            {/* Modal Profil Élève */}
            {selectedConvention && (
                <div
                    onClick={() => setSelectedConvention(null)}
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
                                    {getInitials(selectedConvention.eleve.prenom, selectedConvention.eleve.nom)}
                                </div>
                                <div>
                                    <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>
                                        {selectedConvention.eleve.prenom} {selectedConvention.eleve.nom}
                                    </h2>
                                    <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                                        {selectedConvention.eleve.classe} — {getAge(selectedConvention.eleve.dateNaissance)} ans
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedConvention(null)}
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

                        {/* Tabs */}
                        <div style={{ display: 'flex', borderBottom: '2px solid var(--color-gray-100)', padding: '0 2rem' }}>
                            {(['profil', 'cv'] as const).map(tab => (
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
                                    {tab === 'profil' ? 'Profil élève' : 'CV'}
                                </button>
                            ))}
                        </div>

                        {/* Modal Body */}
                        <div style={{ padding: '1.5rem 2rem', overflowY: 'auto', flex: 1 }}>
                            {activeTab === 'profil' && (
                                <div>
                                    {/* Info Grid */}
                                    <div style={{
                                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px',
                                        marginBottom: '1.5rem',
                                    }}>
                                        {[
                                            { label: 'Email', value: selectedConvention.eleve.email, icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" /><path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" /></svg> },
                                            { label: 'Téléphone', value: selectedConvention.eleve.telephone, icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.27 21 19.9 20.97C10.42 20.4 3.6 13.58 3.03 4.1C3 3.73 3 3.36 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.34 8.05 2.81C8.14 3.36 8.3 3.89 8.52 4.4L7.02 5.9C8.47 8.67 10.67 10.87 13.44 12.32L14.94 10.82C15.45 11.04 15.98 11.2 16.53 11.29C17 11.37 17.34 11.78 17.34 12.26L17.34 12.26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> },
                                            { label: 'Date de naissance', value: new Date(selectedConvention.eleve.dateNaissance).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }), icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> },
                                            { label: 'Adresse', value: selectedConvention.eleve.adresse, icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.03 7.03 1 12 1C16.97 1 21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" /></svg> },
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

                                    {/* Convention Info */}
                                    <div style={{
                                        padding: '16px', borderRadius: '12px',
                                        background: 'linear-gradient(135deg, rgba(30,58,138,0.04) 0%, rgba(59,130,246,0.06) 100%)',
                                        border: '1px solid rgba(59,130,246,0.12)',
                                        marginBottom: '1.5rem',
                                    }}>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                            Convention en cours
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                            <div>
                                                <div style={{ fontSize: '11px', color: 'var(--color-gray-500)' }}>Poste</div>
                                                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gray-800)' }}>{selectedConvention.poste}</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '11px', color: 'var(--color-gray-500)' }}>Période</div>
                                                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gray-800)' }}>
                                                    {new Date(selectedConvention.dateDebut).toLocaleDateString('fr-FR')} — {new Date(selectedConvention.dateFin).toLocaleDateString('fr-FR')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signatures */}
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                            État des signatures
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                            {Object.entries(selectedConvention.signatures).map(([key, signed]) => {
                                                const info = signatureLabels[key];
                                                return (
                                                    <div key={key} style={{
                                                        display: 'flex', alignItems: 'center', gap: '10px',
                                                        padding: '10px 14px', borderRadius: '10px',
                                                        backgroundColor: signed ? `${info.color}08` : 'var(--color-gray-50)',
                                                        border: `1px solid ${signed ? `${info.color}25` : 'var(--color-gray-200)'}`,
                                                    }}>
                                                        <div style={{
                                                            width: '28px', height: '28px', borderRadius: '50%',
                                                            backgroundColor: signed ? info.color : 'var(--color-gray-300)',
                                                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            fontSize: '11px', fontWeight: 700, flexShrink: 0,
                                                        }}>
                                                            {info.abbr}
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gray-800)' }}>{info.label}</div>
                                                            <div style={{ fontSize: '11px', color: signed ? info.color : 'var(--color-gray-500)', fontWeight: 500 }}>
                                                                {signed ? 'Signé' : 'En attente de signature'}
                                                            </div>
                                                        </div>
                                                        {signed ? (
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke={info.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                        ) : (
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="var(--color-gray-300)" strokeWidth="2" /><path d="M12 6V12L16 14" stroke="var(--color-gray-300)" strokeWidth="2" strokeLinecap="round" /></svg>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'cv' && (
                                <div>
                                    {/* Compétences */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                                            Compétences
                                        </div>
                                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                            {selectedConvention.eleve.competences.map((c, i) => (
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
                                            {selectedConvention.eleve.langues.map((l, i) => (
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
                                            {selectedConvention.eleve.experiences.map((exp, i) => (
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
                                            {selectedConvention.eleve.formations.map((f, i) => (
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
                        </div>
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

export default ConventionsList;
