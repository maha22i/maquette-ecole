import { useState } from 'react';

const UtilisateursList = () => {
    const [filter, setFilter] = useState<'all' | 'students' | 'companies' | 'parents' | 'admins'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState<any>(null);

    const users = [
        { id: 1, name: 'Marie Dupont', email: 'marie.dupont@lycee.ac-normandie.fr', type: 'student', class: 'Terminale Pro Commerce', status: 'active', lastLogin: '2024-02-14' },
        { id: 2, name: 'Tech Corp', email: 'contact@techcorp.fr', type: 'company', sector: 'Informatique', status: 'active', lastLogin: '2024-02-13' },
        { id: 3, name: 'M. Dupont', email: 'parent.dupont@gmail.com', type: 'parent', student: 'Marie Dupont', status: 'active', lastLogin: '2024-02-10' },
        { id: 4, name: 'Mme. Martin', email: 'martin@lycee.ac-normandie.fr', type: 'admin', role: 'Professeur', status: 'active', lastLogin: '2024-02-14' },
    ];

    const filteredUsers = users.filter(user => {
        if (filter !== 'all' && user.type !== filter.slice(0, -1)) return false;
        if (searchTerm && !user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !user.email.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });

    const getUserTypeLabel = (type: string) => {
        switch (type) {
            case 'student': return '👨‍🎓 Élève';
            case 'company': return '🏢 Entreprise';
            case 'parent': return '👨‍👩‍👧 Parent';
            case 'admin': return '👨‍💼 Admin';
            default: return type;
        }
    };

    const getUserTypeBadgeColor = (type: string) => {
        switch (type) {
            case 'student': return 'var(--color-primary)';
            case 'company': return 'var(--color-success)';
            case 'parent': return 'var(--color-accent)';
            case 'admin': return 'var(--color-error)';
            default: return 'var(--color-gray-600)';
        }
    };

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
                    Gestion des utilisateurs
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Gérez tous les comptes de la plateforme
                </p>
            </div>

            {/* Filters */}
            <div className="card" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', marginBottom: 'var(--spacing-md)' }}>
                    {[
                        { key: 'all', label: 'Tous', icon: '👥' },
                        { key: 'students', label: 'Élèves', icon: '👨‍🎓' },
                        { key: 'companies', label: 'Entreprises', icon: '🏢' },
                        { key: 'parents', label: 'Parents', icon: '👨‍👩‍👧' },
                        { key: 'admins', label: 'Admins', icon: '👨‍💼' }
                    ].map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setFilter(item.key as any)}
                            className={filter === item.key ? 'btn btn-primary' : 'btn btn-secondary'}
                            style={{ fontSize: 'var(--text-sm)' }}
                        >
                            {item.icon} {item.label}
                        </button>
                    ))}
                </div>

                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Rechercher par nom ou email..."
                    style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        border: '1px solid var(--color-gray-300)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--text-base)'
                    }}
                />
            </div>

            {/* Users Table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Nom
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Email
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Type
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Détails
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Statut
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Dernière connexion
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.id} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{ fontWeight: 600 }}>{user.name}</span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {user.email}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{
                                            padding: '4px 12px',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 600,
                                            backgroundColor: `${getUserTypeBadgeColor(user.type)}15`,
                                            color: getUserTypeBadgeColor(user.type)
                                        }}>
                                            {getUserTypeLabel(user.type)}
                                        </span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {user.type === 'student' && user.class}
                                        {user.type === 'company' && user.sector}
                                        {user.type === 'parent' && `Enfant: ${user.student}`}
                                        {user.type === 'admin' && user.role}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{
                                            padding: '4px 8px',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 600,
                                            backgroundColor: user.status === 'active' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(220, 38, 38, 0.1)',
                                            color: user.status === 'active' ? 'var(--color-success)' : 'var(--color-error)'
                                        }}>
                                            {user.status === 'active' ? '✓ Actif' : '✕ Suspendu'}
                                        </span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(user.lastLogin).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', justifyContent: 'center' }}>
                                            <button
                                                onClick={() => setSelectedUser(user)}
                                                className="btn btn-secondary"
                                                style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}
                                            >
                                                👁️ Voir
                                            </button>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                ✏️ Modifier
                                            </button>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                ⋮
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* User Detail Modal */}
            {selectedUser && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    padding: 'var(--spacing-xl)'
                }}>
                    <div className="card" style={{
                        maxWidth: '600px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        padding: 'var(--spacing-xl)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-lg)' }}>
                            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, margin: 0 }}>
                                Détails de l'utilisateur
                            </h3>
                            <button
                                onClick={() => setSelectedUser(null)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    color: 'var(--color-gray-600)'
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>Nom</p>
                            <p style={{ fontSize: 'var(--text-base)', fontWeight: 600, margin: 0 }}>{selectedUser.name}</p>
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>Email</p>
                            <p style={{ fontSize: 'var(--text-base)', fontWeight: 600, margin: 0 }}>{selectedUser.email}</p>
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>Type</p>
                            <p style={{ fontSize: 'var(--text-base)', fontWeight: 600, margin: 0 }}>{getUserTypeLabel(selectedUser.type)}</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>
                            <button className="btn btn-secondary">✏️ Modifier</button>
                            <button className="btn btn-secondary">🔄 Réinitialiser MDP</button>
                            <button className="btn btn-secondary">⏸️ Suspendre</button>
                            <button className="btn btn-secondary" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', color: 'var(--color-error)' }}>
                                🗑️ Supprimer
                            </button>
                            <button className="btn btn-secondary">📥 Export RGPD</button>
                            <button className="btn btn-primary">👁️ Voir profil complet</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UtilisateursList;
