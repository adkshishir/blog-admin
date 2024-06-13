class Api {
  public static readonly BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  public static readonly API_URL = `${Api.BASE_URL}/api`;
  public static readonly LOGIN_URL = `${Api.API_URL}/auth/login`;
  public static readonly REGISTER_URL = `${Api.API_URL}/auth/register`;
  public static readonly USERS_URL = `${Api.API_URL}/users`;
  public static readonly CATEGORIES_URL = `${Api.API_URL}/categories`;
}

export default Api