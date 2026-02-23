const Dashboard = () => {
    // Mock data - in real app, fetch from API
    const stats = {
        activeOffers: 12,
        newApplications: 8,
        pendingConventions: 3,
        activeInterns: 5
    };

    const recentActivity = [
        { id: 1, type: 'application', message: 'Nouvelle candidature de Marie Dupont', time: 'Il y a 2h' },
        { id: 2, type: 'convention', message: 'Convention signée par Jean Martin', time: 'Il y a 5h' },
        { id: 3, type: 'offer', message: 'Offre "Développeur Web" publiée', time: 'Hier' },
        { id: 4, type: 'report', message: 'Rapport de stage soumis par Sophie Bernard', time: 'Il y a 2 jours' },
    ];

    return (
        <div>
            {/* Welcome Section */}
            <div style={{
                marginBottom: 'var(--spacing-xl)',
                padding: '2rem 2.5rem',
                background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 60%, #60a5fa 100%)',
                borderRadius: '16px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-20px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-40px',
                    right: '100px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{
                        fontSize: 'var(--text-3xl)',
                        fontWeight: 800,
                        marginBottom: '0.5rem',
                        color: '#ffffff',
                    }}>
                        Bienvenue sur votre tableau de bord
                    </h2>
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'rgba(255,255,255,0.85)',
                        margin: 0,
                    }}>
                        Gérez vos offres, candidatures et stagiaires en toute simplicité
                    </p>
                </div>
            </div>

            {/* Statistics Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)'
            }}>
                <div className="card" style={{
                    padding: 'var(--spacing-lg)',
                    borderLeft: '4px solid var(--color-accent)'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        <div>
                            <p style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-gray-600)',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                Offres actives
                            </p>
                            <p style={{
                                fontSize: 'var(--text-4xl)',
                                fontWeight: 800,
                                color: 'var(--color-primary-dark)',
                                margin: 0
                            }}>
                                {stats.activeOffers}
                            </p>
                        </div>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem'
                        }}>
                            📝
                        </div>
                    </div>
                    <p style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-success)',
                        margin: 0
                    }}>
                        ↗ +2 cette semaine
                    </p>
                </div>

                <div className="card" style={{
                    padding: 'var(--spacing-lg)',
                    borderLeft: '4px solid var(--color-success)'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        <div>
                            <p style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-gray-600)',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                Nouvelles candidatures
                            </p>
                            <p style={{
                                fontSize: 'var(--text-4xl)',
                                fontWeight: 800,
                                color: 'var(--color-primary-dark)',
                                margin: 0
                            }}>
                                {stats.newApplications}
                            </p>
                        </div>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem'
                        }}>
                            📥
                        </div>
                    </div>
                    <p style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-success)',
                        margin: 0
                    }}>
                        ↗ +5 aujourd'hui
                    </p>
                </div>

                <div className="card" style={{
                    padding: 'var(--spacing-lg)',
                    borderLeft: '4px solid var(--color-warning)'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        <div>
                            <p style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-gray-600)',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                Conventions en attente
                            </p>
                            <p style={{
                                fontSize: 'var(--text-4xl)',
                                fontWeight: 800,
                                color: 'var(--color-primary-dark)',
                                margin: 0
                            }}>
                                {stats.pendingConventions}
                            </p>
                        </div>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'rgba(251, 191, 36, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem'
                        }}>
                            📄
                        </div>
                    </div>
                    <p style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-warning)',
                        margin: 0
                    }}>
                        ⚠ Action requise
                    </p>
                </div>

                <div className="card" style={{
                    padding: 'var(--spacing-lg)',
                    borderLeft: '4px solid var(--color-primary)'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        <div>
                            <p style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-gray-600)',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                Stagiaires actifs
                            </p>
                            <p style={{
                                fontSize: 'var(--text-4xl)',
                                fontWeight: 800,
                                color: 'var(--color-primary-dark)',
                                margin: 0
                            }}>
                                {stats.activeInterns}
                            </p>
                        </div>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'rgba(30, 58, 138, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem'
                        }}>
                            👥
                        </div>
                    </div>
                    <p style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-gray-600)',
                        margin: 0
                    }}>
                        En cours de stage
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: 'var(--spacing-lg)'
            }}>
                {/* Quick Actions */}
                <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Actions rapides
                    </h3>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-sm)'
                    }}>
                        <button
                            className="btn btn-primary"
                            style={{
                                justifyContent: 'flex-start',
                                gap: 'var(--spacing-sm)'
                            }}
                            onClick={() => window.location.href = '/entreprise/offres/create'}
                        >
                            <span>➕</span>
                            <span>Publier une nouvelle offre</span>
                        </button>

                        <button
                            className="btn btn-secondary"
                            style={{
                                justifyContent: 'flex-start',
                                gap: 'var(--spacing-sm)'
                            }}
                            onClick={() => window.location.href = '/entreprise/candidatures'}
                        >
                            <span>📥</span>
                            <span>Voir les candidatures</span>
                        </button>

                        <button
                            className="btn btn-secondary"
                            style={{
                                justifyContent: 'flex-start',
                                gap: 'var(--spacing-sm)'
                            }}
                            onClick={() => window.location.href = '/entreprise/conventions'}
                        >
                            <span>📄</span>
                            <span>Gérer les conventions</span>
                        </button>

                        <button
                            className="btn btn-secondary"
                            style={{
                                justifyContent: 'flex-start',
                                gap: 'var(--spacing-sm)'
                            }}
                            onClick={() => window.location.href = '/entreprise/messagerie'}
                        >
                            <span>💬</span>
                            <span>Messagerie</span>
                        </button>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Activité récente
                    </h3>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-md)'
                    }}>
                        {recentActivity.map((activity) => (
                            <div
                                key={activity.id}
                                style={{
                                    display: 'flex',
                                    gap: 'var(--spacing-sm)',
                                    padding: 'var(--spacing-sm)',
                                    borderRadius: 'var(--radius-md)',
                                    backgroundColor: 'var(--color-gray-50)',
                                    transition: 'background-color var(--transition-fast)',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'}
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
                                    flexShrink: 0
                                }}>
                                    {activity.type === 'application' && '📥'}
                                    {activity.type === 'convention' && '📄'}
                                    {activity.type === 'offer' && '📝'}
                                    {activity.type === 'report' && '📋'}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{
                                        fontSize: 'var(--text-sm)',
                                        fontWeight: 600,
                                        color: 'var(--color-gray-900)',
                                        marginBottom: 'var(--spacing-xs)'
                                    }}>
                                        {activity.message}
                                    </p>
                                    <p style={{
                                        fontSize: 'var(--text-xs)',
                                        color: 'var(--color-gray-500)',
                                        margin: 0
                                    }}>
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div style={{
                marginTop: 'var(--spacing-xl)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: 'var(--spacing-lg)'
            }}>
                {/* Offer Views Chart */}
                <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Vues des offres (7 derniers jours)
                    </h3>

                    <div style={{
                        height: '200px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: 'var(--spacing-sm)',
                        padding: 'var(--spacing-md) 0'
                    }}>
                        {[45, 52, 38, 65, 72, 58, 80].map((value, index) => (
                            <div
                                key={index}
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 'var(--spacing-xs)'
                                }}
                            >
                                <div style={{
                                    width: '100%',
                                    height: `${value}%`,
                                    backgroundColor: 'var(--color-accent)',
                                    borderRadius: 'var(--radius-sm)',
                                    transition: 'all var(--transition-base)',
                                    cursor: 'pointer'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
                                ></div>
                                <span style={{
                                    fontSize: 'var(--text-xs)',
                                    color: 'var(--color-gray-600)'
                                }}>
                                    J-{6 - index}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Application Rate */}
                <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Taux de réponse
                    </h3>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '200px',
                        position: 'relative'
                    }}>
                        <div style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            background: `conic-gradient(var(--color-success) 0% 68%, var(--color-gray-200) 68% 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                width: '140px',
                                height: '140px',
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{
                                    fontSize: 'var(--text-4xl)',
                                    fontWeight: 800,
                                    color: 'var(--color-primary-dark)'
                                }}>
                                    68%
                                </span>
                                <span style={{
                                    fontSize: 'var(--text-sm)',
                                    color: 'var(--color-gray-600)'
                                }}>
                                    de réponses
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
