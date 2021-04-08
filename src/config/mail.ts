interface IMailConfig {
  driver: 'ethereal' | 'ses';
}

export default {
  driver: process.env.MAIL_DRIVER || 'etheral',
} as IMailConfig;
