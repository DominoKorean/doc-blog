import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/doc-blog/',
  head: [['link', { rel: 'icon', href: '/doc-blog/favicon.ico' }]],
// favicon.ico를 public 디렉토리에 배치하거나 base가 설정된 경우,
  // /base/favicon.ico를 사용하세요.
/* 다음과 같이 랜더링:
  <link rel="icon" href="/favicon.ico">
*/
  lastUpdated: true,
  sitemap: {
    hostname: 'https://dominokorean.github.io/doc-blog'
  },
  title: "도미노한국인 문서 블로그",
  description: "문서를 위한 블로그",
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '문서로 이동', link: '/start' }
    ],

    outline: [2, 3],

    //사이드바
    sidebar: [
      {
        text: '개발',
        collapsed: false,
        items: [
          {
            text: '자바',
            items: [
              { 
                text: '리소스팩 개발자들을 위한 Block.json 설명', 
                link: '/bedrock/blockjson',
              },
            ]
          },
          {
            text: '베드락',
            items: [
              { 
                text: 'json 구문으로 리소스팩/데이터팩 설명 커스텀하기',
                link: '/java/respackjson/respackjson'
              },
            ]
          },
        ]
      },
      {
        text: '기타 자료',
        collapsed: false,
        items: [
          {
            text: '자바',
            items: [
              {
                text: '셰이더 추천 목록',
                link: '/java/shader_rec/shader_rec'
              },
              {
                text: '버전별 셰이더팩 설치법',
                link: '/java/what_shader_mod/what_shader_mod'
              }
            ]
          },
          {
            text: '베드락',
            items: [
               {
                text: '1.21.90 이후 최신버전에서 광선추적 키는법',
                link: '/bedrock/rtx/rtx1.21'
              },
              {
                text: '베드락 에디션(BE)을 시작하는 플레이어를 위한 안내서',
                link: '/bedrock/OMS/start_bedrock_oms'
              }
            ]
          },
          {
            text: '기타',
            items: [
               {
                text: '팩, 모드, 프로그램 용어 정리',
                link: 'both/packterms/packterms.md'
              }
            ]
          },
        ]
      },
      { 
        text: '렌더드래곤 셰이더',
        collapsed: false,
        items: [
          { 
            text: '렌더드래곤 셰이더 설치법',
            link: '/bedrock/rd/rdinstall',
            items: [
              { 
                text: '안드로이드 수동 설치법',
                link: '/bedrock/rd/androidrd'
              },
              { 
                text: 'iOS 설치법',
                link: '/bedrock/rd/ios'
              },
              {
                text: '.material.bin 파일을 수동으로 교체하는법',
                link: '/bedrock/rd/materialbin/materialbin'
              }
            ]
          }
        ]
      },
      {
        text: '마인크래프트 PBR 텍스처 가이드(WIP)',
        collapsed: true,
        items: [
          {
            text: 'PBR 텍스처에 대해 알아보자',
            link: '/pbr/start_pbr'
          },
          {
            text: 'PBR 포맷',
            items: [
              {
                text: 'Oldpbr / SEUS pbr',
                link: '/pbr/oldpbr/oldpbr'
              }
            ]
          }
        ]
      }
    ],

    //소셜링크
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DominoKorean/doc-blog' }
    ],

    //번역
    docFooter: {
      prev: '이전',
      next: '다음'
    },

    outline: {
      label: '목차'
    },

    lastUpdated: {
      text: '마지막 업데이트'
    },

    notFound: {
      title: '페이지를 찾을 수 없습니다',
      quote:
        '방향을 바꾸지 않고 계속 찾다 보면 결국 당신이 가고 있는 곳에 도달할 수도 있습니다.',
      linkLabel: '홈으로 가기',
      linkText: '홈으로 돌아가기'
    },

    langMenuLabel: '언어 변경',
    returnToTopLabel: '맨 위로 돌아가기',
    sidebarMenuLabel: '사이드바 메뉴',
    darkModeSwitchLabel: '다크 모드',
    lightModeSwitchTitle: '라이트 모드로 변경',
    darkModeSwitchTitle: '다크 모드로 변경',
    skipToContentLabel: '본문으로 건너뛰기'
  }
})
