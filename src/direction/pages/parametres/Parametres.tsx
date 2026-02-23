const Parametres = () => {
    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Paramètres système
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Configuration de la plateforme
                </p>
            </div>

            <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
                {/* Email Settings */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                        📧 Paramètres Email (SMTP)
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Serveur SMTP
                            </label>
                            <input
                                type="text"
                                defaultValue="smtp.ac-normandie.fr"
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-sm)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Port
                            </label>
                            <input
                                type="number"
                                defaultValue="587"
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-sm)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Email expéditeur
                            </label>
                            <input
                                type="email"
                                defaultValue="noreply@lycee.ac-normandie.fr"
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-sm)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Nom expéditeur
                            </label>
                            <input
                                type="text"
                                defaultValue="Lycée Bartholdi - Stages"
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-sm)'
                                }}
                            />
                        </div>
                    </div>

                    <button className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>
                        💾 Enregistrer les paramètres
                    </button>
                </div>

                {/* Sections Management */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                        🎓 Sections / Classes
                    </h3>

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        {['Commerce', 'Vente', 'Gestion-Administration', 'Accueil'].map((section) => (
                            <div
                                key={section}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: 'var(--color-gray-50)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-sm)'
                                }}
                            >
                                <span style={{ fontWeight: 600 }}>{section}</span>
                                <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                                    <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                        ✏️ Modifier
                                    </button>
                                    <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                        🗑️ Supprimer
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-primary">
                        ➕ Ajouter une section
                    </button>
                </div>

                {/* Report Deadlines */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                        📅 Dates limites des rapports
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Date limite soumission
                            </label>
                            <input
                                type="date"
                                defaultValue="2024-06-30"
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-sm)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Délai de relance (jours)
                            </label>
                            <input
                                type="number"
                                defaultValue="7"
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-sm)'
                                }}
                            />
                        </div>
                    </div>

                    <button className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>
                        💾 Enregistrer
                    </button>
                </div>

                {/* Role Management */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                        👥 Gestion des rôles (RBAC)
                    </h3>

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        {[
                            { role: 'Super Admin', permissions: 'Accès complet' },
                            { role: 'Directeur', permissions: 'Gestion complète' },
                            { role: 'Professeur', permissions: 'Évaluation rapports' },
                            { role: 'Secrétariat', permissions: 'Gestion conventions' }
                        ].map((item) => (
                            <div
                                key={item.role}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: 'var(--color-gray-50)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-sm)'
                                }}
                            >
                                <div>
                                    <span style={{ fontWeight: 600, display: 'block' }}>{item.role}</span>
                                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)' }}>{item.permissions}</span>
                                </div>
                                <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                    ⚙️ Configurer
                                </button>
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-primary">
                        ➕ Ajouter un rôle
                    </button>
                </div>

                {/* Backup */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                        💾 Sauvegardes
                    </h3>

                    <div style={{
                        padding: 'var(--spacing-lg)',
                        backgroundColor: 'var(--color-gray-50)',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--spacing-sm)' }}>
                            <strong>Dernière sauvegarde automatique :</strong> 14/02/2024 à 03:00
                        </p>
                        <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>
                            <strong>Prochaine sauvegarde :</strong> 15/02/2024 à 03:00
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                        <button className="btn btn-primary">
                            💾 Sauvegarde manuelle
                        </button>
                        <button className="btn btn-secondary">
                            📥 Restaurer une sauvegarde
                        </button>
                    </div>
                </div>

                {/* Security */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                        🔒 Sécurité
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
                            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                                2FA obligatoire pour les administrateurs
                            </span>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
                            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                                Journalisation complète des actions
                            </span>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
                            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                                Chiffrement des données sensibles
                            </span>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                                Restriction d'accès par IP
                            </span>
                        </label>
                    </div>

                    <button className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
                        💾 Enregistrer les paramètres
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Parametres;
