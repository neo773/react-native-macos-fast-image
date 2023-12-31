#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(FasterImageViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(url, NSString)

RCT_EXPORT_VIEW_PROPERTY(base64Placeholder, NSString)

// RCT_EXPORT_VIEW_PROPERTY(blurhash, NSString)

RCT_EXPORT_VIEW_PROPERTY(thumbhash, NSString)

RCT_EXPORT_VIEW_PROPERTY(resizeMode, NSString)

RCT_EXPORT_VIEW_PROPERTY(cachePolicy, NSString)

RCT_EXPORT_VIEW_PROPERTY(failureImage, NSString)

RCT_EXPORT_VIEW_PROPERTY(rounded, BOOL)

RCT_EXPORT_VIEW_PROPERTY(progressiveLoadingEnabled, BOOL)

RCT_EXPORT_VIEW_PROPERTY(transitionDuration, NSNumber)

RCT_EXPORT_VIEW_PROPERTY(showActivityIndicator, BOOL)

RCT_EXPORT_VIEW_PROPERTY(onError, RCTDirectEventBlock)

RCT_EXPORT_VIEW_PROPERTY(onSuccess, RCTDirectEventBlock)

@end
