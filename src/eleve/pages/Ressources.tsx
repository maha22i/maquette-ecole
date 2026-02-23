const Ressources = () => {
    const ressources = [
        {
            id: 1,
            titre: 'Guide de rédaction de CV',
            description: 'Apprenez à créer un CV professionnel et attractif',
            type: 'PDF',
            icon: '📄',
            url: '#'
        },
        {
            id: 2,
            titre: 'Template lettre de motivation',
            description: 'Modèle de lettre de motivation personnalisable',
            type: 'DOC',
            icon: '📝',
            url: '#'
        },
        {
            id: 3,
            titre: 'Guide de rédaction du rapport de stage',
            description: 'Structure et conseils pour votre rapport',
            type: 'PDF',
            icon: '📋',
            url: '#'
        },
        {
            id: 4,
            titre: 'FAQ - Questions fréquentes',
            description: 'Réponses aux questions les plus courantes',
            type: 'WEB',
            icon: '❓',
            url: '#'
        },
        {
            id: 5,
            titre: 'Réglementation des stages',
            description: 'Droits et devoirs du stagiaire',
            type: 'PDF',
            icon: '⚖️',
            url: '#'
        },
        {
            id: 6,
            titre: 'Conseils pour l\'entretien',
            description: 'Comment réussir votre entretien de stage',
            type: 'PDF',
            icon: '💼',
            url: '#'
        },
    ];

    return (
        <div>
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Ressources
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Documents et guides fournis par le lycée
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'var(--spacing-lg)'
            }}>
                {ressources.map((ressource) => (
                    <div
                        key={ressource.id}
                        className="card"
                        style={{
                            padding: 'var(--spacing-lg)',
                            cursor: 'pointer',
                            transition: 'all var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--spacing-md)',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: 'var(--radius-md)',
                                backgroundColor: 'var(--color-primary)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                flexShrink: 0
                            }}>
                                {ressource.icon}
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: 'var(--spacing-xs)'
                                }}>
                                    <h3 style={{
                                        fontSize: 'var(--text-lg)',
                                        fontWeight: 700,
                                        color: 'var(--color-primary-dark)',
                                        margin: 0
                                    }}>
                                        {ressource.titre}
                                    </h3>
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: 'var(--text-xs)',
                                        fontWeight: 600,
                                        backgroundColor: 'var(--color-gray-200)',
                                        color: 'var(--color-gray-700)'
                                    }}>
                                        {ressource.type}
                                    </span>
                                </div>

                                <p style={{
                                    fontSize: 'var(--text-sm)',
                                    color: 'var(--color-gray-600)',
                                    lineHeight: 1.5,
                                    margin: 0
                                }}>
                                    {ressource.description}
                                </p>
                            </div>
                        </div>

                        <button
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                            onClick={() => window.open(ressource.url, '_blank')}
                        >
                            📥 Télécharger
                        </button>
                    </div>
                ))}
            </div>

            {/* Help Section */}
            <div className="card" style={{
                padding: 'var(--spacing-xl)',
                marginTop: 'var(--spacing-xl)',
                backgroundColor: 'var(--color-gray-50)',
                border: '2px solid var(--color-primary)'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>💡</div>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Besoin d'aide ?
                    </h3>
                    <p style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-gray-600)',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        Si vous avez des questions ou besoin d'assistance, n'hésitez pas à contacter l'administration
                    </p>
                    <button className="btn btn-primary">
                        💬 Contacter l'administration
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Ressources;
