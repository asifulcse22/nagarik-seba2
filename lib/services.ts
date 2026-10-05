export interface LandFormField {
  name: string
  label: string
  type: 'text' | 'select' | 'textarea' | 'file'
  placeholder?: string
  required: boolean
  options?: string[]
}

export interface Service {
  id: string
  title: string
  titleEn: string
  description: string
  icon: string
  color: string
  category: string
  price: number
  popular?: boolean
  deliveryTime?: string
  inputLabel?: string
  inputPlaceholder?: string
  officialNote?: string
  fields?: LandFormField[]
}

export const services: Service[] = [
  // ─────────────────────────────────────────────
  // 🪪 NID সেবা ও আইডি কার্ড সংশোধন
  // ─────────────────────────────────────────────
  { 
    id: 'server-copy', 
    title: 'সার্ভার কপি', 
    titleEn: 'Server Copy', 
    description: 'NID কার্ডের তথ্য যাচাই (সার্ভার কপি)', 
    icon: '📋', 
    color: 'bg-blue-400', 
    category: 'nid', 
    price: 45, 
    popular: true, 
    inputLabel: 'আইডি নাম্বার ও জন্ম তারিখ', 
    inputPlaceholder: 'আইডি নাম্বার / জন্ম তারিখ (DD/MM/YYYY)' 
  },
  { 
    id: 'sign-copy', 
    title: 'সাইন কপি', 
    titleEn: 'Sign Copy', 
    description: 'NID কার্ডের সাইন কপি সংগ্রহ', 
    icon: '🖋️', 
    color: 'bg-blue-500', 
    category: 'nid', 
    price: 85, 
    inputLabel: 'ভোটার/আইডি নাম্বার', 
    inputPlaceholder: 'ভোটার নাম্বার বা আইডি নাম্বার দিন' 
  },
  { 
    id: 'nid-pdf', 
    title: 'NID কার্ড PDF', 
    titleEn: 'NID Card PDF', 
    description: 'অরিজিনাল জাতীয় পরিচয়পত্রের PDF', 
    icon: '🪪', 
    color: 'bg-indigo-600', 
    category: 'nid', 
    price: 99, 
    popular: true, 
    inputLabel: 'আইডি নাম্বার ও জন্ম তারিখ', 
    inputPlaceholder: 'আইডি নাম্বার / জন্ম তারিখ (DD/MM/YYYY)' 
  },
  { 
    id: 'form-sign-copy', 
    title: 'ফরম নং → সাইন কপি', 
    titleEn: 'Form to Sign Copy', 
    description: 'ফরম নাম্বার দিয়ে সাইন কপি সংগ্রহ', 
    icon: '📝', 
    color: 'bg-indigo-500', 
    category: 'nid', 
    price: 23, 
    inputLabel: 'ফরম নাম্বার', 
    inputPlaceholder: 'ফরম নাম্বার দিন' 
  },
  { 
    id: 'nid-voter-number', 
    title: 'NID ভোটার নাম্বার দিয়ে সার্ভিস', 
    titleEn: 'NID service by Voter Number', 
    description: 'ভোটার নাম্বার দিয়ে NID সেবা', 
    icon: '🗳️', 
    color: 'bg-teal-500', 
    category: 'nid', 
    price: 45, 
    inputLabel: 'ভোটার নাম্বার', 
    inputPlaceholder: 'ভোটার নাম্বার দিন' 
  },
  { 
    id: 'official-server-copy', 
    title: 'অফিসিয়াল সার্ভার কপি', 
    titleEn: 'Official Server Copy', 
    description: 'সরকারি অফিসিয়াল সার্ভার কপি', 
    icon: '🏛️', 
    color: 'bg-blue-800', 
    category: 'nid', 
    price: 59, 
    inputLabel: 'আইডি নাম্বার ও জন্ম তারিখ', 
    inputPlaceholder: 'আইডি নাম্বার / জন্ম তারিখ (DD/MM/YYYY)' 
  },

  // নতুন ৪টি আইডি কার্ড সংশোধন সেবা (৩ দিন সময়):
  { 
    id: 'nid-full-name-correction', 
    title: 'আইডি কার্ড পুরো নাম সংশোধন', 
    titleEn: 'Full Name Correction', 
    description: 'জাতীয় পরিচয়পত্রের সম্পূর্ণ নাম সংশোধন আবেদন (সময়: ৩ দিন)', 
    icon: '✍️', 
    color: 'bg-violet-600', 
    category: 'nid', 
    price: 3850, 
    popular: true,
    deliveryTime: '৩ দিন',
    inputLabel: 'NID নম্বর ও সংশোধিত পুরো নাম', 
    inputPlaceholder: 'বর্তমান NID নম্বর / সঠিক পুরো নাম / প্রয়োজনীয় ডকুমেন্টের তথ্য' 
  },
  { 
    id: 'nid-partial-name-correction', 
    title: 'নামের আংশিক সংশোধন', 
    titleEn: 'Partial Name Correction', 
    description: 'নামের বানান বা আংশিক অংশ সংশোধন (সময়: ৩ দিন)', 
    icon: '📝', 
    color: 'bg-purple-600', 
    category: 'nid', 
    price: 3500, 
    popular: true,
    deliveryTime: '৩ দিন',
    inputLabel: 'NID নম্বর ও সংশোধিত অংশ', 
    inputPlaceholder: 'NID নম্বর / যে অংশ সংশোধন করতে হবে তা লিখুন' 
  },
  { 
    id: 'nid-age-correction-per-year', 
    title: 'বয়স সংশোধন (প্রতি বছর)', 
    titleEn: 'Age Correction (Per Year)', 
    description: 'জন্মতারিখ/বয়স সংশোধন প্রতি বছরের হিসাব অনুযায়ী (সময়: ৩ দিন)', 
    icon: '📅', 
    color: 'bg-pink-600', 
    category: 'nid', 
    price: 4500, 
    popular: true,
    deliveryTime: '৩ দিন',
    inputLabel: 'NID নম্বর ও কত বছর সংশোধন', 
    inputPlaceholder: 'NID নম্বর / বর্তমান জন্মতারিখ ও নতুন জন্মতারিখ' 
  },
  { 
    id: 'nid-address-transfer', 
    title: 'ঠিকানা স্থানান্তর', 
    titleEn: 'Address Transfer', 
    description: 'ভোটার এলাকা বা স্থায়ী ঠিকানা স্থানান্তর (সময়: ৩ দিন)', 
    icon: '🚚', 
    color: 'bg-emerald-600', 
    category: 'nid', 
    price: 2500, 
    popular: true,
    deliveryTime: '৩ দিন',
    inputLabel: 'NID নম্বর ও নতুন ঠিকানা', 
    inputPlaceholder: 'NID নম্বর / নতুন জেলা, উপজেলা, ইউনিয়ন/ওয়ার্ড, গ্রাম' 
  },

  { 
    id: 'new-id-card', 
    title: 'নতুন আইডি কার্ড', 
    titleEn: 'New ID Card', 
    description: 'নতুন জাতীয় পরিচয়পত্রের জন্য আবেদন', 
    icon: '🪪', 
    color: 'bg-blue-700', 
    category: 'nid', 
    price: 3150, 
    popular: true,
    inputLabel: 'নতুন আইডি কার্ডের প্রয়োজনীয় তথ্য', 
    inputPlaceholder: 'প্রয়োজনীয় তথ্য পূরণ করুন' 
  },

  { 
    id: 'smart-id-card', 
    title: 'স্মার্ট ID কার্ড PDF', 
    titleEn: 'Smart ID Card PDF', 
    description: 'অরিজিনাল স্মার্ট আইডি কার্ড কপি', 
    icon: '💳', 
    color: 'bg-purple-700', 
    category: 'nid', 
    price: 155, 
    popular: true, 
    inputLabel: 'নাম ও আইডি নাম্বার', 
    inputPlaceholder: 'পূর্ণ নাম / আইডি নাম্বার দিন' 
  },
  { 
    id: 'mobile-number-id-card', 
    title: 'মোবাইল নাম্বার দিয়ে ID কার্ড', 
    titleEn: 'ID Card by Mobile Number', 
    description: 'মোবাইল নাম্বার দিয়ে ID কার্ড', 
    icon: '📱', 
    color: 'bg-purple-700', 
    category: 'nid', 
    price: 115, 
    popular: true, 
    inputLabel: 'মোবাইল নাম্বার', 
    inputPlaceholder: 'মোবাইল নাম্বার' 
  },
  { 
    id: 'mobile-number-server-copy', 
    title: 'মোবাইল নাম্বার দিয়ে সার্ভার কপি', 
    titleEn: 'Server Copy by Mobile Number', 
    description: 'মোবাইল নাম্বার দিয়ে সার্ভার কপি', 
    icon: '📋', 
    color: 'bg-purple-700', 
    category: 'nid', 
    price: 115, 
    popular: true, 
    inputLabel: 'মোবাইল নাম্বার', 
    inputPlaceholder: 'মোবাইল নাম্বার' 
  },
  { 
    id: 'mobile-number-sign-copy', 
    title: 'মোবাইল নাম্বার দিয়ে সাইন কপি', 
    titleEn: 'Sign Copy by Mobile Number', 
    description: 'মোবাইল নাম্বার দিয়ে সাইন কপি', 
    icon: '🖋️', 
    color: 'bg-purple-700', 
    category: 'nid', 
    price: 115, 
    popular: true, 
    inputLabel: 'মোবাইল নাম্বার', 
    inputPlaceholder: 'মোবাইল নাম্বার' 
  },
  { 
    id: 'name-address-id-card', 
    title: 'নাম ঠিকানা দিয়ে আইডি কার্ড', 
    titleEn: 'ID Card by Name & Address', 
    description: 'নাম ও ঠিকানা দিয়ে আইডি কার্ড অনুসন্ধান', 
    icon: '🪪', 
    color: 'bg-purple-700', 
    category: 'nid', 
    price: 185, 
    popular: true, 
    inputLabel: 'প্রয়োজনীয় তথ্য', 
    inputPlaceholder: 'নিজের নাম / পিতার নাম / মাতার নাম / জেলা / উপজেলা / থানা / গ্রাম' 
  },

  // ─────────────────────────────────────────────
  // 📋 জন্ম নিবন্ধন
  // ─────────────────────────────────────────────
  { 
    id: 'new-birth-reg', 
    title: 'নতুন জন্মনিবন্ধন', 
    titleEn: 'New Birth Registration', 
    description: 'সম্পূর্ণ নতুন জন্মনিবন্ধন আবেদন (২৪ ঘণ্টার মধ্যেই অনলাইন হবে)', 
    icon: '👶', 
    color: 'bg-green-700', 
    category: 'birth', 
    price: 510, 
    popular: true,
    deliveryTime: '২৪ ঘণ্টা',
    inputLabel: 'প্রয়োজনীয় তথ্য', 
    inputPlaceholder: 'বাচ্চার নাম ও পিতা-মাতার তথ্য দিন' 
  },
  { id: 'birth-copy', title: 'জন্ম নিবন্ধন কপি', titleEn: 'Birth Reg Copy', description: 'জন্মনিবন্ধন সনদের ডিজিটাল কপি', icon: '📄', color: 'bg-green-500', category: 'birth', price: 35, popular: true, inputLabel: 'জন্ম নিবন্ধন নাম্বার', inputPlaceholder: 'জন্ম নিবন্ধন নাম্বার দিন' },
  { id: 'birth-correction', title: 'জন্মনিবন্ধন সংশোধন', titleEn: 'Birth Reg Correction', description: 'জন্মনিবন্ধনের তথ্য সংশোধন', icon: '✏️', color: 'bg-green-600', category: 'birth', price: 200, inputLabel: 'জন্ম নিবন্ধন নাম্বার ও সংশোধনের তথ্য', inputPlaceholder: 'জন্ম নিবন্ধন নাম্বার / কী সংশোধন করতে চান' },
  { id: 'death-certificate', title: 'মৃত্যু সনদ', titleEn: 'Death Certificate', description: 'মৃত্যু নিবন্ধন সনদ সংগ্রহ', icon: '📜', color: 'bg-gray-600', category: 'birth', price: 150, inputLabel: 'মৃত ব্যক্তির নাম ও তথ্য', inputPlaceholder: 'মৃত ব্যক্তির নাম / মৃত্যু তারিখ' },

  // ─────────────────────────────────────────────
  // ♿ সুবর্ণ কার্ড (প্রতিবন্ধী পরিচয়পত্র ও সমাজসেবা)
  // ─────────────────────────────────────────────
  {
    id: 'suborno-card-new-apply',
    title: 'নতুন সুবর্ণ নাগরিক কার্ড আবেদন',
    titleEn: 'New Suborno Card Application',
    description: 'সমাজসেবা অধিদপ্তরের প্রতিবন্ধী পরিচয়পত্র (সুবর্ণ নাগরিক কার্ড) ও সনদের নতুন অনলাইন আবেদন',
    icon: '♿',
    color: 'bg-amber-600',
    category: 'suborno',
    price: 650,
    popular: true,
    deliveryTime: '২৪-৪৮ ঘণ্টা',
    officialNote: 'সমাজসেবা অধিদপ্তর (dis.gov.bd) এর অফিসিয়াল ফরম্যাট অনুযায়ী সুবর্ণ নাগরিক কার্ডের জন্য নিচের তথ্য ও ছবি প্রদান করুন।',
    fields: [
      { name: 'applicant_name_bn_en', label: 'আবেদনকারীর পূর্ণ নাম (বাংলা ও ইংরেজিতে)', type: 'text', placeholder: 'বাংলা ও ইংরেজি বড় হাতের অক্ষরে নাম লিখুন', required: true },
      { name: 'father_mother_name', label: 'পিতার নাম ও মাতার নাম (বিবাহিত হলে স্বামী/স্ত্রীর নাম)', type: 'text', placeholder: 'পিতার নাম, মাতার নাম ও স্বামী/স্ত্রীর নাম', required: true },
      { name: 'dob_gender_blood', label: 'জন্ম তারিখ, লিঙ্গ ও রক্তের গ্রুপ', type: 'text', placeholder: 'যেমন: 15/05/1998, পুরুষ/মহিলা, B+', required: true },
      { name: 'nid_or_brn', label: 'NID নম্বর অথবা ১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন নম্বর', type: 'text', placeholder: 'NID বা জন্ম নিবন্ধন নম্বর দিন', required: true },
      { name: 'disability_type', label: 'প্রতিবন্ধিতার ধরন (Disability Type)', type: 'select', options: ['শারীরিক প্রতিবন্ধিতা', 'দৃষ্টি প্রতিবন্ধিতা', 'বাক প্রতিবন্ধিতা', 'শ্রবণ প্রতিবন্ধিতা', 'বুদ্ধি প্রতিবন্ধিতা', 'অটিজম বা অটিজম স্পেকট্রাম', 'মানসিক অসুস্থতাজনিত প্রতিবন্ধিতা', 'সেরিব্রাল পালসি', 'ডাউন সিনড্রোম', 'শ্রবণ ও দৃষ্টি প্রতিবন্ধিতা', 'বহুমাত্রিক প্রতিবন্ধিতা', 'অন্যান্য'], required: true },
      { name: 'disability_severity_cause', label: 'প্রতিবন্ধিতার মাত্রা ও কারণ', type: 'select', options: ['মৃদু (জন্মগত)', 'মাঝারি (জন্মগত)', 'তীব্র (জন্মগত)', 'চরম (জন্মগত)', 'মাঝারি/তীব্র (দুর্ঘটনা বা অসুস্থতাজনিত)'], required: true },
      { name: 'full_address', label: 'বর্তমান ও স্থায়ী ঠিকানা (বিভাগ, জেলা, উপজেলা/শহর সমাজসেবা অফিস, ইউনিয়ন/ওয়ার্ড, গ্রাম)', type: 'textarea', placeholder: 'জেলা, উপজেলা, ইউনিয়ন/পৌরসভা, ওয়ার্ড নং ও গ্রামের নাম লিখুন', required: true },
      { name: 'guardian_mobile', label: 'অভিভাবকের নাম ও সচল মোবাইল নম্বর', type: 'text', placeholder: 'অভিভাবকের নাম ও মোবাইল (01XXXXXXXXX)', required: true },
      { name: 'applicant_photos', label: 'পাসপোর্ট সাইজ ছবি ও প্রতিবন্ধিতার পূর্ণাঙ্গ ছবি (Full Photo)', type: 'file', required: true },
      { name: 'nid_medical_doc', label: 'NID/জন্ম নিবন্ধন সনদ ও চিকিৎসা সনদপত্র (থাকলে)', type: 'file', required: true }
    ]
  },
  {
    id: 'suborno-card-download',
    title: 'সুবর্ণ কার্ড ডাউনলোড (অনলাইন কপি)',
    titleEn: 'Suborno Card PDF Download',
    description: 'নিবন্ধিত প্রতিবন্ধী ব্যক্তির ডিজিটাল সুবর্ণ নাগরিক পরিচয়পত্র ও সনদের PDF কপি সংগ্রহ',
    icon: '🪪',
    color: 'bg-yellow-600',
    category: 'suborno',
    price: 650,
    popular: true,
    deliveryTime: '১-৩ ঘণ্টা',
    officialNote: 'ডিজিটাল সুবর্ণ নাগরিক কার্ড ও সনদের অনলাইন PDF কপি ডাউনলোড করতে নিচের তথ্য দিন।',
    fields: [
      { name: 'suborno_pin_or_tracking', label: 'সুবর্ণ কার্ড পিন (PIN) নম্বর / ট্র্যাকিং নম্বর (যদি থাকে)', type: 'text', placeholder: 'সুবর্ণ কার্ডের পিন বা ট্র্যাকিং নম্বর', required: false },
      { name: 'nid_or_brn', label: 'NID নম্বর অথবা জন্ম নিবন্ধন নম্বর', type: 'text', placeholder: '১০/১৭ ডিজিটের NID বা জন্ম নিবন্ধন নম্বর', required: true },
      { name: 'dob', label: 'জন্ম তারিখ (DD/MM/YYYY)', type: 'text', placeholder: 'যেমন: 01/01/2000', required: true },
      { name: 'district_upazila', label: 'জেলা ও উপজেলার নাম', type: 'text', placeholder: 'জেলা ও উপজেলার নাম লিখুন', required: true },
      { name: 'applicant_mobile', label: 'আবেদনকারীর নাম ও মোবাইল নম্বর', type: 'text', placeholder: 'নাম ও মোবাইল নম্বর', required: true }
    ]
  },
  {
    id: 'suborno-card-correction',
    title: 'সুবর্ণ কার্ড তথ্য সংশোধন',
    titleEn: 'Suborno Card Correction',
    description: 'সুবর্ণ নাগরিক কার্ডে নাম, পিতা-মাতার নাম, জন্ম তারিখ বা প্রতিবন্ধিতার ধরন সংশোধন আবেদন',
    icon: '✍️',
    color: 'bg-orange-600',
    category: 'suborno',
    price: 650,
    popular: true,
    deliveryTime: '২-৫ দিন',
    officialNote: 'সুবর্ণ কার্ডের ভুল তথ্য সংশোধনের জন্য বর্তমান কার্ডের তথ্য ও সঠিক সনদ প্রদান করুন।',
    fields: [
      { name: 'suborno_pin', label: 'বর্তমান সুবর্ণ কার্ড নম্বর (PIN)', type: 'text', placeholder: 'সুবর্ণ কার্ডের নম্বর লিখুন', required: true },
      { name: 'nid_or_brn', label: 'সঠিক NID / জন্ম নিবন্ধন নম্বর ও জন্ম তারিখ', type: 'text', placeholder: 'NID বা জন্ম নিবন্ধন নম্বর ও জন্ম তারিখ', required: true },
      { name: 'district_upazila', label: 'জেলা ও উপজেলা সমাজসেবা কার্যালয়', type: 'text', placeholder: 'জেলা ও উপজেলার নাম', required: true },
      { name: 'correction_details', label: 'সংশোধনের বিবরণ (কী ভুল আছে এবং সঠিক কী হবে)', type: 'textarea', placeholder: 'যেমন: নামের বানান, জন্ম তারিখ বা ঠিকানা যা সংশোধন করতে চান তা বিস্তারিত লিখুন', required: true },
      { name: 'supporting_docs', label: 'বর্তমান সুবর্ণ কার্ড ও সঠিক NID/জন্ম নিবন্ধনের কপি', type: 'file', required: true }
    ]
  },
  {
    id: 'suborno-disability-allowance',
    title: 'প্রতিবন্ধী ভাতা আবেদন',
    titleEn: 'Disability Allowance Application',
    description: 'সুবর্ণ কার্ডধারীদের সরকারি মাসিক প্রতিবন্ধী ভাতার জন্য অনলাইন (MIS) আবেদন',
    icon: '💰',
    color: 'bg-emerald-600',
    category: 'suborno',
    price: 650,
    popular: true,
    deliveryTime: '১২-২৪ ঘণ্টা',
    officialNote: 'সমাজসেবা অধিদপ্তরের এমআইএস (mis.bhata.gov.bd) পোর্টালে প্রতিবন্ধী ভাতার অনলাইন আবেদনের ফর্ম।',
    fields: [
      { name: 'suborno_pin', label: 'সুবর্ণ নাগরিক কার্ড নম্বর (PIN)', type: 'text', placeholder: 'সুবর্ণ কার্ডের পিন নম্বর দিন', required: true },
      { name: 'applicant_name_nid', label: 'আবেদনকারীর নাম এবং NID / জন্ম নিবন্ধন নম্বর', type: 'text', placeholder: 'পূর্ণ নাম ও NID/জন্ম নিবন্ধন নম্বর', required: true },
      { name: 'dob', label: 'জন্ম তারিখ (DD/MM/YYYY)', type: 'text', placeholder: 'জন্ম তারিখ লিখুন', required: true },
      { name: 'address_details', label: 'জেলা, উপজেলা, ইউনিয়ন/পৌরসভা ও ওয়ার্ড নম্বর', type: 'text', placeholder: 'জেলা, উপজেলা, ইউনিয়ন ও ওয়ার্ড নং', required: true },
      { name: 'mfs_account', label: 'ভাতা গ্রহণের নগদ (Nagad) বা বিকাশ (bKash) মোবাইল নম্বর', type: 'text', placeholder: '01XXXXXXXXX (নগদ বা বিকাশ উল্লেখ করুন)', required: true },
      { name: 'nominee_info', label: 'নমিনির নাম, সম্পর্ক ও NID নম্বর', type: 'text', placeholder: 'নমিনির নাম, সম্পর্ক ও NID নম্বর', required: true },
      { name: 'suborno_nid_copy', label: 'সুবর্ণ কার্ড ও NID/জন্ম নিবন্ধনের কপি আপলোড', type: 'file', required: true }
    ]
  },
  {
    id: 'suborno-education-stipend',
    title: 'প্রতিবন্ধী শিক্ষা উপবৃত্তি আবেদন',
    titleEn: 'Disability Education Stipend',
    description: 'সুবর্ণ কার্ডধারী শিক্ষার্থীদের (প্রাথমিক থেকে উচ্চতর স্তর) সরকারি শিক্ষা উপবৃত্তির আবেদন',
    icon: '🎓',
    color: 'bg-violet-600',
    category: 'suborno',
    price: 650,
    deliveryTime: '২৪ ঘণ্টা',
    officialNote: 'প্রতিবন্ধী শিক্ষার্থীদের সরকারি মাসিক শিক্ষা উপবৃত্তির জন্য অফিসিয়াল তথ্য দিন।',
    fields: [
      { name: 'student_name_pin', label: 'শিক্ষার্থীর নাম ও সুবর্ণ কার্ড নম্বর (PIN)', type: 'text', placeholder: 'নাম ও সুবর্ণ কার্ড নম্বর', required: true },
      { name: 'brn_or_nid', label: 'জন্ম নিবন্ধন / NID নম্বর ও জন্ম তারিখ', type: 'text', placeholder: 'জন্ম নিবন্ধন নম্বর ও জন্ম তারিখ', required: true },
      { name: 'education_level', label: 'শিক্ষার স্তর', type: 'select', options: ['প্রাথমিক স্তর (১ম - ৫ম শ্রেণী)', 'মাধ্যমিক স্তর (৬ষ্ঠ - ১০ম শ্রেণী)', 'উচ্চ মাধ্যমিক স্তর (১১শ - ১২শ শ্রেণী)', 'উচ্চতর স্তর (স্নাতক / স্নাতকোত্তর)'], required: true },
      { name: 'institute_details', label: 'শিক্ষা প্রতিষ্ঠানের নাম, শ্রেণী, রোল নম্বর ও উপজেলা/জেলা', type: 'textarea', placeholder: 'স্কুল/কলেজের নাম, শ্রেণী, রোল নং ও ঠিকানা লিখুন', required: true },
      { name: 'guardian_mfs', label: 'অভিভাবকের নাম, NID ও সচল নগদ/বিকাশ নম্বর', type: 'text', placeholder: 'অভিভাবকের নাম, NID ও মোবাইল ব্যাংকিং নম্বর', required: true },
      { name: ' recommendation_doc', label: 'প্রতিষ্ঠান প্রধানের প্রত্যয়নপত্র ও সুবর্ণ কার্ডের কপি', type: 'file', required: true }
    ]
  },
  {
    id: 'suborno-status-verification',
    title: 'সুবর্ণ কার্ড যাচাই ও স্ট্যাটাস চেক',
    titleEn: 'Suborno Card Verification & Status',
    description: 'সুবর্ণ নাগরিক কার্ডের সত্যতা যাচাই (DIS Verification) এবং আবেদনের বর্তমান অবস্থা চেক',
    icon: '🔍',
    color: 'bg-teal-600',
    category: 'suborno',
    price: 650,
    deliveryTime: '৩০ মিনিট - ২ ঘণ্টা',
    officialNote: 'সুবর্ণ কার্ডের অনলাইন রেকর্ড যাচাই অথবা নতুন আবেদনের বর্তমান অবস্থা জানতে তথ্য দিন।',
    fields: [
      { name: 'pin_or_nid', label: 'সুবর্ণ কার্ড পিন (PIN) / ট্র্যাকিং নম্বর অথবা NID/জন্ম নিবন্ধন নম্বর', type: 'text', placeholder: 'পিন, ট্র্যাকিং অথবা NID/জন্ম নিবন্ধন নম্বর দিন', required: true },
      { name: 'dob', label: 'জন্ম তারিখ (DD/MM/YYYY)', type: 'text', placeholder: 'যেমন: 10/02/2005', required: true },
      { name: 'district_upazila', label: 'জেলা ও উপজেলার নাম', type: 'text', placeholder: 'জেলা ও উপজেলার নাম', required: true },
      { name: 'mobile', label: 'মোবাইল নম্বর', type: 'text', placeholder: '01XXXXXXXXX', required: true }
    ]
  },
  {
    id: 'suborno-card-reissue',
    title: 'হারানো/নষ্ট সুবর্ণ কার্ড উত্তোলন',
    titleEn: 'Lost/Damaged Suborno Card Re-issue',
    description: 'হারিয়ে যাওয়া বা নষ্ট হওয়া সুবর্ণ নাগরিক পরিচয়পত্র পুনরায় উত্তোলনের আবেদন',
    icon: '🔄',
    color: 'bg-rose-600',
    category: 'suborno',
    price: 650,
    deliveryTime: '১২-২৪ ঘণ্টা',
    officialNote: 'হারানো বা নষ্ট হওয়া সুবর্ণ কার্ডের ডুপ্লিকেট/পুনঃইস্যু কপি পেতে নিচের তথ্য পূরণ করুন।',
    fields: [
      { name: 'applicant_name_father', label: 'আবেদনকারীর নাম ও পিতার নাম', type: 'text', placeholder: 'নাম ও পিতার নাম লিখুন', required: true },
      { name: 'suborno_pin_nid', label: 'সুবর্ণ কার্ড নম্বর (জানা থাকলে) ও NID/জন্ম নিবন্ধন নম্বর', type: 'text', placeholder: 'কার্ড নং বা NID/জন্ম নিবন্ধন নম্বর', required: true },
      { name: 'district_upazila', label: 'জেলা ও উপজেলা সমাজসেবা অফিস', type: 'text', placeholder: 'জেলা ও উপজেলার নাম', required: true },
      { name: 'gd_or_reason', label: 'পুনরায় উত্তোলনের কারণ ও জিডি নম্বর (হারিয়ে গেলে)', type: 'text', placeholder: 'হারানো / নষ্ট হওয়া (জিডি থাকলে নম্বর দিন)', required: true },
      { name: 'nid_gd_doc', label: 'NID/জন্ম নিবন্ধন ও জিডির কপি আপলোড (যদি থাকে)', type: 'file', required: false }
    ]
  },
  {
    id: 'suborno-special-benefits',
    title: 'সহায়ক উপকরণ ও পুনর্বাসন আবেদন',
    titleEn: 'Assistive Device & Rehabilitation Apply',
    description: 'হুইলচেয়ার, শ্রবণযন্ত্র, কৃত্রিম অঙ্গ, সুদমুক্ত ক্ষুদ্রঋণ ও সরকারি সহায়তা প্রাপ্তির আবেদন',
    icon: '🦽',
    color: 'bg-indigo-600',
    category: 'suborno',
    price: 650,
    deliveryTime: '২৪ ঘণ্টা',
    officialNote: 'প্রতিবন্ধী সেবা ও সাহায্য কেন্দ্র এবং সমাজসেবা অধিদপ্তরের বিশেষ সহায়ক উপকরণ ও পুনর্বাসন সুবিধার আবেদন।',
    fields: [
      { name: 'benefit_type', label: 'প্রয়োজনীয় সহায়তা / উপকরণের ধরন', type: 'select', options: ['হুইলচেয়ার / ট্রাইসাইকেল আবেদন', 'হিয়ারিং এইড (শ্রবণযন্ত্র) আবেদন', 'সাদা ছড়ি / চশমা (দৃষ্টি প্রতিবন্ধীদের জন্য)', 'কৃত্রিম অঙ্গ / ক্রাচ / স্ট্যান্ডিং ফ্রেম', 'প্রতিবন্ধী সুদমুক্ত পুনর্বাসন ক্ষুদ্রঋণ', 'বিনামূল্যে ফিজিওথেরাপি ও চিকিৎসা সহায়তা'], required: true },
      { name: 'applicant_name_pin', label: 'আবেদনকারীর নাম ও সুবর্ণ কার্ড নম্বর (PIN)', type: 'text', placeholder: 'নাম ও সুবর্ণ কার্ড নম্বর', required: true },
      { name: 'nid_mobile', label: 'NID / জন্ম নিবন্ধন নম্বর ও সচল মোবাইল নম্বর', type: 'text', placeholder: 'NID/জন্ম নিবন্ধন ও মোবাইল নম্বর', required: true },
      { name: 'district_upazila_address', label: 'জেলা, উপজেলা ও পূর্ণ ঠিকানা', type: 'textarea', placeholder: 'জেলা, উপজেলা, ইউনিয়ন ও গ্রামের নাম লিখুন', required: true },
      { name: 'suborno_card_copy', label: 'সুবর্ণ নাগরিক কার্ডের কপি আপলোড', type: 'file', required: true }
    ]
  },

  // ─────────────────────────────────────────────
  // 📄 TIN / ট্যাক্স
  // ─────────────────────────────────────────────
  { id: 'tin-certificate', title: 'টিন সার্টিফিকেট', titleEn: 'TIN Certificate', description: 'নতুন বা পুরাতন টিন সার্টিফিকেট', icon: '📄', color: 'bg-orange-600', category: 'tax', price: 59, inputLabel: 'আইডি কার্ড নাম্বার', inputPlaceholder: 'জাতীয় পরিচয়পত্র নাম্বার দিন' },
  { id: 'tin-new', title: 'নতুন TIN রেজিস্ট্রেশন', titleEn: 'New TIN Registration', description: 'নতুন ট্যাক্স আইডেন্টিফিকেশন নম্বর', icon: '🧾', color: 'bg-orange-500', category: 'tax', price: 99, inputLabel: 'আইডি কার্ড নাম্বার ও নাম', inputPlaceholder: 'আইডি নাম্বার / পূর্ণ নাম দিন' },
  { id: 'income-tax-return', title: 'আয়কর রিটার্ন', titleEn: 'Income Tax Return', description: 'বার্ষিক আয়কর রিটার্ন জমা', icon: '💼', color: 'bg-orange-700', category: 'tax', price: 350, inputLabel: 'TIN নাম্বার', inputPlaceholder: 'TIN নাম্বার দিন' },

  // ─────────────────────────────────────────────
  // 📱 মোবাইল সেবা
  // ─────────────────────────────────────────────
  { id: 'sim-biometric', title: 'সিম বায়োমেট্রিক', titleEn: 'SIM Biometric', description: 'বায়োমেট্রিক দিয়ে সিম তথ্য যাচাই', icon: '📲', color: 'bg-pink-600', category: 'mobile', price: 49, inputLabel: 'মোবাইল নাম্বার', inputPlaceholder: '01XXXXXXXXX নাম্বার দিন' },
  { id: 'call-list', title: '৩ মাস কল লিস্ট', titleEn: '3 Months Call List', description: 'মোবাইলের ৩ মাসের কল রেকর্ড', icon: '📞', color: 'bg-cyan-600', category: 'mobile', price: 620, inputLabel: 'মোবাইল নাম্বার', inputPlaceholder: '01XXXXXXXXX নাম্বার দিন' },
  { id: 'call-list', title: '৬ মাস কল লিস্ট', titleEn: '6 Months Call List', description: 'মোবাইলের ৬ মাসের কল রেকর্ড', icon: '📞', color: 'bg-cyan-600', category: 'mobile', price: 950, inputLabel: 'মোবাইল নাম্বার', inputPlaceholder: '01XXXXXXXXX নাম্বার দিন' },
  { id: 'sms-list', title: '৩ মাস SMS লিস্ট', titleEn: '3 Months SMS List', description: 'মোবাইলের ৩ মাসের SMS রেকর্ড', icon: '💬', color: 'bg-cyan-700', category: 'mobile', price: 349, inputLabel: 'মোবাইল নাম্বার', inputPlaceholder: '01XXXXXXXXX নাম্বার দিন' },
  { id: 'imei-number', title: 'IMEI টু নাম্বার', titleEn: 'IMEI to Number', description: 'IMEI দিয়ে সক্রিয় নাম্বার বের করুন', icon: '📱', color: 'bg-cyan-500', category: 'mobile', price: 210, inputLabel: 'IMEI নাম্বার', inputPlaceholder: '15 সংখ্যার IMEI নাম্বার দিন' },
  { id: 'bkash-info', title: 'বিকাশ তথ্য', titleEn: 'Bkash Info', description: 'বিকাশ একাউন্টের তথ্য অনুসন্ধান', icon: '💰', color: 'bg-pink-500', category: 'mobile', price: 399, inputLabel: 'বিকাশ নাম্বার', inputPlaceholder: 'বিকাশ নাম্বার দিন (01XXXXXXXXX)' },
  { id: 'nagad-info', title: 'নগদ তথ্য', titleEn: 'Nagad Info', description: 'নগদ একাউন্টের তথ্য অনুসন্ধান', icon: '💸', color: 'bg-orange-500', category: 'mobile', price: 399, inputLabel: 'নগদ নাম্বার', inputPlaceholder: 'নগদ নাম্বার দিন (01XXXXXXXXX)' },
  { id: 'rocket-info', title: 'রকেট তথ্য', titleEn: 'Rocket Info', description: 'ডাচ বাংলা রকেট তথ্য অনুসন্ধান', icon: '🚀', color: 'bg-purple-500', category: 'mobile', price: 399, inputLabel: 'রকেট নাম্বার', inputPlaceholder: 'রকেট নাম্বার দিন (01XXXXXXXXX)' },

  // ─────────────────────────────────────────────
  // 📍 লোকেশন ট্র্যাকিং
  // ─────────────────────────────────────────────
  { id: 'number-location', title: 'নম্বর টু লোকেশন', titleEn: 'Number to Location', description: 'মোবাইল নম্বর দিয়ে লোকেশন ট্র্যাকিং', icon: '📍', color: 'bg-red-500', category: 'location', price: 170, popular: true, inputLabel: 'মোবাইল নাম্বার', inputPlaceholder: '01XXXXXXXXX নাম্বার দিন' },
  { id: 'live-location', title: 'লাইভ লোকেশন', titleEn: 'Live Location', description: 'রিয়েলটাইম লোকেশন ট্র্যাকিং', icon: '🗺️', color: 'bg-red-600', category: 'location', price: 250, inputLabel: 'মোবাইল নাম্বার', inputPlaceholder: '01XXXXXXXXX নাম্বার দিন' },

  // ─────────────────────────────────────────────
  // 📜 সনদপত্র
  // ─────────────────────────────────────────────
  { id: 'bmet-service', title: 'BMET সেবা', titleEn: 'BMET Service', description: 'বৈদেশিক কর্মসংস্থান সংক্রান্ত সেবা', icon: '✈️', color: 'bg-sky-600', category: 'cert', price: 210, inputLabel: 'পাসপোর্ট / আইডি নাম্বার', inputPlaceholder: 'পাসপোর্ট নাম্বার বা আইডি নাম্বার দিন' },
  { id: 'police-clearance', title: 'পুলিশ ক্লিয়ারেন্স', titleEn: 'Police Clearance', description: 'পুলিশ ক্লিয়ারেন্স সার্টিফিকেট', icon: '👮', color: 'bg-blue-700', category: 'cert', price: 300, inputLabel: 'আইডি নাম্বার ও ঠিকানা', inputPlaceholder: 'আইডি নাম্বার / স্থায়ী ঠিকানা দিন' },
  { id: 'char-certificate', title: 'চারিত্রিক সনদ', titleEn: 'Character Certificate', description: 'চারিত্রিক সনদপত্র সংগ্রহ', icon: '🎓', color: 'bg-teal-600', category: 'cert', price: 100, inputLabel: 'নাম ও ঠিকানা', inputPlaceholder: 'পূর্ণ নাম / ঠিকানা দিন' },
  { id: 'driving-license', title: 'ড্রাইভিং লাইসেন্স', titleEn: 'Driving License', description: 'ড্রাইভিং লাইসেন্স আবেদন ও নবায়ন', icon: '🚗', color: 'bg-yellow-600', category: 'cert', price: 350, inputLabel: 'আইডি নাম্বার ও নাম', inputPlaceholder: 'আইডি নাম্বার / পূর্ণ নাম দিন' },
  { id: 'passport-apply', title: 'পাসপোর্ট আবেদন', titleEn: 'Passport Apply', description: 'নতুন পাসপোর্ট আবেদন সহায়তা', icon: '🛂', color: 'bg-green-800', category: 'cert', price: 500, inputLabel: 'আইডি নাম্বার ও নাম', inputPlaceholder: 'আইডি নাম্বার / পূর্ণ নাম দিন' },

  // ─────────────────────────────────────────────
  // 🏪 ট্রেড / ব্যবসা
  // ─────────────────────────────────────────────
  { id: 'trade-license', title: 'ট্রেড লাইসেন্স', titleEn: 'Trade License', description: 'ট্রেড লাইসেন্স আবেদন ও নবায়ন', icon: '🏪', color: 'bg-yellow-700', category: 'trade', price: 600, inputLabel: 'ব্যবসার নাম ও ঠিকানা', inputPlaceholder: 'ব্যবসার নাম / ঠিকানা দিন' },
  { id: 'company-reg', title: 'কোম্পানি রেজিস্ট্রেশন', titleEn: 'Company Registration', description: 'ব্যবসা প্রতিষ্ঠান নিবন্ধন', icon: '🏢', color: 'bg-yellow-500', category: 'trade', price: 1500, inputLabel: 'কোম্পানির নাম ও তথ্য', inputPlaceholder: 'কোম্পানির নাম / ধরন / মালিকের নাম' },
  { id: 'vat-reg', title: 'VAT রেজিস্ট্রেশন', titleEn: 'VAT Registration', description: 'ভ্যাট নিবন্ধন ও সনদ', icon: '🧾', color: 'bg-amber-600', category: 'trade', price: 400, inputLabel: 'TIN নাম্বার ও ব্যবসার নাম', inputPlaceholder: 'TIN নাম্বার / ব্যবসার নাম দিন' },

  // ─────────────────────────────────────────────
  // 🏡 ভূমি সেবা (১২টি অফিসিয়াল সেবা ও ফর্ম)
  // ─────────────────────────────────────────────
  {
    id: 'land-mutation-apply',
    title: 'নামজারি / মিউটেশন আবেদন',
    titleEn: 'E-Mutation Application',
    description: 'জমির মালিকানা পরিবর্তন ও অনলাইনে ই-নামজারি আবেদনের সম্পূর্ণ প্রসেসিং সেবা',
    icon: '🏡',
    color: 'bg-lime-700',
    category: 'land',
    price: 500,
    popular: true,
    deliveryTime: '২৪-৪৮ ঘণ্টা',
    officialNote: 'ই-নামজারি আবেদনের জন্য জমির তফসিল, দলিল, খতিয়ান ও আবেদনকারীর NID তথ্য প্রদান করুন।',
    fields: [
      { name: 'division_district_upazila', label: 'বিভাগ, জেলা ও উপজেলা/সার্কেল', type: 'text', placeholder: 'যেমন: ঢাকা, গাজীপুর, সদর', required: true },
      { name: 'mouza_jl', label: 'মৌজার নাম ও জে.এল (J.L) নম্বর', type: 'text', placeholder: 'মৌজার নাম ও জে.এল নম্বর লিখুন', required: true },
      { name: 'survey_type', label: 'খতিয়ানের ধরন (Survey Type)', type: 'select', options: ['বিএস (BS)', 'আরএস (RS)', 'এসএ (SA)', 'সিএস (CS)', 'বিআরএস (BRS)', 'নামজারি খতিয়ান'], required: true },
      { name: 'khatian_no', label: 'খতিয়ান নম্বর', type: 'text', placeholder: 'খতিয়ান নম্বর দিন', required: true },
      { name: 'dag_no', label: 'দাগ নম্বর', type: 'text', placeholder: 'দাগ নম্বর দিন', required: true },
      { name: 'land_amount', label: 'আবেদনকৃত জমির পরিমাণ (শতাংশ/অযুতাংশ)', type: 'text', placeholder: 'যেমন: ১০ শতাংশ', required: true },
      { name: 'ownership_source', label: 'মালিকানা প্রাপ্তির সূত্র', type: 'select', options: ['ক্রয় (সাফ কবলা)', 'ওয়ারিশ (উত্তরাধিকার)', 'হেবা / দানপত্র', 'বণ্টননামা', 'আদালতের ডিক্রি', 'অন্যান্য'], required: true },
      { name: 'deed_details', label: 'দলিল নম্বর, তারিখ ও সাব-রেজিস্ট্রি অফিস', type: 'text', placeholder: 'দলিল নং, রেজিস্ট্রেশন তারিখ ও অফিসের নাম', required: true },
      { name: 'applicant_info', label: 'গ্রহীতা/আবেদনকারীর নাম, পিতার নাম ও পূর্ণ ঠিকানা', type: 'textarea', placeholder: 'নাম, পিতা/স্বামীর নাম ও বর্তমান/স্থায়ী ঠিকানা লিখুন', required: true },
      { name: 'applicant_nid_mobile', label: 'আবেদনকারীর NID নম্বর ও সচল মোবাইল নম্বর', type: 'text', placeholder: 'NID নম্বর এবং মোবাইল নম্বর (01XXXXXXXXX)', required: true },
      { name: 'seller_or_donor_info', label: 'দাতা / খতিয়ানের রেকর্ডীয় মালিকের নাম ও পিতার নাম', type: 'text', placeholder: 'যার কাছ থেকে জমি প্রাপ্ত তার নাম ও পিতার নাম', required: true },
      { name: 'deed_khatian_doc', label: 'দলিল ও খতিয়ান/পর্চার স্ক্যান কপি (PDF/ছবি)', type: 'file', required: true },
      { name: 'nid_photo_doc', label: 'আবেদনকারীর NID, ছবি ও স্বাক্ষর (ওয়ারিশ সনদ থাকলে সহ)', type: 'file', required: true }
    ]
  },
  {
    id: 'land-khatian-porcha',
    title: 'খতিয়ান / পর্চা সংগ্রহ',
    titleEn: 'Khatian / Porcha Collection',
    description: 'সিএস, এসএ, আরএস, বিএস বা নামজারি খতিয়ান/পর্চার অনলাইন কপি সংগ্রহ',
    icon: '📜',
    color: 'bg-lime-600',
    category: 'land',
    price: 150,
    popular: true,
    deliveryTime: '১-৬ ঘণ্টা',
    officialNote: 'সিএস, এসএ, আরএস, বিএস বা নামজারি খতিয়ান/পর্চার অনলাইন কপি সংগ্রহের অফিসিয়াল ফর্ম।',
    fields: [
      { name: 'division_district', label: 'বিভাগ ও জেলা', type: 'text', placeholder: 'বিভাগ ও জেলার নাম লিখুন', required: true },
      { name: 'upazila', label: 'উপজেলা / থানা', type: 'text', placeholder: 'উপজেলার নাম লিখুন', required: true },
      { name: 'mouza_jl', label: 'মৌজার নাম ও জে.এল নম্বর', type: 'text', placeholder: 'মৌজার নাম ও জে.এল নং', required: true },
      { name: 'survey_type', label: 'জরিপের ধরন (Survey Type)', type: 'select', options: ['আরএস (RS)', 'বিএস (BS)', 'এসএ (SA)', 'সিএস (CS)', 'বিআরএস (BRS)', 'দিয়ারা', 'পেটি', 'নামজারি খতিয়ান'], required: true },
      { name: 'khatian_no', label: 'খতিয়ান নম্বর', type: 'text', placeholder: 'খতিয়ান নম্বর লিখুন', required: true },
      { name: 'dag_owner_info', label: 'দাগ নম্বর ও মালিকের নাম (খতিয়ান নং নিশ্চিত না হলে)', type: 'text', placeholder: 'দাগ নম্বর ও মালিকের নাম (ঐচ্ছিক)', required: false },
      { name: 'applicant_mobile', label: 'আবেদনকারীর নাম ও মোবাইল নম্বর', type: 'text', placeholder: 'নাম ও সচল মোবাইল নম্বর', required: true }
    ]
  },
  {
    id: 'land-khatian-dag-search',
    title: 'খতিয়ান ও দাগের তথ্য অনুসন্ধান',
    titleEn: 'Khatian & Dag Information Search',
    description: 'দাগ নম্বর, খতিয়ান নম্বর বা মালিকের নাম দিয়ে জমির বিস্তারিত তথ্য অনুসন্ধান',
    icon: '🔍',
    color: 'bg-emerald-600',
    category: 'land',
    price: 100,
    popular: true,
    deliveryTime: '১-৩ ঘণ্টা',
    officialNote: 'দাগ নম্বর, খতিয়ান নম্বর অথবা মালিকের নাম ও পিতার নাম দিয়ে জমির তথ্য অনুসন্ধান করুন।',
    fields: [
      { name: 'district_upazila', label: 'জেলা ও উপজেলা', type: 'text', placeholder: 'জেলা ও উপজেলার নাম', required: true },
      { name: 'mouza_jl', label: 'মৌজার নাম ও জে.এল নম্বর', type: 'text', placeholder: 'মৌজার নাম ও জে.এল নং', required: true },
      { name: 'survey_type', label: 'জরিপের ধরন', type: 'select', options: ['আরএস (RS)', 'বিএস (BS)', 'এসএ (SA)', 'সিএস (CS)', 'বিআরএস (BRS)', 'নামজারি'], required: true },
      { name: 'search_by', label: 'অনুসন্ধানের মাধ্যম', type: 'select', options: ['দাগ নম্বর দিয়ে অনুসন্ধান', 'খতিয়ান নম্বর দিয়ে অনুসন্ধান', 'মালিকের নাম ও পিতার নাম দিয়ে অনুসন্ধান'], required: true },
      { name: 'search_details', label: 'দাগ নম্বর / খতিয়ান নম্বর / মালিকের নাম ও পিতার নাম', type: 'textarea', placeholder: 'যার মাধ্যমে খুঁজতে চান সেই দাগ নং, খতিয়ান নং বা মালিকের পূর্ণ নাম ও পিতার নাম লিখুন', required: true },
      { name: 'applicant_mobile', label: 'আবেদনকারীর মোবাইল নম্বর', type: 'text', placeholder: '01XXXXXXXXX', required: true }
    ]
  },
  {
    id: 'land-ldtax-payment',
    title: 'ভূমি উন্নয়ন কর (খাজনা) প্রদান',
    titleEn: 'Land Development Tax (Khajna)',
    description: 'অনলাইনে জমির ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও হোল্ডিং নিবন্ধন সেবা',
    icon: '💳',
    color: 'bg-green-700',
    category: 'land',
    price: 200,
    popular: true,
    deliveryTime: '১২-২৪ ঘণ্টা',
    officialNote: 'ldtax.gov.bd পোর্টালে হোল্ডিং এন্ট্রি ও ভূমি উন্নয়ন কর (খাজনা) পরিশোধের জন্য নিচের তথ্য দিন।',
    fields: [
      { name: 'district_upazila', label: 'জেলা ও উপজেলা', type: 'text', placeholder: 'জেলা ও উপজেলার নাম', required: true },
      { name: 'mouza_jl', label: 'মৌজার নাম ও জে.এল নম্বর', type: 'text', placeholder: 'মৌজার নাম ও জে.এল নং', required: true },
      { name: 'holding_no', label: 'হোল্ডিং নম্বর', type: 'text', placeholder: 'হোল্ডিং নম্বর লিখুন', required: true },
      { name: 'khatian_dag_no', label: 'খতিয়ান নম্বর ও দাগ নম্বর', type: 'text', placeholder: 'খতিয়ান নং ও দাগ নং', required: true },
      { name: 'land_type_amount', label: 'জমির ধরন (কৃষি/অকৃষি) ও পরিমাণ', type: 'text', placeholder: 'যেমন: আবাসিক/কৃষি, ১০ শতাংশ', required: true },
      { name: 'owner_name_nid', label: 'মালিকের নাম ও NID নম্বর', type: 'text', placeholder: 'জমির মালিকের পূর্ণ নাম ও NID নম্বর', required: true },
      { name: 'owner_mobile', label: 'মালিকের মোবাইল নম্বর', type: 'text', placeholder: '01XXXXXXXXX', required: true },
      { name: 'previous_dakhila_doc', label: 'পূর্বের দাখিলা বা খতিয়ানের কপি (যদি থাকে)', type: 'file', required: false }
    ]
  },
  {
    id: 'land-dakhila-collection',
    title: 'দাখিলা সংগ্রহ',
    titleEn: 'Online Dakhila Collection',
    description: 'ভূমি উন্নয়ন কর (খাজনা) পরিশোধের সরকারি অনলাইন দাখিলা (রশিদ) সংগ্রহ',
    icon: '🧾',
    color: 'bg-teal-600',
    category: 'land',
    price: 100,
    deliveryTime: '১-৩ ঘণ্টা',
    officialNote: 'ভূমি উন্নয়ন কর (খাজনা) পরিশোধের সরকারি অনলাইন দাখিলা (রশিদ) ডাউনলোড ও সংগ্রহ।',
    fields: [
      { name: 'district_upazila', label: 'জেলা ও উপজেলা', type: 'text', placeholder: 'জেলা ও উপজেলার নাম', required: true },
      { name: 'mouza', label: 'মৌজার নাম ও জে.এল নম্বর', type: 'text', placeholder: 'মৌজার নাম', required: true },
      { name: 'holding_no', label: 'হোল্ডিং নম্বর', type: 'text', placeholder: 'হোল্ডিং নম্বর লিখুন', required: true },
      { name: 'khatian_or_dakhila_no', label: 'খতিয়ান নম্বর / পূর্বের দাখিলা নম্বর', type: 'text', placeholder: 'খতিয়ান নং বা দাখিলা নং', required: true },
      { name: 'owner_name_mobile', label: 'মালিকের নাম ও নিবন্ধিত মোবাইল নম্বর', type: 'text', placeholder: 'মালিকের নাম ও মোবাইল নম্বর', required: true }
    ]
  },
  {
    id: 'land-mouza-map',
    title: 'মৌজা ম্যাপ / নকশা সংগ্রহ',
    titleEn: 'Mouza Map / Noksha Collection',
    description: 'সিএস, এসএ, আরএস ও বিএস জরিপের মৌজা ম্যাপ / জমির নকশা সংগ্রহ',
    icon: '🗺️',
    color: 'bg-lime-800',
    category: 'land',
    price: 350,
    popular: true,
    deliveryTime: '৬-২৪ ঘণ্টা',
    officialNote: 'সিএস, এসএ, আরএস ও বিএস জরিপের মৌজা ম্যাপ / নকশা সংগ্রহের জন্য সঠিক শীট ও জে.এল নম্বর দিন।',
    fields: [
      { name: 'district_upazila', label: 'জেলা ও উপজেলা', type: 'text', placeholder: 'জেলা ও উপজেলার নাম', required: true },
      { name: 'mouza_jl', label: 'মৌজার নাম ও জে.এল (J.L) নম্বর', type: 'text', placeholder: 'মৌজার নাম ও জে.এল নম্বর', required: true },
      { name: 'survey_type', label: 'জরিপের ধরন (Survey Type)', type: 'select', options: ['আরএস (RS)', 'বিএস (BS)', 'এসএ (SA)', 'সিএস (CS)', 'বিআরএস (BRS)'], required: true },
      { name: 'sheet_no', label: 'শীট নম্বর (Sheet No)', type: 'text', placeholder: 'যেমন: শীট নং- ১, ২', required: true },
      { name: 'dag_no', label: 'নির্দিষ্ট দাগ নম্বর (যদি মার্ক করা নকশা লাগে)', type: 'text', placeholder: 'দাগ নম্বর (ঐচ্ছিক)', required: false },
      { name: 'applicant_mobile', label: 'আবেদনকারীর নাম ও মোবাইল নম্বর', type: 'text', placeholder: 'নাম ও মোবাইল নম্বর', required: true }
    ]
  },
  {
    id: 'land-mutation-status',
    title: 'নামজারি আবেদনের স্ট্যাটাস যাচাই',
    titleEn: 'Mutation Application Status Check',
    description: 'ই-নামজারি আবেদনের বর্তমান অবস্থা, শুনানির তারিখ ও আদেশের তথ্য যাচাই',
    icon: '📋',
    color: 'bg-green-800',
    category: 'land',
    price: 50,
    deliveryTime: '৩০ মিনিট - ২ ঘণ্টা',
    officialNote: 'ই-নামজারি আবেদনের বর্তমান অবস্থান, শুনানির তারিখ ও আদেশের বিস্তারিত স্ট্যাটাস জানুন।',
    fields: [
      { name: 'division_district_upazila', label: 'বিভাগ, জেলা ও উপজেলা/সার্কেল', type: 'text', placeholder: 'বিভাগ, জেলা ও উপজেলার নাম', required: true },
      { name: 'application_or_case_id', label: 'আবেদন নম্বর (Application ID) / মামলা (Case) নম্বর', type: 'text', placeholder: 'Application ID অথবা Case No লিখুন', required: true },
      { name: 'applicant_nid', label: 'আবেদনকারীর NID নম্বর', type: 'text', placeholder: 'জাতীয় পরিচয়পত্র নম্বর', required: true },
      { name: 'applicant_mobile', label: 'মোবাইল নম্বর', type: 'text', placeholder: '01XXXXXXXXX', required: true }
    ]
  },
  {
    id: 'land-certified-khatian',
    title: 'খতিয়ানের সার্টিফাইড কপি',
    titleEn: 'Certified Copy of Khatian',
    description: 'জেলা রেকর্ড রুম থেকে খতিয়ান/পর্চার সরকারি সার্টিফাইড কপির আবেদন ও সংগ্রহ',
    icon: '📑',
    color: 'bg-emerald-700',
    category: 'land',
    price: 250,
    popular: true,
    deliveryTime: '৩-৭ কার্যদিবস',
    officialNote: 'জেলা রেকর্ড রুম থেকে খতিয়ান/পর্চার সরকারি সার্টিফাইড (জাবেদা) কপির জন্য অফিসিয়াল আবেদন।',
    fields: [
      { name: 'division_district_upazila', label: 'বিভাগ, জেলা ও উপজেলা', type: 'text', placeholder: 'বিভাগ, জেলা ও উপজেলার নাম', required: true },
      { name: 'mouza_jl', label: 'মৌজার নাম ও জে.এল নম্বর', type: 'text', placeholder: 'মৌজার নাম ও জে.এল নং', required: true },
      { name: 'survey_type', label: 'জরিপের ধরন', type: 'select', options: ['আরএস (RS)', 'বিএস (BS)', 'এসএ (SA)', 'সিএস (CS)', 'বিআরএস (BRS)', 'নামজারি'], required: true },
      { name: 'khatian_no', label: 'খতিয়ান নম্বর ও মালিকের নাম', type: 'text', placeholder: 'খতিয়ান নং ও রেকর্ডীয় মালিকের নাম', required: true },
      { name: 'applicant_name_nid', label: 'আবেদনকারীর নাম ও NID নম্বর', type: 'text', placeholder: 'পূর্ণ নাম ও NID নম্বর', required: true },
      { name: 'delivery_address', label: 'ডাকযোগে ডেলিভারি ঠিকানা ও সচল মোবাইল নম্বর', type: 'textarea', placeholder: 'বাসা/গ্রাম, ডাকঘর, উপজেলা, জেলা এবং মোবাইল নম্বর', required: true }
    ]
  },
  {
    id: 'land-tax-holding-info',
    title: 'ভূমি করের হিসাব ও হোল্ডিং তথ্য',
    titleEn: 'Land Tax Calculation & Holding Info',
    description: 'বকেয়া খাজনার সঠিক হিসাব নির্ণয় এবং অনলাইন হোল্ডিংয়ের বিস্তারিত তথ্য যাচাই',
    icon: '🧮',
    color: 'bg-teal-700',
    category: 'land',
    price: 100,
    deliveryTime: '১-৪ ঘণ্টা',
    officialNote: 'বকেয়া ও হাল খাজনার সঠিক হিসাব নির্ণয় এবং অনলাইন হোল্ডিংয়ের বিস্তারিত তথ্য যাচাই।',
    fields: [
      { name: 'district_upazila_mouza', label: 'জেলা, উপজেলা ও মৌজার নাম', type: 'text', placeholder: 'জেলা, উপজেলা ও মৌজা লিখুন', required: true },
      { name: 'holding_khatian_no', label: 'হোল্ডিং নম্বর ও খতিয়ান নম্বর', type: 'text', placeholder: 'হোল্ডিং নং ও খতিয়ান নং', required: true },
      { name: 'land_category', label: 'জমির ব্যবহার ভিত্তিক শ্রেণী', type: 'select', options: ['কৃষি (নাল/ফসলি)', 'আবাসিক (ভিটা/বাড়ি)', 'বাণিজ্যিক', 'শিল্প', 'অন্যান্য'], required: true },
      { name: 'total_land_amount', label: 'মোট জমির পরিমাণ (শতাংশ)', type: 'text', placeholder: 'যেমন: ১৫ শতাংশ', required: true },
      { name: 'last_paid_year', label: 'সর্বশেষ খাজনা পরিশোধের সন (বাংলা/ইংরেজি)', type: 'text', placeholder: 'যেমন: ১৪২৯ বঙ্গাব্দ / ২০২২ সাল', required: true },
      { name: 'owner_mobile', label: 'মালিকের নাম ও মোবাইল নম্বর', type: 'text', placeholder: 'নাম ও মোবাইল নম্বর', required: true }
    ]
  },
  {
    id: 'land-record-ownership',
    title: 'জমির রেকর্ড ও মালিকানা তথ্য',
    titleEn: 'Land Record & Ownership Verification',
    description: 'জমির পূর্ববর্তী ও বর্তমান রেকর্ড, খতিয়ান এবং মালিকানা যাচাই সেবা',
    icon: '🏛️',
    color: 'bg-green-900',
    category: 'land',
    price: 200,
    deliveryTime: '৩-১২ ঘণ্টা',
    officialNote: 'জমির পূর্ববর্তী ও বর্তমান রেকর্ড, খতিয়ান এবং প্রকৃত মালিকানা যাচাই সেবা।',
    fields: [
      { name: 'district_upazila_mouza', label: 'জেলা, উপজেলা ও মৌজা (জে.এল নম্বরসহ)', type: 'text', placeholder: 'জেলা, উপজেলা, মৌজা ও জে.এল নং', required: true },
      { name: 'survey_type', label: 'জরিপের ধরন', type: 'select', options: ['বিএস (BS)', 'আরএস (RS)', 'এসএ (SA)', 'সিএস (CS)', 'নামজারি রেকর্ড'], required: true },
      { name: 'khatian_dag_no', label: 'খতিয়ান নম্বর ও দাগ নম্বর', type: 'text', placeholder: 'খতিয়ান নং ও দাগ নং', required: true },
      { name: 'owner_name_father', label: 'যার নামে মালিকানা যাচাই করবেন তার নাম ও পিতার নাম', type: 'text', placeholder: 'মালিকের নাম ও পিতার নাম', required: true },
      { name: 'deed_info', label: 'দলিল নম্বর, সাল ও সাব-রেজিস্ট্রি অফিস (যদি থাকে)', type: 'text', placeholder: 'দলিল নম্বর ও সাল (ঐচ্ছিক)', required: false },
      { name: 'applicant_mobile', label: 'আবেদনকারীর মোবাইল নম্বর', type: 'text', placeholder: '01XXXXXXXXX', required: true }
    ]
  },
  {
    id: 'land-application-appeal',
    title: 'ভূমি সংক্রান্ত আবেদন ও আপিল',
    titleEn: 'Land Misc Case & Appeal Application',
    description: 'মিস কেস (Misc Case), নামজারি রিভিউ/আপিল এবং খতিয়ানের করণিক ভুল সংশোধনের আবেদন',
    icon: '⚖️',
    color: 'bg-lime-700',
    category: 'land',
    price: 400,
    deliveryTime: '২৪-৪৮ ঘণ্টা',
    officialNote: 'মিস কেস (Misc Case), নামজারি রিভিউ/আপিল এবং খতিয়ানের করণিক ভুল সংশোধনের অফিসিয়াল আবেদন।',
    fields: [
      { name: 'appeal_type', label: 'আবেদন / আপিলের ধরন', type: 'select', options: ['নামজারি রিভিউ / আপিল আবেদন', 'মিস কেস (Misc Case) আবেদন', 'খতিয়ানের করণিক ভুল সংশোধন', 'হোল্ডিং বাতিল / সংশোধন আবেদন', 'অন্যান্য ভূমি সংক্রান্ত আবেদন'], required: true },
      { name: 'district_upazila_mouza', label: 'জেলা, উপজেলা/সার্কেল ও মৌজা', type: 'text', placeholder: 'জেলা, উপজেলা ও মৌজার নাম', required: true },
      { name: 'khatian_dag_case', label: 'খতিয়ান নং, দাগ নং ও পূর্বের নামজারি কেস নম্বর', type: 'text', placeholder: 'খতিয়ান, দাগ ও মামলা নম্বর', required: true },
      { name: 'appeal_reason', label: 'আবেদন বা আপিলের বিস্তারিত কারণ ও চাহিদা', type: 'textarea', placeholder: 'কী সমস্যা বা কী সংশোধন/আপিল করতে চান তা বিস্তারিত লিখুন...', required: true },
      { name: 'applicant_nid_mobile', label: 'আবেদনকারীর নাম, NID ও মোবাইল নম্বর', type: 'text', placeholder: 'নাম, NID ও মোবাইল নম্বর', required: true },
      { name: 'supporting_doc', label: 'প্রমাণক কাগজপত্র (খতিয়ান/দলিল/আদেশের কপি)', type: 'file', required: true }
    ]
  },
  {
    id: 'land-online-application',
    title: 'অনলাইনে ভূমি সেবা আবেদন',
    titleEn: 'Online Land Service Application',
    description: 'নাগরিক ভূমি পোর্টাল রেজিস্ট্রেশন, নতুন হোল্ডিং এন্ট্রি ও যেকোনো অনলাইন ভূমি সেবা আবেদন',
    icon: '🌐',
    color: 'bg-emerald-600',
    category: 'land',
    price: 150,
    popular: true,
    deliveryTime: '২-১২ ঘণ্টা',
    officialNote: 'নাগরিক ভূমি পোর্টাল নিবন্ধন, নতুন হোল্ডিং ওপেন, খতিয়ান যুক্তকরণসহ যেকোনো অনলাইন ভূমি সেবা।',
    fields: [
      { name: 'online_service_type', label: 'প্রয়োজনীয় অনলাইন ভূমি সেবার নাম', type: 'select', options: ['নতুন অনলাইন হোল্ডিং এন্ট্রি', 'নাগরিক ভূমি প্রোফাইল খোলা ও NID ভেরিফিকেশন', 'প্রোফাইলে খতিয়ান যুক্তকরণ', 'অন্যান্য অনলাইন ভূমি সেবা'], required: true },
      { name: 'applicant_name_dob', label: 'আবেদনকারীর নাম ও জন্ম তারিখ (NID অনুযায়ী)', type: 'text', placeholder: 'পূর্ণ নাম ও জন্ম তারিখ (DD/MM/YYYY)', required: true },
      { name: 'applicant_nid_mobile', label: 'আবেদনকারীর NID নম্বর ও সচল মোবাইল নম্বর', type: 'text', placeholder: 'NID নম্বর ও মোবাইল নম্বর', required: true },
      { name: 'land_details', label: 'জমির পূর্ণ বিবরণ (জেলা, উপজেলা, মৌজা, খতিয়ান ও দাগ নং)', type: 'textarea', placeholder: 'জেলা, উপজেলা, মৌজা, খতিয়ান নম্বর, দাগ নম্বর ও জমির পরিমাণ লিখুন', required: true },
      { name: 'khatian_nid_doc', label: 'খতিয়ান/পর্চা এবং NID কার্ডের কপি আপলোড', type: 'file', required: true }
    ]
  },

  // ─────────────────────────────────────────────
  // 🎓 শিক্ষা সেবা
  // ─────────────────────────────────────────────
  { id: 'ssc-certificate', title: 'SSC সনদ', titleEn: 'SSC Certificate', description: 'SSC/দাখিল সনদের সত্যায়িত কপি', icon: '🎓', color: 'bg-purple-600', category: 'education', price: 200, inputLabel: 'রোল নাম্বার ও বোর্ড', inputPlaceholder: 'রোল নাম্বার / পাসের সাল / বোর্ড দিন' },
  { id: 'hsc-certificate', title: 'HSC সনদ', titleEn: 'HSC Certificate', description: 'HSC/আলিম সনদের সত্যায়িত কপি', icon: '📚', color: 'bg-purple-700', category: 'education', price: 200, inputLabel: 'রোল নাম্বার ও বোর্ড', inputPlaceholder: 'রোল নাম্বার / পাসের সাল / বোর্ড দিন' },
  { id: 'marksheet', title: 'মার্কশিট', titleEn: 'Mark Sheet', description: 'SSC/HSC মার্কশিটের কপি', icon: '📊', color: 'bg-violet-600', category: 'education', price: 150, inputLabel: 'রোল নাম্বার ও পরীক্ষার নাম', inputPlaceholder: 'রোল নাম্বার / পাসের সাল / পরীক্ষার নাম' },


  // ─────────────────────────────────────────────
  // 🔓 Y-Lock সেবা (category: 'ylock')
  // ─────────────────────────────────────────────
  {
    id: 'nid-y-lock-unlock',
    title: 'NID একাউন্ট Y-Lock আনলক',
    titleEn: 'NID Account Y-Lock Unlock',
    description: 'NID সার্ভার একাউন্ট লক বা Y-Lock দ্রুত আনলক করার অফিসিয়াল সেবা',
    icon: '🔓',
    color: 'bg-rose-600',
    category: 'ylock',
    price: 750,
    popular: true,
    deliveryTime: '১-৬ ঘণ্টা',
    officialNote: 'NID সার্ভার একাউন্ট Y-Lock আনলক করার জন্য নিচের সঠিক তথ্য প্রদান করুন।',
    fields: [
      { name: 'nid_or_form_no', label: 'NID নম্বর / ভোটার ফরম নম্বর', type: 'text', placeholder: '১০/১৩/১৭ ডিজিটের NID অথবা ফরম নম্বর দিন', required: true },
      { name: 'dob', label: 'জন্ম তারিখ (DD/MM/YYYY)', type: 'text', placeholder: 'যেমন: 15/08/1996', required: true },
      { name: 'applicant_name_parents', label: 'আবেদনকারীর পূর্ণ নাম ও পিতা/মাতার নাম', type: 'text', placeholder: 'নিজের নাম, পিতার নাম ও মাতার নাম', required: true },
      { name: 'district_upazila', label: 'স্থায়ী ঠিকানা (জেলা ও উপজেলা)', type: 'text', placeholder: 'জেলা ও উপজেলার নাম লিখুন', required: true },
      { name: 'active_mobile', label: 'সচল মোবাইল নম্বর', type: 'text', placeholder: '01XXXXXXXXX', required: true },
      { name: 'lock_screenshot', label: 'লক সমস্যার স্ক্রিনশট বা NID কপি (যদি থাকে)', type: 'file', required: false }
    ]
  },
  {
    id: 'nid-face-lock-unlock',
    title: 'NID ফেস ভেরিফিকেশন লক আনলক',
    titleEn: 'NID Face Verification Lock Unlock',
    description: 'একাধিকবার ভুল চেষ্টা করার ফলে লক হওয়া NID ফেস ভেরিফিকেশন আনলক সেবা',
    icon: '👤',
    color: 'bg-purple-600',
    category: 'ylock',
    price: 750,
    popular: true,
    deliveryTime: '১-৬ ঘণ্টা',
    officialNote: 'NID ফেস ভেরিফিকেশন লক (Face Lock) আনলক করার জন্য নিচের তথ্য পূরণ করুন।',
    fields: [
      { name: 'nid_no', label: 'NID নম্বর', type: 'text', placeholder: '১০/১৩/১৭ ডিজিটের NID নম্বর দিন', required: true },
      { name: 'dob', label: 'জন্ম তারিখ (DD/MM/YYYY)', type: 'text', placeholder: 'যেমন: 01/01/1995', required: true },
      { name: 'full_name', label: 'আবেদনকারীর পূর্ণ নাম', type: 'text', placeholder: 'NID অনুযায়ী পূর্ণ নাম', required: true },
      { name: 'mobile_no', label: 'রেজিস্টার্ড / সচল মোবাইল নম্বর', type: 'text', placeholder: '01XXXXXXXXX', required: true }
    ]
  },
  {
    id: 'nid-otp-mobile-lock-unlock',
    title: 'NID ওটিপি (OTP) ও মোবাইল লক আনলক',
    titleEn: 'NID OTP & Mobile Lock Remove',
    description: 'NID একাউন্টের ওটিপি ব্লক বা মোবাইল নম্বর পরিবর্তনজনিত লক আনলক সেবা',
    icon: '📲',
    color: 'bg-indigo-600',
    category: 'ylock',
    price: 750,
    deliveryTime: '১-৪ ঘণ্টা',
    officialNote: 'NID ওটিপি লক আনলক বা নতুন মোবাইল নম্বর যুক্ত করার জন্য তথ্য দিন।',
    fields: [
      { name: 'nid_no', label: 'NID নম্বর ও জন্ম তারিখ', type: 'text', placeholder: 'NID নম্বর ও জন্ম তারিখ (DD/MM/YYYY)', required: true },
      { name: 'old_and_new_mobile', label: 'আগের মোবাইল নম্বর (জানা থাকলে) ও নতুন সচল মোবাইল নম্বর', type: 'text', placeholder: 'নতুন মোবাইল নম্বর: 01XXXXXXXXX', required: true },
      { name: 'applicant_name', label: 'আবেদনকারীর নাম ও পিতার নাম', type: 'text', placeholder: 'নাম ও পিতার নাম লিখুন', required: true }
    ]
  },
  {
    id: 'device-imei-y-lock-unlock',
    title: 'ডিভাইস / মোবাইল Y-Lock আনলক',
    titleEn: 'Device / IMEI Y-Lock Unlock',
    description: 'মোবাইল ফোনের IMEI / কিস্তি লক / ডিভাইস Y-Lock অফিসিয়াল আনলক সেবা',
    icon: '📱',
    color: 'bg-teal-600',
    category: 'ylock',
    price: 750,
    popular: true,
    deliveryTime: '২-১২ ঘণ্টা',
    officialNote: 'মোবাইল ডিভাইসের Y-Lock বা MDM Lock আনলক করতে ১৫ সংখ্যার সঠিক IMEI নম্বর দিন।',
    fields: [
      { name: 'imei_number', label: 'মোবাইলের ১৫ সংখ্যার IMEI নম্বর (*#06# ডায়াল করে দেখুন)', type: 'text', placeholder: '১৫ ডিজিটের IMEI 1 এবং IMEI 2 নম্বর দিন', required: true },
      { name: 'device_brand_model', label: 'ফোনের ব্র্যান্ড ও মডেলের নাম', type: 'text', placeholder: 'যেমন: Vivo Y17s / Oppo / Samsung / Realme', required: true },
      { name: 'customer_mobile', label: 'যোগাযোগের সচল মোবাইল নম্বর', type: 'text', placeholder: '01XXXXXXXXX', required: true },
      { name: 'lock_screen_photo', label: 'লক স্ক্রিনের ছবি আপলোড (যদি থাকে)', type: 'file', required: false }
    ]
  },

  // ─────────────────────────────────────────────
  // 🔧 অন্যান্য সেবা
  // ─────────────────────────────────────────────
  { id: 'make-cv', title: 'CV তৈরি', titleEn: 'Make CV', description: 'পেশাদার CV তৈরি করুন', icon: '📃', color: 'bg-violet-500', category: 'other', price: 50, inputLabel: 'নাম ও তথ্য', inputPlaceholder: 'আপনার নাম / পেশা / যোগাযোগ নাম্বার দিন' },
  { id: 'voter-list', title: 'ভোটার লিস্ট', titleEn: 'Voter List', description: 'ভোটার তালিকা ডাউনলোড', icon: '🗳️', color: 'bg-emerald-600', category: 'other', price: 30, inputLabel: 'এলাকার নাম ও ঠিকানা', inputPlaceholder: 'ইউনিয়ন / ওয়ার্ড / উপজেলা দিন' },
  { id: 'electric-bill', title: 'বিদ্যুৎ বিল', titleEn: 'Electric Bill', description: 'বিদ্যুৎ বিলের তথ্য ও পেমেন্ট', icon: '⚡', color: 'bg-yellow-400', category: 'other', price: 20, inputLabel: 'মিটার নাম্বার', inputPlaceholder: 'বিদ্যুৎ মিটার নাম্বার দিন' },
  { id: 'water-bill', title: 'পানি বিল', titleEn: 'Water Bill', description: 'ওয়াসা পানি বিলের তথ্য', icon: '💧', color: 'bg-blue-400', category: 'other', price: 20, inputLabel: 'একাউন্ট নাম্বার', inputPlaceholder: 'ওয়াসা একাউন্ট নাম্বার দিন' },
  { id: 'gas-bill', title: 'গ্যাস বিল', titleEn: 'Gas Bill', description: 'তিতাস/বাখরাবাদ গ্যাস বিল', icon: '🔥', color: 'bg-orange-400', category: 'other', price: 20, inputLabel: 'গ্যাস একাউন্ট নাম্বার', inputPlaceholder: 'গ্যাস একাউন্ট নাম্বার দিন' },
  { id: 'marriage-cert', title: 'বিবাহ সনদ', titleEn: 'Marriage Certificate', description: 'কাবিননামা ও বিবাহ নিবন্ধন', icon: '💍', color: 'bg-rose-500', category: 'other', price: 300, inputLabel: 'নাম ও বিবাহের তারিখ', inputPlaceholder: 'বর/কনের নাম / বিবাহের তারিখ দিন' },
]

