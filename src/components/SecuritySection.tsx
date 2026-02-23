import React from 'react';

const SecuritySection: React.FC = () => {
    const securityFeatures = [
        {
            icon: '🔐',
            title: 'HTTPS sécurisé',
            description: 'Chiffrement SSL/TLS de bout en bout'
        },
        {
            icon: '🇫🇷',
            title: 'Hébergement en France',
            description: 'Serveurs certifiés HDS sur le territoire français'
        },
        {
            icon: '✅',
            title: 'Conformité RGPD',
            description: 'Respect total du règlement européen sur les données'
        },
        {
            icon: '📁',
            title: 'Archivage légal 5 ans',
            description: 'Conservation sécurisée conforme aux obligations légales'
        }
    ];

    return (
        <section className="section bg-gray-light">
            <div className="container">
                <div className="text-center mb-xl">
                    <h2 style={{ color: 'var(--color-primary-dark)' }}>
                        Sécurité et conformité garanties
                    </h2>
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--color-gray-600)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Vos données sont protégées selon les plus hauts standards de sécurité
                    </p>
                </div>

                <div className="grid grid-4">
                    {securityFeatures.map((feature, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: 'var(--spacing-lg)',
                                backgroundColor: 'white',
                                borderRadius: 'var(--radius-lg)',
                                border: '2px solid var(--color-success)',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'all var(--transition-base)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: 'var(--spacing-md)'
                            }}>
                                {feature.icon}
                            </div>
                            <h4 style={{
                                fontSize: 'var(--text-lg)',
                                fontWeight: 600,
                                color: 'var(--color-primary-dark)',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                {feature.title}
                            </h4>
                            <p style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-gray-600)',
                                lineHeight: 1.6,
                                margin: 0
                            }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: 'var(--spacing-xl)',
                    padding: 'var(--spacing-xl)',
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--color-gray-700)',
                        marginBottom: 'var(--spacing-md)',
                        fontWeight: 500
                    }}>
                        Certifié par les autorités compétentes
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--spacing-lg)',
                        flexWrap: 'wrap',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            padding: '0.5rem 1.5rem',
                            backgroundColor: 'var(--color-gray-100)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            color: 'var(--color-primary)'
                        }}>
                            🇪🇺 eIDAS
                        </span>
                        <span style={{
                            padding: '0.5rem 1.5rem',
                            backgroundColor: 'var(--color-gray-100)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            color: 'var(--color-primary)'
                        }}>
                            🏥 HDS
                        </span>
                        <span style={{
                            padding: '0.5rem 1.5rem',
                            backgroundColor: 'var(--color-gray-100)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            color: 'var(--color-primary)'
                        }}>
                            🔒 ISO 27001
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
