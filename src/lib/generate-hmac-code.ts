import crypto from 'crypto';

const secret = process.env.HMAC_SECRET;

export const generateHmacCode = (
  data: string = Date.now().toString(),
  length: number = 6
): string => {
  const hmac = crypto
    .createHmac('sha256', secret || '')
    .update(data)
    .digest('base64');
  // const alphanum = hmac.replace(/[^a-zA-Z0-9]/g, '');
  const alphanum = hmac.replace(/[^A-Z0-9]/g, '');

  return alphanum.substring(0, length);
};
