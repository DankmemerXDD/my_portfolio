import { useI18n } from "../i18n/I18nProvider"
import { motion } from "framer-motion"
import { ParticlesBackground } from "./ParticlesBackground"
import { UtensilsCrossed, Clapperboard, Cpu } from "lucide-react"

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export function Services() {
  const { t } = useI18n()
  const items = [
    {
      title: "Cooking",
      desc: t("projects.chef.subtitle"),
      icon: (
        <UtensilsCrossed
          size={40}
          className="text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300 group-hover:drop-shadow-[0_0_10px_rgba(129,140,248,0.8)]"
        />
      ),
    },
    {
      title: "VFX",
      desc: t("projects.vfx.subtitle"),
      icon: (
        <Clapperboard
          size={40}
          className="text-pink-400 transition-colors duration-300 group-hover:text-pink-300 group-hover:drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]"
        />
      ),
    },
    {
      title: "Computer Science",
      desc: t("projects.cs.subtitle"),
      icon: (
        <Cpu
          size={40}
          className="text-green-400 transition-colors duration-300 group-hover:text-green-300 group-hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]"
        />
      ),
    },
  ]

  return (
    <section id="services" className="relative bg-gray-950 py-20 text-white">
      <ParticlesBackground type="bubbles" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-2 text-white/70">{t("services.subtitle")}</p>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              variants={serviceVariants}
              initial="hidden"
              whileInView="show"
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">{it.icon}</div>
              <h3 className="mt-2 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
