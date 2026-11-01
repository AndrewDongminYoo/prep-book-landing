import type { Locale } from "./i18n";

// Copy lives here rather than in the components so the two locales stay
// visibly parallel: a missing translation is a type error, not a silent
// fallback to English.
//
// Every sentence about the app is taken from its store description, which the
// operator approved: `fastlane/metadata/ios/{ko,en-US}/description.txt` in
// AndrewDongminYoo/prep_book. Change that text first and copy it here, never the
// other way round, so the page cannot promise something the listing does not.
// The English section headings are the store's upper-case headings in sentence
// case; nothing else was reworded.
//
// Recipe import is on the app's main branch but is deliberately absent: the
// store text does not mention it yet, and its on-device acceptance checks
// (prep_book issue #100) are still open.
export type Dictionary = {
  meta: { title: string; description: string; ogAlt: string };
  hero: { tagline: string; sub: string; cta: string; iconAlt: string };
  features: {
    title: string;
    items: readonly { title: string; body: string }[];
  };
  pricing: { title: string; body: string };
  closing: { title: string; status: string; appStore: string; playStore: string };
  footer: {
    developer: string;
    contact: string;
    privacy: string;
    language: string;
    languageHref: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  ko: {
    meta: {
      title: "Prep Book: 오늘 생산량에 맞춘 레시피 환산",
      description:
        "Prep Book은 작은 식당과 베이커리의 오너와 헤드 셰프를 위한 레시피 환산 앱입니다. 표준 레시피를 한 번 저장해 두면, 매일 생산량만 바꿔서 배치별 계량과 생산표를 받을 수 있습니다.",
      ogAlt: "레시피 수첩과 계량스푼, 저울이 그려진 Prep Book 앱 아이콘.",
    },
    hero: {
      tagline: "저장해 둔 레시피에 오늘 만들 양만 입력하면 생산표가 나옵니다.",
      sub: "Prep Book은 작은 식당과 베이커리의 오너와 헤드 셰프를 위한 레시피 환산 앱입니다. 표준 레시피를 한 번 저장해 두면, 매일 생산량만 바꿔서 배치별 계량과 생산표를 받을 수 있습니다.",
      cta: "스토어에서 받기",
      iconAlt: "레시피 수첩과 계량스푼, 저울이 그려진 Prep Book 앱 아이콘.",
    },
    features: {
      title: "할 수 있는 일",
      items: [
        {
          title: "레시피를 저장하세요",
          body: "기준 생산량을 인분, 개수, 무게, 부피 중 하나로 정하고 재료와 하위 레시피를 넣습니다. 장비에 맞춘 1회 최대 생산량과, 분할과 성형에서 잃는 양을 채우는 손실 보정도 정할 수 있습니다. 밀가루로 표시한 재료가 있으면 무게로 잰 재료마다 밀가루 대비 비율을 보여 줍니다.",
        },
        {
          title: "재료마다 환산 방식을 고르세요",
          body: "생산량에 비례하는 재료, 배치마다 같은 양이 들어가는 재료, 전체에 한 번만 넣는 재료, \"적당량\"처럼 수량을 정할 수 없는 재료를 구분합니다. 올림 단위를 정해도 정확한 값은 함께 보관하고 보여 줍니다.",
        },
        {
          title: "생산량을 입력하고 결과를 확인하세요",
          body: "목표 생산량을 입력하면 배치 수와 배치별 계량, 하위 레시피까지 계산합니다. 확인이 필요한 항목은 경고로 표시하고, 이번 생산에만 쓸 수량으로 바꿀 수 있습니다.",
        },
        {
          title: "생산표를 공유하거나 인쇄하세요",
          body: "한 장짜리 PDF 생산표를 만들어 공유하거나 인쇄할 수 있습니다. 저장한 생산 이력은 나중에 레시피를 고쳐도 바뀌지 않습니다.",
        },
        {
          title: "인터넷 없이 사용하세요",
          body: "계정이 필요 없고, 레시피와 생산 이력은 기기 안에 저장됩니다. 레시피 목록은 파일로 백업하고 복원할 수 있습니다. 휴대폰과 태블릿, 가로 화면과 화면 분할을 모두 지원합니다.",
        },
        {
          title: "레시피 원가를 확인하세요",
          body: "재료 구입 가격을 입력하면 레시피 원가를 계산합니다.",
        },
      ],
    },
    pricing: {
      title: "무료로 써 보고, 한 번 구매로 잠금 해제하세요",
      body: "무료 버전에서는 보관한 레시피를 포함해 레시피를 하나 저장할 수 있고, 그 레시피로 모든 기능을 사용할 수 있습니다. 한 번 인앱 구매하면 레시피를 필요한 만큼 저장할 수 있습니다. 구독은 없습니다.",
    },
    closing: {
      // A no-break space keeps "Google Play" on one line: `keep-all` breaks
      // Korean only at spaces, so a plain one can fall inside the name.
      title: "App Store와 Google Play 출시를 준비하고 있습니다",
      status: "출시되면 이 페이지에서 각 스토어로 바로 이동할 수 있습니다.",
      appStore: "App Store에서 보기",
      playStore: "Google Play에서 보기",
    },
    footer: {
      developer: "만든 사람: 유동민",
      contact: "연락처",
      privacy: "개인정보처리방침",
      language: "English",
      languageHref: "/en",
    },
  },
  en: {
    meta: {
      title: "Prep Book: recipe scaling for kitchens",
      description:
        "Prep Book is a recipe scaling app for owners and head chefs of small restaurants and bakeries. Save a standard recipe once, then change only the day's quantity to get per-batch amounts and a production sheet.",
      ogAlt: "The Prep Book app icon: a recipe notepad, a measuring spoon and a kitchen scale.",
    },
    hero: {
      tagline: "Enter today's quantity on a saved recipe and get a production sheet.",
      sub: "Prep Book is a recipe scaling app for owners and head chefs of small restaurants and bakeries. Save a standard recipe once, then change only the day's quantity to get per-batch amounts and a production sheet.",
      cta: "Get the app",
      iconAlt: "The Prep Book app icon: a recipe notepad, a measuring spoon and a kitchen scale.",
    },
    features: {
      title: "What it does",
      items: [
        {
          title: "Save your recipes",
          body: "Set a base yield in portions, pieces, weight, or volume, and add ingredients and sub-recipes. You can also set a maximum batch yield for your equipment and a loss allowance for what dividing and shaping lose. Mark an ingredient as flour to see each ingredient weighed by mass as a percentage of flour.",
        },
        {
          title: "Choose how each ingredient scales",
          body: "Tell apart ingredients that scale with the quantity, that go into every batch in the same amount, that go in once per run, and that have no fixed amount, such as \"to taste.\" When you round up an amount, the exact value is kept and shown beside it.",
        },
        {
          title: "Enter a quantity and review the result",
          body: "Enter a target quantity to see the number of batches, the amounts in each batch, and any sub-recipes. Items that need a look are flagged, and you can use a different amount for this run only.",
        },
        {
          title: "Share or print the sheet",
          body: "Make a one-page PDF production sheet to share or print. A saved production run stays as it was, even after you edit the recipe.",
        },
        {
          title: "Works without internet",
          body: "No account is needed, and your recipes and production history stay on the device. Back up your recipe library to a file and restore it later. Phones and tablets, landscape, and split screen are all supported.",
        },
        {
          title: "See what a recipe costs",
          body: "Enter ingredient purchase prices to see what a recipe costs.",
        },
      ],
    },
    pricing: {
      title: "Free to try, one purchase to unlock",
      body: "The free version holds one recipe, archived recipes included, and every feature works on it. A one-time in-app purchase lets you save as many recipes as you need. There is no subscription.",
    },
    closing: {
      title: "Coming to the App Store and Google Play",
      status: "Once it is released, this page will link to each store.",
      appStore: "View on the App Store",
      playStore: "View on Google Play",
    },
    footer: {
      developer: "Built by Dongmin Yu",
      contact: "Contact",
      privacy: "Privacy policy",
      language: "한국어",
      languageHref: "/ko",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
