import { useState } from 'react';

interface Candidature {
    id: number;
    offre: string;
    entreprise: string;
    type: string;
    dateCandidature: string;
    statut: 'pending' | 'viewed' | 'accepted' | 'rejected';
}

const CandidaturesList = () => {
    const [filter, setFilter] = useState<'all' | 'pending' | 'viewed' | 'accepted' | 'rejected'>('all');

    const candidatures: Candidature[] = [
        {
            id: 1,
            offre: 'Développeur Web Junior',
            entreprise: 'Tech Corp',
            type: 'Stage',
            dateCandidature: '2024-02-10',
            statut: 'viewed'
        },
        {
            id: 2,
            offre: 'Assistant Marketing',
            entreprise: 'Marketing Pro',
            type: 'Alternance',
            dateCandidature: '2024-02-12',
            statut: 'pending'
        },
        {
            id: 3,
            offre: 'Technicien Maintenance',
            entreprise: 'Indust SA',
            type: 'Stage',
            dateCandidature: '2024-02-08',
            statut: 'accepted'
        },
        {
            id: 4,
            offre: 'Commercial B2B',
            entreprise: 'Sales Inc',
            type: 'Stage',
            dateCandidature: '2024-02-05',
            statut: 'rejected'
        },
    ];

    const filteredCandidatures = candidatures.filter(c => filter === 'all' || c.statut === filter);

    const getStatusBadge = (statut: string) => {
        const styles = {
            pending: { bg: 'rgba(251, 191, 36, 0.1)', color: 'var(--color-warning)', text: '⏳ En attente', icon: '⏳' },
            viewed: { bg: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-accent)', text: '👁️ Vue', icon: '👁️' },
            accepted: { bg: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-success)', text: '✓ Acceptée', icon: '✓' },
            rejected: { bg: 'rgba(239, 68, 68, 0.1)', color: 'var(--color-error)', text: '✗ Refusée', icon: '✗' }
        };
        const style = styles[statut as keyof typeof styles];

        return (
            <span style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                backgroundColor: style.bg,
                color: style.color
            }}>
                {style.text}
            </span>
        );
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
                    Mes candidatures
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Suivez l'état de vos candidatures
                </p>
            </div>

            {/* Filters */}
            <div className="card" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
                    {[
                        { value: 'all', label: 'Toutes', count: candidatures.length },
                        { value: 'pending', label: 'En attente', count: candidatures.filter(c => c.statut === 'pending').length },
                        { value: 'viewed', label: 'Vues', count: candidatures.filter(c => c.statut === 'viewed').length },
                        { value: 'accepted', label: 'Acceptées', count: candidatures.filter(c => c.statut === 'accepted').length },
                        { value: 'rejected', label: 'Refusées', count: candidatures.filter(c => c.statut === 'rejected').length }
                    ].map((btn) => (
                        <button
                            key={btn.value}
                            onClick={() => setFilter(btn.value as any)}
                            style={{
                                padding: 'var(--spacing-sm) var(--spacing-md)',
                                border: 'none',
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--text-sm)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                backgroundColor: filter === btn.value ? 'var(--color-primary)' : 'var(--color-gray-100)',
                                color: filter === btn.value ? 'white' : 'var(--color-gray-700)',
                                transition: 'all var(--transition-fast)'
                            }}
                        >
                            {btn.label} ({btn.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Offre</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Entreprise</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Type</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Date</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Statut</th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'right', fontSize: 'var(--text-sm)', fontWeight: 700 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCandidatures.map((candidature) => (
                                <tr
                                    key={candidature.id}
                                    style={{ borderBottom: '1px solid var(--color-gray-200)', transition: 'background-color var(--transition-fast)' }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <td style={{ padding: 'var(--spacing-md)', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                                        {candidature.offre}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {candidature.entreprise}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {candidature.type}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(candidature.dateCandidature).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        {getStatusBadge(candidature.statut)}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', justifyContent: 'flex-end' }}>
                                            <button className="btn btn-secondary" style={{ padding: 'var(--spacing-xs) var(--spacing-sm)', fontSize: 'var(--text-sm)' }}>
                                                👁️ Détails
                                            </button>
                                            {candidature.statut === 'accepted' && (
                                                <button className="btn btn-primary" style={{ padding: 'var(--spacing-xs) var(--spacing-sm)', fontSize: 'var(--text-sm)' }}>
                                                    💬 Message
                                                </button>
                                            )}
                                            {(candidature.statut === 'pending' || candidature.statut === 'viewed') && (
                                                <button
                                                    className="btn btn-secondary"
                                                    style={{
                                                        padding: 'var(--spacing-xs) var(--spacing-sm)',
                                                        fontSize: 'var(--text-sm)',
                                                        color: 'var(--color-error)',
                                                        borderColor: 'var(--color-error)'
                                                    }}
                                                >
                                                    🗑️ Retirer
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredCandidatures.length === 0 && (
                    <div style={{
                        padding: 'var(--spacing-xl)',
                        textAlign: 'center',
                        color: 'var(--color-gray-500)'
                    }}>
                        <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-sm)' }}>
                            Aucune candidature dans cette catégorie
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CandidaturesList;
