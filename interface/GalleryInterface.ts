export interface GalleryInterface {
  id: string;
  user: {
    name: string;
  };
  alt_description: string;
  urls: {
    full: string;
    small: string;
  };
}
