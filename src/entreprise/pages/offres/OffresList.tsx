import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Offre {
    id: number;
    titre: string;
    type: string;
    lieu: string;
    datePublication: string;
    statut: 'active' | 'draft' | 'expired';
    vues: number;
    candidatures: number;
}

const OffresList = () => {
    const [filter, setFilter] = useState<'all' | 'active' | 'draft' | 'expired'>('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data
    const offres: Offre[] = [
        {
            id: 1,
            titre: 'Développeur Web Junior',
            type: 'Stage',
            lieu: 'Paris',
            datePublication: '2024-02-10',
            statut: 'active',
            vues: 145,
            candidatures: 12
        },
        {
            id: 2,
            titre: 'Assistant Marketing Digital',
            type: 'Alternance',
            lieu: 'Lyon',
            datePublication: '2024-02-08',
            statut: 'active',
            vues: 98,
            candidatures: 8
        },
        {
            id: 3,
            titre: 'Technicien Maintenance',
            type: 'Stage',
            lieu: 'Marseille',
            datePublication: '2024-01-15',
            statut: 'expired',
            vues: 234,
            candidatures: 15
        },
        {
            id: 4,
            titre: 'Commercial B2B',
            type: 'CDD',
            lieu: 'Toulouse',
            datePublication: '2024-02-12',
            statut: 'draft',
            vues: 0,
            candidatures: 0
        },
    ];

    const filteredOffres = offres.filter(offre => {
        const matchesFilter = filter === 'all' || offre.statut === filter;
        const matchesSearch = offre.titre.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const getStatusBadge = (statut: string) => {
        const styles = {
            active: { bg: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-success)', text: 'Active' },
            draft: { bg: 'rgba(156, 163, 175, 0.1)', color: 'var(--color-gray-600)', text: 'Brouillon' },
            expired: { bg: 'rgba(239, 68, 68, 0.1)', color: 'var(--color-error)', text: 'Expirée' }
        };
        const style = styles[statut as keyof typeof styles];

        return (
            <span style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                backgroundColor: style.bg,
                color: style.color
            }}>
                {style.text}
            </span>
        );
    };

    return (
        <div>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--spacing-xl)'
            }}>
                <div>
                    <h2 style={{
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)',
                        marginBottom: 'var(--spacing-xs)'
                    }}>
                        Mes offres
                    </h2>
                    <p style={{
                        color: 'var(--color-gray-600)',
                        fontSize: 'var(--text-sm)'
                    }}>
                        Gérez vos offres de stage et d'alternance
                    </p>
                </div>

                <Link to="/entreprise/offres/create" className="btn btn-primary">
                    ➕ Créer une offre
                </Link>
            </div>

            {/* Filters and Search */}
            <div className="card" style={{
                padding: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-lg)'
            }}>
                <div style={{
                    display: 'flex',
                    gap: 'var(--spacing-md)',
                    flexWrap: 'wrap',
                    alignItems: 'center'
                }}>
                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Rechercher une offre..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            flex: 1,
                            minWidth: '250px',
                            padding: 'var(--spacing-sm)',
                            border: '1px solid var(--color-gray-300)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--text-sm)'
                        }}
                    />

                    {/* Filter Buttons */}
                    <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
                        {[
                            { value: 'all', label: 'Toutes' },
                            { value: 'active', label: 'Actives' },
                            { value: 'draft', label: 'Brouillons' },
                            { value: 'expired', label: 'Expirées' }
                        ].map((btn) => (
                            <button
                                key={btn.value}
                                onClick={() => setFilter(btn.value as any)}
                                style={{
                                    padding: 'var(--spacing-sm) var(--spacing-md)',
                                    border: 'none',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    backgroundColor: filter === btn.value ? 'var(--color-primary)' : 'var(--color-gray-100)',
                                    color: filter === btn.value ? 'white' : 'var(--color-gray-700)',
                                    transition: 'all var(--transition-fast)'
                                }}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Offers Table */}
            <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse'
                    }}>
                        <thead>
                            <tr style={{
                                backgroundColor: 'var(--color-gray-50)',
                                borderBottom: '2px solid var(--color-gray-200)'
                            }}>
                                <th style={{
                                    padding: 'var(--spacing-md)',
                                    textAlign: 'left',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 700,
                                    color: 'var(--color-gray-700)'
                                }}>
                                    Titre
                                </th>
                                <th style={{
                                    padding: 'var(--spacing-md)',
                                    textAlign: 'left',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 700,
                                    color: 'var(--color-gray-700)'
                                }}>
                                    Type
                                </th>
                                <th style={{
                                    padding: 'var(--spacing-md)',
                                    textAlign: 'left',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 700,
                                    color: 'var(--color-gray-700)'
                                }}>
                                    Lieu
                                </th>
                                <th style={{
                                    padding: 'var(--spacing-md)',
                                    textAlign: 'left',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 700,
                                    color: 'var(--color-gray-700)'
                                }}>
                                    Statut
                                </th>
                                <th style={{
                                    padding: 'var(--spacing-md)',
                                    textAlign: 'center',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 700,
                                    color: 'var(--color-gray-700)'
                                }}>
                                    Vues
                                </th>
                                <th style={{
                                    padding: 'var(--spacing-md)',
                                    textAlign: 'center',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 700,
                                    color: 'var(--color-gray-700)'
                                }}>
                                    Candidatures
                                </th>
                                <th style={{
                                    padding: 'var(--spacing-md)',
                                    textAlign: 'right',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 700,
                                    color: 'var(--color-gray-700)'
                                }}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOffres.map((offre) => (
                                <tr
                                    key={offre.id}
                                    style={{
                                        borderBottom: '1px solid var(--color-gray-200)',
                                        transition: 'background-color var(--transition-fast)'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <td style={{
                                        padding: 'var(--spacing-md)',
                                        fontWeight: 600,
                                        color: 'var(--color-primary-dark)'
                                    }}>
                                        {offre.titre}
                                    </td>
                                    <td style={{
                                        padding: 'var(--spacing-md)',
                                        fontSize: 'var(--text-sm)',
                                        color: 'var(--color-gray-600)'
                                    }}>
                                        {offre.type}
                                    </td>
                                    <td style={{
                                        padding: 'var(--spacing-md)',
                                        fontSize: 'var(--text-sm)',
                                        color: 'var(--color-gray-600)'
                                    }}>
                                        {offre.lieu}
                                    </td>
                                    <td style={{ padding: 'var(--spacing-md)' }}>
                                        {getStatusBadge(offre.statut)}
                                    </td>
                                    <td style={{
                                        padding: 'var(--spacing-md)',
                                        textAlign: 'center',
                                        fontSize: 'var(--text-sm)',
                                        color: 'var(--color-gray-600)'
                                    }}>
                                        {offre.vues}
                                    </td>
                                    <td style={{
                                        padding: 'var(--spacing-md)',
                                        textAlign: 'center',
                                        fontSize: 'var(--text-sm)'
                                    }}>
                                        <span style={{
                                            padding: '4px 8px',
                                            borderRadius: 'var(--radius-full)',
                                            backgroundColor: offre.candidatures > 0 ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                            color: offre.candidatures > 0 ? 'var(--color-accent)' : 'var(--color-gray-600)',
                                            fontWeight: 600
                                        }}>
                                            {offre.candidatures}
                                        </span>
                                    </td>
                                    <td style={{
                                        padding: 'var(--spacing-md)',
                                        textAlign: 'right'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            gap: 'var(--spacing-xs)',
                                            justifyContent: 'flex-end'
                                        }}>
                                            <button
                                                style={{
                                                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                                                    border: '1px solid var(--color-gray-300)',
                                                    borderRadius: 'var(--radius-md)',
                                                    backgroundColor: 'white',
                                                    cursor: 'pointer',
                                                    fontSize: 'var(--text-sm)',
                                                    transition: 'all var(--transition-fast)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                                                    e.currentTarget.style.color = 'var(--color-primary)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.borderColor = 'var(--color-gray-300)';
                                                    e.currentTarget.style.color = 'inherit';
                                                }}
                                            >
                                                👁️ Voir
                                            </button>
                                            <button
                                                style={{
                                                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                                                    border: '1px solid var(--color-gray-300)',
                                                    borderRadius: 'var(--radius-md)',
                                                    backgroundColor: 'white',
                                                    cursor: 'pointer',
                                                    fontSize: 'var(--text-sm)',
                                                    transition: 'all var(--transition-fast)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                                                    e.currentTarget.style.color = 'var(--color-primary)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.borderColor = 'var(--color-gray-300)';
                                                    e.currentTarget.style.color = 'inherit';
                                                }}
                                            >
                                                ✏️ Modifier
                                            </button>
                                            <button
                                                style={{
                                                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                                                    border: '1px solid var(--color-error)',
                                                    borderRadius: 'var(--radius-md)',
                                                    backgroundColor: 'white',
                                                    color: 'var(--color-error)',
                                                    cursor: 'pointer',
                                                    fontSize: 'var(--text-sm)',
                                                    transition: 'all var(--transition-fast)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'var(--color-error)';
                                                    e.currentTarget.style.color = 'white';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'white';
                                                    e.currentTarget.style.color = 'var(--color-error)';
                                                }}
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredOffres.length === 0 && (
                    <div style={{
                        padding: 'var(--spacing-xl)',
                        textAlign: 'center',
                        color: 'var(--color-gray-500)'
                    }}>
                        <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-sm)' }}>
                            Aucune offre trouvée
                        </p>
                        <p style={{ fontSize: 'var(--text-sm)' }}>
                            Essayez de modifier vos filtres ou créez une nouvelle offre
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OffresList;
