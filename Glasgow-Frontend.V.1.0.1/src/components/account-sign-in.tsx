import { useAuth } from "@/context/AuthProvider";
import { LogOut } from "lucide-react";

export function AccountSignIn() {
  const { logout } = useAuth()

  return (
    <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => logout}>
       <LogOut className="inline-block w-4 h-4 mr-2" />
       Sair
    </span>
  );
}