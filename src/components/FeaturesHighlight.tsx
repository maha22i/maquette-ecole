import React from 'react';

const FeaturesHighlight: React.FC = () => {
    const features = [
        {
            icon: '✍️',
            title: 'Signature électronique eIDAS',
            description: 'Conformité juridique européenne garantie'
        },
        {
            icon: '🔒',
            title: 'Hébergement sécurisé',
            description: 'Données hébergées en France sur serveurs certifiés'
        },
        {
            icon: '📈',
            title: 'Statistiques avancées',
            description: 'Tableaux de bord et rapports personnalisables'
        },
        {
            icon: '🛡️',
            title: 'Conformité RGPD',
            description: 'Protection maximale des données personnelles'
        }
    ];

    return (
        <section className="section bg-primary-dark">
            <div className="container">
                <div className="text-center mb-xl">
                    <h2 style={{ color: 'white' }}>
                        Une technologie de pointe au service de l'éducation
                    </h2>
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        Sécurité, conformité et performance pour une gestion sereine
                    </p>
                </div>

                <div className="grid grid-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--spacing-lg)',
                                textAlign: 'center',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                transition: 'all var(--transition-base)',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: 'var(--spacing-md)'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{
                                fontSize: 'var(--text-xl)',
                                fontWeight: 600,
                                color: 'white',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                fontSize: 'var(--text-base)',
                                color: 'rgba(255, 255, 255, 0.8)',
                                lineHeight: 1.6,
                                margin: 0
                            }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesHighlight;
