import React from 'react';

const ProblemSection: React.FC = () => {
    const problems = [
        {
            icon: '📄',
            title: 'Processus papier chronophage',
            description: 'Des heures perdues à gérer des documents papier et des signatures manuelles'
        },
        {
            icon: '👁️',
            title: 'Manque de visibilité pour les parents',
            description: 'Difficulté à suivre le parcours de stage de leur enfant en temps réel'
        },
        {
            icon: '📋',
            title: 'Suivi administratif complexe',
            description: 'Gestion fragmentée entre plusieurs outils et fichiers Excel'
        },
        {
            icon: '💬',
            title: 'Communication fragmentée',
            description: 'Échanges dispersés par email, téléphone et courrier postal'
        }
    ];

    return (
        <section className="section bg-white">
            <div className="container">
                <div className="text-center mb-xl">
                    <h2 style={{ color: 'var(--color-primary-dark)' }}>
                        Pourquoi moderniser la gestion des stages ?
                    </h2>
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--color-gray-600)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Les défis actuels de la gestion traditionnelle des stages
                    </p>
                </div>

                <div className="grid grid-4">
                    {problems.map((problem, index) => (
                        <div key={index} className="card">
                            <div className="card-icon card-icon-primary">
                                {problem.icon}
                            </div>
                            <h3 className="card-title">{problem.title}</h3>
                            <p className="card-description">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
