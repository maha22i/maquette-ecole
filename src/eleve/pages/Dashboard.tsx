const Dashboard = () => {
    const stats = {
        candidaturesEnvoyees: 5,
        reponsesRecues: 3,
        conventionEnAttente: true,
        rapportADeposer: false,
        statut: 'En recherche'
    };

    const echeances = [
        { id: 1, titre: 'Signer la convention - Entreprise Demo', date: '2024-02-20', urgent: true },
        { id: 2, titre: 'Réponse attendue - Stage Marketing', date: '2024-02-25', urgent: false },
    ];

    const offresRecommandees = [
        { id: 1, titre: 'Développeur Web Junior', entreprise: 'Tech Corp', lieu: 'Paris', type: 'Stage' },
        { id: 2, titre: 'Assistant Commercial', entreprise: 'Sales Inc', lieu: 'Lyon', type: 'Alternance' },
        { id: 3, titre: 'Technicien Maintenance', entreprise: 'Indust SA', lieu: 'Marseille', type: 'Stage' },
    ];

    return (
        <div>
            {/* Welcome */}
            <div style={{
                marginBottom: 'var(--spacing-xl)',
                padding: '2rem 2.5rem',
                background: 'linear-gradient(135deg, #059669 0%, #10b981 60%, #34d399 100%)',
                borderRadius: '16px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: '-30px', right: '-20px',
                    width: '200px', height: '200px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-40px', right: '100px',
                    width: '120px', height: '120px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{
                        fontSize: 'var(--text-3xl)', fontWeight: 800,
                        marginBottom: '0.5rem', color: '#ffffff',
                    }}>
                        Bienvenue sur votre tableau de bord
                    </h2>
                    <p style={{
                        fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.85)', margin: 0,
                    }}>
                        Gérez votre recherche de stage et suivez votre progression
                    </p>
                </div>
            </div>

            {/* Stats Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)'
            }}>
                <div className="card" style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid var(--color-accent)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                        Candidatures envoyées
                    </p>
                    <p style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-primary-dark)', margin: 0 }}>
                        {stats.candidaturesEnvoyees}
                    </p>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid var(--color-success)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                        Réponses reçues
                    </p>
                    <p style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-primary-dark)', margin: 0 }}>
                        {stats.reponsesRecues}
                    </p>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid var(--color-warning)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                        Taux de réponse
                    </p>
                    <p style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-primary-dark)', margin: 0 }}>
                        {Math.round((stats.reponsesRecues / stats.candidaturesEnvoyees) * 100)}%
                    </p>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid var(--color-primary)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                        Statut actuel
                    </p>
                    <p style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-primary-dark)', margin: 0 }}>
                        {stats.statut}
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)'
            }}>
                {/* Pending Tasks */}
                <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary-dark)' }}>
                        Tâches en attente
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        {stats.conventionEnAttente && (
                            <div style={{
                                padding: 'var(--spacing-md)',
                                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '4px solid var(--color-warning)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <p style={{ fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>Convention à signer</p>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                                            Votre convention de stage attend votre signature
                                        </p>
                                    </div>
                                    <button className="btn btn-primary" style={{ fontSize: 'var(--text-sm)' }}>
                                        Signer
                                    </button>
                                </div>
                            </div>
                        )}

                        {stats.rapportADeposer && (
                            <div style={{
                                padding: 'var(--spacing-md)',
                                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '4px solid var(--color-error)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <p style={{ fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>Rapport à déposer</p>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                                            Date limite: 15 mars 2024
                                        </p>
                                    </div>
                                    <button className="btn btn-primary" style={{ fontSize: 'var(--text-sm)' }}>
                                        Déposer
                                    </button>
                                </div>
                            </div>
                        )}

                        {!stats.conventionEnAttente && !stats.rapportADeposer && (
                            <p style={{ textAlign: 'center', color: 'var(--color-gray-500)', padding: 'var(--spacing-lg)' }}>
                                Aucune tâche en attente
                            </p>
                        )}
                    </div>
                </div>

                {/* Deadlines */}
                <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary-dark)' }}>
                        Échéances importantes
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        {echeances.map((echeance) => (
                            <div
                                key={echeance.id}
                                style={{
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: 'var(--color-gray-50)',
                                    borderRadius: 'var(--radius-md)',
                                    borderLeft: `4px solid ${echeance.urgent ? 'var(--color-error)' : 'var(--color-accent)'}`
                                }}
                            >
                                <p style={{ fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>{echeance.titre}</p>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                                    📅 {new Date(echeance.date).toLocaleDateString('fr-FR')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="card" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary-dark)' }}>
                    Actions rapides
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
                    <button
                        className="btn btn-primary"
                        style={{ justifyContent: 'flex-start', gap: 'var(--spacing-sm)' }}
                        onClick={() => window.location.href = '/eleve/offres'}
                    >
                        <span>🔍</span>
                        <span>Rechercher des offres</span>
                    </button>

                    <button
                        className="btn btn-secondary"
                        style={{ justifyContent: 'flex-start', gap: 'var(--spacing-sm)' }}
                        onClick={() => window.location.href = '/eleve/candidatures'}
                    >
                        <span>📝</span>
                        <span>Mes candidatures</span>
                    </button>

                    <button
                        className="btn btn-secondary"
                        style={{ justifyContent: 'flex-start', gap: 'var(--spacing-sm)' }}
                        onClick={() => window.location.href = '/eleve/conventions'}
                    >
                        <span>📄</span>
                        <span>Mes conventions</span>
                    </button>

                    <button
                        className="btn btn-secondary"
                        style={{ justifyContent: 'flex-start', gap: 'var(--spacing-sm)' }}
                        onClick={() => window.location.href = '/eleve/messagerie'}
                    >
                        <span>💬</span>
                        <span>Messagerie</span>
                    </button>
                </div>
            </div>

            {/* Recommended Offers */}
            <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary-dark)' }}>
                    Offres recommandées pour vous
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
                    {offresRecommandees.map((offre) => (
                        <div
                            key={offre.id}
                            style={{
                                padding: 'var(--spacing-md)',
                                border: '1px solid var(--color-gray-200)',
                                borderRadius: 'var(--radius-md)',
                                transition: 'all var(--transition-fast)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                                <span style={{
                                    padding: '4px 8px',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: 'var(--text-xs)',
                                    fontWeight: 600,
                                    backgroundColor: 'var(--color-accent)',
                                    color: 'white'
                                }}>
                                    {offre.type}
                                </span>
                            </div>
                            <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--spacing-xs)' }}>
                                {offre.titre}
                            </h4>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                {offre.entreprise}
                            </p>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>
                                📍 {offre.lieu}
                            </p>
                            <button className="btn btn-primary" style={{ width: '100%', fontSize: 'var(--text-sm)' }}>
                                Voir l'offre
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
