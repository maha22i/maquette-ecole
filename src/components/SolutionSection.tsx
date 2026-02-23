import React from 'react';

const SolutionSection: React.FC = () => {
    const solutions = [
        {
            icon: '📢',
            title: 'Publication d\'offres',
            description: 'Les entreprises publient leurs offres de stage en quelques clics',
            color: 'primary'
        },
        {
            icon: '✉️',
            title: 'Candidatures en ligne',
            description: 'Les élèves postulent directement via la plateforme',
            color: 'accent'
        },
        {
            icon: '📝',
            title: 'Génération automatique de conventions',
            description: 'Création instantanée des documents administratifs conformes',
            color: 'success'
        },
        {
            icon: '✍️',
            title: 'Signature électronique conforme eIDAS',
            description: 'Signatures numériques sécurisées et juridiquement valables',
            color: 'primary'
        },
        {
            icon: '📤',
            title: 'Dépôt de rapports',
            description: 'Soumission et évaluation des rapports de stage en ligne',
            color: 'accent'
        },
        {
            icon: '📊',
            title: 'Tableaux de bord personnalisés',
            description: 'Statistiques et suivi en temps réel pour tous les acteurs',
            color: 'success'
        }
    ];

    return (
        <section className="section bg-gray-light">
            <div className="container">
                <div className="text-center mb-xl">
                    <h2 style={{ color: 'var(--color-primary-dark)' }}>
                        Une solution complète et sécurisée
                    </h2>
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--color-gray-600)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        Toutes les fonctionnalités dont vous avez besoin pour gérer vos stages de A à Z
                    </p>
                </div>

                <div className="grid grid-3">
                    {solutions.map((solution, index) => (
                        <div key={index} className="card">
                            <div className={`card-icon card-icon-${solution.color}`}>
                                {solution.icon}
                            </div>
                            <h3 className="card-title">{solution.title}</h3>
                            <p className="card-description">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
