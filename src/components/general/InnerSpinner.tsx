'use client'
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner"

export const InnerSpinner = () => {
    const [allReady, setAllReady] = useState(false);
  
    useEffect(() => {
      setAllReady(true)
    }, [])

    return (
        <span className={`${allReady ? 'already-loaded' : 'page-loader'}`}>
            <div className={`${allReady ? 'hidden' : null}`}>
                <Spinner />
            </div>
        </span>
    )
}