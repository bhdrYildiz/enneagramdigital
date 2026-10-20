"use client";

type GlobalErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    return (
        <html lang="tr">
            <body
                style={{
                    margin: 0,
                    backgroundColor: "#F9F9F9",
                    color: "#092634",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <main
                    style={{
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                        textAlign: "center",
                    }}
                >
                    <div style={{ maxWidth: "480px" }}>
                        <div
                            style={{
                                fontSize: "48px",
                                fontWeight: 800,
                                letterSpacing: "-3px",
                            }}
                        >
                            enneagram
                            <span style={{ color: "#FF6E42" }}>digital.</span>
                        </div>

                        <h1
                            style={{
                                marginTop: "40px",
                                fontSize: "30px",
                            }}
                        >
                            Bir sorun oluştu.
                        </h1>

                        <p
                            style={{
                                color: "#52616B",
                                lineHeight: 1.8,
                                marginTop: "16px",
                            }}
                        >
                            Sayfayı görüntülerken beklenmeyen bir hata oluştu. Lütfen tekrar
                            deneyin.
                        </p>

                        <button
                            type="button"
                            onClick={reset}
                            style={{
                                marginTop: "28px",
                                padding: "15px 28px",
                                backgroundColor: "#092634",
                                color: "#FFFFFF",
                                border: "none",
                                borderRadius: "12px",
                                fontSize: "14px",
                                fontWeight: 700,
                                cursor: "pointer",
                            }}
                        >
                            Tekrar Dene
                        </button>
                    </div>
                </main>
            </body>
        </html>
    );
}
