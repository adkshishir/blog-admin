'use client';

// @see https://v0.dev/t/PgyIHUPFgWi

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { deleteCookie } from '@/helper/cookiesHander';
import toast from 'react-hot-toast';

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  function signOut() {
    deleteCookie('token');
    toast.success('Logout successfull');
    router.push('/auth/login');
  }
  return (
    <div className='grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-gray-300/40 lg:block dark:bg-gray-800/40'>
        <div className='flex flex-col gap-2'>
          <div className='flex h-[60px] items-center px-6'>
            <Link className='flex items-center gap-2 font-semibold' href='#'>
              <MountainIcon className='h-6 w-6' />
              <span className=''>Blog</span>
            </Link>
          </div>
          <div className='flex-1'>
            <nav className='grid items-start px-4 text-sm font-medium'>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'>
                <HomeIcon className='h-4 w-4' />
                Home
              </Link>
              {/* <Link
                className='flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'
                href='/categories'>
                <LayoutGridIcon className='h-4 w-4' />
                Categories
              </Link> */}
              <Accordion type='single' collapsible className='w-full mx-2 my-2'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>Categories</AccordionTrigger>
                  <AccordionContent className='flex flex-col gap-4'>
                    <Link href={'/categories'}>All Categories</Link>
                    <Link href={'/categories/add'}>Add Category</Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Sub Categories</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Posts</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'>
                <BriefcaseIcon className='h-4 w-4' />
                Projects
              </Link>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'>
                <UsersIcon className='h-4 w-4' />
                Clients
              </Link>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'>
                <SettingsIcon className='h-4 w-4' />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className='lg:hidden rounded-full'
                size='icon'
                variant='ghost'>
                <MenuIcon className='h-6 w-6' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <Link className='flex items-center gap-2 font-semibold' href='#'>
                <MountainIcon className='h-6 w-6' />
                <span className=''>Acme Inc</span>
              </Link>
              <div className='grid gap-2 py-6'>
                <Link
                  className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'>
                  <HomeIcon className='h-4 w-4' />
                  Home
                </Link>
                <Link
                  className='flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'
                  href='#'>
                  <LayoutGridIcon className='h-4 w-4' />
                  Dashboard
                </Link>
                <Link
                  className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'>
                  <BriefcaseIcon className='h-4 w-4' />
                  Projects
                </Link>
                <Link
                  className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'>
                  <UsersIcon className='h-4 w-4' />
                  Clients
                </Link>
                <Link
                  className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'>
                  <SettingsIcon className='h-4 w-4' />
                  Settings
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <div className='flex-1'>
            <form className='relative'>
              <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
              <Input
                className='pl-8 w-full bg-white dark:bg-gray-950 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400'
                placeholder='Search...'
                type='search'
              />
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className='rounded-full' size='icon' variant='ghost'>
                <img
                  alt='Avatar'
                  className='rounded-full'
                  height='32'
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover',
                  }}
                  width='32'
                />
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
      </div>
    </div>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
      <rect width='20' height='14' x='2' y='6' rx='2' />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  );
}

function LayoutGridIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <rect width='7' height='7' x='3' y='3' rx='1' />
      <rect width='7' height='7' x='14' y='3' rx='1' />
      <rect width='7' height='7' x='14' y='14' rx='1' />
      <rect width='7' height='7' x='3' y='14' rx='1' />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  );
}
