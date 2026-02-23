import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const EleveLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Mock student data - in real app, get from auth context
    const studentData = {
        nom: 'Dupont',
        prenom: 'Marie',
        classe: 'Terminale Pro'
    };

    const menuItems = [
        { path: '/eleve/dashboard', label: 'Tableau de bord', icon: '🏠' },
        { path: '/eleve/offres', label: 'Rechercher des offres', icon: '🔍' },
        { path: '/eleve/candidatures', label: 'Mes candidatures', icon: '📝' },
        { path: '/eleve/conventions', label: 'Mes conventions', icon: '📄' },
        { path: '/eleve/stage', label: 'Mon stage en cours', icon: '💼' },
        { path: '/eleve/rapport', label: 'Mon rapport', icon: '📋' },
        { path: '/eleve/messagerie', label: 'Messages', icon: '💬' },
        { path: '/eleve/profil', label: 'Mon profil', icon: '👤' },
        { path: '/eleve/ressources', label: 'Ressources', icon: '📚' }
    ];

    const handleLogout = () => {
        // In real app, clear auth token
        navigate('/eleve/login');
    };

    const getPageTitle = () => {
        const currentItem = menuItems.find(item => item.path === location.pathname);
        return currentItem ? currentItem.label : 'Espace Élève';
    };

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: 'var(--color-gray-50)'
        }}>
            {/* Sidebar */}
            <aside style={{
                width: isSidebarOpen ? '280px' : '0',
                backgroundColor: 'var(--color-primary-dark)',
                color: 'white',
                position: 'fixed',
                height: '100vh',
                overflowY: 'auto',
                transition: 'width var(--transition-base)',
                zIndex: 100
            }}>
                <div style={{
                    padding: 'var(--spacing-xl) var(--spacing-lg)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 'var(--text-xl)',
                            fontWeight: 700
                        }}>
                            {studentData.prenom[0]}{studentData.nom[0]}
                        </div>
                        <div>
                            <h3 style={{
                                margin: 0,
                                fontSize: 'var(--text-lg)',
                                fontWeight: 700,
                                color: '#ffffff',
                            }}>
                                {studentData.prenom} {studentData.nom}
                            </h3>
                            <p style={{
                                margin: 0,
                                fontSize: 'var(--text-sm)',
                                color: 'rgba(255,255,255,0.7)',
                            }}>
                                {studentData.classe}
                            </p>
                        </div>
                    </div>
                </div>

                <nav style={{ padding: 'var(--spacing-md) 0' }}>
                    {menuItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            style={{
                                width: '100%',
                                padding: 'var(--spacing-md) var(--spacing-lg)',
                                border: 'none',
                                backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                color: 'white',
                                textAlign: 'left',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--spacing-md)',
                                fontSize: 'var(--text-base)',
                                fontWeight: location.pathname === item.path ? 600 : 400,
                                transition: 'all var(--transition-fast)',
                                borderLeft: location.pathname === item.path ? '4px solid var(--color-accent)' : '4px solid transparent'
                            }}
                            onMouseEnter={(e) => {
                                if (location.pathname !== item.path) {
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (location.pathname !== item.path) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div style={{
                    padding: 'var(--spacing-lg)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    marginTop: 'auto'
                }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            width: '100%',
                            padding: 'var(--spacing-sm)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'transparent',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            transition: 'all var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        🚪 Déconnexion
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div style={{
                flex: 1,
                marginLeft: isSidebarOpen ? '280px' : '0',
                transition: 'margin-left var(--transition-base)'
            }}>
                {/* Header */}
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
                        {/* Left: toggle + logo + title */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            flexShrink: 0,
                        }}>
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                style={{
                                    background: 'rgba(5,150,105,0.06)',
                                    border: '1px solid rgba(5,150,105,0.15)',
                                    borderRadius: '8px',
                                    width: '36px', height: '36px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#059669',
                                    transition: 'all 0.15s',
                                    flexShrink: 0,
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(5,150,105,0.12)'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(5,150,105,0.06)'}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                            </button>
                            <div style={{
                                width: '48px', height: '48px',
                                borderRadius: '10px', overflow: 'hidden', flexShrink: 0,
                                border: '2px solid var(--color-gray-100)',
                            }}>
                                <img
                                    src="/logo1.png"
                                    alt="Lycée Professionnel Bartholdi"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <h1 style={{
                                    fontSize: 'var(--text-base)', fontWeight: 700,
                                    color: 'var(--color-gray-900)', margin: 0, lineHeight: 1.2,
                                }}>
                                    {getPageTitle()}
                                </h1>
                                <p style={{
                                    fontSize: 'var(--text-xs)', color: 'var(--color-gray-500)',
                                    margin: 0, fontWeight: 500,
                                }}>
                                    {studentData.prenom} {studentData.nom} — {studentData.classe}
                                </p>
                            </div>
                        </div>

                        {/* Right: actions */}
                        <div style={{
                            display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0,
                        }}>
                            <button
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    padding: '8px 14px',
                                    backgroundColor: 'var(--color-gray-50)', border: '1px solid var(--color-gray-200)',
                                    borderRadius: '8px', color: 'var(--color-gray-700)',
                                    fontSize: 'var(--text-xs)', fontWeight: 600,
                                    cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'}
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21 15C21 15.53 20.79 16.04 20.41 16.41C20.04 16.79 19.53 17 19 17H7L3 21V5C3 4.47 3.21 3.96 3.59 3.59C3.96 3.21 4.47 3 5 3H19C19.53 3 20.04 3.21 20.41 3.59C20.79 3.96 21 4.47 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                Messages
                                <span style={{
                                    backgroundColor: '#059669', color: 'white',
                                    fontSize: '10px', fontWeight: 700,
                                    padding: '1px 6px', borderRadius: '10px', lineHeight: '16px',
                                }}>2</span>
                            </button>
                            <button
                                onClick={handleLogout}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    padding: '8px 14px',
                                    backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                                    borderRadius: '8px', color: '#ef4444',
                                    fontSize: 'var(--text-xs)', fontWeight: 600,
                                    cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.15)'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.08)'}
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 17L21 12L16 7M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                Déconnexion
                            </button>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main style={{
                    padding: 'var(--spacing-xl)',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    <Outlet />
                </main>
            </div>

            {/* Responsive Styles */}
            <style>{`
        @media (max-width: 768px) {
          aside {
            width: ${isSidebarOpen ? '280px' : '0'} !important;
          }
          main {
            margin-left: 0 !important;
          }
        }
      `}</style>
        </div>
    );
};

export default EleveLayout;
