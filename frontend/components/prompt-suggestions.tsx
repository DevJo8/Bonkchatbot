"use client"

import { motion } from "framer-motion"

interface PromptSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void
}

export default function PromptSuggestions({ onSuggestionClick }: PromptSuggestionsProps) {
  const suggestions = [
    {
      title: "Get my SOL balance",
      description: "Get the balance of your wallet",
      prompt: "Get my SOL balance",
    },
    {
      title: "Get my COBONX balance",
      description: "Check how many COBONX tokens you have in your wallet",
      prompt: "Get my COBONX balance"
    },
    {
      title: "Transfer SOL to another wallet",
      description: "Transfer SOL to another wallet",
      prompt: "transfer 0.1 sol to wallet id ",
    },
    {
      title: "Should I buy Solana today?",
      description: "Get the latest news and analysis on Solana",
      prompt: "Should I buy Solana today?",
    },
    {
      title: "What is the price of Solana today?",
      description: "Get the latest price of Solana",
      prompt: "What is the price of Solana today?",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {suggestions.map((suggestion, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{
            scale: 1.03,
            y: -5,
            boxShadow: "0 0 20px rgba(255, 165, 0, 0.28)",
          }}
          onClick={() => onSuggestionClick(suggestion.prompt)}
          className="cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl p-6 transition-all duration-300"
        >
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2 text-white">
              {suggestion.title}
            </h3>
            <p className="text-white/80 mb-4 text-sm">{suggestion.description}</p>
            <div className="text-xs font-medium text-white flex items-center">
              <span className="mr-2">Try it</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 12H4.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
      ))}
    </motion.div>
  )
}

