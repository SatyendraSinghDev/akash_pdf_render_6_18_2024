import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Typography from "@mui/material/Typography";
import styles from "./pdf.module.css";
import { pdf } from "@react-pdf/renderer";
import InstructionsDepositPDF from "./InstructionsDepositPDF";

const PDF: React.FC = () => {
  const handleDownload = async () => {
    const blob = await pdf(<InstructionsDepositPDF />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "instructions_deposit.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Breadcrumbs />
      <Typography variant="h4" gutterBottom>
        PDF
      </Typography>
      <Typography variant="body1">Welcome to the PDF page.</Typography>

      <button onClick={handleDownload} className={styles.downloadButton}>
        Download PDF
      </button>
    </div>
  );
};

export default PDF;
