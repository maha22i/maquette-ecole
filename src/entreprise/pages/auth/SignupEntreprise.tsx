import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupEntreprise = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        // Section 1: Connexion
        email: '',
        password: '',
        confirmPassword: '',
        // Section 2: Entreprise
        raisonSociale: '',
        siret: '',
        secteur: '',
        adresse: '',
        ville: '',
        codePostal: '',
        telephone: '',
        siteWeb: '',
        nomResponsable: '',
        fonctionResponsable: '',
        // Section 3: Validation
        acceptCGU: false,
        acceptRGPD: false
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [currentSection, setCurrentSection] = useState(1);

    const validateSIRET = (siret: string) => {
        return /^\d{14}$/.test(siret.replace(/\s/g, ''));
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateSection1 = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.email) newErrors.email = 'Email requis';
        else if (!validateEmail(formData.email)) newErrors.email = 'Email invalide';

        if (!formData.password) newErrors.password = 'Mot de passe requis';
        else if (formData.password.length < 8) newErrors.password = 'Minimum 8 caractères';

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateSection2 = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.raisonSociale) newErrors.raisonSociale = 'Raison sociale requise';
        if (!formData.siret) newErrors.siret = 'SIRET requis';
        else if (!validateSIRET(formData.siret)) newErrors.siret = 'SIRET invalide (14 chiffres)';
        if (!formData.secteur) newErrors.secteur = 'Secteur requis';
        if (!formData.adresse) newErrors.adresse = 'Adresse requise';
        if (!formData.ville) newErrors.ville = 'Ville requise';
        if (!formData.codePostal) newErrors.codePostal = 'Code postal requis';
        if (!formData.telephone) newErrors.telephone = 'Téléphone requis';
        if (!formData.nomResponsable) newErrors.nomResponsable = 'Nom du responsable requis';
        if (!formData.fonctionResponsable) newErrors.fonctionResponsable = 'Fonction requise';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (currentSection === 1 && validateSection1()) {
            setCurrentSection(2);
        } else if (currentSection === 2 && validateSection2()) {
            setCurrentSection(3);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.acceptCGU || !formData.acceptRGPD) {
            setErrors({ terms: 'Vous devez accepter les conditions' });
            return;
        }

        // In real app, send to API
        console.log('Form submitted:', formData);

        // Show success message and redirect
        alert('Inscription réussie ! Un email de vérification a été envoyé.');
        navigate('/entreprise/login');
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'var(--color-gray-50)',
            padding: 'var(--spacing-xl) var(--spacing-md)'
        }}>
            <div style={{
                maxWidth: '700px',
                margin: '0 auto'
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <Link to="/" style={{
                        display: 'inline-block',
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--color-primary)',
                        textDecoration: 'none',
                        fontSize: 'var(--text-sm)'
                    }}>
                        ← Retour à l'accueil
                    </Link>
                    <h1 style={{
                        fontSize: 'var(--text-4xl)',
                        fontWeight: 800,
                        color: 'var(--color-primary-dark)',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        Créer un compte Entreprise
                    </h1>
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--color-gray-600)'
                    }}>
                        Rejoignez la plateforme officielle de gestion des stages du Lycée Professionnel Bartholdi
                    </p>
                </div>

                {/* Progress Indicator */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--spacing-md)',
                    marginBottom: 'var(--spacing-xl)'
                }}>
                    {[1, 2, 3].map((step) => (
                        <div key={step} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-xs)'
                        }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: currentSection >= step ? 'var(--color-primary)' : 'var(--color-gray-300)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                {step}
                            </div>
                            {step < 3 && (
                                <div style={{
                                    width: '60px',
                                    height: '2px',
                                    backgroundColor: currentSection > step ? 'var(--color-primary)' : 'var(--color-gray-300)'
                                }}></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Form Card */}
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <form onSubmit={handleSubmit}>
                        {/* Section 1: Connexion */}
                        {currentSection === 1 && (
                            <div>
                                <h2 style={{
                                    fontSize: 'var(--text-2xl)',
                                    fontWeight: 700,
                                    marginBottom: 'var(--spacing-lg)',
                                    color: 'var(--color-primary-dark)'
                                }}>
                                    1. Informations de connexion
                                </h2>

                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: 'var(--spacing-xs)',
                                        fontWeight: 600,
                                        color: 'var(--color-gray-700)'
                                    }}>
                                        Email professionnel *
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--spacing-sm)',
                                            border: `1px solid ${errors.email ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                            borderRadius: 'var(--radius-md)',
                                            fontSize: 'var(--text-base)'
                                        }}
                                        placeholder="contact@entreprise.fr"
                                    />
                                    {errors.email && (
                                        <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                            {errors.email}
                                        </span>
                                    )}
                                </div>

                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: 'var(--spacing-xs)',
                                        fontWeight: 600,
                                        color: 'var(--color-gray-700)'
                                    }}>
                                        Mot de passe *
                                    </label>
                                    <input
                                        type="password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--spacing-sm)',
                                            border: `1px solid ${errors.password ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                            borderRadius: 'var(--radius-md)',
                                            fontSize: 'var(--text-base)'
                                        }}
                                        placeholder="Minimum 8 caractères"
                                    />
                                    {errors.password && (
                                        <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                            {errors.password}
                                        </span>
                                    )}
                                </div>

                                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: 'var(--spacing-xs)',
                                        fontWeight: 600,
                                        color: 'var(--color-gray-700)'
                                    }}>
                                        Confirmer le mot de passe *
                                    </label>
                                    <input
                                        type="password"
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--spacing-sm)',
                                            border: `1px solid ${errors.confirmPassword ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                            borderRadius: 'var(--radius-md)',
                                            fontSize: 'var(--text-base)'
                                        }}
                                    />
                                    {errors.confirmPassword && (
                                        <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>
                                            {errors.confirmPassword}
                                        </span>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                >
                                    Suivant →
                                </button>
                            </div>
                        )}

                        {/* Section 2: Informations entreprise */}
                        {currentSection === 2 && (
                            <div>
                                <h2 style={{
                                    fontSize: 'var(--text-2xl)',
                                    fontWeight: 700,
                                    marginBottom: 'var(--spacing-lg)',
                                    color: 'var(--color-primary-dark)'
                                }}>
                                    2. Informations entreprise
                                </h2>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                                    <div style={{ gridColumn: '1 / -1' }}>
                                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                                            Raison sociale *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.raisonSociale}
                                            onChange={(e) => setFormData({ ...formData, raisonSociale: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--spacing-sm)',
                                                border: `1px solid ${errors.raisonSociale ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                                borderRadius: 'var(--radius-md)'
                                            }}
                                        />
                                        {errors.raisonSociale && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.raisonSociale}</span>}
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                                            SIRET *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.siret}
                                            onChange={(e) => setFormData({ ...formData, siret: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--spacing-sm)',
                                                border: `1px solid ${errors.siret ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                                borderRadius: 'var(--radius-md)'
                                            }}
                                            placeholder="14 chiffres"
                                        />
                                        {errors.siret && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.siret}</span>}
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                                            Secteur d'activité *
                                        </label>
                                        <select
                                            value={formData.secteur}
                                            onChange={(e) => setFormData({ ...formData, secteur: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--spacing-sm)',
                                                border: `1px solid ${errors.secteur ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                                borderRadius: 'var(--radius-md)'
                                            }}
                                        >
                                            <option value="">Sélectionner</option>
                                            <option value="industrie">Industrie</option>
                                            <option value="commerce">Commerce</option>
                                            <option value="services">Services</option>
                                            <option value="batiment">Bâtiment</option>
                                            <option value="informatique">Informatique</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>

                                    <div style={{ gridColumn: '1 / -1' }}>
                                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                                            Adresse *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.adresse}
                                            onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--spacing-sm)',
                                                border: `1px solid ${errors.adresse ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                                borderRadius: 'var(--radius-md)'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                                            Ville *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.ville}
                                            onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--spacing-sm)',
                                                border: `1px solid ${errors.ville ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                                borderRadius: 'var(--radius-md)'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                                            Code postal *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.codePostal}
                                            onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--spacing-sm)',
                                                border: `1px solid ${errors.codePostal ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                                borderRadius: 'var(--radius-md)'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                                            Téléphone *
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.telephone}
                                            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--spacing-sm)',
                                                border: `1px solid ${errors.telephone ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                                borderRadius: 'var(--radius-md)'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
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
                                            placeholder="https://"
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                                            Nom du responsable *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.nomResponsable}
                                            onChange={(e) => setFormData({ ...formData, nomResponsable: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--spacing-sm)',
                                                border: `1px solid ${errors.nomResponsable ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                                borderRadius: 'var(--radius-md)'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                                            Fonction du responsable *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.fonctionResponsable}
                                            onChange={(e) => setFormData({ ...formData, fonctionResponsable: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--spacing-sm)',
                                                border: `1px solid ${errors.fonctionResponsable ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                                borderRadius: 'var(--radius-md)'
                                            }}
                                            placeholder="Ex: Directeur RH"
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentSection(1)}
                                        className="btn btn-secondary"
                                        style={{ flex: 1 }}
                                    >
                                        ← Précédent
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="btn btn-primary"
                                        style={{ flex: 1 }}
                                    >
                                        Suivant →
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Section 3: Validation */}
                        {currentSection === 3 && (
                            <div>
                                <h2 style={{
                                    fontSize: 'var(--text-2xl)',
                                    fontWeight: 700,
                                    marginBottom: 'var(--spacing-lg)',
                                    color: 'var(--color-primary-dark)'
                                }}>
                                    3. Validation et conformité
                                </h2>

                                <div style={{
                                    padding: 'var(--spacing-lg)',
                                    backgroundColor: 'var(--color-gray-50)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-lg)'
                                }}>
                                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                                            <input
                                                type="checkbox"
                                                checked={formData.acceptCGU}
                                                onChange={(e) => setFormData({ ...formData, acceptCGU: e.target.checked })}
                                                style={{ marginTop: '4px' }}
                                            />
                                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)' }}>
                                                J'accepte les <a href="#" style={{ color: 'var(--color-primary)' }}>Conditions Générales d'Utilisation</a>
                                            </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                                            <input
                                                type="checkbox"
                                                checked={formData.acceptRGPD}
                                                onChange={(e) => setFormData({ ...formData, acceptRGPD: e.target.checked })}
                                                style={{ marginTop: '4px' }}
                                            />
                                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)' }}>
                                                J'accepte la <a href="#" style={{ color: 'var(--color-primary)' }}>Politique de confidentialité RGPD</a>
                                            </span>
                                        </label>
                                    </div>

                                    {errors.terms && (
                                        <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)', display: 'block', marginTop: 'var(--spacing-sm)' }}>
                                            {errors.terms}
                                        </span>
                                    )}
                                </div>

                                <div style={{
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                    borderRadius: 'var(--radius-md)',
                                    borderLeft: '4px solid var(--color-accent)',
                                    marginBottom: 'var(--spacing-lg)'
                                }}>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)', margin: 0 }}>
                                        ℹ️ Après validation, votre compte sera en attente de vérification. Un administrateur validera votre SIRET avant activation.
                                    </p>
                                </div>

                                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentSection(2)}
                                        className="btn btn-secondary"
                                        style={{ flex: 1 }}
                                    >
                                        ← Précédent
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ flex: 1 }}
                                    >
                                        Créer mon compte
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>

                {/* Login Link */}
                <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
                    <p style={{ color: 'var(--color-gray-600)' }}>
                        Vous avez déjà un compte ?{' '}
                        <Link to="/entreprise/login" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                            Se connecter
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupEntreprise;
