"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"
import { ArrowUpRight, Check, Send, Calendar, Video, Clock, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface FormData {
  name: string;
  email: string;
  message: string;
  projectType: string[];
}

export function LetsWorkTogether() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    let isInitial = true
    let timeoutId: ReturnType<typeof setTimeout>
    const observer = new ResizeObserver(() => {
      if (isInitial) {
        isInitial = false
        return
      }
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        window.dispatchEvent(new Event("resize"))
      }, 150)
    })
    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [])

  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [contactMode, setContactMode] = useState<"form" | "call">("form")

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    projectType: [],
  })

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (isClicked) return
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType
      if (checked) {
        if (currentTypes.includes(type)) return prev
        return { ...prev, projectType: [...currentTypes, type] }
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) }
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Automatically format and open mailto with form contents
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Types: ${formData.projectType.join(", ")}\n\nMessage:\n${formData.message}`
    )
    window.open(`mailto:prabalsingh1410@gmail.com?subject=${subject}&body=${body}`, "_blank")
  }

  const projectTypeOptions = [
    "Website", "Mobile App", "Web App", "E-Commerce",
    "Brand Identity", "3D & Animation", "Social Media Marketing",
    "Brand Strategy & Consulting", "Other"
  ]

  return (
    <section id="contact" className="relative flex min-h-screen w-full items-center justify-center px-4 sm:px-6 py-4 overflow-hidden">
      {/* Animated Shader Background with instant CSS gradient fallback to eliminate load delay */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 70%, #5606ff 0%, #000000 75%), radial-gradient(circle at 80% 25%, #fe8989 0%, transparent 60%), #000000",
        }}
      >
        <ShaderGradientCanvas
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          pointerEvents="none"
          fov={50}
          pixelDensity={1}
        >
          <ShaderGradient
            animate="on"
            brightness={1.1}
            cAzimuthAngle={180}
            cDistance={3.91}
            cPolarAngle={135}
            cameraZoom={1}
            color1="#5606ff"
            color2="#fe8989"
            color3="#000000"
            envPreset="city"
            grain="off"
            lightType="3d"
            positionX={-0.5}
            positionY={2.6}
            positionZ={0.2}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={465}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1.1}
            uFrequency={5.5}
            uSpeed={0.1}
            uStrength={2.4}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl">
        
        {/* Initial Interactive CTA View */}
        <div
          className="flex flex-col items-center gap-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
            pointerEvents: isClicked ? "none" : "auto",
            display: showSuccess ? "none" : "flex",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Available for projects
            </span>
          </div>

          <div
            className="group relative cursor-pointer select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
          >
            <div className="flex flex-col items-center gap-6">
              <h2 className="relative text-center text-5xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="block overflow-hidden">
                  <span
                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transform: isHovered ? "translateY(-8%)" : "translateY(0)",
                    }}
                  >
                    Let&apos;s work
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span
                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                    style={{
                      transform: isHovered ? "translateY(-8%)" : "translateY(0)",
                    }}
                  >
                    <span className="text-muted-foreground/60">together</span>
                  </span>
                </span>
              </h2>

              <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
                <div
                  className="pointer-events-none absolute inset-0 rounded-full border transition-all duration-500 ease-out"
                  style={{
                    borderColor: isHovered ? "var(--foreground)" : "var(--border)",
                    backgroundColor: isHovered ? "var(--foreground)" : "transparent",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <ArrowUpRight
                  className="size-6 sm:size-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered ? "translate(2px, -2px)" : "translate(0, 0)",
                    color: isHovered ? "var(--background)" : "var(--foreground)",
                  }}
                />
              </div>
            </div>

            <div className="hidden sm:block absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2">
              <div
                className="h-px w-8 sm:w-12 bg-border transition-all duration-500"
                style={{
                  transform: isHovered ? "scaleX(1.5)" : "scaleX(1)",
                  opacity: isHovered ? 1 : 0.5,
                }}
              />
            </div>
            <div className="hidden sm:block absolute -right-8 md:-right-16 top-1/2 -translate-y-1/2">
              <div
                className="h-px w-8 sm:w-12 bg-border transition-all duration-500"
                style={{
                  transform: isHovered ? "scaleX(1.5)" : "scaleX(1)",
                  opacity: isHovered ? 1 : 0.5,
                }}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center gap-4 text-center">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Have a project in mind? Click above or drop a note below. Let&apos;s create something exceptional together.
            </p>
            <span className="text-xs tracking-widest uppercase text-muted-foreground/60">
              prabalsingh1410@gmail.com
            </span>
          </div>
        </div>

        {/* Interactive Form View (Appears on click) */}
        <div
          className="flex flex-col items-center justify-center gap-4 sm:gap-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full max-w-2xl"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
            display: !isClicked && !showSuccess ? "none" : "flex",
          }}
        >
          {/* Elegant heading */}
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-white/80 drop-shadow-sm">
              Perfect
            </span>
            <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white drop-shadow-md">
              Let&apos;s talk
            </h3>
            <p className="text-xs sm:text-sm text-white/85 drop-shadow-sm">
              Fill out below or email at{" "}
              <a href="mailto:prabalsingh1410@gmail.com" className="font-semibold underline underline-offset-4 text-white hover:text-white/70 transition-colors">
                prabalsingh1410@gmail.com
              </a>
            </p>
          </div>

          {/* Mode Switcher between Inquiry Form and Discovery Call */}
          <div className="flex items-center justify-center gap-1.5 p-1.5 bg-black/60 backdrop-blur-2xl border border-white/20 rounded-full w-fit shadow-lg my-1">
            <button
              type="button"
              onClick={() => setContactMode("form")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                contactMode === "form"
                  ? "bg-white text-black shadow-md scale-[1.02]"
                  : "text-white/75 hover:text-white hover:bg-white/10"
              }`}
            >
              <Send className="size-3 sm:size-3.5" />
              <span>Project Inquiry</span>
            </button>
            <button
              type="button"
              onClick={() => setContactMode("call")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                contactMode === "call"
                  ? "bg-white text-black shadow-md scale-[1.02]"
                  : "text-white/75 hover:text-white hover:bg-white/10"
              }`}
            >
              <Calendar className={`size-3 sm:size-3.5 ${contactMode === "call" ? "text-emerald-600" : "text-emerald-400"}`} />
              <span>Book Discovery Call</span>
            </button>
          </div>

          {contactMode === "call" ? (
            <div className="space-y-5 text-left w-full bg-black/55 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex size-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">15-30 Minute Strategy Session</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                    Technical Discovery Call
                  </h4>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-white/85 text-xs sm:text-sm">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Video className="size-3.5 text-blue-400" /> Google Meet / Zoom
                  </span>
                  <span className="opacity-75 flex items-center gap-1">
                    <Clock className="size-3 text-emerald-400" /> 100% Free Consultation
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-white/85 text-xs sm:text-sm leading-relaxed">
                <p>
                  Skip the long back-and-forth emails and jump directly into a structured technical discussion. We will evaluate your system architecture, discuss scope feasibility, and map out clear deployment milestones.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/10 border border-white/15 text-xs">
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold shrink-0">1</span>
                    <span className="text-white/95 font-medium">Architecture &amp; Tech Stack recommendations</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/10 border border-white/15 text-xs">
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold shrink-0">2</span>
                    <span className="text-white/95 font-medium">Scope breakdown &amp; milestone roadmap</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/10 border border-white/15 text-xs">
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold shrink-0">3</span>
                    <span className="text-white/95 font-medium">Feasibility &amp; transparent budget pricing</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/10 border border-white/15 text-xs">
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold shrink-0">4</span>
                    <span className="text-white/95 font-medium">Zero sales pressure — actionable insights</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://cal.com/prabal-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-black hover:bg-white/90 font-bold h-11 sm:h-12 rounded-xl transition-all duration-300 shadow-lg hover:shadow-white/20 hover:scale-[1.02] text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer group/call no-underline"
                >
                  <Calendar className="size-4 text-emerald-600 transition-transform group-hover/call:scale-110" />
                  <span>Schedule on Cal.com</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover/call:translate-x-0.5 group-hover/call:-translate-y-0.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setContactMode("form")}
                  className="px-5 bg-white/10 text-white hover:bg-white/20 font-bold h-11 sm:h-12 rounded-xl border border-white/25 transition-all duration-300 text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="size-3.5 opacity-80" />
                  <span>Prefer typing? Write a note</span>
                </button>
              </div>
            </div>
          ) : isSubmitted ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center bg-black/50 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              <div className="flex size-14 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/20 text-emerald-300">
                <Check className="size-7" />
              </div>
              <h4 className="text-xl font-medium text-white mt-1">Message Prepared!</h4>
              <p className="text-xs sm:text-sm text-white/80 max-w-md leading-relaxed">
                Thank you for reaching out! Your default email client has been opened with your message pre-formatted. If it didn&apos;t open, feel free to contact me directly at <strong className="text-white">prabalsingh1410@gmail.com</strong>.
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="mt-2 border-white/30 text-white hover:bg-white/20 bg-white/10 rounded-full px-6 py-4 h-auto text-xs uppercase tracking-wider font-semibold cursor-pointer backdrop-blur-md transition-all"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-left w-full bg-black/55 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-white/90 text-[11px] uppercase tracking-wider font-bold">Your name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/55 focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:border-white/50 focus:bg-white/15 rounded-xl h-10 text-sm backdrop-blur-sm transition-all duration-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-white/90 text-[11px] uppercase tracking-wider font-bold">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/55 focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:border-white/50 focus:bg-white/15 rounded-xl h-10 text-sm backdrop-blur-sm transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-white/90 text-[11px] uppercase tracking-wider font-bold">Briefly describe your project idea...</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project scope, timeline, budget, or ideas..."
                  className="min-h-[75px] sm:min-h-[85px] bg-white/10 border-white/20 text-white placeholder:text-white/55 focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:border-white/50 focus:bg-white/15 rounded-xl text-sm resize-y p-3 leading-relaxed backdrop-blur-sm transition-all duration-200"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 pt-1">
                <p className="text-white/90 text-[11px] uppercase tracking-wider font-bold">I&apos;m looking for...</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projectTypeOptions.map((option) => {
                    const optionId = option.replace(/\s/g, "-").toLowerCase()
                    const isChecked = formData.projectType.includes(option)
                    return (
                      <div
                        key={option}
                        onClick={() => handleCheckboxChange(option, !isChecked)}
                        className={`flex items-center space-x-2 p-2.5 rounded-xl border cursor-pointer transition-all duration-200 backdrop-blur-sm ${
                          isChecked
                            ? "bg-white text-black border-white font-bold shadow-md scale-[1.02]"
                            : "bg-white/10 border-white/20 text-white/90 hover:border-white/40 hover:bg-white/20"
                        }`}
                      >
                        <Checkbox
                          id={optionId}
                          checked={isChecked}
                          onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                          className={`border-current transition-colors pointer-events-none ${
                            isChecked ? "data-[state=checked]:bg-black data-[state=checked]:text-white border-black" : "border-white/50"
                          }`}
                        />
                        <Label
                          htmlFor={optionId}
                          className="text-[11px] leading-tight cursor-pointer select-none truncate font-normal text-current pointer-events-none"
                        >
                          {option}
                        </Label>
                      </div>
                    )
                  })}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 font-bold h-11 rounded-xl transition-all duration-300 shadow-lg hover:shadow-white/20 hover:scale-[1.01] text-xs tracking-widest uppercase mt-4 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Send a message</span>
                <Send className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
