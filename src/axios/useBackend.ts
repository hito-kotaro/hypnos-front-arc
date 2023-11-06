import { DBPostType, NewPostType, PostType } from "@/types/postType";
import axios from "axios";
import { useState } from "react";
import useSWR from "swr";

export const useBackend = () => {
  const [postList, setPostList] = useState<PostType[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostType>();

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASE,
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
  });

  const fetchPosts = async () => {
    const result = await instance.get("posts");
    let newPostList: PostType[] = [];
    result.data.map((rowPost: DBPostType) => {
      const { id, handle_name, post_title, post_body, image_url, created_at } =
        rowPost;

      const post: PostType = {
        id,
        handleName: handle_name,
        postTitle: post_title,
        postBody: post_body,
        postImageUrl: image_url,
        createdAt: created_at,
      };
      newPostList.push(post);
    });
    setPostList(newPostList);
  };

  const fetchPostById = async (postId: number) => {
    const result = await instance.get("posts", { params: { id: postId } });

    const { id, handle_name, post_title, post_body, image_url, created_at } =
      result.data[0];

    const post: PostType = {
      id,
      handleName: handle_name,
      postTitle: post_title,
      postBody: post_body,
      postImageUrl: image_url,
      createdAt: created_at,
    };
    setSelectedPost(post);
  };

  const registerNewPost = async (post: NewPostType) => {
    const result = await instance.post("posts", {
      handle_name: post.handleName,
      post_title: post.postTitle,
      post_body: post.postBody,
      image_url: post.postImageUrl,
      created_at: post.createdAt,
    });
  };

  return {
    // instance,
    // isLoading,
    // postList,
    // selectedPost,
    // fetchPosts,
    // fetchPostById,
    // registerNewPost,
  };
};
