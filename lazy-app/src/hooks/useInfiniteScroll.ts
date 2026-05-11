import { useCallback, useEffect, useRef, useState } from "react";
import { fetchPosts } from "../services/fetchPosts";

type Post = {
  id: number;
  title: string;
  body: string;
  // Agrega más campos si los hay en tu API
};

export function useInfiniteScroll() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const hasMore = useRef(true);

  const observer = useRef<IntersectionObserver | null>(null);

  const loadMorePosts = useCallback(async () => {
    setLoading(true);
    const newPosts = await fetchPosts(page, 10);

    if (newPosts.length === 0) {
      hasMore.current = false;
    } else {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    }

    setLoading(false);
  }, [page]);

  useEffect(() => {
    if (hasMore) {
      loadMorePosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const lastPostElementRef = useCallback(
    (node: Element | null) => {
      if (loading || !node || !hasMore.current) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore.current) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return { posts, lastPostElementRef, loading };
}
