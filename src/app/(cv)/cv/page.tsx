"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { CVDocument } from "../../components/cv-document";
import { useEffect, useState } from "react";

export default function CV() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      {loaded && (
        <PDFViewer className="h-screen w-screen">
          <CVDocument />
        </PDFViewer>
      )}
    </>
  );
}
