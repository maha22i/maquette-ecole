import { useState } from 'react';

const LogsActivite = () => {
    const [filterType, setFilterType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const logs = [
        { id: 1, date: '2025-06-15 14:32', user: 'Marie Dupont (Élève)', action: 'Connexion', detail: 'Connexion depuis 192.168.1.45', type: 'auth', level: 'info' },
        { id: 2, date: '2025-06-15 14:28', user: 'Tech Corp (Entreprise)', action: 'Offre créée', detail: 'Nouvelle offre "Stage développeur web"', type: 'offre', level: 'info' },
        { id: 3, date: '2025-06-15 14:15', user: 'Admin Principal', action: 'Validation entreprise', detail: 'Digital Services validée', type: 'admin', level: 'success' },
        { id: 4, date: '2025-06-15 13:58', user: 'Lucas Martin (Élève)', action: 'Candidature envoyée', detail: 'Candidature pour "Assistant commercial"', type: 'candidature', level: 'info' },
        { id: 5, date: '2025-06-15 13:42', user: 'Système', action: 'Convention générée', detail: 'Convention #2025-042 générée automatiquement', type: 'system', level: 'info' },
        { id: 6, date: '2025-06-15 13:30', user: 'Jean Durand (Élève)', action: 'Échec connexion', detail: 'Mot de passe incorrect (tentative 3/5)', type: 'auth', level: 'warning' },
        { id: 7, date: '2025-06-15 12:55', user: 'Admin Principal', action: 'Offre refusée', detail: 'Offre "Stage non rémunéré" refusée — non conforme', type: 'admin', level: 'error' },
        { id: 8, date: '2025-06-15 12:40', user: 'Solutions Pro (Entreprise)', action: 'Profil mis à jour', detail: 'Modification des informations de contact', type: 'offre', level: 'info' },
        { id: 9, date: '2025-06-15 12:20', user: 'Système', action: 'Sauvegarde BDD', detail: 'Sauvegarde automatique réussie (2.3 Go)', type: 'system', level: 'success' },
        { id: 10, date: '2025-06-15 11:50', user: 'Sophie Bernard (Élève)', action: 'Rapport soumis', detail: 'Rapport de stage soumis pour évaluation', type: 'candidature', level: 'info' },
    ];

    const levelConfig: Record<string, { bg: string; color: string; label: string }> = {
        info: { bg: 'rgba(59,130,246,0.1)', color: '#3b82f6', label: 'Info' },
        success: { bg: 'rgba(16,185,129,0.1)', color: '#10b981', label: 'Succès' },
        warning: { bg: 'rgba(245,158,11,0.1)', color: '#f59e0b', label: 'Attention' },
        error: { bg: 'rgba(239,68,68,0.1)', color: '#ef4444', label: 'Erreur' },
    };

    const typeLabels: Record<string, string> = {
        all: 'Tous',
        auth: 'Authentification',
        offre: 'Offres',
        candidature: 'Candidatures',
        admin: 'Administration',
        system: 'Système',
    };

    const filtered = logs.filter(log => {
        const matchesType = filterType === 'all' || log.type === filterType;
        const matchesSearch = searchQuery === '' ||
            log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
            log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
            log.detail.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <div>
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Logs d'activité
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Journal des actions et événements de la plateforme
                </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                {[
                    { label: "Aujourd'hui", value: logs.length, icon: '📋', color: '#3b82f6' },
                    { label: 'Connexions', value: logs.filter(l => l.type === 'auth').length, icon: '🔐', color: '#10b981' },
                    { label: 'Avertissements', value: logs.filter(l => l.level === 'warning').length, icon: '⚠️', color: '#f59e0b' },
                    { label: 'Erreurs', value: logs.filter(l => l.level === 'error').length, icon: '❌', color: '#ef4444' },
                ].map((stat, i) => (
                    <div key={i} className="card" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{stat.icon}</div>
                        <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: stat.color }}>{stat.value}</div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-500)', fontWeight: 600 }}>{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="card" style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Rechercher dans les logs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        flex: 1,
                        minWidth: '200px',
                        padding: 'var(--spacing-xs) var(--spacing-sm)',
                        border: '1px solid var(--color-gray-300)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--text-sm)',
                    }}
                />
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    style={{
                        padding: 'var(--spacing-xs) var(--spacing-sm)',
                        border: '1px solid var(--color-gray-300)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--text-sm)',
                        backgroundColor: 'white',
                    }}
                >
                    {Object.entries(typeLabels).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>

            {/* Logs list */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {filtered.length === 0 ? (
                    <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center', color: 'var(--color-gray-400)' }}>
                        Aucun log trouvé pour ces filtres.
                    </div>
                ) : (
                    filtered.map((log, index) => {
                        const level = levelConfig[log.level];
                        return (
                            <div
                                key={log.id}
                                style={{
                                    padding: 'var(--spacing-md) var(--spacing-lg)',
                                    borderBottom: index < filtered.length - 1 ? '1px solid var(--color-gray-100)' : 'none',
                                    display: 'flex',
                                    gap: 'var(--spacing-md)',
                                    alignItems: 'flex-start',
                                    transition: 'background-color 0.15s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                <div style={{
                                    padding: '4px 10px',
                                    borderRadius: 'var(--radius-sm)',
                                    backgroundColor: level.bg,
                                    color: level.color,
                                    fontSize: 'var(--text-xs)',
                                    fontWeight: 700,
                                    whiteSpace: 'nowrap',
                                    marginTop: '2px',
                                }}>
                                    {level.label}
                                </div>

                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                                        <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-gray-900)' }}>
                                            {log.action}
                                        </span>
                                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)', whiteSpace: 'nowrap' }}>
                                            {log.date}
                                        </span>
                                    </div>
                                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: '2px' }}>
                                        {log.detail}
                                    </div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)' }}>
                                        {log.user}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default LogsActivite;
