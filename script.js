const YTL_LANG_STORAGE_KEY = "ytlLanguage";

const YTL_TEXT_MAP = {
  "中文": "中文",
  "用户端": "User Side",
  "商户端": "Merchant Side",
  "登录后查看积分与专属礼遇": "Sign in to view points and exclusive benefits",
  "登录解锁更多会员礼遇": "Log in to unlock more member benefits",
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
  "如需会员帮助、优惠券咨询、停车权益协助或投诉建议，可通过以下方式联系。": "For membership help, coupon inquiries, parking benefit support, parking voucher assistance, or complaints, contact us here.",
  "如何注册会员？": "How do I register as a member?",
  "在首页或设置页点击注册，填写手机号、邮箱与基础信息后即可完成会员开通。": "Tap Register on the home page or settings page, then fill in your phone number, email, and basic details to activate membership.",
  "积分可以提现吗？": "Can points be withdrawn as cash?",
  "当前积分仅支持在商城内兑换奖励、停车券及指定会员活动，不支持提现吗。": "Points can currently be used only for mall rewards, parking vouchers, and selected member activities. Cash withdrawal is not supported.",
  "优惠券如何使用？": "How do I use coupons?",
  "领取后可在“奖励”或“我的券包”中查看，结账时向门店出示对应二维码进行核销。": "After claiming, view coupons in Rewards or My Coupons and present the QR code at checkout for redemption.",
  "停车券多久生效？": "How long does a parking voucher take to activate?",
  "停车券兑换成功后通常在 30 分钟内生效，具体以停车系统同步结果为准。": "Parking vouchers usually activate within 30 minutes after successful redemption, subject to parking system sync.",
  "会员服务条款": "Membership Service Terms",
  "会员账户仅限本人使用，积分、奖励和优惠权益需在有效期内使用，不得转售或违规转让。": "Membership accounts are for personal use only. Points, rewards, and benefits must be used within their validity period and may not be resold or transferred improperly.",
  "隐私说明": "Privacy Notice",
  "我们仅在提供会员服务、奖励发放、通知提醒和运营优化所需范围内收集并使用你的信息。": "We collect and use your information only as needed for member services, reward delivery, notifications, and operation optimization.",
  "数据安全": "Data Security",
  "平台采用加密传输与权限控制机制保护账户、手机号、邮箱及交易相关信息。": "The platform uses encrypted transmission and permission controls to protect account, phone, email, and transaction-related information.",
  "政策更新": "Policy Updates",
  "如条款或隐私政策发生更新，我们会通过 App 消息、活动页或设置页进行同步公告。": "If the terms or privacy policy are updated, we will announce it through app messages, activity pages, or the settings page.",
  "客服热线": "Support Hotline",
  "客服邮箱": "Support Email",
  "服务时间": "Service Hours",
  "周一至周日 10:00 - 22:00，节假日与商场营业时间同步。": "Monday to Sunday 10:00 - 22:00, aligned with mall operating hours on holidays.",
  "服务台地址": "Service Desk Address",
  "YTL Mall 一层中央服务台，支持会员咨询、停车券与活动权益处理。": "YTL Mall Level 1 central service desk, supporting membership inquiries, parking vouchers, and campaign benefit handling.",
  "奖励": "Rewards",
  "发现": "Discover",
  "首页": "Home",
  "钱包": "Wallet",
  "优惠券": "Coupons",
  "工作台": "Workbench",
  "数据": "Dashboard",
  "门店": "Stores",
  "商场": "Mall",
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
  "底部导航": "Bottom Navigation",
  "‹ 返回": "‹ Back",
  "立即登录": "Log In Now",
  "注册": "Register",
  "退出登录": "Log Out",
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
  "会员姓名": "Member Name",
  "请输入优惠券券码": "Please enter coupon code",
  "请输入交易门店": "Please enter transaction store",
  "请输入金额，如 RM 128.00": "Please enter amount, e.g. RM 128.00",
  "请输入录入说明或备注": "Please enter notes or remarks",
  "手机号": "Phone Number",
  "密码": "Password",
  "邮箱": "Email",
  "开始时间": "Start Time",
  "结束时间": "End Time",
  "请选择开始时间": "Please select start time",
  "请选择结束时间": "Please select end time",
  "显示密码": "Show password",
  "隐藏密码": "Hide password",
  "活动列表": "Activities",
  "活动列表 - YTL Mall": "Activities - YTL Mall",
  "活动类型": "Activity Type",
  "活动名称": "Activity Name",
  "活动时间": "Activity Date",
  "活动商场名称": "Mall Name",
  "活动门店名称": "Store Name",
  "春日风尚生活": "Spring Lifestyle",
  "仲夏轻奢礼遇": "Midsummer Luxury Offer",
  "品牌限时活动": "Limited-time Brand Event",
  "璨星珠宝 · 夏日礼遇": "Starry Jewelry · Summer Offer",
  "精选项链与手链满 RM1200 立减 RM240，活动期间到店消费还可叠加会员积分礼遇，适合节日赠礼与夏日焕新搭配。": "Enjoy RM240 off when spending RM1200 on selected necklaces and bracelets. In-store purchases during the campaign can also stack member point rewards, perfect for festive gifting and summer styling refreshes.",
  "2026.06.01 - 2026.06.20": "2026.06.01 - 2026.06.20",
  "YTL Mall 珠宝专区 1F": "YTL Mall Jewelry Zone 1F",
  "珠宝专区顾客 / 会员专享叠加": "Jewelry Zone Shoppers / Member-exclusive stacking benefits",
  "指定系列项链、手链与耳饰参与满额立减；单笔消费达到门槛可获赠清洁保养服务一次，会员积分可同步累计。": "Selected necklaces, bracelets, and earrings qualify for instant savings at the spending threshold. Eligible single transactions also receive one complimentary cleaning and care service, while member points continue to accrue.",
  "活动期间前往璨星珠宝门店选购参与商品，结账时自动享受满减优惠。部分限量款以店内现货为准，可提前联系门店预留。": "Visit Starry Jewelry during the campaign to shop participating items and receive the tiered discount automatically at checkout. Limited-edition styles are subject to store stock, and you may contact the store in advance for reservation.",
  "美妆馆会员折扣日": "Beauty Lab Member Discount Day",
  "珠宝门店满额礼遇": "Jewelry Store Spending Gift",
  "咖啡轻食周末买赠": "Cafe Weekend Buy-One-Get-One",
  "YTL Mall 中央中庭": "YTL Mall Central Atrium",
  "YTL Mall 珠宝专区": "YTL Mall Jewelry Zone",
  "YTL Mall 美妆馆": "YTL Mall Beauty Hall",
  "YTL Mall 中央咖啡": "YTL Mall Central Cafe",
  "YTL Mall 精品集合店": "YTL Mall Concept Store",
  "YTL Mall 生活选物": "YTL Mall Life Select",
  "YTL Mall 中庭快闪店": "YTL Mall Atrium Pop-up",
  "YTL Mall 香氛生活馆": "YTL Mall Fragrance House",
  "YTL Mall 亲子玩具店": "YTL Mall Kids Toy Store",
  "YTL Mall 设计师配饰": "YTL Mall Designer Accessories",
  "YTL Mall 运动集合馆": "YTL Mall Sports Hub",
  "YTL Mall 茶饮轻食铺": "YTL Mall Tea & Snacks",
  "YTL Mall 时尚鞋履店": "YTL Mall Fashion Footwear",
  "YTL Beauty Lab 01 店": "YTL Beauty Lab Store 01",
  "YTL Luxe Jewelry 02 店": "YTL Luxe Jewelry Store 02",
  "YTL Cafe Corner 03 店": "YTL Cafe Corner Store 03",
  "全部": "All",
  "时尚": "Fashion",
  "促销": "Promo",
  "最新活动": "Latest Activities",
  "时尚快闪、生活方式展、会员积分礼遇同步开启": "Fashion pop-up, lifestyle showcase, and member point rewards are now live together.",
  "新季单品上新，精选服饰与配饰限时推广中。": "New season arrivals are here, with selected apparel and accessories on limited-time promotion.",
  "5月28日 - 6月14日": "May 28 - June 14",
  "商场精选活动": "Featured Mall Event",
  "2026 春夏企划": "2026 Spring Summer Plan",
  "璨星珠宝": "Starry Jewelry",
  "精选项链与手链满 1200 减 240": "Spend 1200 on selected necklaces and bracelets, save 240",
  "限时特惠": "Limited Offer",
  "人气精华套组低至 99 元，积分可叠加": "Popular essence sets from 99, points can be stacked.",
  "新客优享": "New Member Offer",
  "发现好店": "Discover Great Stores",
  "夏季时装广告弹窗": "Summer Fashion Promo Popup",
  "关闭广告": "Close Promotion",
  "活动详情 - YTL Mall": "Activity Details - YTL Mall",
  "活动地点": "Location",
  "开放时间": "Opening Hours",
  "每日 10:00 - 22:00": "Daily 10:00 - 22:00",
  "参与对象": "Eligibility",
  "全体顾客 / 会员优先礼遇": "All visitors / members receive priority benefits",
  "活动亮点": "Highlights",
  "参与方式": "How to Join",
  "时尚快闪、生活方式展、会员积分礼遇同步开启。围绕春夏换季灵感，联合馆内精选品牌打造为期两周的主题活动。": "Fashion pop-ups, lifestyle showcases, and member point rewards launch together. Inspired by the spring-summer season change, selected brands across the mall present a two-week themed event.",
  "现场设有时尚快闪展区、生活方式品牌体验区与会员积分加赠专区。指定日期消费可参与抽奖，会员在服务台登记后可领取限定礼遇。": "The event features a fashion pop-up zone, lifestyle brand experience area, and a member bonus points section. Spend on selected dates to join lucky draws, and members can claim limited gifts after registering at the service desk.",
  "到场后可直接参与公开展区活动；如需领取会员专属礼遇，请在商场服务台出示会员码完成登记。部分互动名额有限，建议提前到场。": "Visitors can join the open exhibition areas directly. To claim member-exclusive benefits, present your member code at the service desk to register. Some interactive slots are limited, so arriving early is recommended.",
  "查看活动列表": "View Activities",
  "我的 - YTL Mall": "My Profile - YTL Mall",
  "会员等级": "Member Level",
  "70% 到 Lv.7": "70% to Lv.7",
  "钱包余额": "Wallet Balance",
  "优惠券 3张": "3 Coupons",
  "充值": "Top Up",
  "会员条码": "Member Code",
  "查看会员二维码": "View Member QR Code",
  "核心功能": "Core Features",
  "券": "Coupons",
  "余额变动": "Wallet",
  "余额充值": "Wallet Top Up",
  "门店消费": "Store Purchase",
  "资料": "Profile",
  "会员码 - YTL Mall": "Member Code - YTL Mall",
  "会员码": "Member Code",
  "会员充值 - YTL Mall": "Top Up - YTL Mall",
  "会员充值": "Top Up",
  "当前余额": "Current Balance",
  "充值金额": "Amount",
  "最低充值金额为 RM 0.10": "Minimum top-up amount is RM 0.10",
  "快捷选择": "Quick Select",
  "重要信息": "Important Information",
  "充值实时到账，通常可立即使用": "Top-up is instant and usually available immediately",
  "不同支付方式可能产生手续费": "Service fees may apply depending on payment method",
  "充值金额到账后暂不支持退款": "Credits are non-refundable after top-up is completed",
  "继续": "Continue",
  "会员等级 - YTL Mall": "Member Level - YTL Mall",
  "今日成长值": "Today's Growth",
  "会员规则 ›": "Member Rules ›",
  "当前等级": "Current Level",
  "成长值": "Growth",
  "升级还需": "Needed to Upgrade",
  "立即加速": "Boost Now",
  "余额明细 - YTL Mall": "Wallet Records - YTL Mall",
  "余额明细": "Wallet Records",
  "钱包金额：RM 300.00": "Wallet Amount: RM 300.00",
  "钱包金额：RM 500.00": "Wallet Amount: RM 500.00",
  "退款入账": "Refund Credited",
  "退款来源：YTL Mall 生活选物": "Refund Source: YTL Mall Life Select",
  "消费门店：YTL Mall 美妆馆": "Store: YTL Mall Beauty Hall",
  "消费门店：YTL Mall 珠宝专区": "Store: YTL Mall Jewelry Zone",
  "消费门店：YTL Mall 中央咖啡": "Store: YTL Mall Central Cafe",
  "积分记录 - YTL Mall": "Points History - YTL Mall",
  "积分记录": "Points History",
  "获取明细": "Earned",
  "消费明细": "Spent",
  "积分获取": "Points Earned",
  "积分消费": "Points Spent",
  "消费获得：YTL Mall 美妆馆": "Earned from spending: YTL Mall Beauty Hall",
  "兑换奖励：停车券": "Reward redemption: Parking Voucher",
  "活动奖励：春日风尚生活签到": "Campaign reward: Spring Lifestyle Check-in",
  "兑换优惠券：现金5RM": "Coupon redemption: RM5 Cash Coupon",
  "消费获得：YTL Mall 珠宝专区": "Earned from spending: YTL Mall Jewelry Zone",
  "新会员欢迎奖励": "New Member Welcome Reward",
  "今日": "Today",
  "昨日": "Yesterday",
  "本周": "This Week",
  "消息 - YTL Mall": "Messages - YTL Mall",
  "全部已读": "Mark All Read",
  "未读": "Unread",
  "已读": "Read",
  "会员积分到账提醒": "Points Credited",
  "您已获得 320 积分，可前往奖励中心查看最新礼遇。": "You have received 320 points. Visit Rewards to view the latest benefits.",
  "今天 18:45": "Today 18:45",
  "夏季时装活动即将开始": "Summer Fashion Event Starts Soon",
  "中央中庭春夏企划将于 5 月 28 日开启，欢迎提前预约到场。": "The Central Atrium spring-summer program begins on May 28. You're welcome to book in advance.",
  "停车优惠券已发放": "Parking Coupon Issued",
  "您的 2 小时停车礼券已存入账户，可在我的券包中使用。": "Your 2-hour parking voucher has been added to your account and can be used in My Coupons.",
  "新店入驻通知": "New Store Opening",
  "Cotton On Kids 已于 3F 正式开业，欢迎前往探索当季新品。": "Cotton On Kids is now open on 3F. Visit to explore the seasonal collection.",
  "搜索 - YTL Mall": "Search - YTL Mall",
  "搜索门店、品牌或促销": "Search stores, brands, or promotions",
  "搜索结果分类": "Search Categories",
  "商场服务台": "Mall Service Desk",
  "营业时间 10:00 - 22:00 · 中央中庭活动与会员服务同步开放。": "Open 10:00 - 22:00 · Central atrium events and member services are available together.",
  "1F 层 · 提供会员咨询、礼品包装与停车协助服务。": "1F · Membership help, gift wrapping, and parking assistance available.",
  "清妍美肤": "Pure Beauty",
  "1F 层 · 护肤彩妆 · 今日会员双倍积分": "1F · Skincare & makeup · Double points for members today",
  "云上小馆": "Cloud Bistro",
  "5F 层 · 创意融合菜 · 午市套餐 78 元起": "5F · Creative fusion cuisine · Lunch sets from 78",
  "素作生活": "Simple Living",
  "3F 层 · 家居美学 · 新品首发陈列中": "3F · Home aesthetics · New arrivals on display",
  "人气精华套组低至 99 元，积分可叠加。": "Popular essence sets from 99, points can be stacked.",
  "地点列表 - YTL Mall": "Locations - YTL Mall",
  "地点列表": "Locations",
  "吉隆坡": "Kuala Lumpur",
  "吉隆坡，12 Jalan Bukit Bintang": "Kuala Lumpur, 12 Jalan Bukit Bintang",
  "槟城": "Penang",
  "新山": "Johor Bahru",
  "门店 - YTL Mall": "Stores - YTL Mall",
  "当季新作甄选": "Seasonal Picks",
  "经典与新季同场呈现": "Classics and new season pieces presented together",
  "护肤与彩妆灵感集合": "A collection of skincare and makeup inspirations",
  "店铺指南": "Store Guide",
  "美容美发": "Beauty",
  "家具": "Furniture",
  "珠宝及钟表": "Jewelry & Watches",
  "食品与饮料": "Food & Beverage",
  "全部楼层": "All Floors",
  "未序女装": "Wixu Womenswear",
  "选择商场地点": "Choose Mall Location",
  "轮播指示": "Carousel Indicators",
  "店铺分类": "Store Categories",
  "楼层筛选": "Floor Filter",
  "门店详情 - YTL Mall": "Store Details - YTL Mall",
  "商铺号": "Unit Number",
  "商铺位置": "Store Location",
  "B1 层 中庭西侧": "B1 West Atrium",
  "类别": "Category",
  "会员资料 - YTL Mall": "Member Profile - YTL Mall",
  "会员资料": "Member Profile",
  "会员名称": "Member Name",
  "会员手机号": "Member Phone",
  "我的卡券 - YTL Mall": "My Coupons - YTL Mall",
  "我的卡券": "My Coupons",
  "可使用": "Available",
  "可领取": "Available",
  "已使用": "Used",
  "已过期": "Expired",
  "查看详情": "View Details",
  "全场优惠10%": "10% Off Storewide",
  "满RM 20可用": "Available on RM20 spend",
  "9折券": "10% Off Coupon",
  "停车减免券": "Parking Voucher",
  "已于 2026.01.10 使用": "Used on 2026.01.10",
  "门店：YTL Mall Parking": "Store: YTL Mall Parking",
  "新会员专享礼券": "New Member Exclusive Coupon",
  "已于 2025.12.31 过期": "Expired on 2025.12.31",
  "卡券状态": "Coupon Status",
  "注册 - YTL Mall": "Register - YTL Mall",
  "再次输入密码": "Confirm Password",
  "登录 - YTL Mall": "Login - YTL Mall",
  "一站式综合商场": "One-stop Lifestyle Mall",
  "登录": "Login",
  "会员注册": "Member Registration",
  "选择国家区号": "Select Country Code",
  "会员注册 - YTL Mall": "Member Registration - YTL Mall",
  "请填写会员信息并提交表单，完成现场开卡。": "Please fill in the member information and submit the form to complete on-site card issuance.",
  "开卡商场": "Issuing Mall",
  "开卡人": "Issuer",
  "性别": "Gender",
  "保密": "Prefer not to say",
  "男": "Male",
  "女": "Female",
  "国籍": "Nationality",
  "马来西亚": "Malaysia",
  "新加坡": "Singapore",
  "身份证": "ID Number",
  "地址": "Address",
  "提交注册": "Submit Registration",
  "录入记录 - YTL Mall": "Manual Records - YTL Mall",
  "录入记录": "Manual Records",
  "新建": "New",
  "单据金额": "Record Amount",
  "录入人员：Tom": "Entered by: Tom",
  "新建录入 - YTL Mall": "New Manual Entry - YTL Mall",
  "新建录入": "New Manual Entry",
  "填写单据内容后提交，用于补录会员资料、交易金额或优惠券核销。": "Fill in the form and submit it to add member details, transaction amounts, or coupon redemption records.",
  "单据类型": "Record Type",
  "会员补录": "Member Entry",
  "交易补录": "Transaction Entry",
  "优惠券核销": "Coupon Redemption",
  "交易门店": "Transaction Store",
  "单据时间": "Record Time",
  "优惠券券码": "Coupon Code",
  "金额": "Amount",
  "录入人员": "Entered By",
  "备注": "Remarks",
  "提交单据": "Submit Record",
  "个人信息 - YTL Mall": "Personal Info - YTL Mall",
  "个人信息": "Personal Info",
  "修改": "Edit",
  "账号所属门店": "Assigned Store",
  "姓名": "Name",
  "角色": "Role",
  "商户人员 Tom": "Merchant Staff Tom",
  "工作台 - YTL Mall": "Workbench - YTL Mall",
  "注册会员": "Member Registration",
  "快速录入新会员资料并开通账户": "Quickly create a new member profile and activate the account",
  "会员查询": "Member Search",
  "查询会员档案、积分与历史记录": "Search member profile, points, and history",
  "人工录入": "Manual Entry",
  "补录会员资料、交易或服务备注": "Add member details, transactions, or service notes",
  "商户端 - YTL Mall": "Merchant Home - YTL Mall",
  "今日营业额": "Today's Revenue",
  "订单 128": "Orders 128",
  "新增会员 892": "New Members 892",
  "查看报表": "View Report",
  "快速建档": "Quick Registration",
  "扫码": "Scan",
  "核销与识别": "Redemption & Recognition",
  "商户快捷功能": "Merchant Quick Actions",
  "交易记录": "Transaction Records",
  "查看全部": "View All",
  "交易记录 - YTL Mall": "Transaction Records - YTL Mall",
  "交易金额：RM19.10": "Amount: RM19.10",
  "交易金额：RM46.80": "Amount: RM46.80",
  "交易金额：RM128.00": "Amount: RM128.00",
  "交易金额：RM32.50": "Amount: RM32.50",
  "交易金额：RM268.00": "Amount: RM268.00",
  "交易金额：RM59.90": "Amount: RM59.90",
  "交易金额：RM88.00": "Amount: RM88.00",
  "交易金额：RM152.40": "Amount: RM152.40",
  "交易金额：RM74.60": "Amount: RM74.60",
  "交易金额：RM219.00": "Amount: RM219.00",
  "交易金额：RM27.90": "Amount: RM27.90",
  "交易金额：RM305.50": "Amount: RM305.50",
  "已完成": "Completed",
  "已退款": "Refunded",
  "商户端底部导航": "Merchant Bottom Navigation",
  "报表 - YTL Mall": "Report - YTL Mall",
  "数据报表": "Data Report",
  "夏季时装": "Summer Fashion",
  "营业额": "Revenue",
  "订单数量": "Order Count",
  "营业收入": "Operating Income",
  "退款金额": "Refund Amount",
  "新增会员": "New Members",
  "核销优惠券": "Coupon Redemption",
  "会员查询 - YTL Mall": "Member Search - YTL Mall",
  "余额：RM 1,239.00": "Balance: RM 1,239.00",
  "余额：RM 3,482.10": "Balance: RM 3,482.10",
  "余额：RM 648.80": "Balance: RM 648.80",
  "积分：231": "Points: 231",
  "积分：892": "Points: 892",
  "积分：126": "Points: 126",
  "手机号：019-8821": "Phone: 019-8821",
  "手机号：012-4568": "Phone: 012-4568",
  "手机号：017-1024": "Phone: 017-1024",
  "姓名或手机号后四位": "Name or last 4 digits of phone",
  "扫码核销 - YTL Mall": "Scan Redemption - YTL Mall",
  "扫码核销": "Scan Redemption",
  "将取景框对准二维码，即可自动扫描": "Align the frame with the QR code to scan automatically",
  "从相册导入": "Import from Album",
  "开始扫描": "Start Scanning",
  "兑换详情 - YTL Mall": "Exchange Details - YTL Mall",
  "兑换活动名称": "Reward Name",
  "停车券兑换": "Parking Voucher Redemption",
  "所需积分": "Required Points",
  "兑换时间范围": "Redemption Period",
  "适用门店": "Applicable Stores",
  "全部门店": "All Stores",
  "兑换规则": "Redemption Rules",
  "需提供车辆号码和 IU 编号才能领取停车 e-Voucher，可在停车场 B 区客服柜台办理。会员每次最多只能兑换价值 3 美元的停车费。WA Carpark 5 的有效期为兑换后 6 个月。兑换流程最多需要 30 分钟。": "Vehicle number and IU number are required to claim the parking e-voucher. It can be processed at the customer counter in Parking Zone B. Members can redeem up to USD 3 worth of parking per transaction. WA Carpark 5 is valid for 6 months after redemption. The process may take up to 30 minutes.",
  "兑换": "Redeem",
  "奖励 - YTL Mall": "Rewards - YTL Mall",
  "奖励列表": "Rewards List",
  "积分兑换": "Points Redemption",
  "兑换可用，离场前自动抵扣停车时长。": "Available for redemption and automatically deducted before exiting the car park.",
  "热门兑换": "Popular Rewards",
  "白银会员专享": "Silver Member Exclusive",
  "消费金额需要满足RM100.00": "Minimum spend RM100.00 required",
  "会员专享": "Member Exclusive",
  "会员尝鲜价": "Member Intro Offer",
  "可领取优惠券列表": "Available Coupons",
  "现金5RM": "RM5 Cash Coupon",
  "无条件使用，不限制门店": "No minimum spend, valid across stores",
  "立即使用": "Use Now",
  "甜品饮品 85 折券": "Dessert & Drinks 15% Off",
  "指定轻食甜品门店适用，周末与节假日同享。": "Valid at selected dessert and light dining stores, including weekends and holidays.",
  "限本周": "This Week Only",
  "周末停车减免券": "Weekend Parking Voucher",
  "周末到店可领取，单次最高抵扣 2 小时停车费。": "Available on weekends in-store, up to 2 hours parking deduction per use.",
  "立即领取": "Claim Now",
  "新会员限领 1 次，可用于指定餐饮与零售门店。": "New members can claim once, valid at selected dining and retail stores.",
  "限新会员": "New Members Only",
  "卡券详情 - YTL Mall": "Coupon Details - YTL Mall",
  "卡券详情": "Coupon Details",
  "领取时间：2026.01.01 ~ 2026.02.28": "Claim Period: 2026.01.01 ~ 2026.02.28",
  "优惠金额": "Discount Value",
  "可用对象": "Eligible Users",
  "全部用户": "All Users",
  "使用说明": "Usage Instructions",
  "此优惠券可直接在参与活动的门店使用，结账时出示卡券二维码即可抵扣 RM 5，不限制最低消费金额。": "This coupon can be used directly at participating stores. Present the coupon QR code at checkout to deduct RM 5, with no minimum spend.",
  "有效期": "Validity",
  "有效期：2026.01.01–2026.02.29": "Validity: 2026.01.01–2026.02.29",
  "领取": "Claim",
  "奖励领取记录 - YTL Mall": "Reward Claim History - YTL Mall",
  "奖励领取记录": "Reward Claim History",
  "领取记录": "Claim History",
  "领取奖励名称": "Claimed Reward",
  "消费积分": "Points Spent",
  "5元无门槛优惠券": "RM5 No-threshold Coupon",
  "有效期至2026.01.24": "Valid until 2026.01.24",
  "会员欢迎礼券": "Welcome Coupon",
  "停车券": "Parking Voucher",
  "3,000 积分": "3,000 Points",
  "1,200 积分": "1,200 Points",
  "800 积分": "800 Points",
  "1F 层": "1F",
  "2F 层": "2F",
  "3F 层": "3F",
  "5F 层": "5F",
  "B1 层": "B1"
};

