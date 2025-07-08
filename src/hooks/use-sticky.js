'use client';
import { useEffect, useState } from "react";

const useSticky = () => {
    const [sticky,setSticky] = useState(false);

    const stickyHeader = () => {
        if (typeof window !== 'undefined' && window.scrollY > 80) {
            setSticky(true)
        }
        else{
            setSticky(false)
        }
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll',stickyHeader)
        }
    },[]);

    return {
        sticky,
    }

}

export default useSticky;