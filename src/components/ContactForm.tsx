import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate email sending - in production, you would integrate with a service like EmailJS or Formspree
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll just log the data and show success
      console.log('Form data:', data);
      
      setIsSubmitted(true);
      reset();
      toast.success('Mensagem enviada com sucesso! Retornarei em breve.');
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="project-card">
        <CardContent className="p-8 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-display font-semibold">Mensagem Enviada!</h3>
            <p className="text-muted-foreground">
              Obrigada pelo contato! Retornarei sua mensagem em breve.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Enviar Nova Mensagem
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="project-card">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Mail className="h-5 w-5 mr-2 text-primary" />
          Enviar Mensagem
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                {...register('name', { required: 'Nome é obrigatório' })}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-sm text-red-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.name.message}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Email inválido'
                  }
                })}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Assunto *</Label>
            <Input
              id="subject"
              {...register('subject', { required: 'Assunto é obrigatório' })}
              className={errors.subject ? 'border-red-500' : ''}
            />
            {errors.subject && (
              <p className="text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensagem *</Label>
            <Textarea
              id="message"
              rows={6}
              {...register('message', { 
                required: 'Mensagem é obrigatória',
                minLength: {
                  value: 10,
                  message: 'Mensagem deve ter pelo menos 10 caracteres'
                }
              })}
              className={errors.message ? 'border-red-500' : ''}
              placeholder="Conte-me sobre seu projeto arquitetônico..."
            />
            {errors.message && (
              <p className="text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.message.message}
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            size="lg" 
            variant="warm"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            * Campos obrigatórios. Sua privacidade é respeitada e seus dados não serão compartilhados.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;