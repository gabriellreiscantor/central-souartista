import React from 'react';
import { Layout } from '@/components/Layout';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@souartista.app',
      link: 'mailto:contato@souartista.app'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+55 (11) 99999-9999',
      link: 'https://wa.me/5511999999999'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      value: 'Seg - Sex: 9h às 18h',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/souartista.app' },
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/souartistaapp' },
    { icon: Youtube, name: 'YouTube', url: 'https://youtube.com/@souartista' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar. Envie sua mensagem e nossa equipe responderá o mais breve possível.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          E-mail *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Assunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Assunto da mensagem"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Escreva sua mensagem aqui..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="order-1 lg:order-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Redes Sociais</h2>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                        title={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* FAQ Prompt */}
                <div className="bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-2xl p-6 border border-primary/20">
                  <h3 className="font-semibold text-lg mb-2">Dúvidas Frequentes?</h3>
                  <p className="text-muted-foreground mb-4">
                    Confira nossa seção de perguntas frequentes para respostas rápidas.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/#faq">Ver FAQ</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
