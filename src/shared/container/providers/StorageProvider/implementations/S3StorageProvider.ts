import fs from 'fs';
import path from 'path';
import UploadConfig from '@config/upload';
import IStorageProvider from '../models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    console.log(file, ' saved');
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    console.log(file, ' deleted');
  }
}

export default DiskStorageProvider;
