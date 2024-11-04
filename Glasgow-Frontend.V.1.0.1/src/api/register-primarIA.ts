import { api } from '@/lib/axios';

export interface RegisterPrimarIABody {
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: boolean;
}

export async function registerPrimarIA({
  email,
  name,
  phone,
  password,
}: RegisterPrimarIABody) {
  try {
    await api.post('user/register', { email, name, phone, password });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to register PrimarIA user';
    console.error('Error registering PrimarIA user:', errorMessage);
    throw new Error(errorMessage);
  }
}
