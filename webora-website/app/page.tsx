"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Target, Users, Star, CheckCircle, Globe, ShoppingCart, FileText } from "lucide-react"

export default function WeboraLandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent animate-gradient opacity-95" />
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" />
        <div
          className="absolute bottom-32 right-16 w-16 h-16 bg-primary-foreground/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent/30 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <Badge className="mb-6 bg-accent/20 text-primary-foreground border-accent/30 hover:bg-accent/30 transition-colors">
            ✨ Agência Digital Premium
          </Badge>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Transformamos suas ideias em <span className="text-accent animate-pulse">sites que vendem</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Com a Webora, seu negócio conquista presença digital de verdade. Criamos experiências que convertem
            visitantes em clientes.
          </p>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold animate-pulse-glow transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            Quero meu site agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-12 flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Sobre a Webora</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              Paixão por design que <span className="text-accent">gera resultados</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Somos especialistas em criar sites que não apenas impressionam visualmente, mas que realmente convertem.
              Com anos de experiência e centenas de projetos entregues, sabemos exatamente o que funciona no mundo
              digital.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center scroll-reveal">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Tecnologia Avançada</h3>
                <p className="text-muted-foreground">
                  Utilizamos as mais modernas tecnologias para garantir performance e segurança.
                </p>
              </div>

              <div className="text-center scroll-reveal">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Foco em Conversão</h3>
                <p className="text-muted-foreground">
                  Cada elemento é pensado para transformar visitantes em clientes reais.
                </p>
              </div>

              <div className="text-center scroll-reveal">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Suporte Dedicado</h3>
                <p className="text-muted-foreground">
                  Acompanhamento completo desde o projeto até o lançamento e além.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">Nossos Serviços</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              Soluções completas para seu <span className="text-primary">sucesso digital</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-reveal border-border/50 hover:border-accent/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4">Sites Modernos</h3>
                <p className="text-muted-foreground mb-6">
                  Sites responsivos e otimizados que impressionam e convertem em qualquer dispositivo.
                </p>
                <div className="text-accent font-semibold group-hover:text-accent/80 transition-colors">
                  A partir de R$ 2.997
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-reveal border-border/50 hover:border-accent/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4">Landing Pages</h3>
                <p className="text-muted-foreground mb-6">
                  Páginas de alta conversão focadas em transformar visitantes em leads qualificados.
                </p>
                <div className="text-accent font-semibold group-hover:text-accent/80 transition-colors">
                  A partir de R$ 1.497
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-reveal border-border/50 hover:border-accent/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4">Lojas Virtuais</h3>
                <p className="text-muted-foreground mb-6">
                  E-commerce completo com sistema de pagamento e gestão de produtos integrados.
                </p>
                <div className="text-accent font-semibold group-hover:text-accent/80 transition-colors">
                  A partir de R$ 4.997
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-reveal border-border/50 hover:border-accent/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4">Sites Institucionais</h3>
                <p className="text-muted-foreground mb-6">
                  Presença digital profissional que transmite credibilidade e autoridade.
                </p>
                <div className="text-accent font-semibold group-hover:text-accent/80 transition-colors">
                  A partir de R$ 2.497
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Por que escolher a Webora?</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              Resultados que <span className="text-accent">falam por si</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center scroll-reveal">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+90%</div>
              <div className="text-lg font-semibold mb-2">Aumento em Conversão</div>
              <p className="text-muted-foreground">Nossos clientes veem resultados reais em suas vendas online</p>
            </div>

            <div className="text-center scroll-reveal">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-lg font-semibold mb-2">Projetos Entregues</div>
              <p className="text-muted-foreground">Experiência comprovada em diversos segmentos</p>
            </div>

            <div className="text-center scroll-reveal">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24h</div>
              <div className="text-lg font-semibold mb-2">Tempo de Resposta</div>
              <p className="text-muted-foreground">Suporte ágil quando você mais precisa</p>
            </div>

            <div className="text-center scroll-reveal">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">Satisfação Garantida</div>
              <p className="text-muted-foreground">Compromisso total com a qualidade e resultado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Depoimentos</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              O que nossos clientes <span className="text-accent">dizem</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="scroll-reveal">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "A Webora transformou completamente nossa presença online. As vendas aumentaram 150% em apenas 3
                  meses!"
                </p>
                <div className="flex items-center">
                  <img src="/professional-woman-headshot.png" alt="Cliente" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">Maria Silva</div>
                    <div className="text-sm text-muted-foreground">CEO, Fashion Store</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-reveal">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Profissionalismo excepcional! O site ficou exatamente como imaginávamos, só que melhor."
                </p>
                <div className="flex items-center">
                  <img src="/professional-man-headshot.png" alt="Cliente" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">João Santos</div>
                    <div className="text-sm text-muted-foreground">Diretor, Tech Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-reveal">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Suporte incrível e resultados que superaram todas as expectativas. Recomendo de olhos fechados!"
                </p>
                <div className="flex items-center">
                  <img src="/professional-headshot-woman-2.png" alt="Cliente" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">Ana Costa</div>
                    <div className="text-sm text-muted-foreground">Fundadora, Beauty Clinic</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto scroll-reveal">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
              Seu próximo cliente já está online.
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
              O que falta é o seu site estar lá também. Não perca mais vendas por falta de presença digital
              profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button variant="link"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-xl font-semibold animate-pulse-glow transition-all duration-300 hover:scale-105"
              >
                Solicitar agora meu site com a Webora
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="flex items-center justify-center text-primary-foreground/80">
                <CheckCircle className="h-6 w-6 mr-3 text-accent" />
                <span>Entrega em até 15 dias</span>
              </div>
              <div className="flex items-center justify-center text-primary-foreground/80">
                <CheckCircle className="h-6 w-6 mr-3 text-accent" />
                <span>Suporte por 6 meses</span>
              </div>
              <div className="flex items-center justify-center text-primary-foreground/80">
                <CheckCircle className="h-6 w-6 mr-3 text-accent" />
                <span>Garantia de satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-4 text-accent">Webora</h3>
            <p className="text-background/80 mb-6">Transformando ideias em sites que vendem desde 2020</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Instagram
              </a>
              
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                WhatsApp
              </a>
            </div>
            <div className="border-t border-background/20 pt-8">
              <p className="text-background/60 text-sm">© 2024 Webora. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
