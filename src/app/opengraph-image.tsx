import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'The ANTH - Ananse Ntentan Technology Hub';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #020617, #0f172a)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}
                >
                    {/* Hexagon Logo Representation */}
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            border: '4px solid #fbbf24', // Amber-400
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 30px rgba(251,191,36,0.4)',
                            background: '#0f172a',
                            marginRight: '24px',
                            color: '#fbbf24',
                            fontSize: '40px',
                            fontWeight: 'bold',
                        }}
                    >
                        A
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div
                            style={{
                                fontSize: '60px',
                                fontWeight: 'bold',
                                color: '#fbbf24', // Amber-400
                                letterSpacing: '0.05em',
                                lineHeight: 1,
                            }}
                        >
                            The ANTH
                        </div>
                        <div
                            style={{
                                fontSize: '24px',
                                color: '#f8fafc', // Slate-50
                                marginTop: '10px',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Ananse Ntentan Technology Hub
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        fontSize: '28px',
                        color: '#94a3b8', // Slate-400
                        textAlign: 'center',
                        maxWidth: '800px',
                        lineHeight: 1.4,
                        marginTop: '40px',
                    }}
                >
                    Engineering mission-critical platforms across a connected world.
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
