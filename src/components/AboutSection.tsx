import { Rocket, ShieldCheck, Users, TrendingUp } from "lucide-react"

const highlights = [
  { icon: Rocket, title: "Старт за минуту", text: "Регистрация без карты — просто заходи и пользуйся" },
  { icon: ShieldCheck, title: "Безопасность", text: "Шифрование банковского уровня для всех операций" },
  { icon: Users, title: "150 000+ пользователей", text: "Молодое поколение уже управляет деньгами с LinkUp" },
  { icon: TrendingUp, title: "Premium по желанию", text: "Открывай продвинутые функции, когда растут амбиции" },
]

export function AboutSection() {
  return (
    <section id="about" className="px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto rounded-2xl bg-[#141414] border border-[#262626] p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-400 mb-4">
              О компании
            </span>
            <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
              LinkUp — финансы на языке нового поколения
            </h2>
            <p className="mb-4 text-gray-400">
              Мы создали LinkUp для тех, кто ценит свободу и скорость. Никаких очередей, скрытых
              комиссий и сложных договоров — только удобный финтех-сервис в твоём телефоне.
            </p>
            <p className="text-gray-400">
              Начни бесплатно и подключай Premium-возможности тогда, когда они действительно нужны.
              LinkUp растёт вместе с тобой.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-[#1a1a1a] border border-[#262626] p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1f1f1f] border border-[#2a2a2a]">
                  <item.icon className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="mb-1 text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
