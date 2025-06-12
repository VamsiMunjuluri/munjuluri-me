import Image from "next/image";
import Link from "next/link";
import CalEmbed from "@/components/CalEmbed";

export default function Navbar() {
  return (
    <div className="flex justify-between px-4 py-3">
      <Link href="/" className="inline-block" draggable={false}>
        <Image
          src="/images/favicon.png"
          alt="logo"
          width={36}
          height={36}
          className="w-7 h-7 sm:w-9 sm:h-9"
        />
      </Link>
      <CalEmbed />
    </div>
  );
}
