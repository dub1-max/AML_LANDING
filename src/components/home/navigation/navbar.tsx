import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Navbar = async () => {
    return (
        <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.logo className="w-8 h-8" />
                            <span className="text-lg font-medium">
                                AML
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-6">
                            <Link href="#about" className="hover:text-foreground/80 text-sm transition-colors">About KYCSync</Link>
                            <Link href="#features" className="hover:text-foreground/80 text-sm transition-colors">Key Features</Link>
                            <Link href="#compliance" className="hover:text-foreground/80 text-sm transition-colors">Compliance</Link>
                            <Link href="#solutions" className="hover:text-foreground/80 text-sm transition-colors">Solutions</Link>
                            <Link href="#pricing" className="hover:text-foreground/80 text-sm transition-colors">Pricing</Link>
                            <Link href="#contact" className="hover:text-foreground/80 text-sm transition-colors">Contact</Link>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                        {/* Removed sign-in and sign-up links for static site */}
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Navbar
