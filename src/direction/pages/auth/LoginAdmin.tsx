import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        otpCode: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const demoCredentials = {
        email: 'direction@lycee.ac-normandie.fr',
        password: 'admin123',
        otpCode: '123456'
    };

    const fillDemoCredentials = () => {
        setFormData({ ...formData, email: demoCredentials.email, password: demoCredentials.password });
        setErrors({});
    };

    const fillDemoOTP = () => {
        setFormData({ ...formData, otpCode: demoCredentials.otpCode });
        setErrors({});
    };

    const handleCredentialsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};
        if (!formData.email) newErrors.email = 'Email requis';
        else if (!formData.email.endsWith('@lycee.ac-normandie.fr')) newErrors.email = 'Email académique requis';
        if (!formData.password) newErrors.password = 'Mot de passe requis';

        if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep('otp');
            setErrors({});
        }, 600);
    };

    const handleOTPSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.otpCode || formData.otpCode.length !== 6) {
            setErrors({ otpCode: 'Code OTP invalide (6 chiffres requis)' });
            return;
        }
        setIsLoading(true);
        console.log('Admin login with 2FA:', formData);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/admin/dashboard');
        }, 800);
    };

    const accentColor = '#7c3aed';
    const accentLight = '#a78bfa';
    const accentGradient = `linear-gradient(135deg, ${accentColor} 0%, ${accentLight} 100%)`;

    return (
        <div style={{ minHeight: '100vh', display: 'flex', fontFamily: 'var(--font-primary)' }}>
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
                        onMouseEnter={e => (e.currentTarget.style.color = accentColor)}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-500)')}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Retour à l'accueil
                    </Link>

                    {/* Header */}
                    <div style={{ marginBottom: '1.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                background: accentGradient,
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h1 style={{
                                fontSize: '1.75rem',
                                fontWeight: 800,
                                color: 'var(--color-gray-900)',
                                margin: 0,
                                letterSpacing: '-0.025em',
                            }}>
                                Administration
                            </h1>
                        </div>
                        <p style={{
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-gray-500)',
                            margin: 0,
                            paddingLeft: '56px',
                        }}>
                            {step === 'credentials' ? 'Connexion sécurisée' : 'Vérification à deux facteurs'}
                        </p>
                    </div>

                    {/* Step Indicator */}
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        marginBottom: '1.75rem',
                    }}>
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                        }}>
                            <div style={{
                                height: '4px',
                                borderRadius: '4px',
                                background: accentGradient,
                                transition: 'all 0.3s',
                            }} />
                            <span style={{ fontSize: '11px', fontWeight: 600, color: accentColor }}>Identifiants</span>
                        </div>
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                        }}>
                            <div style={{
                                height: '4px',
                                borderRadius: '4px',
                                background: step === 'otp' ? accentGradient : 'var(--color-gray-200)',
                                transition: 'all 0.3s',
                            }} />
                            <span style={{ fontSize: '11px', fontWeight: 600, color: step === 'otp' ? accentColor : 'var(--color-gray-400)' }}>Vérification 2FA</span>
                        </div>
                    </div>

                    {/* STEP 1: Credentials */}
                    {step === 'credentials' && (
                        <>
                            {/* Demo Banner */}
                            <div style={{
                                padding: '14px 16px',
                                background: `linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(167,139,250,0.08) 100%)`,
                                borderRadius: '12px',
                                border: `1px solid rgba(124,58,237,0.15)`,
                                marginBottom: '1.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '12px',
                            }}>
                                <div>
                                    <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: accentColor, margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Identifiants de démo
                                    </p>
                                    <p style={{ fontSize: '11px', color: 'var(--color-gray-500)', margin: 0, lineHeight: 1.5 }}>
                                        {demoCredentials.email}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={fillDemoCredentials}
                                    style={{
                                        padding: '8px 16px',
                                        background: accentGradient,
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.2s',
                                        boxShadow: `0 2px 8px rgba(124,58,237,0.3)`,
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 4px 12px rgba(124,58,237,0.4)`; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 2px 8px rgba(124,58,237,0.3)`; e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    Remplir
                                </button>
                            </div>

                            <form onSubmit={handleCredentialsSubmit}>
                                {/* Email */}
                                <div style={{ marginBottom: '1.25rem' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: 'var(--color-gray-700)', fontSize: 'var(--text-sm)' }}>
                                        Email académique
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gray-400)', display: 'flex', alignItems: 'center' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: '' }); }}
                                            style={{
                                                width: '100%', padding: '12px 14px 12px 44px',
                                                border: `2px solid ${errors.email ? 'var(--color-error)' : 'var(--color-gray-200)'}`,
                                                borderRadius: '10px', fontSize: 'var(--text-base)', outline: 'none',
                                                transition: 'border-color 0.2s, box-shadow 0.2s',
                                                backgroundColor: 'var(--color-gray-50)', boxSizing: 'border-box',
                                            }}
                                            placeholder="direction@lycee.ac-normandie.fr"
                                            onFocus={e => { e.target.style.borderColor = accentLight; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)'; e.target.style.backgroundColor = '#fff'; }}
                                            onBlur={e => { e.target.style.borderColor = errors.email ? 'var(--color-error)' : 'var(--color-gray-200)'; e.target.style.boxShadow = 'none'; e.target.style.backgroundColor = 'var(--color-gray-50)'; }}
                                        />
                                    </div>
                                    {errors.email && (
                                        <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-xs)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px', fontWeight: 500 }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                            {errors.email}
                                        </span>
                                    )}
                                </div>

                                {/* Password */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: 'var(--color-gray-700)', fontSize: 'var(--text-sm)' }}>
                                        Mot de passe
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gray-400)', display: 'flex', alignItems: 'center' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                                                <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={formData.password}
                                            onChange={(e) => { setFormData({ ...formData, password: e.target.value }); if (errors.password) setErrors({ ...errors, password: '' }); }}
                                            style={{
                                                width: '100%', padding: '12px 48px 12px 44px',
                                                border: `2px solid ${errors.password ? 'var(--color-error)' : 'var(--color-gray-200)'}`,
                                                borderRadius: '10px', fontSize: 'var(--text-base)', outline: 'none',
                                                transition: 'border-color 0.2s, box-shadow 0.2s',
                                                backgroundColor: 'var(--color-gray-50)', boxSizing: 'border-box',
                                            }}
                                            placeholder="••••••••"
                                            onFocus={e => { e.target.style.borderColor = accentLight; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)'; e.target.style.backgroundColor = '#fff'; }}
                                            onBlur={e => { e.target.style.borderColor = errors.password ? 'var(--color-error)' : 'var(--color-gray-200)'; e.target.style.boxShadow = 'none'; e.target.style.backgroundColor = 'var(--color-gray-50)'; }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-gray-400)', padding: '2px', display: 'flex', alignItems: 'center' }}
                                        >
                                            {showPassword ? (
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0112 20C7 20 2.73 16.11 1 12a16.36 16.36 0 014.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c5 0 9.27 3.89 11 8a16.39 16.39 0 01-2.16 3.19M14.12 14.12A3 3 0 119.88 9.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                            ) : (
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" /></svg>
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-xs)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px', fontWeight: 500 }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                            {errors.password}
                                        </span>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    style={{
                                        width: '100%', padding: '13px 24px',
                                        background: isLoading ? 'var(--color-gray-400)' : accentGradient,
                                        color: '#fff', border: 'none', borderRadius: '10px',
                                        fontSize: 'var(--text-base)', fontWeight: 700,
                                        cursor: isLoading ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: isLoading ? 'none' : '0 4px 14px rgba(124,58,237,0.3)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    }}
                                    onMouseEnter={e => { if (!isLoading) { e.currentTarget.style.boxShadow = '0 6px 20px rgba(124,58,237,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
                                    onMouseLeave={e => { if (!isLoading) { e.currentTarget.style.boxShadow = '0 4px 14px rgba(124,58,237,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; } }}
                                >
                                    {isLoading ? (
                                        <>
                                            <svg width="20" height="20" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" /><path d="M12 2a10 10 0 019.95 9" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" /></svg>
                                            Vérification...
                                        </>
                                    ) : (
                                        <>
                                            Continuer
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </>
                    )}

                    {/* STEP 2: OTP */}
                    {step === 'otp' && (
                        <>
                            {/* OTP Info */}
                            <div style={{
                                padding: '16px',
                                background: 'var(--color-gray-50)',
                                borderRadius: '12px',
                                border: '1px solid var(--color-gray-200)',
                                marginBottom: '1.5rem',
                                textAlign: 'center',
                            }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 8px', display: 'block' }}>
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke={accentLight} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 6L12 13L2 6" stroke={accentLight} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0, lineHeight: 1.5 }}>
                                    Un code de vérification a été envoyé à<br />
                                    <strong style={{ color: 'var(--color-gray-800)' }}>{formData.email}</strong>
                                </p>
                            </div>

                            {/* Demo OTP Banner */}
                            <div style={{
                                padding: '14px 16px',
                                background: `linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(167,139,250,0.08) 100%)`,
                                borderRadius: '12px',
                                border: `1px solid rgba(124,58,237,0.15)`,
                                marginBottom: '1.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '12px',
                            }}>
                                <div>
                                    <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: accentColor, margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Code OTP de démo
                                    </p>
                                    <p style={{ fontSize: '13px', color: 'var(--color-gray-600)', margin: 0, fontWeight: 600, fontFamily: 'monospace', letterSpacing: '0.15em' }}>
                                        {demoCredentials.otpCode}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={fillDemoOTP}
                                    style={{
                                        padding: '8px 16px', background: accentGradient, color: '#fff',
                                        border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600,
                                        cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s',
                                        boxShadow: `0 2px 8px rgba(124,58,237,0.3)`,
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 4px 12px rgba(124,58,237,0.4)`; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 2px 8px rgba(124,58,237,0.3)`; e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    Remplir
                                </button>
                            </div>

                            <form onSubmit={handleOTPSubmit}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--color-gray-700)', fontSize: 'var(--text-sm)', textAlign: 'center' }}>
                                        Code de vérification (6 chiffres)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.otpCode}
                                        onChange={(e) => { setFormData({ ...formData, otpCode: e.target.value.replace(/\D/g, '').slice(0, 6) }); if (errors.otpCode) setErrors({}); }}
                                        style={{
                                            width: '100%', padding: '16px',
                                            border: `2px solid ${errors.otpCode ? 'var(--color-error)' : 'var(--color-gray-200)'}`,
                                            borderRadius: '12px', fontSize: '2rem', textAlign: 'center',
                                            letterSpacing: '0.5em', fontWeight: 700, outline: 'none',
                                            transition: 'border-color 0.2s, box-shadow 0.2s',
                                            backgroundColor: 'var(--color-gray-50)', boxSizing: 'border-box',
                                            fontFamily: 'monospace',
                                        }}
                                        placeholder="000000"
                                        maxLength={6}
                                        autoFocus
                                        onFocus={e => { e.target.style.borderColor = accentLight; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)'; e.target.style.backgroundColor = '#fff'; }}
                                        onBlur={e => { e.target.style.borderColor = errors.otpCode ? 'var(--color-error)' : 'var(--color-gray-200)'; e.target.style.boxShadow = 'none'; e.target.style.backgroundColor = 'var(--color-gray-50)'; }}
                                    />
                                    {errors.otpCode && (
                                        <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-xs)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginTop: '8px', fontWeight: 500 }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                            {errors.otpCode}
                                        </span>
                                    )}
                                </div>

                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button
                                        type="button"
                                        onClick={() => { setStep('credentials'); setErrors({}); }}
                                        style={{
                                            flex: 1, padding: '13px 16px',
                                            backgroundColor: 'transparent', color: 'var(--color-gray-600)',
                                            border: '2px solid var(--color-gray-200)', borderRadius: '10px',
                                            fontSize: 'var(--text-sm)', fontWeight: 600, cursor: 'pointer',
                                            transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-gray-400)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-gray-200)'; }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        Retour
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        style={{
                                            flex: 2, padding: '13px 24px',
                                            background: isLoading ? 'var(--color-gray-400)' : accentGradient,
                                            color: '#fff', border: 'none', borderRadius: '10px',
                                            fontSize: 'var(--text-base)', fontWeight: 700,
                                            cursor: isLoading ? 'not-allowed' : 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: isLoading ? 'none' : '0 4px 14px rgba(124,58,237,0.3)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                        }}
                                        onMouseEnter={e => { if (!isLoading) { e.currentTarget.style.boxShadow = '0 6px 20px rgba(124,58,237,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
                                        onMouseLeave={e => { if (!isLoading) { e.currentTarget.style.boxShadow = '0 4px 14px rgba(124,58,237,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; } }}
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg width="20" height="20" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" /><path d="M12 2a10 10 0 019.95 9" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" /></svg>
                                                Connexion...
                                            </>
                                        ) : (
                                            <>
                                                Se connecter
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                                    <button
                                        type="button"
                                        style={{
                                            background: 'none', border: 'none', color: accentColor,
                                            fontSize: 'var(--text-sm)', fontWeight: 600, cursor: 'pointer',
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.color = accentLight)}
                                        onMouseLeave={e => (e.currentTarget.style.color = accentColor)}
                                    >
                                        Renvoyer le code
                                    </button>
                                </div>
                            </form>
                        </>
                    )}

                    {/* Security Footer */}
                    <div style={{
                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px',
                        flexWrap: 'wrap',
                    }}>
                        {[
                            { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>, text: '2FA' },
                            { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M7 11V7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>, text: 'Chiffré' },
                            { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>, text: 'Journalisé' },
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-gray-400)', fontSize: '11px', fontWeight: 500 }}>
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
                background: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 40%, #7c3aed 100%)',
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
                    opacity: 0.05,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485-1.414 1.415L32 0z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }} />

                <div style={{ position: 'absolute', top: '10%', left: '15%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', filter: 'blur(50px)' }} />
                <div style={{ position: 'absolute', bottom: '15%', right: '10%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', filter: 'blur(60px)' }} />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '480px' }}>
                    {/* Illustration */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <svg width="280" height="220" viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Central Shield */}
                            <g transform="translate(100, 30)">
                                <path d="M40 0L80 15V45C80 70 60 90 40 100C20 90 0 70 0 45V15L40 0Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
                                <path d="M40 10L70 22V45C70 65 55 80 40 88C25 80 10 65 10 45V22L40 10Z" fill="rgba(255,255,255,0.05)" />
                                <path d="M28 48L36 56L54 38" stroke="rgba(167,139,250,0.8)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>

                            {/* Dashboard Cards */}
                            <g transform="translate(15, 70)">
                                <rect width="65" height="45" rx="6" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                <rect x="8" y="8" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
                                <rect x="8" y="16" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
                                <rect x="8" y="28" width="20" height="10" rx="2" fill="rgba(167,139,250,0.3)" />
                                <rect x="32" y="28" width="20" height="10" rx="2" fill="rgba(255,255,255,0.08)" />
                            </g>

                            <g transform="translate(200, 70)">
                                <rect width="65" height="45" rx="6" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                <circle cx="20" cy="22" r="12" fill="none" stroke="rgba(167,139,250,0.4)" strokeWidth="3" strokeDasharray="20 55.7" />
                                <circle cx="20" cy="22" r="12" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                <rect x="38" y="14" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
                                <rect x="38" y="22" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
                                <rect x="38" y="30" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
                            </g>

                            {/* Connection Lines from shield to cards */}
                            <path d="M100 80 Q 85 75 80 85" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                            <path d="M180 80 Q 195 75 200 85" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />

                            {/* Users row */}
                            <g transform="translate(60, 145)">
                                <rect width="160" height="40" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                                {[0, 1, 2, 3].map(i => (
                                    <g key={i} transform={`translate(${15 + i * 38}, 10)`}>
                                        <circle cx="10" cy="7" r="7" fill={i === 0 ? 'rgba(167,139,250,0.4)' : 'rgba(255,255,255,0.12)'} />
                                        <rect x="2" y="18" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
                                    </g>
                                ))}
                            </g>

                            {/* Key icon */}
                            <g transform="translate(20, 150)">
                                <circle cx="12" cy="12" r="12" fill="rgba(251,191,36,0.15)" />
                                <circle cx="12" cy="10" r="4" fill="none" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5" />
                                <path d="M12 14V20M10 18H14" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                            </g>

                            {/* Lock icon */}
                            <g transform="translate(240, 145)">
                                <circle cx="12" cy="12" r="12" fill="rgba(52,211,153,0.15)" />
                                <rect x="7" y="11" width="10" height="8" rx="1.5" fill="none" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" />
                                <path d="M9 11V8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8V11" fill="none" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                            </g>

                            {/* Sparkles */}
                            <g fill="rgba(255,255,255,0.25)">
                                <circle cx="25" cy="45" r="2" />
                                <circle cx="255" cy="55" r="1.5" />
                                <circle cx="50" cy="130" r="1.5" />
                                <circle cx="240" cy="130" r="2" />
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
                        Pilotez votre<br />établissement
                    </h2>

                    <p style={{
                        fontSize: 'var(--text-base)',
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.6,
                        marginBottom: '2.5rem',
                    }}>
                        Supervisez l'ensemble des stages, validez les conventions et accédez aux statistiques depuis votre tableau de bord sécurisé.
                    </p>

                    {/* Feature Pills */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        justifyContent: 'center',
                    }}>
                        {[
                            { icon: '📊', label: 'Statistiques' },
                            { icon: '✅', label: 'Validation conventions' },
                            { icon: '👥', label: 'Gestion utilisateurs' },
                            { icon: '🔐', label: 'Sécurité renforcée' },
                        ].map((feature, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '8px 14px',
                                backgroundColor: 'rgba(255,255,255,0.08)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.12)',
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

                    {/* Security Highlight */}
                    <div style={{
                        marginTop: '2.5rem',
                        padding: '20px',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '10px',
                                background: 'rgba(167,139,250,0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="rgba(167,139,250,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: '2px' }}>
                                    Authentification à deux facteurs
                                </div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>
                                    Votre accès est protégé par un code de vérification unique envoyé à chaque connexion.
                                </div>
                            </div>
                        </div>
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
                    .login-right-panel {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default LoginAdmin;
