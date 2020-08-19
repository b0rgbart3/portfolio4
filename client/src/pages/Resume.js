import React, {useState } from "react";
import { Document, Page } from 'react-pdf';
// import "./Resume.css";
// import { usePortfolioContext } from "../utils/GlobalState";

function Resume() {
//   const [state, dispatch] = usePortfolioContext();

const [numPages, setNumPages] = useState(null);
const [pageNumber, setPageNumber] = useState(1);

function onDocumentLoadSuccess({ numPages }) {
  setNumPages(numPages);
}

  return (
    <div>
    <Document
      file="../images/BARTDORITYresume.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} />
    </Document>
    <p>Page {pageNumber} of {numPages}</p>
  </div>
  )
}

export default Resume