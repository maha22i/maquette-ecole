import { useState } from 'react';

const EntreprisesValidation = () => {
    const [pendingCompanies, setPendingCompanies] = useState([
        {
            id: 1,
            name: 'Digital Services SARL',
            siret: '123 456 789 00012',
            sector: 'Services numériques',
            address: '15 Rue de la Tech, 75001 Paris',
            contact: 'Jean Martin',
            email: 'contact@digitalservices.fr',
            phone: '01 23 45 67 89',
            submittedDate: '2024-02-12',
            verified: {
                siret: false,
                activity: false,
                contact: false,
                address: false
            }
        },
        {
            id: 2,
            name: 'Tech Solutions',
            siret: '987 654 321 00021',
            sector: 'Informatique',
            address: '42 Avenue Innovation, 69001 Lyon',
            contact: 'Marie Dubois',
            email: 'info@techsolutions.fr',
            phone: '04 56 78 90 12',
            submittedDate: '2024-02-13',
            verified: {
                siret: false,
                activity: false,
                contact: false,
                address: false
            }
        }
    ]);

    const [selectedCompany, setSelectedCompany] = useState<any>(null);
    const [rejectReason, setRejectReason] = useState('');
    const [showRejectModal, setShowRejectModal] = useState(false);

    const handleVerificationToggle = (companyId: number, field: keyof typeof pendingCompanies[0]['verified']) => {
        setPendingCompanies(companies =>
            companies.map(company =>
                company.id === companyId
                    ? {
                        ...company,
                        verified: {
                            ...company.verified,
                            [field]: !company.verified[field]
                        }
                    }
                    : company
            )
        );
    };

    const handleValidate = (companyId: number) => {
        const company = pendingCompanies.find(c => c.id === companyId);
        const allVerified = company && Object.values(company.verified).every(v => v);

        if (!allVerified) {
            alert('Veuillez vérifier tous les éléments avant de valider');
            return;
        }

        console.log('Validating company:', companyId);
        setPendingCompanies(companies => companies.filter(c => c.id !== companyId));
        alert('Entreprise validée avec succès !');
    };

    const handleReject = (companyId: number) => {
        if (!rejectReason.trim()) {
            alert('Veuillez indiquer une raison de refus');
            return;
        }

        console.log('Rejecting company:', companyId, 'Reason:', rejectReason);
        setPendingCompanies(companies => companies.filter(c => c.id !== companyId));
        setShowRejectModal(false);
        setRejectReason('');
        alert('Entreprise refusée');
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
                    Validation des entreprises
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    {pendingCompanies.length} entreprise(s) en attente de validation
                </p>
            </div>

            {/* Pending Companies */}
            <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                {pendingCompanies.map((company) => (
                    <div key={company.id} className="card" style={{ padding: 'var(--spacing-xl)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-lg)' }}>
                            <div>
                                <h3 style={{
                                    fontSize: 'var(--text-xl)',
                                    fontWeight: 700,
                                    color: 'var(--color-primary-dark)',
                                    marginBottom: 'var(--spacing-sm)'
                                }}>
                                    {company.name}
                                </h3>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                                    Soumis le {new Date(company.submittedDate).toLocaleDateString('fr-FR')}
                                </p>
                            </div>
                            <span style={{
                                padding: '6px 12px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--text-xs)',
                                fontWeight: 600,
                                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                                color: 'var(--color-warning)'
                            }}>
                                ⏳ En attente
                            </span>
                        </div>

                        {/* Company Details */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: 'var(--spacing-md)',
                            marginBottom: 'var(--spacing-lg)',
                            padding: 'var(--spacing-lg)',
                            backgroundColor: 'var(--color-gray-50)',
                            borderRadius: 'var(--radius-md)'
                        }}>
                            <div>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                    SIRET
                                </p>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, margin: 0 }}>
                                    {company.siret}
                                </p>
                            </div>
                            <div>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                    Secteur
                                </p>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, margin: 0 }}>
                                    {company.sector}
                                </p>
                            </div>
                            <div>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                    Contact
                                </p>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, margin: 0 }}>
                                    {company.contact}
                                </p>
                            </div>
                            <div>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                    Email
                                </p>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, margin: 0 }}>
                                    {company.email}
                                </p>
                            </div>
                            <div>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                    Téléphone
                                </p>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, margin: 0 }}>
                                    {company.phone}
                                </p>
                            </div>
                            <div>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                    Adresse
                                </p>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, margin: 0 }}>
                                    {company.address}
                                </p>
                            </div>
                        </div>

                        {/* Verification Checklist */}
                        <div style={{
                            padding: 'var(--spacing-lg)',
                            backgroundColor: 'var(--color-gray-50)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--spacing-lg)'
                        }}>
                            <h4 style={{
                                fontSize: 'var(--text-sm)',
                                fontWeight: 700,
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-gray-700)'
                            }}>
                                ✓ Liste de vérification
                            </h4>

                            <div style={{ display: 'grid', gap: 'var(--spacing-sm)' }}>
                                {[
                                    { key: 'siret', label: 'Numéro SIRET vérifié' },
                                    { key: 'activity', label: 'Cohérence de l\'activité' },
                                    { key: 'contact', label: 'Contact responsable vérifié' },
                                    { key: 'address', label: 'Adresse vérifiée' }
                                ].map((item) => (
                                    <label
                                        key={item.key}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 'var(--spacing-sm)',
                                            padding: 'var(--spacing-sm)',
                                            backgroundColor: 'white',
                                            borderRadius: 'var(--radius-sm)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={company.verified[item.key as keyof typeof company.verified]}
                                            onChange={() => handleVerificationToggle(company.id, item.key as keyof typeof company.verified)}
                                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                        />
                                        <span style={{
                                            fontSize: 'var(--text-sm)',
                                            fontWeight: company.verified[item.key as keyof typeof company.verified] ? 600 : 400,
                                            color: company.verified[item.key as keyof typeof company.verified] ? 'var(--color-success)' : 'var(--color-gray-700)'
                                        }}>
                                            {item.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                            <button
                                onClick={() => handleValidate(company.id)}
                                className="btn btn-primary"
                                style={{ flex: 1 }}
                            >
                                ✅ Valider l'entreprise
                            </button>
                            <button
                                onClick={() => {
                                    setSelectedCompany(company);
                                    setShowRejectModal(true);
                                }}
                                className="btn btn-secondary"
                                style={{ flex: 1, backgroundColor: 'rgba(220, 38, 38, 0.1)', color: 'var(--color-error)' }}
                            >
                                ❌ Refuser
                            </button>
                            <button className="btn btn-secondary">
                                📧 Demander infos
                            </button>
                        </div>
                    </div>
                ))}

                {pendingCompanies.length === 0 && (
                    <div className="card" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>✅</div>
                        <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-sm)' }}>
                            Aucune entreprise en attente
                        </h3>
                        <p style={{ color: 'var(--color-gray-600)' }}>
                            Toutes les entreprises ont été traitées
                        </p>
                    </div>
                )}
            </div>

            {/* Reject Modal */}
            {showRejectModal && selectedCompany && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    padding: 'var(--spacing-xl)'
                }}>
                    <div className="card" style={{
                        maxWidth: '500px',
                        width: '100%',
                        padding: 'var(--spacing-xl)'
                    }}>
                        <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
                            Refuser l'entreprise
                        </h3>

                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>
                            Entreprise : <strong>{selectedCompany.name}</strong>
                        </p>

                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)'
                            }}>
                                Raison du refus *
                            </label>
                            <textarea
                                value={rejectReason}
                                onChange={(e) => setRejectReason(e.target.value)}
                                placeholder="Indiquez la raison du refus..."
                                rows={4}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-sm)',
                                    fontFamily: 'inherit',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                            <button
                                onClick={() => {
                                    setShowRejectModal(false);
                                    setRejectReason('');
                                }}
                                className="btn btn-secondary"
                                style={{ flex: 1 }}
                            >
                                Annuler
                            </button>
                            <button
                                onClick={() => handleReject(selectedCompany.id)}
                                className="btn btn-primary"
                                style={{ flex: 1, backgroundColor: 'var(--color-error)' }}
                            >
                                Confirmer le refus
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EntreprisesValidation;
