import Api from '@/constants/api';
import { getCookie } from '@/helper/cookiesHander';
import request from '@/helper/request';
import toast from 'react-hot-toast';

class CategoryRepo {
  async getAll(
    e: FormData,
    success: (m: string, d: any) => void,
    failure: (d: any) => void
  ) {
    const response = await request.get(Api.CATEGORIES_URL);
    const data = await response.json();
    if (response.status.toString().startsWith('2')) {
      success(response.message, data);
    } else {
      failure(response.message);
    }
    return data;
  }
  async create(
    e: FormData,
    success: (m: string, d: any) => void,
    failure: (d: any) => void
  ) {
    'use server';
    const response = await request.postWithMedia(
      Api.CATEGORIES_URL,
      e,
      await getCookie('token')
    );
    if (response.status == 'success') {
      success(response.message, response.data);
    } else {
      failure(response.message);
    }
  }
}
export default new CategoryRepo();
