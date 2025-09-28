# Google Sheets Setup Instructions

## Quick Setup for Your Product Pricing

### 1. Create Your Google Sheet
Go to your Google Sheet: https://docs.google.com/spreadsheets/d/1T1-83jUJP6nSUCSCGdfcNBO2uKYQK63K6nyJvi2-xio/edit?usp=sharing

### 2. Set Up Your Data Structure
In your Google Sheet, create this exact structure:

**Row 1 (Headers):**
```
id,product_name,price,original_price,currency
```

**Row 2 (Your Product):**
```
argan-elixir-001,Moroccan Argan Elixir,95.99,119.99,USD
```

### 3. Make Sure It's Public
1. Click the "Share" button (top right)
2. Click "Change to anyone with the link"
3. Set permission to "Viewer"
4. Click "Done"

### 4. Test the CSV Export
Try this URL in your browser to see if it works:
```
https://docs.google.com/spreadsheets/d/1T1-83jUJP6nSUCSCGdfcNBO2uKYQK63K6nyJvi2-xio/export?format=csv&gid=0
```

You should see something like:
```
id,product_name,price,original_price,currency
argan-elixir-001,Moroccan Argan Elixir,95.99,119.99,USD
```

### 5. Debug Information
The code now includes console logs. Open your browser's Developer Tools (F12) and check the Console tab to see:
- What CSV URL is being fetched
- What data is returned from Google Sheets
- What headers are found
- What products are available

### 6. Common Issues
- **Sheet not public**: Make sure anyone with the link can view it
- **Wrong product ID**: Must be exactly `argan-elixir-001`
- **Missing headers**: First row must have column headers
- **Empty rows**: Don't leave empty rows between data

### 7. Expected Result
Once set up correctly, the price should change from the hardcoded `89.99` to whatever you put in the `price` column of your Google Sheet.