const CandidaturesSupervision = () => {
    const applications = [
        { id: 1, student: 'Marie Dupont', company: 'Tech Corp', offer: 'Assistant Commercial', status: 'accepted', date: '2024-02-10' },
        { id: 2, student: 'Pierre Martin', company: 'Digital Services', offer: 'Vendeur', status: 'pending', date: '2024-02-12' },
        { id: 3, student: 'Sophie Bernard', company: 'Commerce Plus', offer: 'Assistant Admin', status: 'rejected', date: '2024-02-08' }
    ];

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'pending': return 'En attente';
            case 'accepted': return 'Acceptée';
            case 'rejected': return 'Refusée';
            default: return status;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'var(--color-warning)';
            case 'accepted': return 'var(--color-success)';
            case 'rejected': return 'var(--color-error)';
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
                    Supervision des candidatures
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Vue globale de toutes les candidatures
                </p>
            </div>

            {/* Applications Table */}
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
                                    Offre
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Statut
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Date candidature
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app) => (
                                <tr key={app.id} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{ fontWeight: 600 }}>{app.student}</span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {app.company}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {app.offer}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{
                                            padding: '4px 12px',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 600,
                                            backgroundColor: `${getStatusColor(app.status)}15`,
                                            color: getStatusColor(app.status)
                                        }}>
                                            {getStatusLabel(app.status)}
                                        </span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(app.date).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', justifyContent: 'center' }}>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                👁️ Détails
                                            </button>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                ⚙️ Modifier statut
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

export default CandidaturesSupervision;
