import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { registerPrimarIA } from '@/api/register-primarIA';

const signUpForm = z.object({
  managerName: z.string().nonempty('Nome é obrigatório'),
  phone: z.string().nonempty('Telefone é obrigatório').trim(),
  email: z.string().email('Email inválido').nonempty('Email é obrigatório'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres').nonempty('Senha é obrigatória'),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  });

  const { mutateAsync: registerPrimarIAFn } = useMutation({
    mutationFn: registerPrimarIA,
  });

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerPrimarIAFn({
        name: data.managerName,
        email: data.email,
        phone: data.phone,
        password: data.password,
        isAdmin: false,
      });

      toast.success('Cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Erro ao cadastrar! Por favor, tente novamente mais tarde.');
      }
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />

      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">
              Criar Conta Grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Torne-se nosso parceiro e assuma a responsabilidade pelo monitoramento da sua saúde!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="managerName">nome completo</Label>
              <Input
                id="managerName"
                type="text"
                placeholder="Ex: João"
                {...register('managerName')}
              />
              {errors.managerName && <p className="text-sm text-red-500">{errors.managerName.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mínimo 8 caracteres"
                {...register('password')}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">e-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                {...register('email')}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">telefone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(99) 99999-9999"
                {...register('phone')}
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
            </div>

            <Button disabled={isSubmitting} className="w-full bg-[#001666]" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-sm leading-relaxed text-center text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="" className="underline underline-offset-4">
                termos de serviço
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
