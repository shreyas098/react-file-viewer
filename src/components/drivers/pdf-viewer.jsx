// Copyright (c) 2017 PlanGrid, Inc.

import React, {useState} from 'react';

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.min.js';

function PDFDriver(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={props.filePath}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.apply(null, Array(numPages))
         .map((x, i)=>i+1)
          .map(page => <Page pageNumber={page}/>)}
      </Document>
    </div>
  );
}

export default PDFDriver;
