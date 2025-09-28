/**
 * Simple Price Service - Fetches product price from Google Sheets
 */

/**
 * Fetch product price from Google Sheets
 * @param {string} productId - Product identifier
 * @param {string} sheetUrl - Google Sheets URL (optional, uses default if not provided)
 * @returns {Promise<number>} Product price
 */
export const fetchProductPrice = async (productId, sheetUrl = null) => {
  try {
    // Default Google Sheets URL - replace with your actual sheet URL
    const url = sheetUrl || 'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit#gid=0';
    
    // Convert Google Sheets URL to CSV export URL
    let csvUrl;
    if (url.includes('/edit?usp=sharing')) {
      // Handle sharing URLs
      const sheetId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;
    } else if (url.includes('/edit#gid=')) {
      // Handle regular edit URLs
      csvUrl = url.replace('/edit#gid=', '/export?format=csv&gid=');
    } else {
      // Try to extract sheet ID from any Google Sheets URL
      const sheetId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;
    }
    
    console.log('Fetching from CSV URL:', csvUrl);
    const response = await fetch(csvUrl);
    const csvText = await response.text();
    
    console.log('CSV Response:', csvText);
    
    // Parse CSV data
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length === 0) {
      console.warn('No data found in Google Sheets');
      return 89.99;
    }
    
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    console.log('Headers:', headers);
    
    // Find the product in the sheet
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
      const row = {};
      
      headers.forEach((header, index) => {
        row[header.toLowerCase()] = values[index];
      });
      
      console.log(`Checking row ${i}:`, row);
      
      // Check if this row matches our product ID
      if (row.id === productId || row.product_id === productId || row.sku === productId) {
        const price = parseFloat(row.price || row.current_price || row.cost);
        console.log(`Found product ${productId} with price:`, price);
        return Math.round(price * 100) / 100; // Round to 2 decimal places
      }
    }
    
    // If product not found, return fallback price
    console.warn(`Product ${productId} not found in Google Sheets. Available products:`, 
      lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
        const row = {};
        headers.forEach((header, index) => {
          row[header.toLowerCase()] = values[index];
        });
        return row.id || row.product_id || row.sku || 'unknown';
      })
    );
    return 89.99;
    
  } catch (error) {
    console.error('Error fetching price from Google Sheets:', error);
    // Return fallback price if API fails
    return 89.99;
  }
};

/**
 * Fetch multiple product prices
 * @param {Array<string>} productIds - Array of product IDs
 * @param {string} priceUrl - Base URL for price fetching
 * @returns {Promise<Object>} Object with productId as key and price as value
 */
export const fetchMultiplePrices = async (productIds, priceUrl = null) => {
  const prices = {};
  
  for (const productId of productIds) {
    try {
      prices[productId] = await fetchProductPrice(productId, priceUrl);
    } catch (error) {
      console.error(`Error fetching price for ${productId}:`, error);
      prices[productId] = 89.99; // Fallback price
    }
  }
  
  return prices;
};

export default {
  fetchProductPrice,
  fetchMultiplePrices
};