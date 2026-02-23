import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupEleve = () => {
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState(1);
    const [formData, setFormData] = useState({
        // Section 1 - Personal Info
        prenom: '',
        nom: '',
        dateNaissance: '',
        classe: '',
        filiere: '',
        adresse: '',
        telephone: '',
        // Section 2 - Account
        email: '',
        password: '',
        confirmPassword: '',
        // Section 3 - Validation
        acceptCGU: false,
        acceptRGPD: false
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const classes = [
        'Seconde Pro',
        'Première Pro',
        'Terminale Pro',
        'CAP 1ère année',
        'CAP 2ème année'
    ];

    const filieres = [
        'Commerce',
        'Électrotechnique',
        'Maintenance',
        'Gestion-Administration',
        'Accueil',
        'Autre'
    ];

    const validateSection = (section: number) => {
        const newErrors: Record<string, string> = {};

        if (section === 1) {
            if (!formData.prenom) newErrors.prenom = 'Prénom requis';
            if (!formData.nom) newErrors.nom = 'Nom requis';
            if (!formData.dateNaissance) newErrors.dateNaissance = 'Date de naissance requise';
            if (!formData.classe) newErrors.classe = 'Classe requise';
            if (!formData.filiere) newErrors.filiere = 'Filière requise';
            if (!formData.adresse) newErrors.adresse = 'Adresse requise';
            if (!formData.telephone) newErrors.telephone = 'Téléphone requis';
        } else if (section === 2) {
            if (!formData.email) {
                newErrors.email = 'Email requis';
            } else if (!formData.email.endsWith('@lycee.ac-normandie.fr')) {
                newErrors.email = 'Email académique requis (@lycee.ac-normandie.fr)';
            }
            if (!formData.password) newErrors.password = 'Mot de passe requis';
            if (formData.password.length < 8) newErrors.password = 'Minimum 8 caractères';
            if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
            }
        } else if (section === 3) {
            if (!formData.acceptCGU) newErrors.acceptCGU = 'Acceptation requise';
            if (!formData.acceptRGPD) newErrors.acceptRGPD = 'Consentement requis';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateSection(currentSection)) {
            setCurrentSection(currentSection + 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateSection(3)) {
            console.log('Student registration:', formData);
            alert('Inscription réussie ! Un email de vérification a été envoyé.');
            navigate('/eleve/login');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'var(--color-gray-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-xl)'
        }}>
            <div className="card" style={{
                maxWidth: '600px',
                width: '100%',
                padding: 'var(--spacing-xl)'
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <h1 style={{
                        fontSize: 'var(--text-3xl)',
                        fontWeight: 800,
                        color: 'var(--color-primary-dark)',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        Créer un compte Élève
                    </h1>
                    <p style={{
                        color: 'var(--color-gray-600)',
                        fontSize: 'var(--text-base)'
                    }}>
                        Accédez à la plateforme officielle de gestion des stages du Lycée Professionnel Bartholdi
                    </p>
                </div>

                {/* Progress Indicator */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--spacing-xl)',
                    position: 'relative'
                }}>
                    {[1, 2, 3].map((step) => (
                        <div key={step} style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: currentSection >= step ? 'var(--color-primary)' : 'var(--color-gray-300)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto var(--spacing-xs)',
                                fontWeight: 700,
                                transition: 'all var(--transition-base)'
                            }}>
                                {step}
                            </div>
                            <span style={{
                                fontSize: 'var(--text-xs)',
                                color: currentSection >= step ? 'var(--color-primary)' : 'var(--color-gray-500)',
                                fontWeight: currentSection >= step ? 600 : 400
                            }}>
                                {step === 1 ? 'Informations' : step === 2 ? 'Compte' : 'Validation'}
                            </span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Section 1 - Personal Info */}
                    {currentSection === 1 && (
                        <div>
                            <h3 style={{
                                fontSize: 'var(--text-xl)',
                                fontWeight: 700,
                                marginBottom: 'var(--spacing-lg)',
                                color: 'var(--color-primary-dark)'
                            }}>
                                Informations personnelles
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                        Prénom *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.prenom}
                                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--spacing-sm)',
                                            border: `1px solid ${errors.prenom ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                            borderRadius: 'var(--radius-md)'
                                        }}
                                    />
                                    {errors.prenom && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.prenom}</span>}
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                        Nom *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.nom}
                                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--spacing-sm)',
                                            border: `1px solid ${errors.nom ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                            borderRadius: 'var(--radius-md)'
                                        }}
                                    />
                                    {errors.nom && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.nom}</span>}
                                </div>
                            </div>

                            <div style={{ marginTop: 'var(--spacing-md)' }}>
                                <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                    Date de naissance *
                                </label>
                                <input
                                    type="date"
                                    value={formData.dateNaissance}
                                    onChange={(e) => setFormData({ ...formData, dateNaissance: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: 'var(--spacing-sm)',
                                        border: `1px solid ${errors.dateNaissance ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                        borderRadius: 'var(--radius-md)'
                                    }}
                                />
                                {errors.dateNaissance && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.dateNaissance}</span>}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-md)' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                        Classe *
                                    </label>
                                    <select
                                        value={formData.classe}
                                        onChange={(e) => setFormData({ ...formData, classe: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--spacing-sm)',
                                            border: `1px solid ${errors.classe ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                            borderRadius: 'var(--radius-md)'
                                        }}
                                    >
                                        <option value="">Sélectionner</option>
                                        {classes.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                    {errors.classe && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.classe}</span>}
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                        Filière *
                                    </label>
                                    <select
                                        value={formData.filiere}
                                        onChange={(e) => setFormData({ ...formData, filiere: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--spacing-sm)',
                                            border: `1px solid ${errors.filiere ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                            borderRadius: 'var(--radius-md)'
                                        }}
                                    >
                                        <option value="">Sélectionner</option>
                                        {filieres.map(f => <option key={f} value={f}>{f}</option>)}
                                    </select>
                                    {errors.filiere && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.filiere}</span>}
                                </div>
                            </div>

                            <div style={{ marginTop: 'var(--spacing-md)' }}>
                                <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
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
                                {errors.adresse && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.adresse}</span>}
                            </div>

                            <div style={{ marginTop: 'var(--spacing-md)' }}>
                                <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
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
                                    placeholder="06 12 34 56 78"
                                />
                                {errors.telephone && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.telephone}</span>}
                            </div>
                        </div>
                    )}

                    {/* Section 2 - Account */}
                    {currentSection === 2 && (
                        <div>
                            <h3 style={{
                                fontSize: 'var(--text-xl)',
                                fontWeight: 700,
                                marginBottom: 'var(--spacing-lg)',
                                color: 'var(--color-primary-dark)'
                            }}>
                                Informations de compte
                            </h3>

                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                                    Email académique *
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: 'var(--spacing-sm)',
                                        border: `1px solid ${errors.email ? 'var(--color-error)' : 'var(--color-gray-300)'}`,
                                        borderRadius: 'var(--radius-md)'
                                    }}
                                    placeholder="prenom.nom@lycee.ac-normandie.fr"
                                />
                                {errors.email && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.email}</span>}
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', marginTop: 'var(--spacing-xs)' }}>
                                    Utilisez votre email académique fourni par le lycée
                                </p>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
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
                                        borderRadius: 'var(--radius-md)'
                                    }}
                                />
                                {errors.password && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.password}</span>}
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
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
                                        borderRadius: 'var(--radius-md)'
                                    }}
                                />
                                {errors.confirmPassword && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)' }}>{errors.confirmPassword}</span>}
                            </div>
                        </div>
                    )}

                    {/* Section 3 - Validation */}
                    {currentSection === 3 && (
                        <div>
                            <h3 style={{
                                fontSize: 'var(--text-xl)',
                                fontWeight: 700,
                                marginBottom: 'var(--spacing-lg)',
                                color: 'var(--color-primary-dark)'
                            }}>
                                Validation
                            </h3>

                            <div style={{
                                padding: 'var(--spacing-lg)',
                                backgroundColor: 'var(--color-gray-50)',
                                borderRadius: 'var(--radius-md)',
                                marginBottom: 'var(--spacing-md)'
                            }}>
                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                                    <input
                                        type="checkbox"
                                        checked={formData.acceptCGU}
                                        onChange={(e) => setFormData({ ...formData, acceptCGU: e.target.checked })}
                                        style={{ marginTop: '4px' }}
                                    />
                                    <span style={{ fontSize: 'var(--text-sm)' }}>
                                        J'accepte les <a href="#" style={{ color: 'var(--color-primary)' }}>Conditions Générales d'Utilisation</a>
                                    </span>
                                </label>
                                {errors.acceptCGU && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)', marginLeft: '24px' }}>{errors.acceptCGU}</span>}
                            </div>

                            <div style={{
                                padding: 'var(--spacing-lg)',
                                backgroundColor: 'var(--color-gray-50)',
                                borderRadius: 'var(--radius-md)'
                            }}>
                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)', cursor: 'pointer' }}>
                                    <input
                                        type="checkbox"
                                        checked={formData.acceptRGPD}
                                        onChange={(e) => setFormData({ ...formData, acceptRGPD: e.target.checked })}
                                        style={{ marginTop: '4px' }}
                                    />
                                    <span style={{ fontSize: 'var(--text-sm)' }}>
                                        Je consens au traitement de mes données personnelles conformément au RGPD
                                    </span>
                                </label>
                                {errors.acceptRGPD && <span style={{ color: 'var(--color-error)', fontSize: 'var(--text-sm)', marginLeft: '24px' }}>{errors.acceptRGPD}</span>}
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 'var(--spacing-xl)',
                        gap: 'var(--spacing-md)'
                    }}>
                        {currentSection > 1 && (
                            <button
                                type="button"
                                onClick={() => setCurrentSection(currentSection - 1)}
                                className="btn btn-secondary"
                                style={{ flex: 1 }}
                            >
                                ← Précédent
                            </button>
                        )}

                        {currentSection < 3 ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="btn btn-primary"
                                style={{ flex: 1, marginLeft: currentSection === 1 ? 'auto' : '0' }}
                            >
                                Suivant →
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ flex: 1 }}
                            >
                                Créer mon compte
                            </button>
                        )}
                    </div>
                </form>

                <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                        Vous avez déjà un compte ?{' '}
                        <a
                            href="/eleve/login"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/eleve/login');
                            }}
                            style={{ color: 'var(--color-primary)', fontWeight: 600 }}
                        >
                            Se connecter
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupEleve;
