import Link from "next/link"
import { Instagram, Youtube, Github } from "lucide-react"

type SocialIconProps = {
  Icon: React.ComponentType<{ size?: number; className?: string }>
  href: string
}

const SocialIcon = ({ Icon, href }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Icon size={22} />
  </a>
)

type FooterLinkSectionProps = {
  title: string
  links: { href: string; text: string }[]
}

const FooterLinkSection = ({ title, links }: FooterLinkSectionProps) => (
  <div>
    <h3 className="mb-4 text-sm font-semibold text-foreground text-center md:text-left">
      {title}
    </h3>
    <ul className="space-y-2 text-sm text-muted-foreground text-center md:text-left">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="hover:text-primary transition-colors"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

/* ------------------ Data ------------------ */

const Articles = [
  { href: "/articles?category=Literature", text: "Literature" },
  { href: "/articles?category=Science", text: "Science & Tech" },
  { href: "/articles?category=National", text: "National" },
  { href: "/articles?category=World", text: "World" },
  { href: "/articles?category=BNKS", text: "BNKS Stories" },
]

const Notices = [
  { href: "/notices?category=General", text: "General News" },
  { href: "/notices?category=Departments", text: "Departments" },
  { href: "/notices?category=School", text: "School Administration" },
  { href: "/notices?category=Council", text: "Student Council" },
  { href: "/notices?category=Clubs", text: "Clubs & Events" },
]

const socialIcons = [
  { Icon: Instagram, href: "https://www.instagram.com/parewa_bnks" },
  { Icon: Github, href: "https://github.com/suyogprasai/parewa" },
  { Icon: Youtube, href: "https://www.youtube.com/@parewa_bnks" },
]

/* ------------------ Footer ------------------ */

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container mx-auto px-4 py-16 lg:px-12 max-w-4xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Guides
            </h2>
            <p className="mb-6 max-w-xs text-sm text-muted-foreground">
              Parewa is a student-driven information delivery platform developed
              entirely by the students of Budhanilkantha School.
              <span className="mt-1 block font-medium text-foreground">
                Your news, your way.
              </span>
            </p>

            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <SocialIcon key={index} Icon={Icon} href={href} />
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <FooterLinkSection title="Articles" links={Articles} />
            <FooterLinkSection title="News & Notices" links={Notices} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Guides. All rights reserved.
          </p>
          <p className="mt-1">Guides</p>
        </div>
      </div>
    </footer>
  )
}
