import { postType } from "@/types/postType";

const now = "2023/01/01";

export const dummyPost: postType = {
  id: 0,
  postedBy: "",
  postTitle: "",
  postBody: "",
  postImageUrl: "",
  createdAt: now,
};

export const posts: postType[] = [
  {
    id: 1,
    postedBy: "hoge_taro",
    postTitle: "僕の考えた最強の睡眠環境",
    postBody: "post detail",
    postImageUrl: "/sample.png",
    createdAt: now,
  },
  {
    id: 2,
    postedBy: "hoge_taro",
    postTitle: "一生布団で過ごせる神アイテム",
    postBody:
      "一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム一生布団ですごせる神アイテム",
    postImageUrl: "/sample2.png",
    createdAt: now,
  },
  {
    id: 3,
    postedBy: "hoge_taro",
    postTitle: "post title",
    postBody: "post detail",
    postImageUrl: "/sample3.png",
    createdAt: now,
  },
  {
    id: 4,
    postedBy: "hoge_taro",
    postTitle: "post title",
    postBody: "post detail",
    postImageUrl: "/sample4.png",
    createdAt: now,
  },
  {
    id: 5,
    postedBy: "hoge_taro",
    postTitle: "post title",
    postBody: "post detail",
    postImageUrl: "/sample.png",
    createdAt: now,
  },
];
