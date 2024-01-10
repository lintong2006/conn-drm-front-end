import { ArtItem, Category, ImageSetDTO } from "./art.model";

export const MOCK_CATEGORIES: Category[] = [
  new Category(
    'Painting',
    'assets/images/category-final/Snapseed.jpg'
  ),
  new Category(
    'Drawing',
    'assets/images/category-final/IMG_1902_maggie.jpg'
  ),
  new Category(
    'Digital',
    'assets/images/category-final/IMG_1493.jpg'
  ),
  new Category(
    'Photography',
    'assets/images/category-final/LTP_3072_wx.jpg'
  )
]

export const MOCK_ART: ArtItem[] = [
  new ArtItem(
    'Dream1',
    'mike',
    'Fusce quis quam eget sapien sodales iaculis. Curabitur aliquet at erat sed cursus. In hendrerit.',
    'digital',
    '100',
    '../../assets/images/maggie1.jpg',
    'true',
    '10',
  ),
  new ArtItem(
    'Dream2',
    'Derek',
    '2. Fusce quis quam eget sapien sodales iaculis. Curabitur aliquet at erat sed cursus. In hendrerit.',
    'pencil',
    '104',
    '../../assets/images/maggie2.jpg',
    'true',
    '8',
  ),
  new ArtItem(
    'Dream3',
    'maggie',
    '3. Fusce quis quam eget sapien sodales iaculis. Curabitur aliquet at erat sed cursus. In hendrerit.',
    'pencil',
    '108',
    'assets/images/maggie3.jpg',
    'true',
    '10',
  ),
  new ArtItem(
    'Dream4',
    'steve',
    '4. Fusce quis quam eget sapien sodales iaculis. Curabitur aliquet at erat sed cursus. In hendrerit.',
    'watercolor',
    '100',
    'assets/images/maggie4.jpg',
    'true',
    '10',
  ),
  new ArtItem(
    'Dream5',
    'bob',
    '5. Fusce quis quam eget sapien sodales iaculis. Curabitur aliquet at erat sed cursus. In hendrerit.',
    'watercolor',
    '109',
    'assets/images/maggie5.jpeg',
    'true',
    '10',
  ),
  new ArtItem(
    'Dream6',
    'jiang',
    '6. Fusce quis quam eget sapien sodales iaculis. Curabitur aliquet at erat sed cursus. In hendrerit.',
    'pencil',
    '120',
    'assets/images/maggie6.jpeg',
    'true',
    '10',
  )
];
