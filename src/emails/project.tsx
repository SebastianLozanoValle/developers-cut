import {
    Body,
    Container,
    Column,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0'); // Obtiene el día y lo formatea a dos dígitos
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Obtiene el mes (los meses empiezan desde 0)
    const year = today.getFullYear(); // Obtiene el año

    const formattedDate = `${day}/${month}/${year}`;
  
  export const ProjectEmail = ({ name = 'Sebastian Lozano Valle', email = 'info@sledevelopment.com', country = 'Colombia', phone = '+57 3213613163', message = 'Y este es un correo de prueba para ver que se este enviando correctamente' }) => (
    <Html>
      <Head />
      <Preview>Ha llegado un nuevo formulario desde el portafolio de SLE</Preview>
  
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Img
                  src={`${baseUrl}/logo.png`}
                  width="auto"
                  height="42"
                  alt="SLE Logo"
                />
              </Column>
  
              <Column align="right" style={tableCell}>
                <Text style={heading}>Formulario</Text>
              </Column>
            </Row>
          </Section>
          <Section>
            <Text style={cupomText}>
              Este formulario ha llegado desde.{" "}
              <Link href="https://www.sledevelopment.com">
                El sitio Oficial de SLE Development
              </Link>
            </Text>
          </Section>
          <Section style={informationTable}>
            <Row style={informationTableRow}>
              <Column colSpan={2}>
                <Section>
                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>Email</Text>
                      <Link
                        style={{
                          ...informationTableValue,
                          color: "#15c",
                          textDecoration: "underline",
                        }}
                      >
                        {email}
                      </Link>
                    </Column>
                  </Row>
  
                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>Date</Text>
                      <Text style={informationTableValue}>{formattedDate}</Text>
                    </Column>
                  </Row>
  
                  <Row>
                  <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>Country</Text>
                      <Text style={informationTableValue}>{country}</Text>
                    </Column>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>Phone</Text>
                      <Text style={informationTableValue}>{phone}</Text>
                    </Column>
                  </Row>
                </Section>
              </Column>
              <Column style={informationTableColumn} colSpan={2}>
                <Text style={informationTableLabel}>Message</Text>
                <Text style={informationTableValue}>
                  Hi my Name is {name}.
                </Text>
                <Text style={informationTableValue}>{message}</Text>
              </Column>
            </Row>
          </Section>
          <Section style={productTitleTable}>
            <Text style={productsTitle}>Im Interested in:</Text>
          </Section>
          <Section>
            <Row>
              <Column style={{ width: "64px" }}>
                <Img
                  src={`${baseUrl}/logo.png`}
                  width="auto"
                  height="64"
                  alt="SLE Logo"
                  style={productIcon}
                />
              </Column>
              <Column style={{ paddingLeft: "22px" }}>
                <Text style={productTitle}>Desarrollo Web</Text>
                <Text style={productDescription}>Landig page</Text>
                <Text style={productDescription}>Wix</Text>
              </Column>
            </Row>
          </Section>
          <Section>
            <Row>
              <Column align="center" style={ctaTitle}>
                <Text style={ctaText}>Rememer answer the email soon as posible</Text>
              </Column>
            </Row>
          </Section>
          <Section>
            <Row>
              <Column align="center" style={walletWrapper}>
                <Link
                  href="https://www.sledevelopment.com"
                  style={walletLink}
                >
                  <Img
                    src={`${baseUrl}/logo.png`}
                    width="auto"
                    height="28"
                    alt="SLE Logo"
                    style={walletImage}
                  />
                </Link>
              </Column>
            </Row>
          </Section>
          <Hr style={walletBottomLine} />
          <Section>
            <Row>
              <Column align="center" style={footerIcon}>
                <Img
                  src={`${baseUrl}/logo.png`}
                  width="auto"
                  height="26"
                  alt="SLE Logo"
                />
              </Column>
            </Row>
          </Section>
          <Text style={footerLinksWrapper}>
            <Link href="https://www.sledevelopment.com">
              Account Settings
            </Link>{" "}
            •{" "}
            <Link href="https://www.sledevelopment.com">
              Terms of Sale
            </Link>{" "}
            •{" "}
            <Link href="https://www.sledevelopment.com">
              Privacy Policy{" "}
            </Link>
          </Text>
          <Text style={footerCopyright}>
            Copyright © 2024 SLE Development. <br />{" "}
            <Link href="https://www.sledevelopment.com">All rights reserved</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default ProjectEmail;
  
  const main = {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: "#ffffff",
  };
  
  const resetText = {
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "660px",
    maxWidth: "100%",
  };
  
  const tableCell = { display: "table-cell" };
  
  const heading = {
    fontSize: "32px",
    fontWeight: "300",
    color: "#888888",
  };
  
  const cupomText = {
    textAlign: "center" as const,
    margin: "36px 0 40px 0",
    fontSize: "14px",
    fontWeight: "500",
    color: "#111111",
  };
  
  const supStyle = {
    fontWeight: "300",
  };
  
  const informationTable = {
    borderCollapse: "collapse" as const,
    borderSpacing: "0px",
    color: "rgb(51,51,51)",
    backgroundColor: "rgb(250,250,250)",
    borderRadius: "3px",
    fontSize: "12px",
  };
  
  const informationTableRow = {
    height: "46px",
  };
  
  const informationTableColumn = {
    paddingLeft: "20px",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "0px 1px 1px 0px",
    height: "44px",
  };
  
  const informationTableLabel = {
    ...resetText,
    color: "rgb(102,102,102)",
    fontSize: "10px",
  };
  
  const informationTableValue = {
    fontSize: "12px",
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
  };
  
  const productTitleTable = {
    ...informationTable,
    margin: "30px 0 15px 0",
    height: "24px",
  };
  
  const productsTitle = {
    background: "#fafafa",
    paddingLeft: "10px",
    fontSize: "14px",
    fontWeight: "500",
    margin: "0",
  };
  
  const productIcon = {
    margin: "0 0 0 20px",
    borderRadius: "14px",
    border: "1px solid rgba(128,128,128,0.2)",
  };
  
  const productTitle = { fontSize: "12px", fontWeight: "600", ...resetText };
  
  const productDescription = {
    fontSize: "12px",
    color: "rgb(102,102,102)",
    ...resetText,
  };
  
  const productLink = {
    fontSize: "12px",
    color: "rgb(0,112,201)",
    textDecoration: "none",
  };
  
  const divisor = {
    marginLeft: "4px",
    marginRight: "4px",
    color: "rgb(51,51,51)",
    fontWeight: 200,
  };
  
  const productPriceTotal = {
    margin: "0",
    color: "rgb(102,102,102)",
    fontSize: "10px",
    fontWeight: "600",
    padding: "0px 30px 0px 0px",
    textAlign: "right" as const,
  };
  
  const productPrice = {
    fontSize: "12px",
    fontWeight: "600",
    margin: "0",
  };
  
  const productPriceLarge = {
    margin: "0px 20px 0px 0px",
    fontSize: "16px",
    fontWeight: "600",
    whiteSpace: "nowrap" as const,
    textAlign: "right" as const,
  };
  
  const productPriceWrapper = {
    display: "table-cell",
    padding: "0px 20px 0px 0px",
    width: "100px",
    verticalAlign: "top",
  };
  
  const productPriceLine = { margin: "30px 0 0 0" };
  
  const productPriceVerticalLine = {
    height: "48px",
    borderLeft: "1px solid",
    borderColor: "rgb(238,238,238)",
  };
  
  const productPriceLargeWrapper = { display: "table-cell", width: "90px" };
  
  const productPriceLineBottom = { margin: "0 0 75px 0" };
  
  const block = { display: "block" };
  
  const ctaTitle = {
    display: "block",
    margin: "15px 0 0 0",
  };
  
  const ctaText = { fontSize: "24px", fontWeight: "500" };
  
  const walletWrapper = { display: "table-cell", margin: "10px 0 0 0" };
  
  const walletLink = { color: "rgb(0,126,255)", textDecoration: "none" };
  
  const walletImage = {
    display: "inherit",
    paddingRight: "8px",
    verticalAlign: "middle",
  };
  
  const walletBottomLine = { margin: "65px 0 20px 0" };
  
  const footerText = {
    fontSize: "12px",
    color: "rgb(102,102,102)",
    margin: "0",
    lineHeight: "auto",
    marginBottom: "16px",
  };
  
  const footerTextCenter = {
    fontSize: "12px",
    color: "rgb(102,102,102)",
    margin: "20px 0",
    lineHeight: "auto",
    textAlign: "center" as const,
  };
  
  const footerLink = { color: "rgb(0,115,255)" };
  
  const footerIcon = { display: "block", margin: "40px 0 0 0" };
  
  const footerLinksWrapper = {
    margin: "8px 0 0 0",
    textAlign: "center" as const,
    fontSize: "12px",
    color: "rgb(102,102,102)",
  };
  
  const footerCopyright = {
    margin: "25px 0 0 0",
    textAlign: "center" as const,
    fontSize: "12px",
    color: "rgb(102,102,102)",
  };
  
  const walletLinkText = {
    fontSize: "14px",
    fontWeight: "400",
    textDecoration: "none",
  };
  