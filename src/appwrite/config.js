import { Client, Databases, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, content, featuredImage, status, userId, slug }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDB,
        conf.appwriteCollection,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Error from Create Post :: ", error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDB,
        conf.appwriteCollection,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Error from Update Post :: ", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDB,
        conf.appwriteCollection,
        slug
      );
      return true;
    } catch (error) {
      console.log("Error from Delete Post :: ", error);
      return false;
    }
  }

  async getAllPost(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDB,
        conf.appwriteCollection,
        queries
      );
    } catch (error) {
      console.log("Error from Get Post :: ", error);
      return false;
    }
  }

  async getOnePost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDB,
        conf.appwriteCollection,
        slug
      );
    } catch (error) {
      console.log("Error from Get Post :: ", error);
      return false;
    }
  }
}

export default new Service();
