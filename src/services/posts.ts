import {Post} from "@/types";
import * as fs from "fs";

export const getPosts = (): Post[] => {
  let posts: Post[] = [];

  try {
    const postsData = fs.readFileSync('src/data/posts.json', 'utf8');
    if (postsData.trim().length > 0) {
      posts = JSON.parse(postsData);
    }
  } catch (error) {
    console.error('Error reading or parsing posts.json:', error);
  }

  return posts;
};

export const getPostsById = (id: number): Post | null => {
  const posts = getPosts();
  const targetIndex = searchPostIndexById(posts, id);

  return targetIndex !== -1 ? posts[targetIndex] : null;
};

function searchPostIndexById(arr: Post[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  if (target <= arr.length) {
    while (left <= right) {
      const rangeDelta = arr[right].id - arr[left].id;
      const indexDelta = right - left;
      const valueDelta = target - arr[left].id;
      if (valueDelta < 0) {
        return -1;
      }
      if (!rangeDelta) {
        return arr[left].id === target ? left : -1;
      }
      const middleIndex = left + Math.floor((valueDelta * indexDelta) / rangeDelta);
      if (arr[middleIndex].id === target) {
        return middleIndex;
      }
      if (arr[middleIndex].id < target) {
        left = middleIndex + 1;
      } else {
        right = middleIndex - 1;
      }
    }
  }

  return -1;
}
