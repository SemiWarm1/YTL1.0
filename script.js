const YTL_LANG_STORAGE_KEY = "ytlLanguage";

const YTL_TEXT_MAP = {
  "中文": "中文",
  "用户端": "User Side",
  "商户端": "Merchant Side",
  "登录后查看积分与专属礼遇": "Sign in to view points and exclusive benefits",
  "YTL 会员": "YTL Member",
  "条款与隐私页面": "Terms & Privacy Pages",
  "联系我们": "Contact Us",
  "设置 - YTL Mall": "Settings - YTL Mall",
  "FAQs - YTL Mall": "FAQs - YTL Mall",
  "条款与隐私 - YTL Mall": "Terms & Privacy - YTL Mall",
  "联系我们 - YTL Mall": "Contact Us - YTL Mall",
  "帮助中心": "Help Center",
  "客户支持": "Customer Support",
  "法律与隐私": "Legal & Privacy",
  "查看会员注册、积分使用、优惠券领取与停车权益等常见问题。": "View common questions about membership registration, points usage, coupon redemption, and parking benefits.",
  "了解会员服务使用条款、数据使用说明与隐私保护政策。": "Learn about membership service terms, data usage information, and privacy protection policies.",
  "如需会员帮助、优惠券咨询、停车权益协助或投诉建议，可通过以下方式联系。": "For membership help, coupon inquiries, parking benefit support, or complaints and suggestions, contact us through the channels below.",
  "如何注册会员？": "How do I register as a member?",
  "在首页或设置页点击注册，填写手机号、邮箱与基础信息后即可完成会员开通。": "Tap Register on the home page or settings page, then fill in your phone number, email, and basic information to complete membership activation.",
  "积分可以提现吗？": "Can points be withdrawn as cash?",
  "当前积分仅支持在商城内兑换奖励、停车券及指定会员活动，不支持提现吗。": "Points can currently be used only for mall rewards, parking vouchers, and selected member activities, and cannot be withdrawn as cash.",
  "优惠券如何使用？": "How do I use coupons?",
  "领取后可在“奖励”或“我的券包”中查看，结账时向门店出示对应二维码进行核销。": "After claiming, you can view coupons in Rewards or My Coupons and present the corresponding QR code at checkout for redemption.",
  "停车券多久生效？": "How long does it take for a parking voucher to take effect?",
  "停车券兑换成功后通常在 30 分钟内生效，具体以停车系统同步结果为准。": "Parking vouchers usually take effect within 30 minutes after successful redemption, subject to the parking system sync result.",
  "会员服务条款": "Membership Service Terms",
  "会员账户仅限本人使用，积分、奖励和优惠权益需在有效期内使用，不得转售或违规转让。": "Membership accounts are for personal use only. Points, rewards, and promotional benefits must be used within their validity period and may not be resold or transferred improperly.",
  "隐私说明": "Privacy Notice",
  "我们仅在提供会员服务、奖励发放、通知提醒和运营优化所需范围内收集并使用你的信息。": "We collect and use your information only within the scope necessary for member services, reward delivery, notifications, and operations optimization.",
  "数据安全": "Data Security",
  "平台采用加密传输与权限控制机制保护账户、手机号、邮箱及交易相关信息。": "The platform uses encrypted transmission and permission controls to protect account, phone, email, and transaction-related information.",
  "政策更新": "Policy Updates",
  "如条款或隐私政策发生更新，我们会通过 App 消息、活动页或设置页进行同步公告。": "If the terms or privacy policy are updated, we will announce the changes through app messages, activity pages, or the settings page.",
  "客服热线": "Support Hotline",
  "客服邮箱": "Support Email",
  "服务时间": "Service Hours",
  "周一至周日 10:00 - 22:00，节假日与商场营业时间同步。": "Monday to Sunday 10:00 - 22:00, synchronized with mall operating hours on holidays.",
  "服务台地址": "Service Desk Address",
  "YTL Mall 一层中央服务台，支持会员咨询、停车券与活动权益处理。": "YTL Mall Level 1 central service desk, supporting member consultation, parking vouchers, and activity benefit handling.",
  "奖励": "Rewards",
  "发现": "Discover",
  "首页": "Home",
  "钱包": "Wallet",
  "工作台": "Workbench",
  "数据": "Dashboard",
  "关闭设置": "Close Settings",
  "返回首页": "Back to Home",
  "返回优惠券": "Back to Coupons",
  "返回商户首页": "Back to Merchant Home",
  "返回工作台": "Back to Workbench",
  "返回录入记录": "Back to Manual Records",
  "返回钱包": "Back to Wallet",
  "打开设置": "Open Settings",
  "消息列表": "Messages",
  "搜索": "Search",
  "查看活动详情：春日风尚生活": "View activity details: Spring Lifestyle",
  "查看活动详情：仲夏轻奢礼遇": "View activity details: Midsummer Luxury Offer",
  "奖励栏目": "Rewards Tabs",
  "角色切换": "Role Switch",
  "用户端菜单": "User Menu",
  "请输入手机号": "Please enter phone number",
  "请输入密码": "Please enter password",
  "请再次输入密码": "Please confirm password",
  "请输入邮箱": "Please enter email",
  "请输入详细地址": "Please enter detailed address",
  "请输入身份证号码": "Please enter ID number",
  "请输入开卡商场": "Please enter issuing mall",
  "请输入开卡人": "Please enter issuer",
  "请输入会员姓名": "Please enter member name",
  "请输入优惠券券码": "Please enter coupon code",
  "请输入交易门店": "Please enter transaction store",
  "请输入金额，如 RM 128.00": "Please enter amount, e.g. RM 128.00",
  "请选择开始时间": "Please select start time",
  "请选择结束时间": "Please select end time",
  "请选择开始时间": "Please select start time",
  "请选择结束时间": "Please select end time",
  "显示密码": "Show password",
  "隐藏密码": "Hide password"
};

