import AppKit

/// Resize mode for the image.
/// - fill: Scale the image to fill the view.
/// - contain: Scale the image to fit the view.
/// - cover: Scale the image to fill the view, cropping if necessary.
/// - center: Center the image in the view.
enum ResizeMode: String {
    case fill, contain, cover, center
    
    var contentGravity: CALayerContentsGravity {
        switch self {
        case .fill:
            return .resize
        case .contain:
            return .resizeAspect
        case .cover:
            return .resizeAspectFill
        case .center:
            return .center
        }
    }
}