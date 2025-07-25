"use client"

import { ReactNode } from 'react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { MessageCircle, User } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ChatMessageProps {
  role: "user" | "assistant"
  content: string | ReactNode
  isLast?: boolean
  actionAnalysis?: string
}

export default function ChatMessage({ role, content, isLast = false }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        type: "spring",
        bounce: 0.3,
        delay: isLast ? 0.1 : 0,
      }}
      className={cn("flex gap-4 max-w-4xl mx-auto", role === "user" ? "justify-end" : "justify-start")}
    >
      {role === "assistant" && (
  <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden border border-[#2596be]/40">
    <Image
      src="/bgb.png"
      alt="BONX"
      width={48}
      height={48}
    />
  </div>
)}

      <div
        className={cn(
          "relative p-5 rounded-2xl backdrop-blur-md max-w-[80%] shadow-glow-sm",
          role === "user"
            ? "bg-gradient-to-r from-orange-400/20 to-orange-500/10 border border-orange-400/30 rounded-tr-sm shadow-[0_4px_32px_0_rgba(255,165,0,0.25)]"
            : "bg-black/20 border border-white/10 rounded-tl-sm shadow-[0_4px_32px_0_rgba(255,165,0,0.15)]",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-10",
            role === "user"
              ? "bg-gradient-to-r from-orange-400/30 to-orange-500/20"
              : "bg-gradient-to-r from-orange-300/10 to-orange-400/10",
          )}
        />

        <div className="relative z-10">
          <div className={cn("font-medium mb-1 text-sm", role === "assistant" ? "text-violet-200" : "text-orange-300")}>
            {role === "assistant" ? "BONX" : "You"}
          </div>
          <div className="prose prose-invert max-w-none text-white/90 leading-relaxed">
            {typeof content === 'string' ? content : content}
          </div>
        </div>
      </div>

      {role === "user" && (
        <Avatar className="h-10 w-10 rounded-full border border-white/10 shadow-glow-sm bg-gradient-to-br from-orange-400 to-orange-500">
          <AvatarFallback className="rounded-full text-white">
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      )}
    </motion.div>
  )
}
