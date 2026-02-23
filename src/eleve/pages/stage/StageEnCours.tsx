const StageEnCours = () => {
    const stage = {
        entreprise: 'Tech Corp',
        tuteur: {
            nom: 'Jean Dupont',
            email: 'jean.dupont@techcorp.fr',
            telephone: '01 23 45 67 89'
        },
        dateDebut: '2024-03-01',
        dateFin: '2024-05-31',
        horaires: 'Lundi - Vendredi, 9h00 - 17h00',
        adresse: '123 Rue de Paris, 75001 Paris',
        rapportStatut: 'Non soumis'
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
                    Mon stage en cours
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Informations sur votre stage actuel
                </p>
            </div>

            <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                {/* Company Info */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Entreprise
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-lg)'
                    }}>
                        <div>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                Nom de l'entreprise
                            </p>
                            <p style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>
                                {stage.entreprise}
                            </p>
                        </div>

                        <div>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                Adresse
                            </p>
                            <p style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>
                                {stage.adresse}
                            </p>
                        </div>

                        <div>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                Période
                            </p>
                            <p style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>
                                {new Date(stage.dateDebut).toLocaleDateString('fr-FR')} - {new Date(stage.dateFin).toLocaleDateString('fr-FR')}
                            </p>
                        </div>

                        <div>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                Horaires
                            </p>
                            <p style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>
                                {stage.horaires}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Supervisor Info */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Tuteur de stage
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-lg)'
                    }}>
                        <div>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                Nom
                            </p>
                            <p style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>
                                {stage.tuteur.nom}
                            </p>
                        </div>

                        <div>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                Email
                            </p>
                            <p style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>
                                <a href={`mailto:${stage.tuteur.email}`} style={{ color: 'var(--color-primary)' }}>
                                    {stage.tuteur.email}
                                </a>
                            </p>
                        </div>

                        <div>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                Téléphone
                            </p>
                            <p style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>
                                <a href={`tel:${stage.tuteur.telephone}`} style={{ color: 'var(--color-primary)' }}>
                                    {stage.tuteur.telephone}
                                </a>
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                        <button className="btn btn-primary">
                            💬 Contacter le tuteur
                        </button>
                    </div>
                </div>

                {/* Report Status */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Rapport de stage
                    </h3>

                    <div style={{
                        padding: 'var(--spacing-lg)',
                        backgroundColor: 'var(--color-gray-50)',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                            Statut
                        </p>
                        <p style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-warning)' }}>
                            {stage.rapportStatut}
                        </p>
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={() => window.location.href = '/eleve/rapport'}
                    >
                        📋 Accéder au rapport
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StageEnCours;
