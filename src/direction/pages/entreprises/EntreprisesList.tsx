const EntreprisesList = () => {
    const companies = [
        { id: 1, name: 'Tech Corp', siret: '123 456 789 00012', sector: 'Informatique', status: 'active', internships: 12, date: '2024-01-15' },
        { id: 2, name: 'Digital Services', siret: '987 654 321 00021', sector: 'Services numériques', status: 'active', internships: 10, date: '2024-01-20' },
        { id: 3, name: 'Commerce Plus', siret: '456 789 123 00034', sector: 'Commerce', status: 'suspended', internships: 6, date: '2024-01-25' }
    ];

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
                    Toutes les entreprises
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Liste complète des entreprises validées
                </p>
            </div>

            {/* Companies Table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Nom
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    SIRET
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Secteur
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Statut
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Stages
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Date validation
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map((company) => (
                                <tr key={company.id} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{ fontWeight: 600 }}>{company.name}</span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', fontFamily: 'monospace' }}>
                                        {company.siret}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {company.sector}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{
                                            padding: '4px 12px',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 600,
                                            backgroundColor: company.status === 'active' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(220, 38, 38, 0.1)',
                                            color: company.status === 'active' ? 'var(--color-success)' : 'var(--color-error)'
                                        }}>
                                            {company.status === 'active' ? '✓ Active' : '⏸️ Suspendue'}
                                        </span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-primary)' }}>
                                        {company.internships}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(company.date).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', justifyContent: 'center' }}>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                👁️ Voir
                                            </button>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                ✏️ Modifier
                                            </button>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                {company.status === 'active' ? '⏸️' : '▶️'}
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

export default EntreprisesList;
