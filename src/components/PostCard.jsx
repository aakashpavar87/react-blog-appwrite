import React from "react";
import fileService from "../appwrite/file";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl flex flex-col justify-center items-center p-4">
        <div className="w-full flex justify-center mb-4">
          <img
            src={fileService.getPreview(featuredImage)}
            alt={title}
            className="rounded-xl w-32 h-32"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
