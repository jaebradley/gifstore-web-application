import isUrl from 'is-url';
import axios from 'axios';

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#Image_types
const IMAGE_CONTENT_TYPES = [
  'image/gif',
  'image/png',
  'image/jpeg',
  'image/svg+xml',
  'image/x-icon',
  'image/vnd.microsoft.icon',
];

export default async function handleAddImageURLUpdate(url) {
  if (isUrl(url)) {
    let response;
    try {
      response = await axios.head(url);
    } catch (e) {
      return false;
    }

    if (response && response.headers && response.headers['content-type']) {
      const contentTypeHeader = response.headers['content-type'];
      if (IMAGE_CONTENT_TYPES.includes(contentTypeHeader)) {
        return true;
      }
    }
  }

  return false;
}
