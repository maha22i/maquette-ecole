import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary-dark)',
            color: 'white',
            padding: 'var(--spacing-2xl) 0 var(--spacing-lg) 0'
        }}>
            <div className="container">
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-xl)',
                    marginBottom: 'var(--spacing-xl)',
                    paddingBottom: 'var(--spacing-xl)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    {/* About Section */}
                    <div>
                        <h3 style={{
                            fontSize: 'var(--text-xl)',
                            fontWeight: 700,
                            marginBottom: 'var(--spacing-md)',
                            color: 'white'
                        }}>
                            Plateforme de Gestion des Stages
                        </h3>
                        <p style={{
                            fontSize: 'var(--text-sm)',
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: 1.7,
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            Solution digitale complète pour la gestion des stages et alternances au sein de l'Académie de Normandie.
                        </p>
                        <div style={{
                            padding: 'var(--spacing-md)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 'var(--radius-md)',
                            borderLeft: '3px solid var(--color-accent)'
                        }}>
                            <p style={{
                                fontSize: 'var(--text-sm)',
                                fontWeight: 600,
                                margin: 0,
                                color: 'white'
                            }}>
                                Lycée Professionnel Bartholdi
                            </p>
                            <p style={{
                                fontSize: 'var(--text-sm)',
                                margin: '0.25rem 0 0 0',
                                color: 'rgba(255, 255, 255, 0.9)'
                            }}>
                                Académie de Normandie
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: 'var(--text-lg)',
                            fontWeight: 600,
                            marginBottom: 'var(--spacing-md)',
                            color: 'white'
                        }}>
                            Liens rapides
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            {['Accueil', 'Se connecter', 'Créer un compte', 'Guide d\'utilisation', 'FAQ'].map((link, index) => (
                                <li key={index} style={{ marginBottom: '0.75rem' }}>
                                    <a
                                        href="#"
                                        style={{
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            fontSize: 'var(--text-sm)',
                                            textDecoration: 'none',
                                            transition: 'color var(--transition-fast)',
                                            display: 'inline-block'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'white';
                                            e.currentTarget.style.transform = 'translateX(4px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        → {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Contact */}
                    <div>
                        <h4 style={{
                            fontSize: 'var(--text-lg)',
                            fontWeight: 600,
                            marginBottom: 'var(--spacing-md)',
                            color: 'white'
                        }}>
                            Informations légales
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            {['Mentions légales', 'Politique de confidentialité', 'Conditions d\'utilisation', 'Accessibilité'].map((link, index) => (
                                <li key={index} style={{ marginBottom: '0.75rem' }}>
                                    <a
                                        href="#"
                                        style={{
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            fontSize: 'var(--text-sm)',
                                            textDecoration: 'none',
                                            transition: 'color var(--transition-fast)'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: 'var(--spacing-md)' }}>
                            <p style={{
                                fontSize: 'var(--text-sm)',
                                color: 'rgba(255, 255, 255, 0.8)',
                                marginBottom: '0.5rem'
                            }}>
                                📧 contact@stages-bartholdi.fr
                            </p>
                            <p style={{
                                fontSize: 'var(--text-sm)',
                                color: 'rgba(255, 255, 255, 0.8)',
                                margin: 0
                            }}>
                                📞 +33 (0)2 XX XX XX XX
                            </p>
                        </div>
                    </div>

                    {/* Social & Support */}
                    <div>
                        <h4 style={{
                            fontSize: 'var(--text-lg)',
                            fontWeight: 600,
                            marginBottom: 'var(--spacing-md)',
                            color: 'white'
                        }}>
                            Assistance
                        </h4>
                        <p style={{
                            fontSize: 'var(--text-sm)',
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: 1.7,
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            Notre équipe est disponible pour vous accompagner dans l'utilisation de la plateforme.
                        </p>
                        <a href="#" className="btn btn-accent" style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}>
                            Contacter le support
                        </a>

                        {/* Social Icons */}
                        <div style={{
                            display: 'flex',
                            gap: 'var(--spacing-sm)',
                            marginTop: 'var(--spacing-md)'
                        }}>
                            {['📘', '🐦', '📧'].map((icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: 'var(--radius-md)',
                                        fontSize: '1.25rem',
                                        transition: 'all var(--transition-base)',
                                        textDecoration: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-md)',
                    paddingTop: 'var(--spacing-md)'
                }}>
                    <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'rgba(255, 255, 255, 0.7)',
                        margin: 0
                    }}>
                        © 2026 Lycée Professionnel Bartholdi - Académie de Normandie. Tous droits réservés.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: 'var(--spacing-sm)',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            fontSize: 'var(--text-xs)',
                            color: 'rgba(255, 255, 255, 0.6)',
                            padding: '0.25rem 0.75rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 'var(--radius-sm)'
                        }}>
                            🇫🇷 Hébergé en France
                        </span>
                        <span style={{
                            fontSize: 'var(--text-xs)',
                            color: 'rgba(255, 255, 255, 0.6)',
                            padding: '0.25rem 0.75rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 'var(--radius-sm)'
                        }}>
                            ✅ RGPD Conforme
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
