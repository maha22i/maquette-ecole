import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const DirectionLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const menuItems = [
        { icon: '📊', label: 'Tableau de bord', path: '/admin/dashboard' },
        { icon: '👥', label: 'Utilisateurs', path: '/admin/utilisateurs' },
        { icon: '🏢', label: 'Entreprises', path: '/admin/entreprises' },
        { icon: '📝', label: 'Offres', path: '/admin/offres' },
        { icon: '📋', label: 'Candidatures', path: '/admin/candidatures' },
        { icon: '📄', label: 'Conventions', path: '/admin/conventions' },
        { icon: '📑', label: 'Rapports', path: '/admin/rapports' },
        { icon: '💬', label: 'Messagerie', path: '/admin/messagerie' },
        { icon: '📚', label: 'Documents', path: '/admin/documents' },
        { icon: '📈', label: 'Statistiques', path: '/admin/statistiques' },
        { icon: '⚙️', label: 'Paramètres', path: '/admin/parametres' },
        { icon: '📜', label: 'Logs', path: '/admin/logs' }
    ];

    const handleLogout = () => {
        console.log('Admin logout');
        navigate('/admin/login');
    };

    const currentPage = menuItems.find(item => item.path === location.pathname);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-gray-50)' }}>
            {/* Sidebar */}
            <aside style={{
                width: isSidebarOpen ? '280px' : '80px',
                backgroundColor: 'var(--color-primary-dark)',
                color: 'white',
                transition: 'width var(--transition-normal)',
                position: 'fixed',
                height: '100vh',
                overflowY: 'auto',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Header */}
                <div style={{
                    padding: 'var(--spacing-lg)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    {isSidebarOpen && (
                        <div>
                            <h2 style={{
                                fontSize: 'var(--text-xl)',
                                fontWeight: 800,
                                margin: 0,
                                marginBottom: 'var(--spacing-xs)',
                                color: '#ffffff',
                            }}>
                                🏛️ Administration
                            </h2>
                            <p style={{
                                fontSize: 'var(--text-xs)',
                                color: 'rgba(255,255,255,0.7)',
                                margin: 0
                            }}>
                                Lycée Bartholdi
                            </p>
                        </div>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            padding: 'var(--spacing-xs)'
                        }}
                    >
                        {isSidebarOpen ? '◀' : '▶'}
                    </button>
                </div>

                {/* Admin Info */}
                {isSidebarOpen && (
                    <div style={{
                        padding: 'var(--spacing-md)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem'
                            }}>
                                👨‍💼
                            </div>
                            <div>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                                    Mme. Proviseure
                                </p>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                                    Direction
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <nav style={{ flex: 1, padding: 'var(--spacing-md) 0', overflowY: 'auto' }}>
                    {menuItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            style={{
                                width: '100%',
                                padding: isSidebarOpen ? 'var(--spacing-md) var(--spacing-lg)' : 'var(--spacing-md)',
                                backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                border: 'none',
                                borderLeft: location.pathname === item.path ? '4px solid var(--color-accent)' : '4px solid transparent',
                                color: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--spacing-md)',
                                fontSize: 'var(--text-sm)',
                                fontWeight: location.pathname === item.path ? 700 : 400,
                                transition: 'all var(--transition-fast)',
                                textAlign: 'left',
                                justifyContent: isSidebarOpen ? 'flex-start' : 'center'
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
                            <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                            {isSidebarOpen && <span>{item.label}</span>}
                        </button>
                    ))}
                </nav>

                {/* Logout */}
                <div style={{
                    padding: 'var(--spacing-md)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            width: '100%',
                            padding: 'var(--spacing-md)',
                            backgroundColor: 'rgba(220, 38, 38, 0.2)',
                            border: '1px solid rgba(220, 38, 38, 0.3)',
                            borderRadius: 'var(--radius-md)',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: isSidebarOpen ? 'center' : 'center',
                            gap: 'var(--spacing-sm)'
                        }}
                    >
                        <span>🚪</span>
                        {isSidebarOpen && <span>Déconnexion</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{
                marginLeft: isSidebarOpen ? '280px' : '80px',
                flex: 1,
                transition: 'margin-left var(--transition-normal)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Header */}
                <header style={{
                    backgroundColor: 'white',
                    padding: '0.75rem 1.5rem',
                    borderBottom: '1px solid var(--color-gray-200)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1.5rem',
                    }}>
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
                                    {currentPage?.label || 'Administration'}
                                </h1>
                                <p style={{
                                    fontSize: 'var(--text-xs)',
                                    color: 'var(--color-gray-500)',
                                    margin: 0,
                                    fontWeight: 500,
                                }}>
                                    Lycée Bartholdi — Espace Direction
                                </p>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div style={{
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'center',
                            flexShrink: 0,
                        }}>
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
                                    position: 'relative',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'; }}
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                Alertes
                                <span style={{
                                    backgroundColor: '#ef4444',
                                    color: 'white',
                                    fontSize: '10px',
                                    fontWeight: 700,
                                    padding: '1px 6px',
                                    borderRadius: '10px',
                                    lineHeight: '16px',
                                }}>3</span>
                            </button>
                            <button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '8px 14px',
                                    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: 'white',
                                    fontSize: 'var(--text-xs)',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.15s',
                                    boxShadow: '0 2px 6px rgba(30,58,138,0.2)',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 10px rgba(30,58,138,0.3)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 6px rgba(30,58,138,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
                                Action rapide
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
                <div style={{
                    flex: 1,
                    padding: 'var(--spacing-xl)',
                    overflowY: 'auto'
                }}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DirectionLayout;
