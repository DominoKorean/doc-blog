# 셰이더팩 추천 목록

::: info
고사양 기준 - RTX 20번대에서 50~100 프레임  
대부분 셰이더는 RTX 3060 ti 에서 60프레임 방어 가능  
프레임의 기준은 Iris, Sodium 모드 16청크 야생 평원바이옴 기준 대략적인 측정  

셰이더는 그림자 맵같은거 제외하면 거의 전부 GPU만 사용하기 때문에 사양 볼려면 병목 안나는 한에서 GPU만 보면 됨

대부분의 셰이더는 Nvidia, AMD 그래픽 카드가 아닐 시 의도된 기능이 작동하지 않거나 할 수 있음  
각 셰이더 지원 여부는 [ShaderLabs 위키 셰이더 목록 문서](https://shaderlabs.org/wiki/Shaderpacks) 확인

노트북 내장 그래픽은 저사양 써도 10프레임 안팎이니까 그냥 이쁜 리소스팩 쓰는걸 강력 추천  
:::

::: info 분류 정보
BSL같이 대부분 PBR 리소스팩 지원은 설정에서 켜줘야 됨  
매우 비추천은 있으나 마나라는거임  
내장 PBR 지원은 대부분 텍스쳐 지원 기준. 단순 내장 재질이면 대부분 나뭇잎 SSS정도는 있음.  
PBR 항에 "**개발에 자주 사용됨**"은 실제 PBR 리팩 제작에 자주 씌인다는 뜻임

Old PBR(SEUS PBR)은 예전에 사용되던 PBR 리소스팩 포맷임  
요즘 리소스팩과는 호환이 안된다는 뜻  
LabPBR 풀지원은 LabPBR 1.3 포맷에 있는 모든 재질을 지원한다는 말임  
내장 PBR은 따로 리팩 안껴도 PBR 재질이 내장되있다는 말

패트리온같이 월정액의 경우  
결제 후 게시물 열람 가능 > 파일 다운로드(영구)  
월정액 끊어도 됨  
대신 월정액 끝나고 다시 다운로드 하고 싶거나 새 버전 다운 받을려면 다시 구매해야됨
:::

::: warning 특수 조명 셰이더 사용 주의
SEUS PTGI같이 레이트레이싱 등 바닐라가 아닌 특수한 조명을 따로 사용하는 경우 작동 방식 때문에  
마인크래프트가 업데이트하면서 새로 생긴 조명 블록에 빛이 안나거나  
새로 생긴 블록중 모델을 사용하는 블록이 버그가 날 수 있음  
보통 대부분 유로 셰이더이니
추천 목록에 있는 셰이더중 다음 목록에 있는 셰이더들은 해당 사항이 생길 수 있으니 참고 바람
<details>
<summary>특수 조명 사용 목록</summary>

- Kappa
- Nostalgia ( 패스트레이싱 설정을 킬 경우 )
- KappaPT
- ApolloRT
- MollyVX
- Sundial
- Rethinking Voxel

</details>
:::

# 추천하는 셰이더

| 셰이더 | 사양 | PBR 리소스팩 | 가격 | 모드 지원 | 부가 설명 |
|-------|------|-------------|------|----------|----------|
|[projectLUMA](https://www.curseforge.com/minecraft/shaders/projectluma)|초저사양|매우 비추천|무료|특별 지원 없음|옛날 셰이더라 관련 버그가 날 수도 있음 <br> 예전 버전이라면 더더욱 강력 추천|
|[SEUS RENEWED](https://sonicether.com/shaders/download/renewed-v1-0-1/)|초저사양|지원|무료|특별 지원 없음|옛날 셰이더라 관련 버그가 날 수도 있음<br>색유리가 검게 되는 버그 존재|
|[Silder's Virant](https://www.curseforge.com/minecraft/shaders/sildurs-vibrant-shaders)|초저사양<br>~<br>저사양|매우 비추천|무료|[DH](https://modrinth.com/mod/distanthorizons) 지원|가장 높은 Extreme 써도 렉 별로 안걸림 <br> **공식 홈페이지에 바이러스성 광고 있음 <br> 반드시 Curseforge에서 다운받을것**|
|[Chocapic](https://www.curseforge.com/minecraft/shaders/chocapic13-shaders)|초저사양<br>~<br>저사양|지원<br>(노멀맵, POM만)|무료|특별 지원 없음|가장 높은 Extreme 써도 렉 별로 안걸림|
|[Photon](https://modrinth.com/shader/photon-shader)|중저사양|지원|무료|특별 지원 없음||
|[BSL](https://modrinth.com/shader/bsl-shaders)|중간사양|LabPBR 풀지원|무료|호환성 매우 좋음 <br> [DH](https://modrinth.com/mod/distanthorizons) 지원||
|[Complementary](https://modrinth.com/shader/complementary-reimagined)|중간사양|LabPBR 풀지원<br>내장 PBR 지원|무료|호환성 매우 좋음 <br> [DH](https://modrinth.com/mod/distanthorizons) 지원||
|[Complementary<br>Euphoria<br>Patches](https://modrinth.com/mod/euphoria-patches)|중간사양|LabPBR 풀지원<br>내장 PBR 지원|무료|300개 이상 모드 블록 지원<br>[지원 모드 리스트](https://www.euphoriapatches.com/properties/list/)<br>[DH](https://modrinth.com/mod/distanthorizons) 지원<br>[Create](https://modrinth.com/mod/create) 특수 지원|모드로 설치해야됨.<br>Complementary셰이더 필요|
|[Bliss](https://github.com/X0nk/Bliss-Shader)|중간사양|LabPBR 풀지원<br>개발에 자주 사용됨|무료|호환성 좋음 <br> [DH](https://modrinth.com/mod/distanthorizons) 지원|가장 안정된 버전은 Release에서<br>최신 안정된 버전은 Stable 브랜치에서<br>(화면 상단 녹색 Code 버튼)<br>다운 가능|
|[FastPBR](https://modrinth.com/shader/fastpbr)|중간사양|지원|무료|호환성 매우 안좋음|종종 버그로 화면 공간 반사(SSR) 작동 안함|
|[Nostalgia](https://modrinth.com/shader/nostalgia-shader)|중고사양|지원<br>개발에 자주 사용됨|무료|호환성 매우 안좋음||
|[Kappa](https://modrinth.com/shader/kappa-shader)|중고사양|지원<br>개발에 자주 사용됨|무료|호환성 매우 안좋음||
|[SEUS PTGI](https://www.patreon.com/c/sonicether)|고사양|Old PBR만 지원|무료|호환성 매우 안좋음|가장 많이 사용되는건 HRR 2.1<br>가장 최신버전은 HRR 3<br>최신 버전에서 가장 렉이 덜걸리는건 HRR 2<br>각 버전에 씌여있는 마크 버전보다<br>높은 버전의 블록은 버그남<br>모드 블록, 리팩 커스텀 블록 모델도 동일|
|[KappaPT](https://www.patreon.com/join/rre36)|고사양|지원<br>개발에 자주 사용됨|12.5 달러<br>(패트리온)|호환성 매우 안좋음|구매시 NostalgiaVX, Soft Voxels 까지<br>같이 사용 가능||
|[NostalgiaVX](https://www.patreon.com/join/rre36)|고사양|지원<br>개발에 자주 사용됨|6.5 달러<br>(패트리온)|호환성 매우 안좋음|구매시 Soft Voxels 까지 같이 사용 가능||
|[ApolloRT](https://www.patreon.com/snurf)|고사양|지원|7 달러<br>(패트리온)|호환성 매우 안좋음||
|[MollyVX](https://www.patreon.com/rutherin)|고사양|지원<br>(Old PBR 때 재질만)|5 달러<br>(패트리온)|호환성 매우 안좋음|구매시 Raspberry, VXFluff<br>까지 같이 사용 가능|
|[Sundial](https://afdian.com/a/geforcelegend)|고사양|LabPBR 풀지원|10 위안<br>(Afdian)|[DH](https://modrinth.com/mod/distanthorizons) 지원<br>[Physics Mod](https://modrinth.com/mod/physicsmod) 일부 지원||


## 취향에 따라 추천하는 셰이더

> 사양 대비 퀄리티때문에 크게 추천하진 않지만  
> 취향에 맞다면 사용해볼만한 셰이더

| 셰이더 | 사양 | PBR 리소스팩 | 가격 | 모드 지원 | 부가 설명 |
|-------|------|-------------|------|----------|----------|
|[AstraLex](https://modrinth.com/shader/astralex)|중간 사양|지원|무료|특별 지원 없음||
|[Solas](https://modrinth.com/shader/solas-shader)|중간 사양|지원|무료|[DH](https://modrinth.com/mod/distanthorizons) 지원<br> [8개의 모드 블록 지원](https://modrinth.com/shader/solas-shader/version/2.4b)||
|[Super Duper Vanilla](https://modrinth.com/shader/super-duper-vanilla)|중간 사양|지원|무료|[DH](https://modrinth.com/mod/distanthorizons) 지원||
|[Lux](https://modrinth.com/shader/lux-v1)|중간 사양|지원|무료|특별 지원 없음||
|[Bloop](https://modrinth.com/shader/bloop-shaders)|중간 사양|지원|무료|[DH](https://modrinth.com/mod/distanthorizons) 지원||
|[Escheridia](https://modrinth.com/shader/escheridia)|중간 사양|지원|무료|특별 지원 없음||
|[Eclipse](https://github.com/Merlin1809/Eclipse-Shader)|중간 사양|지원|무료|호환성 좋음 <br> [DH](https://modrinth.com/mod/distanthorizons) 지원|Bliss 셰이더 포크 개조 버전<br>렉은 Bliss보다 좀 더걸림<br>상단 녹색 Code 버튼에서 다운로드
|[Shrimple](https://github.com/Null-MC/Shrimple)|중간 사양<br>~<br>고사양|지원|무료|[DH](https://modrinth.com/mod/distanthorizons) 지원<br>[Create](https://modrinth.com/mod/create)및 관련 모드 특수 지원<br>[Physics Mod](https://modrinth.com/mod/physicsmod) 지원<br>[이외의 13개 모드 지원](https://github.com/Null-MC/Shrimple?tab=readme-ov-file#mod-support)|설정에서 핵심 기능인 레이트레이싱 킬 수 있음<br>릴리즈 버전 말고 상단<br>녹색 Code 버튼에서 다운로드|
|[Rethinking Voxels](https://modrinth.com/shader/rethinking-voxels)|고사양|지원<br>내장 PBR 지원|무료|[DH](https://modrinth.com/mod/distanthorizons) 지원||

## 비추천, 주의해야할 셰이더
> 유명한 셰이더중 비추천하거나 주의할 필요가 있는 셰이더  

| 셰이더 | 설명 |
|-------|------|
|MakeUp - Ultra Fast|퀄리티 대비 하나도 안빠름<br>이거 쓸바에 Silders나 Chocapic 쓰는걸 매우 강력히 추천|
|iterationT, iterationRP|라이선스 무시하고 다른 셰이더 코드 가져다 쓴 중국산 셰이더<br>당연히 라이선스 위반임<br>iterationRP도 문제되는 부분 제거했다 했지만 원본이 원본인지라<br>당연히 긴빠이 코드 남아있을 가능성 충분|
|Pyvtron, Pyvtron VX|iteration 개조 버전|

## 퀄리티 안좋은 셰이더, 불펌 셰이더 피하는법
사실 위에 추천셰이더만 써도 된다고 생각하면 편함  
셰이더만 5년 넘게 파온놈이 모아둔거라 굳이 똥인지 된장인지 퍼먹고 다닐 필요 없음  

내가 그래도 만약 셰이더를 찾아다녀 보고 싶다 이러면  
일단 마크 셰이더 업계는 특이하게도 커뮤니티가 통합이 잘되있음  
때문에 중심 커뮤니티인 ShaderLabs 디스코드에 없는 개발자가 올린 셰이더면 불펌일 가능성이 높음  
그리고 특히 그 중에서도 "Vanilla-like" 이런 컨샙이면 99% 바닐라 컨샙이 아니라 그냥 안만든거임  
최적화나 퀄리티나 뭐 하나 제대로 된게 없을 확률이 매우 높음  

팁이라면  
1. 유명한거 써라  
2. 쓸꺼 없음 그냥 Complementary 써라
3. 모드 쓸꺼면 그냥 Euphoria Patches 써라
4. 대형 모드쓸꺼면 레이트레이싱같은 특수 조명 모드는 포기해라

## Complementary를 써야 하는 이유
대부분의 상황에서, 특히 방송인들은 Complementary를 쓰는것을 강력히 추천함  
Complementary는 컨샙 자체가 어느 상황에서나 뛰어난 퀄리티와 성능임  
그리고 정말로 그걸 높은 퀄리티로 구현함  
눈이 피로하게 느껴지는 경우도 별로 없고  
적절하게 화려한 이펙트는 대부분의 상황에서 셰이더의 아름다움을 부각시키는데다  
어두운곳에서도 너무 어둡지도 않음  
버그도 별로 없고 모드들도 무난하게 호환되는데다가  
초기 세팅이 굳이 많이 필요하지도 않고  
동시에 넓은 범위의 커스텀을 지원함  
그리고 이 모든사항을 포함해서 적절한 프레임을 유지함  

때문에 야생, 탈출맵, 서버등등 대부분의 콘텐츠에서 무난하게 사용이 가능한데다  
라이선스상 허가를 받으면 셰이더 수정도 가능해서 사람만 구한다면 콘텐츠 제작에도 용이함  
더 화려한 설정이나 더 많은 모드 지원을 원하면 Euphoria Patches를 사용하면 됨  

따라서  
"난 복잡한 세팅이 귀찮다"  
"방송에서 쓸 셰이더가 필요하다"  
"여러 콘텐츠를 오갈때 쓸 셰이더가 필요하다"  
하면 Complementary를 고르면 됨  

## Iris Shader? Optifine? 뭐써야됨?

1. Optifine 써도 상관 없음.  
대신 몇몇 메이져 셰이더는 Iris Shader에서만 지원하는 기능을 쓰고  
최신 버전의 옵티파인(1.21.8 이상)은 버그가 날 확률이 좀 높음  
2. **모드랑 같이 쓸꺼면 무조건 Iris Shader**  
3. 패브릭 모드랑 같이 옵티파인의 유리, 줌등 쓰고싶으면 [Fabulously Optimized](https://modrinth.com/modpack/fabulously-optimized)모드팩  
릴리즈 버전(녹색 R)쓰면 옵티파인 기능 거의 다 쓸 수 있고  
최적화도 이게 제일 무난함  

- Optifine = 기능이 많다. 설치하기 편하다. 최신버전에서 버그가 좀 많고 업데이트가 느리다. **다른 모드랑 호환성이 매우 안좋다.**  
= 1.16 보다 아래인 예전 버전에서 쓰기 좋다.
- Iris Shader = 최적화가 좋다. 가장 최신 환경인 모드다. 모드 호환성이 좋다. 업데이트가 빠르고 플랫폼을 다양하게 지원한다.  
= 1.16 이상 최신 버전에서 쓰기 좋다. 


밑에는 안읽어도 됨  
그냥 자꾸 분탕이 보여서 쓴 글임

참고로 자꾸 옵티파인을 좀 공격적으로 대하거나  
커뮤니티에서 들은걸 자꾸 그냥 다른곳으로 그대로 들고와 맹목적으로 비판하는 경우가 있는데  
옵티파인이 없었으면 애초에 셰이더 업계가 이렇게까지 발전할 수 없었음  
옵티파인 개발자가 헌신해 줬기 때문에 지금까지 이어져 올 수 있는거임  
옵티파인같이 그래픽 모드는 버전이 바뀔때마다 바뀌는게 많아 유지 난이도가 매우 높음  
그런 상황에서 혼자서 1.7때부터 몇년간 개발 유지하는데 그냥 지친거임  
정작 현제 셰이더 업계를 유지하고 지탱하고 발전시키는 개발자들은 전부 옵티파인을 존중해주고 있음  
그런데 거기다 대고 망토팔이니 뭐니 하는 짓거린 그냥 외부사람이 보기엔  
갤에서 좆목질하러온 분탕으로밖에 안보임  
제발 가장 관련있는 본진에서도 그짓거리는 안하는데 그딴 소리좀 그만했으면 좋겠음  
옵티파인 사용할 수도 있고 모드 호환성이 안좋으면 다른 모드로 알려주면 되는거임  
뉴비들이 자꾸 옵티파인 가져오는건 니들 좆같으라고가 아니라 한국 커뮤 자료가 낡아빠져서 검색하면 옵티파인밖에 안나와서 그럼  
질문하는게 싫으면 반응 하지를 말고 제대로 아는게 없으면 누굴 욕하는 등신짓좀 그만했으면 좋겠음

<style>
  /* Prevent wrapping in all table columns by default */
  .vp-doc table th,
  .vp-doc table td {
    white-space: nowrap;
  }
</style>
