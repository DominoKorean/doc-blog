::: info
리소스팩 개발자들을 위한 문서로  
[마이크로소프트 공식 문서](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/?view=minecraft-bedrock-stable)와 [Bedrock Wiki](https://wiki.bedrock.dev/blocks/block-components)에 있는 내용중 리소스팩만으로만 사용 가능한 부분을 종합해 정리한 문서입니다.  
애드온 개발에 대해서는 위 두 문서를 참고해 주세요.
:::

# blocks.json
blocks.json은 리소스팩으로 가능한  
블록의 모든 상태를 지정해 줄 수 있는 거라고 보면 된다

## 그전에 json이 뭐임?
대충 자바 스크립트랑 같이 많이 씌이는 데이터 표기, 저장 방식  
뭐 정확한건 그냥 [이 영상](https://youtu.be/1ID6pfTViXo?si=WEE9vek8c6DJmkTM) 참고하고 (굳이 볼 필요는 없음)  
그냥 대충  
"자 이제부터 니 오른쪽 텍스쳐는 dirt.png를 쓰고 이거엔 3이라는 값을 써"  
해서 데이터를 형식에 맞게 저장해두면 그 데이터값을 불러와서  
리소스팩으로 불러와주는 방식이다.  
어렵다고 생각될 수도 있는데  
알맞은 폴더위치에 텍스쳐를 저장해두면 그 텍스쳐 파일을 불러와서  
리소스팩으로 불러와주는거랑 비슷한 원리다.   
( 적용 되는게 비슷한 원리라는거지 코드상으로 불러오는 방법이 비슷하다는게 아님 )  




## 기본적인 형식
일단 blocks.json은

```
📁리소스팩
    ↳🖼️ pack_icon.png
     🗒️ manifest.json
     🗒️ blocks.json
     ...
```
이런식으로 리팩 폴더안에 바로 넣으면 된다.

기본적인 베이스는 여기 베드락 리소스팩 공식 샘플파일 있으니까  
여기서 확인할 수 있고  
https://github.com/Mojang/bedrock-samples  
그래도 기본적인 형식 대충 보여주면
``` json
// 이렇게 /두개 옆에 있는건 주석이라고
// 대충 데이터 상에 아무런 영향도 안주는 메모 용도임
{
  "format_version": [
    1,
    1,
    0
  ],
  "leaves": { // 원하는 블록
    "isotropic": { // 원하는 블록에 지정해줄 데이터
      "up": true,
      "down": true
    },
      "concrete": { // 원하는 또다른 블록
    "sound": "stone",
    "textures": "concrete"
    }
  }
}
```
이런식으로 돼어있다.  
메모장이나 그런걸로 에디팅해도 되는데  
괄호 닫고 다음에 다른 항목 나올때 따옴표 넣는거 등  
실수하는 경우가 많기 때문에 그냥 vscode같은 코드에디터쓰는걸 추천한다.  

## 커스텀 할 수 있는거

### render_method

::: info AO 사전 설명
AO는 Ambient Occlusion의 약자로
대충 블록간에 모서리진곳 사이에 면에 그 그림자로 그라데이션 생기는거 말하는거
:::

|Material|설명                          |
|--------|------------------------------|
|opaque    |그냥 기존 우리가 아는 불투명 블록|
|alpha_test|완전히 투명한 텍스쳐에 사용. AO는 같이 비활성화 됨|
|blend     |반투명이나 완전히 투명하게가 텍스쳐에서 사용할 수 있게할때 씀. AO는 같이 비활성화 됨|
|double_sided|뒷면 컬링을 완전히 비활성화 하는데 씀|

```json {7-8}
{
  "format_version": [
    1,
    1,
    0
  ],
  "leaves": {
    "render_method": "alpha_test"
  }
}
```

### ambient_occlusion
위에서 설명했던것처럼  
블록간에 모서리진곳 사이에 그 그림자로 그라데이션 생기는거 있을지 말지 설정하는 역할이다.
```json {7-8}
{
  "format_version": [
    1,
    1,
    0
  ],
  "leaves": {
    "ambient_occlusion": true
  }
}
```

### textures
텍스쳐를 뭐쓸지 지정해주는 역할이다.  
이걸로 여러 블록이 같은 텍스쳐쓰게해서  
용량 최적화 하는것도 가능하다.  

텍스쳐는 파일 이름 뒤에 .png만 때주면 된다.  
다만 커스텀 텍스쳐는 안돼고 이미 있는 텍스쳐의 한에서만 가능하다.

```json {7-8}
{
  "format_version": [
    1,
    1,
    0
  ],
  "leaves": {
    "textures": "concrete" // 이렇게 하면 나뭇잎에 콘크리트 텍스쳐 쓰게 하는거임
  }
}
```

블록에 따라 여러 텍스쳐를 쓰는 경우에는

```json {7-14}
{
  "format_version": [
    1,
    1,
    0
  ],
  "chain_command_block": {
    "textures": {
      "up": "command_block_chain_conditional_side",
      "down": "command_block_chain_conditional_side",
      "north": "command_block_chain_front",
      "south": "command_block_chain_back",
      "west": "command_block_chain_side",
      "east": "command_block_chain_side"
    },
    "sound": "metal"
  }
}
```

이런식으로도 사용된다.  
각각 위, 아래, 동, 서, 남, 북 이런식으로 적용되고  
굳이 각각 이름대로의 방향이 아니더라도 다른 방식으로 사용되는 경우도 존재한다.  

```json {7-16}
{
  "format_version": [
    1,
    1,
    0
  ],
   "azalea" : {
      "sound" : "azalea",
      "textures" : {
         "down" : "potted_azalea_bush_top",
         "east" : "azalea_plant",
         "north" : "azalea_side",
         "side" : "azalea_side",
         "south" : "potted_azalea_bush_side",
         "up" : "azalea_top",
         "west" : "potted_azalea_bush_plant"
      }
  }
}
```
진달래 묘목(철쭉)인데 보면  
모델에 씌이지 않는 서, 남, 아래부분을  
화분에 꽂았을때 텍스쳐를 넣어뒀다.  
이런거는 [샘플팩](https://github.com/Mojang/bedrock-samples)에서 하나하나 확인하는 수 밖에 없다.

### sound
이 블록을 부수거나 위에서 걷거나 할때  
나오는 소리를 지정해주는 역할이다.  
소리 리스트는 이걸 참고하면 된다.  
https://wiki.bedrock.dev/blocks/block-sounds.html

```json {7-8}
{
  "format_version": [
    1,
    1,
    0
  ],
  "leaves": {
      "sound" : "grass"
  }
}
```

### isotropic
텍스쳐 랜덤으로 회전시킬때 쓰는 역할이다.

```json {7-10}
{
  "format_version": [
    1,
    1,
    0
  ],
   "leaves" : {
      "isotropic" : {
         "down" : true,
         "up" : true
           }
   }
}
```

이렇게 하면 아래와 윗면이 회전한다는 뜻

### face_dimming
블록 면 각도에 따라 그림자 지는거 없앨 수 있다.

```json {7-8}
{
  "format_version": [
    1,
    1,
    0
  ],
   "leaves" : {
    "face_dimming": false
   }
}
```

킬려면 true쓰면 된다.

### blockshape

블록 무슨 모델 쓸건지 지정해주는 역할이다.

```json {7-8}
{
  "format_version": [
    1,
    1,
    0
  ],
   "leaves" : {
    "blockshape": "frame" // 이러면 나뭇잎이 아이템 액자 모델 쓰게됨
   }
}
```
해당 모델을 쓴다고해서  
해당 블록의 textures를 쓰지는 않는다.  
특정 모델만 쓸 수 있고  
모델 리스트는 여기서 확인할 수 있다.  
https://wiki.bedrock.dev/blocks/block-shapes.html