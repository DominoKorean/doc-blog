
> [!warning] ⚠️ 주의
> iOS 환경은 매우 불안정하며 셰이더가 제대로 작동하지 않을 수 있습니다.

# iOS 렌더드래곤 셰이더 설치법

## HynisLoader 사용
[HynisLoader](https://github.com/HynisDev/HynisLoader)을 통해 리소스 팩으로 셰이더 팩을 불러올 수 있습니다.

셰이더 목록은 [이곳](https://faizul726.github.io/blog/list-of-minecraft-v26-10-rd-shaders/)에서 확인이 가능합니다.

- 탈옥된 기기의 경우, [이곳](https://github.com/congcq/HynisLoader/releases)에서 이 .deb 파일을 다운로드한 뒤 Sileo/Zebra를 통해 설치할 수 있습니다.

- 탈옥되지 않은 기기의 경우, [이곳](https://github.com/congcq/HynisLoader/releases)에서 `libhynisloader.dylib`을 다운로드한 뒤 `TrollFools`를 사용해 주입하거나, Esign, Ksign, Feather 등의 사이드로딩 앱을 사용해 IPA 파일의 메인 실행 파일에 직접 주입하세요. 그다음 인증서로 서명하거나 TrollStore를 사용할 수 있는 경우 TrollStore를 통해 주입된 IPA를 설치하세요.

## 수동 설치법
### IPA 추출
렌더드래곤 셰이더를 설치하기 위해서는 마인크래프트의 렌더파일을 수정해주어야 합니다.  
그러기 위해서는 마인크래프트를 IPA로 추출한 뒤 다시 설치해주어야 하며 이를 위해서는  
PC가 필요합니다.

Windows에서는 iMazing을 이용해 추출할 수 있습니다.  
먼저 [iMazing](https://imazing.com/?gad=1&gclid=Cj0KCQjwoK2mBhDzARIsADGbjeoNt1rkkKWWJVaawEFnsUmV3QjthBa3UjxAL7h_cefyqWyxDuxRis8aAvGIEALw_wcB)을 설치해 줍니다.  
그 후 아이폰을 USB를 통해 PC에 연결해 줍니다.  
iMazing의 설치가 다되었다면 평가판 계속 사용하기를 누른 후 앱 관리에 들어가 줍니다.  
그 후 앱관리에서 마인크래프트를 우클릭 한 뒤 .IPA파일을 설치를 눌러줍니다. (프로그램 내에 한국어 번역이 잘못돼 있음)  
IPA를 추출하였다면 Bandizip과 같이 압축파일을 열 수 있는 프로그램을 통해 파일을 열어줍니다.  
그 후
```
Payload\minecraft.app\data\renderer\materials
```
폴더로 들어가 다운로드 받은 material.bin 셰이더파일을 덮어씌워줍니다.  
마지막으로 마인크래프트를 Sideload를 통해 다시 설치해 주면 됩니다.

### 탈옥 기기의 경우
먼저 [Filza](https://filzadownload.com/)를 설치해 줍니다.
Filza를 설치했다면
```
var\containers\Bundle\Application\Mincraft\minecraftpe.app\data\renderer\materials
```
폴더에서 materials 폴더를 백업해 줍니다.  
그 후 다운로드 받은 렌더드래곤 셰이더 파일을 선택한 후 복사 해준 뒤  
다시 위 경로로 가 material.bin 파일을 덮어씌워줍니다.

## IPA 설치하기
탈옥하지 않은 기기의 경우 IPA를 설치하기 위해 외부 PC를 통해 Sideload 해와야 합니다.    
Sideload 프로그램을 통해 가능하며 아래와 같은 프로그램이 있습니다.
* [AltStore](https://altstore.io)
* [Sideloadly](https://sideloadly.io)
* [SideStore](https://sidestore.io/)
