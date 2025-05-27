import Image from "next/image";

export default function SocialsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-center mb-5 mt-8">
        Now that you&apos;re here, go follow my socials!
      </h1>

      {/* Mobile Swiper */}
      <div className="block md:hidden flex justify-center">
        <div
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 px-2"
          style={{ scrollPadding: "1rem" }}
        >
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`snap-center shrink-0 w-[85vw] max-w-sm min-h-[75vh] rounded-2xl p-6 flex flex-col items-center justify-center ${social.bg}`}
            >
              <div className="w-4/5 max-w-[280px] aspect-square relative mb-4">
                <Image
                  src={`/images/qrs/${social.qr}`}
                  alt={`${social.name} QR`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-xl font-semibold">{social.name}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex justify-center mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition ${social.bg}`}
            >
              <div className="w-40 h-40 relative mb-4">
                <Image
                  src={`/images/qrs/${social.qr}`}
                  alt={`${social.name} QR`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xl font-semibold">{social.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/vamsimunjuluri",
    qr: "github.png",
    bg: "bg-gradient-to-br from-gray-800 to-gray-600",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourhandle",
    qr: "instagram.png",
    bg: "bg-gradient-to-br from-pink-500 to-yellow-400",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/vamsimunjuluri",
    qr: "linkedin.png",
    bg: "bg-gradient-to-br from-blue-600 to-cyan-400",
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/yourhandle",
    qr: "x.png",
    bg: "bg-gradient-to-br from-neutral-700 to-neutral-900",
  },
];
