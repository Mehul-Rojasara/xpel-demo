export interface PrivacyPolicySection {
  id: string;
  title: string;
  content: string | string[];
  type: 'text' | 'list' | 'table' | 'contact';
}

export interface PrivacyPolicyData {
  title: string;
  lastUpdated: string;
  sections: PrivacyPolicySection[];
}

export const PRIVACY_POLICY_DATA: PrivacyPolicyData = {
  title: 'Privacy Policy',
  lastUpdated: '28 June 2024',
  sections: [
    {
      id: 'introduction',
      title: 'Privacy Policy for XPEL, Inc.',
      content: 'At XPEL, accessible from www.xpel.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by XPEL and how we use it.',
      type: 'text'
    },
    {
      id: 'overview',
      title: 'Overview',
      content: 'This privacy policy gives you information about how XPEL collects and uses your personal data through your use of this website, including any data you may provide when you register with us, sign up to our newsletter or purchase a product or service.',
      type: 'text'
    },
    {
      id: 'children-notice',
      title: 'Children\'s Information',
      content: 'This website is not intended for children, and we do not knowingly collect data relating to children.',
      type: 'text'
    },
    {
      id: 'contact-info',
      title: 'Contact Information',
      content: 'If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.',
      type: 'text'
    },
    {
      id: 'gdpr',
      title: 'General Data Protection Regulation (GDPR)',
      content: [
        'We are a Data Controller of your information.',
        'XPEL, Inc. will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.'
      ],
      type: 'list'
    },
    {
      id: 'personal-data-types',
      title: 'The types of personal data we collect about you',
      content: [
        '**Identity Data** includes first name, last name, any previous names, username or similar identifier, marital status, title, date of birth and gender.',
        '**Contact Data** includes billing address, delivery address, email address and telephone numbers.',
        '**Financial Data** includes bank account and payment card details.',
        '**Transaction Data** includes details about payments to and from you and other details of products and services you have purchased from us.',
        '**Technical Data** includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, device ID and other technology on the devices you use to access this website.',
        '**Profile Data** includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.',
        '**Usage Data** includes information about how you interact with and use our website, products and services.',
        '**Marketing and Communications Data** includes your preferences in receiving marketing from us and our third parties and your communication preferences.'
      ],
      type: 'list'
    },
    {
      id: 'data-collection-methods',
      title: 'How is your personal data collected?',
      content: [
        '**Your interactions with us.** You may give us your personal data by filling in online forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you:',
        '1. apply for our products or services;',
        '2. create an account on our website;',
        '3. subscribe to our service or publications;',
        '4. request marketing to be sent to you;',
        '5. enter a competition, promotion or survey; or',
        '6. give us feedback or contact us',
        '**Automated technologies** or interactions. As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies and other similar technologies.',
        '**Third parties or publicly available sources.** We will receive personal data about you from various third parties and public sources.'
      ],
      type: 'list'
    },
    {
      id: 'legal-basis',
      title: 'Legal basis',
      content: [
        'The law requires us to have a legal basis for collecting and using your personal data. We rely on one or more of the following legal bases:',
        '**Performance of a contract with you:** Where we need to perform the contract we are about to enter into or have entered into with you.',
        '**Legitimate interests:** We may use your personal data where it is necessary to conduct our business and pursue our legitimate interests, for example to prevent fraud and enable us to give you the best and most secure customer experience.',
        '**Legal obligation:** We may use your personal data where it is necessary for compliance with a legal obligation that we are subject to.',
        '**Consent:** We rely on consent only where we have obtained your active agreement to use your personal data for a specified purpose.'
      ],
      type: 'list'
    },
    {
      id: 'data-usage-table',
      title: 'Purposes for which we will use your personal data',
      content: [
        '| Purpose/Use | Type of data | Legal basis |',
        '|-------------|---------------|-------------|',
        '| To register you as a new customer | (a) Identity (b) Contact | Performance of a contract with you |',
        '| To process and deliver your order | (a) Identity (b) Contact (c) Financial (d) Transaction (e) Marketing and Communications | (a) Performance of a contract with you (b) Necessary for our legitimate interests |',
        '| To manage our relationship with you | (a) Identity (b) Contact (c) Profile (d) Marketing and Communications | (a) Performance of a contract with you (b) Necessary to comply with a legal obligation (c) Necessary for our legitimate interests |'
      ],
      type: 'table'
    },
    {
      id: 'your-rights',
      title: 'Your rights',
      content: [
        'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:',
        'Request access to your personal data. This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.',
        'Request correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected.',
        'Request erasure of your personal data in certain circumstances. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it.',
        'Object to processing of your personal data where we are relying on a legitimate interest (or those of a third party) as the legal basis for that particular use of your data.',
        'Request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format.',
        'Withdraw consent at any time where we are relying on consent to process your personal data.',
        'Request restriction of processing of your personal data in certain scenarios.'
      ],
      type: 'list'
    },
    {
      id: 'log-files',
      title: 'Log Files',
      content: 'XPEL follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services\' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.',
      type: 'text'
    },
    {
      id: 'cookies',
      title: 'Cookies and Web Beacons',
      content: 'Like any other website, XPEL uses "cookies". These cookies are used to store information including visitors\' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users\' experience by customizing our web page content based on visitors\' browser type and/or other information.',
      type: 'text'
    },
    {
      id: 'third-party',
      title: 'Third Party Privacy Policies',
      content: 'XPEL\'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.',
      type: 'text'
    },
    {
      id: 'children-protection',
      title: 'Children\'s Information',
      content: [
        'Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.',
        'XPEL does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.'
      ],
      type: 'list'
    },
    {
      id: 'data-security',
      title: 'Data security',
      content: [
        'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.',
        'We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.'
      ],
      type: 'list'
    },
    {
      id: 'data-retention',
      title: 'Data retention',
      content: [
        'We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.',
        'To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.'
      ],
      type: 'list'
    },
    {
      id: 'sms-terms',
      title: 'SMS Terms & Conditions',
      content: [
        'Upon messaging opt-in, the end user agrees to receive messages from XPEL TECH regarding general communications and marketing. End users can opt-out by replying STOP or request more information by replying HELP. Message frequency varies. Message and data rates may apply.',
        'If you need assistance or have questions about our SMS service, reply with "HELP" to any SMS message you receive, or contact our customer support team at (833) 258-2058.',
        'No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.'
      ],
      type: 'list'
    },
    {
      id: 'contact-details',
      title: 'Contact details',
      content: [
        'If you have any questions about this privacy policy or about the use of your personal data or you want to exercise your privacy rights, please contact us in the following ways:',
        '**Email address:** [privacy@xpel.com](mailto:privacy@xpel.com)',
        '**Postal address:** 711 Broadway Street, Suite 320, San Antonio, Texas 78215',
        '**Telephone number:** (833) 258-2058'
      ],
      type: 'contact'
    },
    {
      id: 'policy-updates',
      title: 'Changes to the privacy policy and your duty to inform us of changes',
      content: [
        'We keep our privacy policy under regular review. This version was last updated on 28 June 2024.',
        'It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us, for example a new address or email address.'
      ],
      type: 'list'
    },
    {
      id: 'consent',
      title: 'Consent',
      content: 'By using our website, you hereby consent to our Privacy Policy and agree to its terms.',
      type: 'text'
    }
  ]
}; 