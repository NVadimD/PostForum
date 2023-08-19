import { useMemo } from "react"

export const usePagination = (pagesCount) => {
    
    const pagesArray = useMemo(() => {
        const arr = [];
        for (let i = 0; i < pagesCount; i++) {
            arr.push (i + 1)
        }

        return arr;
    }, [pagesCount])

    return pagesArray;
}