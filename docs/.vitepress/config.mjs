import { defineConfig } from 'vitepress'

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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '문서로 이동', link: '/start' }
    ],

    outline: [2, 3],

    sidebar: [
      {
        text: '자바 에디션',
        items: [
          { 
            text: 'json 구문으로 리소스팩/데이터팩 설명 커스텀하기',
            link: '/java/respackjson/respackjson'
          }
        ]
      },
      {
        text: '베드락 에디션',
        items: [
          { 
            text: '리소스팩 개발자들을 위한 Block.json 설명', 
            link: '/bedrock/blockjson',
           }
        ]
      },
      { 
        text: '렌더드래곤 셰이더',
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
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DominoKorean/doc-blog' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '...',
        apiKey: '...',
        indexName: '...',
        locales: {
          ko: {
            placeholder: '문서 검색',
            translations: {
              button: {
                buttonText: '검색',
                buttonAriaLabel: '검색'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '검색 지우기',
                  resetButtonAriaLabel: '검색 지우기',
                  cancelButtonText: '취소',
                  cancelButtonAriaLabel: '취소'
                },
                startScreen: {
                  recentSearchesTitle: '검색 기록',
                  noRecentSearchesText: '최근 검색 없음',
                  saveRecentSearchButtonTitle: '검색 기록에 저장',
                  removeRecentSearchButtonTitle: '검색 기록에서 삭제',
                  favoriteSearchesTitle: '즐겨찾기',
                  removeFavoriteSearchButtonTitle: '즐겨찾기에서 삭제'
                },
                errorScreen: {
                  titleText: '결과를 가져올 수 없습니다',
                  helpText: '네트워크 연결을 확인하세요'
                },
                footer: {
                  selectText: '선택',
                  navigateText: '탐색',
                  closeText: '닫기',
                  searchByText: '검색 기준'
                },
                noResultsScreen: {
                  noResultsText: '결과를 찾을 수 없습니다',
                  suggestedQueryText: '새로운 검색을 시도할 수 있습니다',
                  reportMissingResultsText: '해당 검색어에 대한 결과가 있어야 합니까?',
                  reportMissingResultsLinkText: '피드백 보내기 클릭'
                }
              }
            }
          }
        }
      }
    },
  }
})
