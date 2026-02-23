import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OffresCreate = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        titre: '',
        type: '',
        description: '',
        competences: '',
        duree: '',
        dateDebut: '',
        dateLimite: '',
        lieu: '',
        remuneration: '',
        contact: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent, isDraft = false) => {
        e.preventDefault();

        if (!isDraft) {
            const newErrors: Record<string, string> = {};

            if (!formData.titre) newErrors.titre = 'Titre requis';
            if (!formData.type) newErrors.type = 'Type requis';
            if (!formData.description) newErrors.description = 'Description requise';
            if (!formData.duree) newErrors.duree = 'Durée requise';
            if (!formData.dateDebut) newErrors.dateDebut = 'Date de début requise';
            if (!formData.dateLimite) newErrors.dateLimite = 'Date limite requise';
            if (!formData.lieu) newErrors.lieu = 'Lieu requis';
            if (!formData.contact) newErrors.contact = 'Contact requis';

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
        }

        // In real app, send to API
        console.log('Offre created:', { ...formData, statut: isDraft ? 'draft' : 'active' });

        alert(isDraft ? 'Offre sauvegardée en brouillon' : 'Offre publiée avec succès !');
        navigate('/entreprise/offres');
    };

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <button
                    onClick={() => navigate('/entreprise/offres')}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-primary)',
                        fontSize: 'var(--text-sm)',
                        cursor: 'pointer',
                        marginBottom: 'var(--spacing-md)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-xs)'
                    }}
                >
                    ← Retour aux offres
                </button>

                <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Créer une offre
                </h2>
                <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: 'var(--text-sm)'
                }}>
                    Publiez une nouvelle offre de stage ou d'alternance
                </p>
            </div>

            <form>
                <div className="card" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Informations générales
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
                                color: 'var(--color-gray-700)',
                                fontSize: 'var(--text-sm)'
                            }}>
                                Titre du poste *
                            </label>
                            <input
                                type="text"
                                value={formData.titre}
                                onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: `1px solid ${errors.titre ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-base)'
                                }}
                                placeholder="Ex: Développeur Web Junior"
                            />
                            {errors.titre && (
                                <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                    {errors.titre}
                                </span>
                            )}
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                color: 'var(--color-gray-700)',
                                fontSize: 'var(--text-sm)'
                            }}>
                                Type *
                            </label>
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: `1px solid ${errors.type ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-base)'
                                }}
                            >
                                <option value="">Sélectionner</option>
                                <option value="stage">Stage</option>
                                <option value="alternance">Alternance</option>
                                <option value="cdd">CDD</option>
                                <option value="cdi">CDI</option>
                            </select>
                            {errors.type && (
                                <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                    {errors.type}
                                </span>
                            )}
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                color: 'var(--color-gray-700)',
                                fontSize: 'var(--text-sm)'
                            }}>
                                Durée *
                            </label>
                            <input
                                type="text"
                                value={formData.duree}
                                onChange={(e) => setFormData({ ...formData, duree: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: `1px solid ${errors.duree ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-base)'
                                }}
                                placeholder="Ex: 3 mois, 6 mois, 1 an"
                            />
                            {errors.duree && (
                                <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                    {errors.duree}
                                </span>
                            )}
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                color: 'var(--color-gray-700)',
                                fontSize: 'var(--text-sm)'
                            }}>
                                Date de début *
                            </label>
                            <input
                                type="date"
                                value={formData.dateDebut}
                                onChange={(e) => setFormData({ ...formData, dateDebut: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: `1px solid ${errors.dateDebut ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-base)'
                                }}
                            />
                            {errors.dateDebut && (
                                <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                    {errors.dateDebut}
                                </span>
                            )}
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                color: 'var(--color-gray-700)',
                                fontSize: 'var(--text-sm)'
                            }}>
                                Date limite de candidature *
                            </label>
                            <input
                                type="date"
                                value={formData.dateLimite}
                                onChange={(e) => setFormData({ ...formData, dateLimite: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: `1px solid ${errors.dateLimite ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-base)'
                                }}
                            />
                            {errors.dateLimite && (
                                <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                    {errors.dateLimite}
                                </span>
                            )}
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                color: 'var(--color-gray-700)',
                                fontSize: 'var(--text-sm)'
                            }}>
                                Lieu *
                            </label>
                            <input
                                type="text"
                                value={formData.lieu}
                                onChange={(e) => setFormData({ ...formData, lieu: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: `1px solid ${errors.lieu ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-base)'
                                }}
                                placeholder="Ex: Paris, Lyon, Télétravail"
                            />
                            {errors.lieu && (
                                <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                    {errors.lieu}
                                </span>
                            )}
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                color: 'var(--color-gray-700)',
                                fontSize: 'var(--text-sm)'
                            }}>
                                Rémunération (optionnel)
                            </label>
                            <input
                                type="text"
                                value={formData.remuneration}
                                onChange={(e) => setFormData({ ...formData, remuneration: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-base)'
                                }}
                                placeholder="Ex: 600€/mois, Gratification légale"
                            />
                        </div>
                    </div>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Description détaillée
                    </h3>

                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: 'var(--spacing-xs)',
                            fontWeight: 600,
                            color: 'var(--color-gray-700)',
                            fontSize: 'var(--text-sm)'
                        }}>
                            Description du poste *
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={8}
                            style={{
                                width: '100%',
                                padding: 'var(--spacing-sm)',
                                border: `1px solid ${errors.description ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--text-base)',
                                fontFamily: 'inherit',
                                resize: 'vertical'
                            }}
                            placeholder="Décrivez les missions, responsabilités et objectifs du poste..."
                        />
                        {errors.description && (
                            <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                {errors.description}
                            </span>
                        )}
                    </div>

                    <div>
                        <label style={{
                            display: 'block',
                            marginBottom: 'var(--spacing-xs)',
                            fontWeight: 600,
                            color: 'var(--color-gray-700)',
                            fontSize: 'var(--text-sm)'
                        }}>
                            Compétences requises
                        </label>
                        <textarea
                            value={formData.competences}
                            onChange={(e) => setFormData({ ...formData, competences: e.target.value })}
                            rows={4}
                            style={{
                                width: '100%',
                                padding: 'var(--spacing-sm)',
                                border: '1px solid var(--color-gray-300)',
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--text-base)',
                                fontFamily: 'inherit',
                                resize: 'vertical'
                            }}
                            placeholder="Listez les compétences techniques et soft skills requises..."
                        />
                    </div>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Contact
                    </h3>

                    <div>
                        <label style={{
                            display: 'block',
                            marginBottom: 'var(--spacing-xs)',
                            fontWeight: 600,
                            color: 'var(--color-gray-700)',
                            fontSize: 'var(--text-sm)'
                        }}>
                            Email de contact *
                        </label>
                        <input
                            type="email"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            style={{
                                width: '100%',
                                padding: 'var(--spacing-sm)',
                                border: `1px solid ${errors.contact ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--text-base)'
                            }}
                            placeholder="contact@entreprise.fr"
                        />
                        {errors.contact && (
                            <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                {errors.contact}
                            </span>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div style={{
                    display: 'flex',
                    gap: 'var(--spacing-md)',
                    justifyContent: 'flex-end'
                }}>
                    <button
                        type="button"
                        onClick={() => navigate('/entreprise/offres')}
                        className="btn btn-secondary"
                    >
                        Annuler
                    </button>

                    <button
                        type="button"
                        onClick={(e) => handleSubmit(e, true)}
                        className="btn btn-secondary"
                    >
                        💾 Sauvegarder en brouillon
                    </button>

                    <button
                        type="button"
                        onClick={(e) => handleSubmit(e, false)}
                        className="btn btn-primary"
                    >
                        ✓ Publier l'offre
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OffresCreate;