export const categories = [
  { id: 'all', label: 'সকল সেবা', icon: '⚡' },
  { id: 'nid', label: 'NID সেবা', icon: '🪪' },
  { id: 'birth', label: 'জন্ম নিবন্ধন', icon: '📋' },
  { id: 'suborno', label: 'সুবর্ণ কার্ড', icon: '♿' },
  { id: 'tax', label: 'TIN/ট্যাক্স', icon: '📄' },
  { id: 'mobile', label: 'মোবাইল সেবা', icon: '📱' },
  { id: 'location', label: 'লোকেশন', icon: '📍' },
  { id: 'cert', label: 'সনদপত্র', icon: '📜' },
  { id: 'land', label: 'ভূমি সেবা', icon: '🏡' },
  { id: 'education', label: 'শিক্ষা', icon: '🎓' },
  { id: 'trade', label: 'ট্রেড/ব্যবসা', icon: '🏪' },
  { id: 'ylock', label: 'Y-Lock সেবা', icon: '🔓' },
  { id: 'other', label: 'অন্যান্য', icon: '🔧' },
]

export const stats = [
  { label: 'মোট সেবা সংখ্যা', value: '৬২', icon: '⚡' },
  { label: 'মোট ব্যবহারকারী', value: '৩,৩৯,৯৭১', icon: '👥' },
  { label: 'মোট উদ্যোক্তা', value: '৭,৬২৯', icon: '👤' },
  { label: 'মোট সেন্টার', value: '৩২৯', icon: '🏢' },
]