import { api } from "@/lib/axios";

interface User {
  email: string,
  password: string
}

export interface SignInResponse {
  token: string;
  user: User;
  refresh_token: string;
}

export async function signIn({ email, password }: { email: string; password: string }): Promise<SignInResponse> {
  const response = await api.post('http://localhost:3000/user/login', { email, password });
  const { token, user, refresh_token } = response.data;
  return { token, user, refresh_token };
}