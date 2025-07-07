import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards, reviews, aboutStats, keyFeatures, complianceCards, solutions, contactInfo } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon, Zap, Mail, MapPin, Bolt, Database, Bell, Search, Monitor, Lock, User, Server, Palette, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">


            {/* hero */}
            <Wrapper>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                                Introducing KYCSync
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>

                        <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
                            <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                            Advanced KYC/AML Compliance Solution
                            </h1>
                            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                            Screen your customers with speed and accuracy in an increasingly complex regulatory environment.ce.
                            </p>
                            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                                <Link href="#" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                                        ✨ {"  "} Start building your dream website now!
                                    </p>
                                    <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
                                        Get Started
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative flex items-center py-10 md:py-20 w-full">
                            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                                <Image
                                    src="/assets/dashboard.svg"
                                    alt="banner image"
                                    width={1200}
                                    height={1200}
                                    quality={100}
                                    className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                                />

                                <BorderBeam size={250} duration={12} delay={9} />
                            </div>
                        </div>
                    </div>
                </Container>

                {/* LAMP CONTAINER */}
                
                <Container>
                <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                                From Idea to Launch <br /> Faster Than Ever
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Build stunning websites with AML&apos;s intuitive drag-and-drop builder and powerful AI assistant
                            </p>
                            <Button variant="white" className="mt-6" asChild>
                                <Link href="/sign-in">
                                    Get started for free
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                </Container>
            </Wrapper>

            {/* About Section */}
            <Wrapper id="about" className="flex flex-col items-center justify-center py-12 relative scroll-mt-14">
                <Container>
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1">
                            <SectionBadge title="About KYCsync" />
                            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">About KYCSync</h2>
                            <p className="text-muted-foreground mt-6">
                                In today's increasingly complex regulatory environment, it's more important than ever to ensure that your business is fully compliant with UAE laws and regulations. KYCSync understands the challenges that businesses in the UAE face when it comes to KYC and AML compliance, that's why we're here to help.<br/><br/>
                                By leveraging the latest digital onboarding solutions, we provide a streamlined customer journey that simplifies the compliance onboarding process for your business. Making it as easy as possible to carry out AML/KYC and IDV checks, so you can focus on running your business smoothly.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 items-center md:items-end">
                            {aboutStats.map((stat) => (
                                <div key={stat.label} className="bg-muted rounded-lg px-8 py-6 text-center shadow-md">
                                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-muted-foreground mt-2">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>
            <br/> 
            <br/> 
            



            {/* Key Features */}
            <Wrapper id="features" className="flex flex-col items-center justify-center py-12 relative scroll-mt-14">
                <Container>
                    <SectionBadge title="Key Features" />
                    <h2 className="text-3xl lg:text-4xl font-semibold mt-6">Key Features</h2>
                    <p className="text-muted-foreground mt-6">Our comprehensive solution offers everything you need for regulatory compliance</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {keyFeatures.map((feature) => (
                            <div key={feature.title} className="bg-muted rounded-lg p-8 shadow-md flex flex-col items-start">
                                {feature.icon === Icons.bolt && <Bolt className="w-8 h-8 text-primary mb-4" />}
                                {feature.icon === Icons.database && <Database className="w-8 h-8 text-primary mb-4" />}
                                {feature.icon === Icons.bell && <Bell className="w-8 h-8 text-primary mb-4" />}
                                {feature.icon === Icons.search && <Search className="w-8 h-8 text-primary mb-4" />}
                                {feature.icon === Icons.monitor && <Monitor className="w-8 h-8 text-primary mb-4" />}
                                {feature.icon === Icons.lock && <Lock className="w-8 h-8 text-primary mb-4" />}
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.info}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>

            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 


            {/* Compliance & Regulations */}
            <Wrapper id="compliance" className="flex flex-col items-center justify-center py-12 relative scroll-mt-14">
                <Container>
                    <SectionBadge title="Compliance & Regulations" />
                    <h2 className="text-3xl lg:text-4xl font-semibold mt-6">Compliance & Regulations</h2>
                    <p className="text-muted-foreground mt-6">Stay ahead of regulatory requirements in the UAE</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {complianceCards.map((card) => (
                            <div key={card.title} className="bg-muted rounded-lg p-8 shadow-md flex flex-col items-start">
                                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                <p className="text-muted-foreground">{card.info}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 

            {/* Our Solutions */}
            <Wrapper id="solutions" className="flex flex-col items-center justify-center py-12 relative scroll-mt-14">
                <Container>
                    <SectionBadge title="Our Solutions" />
                    <h2 className="text-3xl lg:text-4xl font-semibold mt-6">Our Solutions</h2>
                    <p className="text-muted-foreground mt-6">Stay ahead of regulatory compliance with our diverse solutions</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {solutions.map((solution) => (
                            <div key={solution.title} className="bg-muted rounded-lg p-8 shadow-md flex flex-col items-start">
                                {solution.icon === Icons.user && <User className="w-8 h-8 text-primary mb-4" />}
                                {solution.icon === Icons.server && <Server className="w-8 h-8 text-primary mb-4" />}
                                {solution.icon === Icons.palette && <Palette className="w-8 h-8 text-primary mb-4" />}
                                {solution.icon === Icons.shield && <ShieldCheck className="w-8 h-8 text-primary mb-4" />}
                                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                                <p className="text-muted-foreground">{solution.info}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>  

            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 


            {/* pricing */}
            <Wrapper id="pricing" className="flex flex-col items-center justify-center py-12 relative scroll-mt-14">
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Pricing" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Unlock the right plan for your business
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Choose the best plan for your business and start building your dream website today
                        </p>
                    </div>
                </Container>
                <Container className="flex items-center justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
                        {pricingCards.map((card) => (
                            <Card
                                key={card.title}
                                className={cn("flex flex-col w-full border-neutral-700",
                                    card.title === "Unlimited Saas" && "border-2 border-primary"
                                )}
                            >
                                <CardHeader className="border-b border-border">
                                    <span>
                                        {card.title}
                                    </span>
                                    <CardTitle className={cn(card.title !== "Unlimited Saas" && "text-muted-foreground")}>
                                        {card.price}
                                    </CardTitle>
                                    <CardDescription>
                                        {card.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-3">
                                    {card.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 fill-primary text-primary" />
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter className="mt-auto">
                                    <Link
                                        href="#"
                                        className={cn(
                                            "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
                                            card.title !== "Unlimited Saas" && "!bg-foreground !text-background"
                                        )}
                                    >
                                        {card.buttonText}
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Wrapper>


            {/* testimonials */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Our Customers" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            What people are saying
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            See how AML empowers businesses of all sizes. Here&apos;s what real people are saying on Twitter
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="py-10 md:py-20 w-full">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                            <Marquee pauseOnHover className="[--duration:20s] select-none">
                                {firstRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                {secondRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </Container>
            </Wrapper>
            


            {/* newsletter */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                
                <Container className="relative z-[999999]">
                    <div className="flex items-center justify-center w-full -mt-40">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <h4 className="text-xl md:text-2xl font-semibold">
                                    Join our newsletter
                                </h4>
                                <p className="text-base text-muted-foreground">
                                    Be up to date with everything about AI builder
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                                <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                    <Input
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                                    />
                                    <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
                                        Subscribe
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    By subscribing you agree with our{" "}
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 





            {/* Get in Touch */}
            <Wrapper id="contact" className="flex flex-col items-center justify-center py-12 relative scroll-mt-14">
                <Container>
                    <SectionBadge title="Get in Touch" />
                    <h2 className="text-3xl lg:text-4xl font-semibold mt-6">Get in Touch</h2>
                    <p className="text-muted-foreground mt-6">Let us help you grow your business with secure, frictionless, & fully compliant digital onboarding</p>
                    <div className="flex flex-col md:flex-row gap-12 mt-10 w-full">
                        <div className="flex-1 flex flex-col gap-8">
                            <div className="bg-muted rounded-lg p-8 shadow-md flex flex-col items-start">
                                <Mail className="w-8 h-8 text-primary mb-2" />
                                <h3 className="text-lg font-semibold mb-2">Email</h3>
                                <p className="text-muted-foreground">{contactInfo.email}</p>
                            </div>
                            <div className="bg-muted rounded-lg p-8 shadow-md flex flex-col items-start">
                                <MapPin className="w-8 h-8 text-primary mb-2" />
                                <h3 className="text-lg font-semibold mb-2">Address</h3>
                                <p className="text-muted-foreground">{contactInfo.address}</p>
                            </div>
                        </div>
                        <form className="flex-1 bg-muted rounded-lg p-8 shadow-md flex flex-col gap-4">
                            <Input type="email" placeholder="Email" required />
                            <Input type="text" placeholder="Subject" required />
                            <Input type="file" />
                            <textarea className="rounded-md border border-border p-2 min-h-[100px]" placeholder="Type your message" required />
                            <Button type="submit" className="mt-2">Send Message</Button>
                        </form>
                    </div>
                </Container>
            </Wrapper>

        </section>
    )
};

export default HomePage
