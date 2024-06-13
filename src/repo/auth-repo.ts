import Api from '@/constants/api';
import request from '@/helper/request';

export type loginType = {
  email: string;
  password: string;
};
class AuthRepo {
  async login(
    e: loginType,
    success: (message: string, data: { token: string }) => void,
    failure: (data: any) => void
  ) {
    {
      const data = {
        email: e.email,
        password: e.password,
      };
      const response = await request.post(Api.LOGIN_URL, data);
      if (response.status == 'success') {
        success(response.message, response.data);
      } else {
        failure(response.message);
      }
    }
  }
}
export default new AuthRepo();
