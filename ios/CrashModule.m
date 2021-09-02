#import "CrashModule.h"
#import <UIKit/UIKit.h>
#import <React/RCTRootView.h>

@implementation CrashModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(crashNow)
{
  NSLog(@"Just a test");
  assert(NO);
}

@end
