import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort === 'Select an option') {
            return posts;
        } else {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
    }, [posts, sort])
    return sortedPosts;
}

export const usePosts = ((posts, sort, searchQuery) => {

    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        if (!searchQuery) {
            return sortedPosts;
        } else {
            return [...sortedPosts].filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }
    }, [sortedPosts, searchQuery]);

    return sortedAndSearchedPosts;
})