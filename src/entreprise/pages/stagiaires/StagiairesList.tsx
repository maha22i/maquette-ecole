const StagiairesList = () => {
    const stagiaires = [
        {
            id: 1,
            nom: 'Marie Dupont',
            classe: 'Terminale Pro',
            dateDebut: '2024-01-10',
            dateFin: '2024-06-10',
            statut: 'En cours',
            rapportStatut: 'Non soumis'
        },
        {
            id: 2,
            nom: 'Pierre Leroy',
            classe: '1ère Pro',
            dateDebut: '2023-09-01',
            dateFin: '2024-02-28',
            statut: 'Terminé',
            rapportStatut: 'Évalué'
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
                    Mes stagiaires
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Suivez vos stagiaires actuels et passés
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: 'var(--spacing-lg)'
            }}>
                {stagiaires.map((stagiaire) => (
                    <div key={stagiaire.id} className="card" style={{ padding: 'var(--spacing-lg)' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-md)',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-primary)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 'var(--text-2xl)',
                                fontWeight: 700
                            }}>
                                {stagiaire.nom.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: 'var(--text-lg)',
                                    fontWeight: 700,
                                    color: 'var(--color-primary-dark)',
                                    marginBottom: 'var(--spacing-xs)'
                                }}>
                                    {stagiaire.nom}
                                </h3>
                                <p style={{
                                    fontSize: 'var(--text-sm)',
                                    color: 'var(--color-gray-600)',
                                    margin: 0
                                }}>
                                    {stagiaire.classe}
                                </p>
                            </div>
                        </div>

                        <div style={{
                            padding: 'var(--spacing-md)',
                            backgroundColor: 'var(--color-gray-50)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)' }}>Période</span>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, margin: 0 }}>
                                    {new Date(stagiaire.dateDebut).toLocaleDateString('fr-FR')} - {new Date(stagiaire.dateFin).toLocaleDateString('fr-FR')}
                                </p>
                            </div>
                            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)' }}>Statut</span>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, margin: 0 }}>
                                    {stagiaire.statut}
                                </p>
                            </div>
                            <div>
                                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)' }}>Rapport</span>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, margin: 0 }}>
                                    {stagiaire.rapportStatut}
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
                            <button className="btn btn-secondary" style={{ flex: 1, fontSize: 'var(--text-sm)' }}>
                                📄 Convention
                            </button>
                            <button className="btn btn-secondary" style={{ flex: 1, fontSize: 'var(--text-sm)' }}>
                                💬 Contacter
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StagiairesList;
