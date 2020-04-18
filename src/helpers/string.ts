import path from 'path';

export function url(baseURL: string, ...segments: string[]) {
  return `${baseURL}/${path.join(...segments)}`;
}

export function ellipsisText(text: string, length?: number): string {
  if (typeof text === 'string') {
    if (length >= text.length) {
      return text;
    }
    return text?.substr(0, length) + '...';
  }
  return text;
}
