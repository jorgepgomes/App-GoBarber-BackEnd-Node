interface IMailConfig {
  driver: 'ethereal' | 'ses';
}

export default {
  driver: process.env.MAIL_Driver || 'etheral',
} as IMailConfig;
