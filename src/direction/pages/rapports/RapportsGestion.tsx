import { useState } from 'react';

const RapportsGestion = () => {
    const [filter, setFilter] = useState<'all' | 'pending' | 'evaluated' | 'validated'>('all');

    const reports = [
        {
            id: 1,
            student: 'Marie Dupont',
            company: 'Tech Corp',
            submittedDate: '2024-02-10',
            status: 'evaluated',
            grade: 16,
            evaluator: 'Mme. Martin',
            comments: 'Excellent travail, bien structuré'
        },
        {
            id: 2,
            student: 'Pierre Martin',
            company: 'Digital Services',
            submittedDate: '2024-02-12',
            status: 'pending',
            grade: null,
            evaluator: null,
            comments: null
        },
        {
            id: 3,
            student: 'Sophie Bernard',
            company: 'Innovation Lab',
            submittedDate: '2024-02-08',
            status: 'validated',
            grade: 18,
            evaluator: 'M. Dubois',
            comments: 'Très bon rapport, analyse approfondie'
        }
    ];

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'pending': return 'En attente';
            case 'evaluated': return 'Évalué';
            case 'validated': return 'Validé';
            default: return status;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'var(--color-warning)';
            case 'evaluated': return 'var(--color-accent)';
            case 'validated': return 'var(--color-success)';
            default: return 'var(--color-gray-600)';
        }
    };

    const filteredReports = reports.filter(report => {
        if (filter === 'all') return true;
        return report.status === filter;
    });

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
                    Gestion des rapports
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Évaluez et validez les rapports de stage
                </p>
            </div>

            {/* Filters */}
            <div className="card" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                    {[
                        { key: 'all', label: 'Tous', count: reports.length },
                        { key: 'pending', label: 'En attente', count: reports.filter(r => r.status === 'pending').length },
                        { key: 'evaluated', label: 'Évalués', count: reports.filter(r => r.status === 'evaluated').length },
                        { key: 'validated', label: 'Validés', count: reports.filter(r => r.status === 'validated').length }
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

            {/* Reports Table */}
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
                                    Date soumission
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Statut
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Note
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Évaluateur
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReports.map((report) => (
                                <tr key={report.id} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{ fontWeight: 600 }}>{report.student}</span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {report.company}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(report.submittedDate).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{
                                            padding: '4px 12px',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 600,
                                            backgroundColor: `${getStatusColor(report.status)}15`,
                                            color: getStatusColor(report.status)
                                        }}>
                                            {getStatusLabel(report.status)}
                                        </span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                                        {report.grade !== null ? (
                                            <span style={{
                                                fontSize: 'var(--text-lg)',
                                                fontWeight: 800,
                                                color: report.grade >= 16 ? 'var(--color-success)' : report.grade >= 12 ? 'var(--color-accent)' : 'var(--color-warning)'
                                            }}>
                                                {report.grade}/20
                                            </span>
                                        ) : (
                                            <span style={{ color: 'var(--color-gray-400)' }}>-</span>
                                        )}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {report.evaluator || '-'}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', justifyContent: 'center', flexWrap: 'wrap' }}>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                📄 Lire
                                            </button>
                                            {report.status === 'pending' && (
                                                <button className="btn btn-primary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                    ✏️ Noter
                                                </button>
                                            )}
                                            {report.status === 'evaluated' && (
                                                <button className="btn btn-primary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                    ✓ Valider
                                                </button>
                                            )}
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                💬
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

export default RapportsGestion;
