const OffresModeration = () => {
    const offers = [
        { id: 1, title: 'Assistant Commercial', company: 'Tech Corp', status: 'active', applications: 12, date: '2024-02-10', section: 'Commerce' },
        { id: 2, title: 'Vendeur en magasin', company: 'Commerce Plus', status: 'active', applications: 8, date: '2024-02-12', section: 'Vente' },
        { id: 3, title: 'Assistant administratif', company: 'Digital Services', status: 'inactive', applications: 5, date: '2024-02-08', section: 'Gestion-Admin' }
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
                    Modération des offres
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Gérez toutes les offres de stage publiées
                </p>
            </div>

            {/* Offers Table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Titre
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Entreprise
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Section
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Statut
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Candidatures
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Date publication
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {offers.map((offer) => (
                                <tr key={offer.id} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{ fontWeight: 600 }}>{offer.title}</span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {offer.company}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {offer.section}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{
                                            padding: '4px 12px',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 600,
                                            backgroundColor: offer.status === 'active' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(220, 38, 38, 0.1)',
                                            color: offer.status === 'active' ? 'var(--color-success)' : 'var(--color-error)'
                                        }}>
                                            {offer.status === 'active' ? '✓ Active' : '✕ Inactive'}
                                        </span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-primary)' }}>
                                        {offer.applications}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(offer.date).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', justifyContent: 'center', flexWrap: 'wrap' }}>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                👁️ Voir
                                            </button>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                ✏️ Modifier
                                            </button>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                {offer.status === 'active' ? '⏸️' : '▶️'}
                                            </button>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                🗑️
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

export default OffresModeration;
