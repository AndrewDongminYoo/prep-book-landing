import type { Locale } from "./i18n";

// Copy lives here rather than in the components so the two locales stay
// visibly parallel: a missing translation is a type error, not a silent
// fallback to English.
//
// The Korean copy is the operator's own, from the v0 design adopted on
// 2026-11-01; the English is a translation of it. It paraphrases the store
// description in `fastlane/metadata/ios/{ko,en-US}/description.txt` of
// prep_book, and every claim about the app must still hold against that text
// and against the app. One phrase was changed for that reason: "내 기기에
// 안전하게" became "기기 안에 저장", because the privacy policy says device
// backup can include the data. Recipe import stays off the page until the store
// text describes it and #100's device checks pass.
//
// Arrays of strings are the lines a heading or paragraph breaks into on wide
// screens. `{n}` in a preview string is replaced with a number.
export type Dictionary = {
  meta: { title: string; description: string; ogAlt: string };
  header: {
    home: string;
    navLabel: string;
    features: string;
    how: string;
    pricing: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: readonly string[];
    titleAccent: string;
    description: readonly string[];
    cta: string;
    note: string;
    audience: string;
    photoAlt: string;
    photoLabel: string;
    caption: string;
  };
  preview: {
    topline: string;
    recipe: string;
    recipeKind: string;
    base: string;
    maxBatch: string;
    quantityLabel: string;
    unit: string;
    decrease: string;
    increase: string;
    batchesOne: string;
    batchesOther: string;
    tableCaption: string;
    columns: readonly [string, string, string];
    ingredients: readonly [string, string, string, string];
    bottom: string;
    example: string;
  };
  benefits: readonly [string, string, string, string];
  features: {
    kicker: string;
    title: readonly string[];
    description: readonly string[];
    items: readonly { tag: string; title: string; description: string; detail: string }[];
  };
  how: {
    kicker: string;
    title: readonly string[];
    steps: readonly { title: string; text: string }[];
  };
  pricing: {
    kicker: string;
    title: readonly string[];
    description: readonly string[];
    freeLabel: string;
    freeTitle: string;
    freeText: string;
    freeBadge: string;
    paidLabel: string;
    paidTitle: string;
    paidText: string;
    footnote: readonly [string, string];
  };
  download: {
    kicker: string;
    title: readonly string[];
    text: readonly string[];
    soon: string;
    available: string;
    note: string;
  };
  footer: {
    tagline: string;
    contact: string;
    privacy: string;
    language: string;
    languageHref: string;
    rights: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  ko: {
    meta: {
      title: "Prep Book — 레시피는 한 번, 오늘의 생산은 더 간단하게",
      description:
        "작은 식당과 베이커리를 위한 레시피 환산 앱. 오늘 만들 양만 입력하면 배치별 계량부터 생산표까지. App Store와 Google Play 출시 예정.",
      ogAlt: "레시피 수첩과 계량스푼, 저울이 그려진 Prep Book 앱 아이콘.",
    },
    header: {
      home: "Prep Book 홈",
      navLabel: "주요 메뉴",
      features: "주요 기능",
      how: "사용 방법",
      pricing: "이용 안내",
      cta: "출시 예정",
    },
    hero: {
      eyebrow: "작은 주방을 위한, 든든한 준비",
      title: ["레시피는 한 번.", "오늘의 생산은"],
      titleAccent: "더 간단하게.",
      description: [
        "저장해 둔 레시피에 오늘 만들 양만 입력하세요.",
        "배치별 계량부터 생산표까지, Prep Book이 준비합니다.",
      ],
      cta: "Prep Book 살펴보기",
      note: "App Store · Google Play 출시 예정",
      audience: "작은 식당과 베이커리의 오너, 헤드 셰프를 위해",
      photoAlt: "따뜻한 아침 햇살 아래 갓 구운 빵과 베이킹 재료",
      photoLabel: "LESS CALCULATING. MORE CREATING.",
      caption: "내 레시피 그대로, 필요한 만큼.",
    },
    preview: {
      topline: "오늘의 생산",
      recipe: "우유 식빵",
      recipeKind: "표준 레시피",
      base: "기준 생산량 20개",
      maxBatch: "1회 최대 30개",
      quantityLabel: "오늘 만들 양",
      unit: "개",
      decrease: "생산량 10개 줄이기",
      increase: "생산량 10개 늘리기",
      batchesOne: "총 {n}개 배치로 나누어 준비하세요",
      batchesOther: "총 {n}개 배치로 나누어 준비하세요",
      tableCaption: "생산량에 따른 전체 재료 계량 예시",
      columns: ["재료", "총 필요량", "베이커스 %"],
      ingredients: ["강력분", "우유", "무염 버터", "설탕"],
      bottom: "복잡한 계산 없이, 정확한 준비",
      example: "미리보기",
    },
    benefits: ["인터넷 없이도", "가입 없이 바로", "기기 안에 저장", "구독 없이 한 번 구매"],
    features: {
      kicker: "MADE FOR YOUR DAILY PREP",
      title: ["계산은 줄이고,", "요리에 더 집중하세요."],
      description: [
        "매일 반복되는 준비가 조금 더 편해지도록.",
        "주방에 꼭 필요한 기능만 담았습니다.",
      ],
      items: [
        {
          tag: "레시피 저장",
          title: "우리 가게의 레시피, 한곳에",
          description:
            "인분, 개수, 무게, 부피. 익숙한 기준으로 레시피를 저장하세요. 하위 레시피와 장비별 최대 생산량, 손실 보정까지 함께 기록합니다.",
          detail: "밀가루 대비 비율도 한눈에",
        },
        {
          tag: "유연한 환산",
          title: "재료마다 다른 계산도 정확하게",
          description:
            "생산량에 비례하는 재료부터 배치마다 넣는 재료, 한 번만 넣는 재료, 적당량까지. 재료에 맞는 환산 방식을 선택하세요.",
          detail: "올림한 값과 정확한 값을 함께",
        },
        {
          tag: "배치별 생산",
          title: "오늘 만들 양만 알려 주세요",
          description:
            "목표 생산량을 입력하면 배치 수와 배치별 계량을 계산합니다. 하위 레시피도 함께 계산하고, 확인할 항목은 따로 알려 줍니다.",
          detail: "이번 생산에만 수량 조정 가능",
        },
        {
          tag: "PDF · 생산 이력",
          title: "주방에서 바로 보는 생산표",
          description:
            "한 장짜리 PDF 생산표로 공유하고 인쇄하세요. 저장한 생산 이력은 나중에 레시피를 수정해도 그대로 남습니다.",
          detail: "그날의 기록은 그날 그대로",
        },
        {
          tag: "오프라인 사용",
          title: "인터넷 없이도, 내 기기에서",
          description:
            "계정도 인터넷도 필요하지 않습니다. 레시피와 생산 이력은 기기 안에 저장되고, 파일로 백업하거나 복원할 수 있습니다.",
          detail: "휴대폰부터 태블릿, 화면 분할까지",
        },
        {
          tag: "레시피 원가",
          title: "맛만큼 중요한 원가까지",
          description:
            "재료 구입 가격을 입력하면 레시피 원가를 계산합니다. 익숙한 레시피의 비용을 확인하고, 더 나은 생산 계획을 세우세요.",
          detail: "재료 가격으로 간편하게 계산",
        },
      ],
    },
    how: {
      kicker: "A SIMPLE ROUTINE",
      title: ["익숙한 레시피에서", "오늘의 생산표까지, 세 단계."],
      steps: [
        { title: "레시피를 담고", text: "기준 생산량과 재료를 한 번만 저장하세요." },
        { title: "오늘 만들 양을 입력하면", text: "필요한 재료와 배치별 계량이 계산됩니다." },
        {
          title: "준비 끝. 이제 만들어 볼까요?",
          text: "생산표를 공유하거나 인쇄해 주방으로 가져가세요.",
        },
      ],
    },
    pricing: {
      kicker: "YOURS, WITHOUT A SUBSCRIPTION",
      title: ["충분히 써 보고,", "한 번만 구매하세요."],
      description: [
        "매달 나가는 구독료는 없습니다.",
        "우리 주방에 맞는지, 레시피 하나로 먼저 경험해 보세요.",
      ],
      freeLabel: "무료로 시작",
      freeTitle: "레시피 1개, 모든 기능",
      freeText: "보관한 레시피를 포함해 1개를 저장할 수 있습니다.",
      freeBadge: "무료",
      paidLabel: "한 번 구매로 잠금 해제",
      paidTitle: "레시피는 필요한 만큼",
      paidText: "인앱 구매 한 번으로 레시피 저장 제한을 해제하세요.",
      footnote: ["모든 기능 포함", "정기 결제 없음"],
    },
    download: {
      kicker: "A BETTER PREP DAY IS COMING",
      title: ["더 가벼운 주방의 하루,", "곧 만나보세요."],
      text: [
        "App Store와 Google Play 출시를 준비하고 있습니다.",
        "출시되면 이 페이지에서 바로 다운로드할 수 있습니다.",
      ],
      soon: "출시 예정",
      available: "다운로드",
      note: "iOS & Android · 휴대폰과 태블릿 지원",
    },
    footer: {
      tagline: "좋은 요리는, 좋은 준비에서.",
      contact: "연락처",
      privacy: "개인정보처리방침",
      language: "English",
      languageHref: "/en",
      rights: "All rights reserved.",
    },
  },
  en: {
    meta: {
      title: "Prep Book — save the recipe once, make today's prep simple",
      description:
        "A recipe scaling app for small restaurants and bakeries. Enter today's quantity and get per-batch amounts and a production sheet. Coming to the App Store and Google Play.",
      ogAlt: "The Prep Book app icon: a recipe notepad, a measuring spoon and a kitchen scale.",
    },
    header: {
      home: "Prep Book home",
      navLabel: "Main menu",
      features: "Features",
      how: "How it works",
      pricing: "Pricing",
      cta: "Coming soon",
    },
    hero: {
      eyebrow: "Steady prep for small kitchens",
      title: ["Save the recipe once.", "Make today's prep"],
      titleAccent: "simple.",
      description: [
        "Enter only today's quantity on a saved recipe.",
        "Prep Book works out the batches and the production sheet.",
      ],
      cta: "Explore Prep Book",
      note: "Coming to the App Store and Google Play",
      audience: "For owners and head chefs of small restaurants and bakeries",
      photoAlt: "Fresh bread and baking ingredients in warm morning light",
      photoLabel: "LESS CALCULATING. MORE CREATING.",
      caption: "Your recipe, in the amount you need.",
    },
    preview: {
      topline: "Today's production",
      recipe: "Milk bread",
      recipeKind: "Standard recipe",
      base: "Base yield 20 pcs",
      maxBatch: "Max 30 per batch",
      quantityLabel: "Make today",
      unit: "pcs",
      decrease: "Make 10 fewer",
      increase: "Make 10 more",
      batchesOne: "Prepare it in {n} batch",
      batchesOther: "Prepare it in {n} batches",
      tableCaption: "Example of total ingredient amounts for the quantity",
      columns: ["Ingredient", "Total", "Baker's %"],
      ingredients: ["Bread flour", "Milk", "Unsalted butter", "Sugar"],
      bottom: "Accurate prep without the arithmetic",
      example: "Preview",
    },
    benefits: [
      "Works offline",
      "No sign-up",
      "Stored on your device",
      "One purchase, no subscription",
    ],
    features: {
      kicker: "MADE FOR YOUR DAILY PREP",
      title: ["Less arithmetic,", "more cooking."],
      description: [
        "To make the prep you repeat every day a little easier,",
        "it holds only what a kitchen needs.",
      ],
      items: [
        {
          tag: "Recipes",
          title: "Your kitchen's recipes, in one place",
          description:
            "Portions, pieces, weight or volume: save recipes in the units you already use. Sub-recipes, a maximum batch for your equipment and a loss allowance are kept with them.",
          detail: "Baker's percentages at a glance",
        },
        {
          tag: "Flexible scaling",
          title: "The right maths for each ingredient",
          description:
            "From ingredients that scale with the quantity to ones added per batch, once per run, or to taste: choose how each one scales.",
          detail: "Rounded and exact values side by side",
        },
        {
          tag: "Batches",
          title: "Just tell it how much to make",
          description:
            "Enter a target quantity to get the number of batches and the amounts in each. Sub-recipes are worked out too, and anything that needs a look is flagged.",
          detail: "Adjust an amount for this run only",
        },
        {
          tag: "PDF · History",
          title: "A production sheet for the kitchen",
          description:
            "Share or print a one-page PDF production sheet. A saved production run stays as it was, even after you edit the recipe.",
          detail: "Each day's record stays as it was",
        },
        {
          tag: "Offline",
          title: "No internet, on your own device",
          description:
            "No account and no internet connection needed. Recipes and production history are stored on the device, and you can back them up to a file and restore them.",
          detail: "Phones, tablets and split screen",
        },
        {
          tag: "Recipe cost",
          title: "Cost matters as much as taste",
          description:
            "Enter ingredient purchase prices to see what a recipe costs, and plan production with those numbers in view.",
          detail: "Worked out from ingredient prices",
        },
      ],
    },
    how: {
      kicker: "A SIMPLE ROUTINE",
      title: ["From a familiar recipe", "to today's sheet, in three steps."],
      steps: [
        { title: "Save the recipe", text: "Store the base yield and ingredients once." },
        {
          title: "Enter today's quantity",
          text: "The ingredients and per-batch amounts are worked out.",
        },
        {
          title: "Ready. Time to make it.",
          text: "Share or print the production sheet and take it to the kitchen.",
        },
      ],
    },
    pricing: {
      kicker: "YOURS, WITHOUT A SUBSCRIPTION",
      title: ["Try it properly,", "then buy it once."],
      description: [
        "There is no monthly fee.",
        "Start with one recipe and see whether it fits your kitchen.",
      ],
      freeLabel: "Start free",
      freeTitle: "One recipe, every feature",
      freeText: "Save one recipe, archived recipes included.",
      freeBadge: "Free",
      paidLabel: "Unlock with one purchase",
      paidTitle: "As many recipes as you need",
      paidText: "A single in-app purchase removes the recipe limit.",
      footnote: ["Every feature included", "No recurring payment"],
    },
    download: {
      kicker: "A BETTER PREP DAY IS COMING",
      title: ["A lighter day in the kitchen,", "coming soon."],
      text: [
        "We are preparing the release on the App Store and Google Play.",
        "Once it is out, you can download it from this page.",
      ],
      soon: "Coming soon",
      available: "Download",
      note: "iOS & Android · Phones and tablets",
    },
    footer: {
      tagline: "Good cooking starts with good prep.",
      contact: "Contact",
      privacy: "Privacy policy",
      language: "한국어",
      languageHref: "/ko",
      rights: "All rights reserved.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
