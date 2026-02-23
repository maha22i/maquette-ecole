const Dashboard = () => {
    const kpis = [
        { icon: '👨‍🎓', label: 'Élèves inscrits', value: '247', change: '+12', color: 'var(--color-primary)' },
        { icon: '🏢', label: 'Entreprises validées', value: '89', change: '+5', color: 'var(--color-success)' },
        { icon: '📝', label: 'Offres actives', value: '34', change: '+8', color: 'var(--color-accent)' },
        { icon: '📊', label: 'Taux de placement', value: '87%', change: '+3%', color: 'var(--color-success)' },
        { icon: '⏳', label: 'Conventions en attente', value: '12', change: '-2', color: 'var(--color-warning)' },
        { icon: '📋', label: 'Rapports en attente', value: '8', change: '-4', color: 'var(--color-warning)' },
        { icon: '⚠️', label: 'Conventions expirées', value: '3', change: '+1', color: 'var(--color-error)' },
        { icon: '🔔', label: 'Alertes urgentes', value: '5', change: '+2', color: 'var(--color-error)' }
    ];

    const alerts = [
        { id: 1, type: 'error', message: 'Convention non signée depuis 5 jours - Marie Dupont', time: 'Il y a 2h' },
        { id: 2, type: 'warning', message: 'Rapport non soumis - Pierre Martin (échéance: demain)', time: 'Il y a 3h' },
        { id: 3, type: 'info', message: 'Nouvelle entreprise à valider - Tech Solutions SARL', time: 'Il y a 5h' },
        { id: 4, type: 'warning', message: 'Convention expire dans 7 jours - Sophie Bernard', time: 'Il y a 1j' },
        { id: 5, type: 'info', message: '3 nouvelles candidatures à traiter', time: 'Il y a 1j' }
    ];

    const recentActivity = [
        { id: 1, user: 'Marie Dupont', action: 'a soumis son rapport de stage', time: 'Il y a 15 min', icon: '📋' },
        { id: 2, user: 'Tech Corp', action: 'a publié une nouvelle offre', time: 'Il y a 1h', icon: '📝' },
        { id: 3, user: 'Pierre Martin', action: 'a signé sa convention', time: 'Il y a 2h', icon: '✍️' },
        { id: 4, user: 'Admin', action: 'a validé l\'entreprise Digital Services', time: 'Il y a 3h', icon: '✅' },
        { id: 5, user: 'Sophie Bernard', action: 'a postulé à une offre', time: 'Il y a 4h', icon: '📨' }
    ];

    const getAlertColor = (type: string) => {
        switch (type) {
            case 'error': return 'var(--color-error)';
            case 'warning': return 'var(--color-warning)';
            case 'info': return 'var(--color-accent)';
            default: return 'var(--color-gray-600)';
        }
    };

    const getAlertIcon = (type: string) => {
        switch (type) {
            case 'error': return '🚨';
            case 'warning': return '⚠️';
            case 'info': return 'ℹ️';
            default: return '📌';
        }
    };

    return (
        <div>
            {/* Welcome */}
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 800,
                    color: 'var(--color-primary-dark)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Bienvenue, M. Directeur 👋
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-base)' }}>
                    Vue d'ensemble de la plateforme de gestion des stages
                </p>
            </div>

            {/* KPI Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)'
            }}>
                {kpis.map((kpi, index) => (
                    <div key={index} className="card" style={{
                        padding: 'var(--spacing-lg)',
                        borderLeft: `4px solid ${kpi.color}`
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-md)' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: 'var(--radius-md)',
                                backgroundColor: `${kpi.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem'
                            }}>
                                {kpi.icon}
                            </div>
                            <span style={{
                                padding: '4px 8px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--text-xs)',
                                fontWeight: 700,
                                backgroundColor: kpi.change.startsWith('+') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(220, 38, 38, 0.1)',
                                color: kpi.change.startsWith('+') ? 'var(--color-success)' : 'var(--color-error)'
                            }}>
                                {kpi.change}
                            </span>
                        </div>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                            {kpi.label}
                        </p>
                        <p style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: kpi.color, margin: 0 }}>
                            {kpi.value}
                        </p>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)' }}>
                {/* Charts Section */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        📈 Évolution des stages
                    </h3>

                    {/* Simple bar chart representation */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--spacing-md)', height: '200px', marginBottom: 'var(--spacing-lg)' }}>
                        {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'].map((month, index) => {
                            const heights = [60, 75, 85, 70, 90, 95];
                            return (
                                <div key={month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                                    <div style={{
                                        width: '100%',
                                        height: `${heights[index]}%`,
                                        backgroundColor: 'var(--color-primary)',
                                        borderRadius: 'var(--radius-sm)',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        paddingTop: 'var(--spacing-xs)',
                                        color: 'white',
                                        fontSize: 'var(--text-xs)',
                                        fontWeight: 700
                                    }}>
                                        {Math.round(heights[index])}
                                    </div>
                                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', fontWeight: 600 }}>
                                        {month}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Distribution by section */}
                    <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--spacing-md)', color: 'var(--color-gray-700)' }}>
                        Répartition par section
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                        {[
                            { section: 'Commerce', value: 35, color: 'var(--color-primary)' },
                            { section: 'Vente', value: 28, color: 'var(--color-accent)' },
                            { section: 'Gestion-Admin', value: 22, color: 'var(--color-success)' },
                            { section: 'Accueil', value: 15, color: 'var(--color-warning)' }
                        ].map((item) => (
                            <div key={item.section}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-xs)' }}>
                                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{item.section}</span>
                                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: item.color }}>{item.value}%</span>
                                </div>
                                <div style={{
                                    width: '100%',
                                    height: '8px',
                                    backgroundColor: 'var(--color-gray-200)',
                                    borderRadius: 'var(--radius-full)',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: `${item.value}%`,
                                        height: '100%',
                                        backgroundColor: item.color,
                                        borderRadius: 'var(--radius-full)'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alert Center */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        🔔 Centre d'alertes
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        {alerts.map((alert) => (
                            <div
                                key={alert.id}
                                style={{
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: 'var(--color-gray-50)',
                                    borderRadius: 'var(--radius-md)',
                                    borderLeft: `4px solid ${getAlertColor(alert.type)}`
                                }}
                            >
                                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
                                    <span style={{ fontSize: '1rem' }}>{getAlertIcon(alert.type)}</span>
                                    <p style={{
                                        fontSize: 'var(--text-sm)',
                                        fontWeight: 600,
                                        color: 'var(--color-gray-900)',
                                        margin: 0,
                                        flex: 1
                                    }}>
                                        {alert.message}
                                    </p>
                                </div>
                                <p style={{
                                    fontSize: 'var(--text-xs)',
                                    color: 'var(--color-gray-600)',
                                    margin: 0,
                                    paddingLeft: '1.5rem'
                                }}>
                                    {alert.time}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--spacing-lg)' }}>
                        Voir toutes les alertes
                    </button>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--color-primary-dark)'
                }}>
                    🕐 Activité récente
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    {recentActivity.map((activity) => (
                        <div
                            key={activity.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--spacing-md)',
                                padding: 'var(--spacing-md)',
                                backgroundColor: 'var(--color-gray-50)',
                                borderRadius: 'var(--radius-md)'
                            }}
                        >
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-primary)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem',
                                flexShrink: 0
                            }}>
                                {activity.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>
                                    <strong>{activity.user}</strong> {activity.action}
                                </p>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', margin: 0 }}>
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Stats */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-lg)',
                marginTop: 'var(--spacing-xl)'
            }}>
                <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>⏱️</div>
                    <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                        21 jours
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                        Durée moyenne recherche
                    </p>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>✅</div>
                    <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-success)', margin: 0 }}>
                        92%
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                        Taux de réussite
                    </p>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>📝</div>
                    <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-accent)', margin: 0 }}>
                        15.2/20
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                        Note moyenne rapports
                    </p>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>🏆</div>
                    <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-warning)', margin: 0 }}>
                        Tech Corp
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                        Top entreprise
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
