#import "CrashModule.h"
#import <UIKit/UIKit.h>
#import <React/RCTRootView.h>

@implementation CrashModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(crashNow)
{
  assert(NO);
}

@end
