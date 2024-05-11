import { ResultsContainer } from "@/components/Results";
import { useRouter } from "next/router";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import HeadArea from "@/components/HeadArea";
import styles from "@/styles/Result.module.css";

export default function Results() {
  const { query } = useRouter();
  const resultId = query.resultId;
  return (
    <>
      <HeadArea title="Results" description="Learn about our app" />
      <div className={styles.resultContainer}>
        <ResultsContainer resultId={resultId} />
        <NavBar />
      </div>
    </>
  );
}
