# Google Sheets Price Management Setup

## How to Set Up Your Google Sheets for Product Pricing

### 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Product Prices" or similar

### 2. Set Up Your Sheet Structure
Create columns with these headers in the first row:

| id | product_name | price | original_price | currency | last_updated |
|----|--------------|-------|----------------|----------|--------------|
| argan-elixir-001 | Moroccan Argan Elixir | 89.99 | 119.99 | USD | 2024-01-15 |
| shampoo-001 | Nourishing Cleanse Shampoo | 45.99 | 55.99 | USD | 2024-01-15 |
| conditioner-001 | Intensive Repair Conditioner | 48.99 | 48.99 | USD | 2024-01-15 |

### 3. Make Your Sheet Public
1. Click "Share" button in the top right
2. Click "Change to anyone with the link"
3. Set permission to "Viewer"
4. Copy the shareable link

### 4. Update Your Code
Replace `YOUR_SHEET_ID` in the ProductHero component with your actual Google Sheets ID from the URL.

The URL format should be:
```
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit#gid=0
```

### 5. Alternative Column Names
The service supports these column name variations:
- **ID columns**: `id`, `product_id`, `sku`
- **Price columns**: `price`, `current_price`, `cost`

### 6. Example Sheet Data
```
id,product_name,price,original_price,currency,last_updated
argan-elixir-001,Moroccan Argan Elixir,89.99,119.99,USD,2024-01-15
shampoo-001,Nourishing Cleanse Shampoo,45.99,55.99,USD,2024-01-15
conditioner-001,Intensive Repair Conditioner,48.99,48.99,USD,2024-01-15
```

### 7. Benefits of Using Google Sheets
- ✅ No database setup required
- ✅ Easy to update prices
- ✅ Multiple people can manage prices
- ✅ Version history
- ✅ Free to use
- ✅ Works with any Google account

### 8. Security Note
Since the sheet needs to be publicly accessible for the web app to fetch data, only include pricing information. Don't store sensitive data like customer information or internal business data in the same sheet.