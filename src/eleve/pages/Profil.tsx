import { useState } from 'react';

const Profil = () => {
    const [formData, setFormData] = useState({
        prenom: 'Marie',
        nom: 'Dupont',
        email: 'marie.dupont@lycee.ac-normandie.fr',
        telephone: '06 12 34 56 78',
        adresse: '123 Rue de Paris, 75001 Paris',
        classe: 'Terminale Pro',
        filiere: 'Commerce',
        bio: 'Élève motivée en recherche de stage dans le domaine du commerce.',
        competences: 'Vente, Relation client, Communication'
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
                    Gérez vos informations personnelles
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Photo & CV */}
                <div className="card" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Photo et CV
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-lg)'
                    }}>
                        <div>
                            <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>
                                Photo de profil
                            </p>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-gray-200)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                marginBottom: 'var(--spacing-md)'
                            }}>
                                👤
                            </div>
                            <button type="button" className="btn btn-secondary" style={{ fontSize: 'var(--text-sm)' }}>
                                Changer la photo
                            </button>
                        </div>

                        <div>
                            <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>
                                CV
                            </p>
                            <div style={{
                                padding: 'var(--spacing-lg)',
                                border: '2px dashed var(--color-gray-300)',
                                borderRadius: 'var(--radius-md)',
                                textAlign: 'center',
                                marginBottom: 'var(--spacing-md)'
                            }}>
                                <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--spacing-sm)' }}>
                                    📄 CV_Marie_Dupont.pdf
                                </p>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)' }}>
                                    Dernière mise à jour: 10/02/2024
                                </p>
                            </div>
                            <button type="button" className="btn btn-secondary" style={{ fontSize: 'var(--text-sm)' }}>
                                Télécharger un nouveau CV
                            </button>
                        </div>
                    </div>
                </div>

                {/* Personal Info */}
                <div className="card" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Informations personnelles
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-md)'
                    }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Prénom
                            </label>
                            <input
                                type="text"
                                value={formData.prenom}
                                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Nom
                            </label>
                            <input
                                type="text"
                                value={formData.nom}
                                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
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
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
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

                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
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
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Classe
                            </label>
                            <input
                                type="text"
                                value={formData.classe}
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
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Filière
                            </label>
                            <input
                                type="text"
                                value={formData.filiere}
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

                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Bio
                            </label>
                            <textarea
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                rows={3}
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
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                Compétences
                            </label>
                            <input
                                type="text"
                                value={formData.competences}
                                onChange={(e) => setFormData({ ...formData, competences: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)'
                                }}
                                placeholder="Séparez les compétences par des virgules"
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
