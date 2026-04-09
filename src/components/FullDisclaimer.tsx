import { analyst, publicSiteUrl } from "../data";

function SiteRef() {
  const url = publicSiteUrl();
  if (url) {
    return (
      <a href={url} rel="noopener noreferrer">
        {url}
      </a>
    );
  }
  return <>this website</>;
}

/**
 * Full disclaimer text aligned with common SEBI RA public sites (e.g. tradersstreet.in).
 */
export function FullDisclaimer() {
  return (
    <div className="legal-prose">
      <p>
        I, {analyst.name} (“Individual”), am registered with SEBI as an Individual
        Research Analyst vide Registration number {analyst.registrationNo} on{" "}
        {analyst.sebiRegistrationDate}, pursuant to which I provide Research
        Analyst services to my clients.
      </p>
      <p>
        I am not affiliated with any other intermediaries or receive any brokerage
        or commission from any third party.
      </p>
      <p>
        The SEBI has issued no penalties/directions under the SEBI Act or any other
        regulatory body.
      </p>
      <p>
        I do not recommend any stock broker or other intermediary to a client, nor
        do I receive any consideration by way of remuneration or compensation or in
        any other form whatsoever from the stock broker or another intermediary.
      </p>
      <p>
        Investment in equity shares has its own risks. Sincere efforts have been made
        to present the right investment perspective. The information contained herein
        is based on analysis and on sources that I consider reliable. I, however, do
        not vouch for the consistency or the completeness thereof. This material is
        for personal information and I am not responsible for any loss incurred due
        to it and take no responsibility whatsoever for any financial profits or loss
        which may arise from the recommendations above.
      </p>
      <p>
        I do not provide any promise or assurance of a favourable view for a
        particular industry or sector or business group in any manner. The investor
        is requested to take into consideration all the risk factors including their
        financial condition and suitability to risk return profile before investing.
      </p>
      <p>
        The information and views on this website and all the services I provide are
        believed to be reliable, but I do not accept any responsibility (or liability)
        for errors of fact or opinion. Users have the right to choose the product/s
        that suits them the most.
      </p>
      <p>
        I or any person related might be holding positions in the stocks recommended.
      </p>
      <p>
        The research recommendations are provided to all my clients entitled to the
        research reports. Any Client (Paid or Unpaid), any third party, or anyone else
        has no rights to forward or share my calls or SMS or reports or any
        information provided by me to/with anyone (through any medium) that is
        received directly or indirectly by them. If found so, then serious legal
        actions can be taken.
      </p>
      <p>
        I ensure that the individuals employed as research analysts are separate from
        other employees who are performing sales trading, dealing, corporate finance
        advisory, or any other activity that may affect the independence of my
        research report/recommendations. However, these individuals may receive
        feedback from sales or trading personnel of the brokerage division to
        ascertain the impact of the research report/recommendations.
      </p>
      <p>
        I ensure that if a client wants an opinion on a specific position, such
        suggestion/view under any circumstances shall be considered as an opinion
        (not advice). I am not liable for any losses whatsoever the client may incur
        in accepting this opinion.
      </p>
      <p>
        I do not have any association in any manner with any issuer of
        products/securities; this ensures that there are no actual or potential
        conflicts of interest. This also ensures that objectivity or independence in
        the carrying of research services is not compromised.
      </p>
      <p>
        Investments in the securities market are subject to market risks. Read all
        the related documents carefully before investing.
      </p>
      <p>
        Registration granted by SEBI and certification from NISM is in no way a
        guarantee of the performance of the intermediary or provide any assurance of
        returns to investors.
      </p>
      <p>
        By accessing <SiteRef /> or any of its associate/group sites, you have read,
        understood, and agree to be legally bound by the terms of the following
        disclaimer and user agreement.
      </p>
      <p>
        I have taken due care and caution in the compilation of data for this
        website. I advise users to check with other certified experts before making
        any investment decision. However, I do not guarantee the consistency,
        adequacy, or completeness of any information and am not responsible for any
        errors or omissions or for the results obtained from the use of such
        information. I especially state that I have no financial liability whatsoever
        to any user on account of the use of information provided on my website.
      </p>
      <p>
        I am not responsible for any errors, omissions, or representations on any of
        my pages or on any links on any of my pages. I do not endorse in any way any
        advertisers on my web pages. Please verify the veracity of all information on
        your own before undertaking any alliance.
      </p>
      <p>
        The information on this website is updated from time to time. I, however,
        exclude any warranties (whether expressed or implied), as to the quality,
        consistency, efficacy, completeness, performance, fitness, or any of the
        contents of the website, including (but not limited to) any comments, feedback
        and advertisements contained within the site.
      </p>
      <p>
        This website may contain material in the form of inputs submitted by users
        and I accept no responsibility for the content or consistency of such content
        nor do I make any representations by virtue of the contents of this website
        in respect of the existence or availability of any goods and services
        advertised in the contributory sections. I make no warranty that the contents
        of the website are free from infection by viruses or anything else that has
        contaminating or destructive properties and shall have no liability in respect
        thereof.
      </p>
      <p>
        Part of this website may contain advertising and other material submitted to
        me by third parties. Kindly note that those advertisers are responsible for
        ensuring that material submitted for inclusion on the website complies with
        all legal requirements. Although acceptance of advertisements on the website
        is subject to my terms and conditions which are available on request, I do
        not accept liability in respect of any advertisements.
      </p>
      <p>
        There are risks associated with utilizing internet-based information and
        research dissemination services. Subscribers are advised to understand that
        the services can fail due to failure of hardware, software, and Internet
        connection. While I ensure that messages are delivered in time to the
        subscriber’s mobile network, the delivery of these messages to the customer’s
        mobile phone/handset/desktop/iPad/tablet/laptop is the responsibility of the
        customer’s mobile network/internet connection/wifi. The messages may be
        delayed and/or not delivered on certain days, owing to technical reasons, and
        I cannot be held responsible for the same.
      </p>
      <p>
        Stock trading is inherently risky, and you agree to assume complete and full
        responsibility for the outcomes of all trading decisions that you make.
      </p>
      <p>
        Unlike an actual performance record, simulated results do not represent actual
        trading. No representation is being made that any account will or is likely
        to achieve profits or losses similar to those shown.
      </p>
      <p>
        You, and not the Research Analyst, assume the entire cost and risk of any
        trading you choose to undertake. You are solely responsible for making your
        own investment decisions. If you choose to engage in transactions with or
        without seeking advice from a licensed and qualified financial advisor or
        entity, then such decision and any consequences flowing therefrom are your
        sole responsibility. I or any employees are in no way liable for the use of
        the information by others in investing or trading in investment vehicles.
      </p>
      <p>
        I encourage all investors to use the services as a resource to further their
        own research on all featured companies, stocks, sectors, markets, and
        information presented on the site.
      </p>
      <p>
        I, my management, my associate companies, and/or my employees take no
        responsibility for the veracity, validity, and correctness of the expert
        recommendations or other information or research. Although we attempt to
        research thoroughly on information provided herein, there are no guarantees
        of consistency. The information presented on the site has been gathered from
        various sources believed to be providing correct information. Me, my group,
        companies, associates, and/or employees are not responsible for errors, or
        inaccuracies, if any, in the content provided on the site.
      </p>
      <p>
        I have the license to provide research recommendations as a research analyst.
        Your use of this and all information contained on this website is governed by
        these Terms and Conditions of Use. This material is based upon information
        that I consider reliable, but I do not represent that it is consistent or
        complete and that it should be relied upon, as such. You should not rely
        solely on the information in making any investment. Rather, you should use the
        information only as a starting point for doing additional independent research
        in order to allow you to form your own opinion regarding investments. By using{" "}
        <SiteRef />
        , including any software and content contained therein, you agree that use of
        the service is entirely at your own risk. You understand and acknowledge that
        there is a very high degree of risk involved in trading securities. I make no
        warranties and give no assurances regarding the truth, timeliness,
        reliability, or good faith of any material posted on <SiteRef />. I do not
        warrant that trading methods or systems presented in these services or the
        information herein or obtained from advertisers or members will result in
        profits or losses.
      </p>
      <p>
        I also provide educational services, and no part of those services should be
        construed as research reports or recommendations.
      </p>
      <p>
        By visiting <SiteRef /> as a visitor and/or as a subscriber, surfing and
        reading the information on the website is the acceptance of this disclaimer
        and all other terms and conditions.
      </p>
      <p>
        Everything posted on social media (Twitter/Facebook/Telegram/YouTube channel)
        is for education/illustration purposes and should not be counted as
        recommendations or investment advice.
      </p>
      <p>
        I hereby expressly disclaim any implied warranties imputed by the laws of any
        jurisdiction. I consider myself and intend to be subject to the jurisdiction
        only of the courts of {analyst.jurisdiction}. If you don’t agree with any of
        the disclaimers above, please do not read the material on any of my pages.
        Although access to users outside India is not denied, I shall have no legal
        liabilities whatsoever in any laws of any jurisdiction other than India. I
        reserve the right to make changes to our site and these disclaimers, terms,
        and conditions at any time.
      </p>
      <ul className="legal-prose__list">
        <li>
          Registration validity: {analyst.validity.start} to {analyst.validity.end}.
        </li>
        <li>
          Contact:{" "}
          <a href={`tel:${analyst.phoneTel}`}>{analyst.phone}</a>
          {" · "}
          <a href={`mailto:${analyst.email}`}>{analyst.email}</a>
        </li>
      </ul>
    </div>
  );
}
