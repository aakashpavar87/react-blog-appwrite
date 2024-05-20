import React, { useCallback, useEffect } from "react";
import appwriteService from "../../appwrite/config";
import fileService from "../../appwrite/file";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function PostForm({ post }) {
  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        slug: post?.$id || "",
        status: post?.status || "active",
      },
    });
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await fileService.uploadFile(data.image[0])
        : null;
      if (file) {
        await fileService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      // Uploading file to appwrite server
      const file = data.image[0]
        ? await fileService.uploadFile(data.image[0])
        : null;

      if (file) {
        const fileId = file.$id;
        // Preparing data object to store in appwrite database
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {}, []);
  return <div>PostForm</div>;
}

export default PostForm;
