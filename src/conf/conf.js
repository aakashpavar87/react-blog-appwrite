const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDB : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBucket : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteCollection : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
}

export default conf;