function translateTextValue(value) {
  if (!value) return value;
  return YTL_TEXT_MAP[value] || value;
}

function applySavedLanguage() {
  const lang = localStorage.getItem(YTL_LANG_STORAGE_KEY) || "zh";
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  const languageButtons = document.querySelectorAll(".language-button");
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  const translatableNodes = document.querySelectorAll("[data-cn][data-en]");
  translatableNodes.forEach((node) => {
    node.textContent = lang === "en" ? node.dataset.en : node.dataset.cn;
  });

  if (lang !== "en") {
    return;
  }

  document.querySelectorAll("title").forEach((node) => {
    node.textContent = translateTextValue(node.textContent);
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement && ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const current = node.nodeValue.trim();
    if (!current) return;
    const translated = translateTextValue(current);
    if (translated !== current) {
      node.nodeValue = node.nodeValue.replace(current, translated);
    }
  });

  document.querySelectorAll("[placeholder],[aria-label]").forEach((element) => {
    if (element.hasAttribute("placeholder")) {
      const placeholder = element.getAttribute("placeholder");
      const translatedPlaceholder = translateTextValue(placeholder);
      if (translatedPlaceholder !== placeholder) {
        element.setAttribute("placeholder", translatedPlaceholder);
      }
    }

    if (element.hasAttribute("aria-label")) {
      const ariaLabel = element.getAttribute("aria-label");
      const translatedAriaLabel = translateTextValue(ariaLabel);
      if (translatedAriaLabel !== ariaLabel) {
        element.setAttribute("aria-label", translatedAriaLabel);
      }
    }
  });
}

function setGlobalLanguage(lang) {
  localStorage.setItem(YTL_LANG_STORAGE_KEY, lang);
  applySavedLanguage();
}

document.addEventListener("DOMContentLoaded", () => {
  applySavedLanguage();

  const languageButtons = document.querySelectorAll(".language-button");
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setGlobalLanguage(button.dataset.lang);
    });
  });

  const navItems = document.querySelectorAll(".nav-item");
  const screens = document.querySelectorAll(".screen");

  if (navItems.length && screens.length) {
    function setActiveTab(tabName) {
      navItems.forEach((item) => {
        item.classList.toggle("is-active", item.dataset.tab === tabName);
      });

      screens.forEach((screen) => {
        screen.classList.toggle("is-active", screen.dataset.screen === tabName);
      });
    }

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        setActiveTab(item.dataset.tab);
      });
    });
  }
});
