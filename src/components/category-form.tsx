/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/71xKhADfkS8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function CategoryForm() {
  return (
    <Card className='w-full  max-w-7xl my-4 mx-auto'>
      <CardHeader>
        <CardTitle>Create New Category</CardTitle>
        <CardDescription>
          Fill out the form to create a new category.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' placeholder='Enter category name' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='slug'>Slug</Label>
            <Input id='slug' placeholder='Enter category slug' />
          </div>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='description'>Description</Label>
          <Textarea id='description' placeholder='Enter category description' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <Label htmlFor='image'>Image</Label>
            <Input type='file' id='image' placeholder='Enter image URL' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='imageAlt'>Image Alt Text</Label>
            <Input id='imageAlt' placeholder='Enter image alt text' />
          </div>
        </div>
        <div>
          <h1 className='font-bold'>SEO</h1>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <Label htmlFor='seoTitle'>SEO Title</Label>
            <Input id='seoTitle' placeholder='Enter SEO title' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='Canonical'>Canonical</Label>
            <Input id='Canonical' placeholder='Enter canonical URL' />
          </div>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='seoKeywords'>SEO Keywords</Label>
          <Input id='seoKeywords' placeholder='Enter SEO keywords' />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='schema'>Schema</Label>
          <Textarea id='schema' placeholder='Enter schema' />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='seoDescription'>SEO Description</Label>
          <Textarea id='seoDescription' placeholder='Enter SEO description' />
        </div>
      </CardContent>
      <CardFooter>
        <Button className='ml-auto' type='submit'>
          Create Category
        </Button>
      </CardFooter>
    </Card>
  );
}
