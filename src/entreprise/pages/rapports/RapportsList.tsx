import { useState } from 'react';

interface Rapport {
    id: number;
    eleve: string;
    classe: string;
    poste: string;
    dateStage: string;
    dateDepot: string;
    statut: 'a_evaluer' | 'evalue';
    note?: number;
    remarque?: string;
    sommaire: { titre: string; page: number }[];
    contenu: { titre: string; texte: string }[];
}

const RapportsList = () => {
    const [rapports, setRapports] = useState<Rapport[]>([
        {
            id: 1,
            eleve: 'Pierre Leroy',
            classe: 'Terminale Bac Pro CIEL',
            poste: 'Technicien réseaux',
            dateStage: '01/09/2023 - 28/02/2024',
            dateDepot: '2024-03-01',
            statut: 'a_evaluer',
            sommaire: [
                { titre: 'Introduction', page: 1 },
                { titre: 'Présentation de l\'entreprise', page: 3 },
                { titre: 'Les missions réalisées', page: 6 },
                { titre: 'Analyse technique', page: 12 },
                { titre: 'Bilan et compétences acquises', page: 18 },
                { titre: 'Conclusion', page: 22 },
                { titre: 'Annexes', page: 24 },
            ],
            contenu: [
                {
                    titre: 'Introduction',
                    texte: "Dans le cadre de ma formation en Bac Pro CIEL au Lycée Bartholdi du Havre, j'ai effectué un stage de 6 mois au sein de l'entreprise NormandieTech, spécialisée dans les services informatiques et réseaux pour les PME de la région.\n\nCe stage avait pour objectif de me permettre d'appliquer les connaissances acquises en cours, notamment en administration réseau, maintenance informatique et cybersécurité. Il s'inscrit dans la continuité de mon parcours de formation et constitue une étape clé dans la validation de mon diplôme."
                },
                {
                    titre: 'Présentation de l\'entreprise',
                    texte: "NormandieTech est une entreprise de services numériques (ESN) fondée en 2015 et basée au Havre. Elle emploie 45 collaborateurs répartis sur 3 sites en Normandie.\n\nSon activité principale comprend :\n• L'infogérance et la maintenance de parcs informatiques\n• Le déploiement et l'administration de réseaux d'entreprise\n• L'accompagnement en cybersécurité\n• La mise en place de solutions cloud\n\nL'entreprise accompagne plus de 200 clients, principalement des PME et des collectivités locales. J'ai été intégré au sein de l'équipe Infrastructure et Réseaux, composée de 8 techniciens et ingénieurs."
                },
                {
                    titre: 'Les missions réalisées',
                    texte: "Au cours de mon stage, j'ai eu l'opportunité de participer à plusieurs missions variées :\n\n1. Maintenance du parc informatique\nJ'ai effectué la maintenance préventive et curative de postes de travail pour plusieurs clients. Cela incluait le diagnostic de pannes matérielles, la réinstallation de systèmes d'exploitation et la mise à jour des logiciels.\n\n2. Configuration réseau\nJ'ai participé au déploiement d'un réseau local pour un cabinet d'avocats : câblage, configuration des switchs, paramétrage du serveur DHCP et mise en place du Wi-Fi sécurisé.\n\n3. Supervision et monitoring\nJ'ai appris à utiliser l'outil Zabbix pour surveiller l'état des serveurs et des équipements réseau des clients. J'ai configuré des alertes et rédigé des procédures d'intervention.\n\n4. Sensibilisation cybersécurité\nJ'ai assisté l'équipe dans la préparation d'ateliers de sensibilisation à la cybersécurité pour les employés d'un client du secteur médical."
                },
                {
                    titre: 'Analyse technique',
                    texte: "La mission la plus formatrice a été le déploiement réseau pour le cabinet d'avocats Maître Duval & Associés.\n\nArchitecture mise en place :\n• 1 serveur Dell PowerEdge T340 (Windows Server 2022)\n• 2 switchs managés Cisco SG350 (24 ports)\n• 1 point d'accès Ubiquiti UniFi AP Pro\n• Pare-feu Fortinet FortiGate 60F\n\nJ'ai notamment configuré :\n• Les VLANs pour séparer les flux (administration, avocats, invités)\n• Le serveur Active Directory pour la gestion centralisée des comptes\n• La politique de sauvegarde automatisée sur NAS Synology\n• Le VPN site-à-site pour la connexion avec le cabinet secondaire de Rouen\n\nCette mission m'a permis de comprendre l'importance d'une architecture réseau bien pensée et sécurisée, en particulier dans un contexte où les données sont sensibles (secret professionnel)."
                },
                {
                    titre: 'Bilan et compétences acquises',
                    texte: "Ce stage m'a permis de développer de nombreuses compétences techniques et humaines :\n\nCompétences techniques :\n• Administration Windows Server et Active Directory\n• Configuration d'équipements réseau Cisco et Fortinet\n• Utilisation d'outils de monitoring (Zabbix, Grafana)\n• Notions de cybersécurité appliquée\n• Câblage et certification de liaisons réseau\n\nCompétences transversales :\n• Travail en équipe et communication avec les clients\n• Rédaction de documentation technique\n• Gestion des priorités et respect des délais\n• Autonomie dans la résolution de problèmes\n\nJ'ai également pu valider plusieurs compétences du référentiel du Bac Pro CIEL, notamment dans les domaines de l'installation, la configuration et la maintenance de réseaux informatiques."
                },
                {
                    titre: 'Conclusion',
                    texte: "Ce stage chez NormandieTech a été une expérience très enrichissante qui a confirmé mon souhait de poursuivre dans le domaine des réseaux et de la cybersécurité.\n\nJ'ai eu la chance d'être accompagné par une équipe bienveillante et compétente qui m'a fait confiance sur des missions à responsabilité. Les connaissances acquises au lycée se sont révélées essentielles et ont été considérablement renforcées par la pratique sur le terrain.\n\nJe souhaite désormais poursuivre mes études en BTS SIO option SISR afin d'approfondir mes compétences en administration de systèmes et réseaux, avec l'objectif à terme de me spécialiser en cybersécurité."
                },
            ],
        },
        {
            id: 2,
            eleve: 'Marie Dupont',
            classe: 'Terminale Bac Pro CIEL',
            poste: 'Développeuse web',
            dateStage: '10/01/2024 - 10/06/2024',
            dateDepot: '2024-06-15',
            statut: 'evalue',
            note: 16,
            remarque: 'Excellent rapport, très bien structuré. Les analyses techniques sont pertinentes et démontrent une vraie compréhension des technologies utilisées. Quelques fautes d\'orthographe à corriger.',
            sommaire: [
                { titre: 'Introduction', page: 1 },
                { titre: 'Présentation de l\'entreprise', page: 3 },
                { titre: 'Missions de développement', page: 5 },
                { titre: 'Technologies utilisées', page: 10 },
                { titre: 'Bilan', page: 15 },
                { titre: 'Conclusion', page: 17 },
            ],
            contenu: [
                {
                    titre: 'Introduction',
                    texte: "Ce rapport présente mon stage de développement web effectué au sein de Normandie Web Agency, une agence digitale située au Havre. Durant 6 mois, j'ai travaillé sur plusieurs projets clients en utilisant des technologies modernes comme React, TypeScript et Node.js."
                },
                {
                    titre: 'Présentation de l\'entreprise',
                    texte: "Normandie Web Agency est une agence de création digitale fondée en 2018. L'équipe de 12 personnes conçoit des sites web, des applications mobiles et des solutions e-commerce pour des clients locaux et nationaux.\n\nL'agence se distingue par son utilisation de technologies modernes (React, Next.js, Node.js) et sa méthodologie agile. J'ai été intégrée à l'équipe de développement front-end."
                },
            ],
        },
    ]);

    const [readModal, setReadModal] = useState<Rapport | null>(null);
    const [readSection, setReadSection] = useState(0);
    const [evalModal, setEvalModal] = useState<Rapport | null>(null);
    const [evalNote, setEvalNote] = useState('');
    const [evalRemarque, setEvalRemarque] = useState('');

    const getStatusBadge = (rapport: Rapport) => {
        if (rapport.statut === 'evalue') {
            return (
                <span style={{
                    padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                    backgroundColor: 'rgba(16,185,129,0.1)', color: '#059669',
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Évalué — {rapport.note}/20
                </span>
            );
        }
        return (
            <span style={{
                padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                backgroundColor: 'rgba(251,191,36,0.1)', color: '#D97706',
                display: 'inline-flex', alignItems: 'center', gap: '5px',
            }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                À évaluer
            </span>
        );
    };

    const handleSubmitEval = () => {
        if (!evalModal || !evalNote) return;
        const note = parseInt(evalNote);
        if (isNaN(note) || note < 0 || note > 20) return;

        setRapports(prev => prev.map(r =>
            r.id === evalModal.id ? { ...r, statut: 'evalue' as const, note, remarque: evalRemarque } : r
        ));
        setEvalModal(null);
        setEvalNote('');
        setEvalRemarque('');
    };

    return (
        <div>
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: 'var(--spacing-xs)' }}>
                    Rapports de stage
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Évaluez les rapports de vos stagiaires
                </p>
            </div>

            <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Élève</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Période de stage</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Date de dépôt</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Statut</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'right', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rapports.map((rapport) => (
                                <tr
                                    key={rapport.id}
                                    style={{ borderBottom: '1px solid var(--color-gray-200)', transition: 'background-color 0.15s' }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <div style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>{rapport.eleve}</div>
                                        <div style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>{rapport.classe}</div>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {rapport.dateStage}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(rapport.dateDepot).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        {getStatusBadge(rapport)}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                                            <button
                                                onClick={() => { setReadModal(rapport); setReadSection(0); }}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '5px',
                                                    padding: '6px 12px', borderRadius: '8px',
                                                    backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-200)',
                                                    color: 'var(--color-gray-700)', fontSize: '12px', fontWeight: 600,
                                                    cursor: 'pointer', transition: 'all 0.15s',
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'}
                                                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" /></svg>
                                                Lire
                                            </button>
                                            <button
                                                onClick={() => { setEvalModal(rapport); setEvalNote(rapport.note?.toString() || ''); setEvalRemarque(rapport.remarque || ''); }}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '5px',
                                                    padding: '6px 12px', borderRadius: '8px',
                                                    background: rapport.statut === 'evalue'
                                                        ? 'var(--color-gray-50)'
                                                        : 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                                                    border: rapport.statut === 'evalue' ? '1px solid var(--color-gray-200)' : 'none',
                                                    color: rapport.statut === 'evalue' ? 'var(--color-gray-700)' : 'white',
                                                    fontSize: '12px', fontWeight: 600,
                                                    cursor: 'pointer', transition: 'all 0.15s',
                                                    boxShadow: rapport.statut === 'evalue' ? 'none' : '0 2px 6px rgba(30,58,138,0.2)',
                                                }}
                                                onMouseEnter={e => { if (rapport.statut !== 'evalue') { e.currentTarget.style.transform = 'translateY(-1px)'; } else { e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'; } }}
                                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; if (rapport.statut === 'evalue') e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'; }}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M11 4H4V20H20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M9 15L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                                {rapport.statut === 'evalue' ? 'Voir évaluation' : 'Évaluer'}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {rapports.length === 0 && (
                    <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center', color: 'var(--color-gray-500)' }}>
                        <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-sm)' }}>Aucun rapport à évaluer</p>
                    </div>
                )}
            </div>

            {/* ===== MODAL LIRE ===== */}
            {readModal && (
                <div
                    onClick={() => setReadModal(null)}
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
                            width: '100%', maxWidth: '900px', maxHeight: '90vh',
                            overflow: 'hidden', display: 'flex', flexDirection: 'column',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)', animation: 'slideUp 0.25s ease',
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1.5rem 2rem',
                            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '12px',
                                    backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                                <div>
                                    <h2 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800 }}>Rapport de stage</h2>
                                    <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                                        {readModal.eleve} — {readModal.poste}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setReadModal(null)}
                                style={{
                                    background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '10px',
                                    width: '36px', height: '36px', cursor: 'pointer', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                            </button>
                        </div>

                        {/* Body with sidebar */}
                        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                            {/* Sommaire sidebar */}
                            <div style={{
                                width: '240px', flexShrink: 0, backgroundColor: 'var(--color-gray-50)',
                                borderRight: '1px solid var(--color-gray-200)', overflowY: 'auto',
                                padding: '1rem 0',
                            }}>
                                <div style={{ padding: '0 16px 10px', fontSize: '11px', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Sommaire
                                </div>
                                {readModal.sommaire.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setReadSection(i < readModal.contenu.length ? i : readSection)}
                                        style={{
                                            width: '100%', textAlign: 'left',
                                            padding: '10px 16px', border: 'none', background: 'none',
                                            fontSize: '13px', cursor: i < readModal.contenu.length ? 'pointer' : 'default',
                                            color: readSection === i ? '#1E3A8A' : 'var(--color-gray-600)',
                                            fontWeight: readSection === i ? 700 : 400,
                                            borderLeft: readSection === i ? '3px solid #3B82F6' : '3px solid transparent',
                                            transition: 'all 0.15s',
                                            opacity: i < readModal.contenu.length ? 1 : 0.5,
                                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                        }}
                                        onMouseEnter={e => { if (i < readModal.contenu.length && readSection !== i) e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                                    >
                                        <span>{item.titre}</span>
                                        <span style={{ fontSize: '11px', color: 'var(--color-gray-400)' }}>p.{item.page}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
                                {readModal.contenu[readSection] && (
                                    <div>
                                        <div style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            marginBottom: '1.25rem', paddingBottom: '12px',
                                            borderBottom: '2px solid var(--color-gray-100)',
                                        }}>
                                            <div style={{
                                                width: '32px', height: '32px', borderRadius: '8px',
                                                background: 'linear-gradient(135deg, rgba(30,58,138,0.08), rgba(59,130,246,0.1))',
                                                color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '14px', fontWeight: 800,
                                            }}>
                                                {readSection + 1}
                                            </div>
                                            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-gray-900)' }}>
                                                {readModal.contenu[readSection].titre}
                                            </h3>
                                        </div>
                                        <div style={{
                                            whiteSpace: 'pre-wrap', fontSize: '14px',
                                            color: 'var(--color-gray-700)', lineHeight: 1.8,
                                            fontFamily: 'var(--font-secondary)',
                                        }}>
                                            {readModal.contenu[readSection].texte}
                                        </div>
                                    </div>
                                )}

                                {/* Navigation */}
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between', marginTop: '2rem',
                                    paddingTop: '1rem', borderTop: '1px solid var(--color-gray-200)',
                                }}>
                                    <button
                                        onClick={() => setReadSection(Math.max(0, readSection - 1))}
                                        disabled={readSection === 0}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '6px',
                                            padding: '8px 16px', borderRadius: '8px',
                                            backgroundColor: readSection === 0 ? 'var(--color-gray-100)' : 'var(--color-gray-50)',
                                            border: '1px solid var(--color-gray-200)',
                                            color: readSection === 0 ? 'var(--color-gray-400)' : 'var(--color-gray-700)',
                                            fontSize: '13px', fontWeight: 600, cursor: readSection === 0 ? 'not-allowed' : 'pointer',
                                        }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        Précédent
                                    </button>
                                    <span style={{ fontSize: '12px', color: 'var(--color-gray-400)', alignSelf: 'center' }}>
                                        {readSection + 1} / {readModal.contenu.length}
                                    </span>
                                    <button
                                        onClick={() => setReadSection(Math.min(readModal.contenu.length - 1, readSection + 1))}
                                        disabled={readSection >= readModal.contenu.length - 1}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '6px',
                                            padding: '8px 16px', borderRadius: '8px',
                                            backgroundColor: readSection >= readModal.contenu.length - 1 ? 'var(--color-gray-100)' : 'var(--color-gray-50)',
                                            border: '1px solid var(--color-gray-200)',
                                            color: readSection >= readModal.contenu.length - 1 ? 'var(--color-gray-400)' : 'var(--color-gray-700)',
                                            fontSize: '13px', fontWeight: 600, cursor: readSection >= readModal.contenu.length - 1 ? 'not-allowed' : 'pointer',
                                        }}
                                    >
                                        Suivant
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== MODAL ÉVALUER ===== */}
            {evalModal && (
                <div
                    onClick={() => setEvalModal(null)}
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
                            width: '100%', maxWidth: '560px',
                            overflow: 'hidden', display: 'flex', flexDirection: 'column',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)', animation: 'slideUp 0.25s ease',
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1.5rem 2rem',
                            background: evalModal.statut === 'evalue'
                                ? 'linear-gradient(135deg, #059669 0%, #34d399 100%)'
                                : 'linear-gradient(135deg, #D97706 0%, #FBBF24 100%)',
                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '12px',
                                    backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 4H4V20H20V13" stroke="white" strokeWidth="2" strokeLinecap="round" /><path d="M9 15L20 4" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                                </div>
                                <div>
                                    <h2 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800 }}>
                                        {evalModal.statut === 'evalue' ? 'Évaluation du rapport' : 'Évaluer le rapport'}
                                    </h2>
                                    <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                                        {evalModal.eleve} — {evalModal.poste}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setEvalModal(null)}
                                style={{
                                    background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '10px',
                                    width: '36px', height: '36px', cursor: 'pointer', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div style={{ padding: '1.5rem 2rem' }}>
                            {/* Note */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--color-gray-700)', fontSize: 'var(--text-sm)' }}>
                                    Note sur 20
                                </label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <input
                                        type="number"
                                        min="0"
                                        max="20"
                                        value={evalNote}
                                        onChange={e => setEvalNote(e.target.value)}
                                        disabled={evalModal.statut === 'evalue'}
                                        style={{
                                            width: '100px', padding: '14px', textAlign: 'center',
                                            border: '2px solid var(--color-gray-200)', borderRadius: '12px',
                                            fontSize: '1.5rem', fontWeight: 800, outline: 'none',
                                            color: 'var(--color-gray-800)', backgroundColor: evalModal.statut === 'evalue' ? 'var(--color-gray-50)' : 'white',
                                            transition: 'border-color 0.2s, box-shadow 0.2s',
                                        }}
                                        onFocus={e => { if (evalModal.statut !== 'evalue') { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'; } }}
                                        onBlur={e => { e.target.style.borderColor = 'var(--color-gray-200)'; e.target.style.boxShadow = 'none'; }}
                                        placeholder="0"
                                    />
                                    <div style={{ fontSize: '1.25rem', color: 'var(--color-gray-400)', fontWeight: 600 }}>/ 20</div>
                                    {evalNote && !isNaN(parseInt(evalNote)) && (
                                        <div style={{
                                            padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 700,
                                            backgroundColor: parseInt(evalNote) >= 14 ? 'rgba(16,185,129,0.1)' : parseInt(evalNote) >= 10 ? 'rgba(251,191,36,0.1)' : 'rgba(239,68,68,0.1)',
                                            color: parseInt(evalNote) >= 14 ? '#059669' : parseInt(evalNote) >= 10 ? '#D97706' : '#EF4444',
                                        }}>
                                            {parseInt(evalNote) >= 16 ? 'Très bien' : parseInt(evalNote) >= 14 ? 'Bien' : parseInt(evalNote) >= 12 ? 'Assez bien' : parseInt(evalNote) >= 10 ? 'Passable' : 'Insuffisant'}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Remarque */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--color-gray-700)', fontSize: 'var(--text-sm)' }}>
                                    Remarques et observations
                                </label>
                                <textarea
                                    value={evalRemarque}
                                    onChange={e => setEvalRemarque(e.target.value)}
                                    disabled={evalModal.statut === 'evalue'}
                                    rows={5}
                                    style={{
                                        width: '100%', padding: '14px', borderRadius: '12px',
                                        border: '2px solid var(--color-gray-200)', fontSize: '14px',
                                        color: 'var(--color-gray-700)', outline: 'none', resize: 'vertical',
                                        lineHeight: 1.6, fontFamily: 'var(--font-secondary)',
                                        backgroundColor: evalModal.statut === 'evalue' ? 'var(--color-gray-50)' : 'white',
                                        transition: 'border-color 0.2s, box-shadow 0.2s',
                                        boxSizing: 'border-box',
                                    }}
                                    placeholder="Points positifs, axes d'amélioration, conseils..."
                                    onFocus={e => { if (evalModal.statut !== 'evalue') { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'; } }}
                                    onBlur={e => { e.target.style.borderColor = 'var(--color-gray-200)'; e.target.style.boxShadow = 'none'; }}
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        {evalModal.statut !== 'evalue' && (
                            <div style={{
                                padding: '1rem 2rem', borderTop: '1px solid var(--color-gray-200)',
                                display: 'flex', justifyContent: 'flex-end', gap: '8px',
                                backgroundColor: 'var(--color-gray-50)',
                            }}>
                                <button
                                    onClick={() => setEvalModal(null)}
                                    style={{
                                        padding: '10px 20px', borderRadius: '10px',
                                        backgroundColor: 'transparent', border: '1px solid var(--color-gray-200)',
                                        color: 'var(--color-gray-600)', fontSize: '13px', fontWeight: 600,
                                        cursor: 'pointer', transition: 'all 0.15s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    Annuler
                                </button>
                                <button
                                    onClick={handleSubmitEval}
                                    disabled={!evalNote || isNaN(parseInt(evalNote)) || parseInt(evalNote) < 0 || parseInt(evalNote) > 20}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        padding: '10px 20px', borderRadius: '10px',
                                        background: !evalNote || isNaN(parseInt(evalNote)) ? 'var(--color-gray-300)' : 'linear-gradient(135deg, #059669, #10b981)',
                                        border: 'none', color: 'white', fontSize: '13px', fontWeight: 600,
                                        cursor: !evalNote ? 'not-allowed' : 'pointer', transition: 'all 0.15s',
                                        boxShadow: !evalNote ? 'none' : '0 2px 8px rgba(5,150,105,0.3)',
                                    }}
                                    onMouseEnter={e => { if (evalNote) { e.currentTarget.style.transform = 'translateY(-1px)'; } }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    Valider l'évaluation
                                </button>
                            </div>
                        )}
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

export default RapportsList;
