import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
      <div className="lg:flex">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={24}
              className="h-6 w-auto"
              priority
            />
          </Link>
        </div>
  )
}

export default Logo