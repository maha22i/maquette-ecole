const ConventionsList = () => {
    const conventions = [
        {
            id: 1,
            entreprise: 'Tech Corp',
            dateDebut: '2024-03-01',
            dateFin: '2024-05-31',
            statut: 'En attente de signature',
            signatures: {
                eleve: false,
                parent: false,
                entreprise: true,
                ecole: false
            }
        },
    ];

    return (
        <div>
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Mes conventions
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Consultez et signez vos conventions de stage
                </p>
            </div>

            <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                {conventions.map((convention) => (
                    <div key={convention.id} className="card" style={{ padding: 'var(--spacing-xl)' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: 'var(--spacing-lg)'
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: 'var(--text-xl)',
                                    fontWeight: 700,
                                    color: 'var(--color-primary-dark)',
                                    marginBottom: 'var(--spacing-sm)'
                                }}>
                                    Convention de stage - {convention.entreprise}
                                </h3>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                    Du {new Date(convention.dateDebut).toLocaleDateString('fr-FR')} au {new Date(convention.dateFin).toLocaleDateString('fr-FR')}
                                </p>
                            </div>
                            <span style={{
                                padding: '6px 12px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--text-xs)',
                                fontWeight: 600,
                                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                                color: 'var(--color-warning)'
                            }}>
                                {convention.statut}
                            </span>
                        </div>

                        {/* Signature Progress */}
                        <div style={{
                            padding: 'var(--spacing-lg)',
                            backgroundColor: 'var(--color-gray-50)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--spacing-lg)'
                        }}>
                            <h4 style={{
                                fontSize: 'var(--text-sm)',
                                fontWeight: 700,
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-gray-700)'
                            }}>
                                Progression des signatures
                            </h4>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--spacing-md)' }}>
                                {Object.entries(convention.signatures).map(([key, signed]) => (
                                    <div key={key} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            backgroundColor: signed ? 'var(--color-success)' : 'var(--color-gray-300)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto var(--spacing-xs)',
                                            fontSize: '1.5rem'
                                        }}>
                                            {signed ? '✓' : '○'}
                                        </div>
                                        <p style={{
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 600,
                                            textTransform: 'capitalize',
                                            color: signed ? 'var(--color-success)' : 'var(--color-gray-600)'
                                        }}>
                                            {key}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                            <button className="btn btn-secondary" style={{ flex: 1 }}>
                                📄 Consulter le PDF
                            </button>
                            {!convention.signatures.eleve && (
                                <button className="btn btn-primary" style={{ flex: 1 }}>
                                    ✍️ Signer électroniquement
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {conventions.length === 0 && (
                    <div className="card" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-gray-500)' }}>
                            Aucune convention pour le moment
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConventionsList;
