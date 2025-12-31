// Mapping of product slugs to their screenshot directories
const SLUG_TO_DIR_MAP: Record<string, string> = {
  "hrms": "hrms",
  "hospital-erp": "hospitalerp",
  "marketplace": "b2bmarketplace",
  "accubooks": "accubook",
  "school-erp": "schoolerp",
  "fleet-management": "fleet-management",
  "realestate": "real-estate",
  "drop": "drop",
  "rideon": "rideon",
  "netwatch": "netwatch",
  "xfer": "xfer",
  "sparking": "sparking",
};

// Screenshot data for each product
const SCREENSHOTS_DATA: Record<string, string[]> = {
  "hrms": ["hrms1.png", "hrms2.png", "hrms3.png"],
  "hospitalerp": ["1.png", "2.png", "3.png", "4.png"],
  "rideon": ["1.png", "2.png"],
  "sparking": ["1.png", "2.png"],
  "accubook": ["accubook1.png", "accubook2.png"],
  "fleet-management": ["1.png", "2.png", "3.png", "4.png"],
  "drop": ["1.png", "2.png"],
  "xfer": ["1.png", "2.png", "3.png", "4.png", "5.png"],
  "schoolerp": ["1.png", "2.png", "3.png"],
  "netwatch": ["1.png", "2.png", "3.png"],
  "b2bmarketplace": ["1.png", "2.png", "3.png"],
  "real-estate": ["1.png", "2.png", "3.png"],
};

/**
 * Get screenshots for a product slug
 * @param slug - Product slug
 * @returns Array of screenshot paths or empty array if none exist
 */
export const getProductScreenshots = (slug: string): string[] => {
  const dir = SLUG_TO_DIR_MAP[slug];
  if (!dir) return [];

  const screenshots = SCREENSHOTS_DATA[dir];
  if (!screenshots || screenshots.length === 0) return [];

  return screenshots.map(filename => `/${dir}/${filename}`);
};

/**
 * Check if a product has screenshots
 * @param slug - Product slug
 * @returns True if product has screenshots
 */
export const hasScreenshots = (slug: string): boolean => {
  return getProductScreenshots(slug).length > 0;
};
