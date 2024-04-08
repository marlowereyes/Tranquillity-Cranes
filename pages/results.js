import { ResultsContainer } from "@/components/Results";
import { useRouter } from "next/router"
import { useState } from "react"
import NavBar from "@/components/NavBar";

export default function Results() {
    const {query} = useRouter();
    const resultId = query.resultId;
    return (
        <>
        <ResultsContainer resultId={resultId} />
        <NavBar/>
        </>
    )
}
