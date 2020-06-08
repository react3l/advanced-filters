import { IMAGE_JPEG } from 'config/file-consts';

export function base64ToDataURL(base64: string, mimeType = IMAGE_JPEG) {
  return `data:${mimeType};base64,${base64}`;
}

export function stringToUint8Array(str) {
  const length = str.length;
  const array = new Uint8Array(new ArrayBuffer(length));
  for (let i = 0; i < length; i++) array[i] = str.charCodeAt(i);
  return array;
}
