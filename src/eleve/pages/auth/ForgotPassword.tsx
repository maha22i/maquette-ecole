import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setError('Email requis');
            return;
        }

        if (!email.endsWith('@lycee.ac-normandie.fr')) {
            setError('Email académique requis');
            return;
        }

        // In real app, send reset email
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
                padding: 'var(--spacing-xl)'
            }}>
                <div className="card" style={{
                    maxWidth: '450px',
                    width: '100%',
                    padding: 'var(--spacing-xl)',
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-success)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto var(--spacing-lg)',
                        fontSize: '2.5rem'
                    }}>
                        ✓
                    </div>

                    <h2 style={{
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        Email envoyé !
                    </h2>

                    <p style={{
                        color: 'var(--color-gray-600)',
                        marginBottom: 'var(--spacing-xl)'
                    }}>
                        Un lien de réinitialisation a été envoyé à <strong>{email}</strong>.
                        Vérifiez votre boîte de réception et suivez les instructions.
                    </p>

                    <button
                        onClick={() => navigate('/eleve/login')}
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                    >
                        Retour à la connexion
                    </button>
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
            padding: 'var(--spacing-xl)'
        }}>
            <div className="card" style={{
                maxWidth: '450px',
                width: '100%',
                padding: 'var(--spacing-xl)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto var(--spacing-md)',
                        fontSize: '2rem'
                    }}>
                        🔑
                    </div>

                    <h1 style={{
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        Mot de passe oublié ?
                    </h1>

                    <p style={{ color: 'var(--color-gray-600)' }}>
                        Entrez votre email académique pour recevoir un lien de réinitialisation
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: 'var(--spacing-xs)',
                            fontWeight: 600,
                            fontSize: 'var(--text-sm)'
                        }}>
                            Email académique
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError('');
                            }}
                            style={{
                                width: '100%',
                                padding: 'var(--spacing-sm)',
                                border: `1px solid ${error ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--text-base)'
                            }}
                            placeholder="prenom.nom@lycee.ac-normandie.fr"
                        />
                        {error && (
                            <span style={{
                                color: 'var(--color-error)',
                                fontSize: 'var(--text-sm)',
                                marginTop: 'var(--spacing-xs)',
                                display: 'block'
                            }}>
                                {error}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}
                    >
                        Envoyer le lien
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate('/eleve/login')}
                        className="btn btn-secondary"
                        style={{ width: '100%' }}
                    >
                        Retour à la connexion
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
