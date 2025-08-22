export interface TermsSection {
  readonly id: string;
  readonly title: string;
  readonly content: string | readonly string[];
  readonly type: 'text' | 'list' | 'table' | 'contact' | 'definition';
}

export interface TermsConditionsData {
  readonly title: string;
  readonly lastUpdated: string;
  readonly sections: readonly TermsSection[];
}

export const TERMS_CONDITIONS_DATA: TermsConditionsData = {
  title: 'Terms & Conditions',
  lastUpdated: 'February 10, 2025',
  sections: [
    {
      id: 'introduction',
      title: 'Terms and Conditions of the Site',
      content: 'Welcome to www.xpel.com (the "Site"). BY USING THIS SITE, YOU REPRESENT THAT YOU ARE AN ADULT UNDER THE APPLICABLE LAW OF YOUR COUNTRY, HAVE THE LEGAL CAPACITY TO ENTER A CONTRACT, AND AGREE TO COMPLY WITH AND BE BOUND BY THE FOLLOWING TERMS AND CONDITIONS OF USE ("TERMS"). PLEASE REVIEW THESE TERMS CAREFULLY. IF YOU DO NOT AGREE TO THESE TERMS, YOU ARE NOT AUTHORIZED TO USE THIS SITE.',
      type: 'text'
    },
    {
      id: 'governance',
      title: 'Governance',
      content: [
        'These Terms govern:',
        '• the use of the Site;',
        '• and any other related Agreement or legal relationship with the Owner',
        'in a legally binding way. Capitalized words are defined in the relevant dedicated section of these Terms.',
        'The User must read these Terms carefully.'
      ],
      type: 'list'
    },
    {
      id: 'site-provider',
      title: 'Site Provider',
      content: [
        'The Site is provided by:',
        '**XPEL, Inc.**',
        '711 Broadway Street, Suite 320',
        'San Antonio, Texas 78215',
        'United States',
        '**Owner Contact E-mail:** [legal@xpel.com](mailto:legal@xpel.com)'
      ],
      type: 'contact'
    },
    {
      id: 'user-knowledge',
      title: 'What the User Should Know at a Glance',
      content: [
        '• The right of withdrawal only applies to European Consumers. The right of withdrawal, also commonly called the right of cancellation in the UK, is consistently referred to as "the right of withdrawal" within these Terms.',
        '• Please note that some provisions in these Terms may only apply to certain categories of Users. In particular, certain provisions may only apply to Consumers or to those Users that do not qualify as Consumers. Such limitations are always explicitly mentioned within each affected clause. In the absence of any such mention, clauses apply to all Users.'
      ],
      type: 'list'
    },
    {
      id: 'terms-of-use',
      title: 'TERMS OF USE',
      content: [
        'Unless otherwise specified, the terms of use detailed in this section apply generally when using the Site.',
        'Single or additional conditions of use or access may apply in specific scenarios and in such cases are additionally indicated within these Terms.',
        'By using the Site, Users confirm to meet the following requirements:',
        'There are no restrictions for Users in terms of being Consumers or Business Users.'
      ],
      type: 'list'
    },
    {
      id: 'account-registration',
      title: 'Account Registration',
      content: [
        '• To use the Service, Users may register or create a User account, providing all required data or information in a complete and truthful manner.',
        '• Users may also access the Service without registering or creating a User account; however, this may cause limited availability of certain features or functions on the Site.',
        '• Users are responsible for maintaining the confidentiality and security of their login credentials. For this reason, Users are required to choose passwords that meet the highest standards of strength permitted by the Site.',
        '• By registering on the Site, Users agree to be fully responsible for all activities conducted under their User account.',
        '• If Users suspect that their personal information—including, but not limited to, their User account, access credentials, or other personal data—has been compromised, disclosed without authorization or stolen, they must immediately and unambiguously notify the Owner using the contact details provided in these Terms.'
      ],
      type: 'list'
    },
    {
      id: 'account-termination',
      title: 'Account Termination',
      content: 'Users can terminate their User account and stop using the Service at any time by directly contacting the Owner at the contact details provided in these Terms.',
      type: 'text'
    },
    {
      id: 'account-suspension',
      title: 'Account Suspension and Deletion',
      content: [
        '• The Owner reserves the right, at its sole discretion, to suspend or delete at any time and without notice, User accounts which it deems inappropriate, offensive or in violation of these Terms.',
        '• The suspension or deletion of User accounts shall not entitle Users to any claims for compensation, damages or reimbursement.',
        '• The suspension or deletion of User accounts due to causes attributable to the User does not exempt the User from paying any applicable fees or prices.'
      ],
      type: 'list'
    },
    {
      id: 'cookies',
      title: 'Cookies',
      content: 'We employ the use of cookies. By using the Site, User consents to the use of cookies in accordance with XPEL\'s Data Privacy Notice and Cookie Policy.',
      type: 'text'
    },
    {
      id: 'no-interruption',
      title: 'No Interruption',
      content: 'You agree not to interrupt or attempt to interrupt the operation of the Site in any way.',
      type: 'text'
    },
    {
      id: 'content-ownership',
      title: 'Content on the Site',
      content: [
        '• Unless where otherwise specified or clearly recognizable, all content available on the Site is owned or provided by the Owner or its licensors.',
        '• The Owner undertakes its utmost effort to ensure that the content provided on the Site infringes no applicable legal provisions or third-party rights. However, it may not always be possible to achieve such a result.',
        '• In such cases, without prejudice to any legal prerogatives of Users to enforce their rights, Users are kindly asked to preferably report related complaints using the contact details provided in these Terms.'
      ],
      type: 'list'
    },
    {
      id: 'rights-reserved',
      title: 'Rights Regarding Content on the Site – All Rights Reserved',
      content: [
        'The Owner holds and reserves all intellectual property rights for any content provided on the Site.',
        'Users may not use such content in any way that is not necessary or implicit for the proper use of the Service.',
        'In particular, but without limitation, Users may not copy, download, share (except as permitted below), modify, translate, transform, publish, transmit, sell, sublicense, edit, transfer or assign to third parties, or create derivative works from the content available on the Site, nor allow any third party to do so through their User account or device, even without the User\'s knowledge.',
        'Where explicitly stated on the Site, the User may download, copy and/or share certain content available through the Site for personal, non-commercial use, provided that the copyright attributions and any other requirements specified by the Owner are properly implemented.',
        'Any applicable statutory limitations or exceptions to copyright shall remain unaffected.'
      ],
      type: 'list'
    },
    {
      id: 'external-resources',
      title: 'Access to External Resources',
      content: [
        'Through the Site, Users may access certain external resources provided by third parties. Users acknowledge and accept that the Owner has no control over such resources and is not responsible for their content and availability.',
        'The terms and conditions governing third-party resources, including any rights granted in their content, are determined by the respective third parties. In the absence of such terms and conditions, applicable statutory law shall apply.'
      ],
      type: 'list'
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use',
      content: [
        'The Site and the Service may only be used within the scope of what they are provided for, under these Terms and applicable law.',
        'Users are solely responsible for ensuring that their use of the Site and/or the Service does not violate any applicable laws, regulations or third-party rights.',
        'Accordingly, the Owner reserves the right to take appropriate measures to protect its legitimate interests. This includes denying Users access to the Site or Service, terminating contracts, and reporting any misconduct to the relevant judicial or administrative authorities. Such actions may be taken if Users engage in or are suspected of engaging in any of the following activities:',
        '• Violating laws, regulations, or these Terms;',
        '• Infringing on third-party rights;',
        '• Causing significant harm to the Owner\'s legitimate interests; or',
        '• Offending the Owner or any third party.'
      ],
      type: 'list'
    },
    {
      id: 'can-spam',
      title: 'CAN-SPAM, Telephone Consumer Protection Act and Similar Laws',
      content: 'Your use of the Site establishes a business or other applicable relationship with Owner for purposes of CAN-SPAM, the Telephone Consumer Protection Act, and all other applicable laws that address unsolicited commercial communications. By accessing, or continuing to access, the Site, You agree that Owner or its agents may call, e-mail, or otherwise communicate with You regarding promotion of the sale, lease, or exchange of Products, Services, or other offerings.',
      type: 'text'
    },
    {
      id: 'changes-to-terms',
      title: 'Changes to These Terms',
      content: [
        'The Owner reserves the right to amend or otherwise modify these Terms at any time. In such cases, the Owner will appropriately inform the User of such changes.',
        'Any changes to these Terms will only apply to the relationship between the Owner and the User going forward.',
        'The continued use of the Service will signify the User\'s acceptance of the revised Terms. If Users do not wish to be bound by the changes, they must cease using the Service. Failure to accept the revised Terms, may entitle either party to terminate the Agreement.',
        'The applicable previous version of the Terms will govern the relationship prior to the User\'s acceptance. Upon request, the User can obtain any previous version from the Owner.',
        'If required by applicable law, the Owner will specify the date by which the revised Terms will take effect.'
      ],
      type: 'list'
    },
    {
      id: 'assignment',
      title: 'Assignment of Contract',
      content: [
        'The Owner reserves the right to transfer, assign, dispose of by novation, or subcontract any or all rights or obligations under these Terms, taking the User\'s legitimate interests into account. Provisions regarding changes in these Terms will apply in such cases.',
        'Users may not assign or transfer their rights or obligations under these Terms without the prior written consent of the Owner.'
      ],
      type: 'list'
    },
    {
      id: 'contacts',
      title: 'Contacts',
      content: 'All communications relating to the use of the Site must be sent using the contact details provided in these Terms.',
      type: 'text'
    },
    {
      id: 'severability',
      title: 'Severability',
      content: 'If any provision of these Terms is found to be invalid or unenforceable under applicable law, the invalidity or unenforceability of that provision will not affect the validity of the remaining provisions, which will continue in full force and effect.',
      type: 'text'
    },
    {
      id: 'us-users',
      title: 'US Users',
      content: [
        'Any provision that is invalid or unenforceable will be interpreted, construed and reformed to the extent reasonably required to render it valid, enforceable and consistent with its original intent.',
        'These Terms constitute the entire Agreement between Users and the Owner with respect to the subject matter hereof, and supersede all other communications, including but not limited to all prior agreements, between the parties with respect to such subject matter.',
        'These Terms will be enforced to the fullest extent permitted by law.'
      ],
      type: 'list'
    },
    {
      id: 'eu-users',
      title: 'EU Users',
      content: [
        'Should any provision of these Terms be or be deemed void, invalid or unenforceable, the parties shall do their best to find, in an amicable way, an agreement on valid and enforceable provisions thereby substituting the void, invalid or unenforceable parts.',
        'In case of failure to do so, the void, invalid or unenforceable provisions shall be replaced by the applicable statutory provisions, if so permitted or stated under the applicable law.',
        'Without prejudice to the above, the nullity, invalidity or the impossibility to enforce a particular provision of these Terms shall not nullify the entire Agreement, unless the severed provisions are essential to the Agreement, or of such importance that the parties would not have entered into the contract if they had known that the provision would not be valid, or in cases where the remaining provisions would translate into an unacceptable hardship on any of the parties.'
      ],
      type: 'list'
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      content: [
        'Texas law, without regard to conflicts of laws principles, shall exclusively govern Owner\'s sale of Products to User. The United Nations Convention on Contracts for the International Sales of Goods does not apply.',
        'The state or federal court located within Bexar County, Texas shall be the sole and exclusive jurisdiction and venue for any litigation between User and Owner. User agrees to submit to the jurisdiction of such court in the event of any litigation.'
      ],
      type: 'list'
    },
    {
      id: 'european-exception',
      title: 'Exception for European Consumers',
      content: [
        'However, regardless of the above, if the User qualifies as a European Consumer and has their habitual residence in a country where the law provides for a higher consumer protection standard, such higher standards shall prevail.',
        'The above does not apply to any Users that qualify as European Consumers, nor to Consumers based in Switzerland, Norway or Iceland.'
      ],
      type: 'list'
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      content: [
        '**American Arbitration Association**',
        'ANY DISPUTE ARISING OUT OF OR RELATED TO YOUR USE OF, OR ASSOCIATION WITH, THE SITE WILL BE SETTLED SOLELY BY BINDING ARBITRATION IN ACCORDANCE WITH THE COMMERCIAL DISPUTE RESOLUTION PROCEDURES AND THE SUPPLEMENTARY PROCEDURES FOR CONSUMER-RELATED DISPUTES OF THE AMERICAN ARBITRATION ASSOCIATION. THE PLACE OF ARBITRATION WILL BE THE STATE OF TEXAS. THE ARBITRATION WILL BE CONDUCTED IN ENGLISH. ANY AWARD BY THE ARBITRATION PANEL MAY BE ENTERED IN, AND ENFORCED BY, ANY COURT OF COMPETENT JURISDICTION.',
        'Solely in the case where, and only to the extent that, arbitration is not allowed by law or in the case where either party requires equitable remedies not available through arbitration, any suit or other action arising out of, or in any way connected with, your use of the Site may be brought only in the appropriate federal or state courts in the State of Texas. You irrevocably consent to the jurisdiction and venue of such courts.'
      ],
      type: 'list'
    },
    {
      id: 'eu-dispute-resolution',
      title: 'Online Dispute Resolution for EU Consumers',
      content: [
        'The European Commission has established an online platform for alternative dispute resolutions that facilitates an out-of-court method for solving any dispute related to and stemming from online sale and service contracts.',
        'As a result, any European Consumer can use such platform for resolving any dispute stemming from contracts which have been entered into online. The platform is available at the following link.'
      ],
      type: 'list'
    },
    {
      id: 'definitions',
      title: 'Definitions and Legal References',
      content: [
        '**The Site** - The property that enables the provision of the Service.',
        '**Agreement** - Any legally binding or contractual relationship between the Owner and the User, governed by these Terms.',
        '**Business User** - Any User that does not qualify as a Consumer.',
        '**European (or Europe)** - Applies where a User is physically present or has their registered offices within the EU, regardless of nationality.',
        '**Owner** - Indicates the natural person(s) or legal entity that provides the Site and/or the Service to Users.',
        '**Product** - A good or service available for purchase through the Site, such as films, ceramic coatings, tools, lifestyle apparels, tools, digital files, software, booking services, etc.',
        '**Service** - The service provided by the Site as described in these Terms and on the Site.',
        '**Terms** - All provisions applicable to the use of the Site and/or the Service as described in these Terms, including any other related documents or agreements, and as updated from time to time.',
        '**User (or You)** - Indicates any natural person or legal entity using the Site.',
        '**Consumer** - Any User qualifying as a natural person who accesses Products or Services for personal use, or more generally, acts for purposes outside their trade, business, craft or profession.'
      ],
      type: 'definition'
    }
  ]
}; 