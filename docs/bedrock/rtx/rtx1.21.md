# 마인크래프트 1.21.90 이상 베드락에서 광선 추적(RTX) 키는법

1.21.90 이후로 선명한 비주얼이 릴리즈 버전으로 들어옴과 함께 
여러 추가적인 버그들이 생겼다.  
현제 베드락에서 정상적으로 광선 추적을 키고 PBR 리소스팩을 적용할려면 다음과 같은 과정을 거쳐야 한다.  
( 이 방법은 BetterRTX 디스코드에서 가져왔다. )

일단 현제 광선 추적이 맵에 들어갔을때만 켜지는 버그가 존재한다.  
https://bugs.mojang.com/browse/MCPE/issues/MCPE-191513  
몇몇 리소스팩에선 자동으로 켜지는 경우도 있긴 한데 대부분 경우에는 안켜질거다.  
따라서 광선 추적을 키기 위해선 리소스팩을 끼고  
비디오 설정에서 ***게임 내 그래픽 모드 전환 허용***을 키고 맵 안에서 번경해줘야한다.  
![](/bedrock/rtx/1.png)

또 현제 **게임 내 그래픽 모드 전환 허용** 옵션이 안켜져있을경우 PBR 텍스처가 아예 적용이 안되는 버그가 존재한다.  
https://bugs.mojang.com/browse/MCPE/issues/MCPE-220313  
따라서 게임을 껐다키면 최소 한번씩 ***게임 내 그래픽 모드 전환 허용***을 한번 껐다켜줘야 PBR 텍스처가 제대로 적용이 된다.

마지막으로 BetterRTX라는 모드가 있는데  
이게 지금 베드락 광선추적은 현제 아예 손을 놨다고 봐도 무방할정도로 업데이트가 거의 끊긴 상태다.  
따라서 BetterRTX 모드를 설치해주는것이 좋다.  
비올때 물웅덩이 추가나 비 그친 후 무지개 추가 이런 사소한 개선사항들만 있는게 아니라  
노이즈 개선, 반투명 개체에 빛이 제대로 통과하지 못하는 문제, 잘못된 곳에서 야외의 대기가 보이는 문제, 최신 버전 블록 버그 수정 등등등  
수많은 버그들과 기술적 개선사항이 포함되어있으니 반드시 설치하는것을 추천한다.  

설치 방법은 윈도우 검색창에 **Windows powershell** 치면 나오는 이거 실행해준 다음  
![](/bedrock/rtx/2.png)  
여기에
``` powershell
iwr https://bedrock.graphics/installer | iex`
```
이거 입력하고  엔터치고 조금 기다리면 아래같은 창이 뜰텐데
![](/bedrock/rtx/3.png)  
사진처럼 Install Preset을 BetterRTX 1.4로 선택하고 Install 누르면 된다.

만약 인스톨러에 있는 다른 프레셋이 궁금하다면 여기서 찾아볼 수 있으니 원하는 프레셋을 선택해 설치해도 된다.  
https://bedrock.graphics/presets  
더 많은 스크린샷은 [디스코드](https://discord.gg/minecraft-rtx-691547840463241267)에서 확인이 가능하다.  

---

만약 공식 런처 안쓰고 써드파티 런처를 사용하거나 따로 appx파일을 구해서 설치한 경우에는 설치기가 작동을 안할 수 있다.  
이 경우에는 IObit Unlocker로 수동으로 `.materl.bin`파일을 교체해야한다.

`.material.bin`파일 구하는 법은  
https://bedrock.graphics/presets  
여기서 프레셋 `.rtpack`다운받아서 `.zip`로 이름 바꾼 다음 압축 풀면  
`renderer/materials`폴더쪽에 있다.

- [IObit Unlocker로 .material.bin 수동으로 교체하는법](/bedrock/rd/materialbin/materialbin)