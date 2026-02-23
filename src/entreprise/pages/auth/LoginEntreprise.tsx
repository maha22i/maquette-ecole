import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginEntreprise = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: 'contact@entreprise.fr',
        password: 'password123',
        rememberMe: false
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};

        if (!formData.email) {
            newErrors.email = 'Email requis';
        }
        if (!formData.password) {
            newErrors.password = 'Mot de passe requis';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);
        console.log('Login attempt:', formData);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/entreprise/dashboard');
        }, 800);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            fontFamily: 'var(--font-primary)',
        }}>
            {/* Left Side - Form */}
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
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-500)')}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Retour à l'accueil
                    </Link>

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
                                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 21H21M4 18H20V8L12 3L4 8V18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 18V12H15V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h1 style={{
                                fontSize: '1.75rem',
                                fontWeight: 800,
                                color: 'var(--color-gray-900)',
                                margin: 0,
                                letterSpacing: '-0.025em',
                            }}>
                                Espace Entreprise
                            </h1>
                        </div>
                        <p style={{
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-gray-500)',
                            margin: 0,
                            paddingLeft: '56px',
                        }}>
                            Connectez-vous pour gérer vos stages
                        </p>
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
                                Email professionnel
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
                                    placeholder="contact@entreprise.fr"
                                    onFocus={e => {
                                        e.target.style.borderColor = 'var(--color-primary-light)';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)';
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
                                    to="/entreprise/forgot-password"
                                    style={{
                                        fontSize: 'var(--text-xs)',
                                        color: 'var(--color-primary-light)',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-primary-light)')}
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
                                        e.target.style.borderColor = 'var(--color-primary-light)';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)';
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
                                <div style={{
                                    position: 'relative',
                                    width: '18px',
                                    height: '18px',
                                }}>
                                    <input
                                        type="checkbox"
                                        checked={formData.rememberMe}
                                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                        style={{
                                            width: '18px',
                                            height: '18px',
                                            accentColor: 'var(--color-primary)',
                                            cursor: 'pointer',
                                            margin: 0,
                                        }}
                                    />
                                </div>
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
                                    : 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '10px',
                                fontSize: 'var(--text-base)',
                                fontWeight: 700,
                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: isLoading ? 'none' : '0 4px 14px rgba(30,58,138,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                letterSpacing: '0.01em',
                            }}
                            onMouseEnter={e => {
                                if (!isLoading) {
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,58,138,0.4)';
                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                }
                            }}
                            onMouseLeave={e => {
                                if (!isLoading) {
                                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(30,58,138,0.3)';
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
                            to="/entreprise/signup"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                width: '100%',
                                padding: '12px 24px',
                                backgroundColor: 'transparent',
                                color: 'var(--color-primary)',
                                border: '2px solid var(--color-gray-200)',
                                borderRadius: '10px',
                                fontSize: 'var(--text-sm)',
                                fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                boxSizing: 'border-box',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                                e.currentTarget.style.backgroundColor = 'rgba(59,130,246,0.04)';
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
                            Créer un compte entreprise
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
                            { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>, text: 'HTTPS' },
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

            {/* Right Side - Visual Panel */}
            <div className="login-right-panel" style={{
                flex: '1 1 50%',
                background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%)',
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                {/* Floating Shapes */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    filter: 'blur(40px)',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
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
                            {/* Building */}
                            <rect x="80" y="50" width="120" height="140" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                            <rect x="90" y="60" width="100" height="20" rx="3" fill="rgba(255,255,255,0.1)" />

                            {/* Windows */}
                            {[0, 1, 2].map(row =>
                                [0, 1, 2, 3].map(col => (
                                    <rect
                                        key={`${row}-${col}`}
                                        x={95 + col * 25}
                                        y={90 + row * 35}
                                        width="18"
                                        height="22"
                                        rx="2"
                                        fill={row === 0 && col === 1 ? 'rgba(251,191,36,0.6)' : row === 1 && col === 3 ? 'rgba(251,191,36,0.4)' : row === 2 && col === 0 ? 'rgba(251,191,36,0.5)' : 'rgba(255,255,255,0.12)'}
                                    />
                                ))
                            )}

                            {/* Door */}
                            <rect x="125" y="165" width="30" height="25" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                            <circle cx="150" cy="178" r="2" fill="rgba(255,255,255,0.5)" />

                            {/* Ground */}
                            <line x1="30" y1="190" x2="250" y2="190" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />

                            {/* People */}
                            <g transform="translate(40, 160)">
                                <circle cx="10" cy="8" r="6" fill="rgba(255,255,255,0.3)" />
                                <path d="M2 30C2 24 6 20 10 20C14 20 18 24 18 30" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
                            </g>
                            <g transform="translate(210, 155)">
                                <circle cx="10" cy="8" r="6" fill="rgba(255,255,255,0.25)" />
                                <path d="M2 30C2 24 6 20 10 20C14 20 18 24 18 30" stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none" />
                                <rect x="18" y="14" width="16" height="12" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                            </g>

                            {/* Connection Lines */}
                            <path d="M60 170 Q 70 140 90 130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                            <path d="M220 168 Q 210 140 200 130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />

                            {/* Cloud/Digital Element */}
                            <g transform="translate(100, 15)">
                                <rect width="80" height="30" rx="6" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                                <circle cx="20" cy="15" r="4" fill="rgba(96,165,250,0.5)" />
                                <rect x="30" y="11" width="35" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
                                <rect x="30" y="18" width="25" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
                            </g>

                            {/* Checkmark Badge */}
                            <g transform="translate(195, 55)">
                                <circle cx="15" cy="15" r="15" fill="rgba(16,185,129,0.3)" />
                                <path d="M9 15L13 19L21 11" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </g>
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
                        Gérez vos stages<br />en toute simplicité
                    </h2>

                    <p style={{
                        fontSize: 'var(--text-base)',
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.6,
                        marginBottom: '2.5rem',
                    }}>
                        Publiez vos offres, suivez les candidatures et collaborez avec les établissements scolaires depuis un seul espace.
                    </p>

                    {/* Feature Pills */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        justifyContent: 'center',
                    }}>
                        {[
                            { icon: '📋', label: 'Publication d\'offres' },
                            { icon: '👥', label: 'Suivi candidatures' },
                            { icon: '📊', label: 'Tableaux de bord' },
                            { icon: '💬', label: 'Messagerie intégrée' },
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

                    {/* Testimonial */}
                    <div style={{
                        marginTop: '2.5rem',
                        padding: '20px',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                    }}>
                        <p style={{
                            fontSize: 'var(--text-sm)',
                            color: 'rgba(255,255,255,0.8)',
                            fontStyle: 'italic',
                            lineHeight: 1.6,
                            margin: '0 0 12px 0',
                        }}>
                            "La plateforme nous a permis de simplifier considérablement le recrutement de nos stagiaires. Un gain de temps énorme !"
                        </p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: 'rgba(255,255,255,0.8)',
                            }}>
                                ML
                            </div>
                            <div>
                                <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                                    Marie Laurent
                                </div>
                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
                                    DRH — Normandie Tech
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spin animation */}
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 900px) {
                    .login-right-panel {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default LoginEntreprise;
