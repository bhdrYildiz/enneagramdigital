"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { HiArrowRight, HiCheckCircle, HiExclamationCircle } from "react-icons/hi2";

import { contactTopics, type ContactTopic } from "@/data/contact";

type FormValues = {
    fullName: string;
    email: string;
    phone: string;
    organization: string;
    topic: ContactTopic;
    message: string;
    consent: boolean;
};

const initialValues: FormValues = {
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    topic: "genel",
    message: "",
    consent: false,
};

const fieldClassName =
    "w-full min-h-12 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors placeholder:text-brand-text/60 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10";

export default function ContactForm() {
    const searchParams = useSearchParams();

    const [values, setValues] = useState<FormValues>(initialValues);

    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        const topic = searchParams.get("konu");

        const matched = contactTopics.find((item) => item.value === topic);

        setValues((previous) => ({
            ...previous,
            topic: matched?.value ?? "genel",
        }));
    }, [searchParams]);

    function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
        setValues((previous) => ({
            ...previous,
            [field]: value,
        }));

        if (status !== "idle") {
            setStatus("idle");
            setFeedback("");
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!values.consent || submitting) {
            return;
        }

        setSubmitting(true);
        setStatus("idle");
        setFeedback("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const result: {
                success?: boolean;
                message?: string;
            } = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message ?? "Talebiniz gönderilemedi.");
            }

            setStatus("success");
            setFeedback(
                "Talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.",
            );

            setValues((previous) => ({
                ...initialValues,
                topic: previous.topic,
            }));
        } catch (error) {
            setStatus("error");
            setFeedback(
                error instanceof Error ? error.message : "Bir hata oluştu. Lütfen tekrar deneyin.",
            );
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="min-w-0 rounded-[28px] border border-brand-border bg-white p-6 shadow-xl shadow-brand-navy/5 sm:p-9">
            <div className="border-b border-brand-border pb-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-orange">
                    İLETİŞİM FORMU
                </p>

                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                    Size nasıl yardımcı olabiliriz?
                </h2>

                <p className="mt-4 text-sm leading-7 text-brand-text">
                    Aşağıdaki bilgileri doldurarak bizimle iletişime geçebilirsiniz. Başvuru
                    konunuzu seçmeniz, talebinizi daha doğru değerlendirmemize yardımcı olur.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="contact-name"
                            className="mb-2 block text-sm font-bold text-brand-navy"
                        >
                            Ad Soyad *
                        </label>

                        <input
                            id="contact-name"
                            type="text"
                            required
                            minLength={2}
                            maxLength={120}
                            autoComplete="name"
                            value={values.fullName}
                            onChange={(event) => updateField("fullName", event.target.value)}
                            placeholder="Adınız ve soyadınız"
                            className={fieldClassName}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact-email"
                            className="mb-2 block text-sm font-bold text-brand-navy"
                        >
                            E-posta Adresi *
                        </label>

                        <input
                            id="contact-email"
                            type="email"
                            required
                            maxLength={254}
                            autoComplete="email"
                            value={values.email}
                            onChange={(event) => updateField("email", event.target.value)}
                            placeholder="ornek@kurum.com"
                            className={fieldClassName}
                        />
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="contact-phone"
                            className="mb-2 block text-sm font-bold text-brand-navy"
                        >
                            Telefon Numarası *
                        </label>

                        <input
                            id="contact-phone"
                            type="tel"
                            required
                            minLength={10}
                            maxLength={25}
                            autoComplete="tel"
                            value={values.phone}
                            onChange={(event) => updateField("phone", event.target.value)}
                            placeholder="05XX XXX XX XX"
                            className={fieldClassName}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact-organization"
                            className="mb-2 block text-sm font-bold text-brand-navy"
                        >
                            Kurum / Şirket
                        </label>

                        <input
                            id="contact-organization"
                            type="text"
                            maxLength={160}
                            autoComplete="organization"
                            value={values.organization}
                            onChange={(event) => updateField("organization", event.target.value)}
                            placeholder="Kurum adınız (isteğe bağlı)"
                            className={fieldClassName}
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="contact-topic"
                        className="mb-2 block text-sm font-bold text-brand-navy"
                    >
                        Başvuru Konusu *
                    </label>

                    <select
                        id="contact-topic"
                        required
                        value={values.topic}
                        onChange={(event) =>
                            updateField("topic", event.target.value as ContactTopic)
                        }
                        className={fieldClassName}
                    >
                        {contactTopics.map((topic) => (
                            <option key={topic.value} value={topic.value}>
                                {topic.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="contact-message"
                        className="mb-2 block text-sm font-bold text-brand-navy"
                    >
                        Mesajınız *
                    </label>

                    <textarea
                        id="contact-message"
                        required
                        minLength={10}
                        maxLength={3000}
                        rows={6}
                        value={values.message}
                        onChange={(event) => updateField("message", event.target.value)}
                        placeholder="EnneagramDigital'i hangi amaçla kullanmak istediğinizi ve merak ettiğiniz konuları bizimle paylaşabilirsiniz."
                        className={`${fieldClassName} resize-y`}
                    />
                </div>
                {status !== "idle" && (
                    <div
                        role={status === "error" ? "alert" : "status"}
                        aria-live="polite"
                        className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                            status === "success"
                                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                                : "border-red-200 bg-red-50 text-red-800"
                        }`}
                    >
                        {status === "success" ? (
                            <HiCheckCircle size={22} className="shrink-0" />
                        ) : (
                            <HiExclamationCircle size={22} className="shrink-0" />
                        )}

                        <span>{feedback}</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={submitting || !values.consent}
                    className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-extrabold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {submitting ? "Gönderiliyor..." : "Talebimi Gönder"}

                    {!submitting && <HiArrowRight size={19} />}
                </button>
            </form>
        </div>
    );
}
