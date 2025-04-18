// declarations.d.ts
declare module 'html2pdf.js' {
    interface Html2PdfOptions {
      margin?: number | number[];
      filename?: string;
      image?: { type: string; quality: number };
      html2canvas?: object;
      jsPDF?: { unit: string; format: string | number[]; orientation: string };
    }
  
    interface Html2Pdf {
      from: (element: HTMLElement | string) => Html2Pdf;
      set: (opt: Html2PdfOptions) => Html2Pdf;
      save: () => void;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      outputPdf: () => any;
    }
  
    const html2pdf: () => Html2Pdf;
    export default html2pdf;
  }
  