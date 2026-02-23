import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setError('Email requis');
            return;
        }

        // In real app, send reset email via API
        console.log('Password reset requested for:', email);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div style={{
                minHeight: '100vh',
                backgroundColor: 'var(--color-gray-50)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--spacing-md)'
            }}>
                <div style={{ width: '100%', maxWidth: '450px', textAlign: 'center' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        margin: '0 auto var(--spacing-lg)',
                        backgroundColor: 'var(--color-success)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem'
                    }}>
                        ✉️
                    </div>

                    <h1 style={{
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        Email envoyé !
                    </h1>

                    <p style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-gray-600)',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        Un email de réinitialisation a été envoyé à <strong>{email}</strong>.
                        Vérifiez votre boîte de réception et suivez les instructions.
                    </p>

                    <Link
                        to="/entreprise/login"
                        className="btn btn-primary"
                        style={{ display: 'inline-block' }}
                    >
                        Retour à la connexion
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'var(--color-gray-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-md)'
        }}>
            <div style={{ width: '100%', maxWidth: '450px' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <Link to="/entreprise/login" style={{
                        display: 'inline-block',
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--color-primary)',
                        textDecoration: 'none',
                        fontSize: 'var(--text-sm)'
                    }}>
                        ← Retour à la connexion
                    </Link>

                    <div style={{
                        width: '80px',
                        height: '80px',
                        margin: '0 auto var(--spacing-md)',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem'
                    }}>
                        🔑
                    </div>

                    <h1 style={{
                        fontSize: 'var(--text-3xl)',
                        fontWeight: 800,
                        color: 'var(--color-primary-dark)',
                        marginBottom: 'var(--spacing-xs)'
                    }}>
                        Mot de passe oublié
                    </h1>
                    <p style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-gray-600)'
                    }}>
                        Entrez votre email pour recevoir un lien de réinitialisation
                    </p>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                color: 'var(--color-gray-700)',
                                fontSize: 'var(--text-sm)'
                            }}>
                                Email professionnel
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: `1px solid ${error ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-base)'
                                }}
                                placeholder="contact@entreprise.fr"
                            />
                            {error && (
                                <span style={{
                                    color: 'var(--color-error)',
                                    fontSize: 'var(--text-sm)',
                                    display: 'block',
                                    marginTop: 'var(--spacing-xs)'
                                }}>
                                    {error}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                        >
                            Envoyer le lien de réinitialisation
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
