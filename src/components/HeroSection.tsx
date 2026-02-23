import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="section-lg bg-gradient-light">
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--spacing-xl)',
                    alignItems: 'center'
                }}>
                    {/* Left Content */}
                    <div>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            lineHeight: '1.1',
                            marginBottom: 'var(--spacing-md)',
                            color: 'var(--color-primary-dark)'
                        }}>
                            La gestion des stages, <span style={{ color: 'var(--color-primary)' }}>simplifiée</span> et 100% digitale
                        </h1>

                        <p style={{
                            fontSize: 'var(--text-xl)',
                            color: 'var(--color-gray-600)',
                            marginBottom: 'var(--spacing-xl)',
                            lineHeight: '1.7'
                        }}>
                            Une plateforme centralisée pour les élèves, les entreprises et les familles.
                        </p>

                        <div style={{
                            marginTop: 'var(--spacing-xl)',
                            padding: 'var(--spacing-md)',
                            backgroundColor: 'rgba(30, 58, 138, 0.05)',
                            borderRadius: 'var(--radius-md)',
                            borderLeft: '4px solid var(--color-primary)'
                        }}>
                            <p style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-gray-700)',
                                margin: 0
                            }}>
                                <strong>Lycée Professionnel Bartholdi</strong> – Académie de Normandie
                            </p>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '100%',
                            maxWidth: '500px',
                            aspectRatio: '1',
                            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                            borderRadius: 'var(--radius-xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 'var(--spacing-xl)',
                            boxShadow: 'var(--shadow-xl)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Decorative elements */}
                            <div style={{
                                position: 'absolute',
                                top: '20%',
                                left: '10%',
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%',
                                animation: 'float 3s ease-in-out infinite'
                            }}></div>

                            <div style={{
                                position: 'absolute',
                                bottom: '15%',
                                right: '15%',
                                width: '60px',
                                height: '60px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%',
                                animation: 'float 4s ease-in-out infinite'
                            }}></div>

                            {/* Icons representing the platform */}
                            <div style={{
                                textAlign: 'center',
                                color: 'white',
                                zIndex: 1
                            }}>
                                <div style={{
                                    fontSize: '4rem',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    📚
                                </div>
                                <div style={{
                                    display: 'flex',
                                    gap: 'var(--spacing-md)',
                                    justifyContent: 'center',
                                    marginTop: 'var(--spacing-lg)'
                                }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        padding: 'var(--spacing-md)',
                                        borderRadius: 'var(--radius-lg)'
                                    }}>
                                        👨‍🎓
                                    </div>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        padding: 'var(--spacing-md)',
                                        borderRadius: 'var(--radius-lg)'
                                    }}>
                                        🏢
                                    </div>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        padding: 'var(--spacing-md)',
                                        borderRadius: 'var(--radius-lg)'
                                    }}>
                                        📊
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @media (max-width: 968px) {
          .section-lg > .container > div {
            grid-template-columns: 1fr !important;
            gap: var(--spacing-lg) !important;
          }
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
