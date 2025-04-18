// app/authentication/page.tsx
"use client";

import React, { useState } from "react";

const AuthenticationPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    alert(
      "Authentication request submitted. You will receive further instructions via email."
    );
  };

  return (
    <div style={styles.body}>
      <div style={styles.overlay} />
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.logo}>GOV</div>
          <h1 style={styles.title}>Government Authentication Portal</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {/* ID Type */}
          <FormGroup label="ID Type" required>
            <select id="id-type" required style={styles.input}>
              <option value="">Select ID Type</option>
              <option value="national-id">National ID Card</option>
              <option value="passport">Passport</option>
              <option value="drivers-license">Driver&apos;s License</option>
              <option value="social-security">Social Security Number</option>
            </select>
          </FormGroup>

          {/* ID Number */}
          <FormGroup label="ID Number" required>
            <input type="text" id="id-number" required style={styles.input} />
            <p style={styles.infoText}>
              Enter the number exactly as it appears on your ID document.
            </p>
          </FormGroup>

          {/* Full Name */}
          <FormGroup label="Full Legal Name" required>
            <input
              type="text"
              id="full-name"
              placeholder="First Middle Last"
              required
              style={styles.input}
            />
          </FormGroup>

          {/* DOB */}
          <FormGroup label="Date of Birth" required>
            <input type="date" id="dob" required style={styles.input} />
          </FormGroup>

          {/* Email */}
          <FormGroup label="Email Address" required>
            <input type="email" id="email" required style={styles.input} />
            <p style={styles.infoText}>
              We&apos;ll send a verification link to this email.
            </p>
          </FormGroup>

          {/* Phone */}
          <FormGroup label="Phone Number" required>
            <input type="tel" id="phone" required style={styles.input} />
            <p style={styles.infoText}>Format: +1-123-456-7890</p>
          </FormGroup>

          {/* Documents */}
          <h2 style={styles.sectionTitle}>Required Legal Documents</h2>
          <p style={{ ...styles.infoText, marginBottom: 20 }}>
            Please upload clear, color scans or photos of the following documents.
            All documents must be valid and not expired.
          </p>

          {/* Primary ID */}
          <FormGroup label="Primary Government ID" required>
            <select id="primary-id-type" required style={styles.input}>
              <option value="">Select Primary ID Type</option>
              <option value="passport">Passport</option>
              <option value="national-id">National ID Card</option>
              <option value="drivers-license">Driver&apos;s License</option>
            </select>
            <input
              type="file"
              id="primary-id"
              required
              accept="image/jpeg,image/png,application/pdf"
              style={{ ...styles.input, marginTop: 10 }}
            />
            <p style={styles.infoText}>Accepted formats: JPG, PNG, PDF (max 5MB)</p>
          </FormGroup>

          {/* Secondary ID */}
          <FormGroup label="Secondary ID Document" required>
            <select id="secondary-id-type" required style={styles.input}>
              <option value="">Select Secondary ID Type</option>
              <option value="birth-certificate">Birth Certificate</option>
              <option value="social-security">Social Security Card</option>
              <option value="voter-id">Voter ID Card</option>
              <option value="residence-permit">Residence Permit</option>
              <option value="military-id">Military ID</option>
              <option value="other">Other Government-Issued ID</option>
            </select>
            <input
              type="file"
              id="secondary-id"
              required
              accept="image/jpeg,image/png,application/pdf"
              style={{ ...styles.input, marginTop: 10 }}
            />
            <p style={styles.infoText}>Accepted formats: JPG, PNG, PDF (max 5MB)</p>
          </FormGroup>

          {/* Address Proof */}
          <FormGroup label="Proof of Address" required>
            <select id="address-proof-type" required style={styles.input}>
              <option value="">Select Document Type</option>
              <option value="utility-bill">Utility Bill (last 3 months)</option>
              <option value="bank-statement">Bank Statement (last 3 months)</option>
              <option value="tax-document">Tax Document (last year)</option>
              <option value="lease-agreement">Lease Agreement</option>
              <option value="mortgage-statement">Mortgage Statement</option>
            </select>
            <input
              type="file"
              id="proof-of-address"
              required
              accept="image/jpeg,image/png,application/pdf"
              style={{ ...styles.input, marginTop: 10 }}
            />
            <p style={styles.infoText}>Accepted formats: JPG, PNG, PDF (max 5MB)</p>
          </FormGroup>

          {/* Selfie */}
          <FormGroup label="Recent Selfie with ID" required>
            <input
              type="file"
              id="selfie"
              required
              accept="image/jpeg,image/png"
              style={styles.input}
            />
            <p style={styles.infoText}>
              Upload a clear photo of yourself holding your primary ID document. Your
              face and the ID must be clearly visible.
            </p>
          </FormGroup>

          {/* Additional Docs */}
          <FormGroup label="Additional Supporting Documents">
            <select id="additional-doc-type" style={styles.input}>
              <option value="">Select Document Type (Optional)</option>
              <option value="marriage-certificate">Marriage Certificate</option>
              <option value="divorce-decree">Divorce Decree</option>
              <option value="name-change">Legal Name Change Document</option>
              <option value="tax-id">Tax Identification Document</option>
              <option value="professional-license">Professional License</option>
              <option value="other">Other Supporting Document</option>
            </select>
            <input
              type="file"
              id="additional-documents"
              accept="image/jpeg,image/png,application/pdf"
              style={{ ...styles.input, marginTop: 10 }}
            />
            <p style={styles.infoText}>Accepted formats: JPG, PNG, PDF (max 5MB)</p>
          </FormGroup>

          {/* Agreement */}
          <FormGroup required>
            <label>
              <input type="checkbox" required /> I certify the information is accurate.
            </label>
          </FormGroup>

          <FormGroup required>
            <label>
              <input
                type="checkbox"
                required
              /> I consent to the processing of my personal data.
            </label>
          </FormGroup>

          <button type="submit" style={styles.button}>
            Submit Authentication Request
          </button>
        </form>

        <div style={styles.notice}>
          <strong>Security Notice:</strong> This is a secure government portal. All
          data is encrypted and processed according to applicable privacy laws.
        </div>
      </div>
    </div>
  );
};

