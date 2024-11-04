import { Building, ChevronDown, LogOut } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Skeleton } from './ui/skeleton';
import { Dialog, DialogTrigger } from './ui/dialog';
import { useNavigate } from 'react-router-dom';
import { signOut } from '@/api/sign-out';
import { useAuth } from '../context/AuthProvider';

export function AccountMenu() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const { isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/dashboard', { replace: true });
    },
    onError: (error) => {
      console.error('Erro ao fazer logout:', error);
    },
  });

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 select-none">
            {isSigningOut ? (
              <Skeleton className="w-40 h-4" />
            ) : (
              user?.name
            )}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isSigningOut ? (
              <div className="space-y-1.5">
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-24 h-3" />
              </div>
            ) : (
              <>
                <span>{user?.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {user?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="w-4 h-4 mr-2" />
              <span>Perfil</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            asChild
            disabled={isSigningOut}
            className="text-blue dark:text-blue-500"
          >
            <button className="w-full" onClick={() => logout()}>
              <LogOut className="w-4 h-4 mr-2" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  );
}
