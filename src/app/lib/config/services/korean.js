import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { latin } from '@bbc/gel-foundations/scripts';
import { korean as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Seoul';

const service = {
  lang: `ko`,
  articleAuthor: `https://www.facebook.com/bbcnewskorean`,
  articleTimestampPrefix: 'Updated',
  atiAnalyticsAppName: 'news-korean',
  atiAnalyticsProducerId: '57',
  brandName: 'BBC News 코리아',
  product: 'BBC News 코리아',
  defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/korean.png',
  defaultImageAltText: 'BBC News 코리아',
  dir: `ltr`,
  externalLinkText: ', external',
  imageCaptionOffscreenText: 'Image caption, ',
  videoCaptionOffscreenText: 'Video caption, ',
  audioCaptionOffscreenText: 'Audio caption',
  defaultCaptionOffscreenText: 'Caption, ',
  imageCopyrightOffscreenText: 'Image source, ',
  locale: `ko-KO`,
  datetimeLocale: `ko-KO`.toLowerCase(),
  service: 'korean',
  serviceName: 'News 코리아',
  themeColor: `${C_POSTBOX}`,
  twitterCreator: '@bbcworld',
  twitterSite: '@bbcworld',
  noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
  publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
  script: latin,
  manifestPath: '/manifest.json',
  swPath: '/sw.js',
  translations: {
    home: '뉴스',
    currentPage: 'Current page',
    skipLinkText: '내용으로 건너뛰기',
    error: {
      404: {
        statusCode: '404',
        title: '404 - 페이지를 찾을 수 없습니다',
        message:
          '웹사이트 주소를 잘못 입력하셨을 수 있습니다. 주소와 철자를 확인해 주십시오.',
        solutions: [
          'Double checking the url',
          'Hitting the refresh button in your browser',
          'Searching for this page using the BBC search bar',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'BBC 뉴스 홈 페이지',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/korean',
      },
      500: {
        statusCode: '500',
        title: '500 - 오류',
        message: '오류가 발생했습니다. 페이지를 새로 고쳐 주십시오.',
        solutions: [
          'Hitting the refresh button in your browser',
          'Coming back again later',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'BBC 뉴스 홈 페이지',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/korean',
      },
    },
    consentBanner: {
      privacy: {
        title: "We've updated our Privacy and Cookies Policy",
        description: {
          uk: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
          international: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
        },
        accept: 'OK',
        reject: "Find out what's changed",
        rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
      },
      cookie: {
        title: 'Let us know you agree to cookies',
        description: {
          uk: {
            first: 'We use ',
            linkText: 'cookies',
            last:
              ' to give you the best online experience. Please let us know if you agree to all of these cookies.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
          international: {
            first: 'We and our partners use technologies, such as ',
            linkText: 'cookies',
            last:
              ', and collect browsing data to give you the best online experience and to personalise the content and advertising shown to you. Please let us know if you agree.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
        },
        accept: 'Yes, I agree',
        reject: 'No, take me to settings',
        rejectUrl:
          'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
      },
    },
    media: {
      audio: '오디오',
      photogallery: '이미지 갤러리',
      video: '비디오',
    },
  },
  brandSVG,
  footer: {
    externalLink: {
      href: 'https://www.bbc.co.uk/help/web/links/',
      text: '외부 콘텐츠 링크에 대한 본사 정책 보기.',
    },
    links: [
      {
        href: 'https://www.bbc.com/korean/institutional-49283197',
        text: 'BBC News를 신뢰할 수 있는 이유',
      },
      {
        href: 'https://www.bbc.co.uk/usingthebbc/terms/',
        text: '이용 약관',
      },
      {
        href: 'https://www.bbc.co.uk/usingthebbc/privacy/',
        text: '개인정보취급방침',
      },
      {
        href: 'https://www.bbc.co.uk/usingthebbc/cookies/',
        text: '쿠키정책',
      },
      {
        href: 'https://www.bbc.com/korean/institutional-42224941',
        text: '고객센터',
      },
    ],
    copyrightText:
      'Copyright © 2019 BBC. BBC는 외부 인터넷 사이트 및 콘텐츠에 대한 책임을 지지않습니다.',
  },
  fonts: [],
  navigation: [
    {
      title: '뉴스',
      url: '/korean',
    },
    {
      title: '비디오',
      url: '/korean/media/video',
    },
    {
      title: '다운로드',
      url: '/korean/downloads',
    },
    {
      title: 'TOP 뉴스',
      url: '/korean/popular/read',
    },
  ],
  timezone: 'Asia/Seoul',
};

export default service;
