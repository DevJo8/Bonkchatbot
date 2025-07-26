"use client"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { SparklesCore } from "@/components/ui/aceternity/sparkles"
// import { Spotlight } from "@/components/ui/aceternity/spotlight"
// import Image from "next/image"
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
// import Link from "next/link"
import { useWallet } from "@solana/wallet-adapter-react"
import { useRouter } from "next/navigation"
import { VideoBackground } from "@/components/ui/video-background"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Twitter, BookOpen, ExternalLink, Copy } from "lucide-react"
import { RiTwitterXFill } from "react-icons/ri";
import { useState } from "react"

export default function Home() {
  const { connected } = useWallet()
  const router = useRouter()
  const contractAddress = "COMING SOON";
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  if(connected){
    router.push("/chat")
  }
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#121212]">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* <Navbar /> */}

        {/* Hero Section */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center min-h-screen relative">
            {/* Left container */}
            <div className="w-full md:w-1/2 ml-0">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight mb-4 md:mb-8 text-white">
                  Cobonx AI{" "}
                </h1>
                <p className="mt-4 md:mt-6 text-lg md:text-xl text-[#ff5c01] max-w-2xl mx-auto leading-relaxed px-4">
                  CHAT WITH COBONX, YOUR INTELLIGENT ASSISTANT FOR REAL-TIME INSHIGHTS, STRATEGY, AND AUTOMATION
                </p>

                {/* Enhanced CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 justify-center">
                  <div className="bg-transparent border-1xl mx-auto sm:mx-0" style={{ border: '1px solid #ff5c01', borderRadius: '0.5rem' }} >
                    <WalletMultiButton style={{ backgroundColor: '#282829', color: '#ff5c01', border: '1px solid #ff5c01', borderRadius: '0.5rem' }} />
                  </div>
                </div>
                {/* Contract Address Button */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleCopy}
                    className="bg-[#ff5c01] hover:bg-[#ff7f2a] text-white font-medium py-1.5 md:py-2 px-3 md:px-4 rounded-full border border-white/10 transition-all duration-300 flex items-center gap-1.5 md:gap-2 shadow-glow-sm text-sm md:text-base"
                    title="Copy contract address"
                  >
                    <span>{contractAddress}</span>
                    <Copy size={14} />
                    {copied && <span className="text-green-200 ml-2">Copied!</span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 flex flex-row gap-3 md:gap-4 z-20">
          <a 
            href="https://x.com/cobonxai" 
            target="https://x.com/cobonxai" 
            rel="noopener noreferrer"
            className="p-2 text-[#ff5c01] hover:text-white transition-all duration-300"
          >
            <RiTwitterXFill className="h-5 w-5" />
          </a>
          <a 
            href="https://letsbonk.fun" 
            target="https://letsbonk.fun" 
            rel="noopener noreferrer"
            className="p-2 text-[#ff5c01] hover:text-white transition-all duration-300"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </main>
      {/* Dog Image - background center on mobile, fixed right on desktop */}
      <img 
        src="/dog-new.png" 
        alt="Bonx Dog" 
        className="absolute md:fixed left-1/2 md:left-auto top-1/2 md:top-auto md:bottom-20 md:right-10 w-[576px] sm:w-[768px] md:w-[480px] h-auto z-0 md:z-10 select-none pointer-events-none transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 opacity-30 md:opacity-100" 
      />
    </div>
  )
}

