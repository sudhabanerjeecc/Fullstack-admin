export const getValidImageUrl = (imageUrl?: string | null) => {
  if (!imageUrl) return null;

  // already valid absolute URL
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  // local public image
  if (imageUrl.startsWith("/")) {
    return imageUrl;
  }

  // if image_url was accidentally saved as JSON string
  try {
    const parsed = JSON.parse(imageUrl);

    if (parsed?.fullPath) {
      return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${parsed.fullPath}`;
    }

    if (parsed?.path) {
      return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product-images/${parsed.path}`;
    }
  } catch {
    return null;
  }

  return null;
};