class Request {
  async get(url: string) {
    const response = await fetch(url, {
      cache: 'no-cache',
    });
    try {
      const data = await response.json();
      return data;
    } catch {
      return { status: 'error', message: 'Something went wrong' };
    }
  }
  async post(url: string, data: any, token?: string) {
    const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return { status: 'error', message: 'Something went wrong' };
    }
  }
  async postWithMedia(url: string, data: any, token?: string) {
    const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    try {
      const result = await response.json();
      return result;
    } catch {
      return { status: 'error', message: 'Something went wrong' };
    }
  }
}

export default new Request();
