
TRUETrace Measurements — GitHub Pages deployment

1. Keep your existing custom-domain configuration/CNAME in GitHub if it already exists.
2. Upload the CONTENTS of this folder to the repository root (not the outer folder itself).
3. Keep these existing sample PDFs in the repository root:
   - ESX_Commercial_Roof_Report_Sample_TTM.pdf
   - XML_Residential_Roof_Report_Sample_TTM.pdf
4. Google Sheets endpoint, PayPal client ID, Google Maps/Places key, and GTM ID were carried over from the current index.html.
5. IMPORTANT: Restrict the Google Maps API key in Google Cloud to your website domain and only the required Maps/Places APIs.
6. After deployment, test one order without payment through the Review & Pay step and verify it appears in Google Sheets with paymentStatus = No.
7. Then perform one small/normal PayPal test and verify the same order changes to paymentStatus = Yes.
8. Submit /sitemap.xml in Google Search Console after deployment.

The order workflow posts client/job data to Google Sheets when a job is added and again before payment. Payment completion updates the job records.
