export type ReleaseJob = {
    name:string;
    project:string;
    branch:string;
    startTime:string;
    timeElapsed:string;
    status:string;
    prepScript:string;
    buildCommand:string;
    versionNumberStrategy:string;
    webHookUrl:string;
    targetLocationForWindows:string;
    targetLocationForLinux:string;
    releaseType:string;
  }