import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginEleve = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const demoCredentials = {
        email: 'marie.dupont@lycee.ac-normandie.fr',
        password: 'demo123'
    };

    const fillDemoCredentials = () => {
        setFormData({
            ...formData,
            email: demoCredentials.email,
            password: demoCredentials.password
        });
        setErrors({});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};

        if (!formData.email) {
            newErrors.email = 'Email requis';
        } else if (!formData.email.endsWith('@lycee.ac-normandie.fr')) {
            newErrors.email = 'Email académique requis';
        }

        if (!formData.password) {
            newErrors.password = 'Mot de passe requis';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);
        console.log('Student login:', formData);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/eleve/dashboard');
        }, 800);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            fontFamily: 'var(--font-primary)',
        }}>
            {/* Left Side - Visual Panel */}
            <div className="login-left-panel" style={{
                flex: '1 1 50%',
                background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.06,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                {/* Floating Shapes */}
                <div style={{
                    position: 'absolute',
                    top: '8%',
                    right: '10%',
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    filter: 'blur(40px)',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '280px',
                    height: '280px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.04)',
                    filter: 'blur(60px)',
                }} />

                {/* Content */}
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    maxWidth: '480px',
                }}>
                    {/* Illustration */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <svg width="280" height="220" viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Desk */}
                            <rect x="60" y="130" width="160" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
                            <rect x="75" y="138" width="8" height="50" rx="2" fill="rgba(255,255,255,0.15)" />
                            <rect x="197" y="138" width="8" height="50" rx="2" fill="rgba(255,255,255,0.15)" />

                            {/* Laptop */}
                            <rect x="95" y="90" width="90" height="40" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                            <rect x="102" y="97" width="76" height="26" rx="2" fill="rgba(255,255,255,0.08)" />
                            {/* Screen content */}
                            <rect x="108" y="102" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
                            <rect x="108" y="108" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
                            <rect x="108" y="114" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
                            {/* Laptop base */}
                            <path d="M85 130H195L190 126H90L85 130Z" fill="rgba(255,255,255,0.18)" />

                            {/* Student figure */}
                            <g transform="translate(120, 40)">
                                <circle cx="20" cy="12" r="14" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                {/* Hair */}
                                <path d="M8 8C8 8 12 0 20 0C28 0 32 8 32 8" stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none" />
                                {/* Body */}
                                <path d="M4 55C4 42 10 35 20 35C30 35 36 42 36 55" stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="rgba(255,255,255,0.1)" />
                                {/* Arms on desk */}
                                <path d="M4 55L-15 40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M36 55L55 40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
                            </g>

                            {/* Books stack */}
                            <g transform="translate(35, 108)">
                                <rect x="0" y="0" width="30" height="7" rx="1" fill="rgba(251,191,36,0.35)" />
                                <rect x="2" y="7" width="28" height="7" rx="1" fill="rgba(96,165,250,0.3)" />
                                <rect x="1" y="14" width="30" height="7" rx="1" fill="rgba(248,113,113,0.3)" />
                            </g>

                            {/* Coffee mug */}
                            <g transform="translate(210, 110)">
                                <rect x="0" y="5" width="16" height="18" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                                <path d="M16 10C20 10 22 13 22 16C22 19 20 22 16 22" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
                                {/* Steam */}
                                <path d="M5 3C5 0 8 0 8 3" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                                <path d="M10 1C10 -2 13 -2 13 1" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                            </g>

                            {/* Graduation cap floating */}
                            <g transform="translate(190, 25)">
                                <path d="M20 15L0 25L20 35L40 25L20 15Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                                <path d="M10 25V35L20 40L30 35V25" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="rgba(255,255,255,0.08)" />
                                <line x1="35" y1="25" x2="35" y2="38" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                                <circle cx="35" cy="39" r="2" fill="rgba(251,191,36,0.5)" />
                            </g>

                            {/* Lightbulb idea */}
                            <g transform="translate(30, 30)">
                                <circle cx="15" cy="15" r="12" fill="rgba(251,191,36,0.2)" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5" />
                                <path d="M11 20V23H19V20" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5" fill="none" />
                                <path d="M15 8V12M11 10L13 12M19 10L17 12" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                            </g>

                            {/* Stars / sparkles */}
                            <g fill="rgba(255,255,255,0.3)">
                                <circle cx="250" cy="60" r="2" />
                                <circle cx="260" cy="90" r="1.5" />
                                <circle cx="20" cy="80" r="1.5" />
                                <circle cx="55" cy="60" r="2" />
                            </g>

                            {/* Ground line */}
                            <line x1="30" y1="188" x2="250" y2="188" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>

                    <h2 style={{
                        fontSize: '1.75rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '1rem',
                        lineHeight: 1.3,
                        letterSpacing: '-0.02em',
                    }}>
                        Votre parcours de stage<br />commence ici
                    </h2>

                    <p style={{
                        fontSize: 'var(--text-base)',
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.6,
                        marginBottom: '2.5rem',
                    }}>
                        Trouvez votre stage idéal, suivez vos candidatures et gérez vos conventions depuis votre espace personnel.
                    </p>

                    {/* Feature Pills */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        justifyContent: 'center',
                    }}>
                        {[
                            { icon: '🔍', label: 'Recherche de stages' },
                            { icon: '📄', label: 'Conventions en ligne' },
                            { icon: '📈', label: 'Suivi candidatures' },
                            { icon: '🎯', label: 'Offres personnalisées' },
                        ].map((feature, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '8px 14px',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: 'rgba(255,255,255,0.9)',
                                fontSize: '13px',
                                fontWeight: 500,
                                backdropFilter: 'blur(10px)',
                            }}>
                                <span style={{ fontSize: '14px' }}>{feature.icon}</span>
                                {feature.label}
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div style={{
                        marginTop: '2.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                    }}>
                        {[
                            { value: '350+', label: 'Offres actives' },
                            { value: '98%', label: 'Taux de placement' },
                            { value: '120+', label: 'Entreprises' },
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    color: '#ffffff',
                                    lineHeight: 1,
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{
                                    fontSize: '11px',
                                    color: 'rgba(255,255,255,0.6)',
                                    marginTop: '4px',
                                    fontWeight: 500,
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div style={{
                flex: '1 1 50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '3rem',
                backgroundColor: '#ffffff',
                overflowY: 'auto',
            }}>
                <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto' }}>
                    <Link to="/" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '2.5rem',
                        color: 'var(--color-gray-500)',
                        textDecoration: 'none',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 500,
                        transition: 'color 0.2s',
                    }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#059669')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-500)')}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Retour à l'accueil
                    </Link>

                    {/* Header */}
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '0.5rem',
                        }}>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                background: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 3L1 9L12 15L23 9L12 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 9V17L12 23L23 17V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h1 style={{
                                fontSize: '1.75rem',
                                fontWeight: 800,
                                color: 'var(--color-gray-900)',
                                margin: 0,
                                letterSpacing: '-0.025em',
                            }}>
                                Espace Élève
                            </h1>
                        </div>
                        <p style={{
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-gray-500)',
                            margin: 0,
                            paddingLeft: '56px',
                        }}>
                            Connectez-vous à votre compte
                        </p>
                    </div>

                    {/* Demo Banner */}
                    <div style={{
                        padding: '14px 16px',
                        background: 'linear-gradient(135deg, rgba(5,150,105,0.06) 0%, rgba(52,211,153,0.08) 100%)',
                        borderRadius: '12px',
                        border: '1px solid rgba(5,150,105,0.15)',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                        <div>
                            <p style={{
                                fontSize: 'var(--text-xs)',
                                fontWeight: 700,
                                color: '#059669',
                                margin: '0 0 4px 0',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}>
                                Identifiants de démo
                            </p>
                            <p style={{
                                fontSize: '11px',
                                color: 'var(--color-gray-500)',
                                margin: 0,
                                lineHeight: 1.5,
                            }}>
                                {demoCredentials.email}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={fillDemoCredentials}
                            style={{
                                padding: '8px 16px',
                                background: 'linear-gradient(135deg, #059669, #10b981)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '12px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s',
                                boxShadow: '0 2px 8px rgba(5,150,105,0.3)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(5,150,105,0.4)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(5,150,105,0.3)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Remplir
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Email */}
                        <div style={{ marginBottom: '1.25rem' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '6px',
                                fontWeight: 600,
                                color: 'var(--color-gray-700)',
                                fontSize: 'var(--text-sm)',
                            }}>
                                Email académique
                            </label>
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '14px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--color-gray-400)',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value });
                                        if (errors.email) setErrors({ ...errors, email: '' });
                                    }}
                                    style={{
                                        width: '100%',
                                        padding: '12px 14px 12px 44px',
                                        border: `2px solid ${errors.email ? 'var(--color-error)' : 'var(--color-gray-200)'}`,
                                        borderRadius: '10px',
                                        fontSize: 'var(--text-base)',
                                        outline: 'none',
                                        transition: 'border-color 0.2s, box-shadow 0.2s',
                                        backgroundColor: 'var(--color-gray-50)',
                                        boxSizing: 'border-box',
                                    }}
                                    placeholder="prenom.nom@lycee.ac-normandie.fr"
                                    onFocus={e => {
                                        e.target.style.borderColor = '#10b981';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)';
                                        e.target.style.backgroundColor = '#fff';
                                    }}
                                    onBlur={e => {
                                        e.target.style.borderColor = errors.email ? 'var(--color-error)' : 'var(--color-gray-200)';
                                        e.target.style.boxShadow = 'none';
                                        e.target.style.backgroundColor = 'var(--color-gray-50)';
                                    }}
                                />
                            </div>
                            {errors.email && (
                                <span style={{
                                    color: 'var(--color-error)',
                                    fontSize: 'var(--text-xs)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    marginTop: '6px',
                                    fontWeight: 500,
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        {/* Password */}
                        <div style={{ marginBottom: '1.25rem' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '6px',
                            }}>
                                <label style={{
                                    fontWeight: 600,
                                    color: 'var(--color-gray-700)',
                                    fontSize: 'var(--text-sm)',
                                }}>
                                    Mot de passe
                                </label>
                                <Link
                                    to="/eleve/forgot-password"
                                    style={{
                                        fontSize: 'var(--text-xs)',
                                        color: '#10b981',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = '#059669')}
                                    onMouseLeave={e => (e.currentTarget.style.color = '#10b981')}
                                >
                                    Mot de passe oublié ?
                                </Link>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '14px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--color-gray-400)',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => {
                                        setFormData({ ...formData, password: e.target.value });
                                        if (errors.password) setErrors({ ...errors, password: '' });
                                    }}
                                    style={{
                                        width: '100%',
                                        padding: '12px 48px 12px 44px',
                                        border: `2px solid ${errors.password ? 'var(--color-error)' : 'var(--color-gray-200)'}`,
                                        borderRadius: '10px',
                                        fontSize: 'var(--text-base)',
                                        outline: 'none',
                                        transition: 'border-color 0.2s, box-shadow 0.2s',
                                        backgroundColor: 'var(--color-gray-50)',
                                        boxSizing: 'border-box',
                                    }}
                                    placeholder="••••••••"
                                    onFocus={e => {
                                        e.target.style.borderColor = '#10b981';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)';
                                        e.target.style.backgroundColor = '#fff';
                                    }}
                                    onBlur={e => {
                                        e.target.style.borderColor = errors.password ? 'var(--color-error)' : 'var(--color-gray-200)';
                                        e.target.style.boxShadow = 'none';
                                        e.target.style.backgroundColor = 'var(--color-gray-50)';
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '14px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'var(--color-gray-400)',
                                        padding: '2px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    {showPassword ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M17.94 17.94A10.07 10.07 0 0112 20C7 20 2.73 16.11 1 12a16.36 16.36 0 014.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c5 0 9.27 3.89 11 8a16.39 16.39 0 01-2.16 3.19M14.12 14.12A3 3 0 119.88 9.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    ) : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <span style={{
                                    color: 'var(--color-error)',
                                    fontSize: 'var(--text-xs)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    marginTop: '6px',
                                    fontWeight: 500,
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    {errors.password}
                                </span>
                            )}
                        </div>

                        {/* Remember me */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '1.5rem',
                        }}>
                            <label style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                cursor: 'pointer',
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-gray-600)',
                                userSelect: 'none',
                            }}>
                                <input
                                    type="checkbox"
                                    checked={formData.rememberMe}
                                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                    style={{
                                        width: '18px',
                                        height: '18px',
                                        accentColor: '#059669',
                                        cursor: 'pointer',
                                        margin: 0,
                                    }}
                                />
                                Se souvenir de moi
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            style={{
                                width: '100%',
                                padding: '13px 24px',
                                background: isLoading
                                    ? 'var(--color-gray-400)'
                                    : 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '10px',
                                fontSize: 'var(--text-base)',
                                fontWeight: 700,
                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: isLoading ? 'none' : '0 4px 14px rgba(5,150,105,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                letterSpacing: '0.01em',
                            }}
                            onMouseEnter={e => {
                                if (!isLoading) {
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(5,150,105,0.4)';
                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                }
                            }}
                            onMouseLeave={e => {
                                if (!isLoading) {
                                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(5,150,105,0.3)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }
                            }}
                        >
                            {isLoading ? (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}>
                                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
                                        <path d="M12 2a10 10 0 019.95 9" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                                    </svg>
                                    Connexion en cours...
                                </>
                            ) : (
                                <>
                                    Se connecter
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </>
                            )}
                        </button>

                        {/* Divider */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            margin: '1.5rem 0',
                        }}>
                            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-gray-200)' }} />
                            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)', fontWeight: 500 }}>OU</span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-gray-200)' }} />
                        </div>

                        {/* Create Account */}
                        <Link
                            to="/eleve/signup"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                width: '100%',
                                padding: '12px 24px',
                                backgroundColor: 'transparent',
                                color: '#059669',
                                border: '2px solid var(--color-gray-200)',
                                borderRadius: '10px',
                                fontSize: 'var(--text-sm)',
                                fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                boxSizing: 'border-box',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = '#10b981';
                                e.currentTarget.style.backgroundColor = 'rgba(16,185,129,0.04)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                <path d="M20 8V14M17 11H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            Créer un compte élève
                        </Link>
                    </form>

                    {/* Security Footer */}
                    <div style={{
                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px',
                        flexWrap: 'wrap',
                    }}>
                        {[
                            { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>, text: 'Sécurisé' },
                            { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" /></svg>, text: 'France' },
                            { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>, text: 'RGPD' },
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                color: 'var(--color-gray-400)',
                                fontSize: '11px',
                                fontWeight: 500,
                            }}>
                                {item.icon}
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animations & Responsive */}
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 900px) {
                    .login-left-panel {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default LoginEleve;
