import React, { useEffect, useState } from "react";

// /c:/Users/Jordan/Desktop/book/booking/src/app/products/book.tsx

type SubmissionResult = {
    ok: boolean;
    message: string;
    data?: any;
};

export default function BookButton(): JSX.Element {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<SubmissionResult | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setModalOpen(false);
            }
        };
        if (modalOpen) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [modalOpen]);

    async function handleSubmit() {
        if (loading) return;
        setLoading(true);
        setResult(null);

        try {
            // Attempt to POST to an API endpoint. Change the URL/body to match your backend.
            const res = await fetch("/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ item: "book" }),
            });

            if (!res.ok) {
                // Try to parse error body, otherwise create a generic message
                let msg = `Request failed: ${res.status}`;
                try {
                    const json = await res.json();
                    msg = json?.message ?? JSON.stringify(json);
                } catch {
                    // ignore parse error
                }
                setResult({ ok: false, message: msg });
            } else {
                const json = await res.json().catch(() => null);
                setResult({
                    ok: true,
                    message: json?.message ?? "Booking submitted successfully.",
                    data: json,
                });
            }
        } catch (err: any) {
            // If there's no backend during development, simulate a successful response
            const simulated = {
                ok: true,
                message: "Simulated booking complete (no /api/book found).",
                data: { id: Math.floor(Math.random() * 100000), createdAt: new Date().toISOString() },
            };
            setResult(simulated);
        } finally {
            setLoading(false);
            setModalOpen(true);
        }
    }

    return (
        <>
            <button
                className="p-[3px] relative inline-block"
                onClick={handleSubmit}
                disabled={loading}
                aria-busy={loading}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div
                    className={`px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center gap-2 ${
                        loading ? "opacity-80 pointer-events-none" : ""
                    }`}
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                        </span>
                    ) : (
                        "Book"
                    )}
                </div>
            </button>

            {modalOpen && result && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                    <div
                        className="fixed inset-0 bg-black/50"
                        onClick={() => setModalOpen(false)}
                        aria-hidden="true"
                    />
                    <div className="relative max-w-lg w-full mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden z-10">
                        <div className="px-6 py-4 border-b dark:border-gray-700 flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {result.ok ? "Success" : "Error"}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                    {result.message}
                                </p>
                            </div>
                            <button
                                onClick={() => setModalOpen(false)}
                                aria-label="Close"
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="px-6 py-4">
                            <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded text-gray-700 dark:text-gray-100 overflow-auto">
                                {JSON.stringify(result.data ?? {}, null, 2)}
                            </pre>
                        </div>

                        <div className="px-6 py-3 border-t dark:border-gray-700 flex justify-end gap-2">
                            <button
                                onClick={() => {
                                    setModalOpen(false);
                                }}
                                className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:opacity-90"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}