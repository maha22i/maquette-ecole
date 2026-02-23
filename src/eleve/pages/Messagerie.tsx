import { useState } from 'react';

const Messagerie = () => {
    const [selectedConversation, setSelectedConversation] = useState(1);
    const [message, setMessage] = useState('');

    const conversations = [
        { id: 1, nom: 'Tech Corp', dernier: 'Merci pour votre candidature...', date: '14/02/2024', unread: 1 },
        { id: 2, nom: 'Administration', dernier: 'Votre convention a été validée', date: '13/02/2024', unread: 0 },
    ];

    const messages = [
        { id: 1, from: 'Tech Corp', text: 'Bonjour, nous avons bien reçu votre candidature.', time: '10:30', isMe: false },
        { id: 2, from: 'Moi', text: 'Merci beaucoup !', time: '10:35', isMe: true },
    ];

    return (
        <div>
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Messagerie
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
                    Communiquez avec les entreprises et l'administration
                </p>
            </div>

            <div className="card" style={{
                display: 'grid',
                gridTemplateColumns: '300px 1fr',
                height: '600px',
                overflow: 'hidden'
            }}>
                {/* Conversations List */}
                <div style={{
                    borderRight: '1px solid var(--color-gray-200)',
                    overflowY: 'auto'
                }}>
                    {conversations.map((conv) => (
                        <div
                            key={conv.id}
                            onClick={() => setSelectedConversation(conv.id)}
                            style={{
                                padding: 'var(--spacing-md)',
                                borderBottom: '1px solid var(--color-gray-200)',
                                cursor: 'pointer',
                                backgroundColor: selectedConversation === conv.id ? 'var(--color-gray-50)' : 'transparent',
                                transition: 'background-color var(--transition-fast)'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                <span style={{
                                    fontWeight: 600,
                                    color: 'var(--color-primary-dark)',
                                    fontSize: 'var(--text-sm)'
                                }}>
                                    {conv.nom}
                                </span>
                                {conv.unread > 0 && (
                                    <span style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-accent)',
                                        color: 'white',
                                        fontSize: 'var(--text-xs)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 700
                                    }}>
                                        {conv.unread}
                                    </span>
                                )}
                            </div>
                            <p style={{
                                fontSize: 'var(--text-xs)',
                                color: 'var(--color-gray-600)',
                                margin: 0,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}>
                                {conv.dernier}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Messages Thread */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: 'var(--spacing-lg)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-md)'
                    }}>
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                style={{
                                    display: 'flex',
                                    justifyContent: msg.isMe ? 'flex-end' : 'flex-start'
                                }}
                            >
                                <div style={{
                                    maxWidth: '70%',
                                    padding: 'var(--spacing-sm) var(--spacing-md)',
                                    borderRadius: 'var(--radius-md)',
                                    backgroundColor: msg.isMe ? 'var(--color-primary)' : 'var(--color-gray-100)',
                                    color: msg.isMe ? 'white' : 'var(--color-gray-900)'
                                }}>
                                    <p style={{ margin: 0, fontSize: 'var(--text-sm)' }}>
                                        {msg.text}
                                    </p>
                                    <div style={{
                                        fontSize: 'var(--text-xs)',
                                        marginTop: 'var(--spacing-xs)',
                                        opacity: 0.7
                                    }}>
                                        {msg.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        padding: 'var(--spacing-md)',
                        borderTop: '1px solid var(--color-gray-200)'
                    }}>
                        <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
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
                                Envoyer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messagerie;
