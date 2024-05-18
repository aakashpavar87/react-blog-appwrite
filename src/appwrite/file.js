import { Client, Storage, ID } from "appwrite";
import conf from "../conf/conf";

export class FileService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(conf.appwriteBucket, ID.unique(), file);
        } catch (error) {
            console.log('Error from File Upload :: ', error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            this.storage.deleteFile(conf.appwriteBucket, fileId)
        } catch (error) {
            console.log('Error from Delete File :: ', error);
            return false;
        }
    }

    getPreview(fileId) {
        try {
            return this.storage.getFilePreview(conf.appwriteBucket, fileId)
        } catch (error) {
            console.log('Error from Get Preview File :: ', error);
            return false;
        }
    }
}

export default new FileService();