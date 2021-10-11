import sys
import requests
import os
import csv
import smtplib
import ssl


projectName = 'everup'
apkName = "EverUp"
ipaName = "EverUp"
pathIos = '/Users/kunal/Project/everup/ios'
pathIpa = '/Users/kunal/Project/everup/ipa'
pathPlist = '/Users/kunal/Project/everup/automation'
token = 'U7hpy7TMn5CXRiYGQael6PVQiUqXKlrZA0VVySOxiB'
csvPath = '/Users/kunal/Project/everup/automation/emails.csv'
assetPath = '/Users/kunal/Project/everup/android/app/src/main/res'
projectRoot = '/Users/kunal/Project/everup'
ipaPath = '/Users/kunal/Project/everup/ipa/invezta.ipa'
apkPath = '/Users/kunal/Project/everup/android/app/build/outputs/apk/release/app-release.apk'



def build_ios():
    os.chdir(pathIos)
    clean = 'xcodebuild clean -workspace {0}.xcworkspace -scheme {0} && xcodebuild clean -project {0}.xcodeproj -scheme {0}'.format(
        projectName)
    os.system(clean)
    os.system(
        'security unlock -p passphrase ~/Library/Keychains/login.keychain')
    archive = 'xcodebuild archive -workspace {0}.xcworkspace -scheme {0} -archivePath {1}/{0}.xcarchive'.format(
        projectName, pathIpa)
    os.system(archive)
    ipa = 'xcodebuild -exportArchive -archivePath {0}/{2}.xcarchive -exportPath {0} -exportOptionsPlist {1}/ExportOptions.plist'.format(
        pathIpa, pathPlist, projectName)
    os.system(ipa)
    os.chdir(projectRoot)
    mvipa = 'mv ipa/{0}.ipa ~/Desktop'.format(ipaName)
    os.system(mvipa)


def build_android(d):
    os.chdir(projectRoot)
    os.system('cd android && cd app && rm -rf build && cd src && cd main && cd assets && rm -rf index.android.bundle')
    os.chdir(projectRoot)
    os.system('npx jetify && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res')
    os.chdir(assetPath)
    folders = os.listdir(path='.')
    for f in folders:
        if f[0:3] == 'dra' or f[0:3] == 'raw':
            p = assetPath+'/{0}/'.format(f)
            os.chdir(p)
            os.system(
                'find . ! -name launch_screen.png ! -name cert.pem ! -name background_splash.xml -delete')
    os.chdir(projectRoot)
   
    if d == 'true':
         os.system('cd android && ./gradlew clean && ./gradlew assembleDebug')
         mvapk = 'mv android/app/build/outputs/apk/debug/app-debug.apk ~/Desktop/{0}_debug.apk'.format(
            apkName)
         os.system(mvapk) 
    else:
         os.system('cd android && ./gradlew clean && ./gradlew assembleRelease')
         mvapk = 'mv android/app/build/outputs/apk/release/app-release.apk ~/Desktop/{0}.apk'.format(
            apkName)
         os.system(mvapk)
         os.system('cd android && ./gradlew clean && ./gradlew bundleRelease') 
         os.system(
        'mv android/app/build/outputs/bundle/release/app-release.aab ~/Desktop/finzipp_bundle.aab') 


if sys.argv[1] == 'ios':
    build_ios()
elif sys.argv[1] == 'android':
    build_android('false')
elif sys.argv[1] == 'android_debug':
    build_android('true')
else:
    build_ios()
    build_android()
