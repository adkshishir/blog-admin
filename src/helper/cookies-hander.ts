'use server';
import { cookies } from 'next/headers';

export async function getCookie(name: string) {
  const cookieStore = cookies();
  return cookieStore.get(name)?.value;
}
export async function setCookie(name: string, value: string) {
  const cookieStore = cookies();
  cookieStore.set(name, value, { path: '/' });
}
export async function deleteCookie(name: string) {
  const cookieStore = cookies();
  cookieStore.delete(name);
}
