import { useState } from 'react';

const Statistiques = () => {
    const [dateRange, setDateRange] = useState('month');
    const [exportFormat, setExportFormat] = useState<'csv' | 'excel' | 'pdf'>('csv');

    const stats = {
        bySection: [
            { section: 'Commerce', count: 87, percentage: 35 },
            { section: 'Vente', count: 70, percentage: 28 },
            { section: 'Gestion-Admin', count: 55, percentage: 22 },
            { section: 'Accueil', count: 35, percentage: 15 }
        ],
        bySector: [
            { sector: 'Commerce/Vente', count: 95 },
            { sector: 'Services', count: 68 },
            { sector: 'Industrie', count: 42 },
            { sector: 'Administration', count: 38 },
            { sector: 'Autres', count: 4 }
        ],
        topCompanies: [
            { name: 'Tech Corp', internships: 12, rating: 4.8 },
            { name: 'Digital Services', internships: 10, rating: 4.6 },
            { name: 'Innovation Lab', internships: 8, rating: 4.9 },
            { name: 'Solutions Pro', internships: 7, rating: 4.5 },
            { name: 'Commerce Plus', internships: 6, rating: 4.7 }
        ],
        performance: {
            avgSearchDuration: 21,
            successRate: 92,
            avgReportGrade: 15.2,
            signatureCompletionRate: 87
        }
    };

    const handleExport = () => {
        console.log(`Exporting data as ${exportFormat}`);
        alert(`Export ${exportFormat.toUpperCase()} généré avec succès !`);
    };

    const handleGDPRExport = () => {
        console.log('Generating GDPR export');
        alert('Export RGPD généré avec succès !');
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
                    Statistiques & Exports
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Analyses et rapports de la plateforme
                </p>
            </div>

            {/* Export Controls */}
            <div className="card" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>
                    📥 Exporter les données
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 'var(--spacing-md)', alignItems: 'end' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                            Période
                        </label>
                        <select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            style={{
                                width: '100%',
                                padding: 'var(--spacing-sm)',
                                border: '1px solid var(--color-gray-300)',
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--text-sm)'
                            }}
                        >
                            <option value="week">Cette semaine</option>
                            <option value="month">Ce mois</option>
                            <option value="quarter">Ce trimestre</option>
                            <option value="year">Cette année</option>
                            <option value="all">Toutes les données</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                            Format
                        </label>
                        <select
                            value={exportFormat}
                            onChange={(e) => setExportFormat(e.target.value as any)}
                            style={{
                                width: '100%',
                                padding: 'var(--spacing-sm)',
                                border: '1px solid var(--color-gray-300)',
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--text-sm)'
                            }}
                        >
                            <option value="csv">CSV</option>
                            <option value="excel">Excel (.xlsx)</option>
                            <option value="pdf">PDF</option>
                        </select>
                    </div>

                    <button onClick={handleExport} className="btn btn-primary">
                        📥 Exporter
                    </button>
                </div>

                <div style={{ marginTop: 'var(--spacing-md)', display: 'flex', gap: 'var(--spacing-md)' }}>
                    <button onClick={handleGDPRExport} className="btn btn-secondary">
                        🔒 Export RGPD
                    </button>
                    <button className="btn btn-secondary">
                        📊 Rapport mensuel automatique
                    </button>
                </div>
            </div>

            {/* Performance Metrics */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-xl)'
            }}>
                <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>⏱️</div>
                    <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                        {stats.performance.avgSearchDuration} jours
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                        Durée moyenne recherche
                    </p>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>✅</div>
                    <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-success)', margin: 0 }}>
                        {stats.performance.successRate}%
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                        Taux de réussite
                    </p>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>📝</div>
                    <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-accent)', margin: 0 }}>
                        {stats.performance.avgReportGrade}/20
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                        Note moyenne rapports
                    </p>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>✍️</div>
                    <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-warning)', margin: 0 }}>
                        {stats.performance.signatureCompletionRate}%
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', margin: 0 }}>
                        Taux signature complète
                    </p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                {/* By Section */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                        📊 Stages par section
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        {stats.bySection.map((item) => (
                            <div key={item.section}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-xs)' }}>
                                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{item.section}</span>
                                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-primary)' }}>
                                        {item.count} ({item.percentage}%)
                                    </span>
                                </div>
                                <div style={{
                                    width: '100%',
                                    height: '10px',
                                    backgroundColor: 'var(--color-gray-200)',
                                    borderRadius: 'var(--radius-full)',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: `${item.percentage}%`,
                                        height: '100%',
                                        backgroundColor: 'var(--color-primary)',
                                        borderRadius: 'var(--radius-full)'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* By Sector */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                        🏢 Stages par secteur
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                        {stats.bySector.map((item, index) => (
                            <div
                                key={item.sector}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: 'var(--spacing-sm)',
                                    backgroundColor: index % 2 === 0 ? 'var(--color-gray-50)' : 'transparent',
                                    borderRadius: 'var(--radius-sm)'
                                }}
                            >
                                <span style={{ fontSize: 'var(--text-sm)' }}>{item.sector}</span>
                                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-primary)' }}>
                                    {item.count}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Top Companies */}
            <div className="card" style={{ padding: 'var(--spacing-xl)', marginTop: 'var(--spacing-xl)' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                    🏆 Top entreprises partenaires
                </h3>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--color-gray-50)', borderBottom: '2px solid var(--color-gray-200)' }}>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Rang
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'left', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Entreprise
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Nombre de stages
                                </th>
                                <th style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                                    Note moyenne
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.topCompanies.map((company, index) => (
                                <tr key={company.name} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                                        <span style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            backgroundColor: index < 3 ? 'var(--color-warning)' : 'var(--color-gray-200)',
                                            color: index < 3 ? 'white' : 'var(--color-gray-700)',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 700,
                                            fontSize: 'var(--text-sm)'
                                        }}>
                                            {index + 1}
                                        </span>
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>
                                        {company.name}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'center', fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-primary)' }}>
                                        {company.internships}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
                                        <span style={{
                                            padding: '4px 12px',
                                            borderRadius: 'var(--radius-full)',
                                            backgroundColor: 'rgba(251, 191, 36, 0.1)',
                                            color: 'var(--color-warning)',
                                            fontWeight: 700,
                                            fontSize: 'var(--text-sm)'
                                        }}>
                                            ⭐ {company.rating}/5
                                        </span>
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

export default Statistiques;