function translateByRules(value) {
  const rules = [
    [/^‹ 返回$/, "‹ Back"],
    [/^(\d+)F 层$/, "$1F"],
    [/^B(\d+) 层$/, "B$1"],
    [/^门店：(.+)$/, "Store: $1"],
    [/^消费门店：(.+)$/, "Store: $1"],
    [/^手机号：(.+)$/, "Phone: $1"],
    [/^余额：(.+)$/, "Balance: $1"],
    [/^积分：(.+)$/, "Points: $1"],
    [/^录入人员：(.+)$/, "Entered by: $1"],
    [/^交易金额：(.+)$/, "Amount: $1"],
    [/^钱包金额：(.+)$/, "Wallet Amount: $1"],
    [/^订单 (\d+)$/, "Orders $1"],
    [/^新增会员 (\d+)$/, "New Members $1"],
    [/^优惠券 (\d+)张$/, "$1 Coupons"],
    [/^Hi, (.+)$/, "Hi, $1"],
    [/^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})$/, "$1"]
  ];

  for (const [pattern, replacement] of rules) {
    if (pattern.test(value)) {
      return value.replace(pattern, replacement);
    }
  }

  return value;
}

function translateTextValue(value) {
  if (!value) return value;
  return YTL_TEXT_MAP[value] || translateByRules(value);
}

