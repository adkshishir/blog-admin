import Api from '@/constants/api';
import { getCookie } from '@/helper/cookies-hander';
import request from '@/helper/request';
import toast from 'react-hot-toast';

class CategoryRepo {
  async getAll(
    success: (m: string, d: any) => void,
    failure: (d: any) => void
  ) {
    const response = await request.get(Api.CATEGORIES_URL);
    if (response.status.toString().startsWith('success')) {
      const data = await response.data
      success(response.message, data);
    } else {
      failure(response.message);
    }
    // return data;
  }
  async create(
    e: FormData,
    success: (m: string, d: any) => void,
    failure: (d: any) => void
  ) {
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
  async update(
    id:number,
    e: FormData,
    success: (m: string, d: any) => void,
    failure: (d: any) => void
  ) {
    const response = await request.patchWithMedia(
      Api.CATEGORIES_URL + `/${id}`,
      e,
      await getCookie('token')
    );
    if (response.status == 'success') {
      success(response.message, response.data);
    } else {
      failure(response.message);
    }
  }
  async delete(id:number, success: (m: string, d: any) => void, failure: (d: any) => void) {
    const response = await request.delete(Api.CATEGORIES_URL + `/${id}`, await getCookie('token'));
    if (response.status == 'success') {
      success(response.message, response.data);
    } else {
      failure(response.message);
    }
  }
}
export default new CategoryRepo();
