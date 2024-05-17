/**
 * Fungsi untuk menghilangkan -150px-150px pada value featured_media
 * @param {string} url String
 * @returns string
 */
export function removeImageSizeSuffix(url) {
  return url.replace(/-\d+x\d+\.([a-zA-Z]+)$/, ".$1");
}
