import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Link, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signIn, SignInResponse } from '@/api/sign-in';
import { useAuth } from '@/context/AuthProvider';
import { User } from 'lucide-react';
import { toast } from 'sonner';

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const [searchParams] = useSearchParams();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
      password: searchParams.get('password') ?? '',
    },
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      if (error.response?.status === 401) {
        toast.error('Credenciais inválidas.');
      } else {
        toast.error('Erro ao fazer login. Por favor, tente novamente mais tarde.');
      }
    },
  });

  async function handleSignIn(data: SignInForm) {
    try {
      const response: SignInResponse = await authenticate({ email: data.email, password: data.password });
      login({ token: response.token, user: response.user });
      window.location.href = "/dashboard";

      toast.success('Autenticado com sucesso.');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      toast.error('Erro ao fazer login. Por favor, tente novamente mais tarde.');
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Novo Cadastro</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex flex-row items-center justify-center">
              <User className="mr-2 w-11 h-11 text-foreground" />
              <h1 className="text-2xl font-semibold tracking-tight">
                Login do Usuário
              </h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Tenha um acompanhamento feito por IA e médico especializado na área de forma gratuita!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">e-mail</Label>
              <Input id="email" type="email" {...register('email')} placeholder="example@gmail.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">senha</Label>
              <Input id="password" type="password" {...register('password')} />
              <button type="button" className="mt-4 text-[14px] font-medium">
                redefinir senha
              </button>
            </div>

            <Button disabled={isSubmitting} className="w-full bg-[#001666]" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
