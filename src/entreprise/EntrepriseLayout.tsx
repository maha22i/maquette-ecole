import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EntrepriseLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Mock company data - in real app, this would come from auth context
    const companyName = "Entreprise Demo";

    const menuItems = [
        { icon: '📊', label: 'Tableau de bord', path: '/entreprise/dashboard' },
        { icon: '📝', label: 'Mes offres', path: '/entreprise/offres' },
        { icon: '📥', label: 'Candidatures', path: '/entreprise/candidatures' },
        { icon: '📄', label: 'Conventions', path: '/entreprise/conventions' },
        { icon: '👥', label: 'Mes stagiaires', path: '/entreprise/stagiaires' },
        { icon: '📋', label: 'Rapports', path: '/entreprise/rapports' },
        { icon: '💬', label: 'Messagerie', path: '/entreprise/messagerie' },
        { icon: '👤', label: 'Mon profil', path: '/entreprise/profil' },
        { icon: '⚙️', label: 'Paramètres', path: '/entreprise/parametres' },
    ];

    const handleLogout = () => {
        // In real app, clear auth token
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-gray-50)' }}>
            {/* Sidebar */}
            <aside style={{
                width: isSidebarOpen ? '260px' : '260px',
                backgroundColor: 'var(--color-primary-dark)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                height: '100vh',
                overflowY: 'auto',
                transition: 'transform var(--transition-base)',
                transform: isSidebarOpen ? 'translateX(0)' : 'translateX(0)',
                zIndex: 100
            }} className="sidebar">
                {/* Logo/Brand */}
                <div style={{
                    padding: 'var(--spacing-lg)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <Link to="/" style={{
                        color: 'white',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-sm)'
                    }}>
                        <span style={{ fontSize: '1.5rem' }}>🏢</span>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: 'var(--text-lg)' }}>
                                Espace Entreprise
                            </div>
                            <div style={{ fontSize: 'var(--text-xs)', opacity: 0.8 }}>
                                {companyName}
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav style={{ flex: 1, padding: 'var(--spacing-md) 0' }}>
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={index}
                                to={item.path}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--spacing-sm)',
                                    padding: 'var(--spacing-sm) var(--spacing-lg)',
                                    color: 'white',
                                    textDecoration: 'none',
                                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                    borderLeft: isActive ? '4px solid var(--color-accent)' : '4px solid transparent',
                                    transition: 'all var(--transition-fast)',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: isActive ? 600 : 400
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }
                                }}
                            >
                                <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout Button */}
                <div style={{
                    padding: 'var(--spacing-lg)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            width: '100%',
                            padding: 'var(--spacing-sm)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            cursor: 'pointer',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--spacing-sm)',
                            transition: 'background-color var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                    >
                        <span>🚪</span>
                        <span>Déconnexion</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div style={{
                flex: 1,
                marginLeft: '260px',
                display: 'flex',
                flexDirection: 'column'
            }} className="main-content">
                {/* Top Header */}
                <header style={{
                    backgroundColor: 'white',
                    padding: '0.75rem 1.5rem',
                    borderBottom: '1px solid var(--color-gray-200)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 50,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1.5rem',
                    }}>
                        <button
                            className="mobile-menu-toggle"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            style={{
                                display: 'none',
                                background: 'none',
                                border: '1px solid var(--color-gray-200)',
                                borderRadius: '8px',
                                width: '36px',
                                height: '36px',
                                cursor: 'pointer',
                                color: 'var(--color-primary)',
                                flexShrink: 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        </button>

                        {/* Logo + Title */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            flexShrink: 0,
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                flexShrink: 0,
                                border: '2px solid var(--color-gray-100)',
                            }}>
                                <img
                                    src="/logo1.png"
                                    alt="Lycée Professionnel Bartholdi"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <div>
                                <h1 style={{
                                    fontSize: 'var(--text-base)',
                                    fontWeight: 700,
                                    color: 'var(--color-gray-900)',
                                    margin: 0,
                                    lineHeight: 1.2,
                                }}>
                                    {menuItems.find(item => item.path === location.pathname)?.label || 'Espace Entreprise'}
                                </h1>
                                <p style={{
                                    fontSize: 'var(--text-xs)',
                                    color: 'var(--color-gray-500)',
                                    margin: 0,
                                    fontWeight: 500,
                                }}>
                                    {companyName} — Espace Entreprise
                                </p>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div style={{
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'center',
                            flexShrink: 0,
                        }} className="desktop-actions">
                            <button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '8px 14px',
                                    backgroundColor: 'var(--color-gray-50)',
                                    border: '1px solid var(--color-gray-200)',
                                    borderRadius: '8px',
                                    color: 'var(--color-gray-700)',
                                    fontSize: 'var(--text-xs)',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.15s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'; }}
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                Notifications
                                <span style={{
                                    backgroundColor: '#ef4444',
                                    color: 'white',
                                    fontSize: '10px',
                                    fontWeight: 700,
                                    padding: '1px 6px',
                                    borderRadius: '10px',
                                    lineHeight: '16px',
                                }}>2</span>
                            </button>
                            <button
                                onClick={handleLogout}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '8px 14px',
                                    backgroundColor: 'rgba(239,68,68,0.08)',
                                    border: '1px solid rgba(239,68,68,0.2)',
                                    borderRadius: '8px',
                                    color: '#ef4444',
                                    fontSize: 'var(--text-xs)',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.15s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.15)'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.08)'; }}
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 17L21 12L16 7M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                Déconnexion
                            </button>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main style={{
                    flex: 1,
                    padding: 'var(--spacing-xl)',
                    overflowY: 'auto'
                }}>
                    <Outlet />
                </main>
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="mobile-overlay"
                    onClick={() => setIsSidebarOpen(false)}
                    style={{
                        display: 'none',
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 99
                    }}
                />
            )}

            <style>{`
        @media (max-width: 968px) {
          .sidebar {
            transform: ${isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)'} !important;
          }
          .main-content {
            margin-left: 0 !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
          .mobile-overlay {
            display: block !important;
          }
        }
      `}</style>
        </div>
    );
};

export default EntrepriseLayout;
