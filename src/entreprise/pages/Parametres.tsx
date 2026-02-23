import { useState } from 'react';

const Parametres = () => {
    const [notifications, setNotifications] = useState({
        newApplications: true,
        conventionUpdates: true,
        reportSubmissions: true,
        messages: true
    });

    const [passwordData, setPasswordData] = useState({
        current: '',
        new: '',
        confirm: ''
    });

    const handleNotificationChange = (key: string) => {
        setNotifications({ ...notifications, [key]: !notifications[key as keyof typeof notifications] });
    };

    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordData.new !== passwordData.confirm) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        console.log('Password change requested');
        alert('Mot de passe modifié avec succès !');
        setPasswordData({ current: '', new: '', confirm: '' });
    };

    return (
        <div>
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Paramètres
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Gérez vos préférences et la sécurité de votre compte
                </p>
            </div>

            {/* Notifications */}
            <div className="card" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--color-primary-dark)'
                }}>
                    Notifications par email
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    {[
                        { key: 'newApplications', label: 'Nouvelles candidatures' },
                        { key: 'conventionUpdates', label: 'Mises à jour des conventions' },
                        { key: 'reportSubmissions', label: 'Dépôt de rapports' },
                        { key: 'messages', label: 'Nouveaux messages' }
                    ].map((item) => (
                        <label
                            key={item.key}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 'var(--spacing-md)',
                                backgroundColor: 'var(--color-gray-50)',
                                borderRadius: 'var(--radius-md)',
                                cursor: 'pointer'
                            }}
                        >
                            <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                {item.label}
                            </span>
                            <input
                                type="checkbox"
                                checked={notifications[item.key as keyof typeof notifications]}
                                onChange={() => handleNotificationChange(item.key)}
                                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Security */}
            <div className="card" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--color-primary-dark)'
                }}>
                    Sécurité
                </h3>

                <form onSubmit={handlePasswordChange}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', maxWidth: '500px' }}>
                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Mot de passe actuel
                            </label>
                            <input
                                type="password"
                                value={passwordData.current}
                                onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Nouveau mot de passe
                            </label>
                            <input
                                type="password"
                                value={passwordData.new}
                                onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Confirmer le nouveau mot de passe
                            </label>
                            <input
                                type="password"
                                value={passwordData.confirm}
                                onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                            Changer le mot de passe
                        </button>
                    </div>
                </form>
            </div>

            {/* Danger Zone */}
            <div className="card" style={{
                padding: 'var(--spacing-xl)',
                border: '2px solid var(--color-error)'
            }}>
                <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-md)',
                    color: 'var(--color-error)'
                }}>
                    Zone dangereuse
                </h3>
                <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-gray-600)',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    La suppression de votre compte est irréversible. Toutes vos données seront définitivement supprimées.
                </p>
                <button
                    type="button"
                    onClick={() => {
                        if (confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
                            console.log('Account deletion requested');
                            alert('Demande de suppression envoyée');
                        }
                    }}
                    style={{
                        padding: 'var(--spacing-sm) var(--spacing-md)',
                        backgroundColor: 'var(--color-error)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'opacity var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                    Supprimer mon compte
                </button>
            </div>
        </div>
    );
};

export default Parametres;
