const DocumentsGestion = () => {
    const documents = [
        { id: 1, name: 'Guide CV 2024', category: 'CV', type: 'PDF', size: '2.5 MB', downloads: 145, date: '2024-01-15' },
        { id: 2, name: 'Modèle rapport stage', category: 'Rapports', type: 'DOCX', size: '1.2 MB', downloads: 89, date: '2024-01-20' },
        { id: 3, name: 'Règlement stages', category: 'Réglementation', type: 'PDF', size: '850 KB', downloads: 234, date: '2024-01-10' },
        { id: 4, name: 'FAQ Élèves', category: 'FAQ', type: 'PDF', size: '1.8 MB', downloads: 178, date: '2024-02-01' }
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
                    Documents & Ressources
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Gérez les documents accessibles aux utilisateurs
                </p>
            </div>

            {/* Upload Section */}
            <div className="card" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>
                    📤 Ajouter un document
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 'var(--spacing-md)', alignItems: 'end' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                            Nom du document
                        </label>
                        <input
                            type="text"
                            placeholder="Ex: Guide CV 2024"
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
                            Catégorie
                        </label>
                        <select
                            style={{
                                width: '100%',
                                padding: 'var(--spacing-sm)',
                                border: '1px solid var(--color-gray-300)',
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--text-sm)'
                            }}
                        >
                            <option>CV</option>
                            <option>Rapports</option>
                            <option>Réglementation</option>
                            <option>FAQ</option>
                            <option>Autre</option>
                        </select>
                    </div>

                    <button className="btn btn-primary">
                        📁 Choisir fichier
                    </button>
                </div>
            </div>

            {/* Documents Table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Nom
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Catégorie
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Type
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Taille
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Téléchargements
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Date ajout
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((doc) => (
                                <tr key={doc.id} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{ fontWeight: 600 }}>📄 {doc.name}</span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <span style={{
                                            padding: '4px 12px',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 600,
                                            backgroundColor: 'var(--color-primary)15',
                                            color: 'var(--color-primary)'
                                        }}>
                                            {doc.category}
                                        </span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {doc.type}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {doc.size}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-primary)' }}>
                                        {doc.downloads}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                        {new Date(doc.date).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)', justifyContent: 'center' }}>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                📥 Télécharger
                                            </button>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                ✏️ Modifier
                                            </button>
                                            <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '6px 12px' }}>
                                                🗑️ Supprimer
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

export default DocumentsGestion;
