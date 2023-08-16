import { useMemo } from "react"

export const usePosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort === 'Select an option') {
            return posts;
        } else {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
    }, [posts, sort])
    return sortedPosts;
}