import { useState } from 'react';

const ConventionsGestion = () => {
    const [filter, setFilter] = useState<'all' | 'draft' | 'inprogress' | 'signed' | 'expired' | 'cancelled'>('all');

    const conventions = [
        {
            id: 1,
            student: 'Marie Dupont',
            company: 'Tech Corp',
            startDate: '2024-03-01',
            endDate: '2024-05-31',
            status: 'inprogress',
            signatures: {
                student: true,
                parent: true,
                company: true,
                school: false
            },
            daysRemaining: 15
        },
        {
            id: 2,
            student: 'Pierre Martin',
            company: 'Digital Services',
            startDate: '2024-03-15',
            endDate: '2024-06-15',
            status: 'inprogress',
            signatures: {
                student: true,
                parent: false,
                company: true,
                school: false
            },
            daysRemaining: 8
        },
        {
            id: 3,
            student: 'Sophie Bernard',
            company: 'Innovation Lab',
            startDate: '2024-02-01',
            endDate: '2024-04-30',
            status: 'signed',
            signatures: {
                student: true,
                parent: true,
                company: true,
                school: true
            },
            daysRemaining: null
        }
    ];

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'draft': return 'Brouillon';
            case 'inprogress': return 'En cours';
            case 'signed': return 'Signée';
            case 'expired': return 'Expirée';
            case 'cancelled': return 'Annulée';
            default: return status;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'draft': return 'var(--color-gray-600)';
            case 'inprogress': return 'var(--color-warning)';
            case 'signed': return 'var(--color-success)';
            case 'expired': return 'var(--color-error)';
            case 'cancelled': return 'var(--color-error)';
            default: return 'var(--color-gray-600)';
        }
    };

    const filteredConventions = conventions.filter(conv => {
        if (filter === 'all') return true;
        return conv.status === filter;
    });

    const signAsSchool = (conventionId: number) => {
        console.log('Signing convention as school:', conventionId);
        alert('Convention signée par l\'école');
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
                    Gestion des conventions
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Supervisez et validez toutes les conventions de stage
                </p>
            </div>

            {/* Filters */}
            <div className="card" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                    {[
                        { key: 'all', label: 'Toutes', count: conventions.length },
                        { key: 'inprogress', label: 'En cours', count: conventions.filter(c => c.status === 'inprogress').length },
                        { key: 'signed', label: 'Signées', count: conventions.filter(c => c.status === 'signed').length },
                        { key: 'draft', label: 'Brouillons', count: 0 },
                        { key: 'expired', label: 'Expirées', count: 0 },
                        { key: 'cancelled', label: 'Annulées', count: 0 }
                    ].map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setFilter(item.key as any)}
                            className={filter === item.key ? 'btn btn-primary' : 'btn btn-secondary'}
                            style={{ fontSize: 'var(--text-sm)' }}
                        >
                            {item.label} ({item.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Conventions Table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Élève
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Entreprise
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Période
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Statut
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Signatures
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Temps restant
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredConventions.map((convention) => (
                                <tr key={convention.id} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{ fontWeight: 600 }}>{convention.student}</span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {convention.company}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(convention.startDate).toLocaleDateString('fr-FR')} - {new Date(convention.endDate).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{
                                            padding: '4px 12px',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 600,
                                            backgroundColor: `${getStatusColor(convention.status)}15`,
                                            color: getStatusColor(convention.status)
                                        }}>
                                            {getStatusLabel(convention.status)}
                                        </span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            {Object.entries(convention.signatures).map(([key, signed]) => (
                                                <div
                                                    key={key}
                                                    title={key}
                                                    style={{
                                                        width: '24px',
                                                        height: '24px',
                                                        borderRadius: '50%',
                                                        backgroundColor: signed ? 'var(--color-success)' : 'var(--color-gray-300)',
                                                        color: 'white',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: 'var(--text-xs)',
                                                        fontWeight: 700
                                                    }}
                                                >
                                                    {signed ? '✓' : '○'}
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)' }}>
                                        {convention.daysRemaining !== null ? (
                                            <span style={{
                                                color: convention.daysRemaining < 10 ? 'var(--color-error)' : 'var(--color-gray-600)',
                                                fontWeight: convention.daysRemaining < 10 ? 700 : 400
                                            }}>
                                                {convention.daysRemaining} jours
                                            </span>
                                        ) : (
                                            <span style={{ color: 'var(--color-gray-400)' }}>-</span>
                                        )}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', justifyContent: 'center', flexWrap: 'wrap' }}>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                📄 PDF
                                            </button>
                                            {!convention.signatures.school && convention.status === 'inprogress' && (
                                                <button
                                                    onClick={() => signAsSchool(convention.id)}
                                                    className="btn btn-primary"
                                                    style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}
                                                >
                                                    ✍️ Signer
                                                </button>
                                            )}
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
        </div>
    );
};

export default ConventionsGestion;
