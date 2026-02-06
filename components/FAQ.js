"use client";

export default function FAQ({ faqs, limit }) {
    const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

    return (
        <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            {displayFaqs.map((faq, index) => (
                <details key={index} className="faq-details">
                    <summary className="faq-question">{faq.question}</summary>
                    <p className="faq-answer">{faq.answer}</p>
                </details>
            ))}
        </div>
    );
}
