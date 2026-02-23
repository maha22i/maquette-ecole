import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Accueil', href: '#' },
        { label: 'Élèves', href: '/eleve/login' },
        { label: 'Entreprises', href: '/entreprise/login' },
        { label: 'Direction', href: '/admin/login' },
        { label: 'Parents', href: '#parents' },
        { label: 'Contact', href: '#contact' }
    ];



    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            boxShadow: 'var(--shadow-md)',
            zIndex: 1000,
            borderBottom: '1px solid var(--color-gray-200)'
        }}>
            {/* Logo Section - Full Width */}
            <div style={{
                backgroundColor: 'var(--color-gray-50)',
                padding: 'var(--spacing-md) 0',
                borderBottom: '1px solid var(--color-gray-200)'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-sm)',
                        textDecoration: 'none'
                    }}>
                        <img
                            src="/logo.jpg"
                            alt="Lycée Professionnel Bartholdi"
                            style={{
                                height: '80px',
                                width: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </a>
                </div>
            </div>

            {/* Menu Section - Centered */}
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                minHeight: '60px',
                position: 'relative'
            }}>
                {/* Desktop Menu */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-lg)'
                }} className="desktop-menu">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            style={{
                                fontSize: 'var(--text-base)',
                                fontWeight: 500,
                                color: 'var(--color-gray-700)',
                                textDecoration: 'none',
                                padding: '0.5rem 0',
                                borderBottom: '2px solid transparent',
                                transition: 'all var(--transition-fast)',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-primary)';
                                e.currentTarget.style.borderBottomColor = 'var(--color-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--color-gray-700)';
                                e.currentTarget.style.borderBottomColor = 'transparent';
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* CTA Buttons - Positioned on the right */}
                <div style={{
                    display: 'flex',
                    gap: 'var(--spacing-sm)',
                    position: 'absolute',
                    right: 'var(--spacing-md)'
                }} className="desktop-cta">
                    <a href="#" className="btn btn-secondary" style={{
                        padding: '0.5rem 1.25rem',
                        fontSize: 'var(--text-sm)'
                    }}>
                        Se connecter
                    </a>
                    <a href="#" className="btn btn-primary" style={{
                        padding: '0.5rem 1.25rem',
                        fontSize: 'var(--text-sm)'
                    }}>
                        Créer un compte
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        color: 'var(--color-primary)',
                        position: 'absolute',
                        right: 'var(--spacing-md)'
                    }}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu" style={{
                    display: 'none',
                    backgroundColor: 'white',
                    borderTop: '1px solid var(--color-gray-200)',
                    padding: 'var(--spacing-md)',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            style={{
                                display: 'block',
                                padding: 'var(--spacing-sm) 0',
                                fontSize: 'var(--text-base)',
                                fontWeight: 500,
                                color: 'var(--color-gray-700)',
                                textDecoration: 'none',
                                borderBottom: '1px solid var(--color-gray-100)',
                                transition: 'color var(--transition-fast)'
                            }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-700)'}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-sm)',
                        marginTop: 'var(--spacing-md)'
                    }}>
                        <a href="#" className="btn btn-secondary" style={{ width: '100%' }}>
                            Se connecter
                        </a>
                        <a href="#" className="btn btn-primary" style={{ width: '100%' }}>
                            Créer un compte
                        </a>
                    </div>
                </div>
            )}

            <style>{`
        @media (max-width: 968px) {
          .desktop-menu {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