function replaceTrimmedSegment(original, nextValue) {
  const trimmed = original.trim();
  if (!trimmed) return original;
  const start = original.indexOf(trimmed);
  if (start === -1) return nextValue;
  return `${original.slice(0, start)}${nextValue}${original.slice(start + trimmed.length)}`;
}

function rememberOriginalTextNode(node) {
  if (node.__ytlOriginalValue === undefined) {
    node.__ytlOriginalValue = node.nodeValue;
  }
  return node.__ytlOriginalValue;
}

function rememberOriginalAttribute(element, name) {
  const key = `__ytlOriginalAttr_${name}`;
  if (element[key] === undefined) {
    element[key] = element.getAttribute(name);
  }
  return element[key];
}

function applySavedLanguage() {
  const lang = localStorage.getItem(YTL_LANG_STORAGE_KEY) || "zh";
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  document.querySelectorAll("[data-cn][data-en]").forEach((node) => {
    node.textContent = lang === "en" ? node.dataset.en : node.dataset.cn;
  });

  document.querySelectorAll("title").forEach((node) => {
    if (node.__ytlOriginalTitle === undefined) {
      node.__ytlOriginalTitle = node.textContent;
    }
    node.textContent = lang === "en" ? translateTextValue(node.__ytlOriginalTitle) : node.__ytlOriginalTitle;
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement && ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (node.parentElement && node.parentElement.hasAttribute("data-cn") && node.parentElement.hasAttribute("data-en")) {
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
    const original = rememberOriginalTextNode(node);
    if (lang === "en") {
      const translated = translateTextValue(original.trim());
      node.nodeValue = replaceTrimmedSegment(original, translated);
    } else {
      node.nodeValue = original;
    }
  });

  document.querySelectorAll("[placeholder],[aria-label],[title]").forEach((element) => {
    ["placeholder", "aria-label", "title"].forEach((name) => {
      if (!element.hasAttribute(name)) return;
      const original = rememberOriginalAttribute(element, name);
      if (!original) return;
      element.setAttribute(name, lang === "en" ? translateTextValue(original) : original);
    });
  });
}

function setGlobalLanguage(lang) {
  localStorage.setItem(YTL_LANG_STORAGE_KEY, lang);
  applySavedLanguage();
}

document.addEventListener("DOMContentLoaded", () => {
  applySavedLanguage();

  document.querySelectorAll(".language-button").forEach((button) => {
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
