import Api from '@/constants/api';
import { getCookie } from '@/helper/cookies-hander';
import request from '@/helper/request';
import toast from 'react-hot-toast';

class TagRepo {
  async getAll(
    success: (m: string, d: any) => void,
    failure: (d: any) => void
  ) {
    const response = await request.get(Api.TAGS_URL);
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
    //   check if the categoryId is not null
    if (!e.get('categoryId')) {
      failure('Please select a category');
      return;
    }
    const response = await request.postWithMedia(
      Api.TAGS_URL,
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
    id: number,
    e: FormData,
    success: (m: string, d: any) => void,
    failure: (d: any) => void
  ) {
    const response = await request.patchWithMedia(
      Api.TAGS_URL + `/${id}`,
      e,
      await getCookie('token')
    );
    if (response.status == 'success') {
      success(response.message, response.data);
    } else {
      failure(response.message);
    }
  }
  async delete(
    id: number,
    success: (m: string, d: any) => void,
    failure: (d: any) => void
  ) {
    const response = await request.delete(
      Api.TAGS_URL + `/${id}`,
      await getCookie('token')
    );
    if (response.status == 'success') {
      success(response.message, response.data);
    } else {
      failure(response.message);
    }
  }
}
export default new TagRepo();
