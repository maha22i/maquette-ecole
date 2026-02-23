import { useState } from 'react';

const MonRapport = () => {
    const [uploadMethod, setUploadMethod] = useState<'upload' | 'editor'>('upload');
    const [rapportText, setRapportText] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [statut, setStatut] = useState<'draft' | 'submitted' | 'evaluated' | 'validated'>('draft');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = () => {
        if (uploadMethod === 'upload' && !file) {
            alert('Veuillez sélectionner un fichier');
            return;
        }
        if (uploadMethod === 'editor' && !rapportText) {
            alert('Veuillez rédiger votre rapport');
            return;
        }

        console.log('Rapport submitted');
        setStatut('submitted');
        alert('Rapport soumis avec succès !');
    };

    const handleSaveDraft = () => {
        console.log('Draft saved');
        alert('Brouillon sauvegardé');
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
                    Mon rapport de stage
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Déposez ou rédigez votre rapport de stage
                </p>
            </div>

            {/* Status */}
            <div className="card" style={{
                padding: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-lg)',
                backgroundColor: statut === 'draft' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(34, 197, 94, 0.1)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                            Statut du rapport
                        </p>
                        <p style={{ fontSize: 'var(--text-lg)', fontWeight: 700, margin: 0 }}>
                            {statut === 'draft' && '📝 Brouillon'}
                            {statut === 'submitted' && '📤 Soumis'}
                            {statut === 'evaluated' && '✓ Évalué'}
                            {statut === 'validated' && '✓ Validé'}
                        </p>
                    </div>
                    {statut === 'evaluated' && (
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xs)' }}>
                                Note
                            </p>
                            <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-success)', margin: 0 }}>
                                16/20
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {statut === 'draft' && (
                <>
                    {/* Method Selection */}
                    <div className="card" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                        <h3 style={{
                            fontSize: 'var(--text-lg)',
                            fontWeight: 700,
                            marginBottom: 'var(--spacing-md)',
                            color: 'var(--color-primary-dark)'
                        }}>
                            Méthode de dépôt
                        </h3>

                        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                            <button
                                onClick={() => setUploadMethod('upload')}
                                className={uploadMethod === 'upload' ? 'btn btn-primary' : 'btn btn-secondary'}
                                style={{ flex: 1 }}
                            >
                                📄 Upload PDF
                            </button>
                            <button
                                onClick={() => setUploadMethod('editor')}
                                className={uploadMethod === 'editor' ? 'btn btn-primary' : 'btn btn-secondary'}
                                style={{ flex: 1 }}
                            >
                                ✍️ Rédaction en ligne
                            </button>
                        </div>
                    </div>

                    {/* Upload Method */}
                    {uploadMethod === 'upload' && (
                        <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                            <h3 style={{
                                fontSize: 'var(--text-lg)',
                                fontWeight: 700,
                                marginBottom: 'var(--spacing-lg)',
                                color: 'var(--color-primary-dark)'
                            }}>
                                Télécharger votre rapport
                            </h3>

                            <div style={{
                                border: '2px dashed var(--color-gray-300)',
                                borderRadius: 'var(--radius-md)',
                                padding: 'var(--spacing-xl)',
                                textAlign: 'center',
                                marginBottom: 'var(--spacing-lg)'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>📄</div>
                                <p style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--spacing-md)' }}>
                                    {file ? file.name : 'Glissez-déposez votre fichier PDF ici'}
                                </p>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                    id="file-upload"
                                />
                                <label htmlFor="file-upload">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => document.getElementById('file-upload')?.click()}
                                    >
                                        Parcourir
                                    </button>
                                </label>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', marginTop: 'var(--spacing-sm)' }}>
                                    Format accepté : PDF (max 10MB)
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                                <button className="btn btn-secondary" style={{ flex: 1 }}>
                                    💾 Sauvegarder en brouillon
                                </button>
                                <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleSubmit}>
                                    📤 Soumettre le rapport
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Editor Method */}
                    {uploadMethod === 'editor' && (
                        <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                            <h3 style={{
                                fontSize: 'var(--text-lg)',
                                fontWeight: 700,
                                marginBottom: 'var(--spacing-lg)',
                                color: 'var(--color-primary-dark)'
                            }}>
                                Rédiger votre rapport
                            </h3>

                            <textarea
                                value={rapportText}
                                onChange={(e) => setRapportText(e.target.value)}
                                placeholder="Commencez à rédiger votre rapport de stage..."
                                style={{
                                    width: '100%',
                                    minHeight: '400px',
                                    padding: 'var(--spacing-md)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-base)',
                                    fontFamily: 'inherit',
                                    resize: 'vertical',
                                    marginBottom: 'var(--spacing-lg)'
                                }}
                            />

                            <p style={{
                                fontSize: 'var(--text-xs)',
                                color: 'var(--color-gray-600)',
                                marginBottom: 'var(--spacing-lg)'
                            }}>
                                💾 Sauvegarde automatique activée
                            </p>

                            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                                <button className="btn btn-secondary" style={{ flex: 1 }} onClick={handleSaveDraft}>
                                    💾 Sauvegarder en brouillon
                                </button>
                                <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleSubmit}>
                                    📤 Soumettre le rapport
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}

            {statut === 'submitted' && (
                <div className="card" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-lg)' }}>✓</div>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>
                        Rapport soumis avec succès !
                    </h3>
                    <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-lg)' }}>
                        Votre rapport est en cours d'évaluation par votre tuteur et l'équipe pédagogique.
                    </p>
                    <button className="btn btn-secondary">
                        📄 Télécharger mon rapport
                    </button>
                </div>
            )}

            {statut === 'evaluated' && (
                <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Évaluation
                    </h3>

                    <div style={{
                        padding: 'var(--spacing-lg)',
                        backgroundColor: 'var(--color-gray-50)',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-sm)' }}>
                            Commentaires du tuteur
                        </p>
                        <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.6 }}>
                            Excellent travail ! Le rapport est bien structuré et démontre une bonne compréhension des missions effectuées.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                        <button className="btn btn-secondary" style={{ flex: 1 }}>
                            📄 Télécharger le rapport
                        </button>
                        <button className="btn btn-primary" style={{ flex: 1 }}>
                            📄 Télécharger la version finale
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MonRapport;
