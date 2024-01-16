'use client'
import { Document, Page, pdfjs } from 'react-pdf'

// needed for pdf viewer to work
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function AboutMe(){
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1>TODO: add nice things about myself...</h1>
      <section className='mt-8'>
        <Document file='/resume.pdf'>
          <Page pageIndex={0} renderAnnotationLayer={false} renderTextLayer={false}/>
        </Document>
      </section>
    </main>
  )
}