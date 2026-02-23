const Messagerie = () => {
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
                    Messagerie Administration
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Communication avec les élèves et entreprises
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: 'var(--spacing-lg)', height: '70vh' }}>
                {/* Conversations List */}
                <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: 'var(--spacing-lg)', borderBottom: '1px solid var(--color-gray-200)' }}>
                        <button className="btn btn-primary" style={{ width: '100%' }}>
                            ✉️ Nouveau message
                        </button>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        {[
                            { id: 1, name: 'Marie Dupont', lastMessage: 'Merci pour votre aide', time: 'Il y a 5 min', unread: 2, type: 'student' },
                            { id: 2, name: 'Tech Corp', lastMessage: 'Convention signée', time: 'Il y a 1h', unread: 0, type: 'company' },
                            { id: 3, name: 'Pierre Martin', lastMessage: 'Question sur le rapport', time: 'Il y a 2h', unread: 1, type: 'student' }
                        ].map((conv) => (
                            <div
                                key={conv.id}
                                style={{
                                    padding: 'var(--spacing-md)',
                                    borderBottom: '1px solid var(--color-gray-200)',
                                    cursor: 'pointer',
                                    backgroundColor: conv.id === 1 ? 'var(--color-gray-50)' : 'white'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-xs)' }}>
                                    <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>{conv.name}</span>
                                    {conv.unread > 0 && (
                                        <span style={{
                                            backgroundColor: 'var(--color-primary)',
                                            color: 'white',
                                            borderRadius: 'var(--radius-full)',
                                            padding: '2px 8px',
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 700
                                        }}>
                                            {conv.unread}
                                        </span>
                                    )}
                                </div>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', margin: 0, marginBottom: 'var(--spacing-xs)' }}>
                                    {conv.lastMessage}
                                </p>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-500)', margin: 0 }}>
                                    {conv.time}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Messages */}
                <div className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                    {/* Header */}
                    <div style={{
                        padding: 'var(--spacing-lg)',
                        borderBottom: '1px solid var(--color-gray-200)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, margin: 0, marginBottom: 'var(--spacing-xs)' }}>
                                Marie Dupont
                            </h3>
                            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', margin: 0 }}>
                                👨‍🎓 Élève - Terminale Pro Commerce
                            </p>
                        </div>
                        <button className="btn btn-secondary">
                            📎 Joindre fichier
                        </button>
                    </div>

                    {/* Messages */}
                    <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-lg)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                            {/* Received message */}
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <div style={{
                                    maxWidth: '70%',
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: 'var(--color-gray-100)',
                                    borderRadius: 'var(--radius-md)',
                                    borderBottomLeftRadius: '4px'
                                }}>
                                    <p style={{ fontSize: 'var(--text-sm)', margin: 0, marginBottom: 'var(--spacing-xs)' }}>
                                        Bonjour, j'ai une question concernant ma convention de stage.
                                    </p>
                                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', margin: 0 }}>
                                        14:25
                                    </p>
                                </div>
                            </div>

                            {/* Sent message */}
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{
                                    maxWidth: '70%',
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    borderRadius: 'var(--radius-md)',
                                    borderBottomRightRadius: '4px'
                                }}>
                                    <p style={{ fontSize: 'var(--text-sm)', margin: 0, marginBottom: 'var(--spacing-xs)' }}>
                                        Bonjour Marie, je suis à votre disposition. Quelle est votre question ?
                                    </p>
                                    <p style={{ fontSize: 'var(--text-xs)', opacity: 0.9, margin: 0 }}>
                                        14:26
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Input */}
                    <div style={{ padding: 'var(--spacing-lg)', borderTop: '1px solid var(--color-gray-200)' }}>
                        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                            <input
                                type="text"
                                placeholder="Tapez votre message..."
                                style={{
                                    flex: 1,
                                    padding: 'var(--spacing-sm)',
                                    border: '1px solid var(--color-gray-300)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--text-sm)'
                                }}
                            />
                            <button className="btn btn-primary">
                                📤 Envoyer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messagerie;
