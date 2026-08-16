import images from './images';
import img6 from '../components/PhotoGallery/6.jpg';
import img7 from '../components/PhotoGallery/7.jpg';
import img8 from '../components/PhotoGallery/8.jpg';
import img9 from '../components/PhotoGallery/9.jpg';
import img10 from '../components/PhotoGallery/10.jpg';
import img12 from '../components/PhotoGallery/12.jpg';
import img13 from '../components/PhotoGallery/13.jpg';
import img14 from '../components/PhotoGallery/14.jpg';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹4648',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹4897',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹3652',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹2573',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹2157',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹1659',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹1327',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹829',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹2572',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹2157',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Recognised for quality home-style cooking at a fair price.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Named among the most promising new dining experiences.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Honoured for outstanding service and guest experience.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Celebrating culinary excellence and craft.',
  },
];

/* ================= MENU ================= */
/* NOTE: Breakfast items & Popular Dishes use the exact supplied Beresta data.
   Other categories are composed from typical Bengali dishes — edit freely. */

const menuCategories = [
  {
    id: 'breakfast',
    tabBn: 'বাংলা খাবার',
    tabEn: 'BREAKFAST',
    titleBn: 'বাংলা খাবার — সকালের নাস্তা',
    titleEn: 'Breakfast',
    image: img6,
    imageAlt: 'Bengali breakfast spread',
    items: [
      { nameBn: 'প্লেইন পরোটা', nameEn: 'Plain Paratha', price: '৳25', description: 'Flaky layered flatbread, served hot.' },
      { nameBn: 'ঘি ভাজা পরোটা (বেরেস্তা স্পেশাল)', nameEn: 'Ghee-Fried Paratha (Beresta Special)', price: '৳35', description: 'Golden paratha fried in pure ghee.' },
      { nameBn: 'চিকেন সুপ (বাঙালি স্টাইল)', nameEn: 'Chicken Soup (Bengali Style)', price: '৳140', description: 'Slow-simmered, warm and comforting.' },
      { nameBn: 'বিফ নিহারি / নলা', nameEn: 'Beef Nihari / Nala', price: '৳170', description: 'Tender beef simmered in rich spice gravy.' },
      { nameBn: 'স্পেশাল মটন পায়া', nameEn: 'Special Mutton Paya', price: '৳160', description: 'Slow-cooked trotters in aromatic broth.' },
      { nameBn: 'মিক্স চা', nameEn: 'Mix Tea', price: '৳30', description: 'Classic blend, brewed fresh.' },
    ],
  },
  {
    id: 'snacks',
    tabBn: 'চটচটি ও নাস্তা',
    tabEn: 'SNACKS',
    titleBn: 'চটচটি ও নাস্তা',
    titleEn: 'Snacks & Street Favourites',
    image: img7,
    imageAlt: 'Bengali street snacks',
    items: [
      { nameBn: 'চটপটি', nameEn: 'Chotpoti', price: '৳60', description: 'Tangy chickpeas, potato, tamarind & spices.' },
      { nameBn: 'ফুচকা', nameEn: 'Fuchka', price: '৳50', description: 'Crisp shells filled with spiced water.' },
      { nameBn: 'সিঙ্গারা', nameEn: 'Singara', price: '৳30', description: 'Crispy pastry with spiced filling.' },
      { nameBn: 'সমুচা', nameEn: 'Shamucha', price: '৳40', description: 'Golden-baked samosa, served hot.' },
      { nameBn: 'ডালপুরি', nameEn: 'Dal Puri', price: '৳35', description: 'Flaky puri stuffed with seasoned dal.' },
      { nameBn: 'হালিম', nameEn: 'Haleem', price: '৳180', description: 'Slow-cooked lentils, wheat & meat.' },
    ],
  },
  {
    id: 'grill',
    tabBn: 'চুলা ও গ্রিল',
    tabEn: 'GRILL',
    titleBn: 'চুলা ও গ্রিল',
    titleEn: 'Charcoal & Grill',
    image: img8,
    imageAlt: 'Charcoal grilled meats',
    items: [
      { nameBn: 'চিকেন তন্দুরি', nameEn: 'Chicken Tandoori', price: '৳320', description: 'Char-grilled, smoky & spiced.' },
      { nameBn: 'চিকেন টিক্কা', nameEn: 'Chicken Tikka', price: '৳280', description: 'Tender pieces, flame-kissed.' },
      { nameBn: 'মাটন শিক কাবাব', nameEn: 'Mutton Sheek Kebab', price: '৳340', description: 'Minced mutton on the skewer.' },
      { nameBn: 'বিফ শিক কাবাব', nameEn: 'Beef Sheek Kebab', price: '৳310', description: 'Juicy beef kebab, grilled to order.' },
      { nameBn: 'রোস্ট চিকেন', nameEn: 'Roast Chicken', price: '৳360', description: 'Whole roast, golden and aromatic.' },
      { nameBn: 'চিকেন রিজালা', nameEn: 'Chicken Rezala', price: '৳300', description: 'Creamy, mildly spiced curry.' },
    ],
  },
  {
    id: 'fishbbq',
    tabBn: 'ফিশ বারবিকিউ',
    tabEn: 'FISH BBQ',
    titleBn: 'ফিশ বারবিকিউ',
    titleEn: 'Fish Bar-B-Q',
    image: img9,
    imageAlt: 'Barbecued fish platter',
    items: [
      { nameBn: 'ইলিশ বারবিকিউ', nameEn: 'Hilsa BBQ', price: '৳450', description: 'Smoky, mustard-marinated hilsa.' },
      { nameBn: 'রুই ফিশ বারবিকিউ', nameEn: 'Rui Fish BBQ', price: '৳380', description: 'Firm river fish, grilled with spices.' },
      { nameBn: 'কাতলা বারবিকিউ', nameEn: 'Katla BBQ', price: '৳400', description: 'Rich, flaky katla over charcoal.' },
      { nameBn: 'চিংড়ি বারবিকিউ', nameEn: 'Prawn BBQ', price: '৳480', description: 'Jumbo prawns, char-grilled.' },
      { nameBn: 'তেলাপিয়া বারবিকিউ', nameEn: 'Tilapia BBQ', price: '৳350', description: 'Light, flaky and smoky.' },
      { nameBn: 'পাবদা বারবিকিউ', nameEn: 'Pabda BBQ', price: '৳360', description: 'Delicate pabda, gently grilled.' },
    ],
  },
  {
    id: 'beverages',
    tabBn: 'পানীয়',
    tabEn: 'BEVERAGES',
    titleBn: 'পানীয়',
    titleEn: 'Beverages',
    image: img13,
    imageAlt: 'Bengali beverages',
    items: [
      { nameBn: 'দুধ চা', nameEn: 'Milk Tea', price: '৳25', description: 'Sweet, milky and comforting.' },
      { nameBn: 'কফি', nameEn: 'Coffee', price: '৳80', description: 'Freshly brewed, rich in aroma.' },
      { nameBn: 'বোরহানি', nameEn: 'Borhani', price: '৳70', description: 'Spiced yogurt cooler, a Bengali classic.' },
      { nameBn: 'লাচ্ছি', nameEn: 'Lassi', price: '৳120', description: 'Thick, creamy and chilled.' },
      { nameBn: 'ম্যাংগো লাচ্ছি', nameEn: 'Mango Lassi', price: '৳150', description: 'Sweet mango blended with yogurt.' },
      { nameBn: 'লেবু সোডা', nameEn: 'Lemon Soda', price: '৳60', description: 'Zesty, sparkling refreshment.' },
    ],
  },
  {
    id: 'desserts',
    tabBn: 'ডেজার্ট',
    tabEn: 'DESSERTS',
    titleBn: 'ডেজার্ট',
    titleEn: 'Desserts',
    image: img14,
    imageAlt: 'Bengali desserts',
    items: [
      { nameBn: 'ফিরনি', nameEn: 'Firni', price: '৳120', description: 'Creamy rice pudding, delicately flavoured.' },
      { nameBn: 'রসগোল্লা', nameEn: 'Roshogolla', price: '৳90', description: 'Spongy, syrup-soaked classic.' },
      { nameBn: 'মিষ্টি দই', nameEn: 'Mishti Doi', price: '৳100', description: 'Caramelized sweet yogurt.' },
      { nameBn: 'পায়েস', nameEn: 'Payesh', price: '৳110', description: 'Rice pudding with nuts & raisins.' },
      { nameBn: 'গজা', nameEn: 'Gaja', price: '৳70', description: 'Crisp, sweet syrupy pastry.' },
      { nameBn: 'চমচম', nameEn: 'Chamcham', price: '৳85', description: 'Soft, juicy cottage-cheese sweet.' },
    ],
  },
];

const popularDishes = [
  { id: 1, name: 'Mutton Rezala', nameBn: 'মাটন রেজালা', price: '৳380', image: img10 },
  { id: 2, name: 'Kacchi Biryani', nameBn: 'কাচ্চি বিরিয়ানি', price: '৳350', image: img12 },
  { id: 3, name: 'Firni Special', nameBn: 'ফিরনি স্পেশাল', price: '৳120', image: img6 },
  { id: 4, name: 'Mango Lassi', nameBn: 'ম্যাংগো লাচ্ছি', price: '৳150', image: img9 },
  { id: 5, name: 'Beef Tehari', nameBn: 'বিফ তেহারি', price: '৳220', image: img7 },
];

const restaurantData = { wines, cocktails, awards, menuCategories, popularDishes };

export default restaurantData;
