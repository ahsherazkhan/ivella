# Instagram Redirect Setup

## How to Set Up Instagram Redirects

### 1. Update Your Instagram Handle
In the file `src/utils/instagramRedirect.js`, replace `your_instagram_handle` with your actual Instagram username:

```javascript
const INSTAGRAM_HANDLE = 'your_actual_instagram_username';
```

### 2. What's Been Updated
I've updated the following components to redirect to Instagram when users click buy buttons:

- **ProductHero.jsx** - "Buy Now" button
- **StickyCartPreview.jsx** - All buy/checkout buttons

### 3. How It Works
- When users click any "Buy Now" button, they'll be redirected to your Instagram profile
- The link opens in a new tab/window
- Users can then message you on Instagram to purchase products

### 4. Customization Options
You can also customize the redirect behavior:

```javascript
// Redirect to a specific Instagram post
const redirectToInstagramPost = (postId) => {
  window.open(`https://www.instagram.com/p/${postId}/`, '_blank');
};

// Redirect to Instagram DM with pre-filled message
const redirectToInstagramDM = (message) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://www.instagram.com/direct/new/?text=${encodedMessage}`, '_blank');
};
```

### 5. Testing
1. Update your Instagram handle in `instagramRedirect.js`
2. Click any "Buy Now" button on your website
3. Verify it opens your Instagram profile in a new tab

### 6. Additional Components to Update
If you want to update other shopping buttons throughout your site, you can import and use the `redirectToInstagram` function in any component:

```javascript
import { redirectToInstagram } from '../../../utils/instagramRedirect';

// In your button onClick handler:
onClick={() => redirectToInstagram()}
```