import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I request a ride?",
    answer:
      "Simply enter your pickup and destination, select a ride type, and submit your request. Nearby drivers will receive it instantly.",
  },
  {
    question: "Can I track my driver in real-time?",
    answer:
      "Yes! Once a driver accepts your request, you can track their location in real-time on the map until they arrive.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "You can pay via credit/debit card, mobile wallets, or cash, depending on your preferences and location.",
  },
  {
    question: "Can I cancel a ride?",
    answer:
      "Yes, you can cancel a ride before the driver arrives. Cancellation policies may vary depending on timing and ride type.",
  },
  {
    question: "How do I rate my driver?",
    answer:
      "After completing a ride, you will be prompted to rate your driver and leave feedback through the app.",
  },
];

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQ = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" py-20 container mx-auto">
      <title>GoTogether-FAQ-Page</title>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Find answers to the most common questions about GoTogether.
        </p>
        <input
          type="text"
          placeholder="Search questions..."
          className="mt-6 w-full max-w-md px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredFAQ.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 rounded-md p-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-gray-900 dark:text-white font-semibold">
                {item.question}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="text-green-500" />
              ) : (
                <ChevronDown className="text-green-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm">
                {item.answer}
              </p>
            )}
          </div>
        ))}
        {filteredFAQ.length === 0 && (
          <p className="text-gray-700 dark:text-gray-200 text-center">
            No questions found.
          </p>
        )}
      </div>
    </div>
  );
}
