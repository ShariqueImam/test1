import React from "react";

const PrivacyContent = () => {
  const style = {
    wrapper:
      "w-[95%] md:w-[65%] lg:w-[50%] mx-auto font text-neutral-600 py-5 md:py-12",
    mainHeading: "font-bold text-2xl md:text-3xl lg:text-4xl my-4 md:my-5 mainHeading",
    heading: "font-bold text-xl md:text-2xl lg:text-2xl my-3 md:my-4 heading",
    para: "font-normal text-sm md:text-md lg:text-lg my-3 md:my-4",
    list: "list-disc font-normal text-sm md:text-md lg:text-lg my-3 md:my-4",
  };
  return (
    <div className={style.wrapper}>
      <p className={style.para}>
        Odilah Tech (“we” or “us” or “our”) respects the privacy of our users
        (“user” or “you”). This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you visit our website:
        www.odilah.com, including any other media form, media channel, mobile
        website, or mobile application related or connected thereto
        (collectively, the “Site”). Please read this privacy policy carefully.
        If you do not agree with the terms of this privacy policy, please do not
        access the site.
      </p>
      <p className={style.para}>
        We reserve the right to make changes to this Privacy Policy at any time
        and for any reason. We will alert you about any changes by updating the
        “Last Updated” date of this Privacy Policy. Any changes or modifications
        will be effective immediately upon posting the updated Privacy Policy on
        the Site, and you waive the right to receive specific notice of each
        such change or modification.{" "}
      </p>
      <p className={style.para}>
        You are encouraged to periodically review this Privacy Policy to stay
        informed of updates. You will be deemed to have been made aware of, will
        be subject to, and will be deemed to have accepted the changes in any
        revised Privacy Policy by your continued use of the Site after the date
        such revised Privacy Policy is posted.
      </p>
      <p className={style.mainHeading}>COLLECTION OF YOUR INFORMATION</p>
      <p className={style.heading}>Personal Data</p>
      <p className={style.para}>
        Personally identifiable information, such as your name, shipping
        address, email address, telephone number, and demographic information,
        that you voluntarily give to us or when you choose to participate in
        various activities related to the Site, such as online chat and message
        boards. You are under no obligation to provide us with personal
        information of any kind, however, your refusal to do so may prevent you
        from using certain features of the Site.
      </p>
      <p className={style.heading}>Derivative Data</p>
      <p className={style.para}>
        The information our servers automatically collect when you access the
        Site, such as your IP address, your browser type, your operating system,
        your access times, and the pages you have viewed directly before and
        after accessing the Site.
      </p>
      <p className={style.heading}>Financial Data</p>
      <p className={style.para}>
        Financial information, such as data related to your payment method (e.g.
        valid credit card number, card brand, expiration date) that we may
        collect when you purchase, order, return, exchange, or request
        information about our services from the. We store only very limited, if
        any, financial information that we collect. Otherwise, all financial
        information is stored by our payment processor, [Paypal,], [Stripe,] etc
        and you are encouraged to review their privacy policy and contact them
        directly for responses to your questions.
      </p>
      <p className={style.heading}>Data From Social Networks</p>
      <p className={style.para}>
        User information from social networking sites, including your name, your
        social network username, location, gender, birth date, email address,
        profile picture, and public data for contacts, if you connect your
        account to such social networks.
      </p>{" "}
      <p className={style.mainHeading}>USE OF YOUR INFORMATION</p>
      <p className={style.para}>
        Having accurate information about you permits us to provide you with a
        smooth, efficient, and customized experience. Specifically, we may use
        information collected about you via the Site [or our mobile application]
        to:{" "}
      </p>
      <li className={style.list}>
        Create and manage your account and email you regarding your account or
        order.
      </li>
      <li className={style.list}>
        Deliver targeted advertising, coupons, newsletters, and other
        information regarding promotions and the Site to you.
      </li>
      <li className={style.list}>Enable user-to-user communications.</li>
      <li className={style.list}>
        Fulfill and manage purchases, orders, payments, and other transactions
        related to the Site.
      </li>
      <li className={style.list}>
        Generate a personal profile about you to make future visits to the Site
        more personalized.
      </li>
      <li className={style.list}>
        Increase the efficiency and operation of the Site.
      </li>
      <li className={style.list}>
        Monitor and analyze usage and trends to improve your experience with the
        Site.
      </li>
      <li className={style.list}>Notify you of updates to the Site.</li>
      <li className={style.list}>
        Offer new products, services and/or recommendations to you.
      </li>
      <li className={style.list}>
        Perform other business activities as needed.
      </li>
      <li className={style.list}>Process payments and refunds.</li>
      <p className={style.mainHeading}>DISCLOSURE OF YOUR INFORMATION</p>{" "}
      <p className={style.para}>
        We may share information we have collected about you in certain
        situations. Your information may be disclosed as follows:
      </p>
      <p className={style.heading}>By Law or to Protect Rights</p>
      <p className={style.para}>
        If we believe the release of information about you is necessary to
        respond to legal process, to investigate or remedy potential violations
        of our policies, or to protect the rights, property, and safety of
        others, we may share your information as permitted or required by any
        applicable law, rule, or regulation. This includes exchanging
        information with other entities for fraud protection and credit risk
        reduction.
      </p>
      <p className={style.heading}>Third-Party Service Providers</p>
      <p className={style.para}>
        We may share your information with third parties that perform services
        for us or on our behalf, including payment processing, data analysis,
        email delivery, hosting services, customer service, and marketing
        assistance.
      </p>
      <p className={style.heading}>Marketing Communications</p>
      <p className={style.para}>
        With your consent, or with an opportunity for you to withdraw consent,
        we may share your information with third parties for marketing purposes,
        as permitted by law.
      </p>
      <p className={style.heading}>Interactions with Other Users</p>
      <p className={style.para}>
        If you interact with other users of the Site, those users may see your
        name, profile photo, and descriptions of your activity, including
        sending invitations to other users, chatting with other users, liking
        posts, following blogs.
      </p>
      <p className={style.heading}>Third-Party Advertisers</p>
      <p className={style.para}>
        We may use third-party advertising companies to serve ads when you visit
        the Site [or our mobile application]. These companies may use
        information about your visits to the Site and other websites that are
        contained in web cookies in order to provide advertisements about goods
        and services of interest to you.
      </p>
      <p className={style.heading}>Affiliates</p>
      <p className={style.para}>
        We may share your information with our affiliates, in which case we will
        require those affiliates to honor this Privacy Policy. Affiliates
        include our parent company and any subsidiaries, joint venture partners
        or other companies that we control or that are under common control with
        us.
      </p>
      <p className={style.heading}>Business Partners</p>
      <p className={style.para}>
        We may share your information with our business partners to offer you
        certain products, services or promotions.
      </p>
      <p className={style.heading}>Sale or Bankruptcy</p>
      <p className={style.para}>
        If we reorganize or sell all or a portion of our assets, undergo a
        merger, or are acquired by another entity, we may transfer your
        information to the successor entity. If we go out of business or enter
        bankruptcy, your information would be an asset transferred or acquired
        by a third party. You acknowledge that such transfers may occur and that
        the transferee may decline honor commitments we made in this Privacy
        Policy.
      </p>
      <p className={style.para}>
        We are not responsible for the actions of third parties with whom you
        share personal or sensitive data, and we have no authority to manage or
        control third-party solicitations. If you no longer wish to receive
        correspondence, emails or other communications from third parties, you
        are responsible for contacting the third party directly.
      </p>
      <p className={style.mainHeading}>TRACKING TECHNOLOGIES</p>
      <p className={style.heading}>Cookies and Web Beacons</p>
      <p className={style.para}>
        We may use cookies, web beacons, tracking pixels, and other tracking
        technologies on the Site to help customize the Site and improve your
        experience. When you access the Site, your personal information is not
        collected through the use of tracking technology. Most browsers are set
        to accept cookies by default. You can remove or reject cookies, but be
        aware that such action could affect the availability and functionality
        of the Site. You may not decline web beacons. However, they can be
        rendered ineffective by declining all cookies or by modifying your web
        browser’s settings to notify you each time a cookie is tendered,
        permitting you to accept or decline cookies on an individual basis. You
        should be aware that getting a new computer, installing a new browser,
        upgrading an existing browser, or erasing or otherwise altering your
        browser’s cookies files may also clear certain opt-out cookies,
        plug-ins, or settings.
      </p>
      <p className={style.mainHeading}>THIRD-PARTY WEBSITES</p>
      <p className={style.para}>
        The Site may contain links to third-party websites and applications of
        interest, including advertisements and external services, that are not
        affiliated with us. Once you have used these links to leave the Site,
        any information you provide to these third parties is not covered by
        this Privacy Policy, and we cannot guarantee the safety and privacy of
        your information. We are not responsible for the content or privacy and
        security practices and policies of any third parties, including other
        sites, services or applications that may be linked to or from the Site.
      </p>
      <p className={style.mainHeading}>SECURITY OF YOUR INFORMATION</p>
      <p className={style.para}>
        We use administrative, technical, and physical security measures to help
        protect your personal information. While we have taken reasonable steps
        to secure the personal information you provide to us, please be aware
        that despite our efforts, no security measures are perfect or
        impenetrable, and no method of data transmission can be guaranteed
        against any interception or other type of misuse. Any information
        disclosed online is vulnerable to interception and misuse by
        unauthorized parties. Therefore, we cannot guarantee complete security
        if you provide personal information.
      </p>
      <p className={style.mainHeading}>CONTACT US</p>
      <p className={style.para}>
        If you have questions or comments about this Privacy Policy, please
        contact us at:
      </p>
      <p className={style.para}>supporttech@odilah.com</p>
    </div>
  );
};

export default PrivacyContent;
