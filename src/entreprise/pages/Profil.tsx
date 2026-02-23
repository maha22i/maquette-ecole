import { useState } from 'react';

const Profil = () => {
    const [formData, setFormData] = useState({
        raisonSociale: 'Entreprise Demo',
        siret: '12345678901234',
        secteur: 'Informatique',
        adresse: '123 Rue de Paris',
        ville: 'Paris',
        codePostal: '75001',
        telephone: '01 23 45 67 89',
        siteWeb: 'https://entreprise-demo.fr',
        description: 'Entreprise spécialisée dans le développement web et mobile.'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Profile updated:', formData);
        alert('Profil mis à jour avec succès !');
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
                    Mon profil
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Gérez les informations de votre entreprise
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="card" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Logo de l'entreprise
                    </h3>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-lg)',
                        marginBottom: 'var(--spacing-xl)'
                    }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'var(--color-gray-200)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem'
                        }}>
                            🏢
                        </div>
                        <div>
                            <button type="button" className="btn btn-secondary" style={{ marginBottom: 'var(--spacing-xs)' }}>
                                Changer le logo
                            </button>
                            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', margin: 0 }}>
                                Format recommandé : PNG ou JPG, max 2MB
                            </p>
                        </div>
                    </div>

                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Informations de l'entreprise
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 'var(--spacing-md)'
                    }}>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Raison sociale
                            </label>
                            <input
                                type="text"
                                value={formData.raisonSociale}
                                onChange={(e) => setFormData({ ...formData, raisonSociale: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                SIRET
                            </label>
                            <input
                                type="text"
                                value={formData.siret}
                                disabled
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    backgroundColor: 'var(--color-gray-50)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Secteur
                            </label>
                            <input
                                type="text"
                                value={formData.secteur}
                                onChange={(e) => setFormData({ ...formData, secteur: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Description
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={4}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontFamily: 'inherit',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Adresse
                            </label>
                            <input
                                type="text"
                                value={formData.adresse}
                                onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Ville
                            </label>
                            <input
                                type="text"
                                value={formData.ville}
                                onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Code postal
                            </label>
                            <input
                                type="text"
                                value={formData.codePostal}
                                onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Téléphone
                            </label>
                            <input
                                type="tel"
                                value={formData.telephone}
                                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Site web
                            </label>
                            <input
                                type="url"
                                value={formData.siteWeb}
                                onChange={(e) => setFormData({ ...formData, siteWeb: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="submit" className="btn btn-primary">
                        Enregistrer les modifications
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profil;
