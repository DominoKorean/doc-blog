# 렌더드래곤 셰이더 설치법

렌더드래곤 셰이더 설치법에 대한 문서입니다.


::: info
만약 유튜브등에서 실시간 그림자, 물과 철블록에 반사되는 주변 사물, 동적 색 조명등을 보고 오신거라면 해당 기능은 렌더드래곤 셰이더 모드가 아닌 **선명한 비주얼**입니다.  
**선명한 비주얼**은 모드 설치 없이 설정에서 키실 수 있습니다.
:::


::: info
렌더드래곤 셰이더를 리소스 팩에서 불러올 수 있게 하는 대부분의 유틸리티 모드는 마인크래프가 업데이트함에 따라 그에 맞춰 업데이트하기 전까지 작동을 하지 않을 수도 있습니다.  

만약 마인크래프트가 업데이트가 된 후 셰이더가 작동하지 않는다면 사용 중인 모드가 업데이트를 할 때까지 기다려주셔야합니다.
:::

<br>

## 모바일

### 안드로이드

> 삼성 갤럭시, 샤오미, 구글 픽셀 등 애플의 제품을 제외한 거의 대부분의 폰은 안드로이드를 사용합니다.

1. [MB Loader](https://github.com/DominoKorean/Render-dragon-shader-list/blob/main/language/ko_kr/README.md#mb-loader)를 설치합니다.
2. `Launch game`버튼을 누르면 현제 설치돼 있는 마인크래프트로 실행됩니다.
3. [이곳](https://faizul726.github.io/blog/list-of-minecraft-v26-10-rd-shaders/)에서 원하는 셰이더팩을 골라 다운로드 받아 리소스 팩으로 불러온 후 적용합니다.

<br>

APK를 직접 수정하여 적용하는 수동 설치를 원한다면 다음 문서를 참고해 주세요.
* [수동 설치 가이드](./androidrd.md)

<br>
<br>

### iOS

> 아이폰, 아이패드는 이 문서를 참고해 주세요.

* [iOS 렌더드래곤 셰이더 설치법](./ios.md)

<br>
<br>

## PC

### 윈도우

#### MCLauncher 사용
1. 최신 버전의 [MCLauncher](https://github.com/QYCottage/mc-w10-version-launcher/releases)을 다운로드합니다.
2. zip압축을 풀고 MCLauncher.exe를 실행합니다.
3. 원하는 마인크래프트 버전을 다운로드합니다.
4. [BetterRenderDragon](https://github.com/QYCottage/BetterRenderDragon/releases)모드 파일(.dll)을 다운로드합니다.
5. MCLauncher 폴더에서  
`imported_versions\Microsoft.MinecraftUWP "버전__패키지 이름".Appx\mods`  
경로에 dll 모드 파일을 넣고 다시 MCLauncher.exe를 켜고 마인크래프트를 실행합니다.
1. [이곳](https://faizul726.github.io/blog/list-of-minecraft-v26-10-rd-shaders/)에서 원하는 셰이더팩을 골라 다운로드 받아 리소스 팩으로 불러온 후 글로벌 리소스로 적용합니다.

#### LeviLauncher 사용
1. 최신 버전의 [LeviLauncher](https://github.com/LiteLDev/LeviLauncher/releases)을 다운로드합니다.
2. 왼쪽 다운로드 탭에서 원하는 마인크래프트 버전을 다운로드 합니다.
3. [BetterRenderDragon](https://github.com/QYCottage/BetterRenderDragon/releases)모드 파일(.dll)을 다운로드합니다.
4. 실행 탭에서 dll 모드 파일을 모드 폴더에 넣습니다.
5. [이곳](https://faizul726.github.io/blog/list-of-minecraft-v26-10-rd-shaders/)에서 원하는 셰이더팩을 골라 다운로드 받아 리소스 팩으로 불러온 후 글로벌 리소스로 적용합니다.

#### wyvern 사용

1. 최신 버전의 [wyvern](https://github.com/mcbegamerxx954/wyvern_releases/releases)을 다운로드합니다.
2. wyvern을 설치합니다.
3. 마인크래프트를 실행한 상태로 wyvern에서 Inject 버튼을 누릅니다.
4. [이곳](https://faizul726.github.io/blog/list-of-minecraft-v26-10-rd-shaders/)에서 원하는 셰이더팩을 골라 다운로드 받아 리소스 팩으로 불러온 후 글로벌 리소스로 적용합니다.


<br>

### 수동 설치

[IObit Unlocker](https://www.iobit.com/en/iobit-unlocker.php)을 통해 `material.bin`파일을 수동으로 교체할 수 있습니다.  
`materiall.bin`파일은 리소스 팩의 압축을 푼 후
```
🖼️ pack_icon.png
🗒️ manifest.json
📁 renderer
    ↳ 📁 materials
        ↳  .material.bin
```
이 경로에서 찾을 수 있습니다.

바닐라 베드락 마인크래프트의 `.materail.bin`는  
```
C:\Program Files\WindowsApps\Microsoft.MinecraftUWP_1.21.9401.0_x64__8wekyb3d8bbwe\data\renderer\materials
```
이곳에서 찾을 수 있습니다.

* [.material.bin 수동 설치법](./materialbin/materialbin.md)

<br>
<br>

## 문제 해결

> - #### **셰이더팩의 물, 하늘만 적용됩니다, 물, 하늘이 적용이 안됩니다.**  
> 마인크래프트를 재시작하면 대부분 해결됩니다.

> - #### **서버에 들어갔더니 셰이더가 작동하지 않습니다.**  
> 서버에 적용돼 있는 리소스 팩으로 인해 셰이더는 서버에서 제대로 작동하지 않을 수 있습니다.

> - #### **맵에 리소스 팩을 적용했더니 세이더가 작동하지 않습니다.**  
> 글로벌 리소스로 활성화해 주세요.

> - #### **모바일에서 모드 앱을 사용했더니 플레이하던 맵, 리소스 팩등의 데이터가 사라졌습니다.**  
>  데이터가 사라진 것이 아닙니다. MB Loader와 LeviLaunchroid는 기존 마인크래프트와 다른 저장 공간을 사용하기 때문에 기본 마인크래프트를 다시 실행하면 정상적으로 파일이 존재하는것을 볼 수 있습니다.

> [!NOTE]
> 위 사항 외의 버그 또는 문제는 셰이더 개발자에게 문의하세요.