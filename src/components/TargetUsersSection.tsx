import React from 'react';

const TargetUsersSection: React.FC = () => {
    const users = [
        {
            icon: '👨‍🎓',
            title: 'Élèves',
            description: 'Trouvez votre stage idéal, postulez en ligne et gérez vos documents facilement',
            cta: 'Espace Élève'
        },
        {
            icon: '🏢',
            title: 'Entreprises',
            description: 'Publiez vos offres, recevez des candidatures qualifiées et simplifiez vos démarches',
            cta: 'Espace Entreprise'
        },
        {
            icon: '👨‍👩‍👧',
            title: 'Parents',
            description: 'Suivez le parcours de stage de votre enfant et signez les documents en ligne',
            cta: 'Espace Parent'
        },
        {
            icon: '🎓',
            title: 'Administration',
            description: 'Pilotez l\'ensemble des stages avec des tableaux de bord et statistiques détaillées',
            cta: 'Espace Admin'
        }
    ];

    return (
        <section className="section bg-white">
            <div className="container">
                <div className="text-center mb-xl">
                    <h2 style={{ color: 'var(--color-primary-dark)' }}>
                        Une plateforme pour tous les acteurs
                    </h2>
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--color-gray-600)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Des espaces dédiés et adaptés à chaque utilisateur
                    </p>
                </div>

                <div className="grid grid-4">
                    {users.map((user, index) => (
                        <div key={index} className="card" style={{ textAlign: 'center' }}>
                            <div style={{
                                fontSize: '4rem',
                                marginBottom: 'var(--spacing-md)'
                            }}>
                                {user.icon}
                            </div>
                            <h3 className="card-title">{user.title}</h3>
                            <p className="card-description" style={{ marginBottom: 'var(--spacing-md)' }}>
                                {user.description}
                            </p>
                            <a href="#" className="btn btn-secondary" style={{ width: '100%' }}>
                                {user.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetUsersSection;