interface FormGroupProps {
  label?: string;
  children: React.ReactNode;
  required?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, children, required }) => (
  <div style={styles.formGroup}>
    {label && (
      <label style={styles.label}>
        {label} {required && <span style={{ color: "#e74c3c" }}>*</span>}
      </label>
    )}
    {children}
  </div>
);

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
    color: "#333",
    margin: 0,
    padding: 0,
    backgroundImage: "url('/images/pm_background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    position: "relative",
    minHeight: "100vh",
  },
  overlay: {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    zIndex: -1,
  },
  container: {
    maxWidth: 800,
    margin: "40px auto",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 8,
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    position: "relative",
    zIndex: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
    borderBottom: "1px solid #eee",
    paddingBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: "#1a5276",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    marginRight: 15,
  },
  title: {
    margin: 0,
    color: "#1a5276",
    fontSize: "1.8rem",
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    display: "block",
    marginBottom: 8,
    fontWeight: 600,
  },
  input: {
    width: "100%",
    padding: 12,
    border: "1px solid #ddd",
    borderRadius: 4,
    fontSize: 16,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#1a5276",
    color: "white",
    border: "none",
    padding: "12px 20px",
    fontSize: 16,
    fontWeight: 600,
    borderRadius: 4,
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  sectionTitle: {
    marginTop: 30,
    color: "#1a5276",
    borderBottom: "1px solid #eee",
    paddingBottom: 10,
    fontSize: "1.5rem",
  },
  notice: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderLeft: "4px solid #1a5276",
    fontSize: 14,
  },
};

export default AuthenticationPage;
