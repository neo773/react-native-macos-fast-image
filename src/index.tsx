import {
  ImageResizeMode,
  ImageStyle,
  requireNativeComponent,
} from 'react-native';

/**
 * FasterImageProps
 * @typedef FasterImageProps
 * @property {ViewStyle} style - Style of the image
 * @property {string} url - URL of the image **required**
 * @property {string} [base64Placeholder] - Base64 encoded placeholder image
 * @property {string} [thumbhash] - Thumbhash of the image (base64 encoded)
 * @property {('cover' | 'contain' | 'center' | 'fill')} [resizeMode] - Resize mode of the image
 * @property {boolean} [showActivityIndicator] - Show activity indicator while loading, overrides placeholder. Defaults to false
 * @property {number} [transitionDuration] - Duration of the transition animation in seconds, defaults to 0.75
 * @property {number} [rounded] - Rounds the image into a circle, defaults to false
 * @property {string} [failureImage] - Image to show when the image fails to load, pass blurhash, thumbhash or base64 encoded image
 * @property {boolean} [progressiveLoadingEnabled] - Enable progressive loading, defaults to false
 * @property {('memory' | 'discWithCacheControl' | 'discNoCacheControl')} [cachePolicy] - Cache [policy](https://kean-docs.github.io/nuke/documentation/nuke/imagepipeline), defaults to 'memory'. 'discWithCacheControl' will cache the image in the disc and use the cache control headers to determine if the image should be re-fetched. 'discNoCacheControl' will cache the image in the disc and never re-fetch it.
 * @property {(result: { nativeEvent: { error: string } }) => void} [onError] - Callback for when an error occurs
 * @property {(result: { nativeEvent: { width: number; height: number; source: string; } }) => void} [onSuccess] - Callback for when the image loads successfully
 * */
export type FasterImageProps = {
  style: ImageStyle;
  thumbhash?: string;
  resizeMode?: ImageResizeMode;
  showActivityIndicator?: boolean;
  transitionDuration?: number;
  cachePolicy?: 'memory' | 'discWithCacheControl' | 'discNoCacheControl';
  rounded?: boolean;
  failureImage?: string;
  progressiveLoadingEnabled?: boolean;
  url: string;
  onError?: (result: { nativeEvent: { error: string } }) => void;
  onSuccess?: (result: {
    nativeEvent: {
      width: number;
      height: number;
      source: string;
    };
  }) => void;
};


/**
 * FasterImageView is a React Native component that renders an Image on iOS.
 * * Image types supported: PNG & JPEG.
 * * Supports base64 placeholders, and caching.
 * * Backed by [Nuke](https://github.com/kean/Nuke.git), a small, performant image loading library written in Swift.
 * @param props: FasterImageProps
 * @returns FasterImageView
 * @example
 * import { FasterImageView } from '@candlefinance/faster-image';
 *
 * <FasterImageView
 *    url="https://cataas.com/cat?width=200&height=200"
 *    onSuccess={(event) => console.warn(event.nativeEvent.cacheKey)}
 *    onError={(event) => console.warn(event.nativeEvent.error)}
 *    style={{ width: 200, height: 200 }}}
 * />
 * */
const FasterImageView = requireNativeComponent<FasterImageProps>('FasterImageView')

export default FasterImageView