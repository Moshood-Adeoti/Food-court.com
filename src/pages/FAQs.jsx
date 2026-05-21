import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function FAQs() {
  const { theme } = useContext(ThemeContext);
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I place an order?",
      answer:
        "Browse restaurants, select your favorite meals and click the order button.",
    },
    {
      id: 2,
      question: "Can I track my delivery?",
      answer:
        "Yes, FOODCOURT allows you to track your order in real time.",
    },
    {
      id: 3,
      question: "What payment methods are available?",
      answer:
        "We accept card payments, bank transfers and cash on delivery.",
    },
    {
      id: 4,
      question: "Can I cancel my order?",
      answer:
        "Yes, orders can be cancelled before the restaurant starts preparing them.",
    },
    {
      id: 5,
      question: "Is FOODCOURT available in all cities?",
      answer:
        "Currently, FOODCOURT is available in selected cities and expanding gradually.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div
      className={`min-h-screen pt-[90px] px-4 md:px-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-3">
        ❓ Frequently Asked Questions
      </h1>

      <p className="text-center opacity-70 mb-10">
        Find answers to common FOODCOURT questions
      </p>

      {/* FAQ Container */}
      <div className="max-w-3xl mx-auto flex flex-col gap-5">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`rounded-xl shadow-md overflow-hidden ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-semibold text-lg">
                {faq.question}
              </span>

              <span className="text-2xl">
                {openId === faq.id ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            {openId === faq.id && (
              <div className="px-5 pb-5 opacity-80">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;