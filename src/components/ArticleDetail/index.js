import { Component } from "react";
import "./index.css";
import NotFound from "../NotFound";

const articles = [
  {
    id: "1",
    title:
      "Valentines Day: Best monitors under ₹10000; Enjoy cosy movie nights together - Hindustan Times",
    summary:
      "If you are planning to gift a monitor to your significant other on Valentine’s Day, check out these top 8 picks of monitors under ₹10000.",
    content:
      "The day of love has arrived and if you are still wondering what to give to your partner this Valentines Day, then a monitor could be an ideal option for you. Especially if your partner spends most of… [+16813 chars]",
    author: "Shweta Pandey",
    publishedDate: "2024-02-01",
    imageUrl:
      "https://www.hindustantimes.com/ht-img/img/2024/02/14/1600x900/Best_Monitor_under_Rs_10000_1707913144504_1707913170637.jpg",
    url:
      "https://www.hindustantimes.com/technology/valentines-day-best-monitors-under-rs-10000-enjoy-cosy-movie-nights-together-101707910340837.html",
  },
  {
    id: "2",
    title:
      "Best gaming tablets with high refresh rate display: Top 10 options to consider | Mint - Mint",
    summary:
      "Discover the top gaming tablets with powerful processors to stunning displays. Find the perfect tablet to elevate your gaming experience to new heights.",
    content:
      "In recent years, gaming tablets have become increasingly popular, thanks to their portability and powerful performance. Whether you're a casual gamer looking to pass the time or a serious gamer seeki… [+15993 chars]",
    author: "Amit Rahi",
    publishedDate: "2024-02-14",
    imageUrl:
      "https://www.livemint.com/lm-img/img/2024/02/14/1600x900/jovan-vasiljevic-i_rJVahG5kY-unsplash_1707907573354_1707907625083.jpg",
    url:
      "https://www.livemint.com/technology/gadgets/best-gaming-tablets-with-high-refresh-rate-display-top-10-options-to-consider-11707907286746.html",
  },
  {
    id: "3",
    title:
      "Bring home the joy of audio with affordable soundbars under ₹5000 | Mint - Mint",
    summary:
      "Soundbars have the potential to completely transform the landscape of your living space, taking your entertainment to the next level. Check out our top picks!",
    content:
      "Upgrading your home entertainment setup need not come with a hefty price tag - captivating audio experiences are in your reach now! Weve curated this list of the best soundbars below 5,000 so that yo… [+15955 chars]",
    author: "Bharat Sharma",
    publishedDate: "2024-02-14",
    imageUrl:
      "https://www.livemint.com/lm-img/img/2024/02/14/1600x900/soundbar_1707914178775_1707914190657.jpg",
    url:
      "https://www.livemint.com/technology/gadgets/bring-home-the-joy-of-audio-with-affordable-soundbars-under-rs-5000-11707913231441.html",
  },
  {
    id: "4",
    title:
      "OnePlus Buds 3 vs Noise Buds Xero: Which one should you buy under Rs 5,000? - India Today",
    summary:
      "If you are in the market for new TWS earbuds and have a budget of about Rs 5000 which one should you buy  the OnePlus Buds 3 or Noise Buds Xero",
    content:
      "The affordable TWS earbuds market in India has exploded with the two latest additions in the sub-Rs 5,000 price segment the Noise Buds Xero and the OnePlus Buds 3! In fact, the Noise Buds Xero can al… [+8320 chars]",
    author: "Aman Rashid",
    publishedDate: "2024-02-14",
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/oneplus-buds-3-vs-noise-buds-xero-140624997-16x9_0.png?VersionId=E9RGz_ke1HRpe0VV.Cwzg8r3iExyUp4Q",
    url:
      "https://www.indiatoday.in/technology/features/story/oneplus-buds-3-vs-noise-buds-xero-which-one-should-you-buy-under-rs-5000-2502183-2024-02-14",
  },
  {
    id: "5",
    title:
      "Best smart TV under ₹35000: Top 10 options for immersive experience - Mint",
    summary:
      "Best smart TV under  ₹35000: Explore top options from popular brands that deliver amazing picture quality, immersive sound and multiple connectivity options.",
    content:
      "In today's digital age, a smart TV is no longer just a box; it's a necessity for keeping up with the latest entertainment trends. With a plethora of options available in the market, finding the perfe… [+18392 chars]",
    author: "Amit Rahi",
    publishedDate: "2024-02-14",
    imageUrl:
      "https://www.livemint.com/lm-img/img/2024/02/14/1600x900/smart_tv_under_Rs_35000_1707906285559_1707906294855.jpg",
    url:
      "https://www.livemint.com/technology/gadgets/best-smart-tv-under-rs-35000-top-10-options-for-immersive-experience-11707905242929.html",
  },
  {
    id: "6",
    title:
      "Gmail Spam and Phishing Emails: Gmail to take action to enhance email security and reduce suspicious emai - Times of India",
    summary:
      "Google plans to reject non-compliant emails and require bulk email senders to make it easier for recipients to unsubscribe. These measures aim to enhance email security and reduce suspicious emails.",
    content: "Full content of the first article...",
    author: "Deeksha Somani",
    publishedDate: "2024-02-14",
    imageUrl:
      "https://static.toiimg.com/thumb/msid-107694238,width-1070,height-580,imgsize-7552,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    url:
      "https://timesofindia.indiatimes.com/gadgets-news/gmail-spam-and-phishing-emails-google-to-take-action-to-enhance-email-security-and-reduce-suspicious-emails/articleshow/107693253.cms",
  },
  {
    id: "7",
    title:
      "Xiaomi 14 Ultra Leaked Design Renders Show Camera Bump, Faux Leather Back Panel - Gadgets 360",
    summary:
      "Xiaomi 14 Ultra is expected to be unveiled on February 25. The Xiaomi 14 and Xiaomi 14 Pro are confirmed to be launched globally on the day. Several key features, including the colour options and price of the Xiaomi 14 Ultra, have been tipped.",
    content:
      "Xiaomi 14 Ultra is expected to be unveiled on February 25. The Xiaomi 14 and Xiaomi 14 Pro are confirmed to be launched globally on the day. The yet-unreleased top-of-the-line Ultra model has surface… [+2139 chars]",
    author: "Sucharita Ganguly",
    publishedDate: "2024-02-14",
    imageUrl:
      "https://i.gadgets360cdn.com/large/xiaomi_14_ultra_msp_1707909396749.jpg",
    url:
      "https://www.gadgets360.com/mobiles/news/xiaomi-14-ultra-design-renders-leather-back-leak-specifications-expected-launch-mwc-2024-5056515",
  },
  {
    id: "8",
    title: "Apple's iMessage, Microsoft's Bing escape EU rules - ETBrandEquity",
    summary:
      "From next month, the world's biggest digital firms, identified as \"gatekeepers\" by the EU, must comply with strict do's and don'ts under a landmark law.",
    content:
      "Apple's iMessage and Microsoft's Bing search engine got a reprieve from tougher EU rules curbing how tech titans do business, the European Commission said on Tuesday.From next month, the world's bigg… [+2144 chars]",
    author: "ET BrandEquity",
    publishedDate: "2024-02-14",
    imageUrl:
      '"https://etimg.etb2bimg.com/thumb/msid-107692932,imgsize-9844,width-1200,height=765,overlay-etbrandequity/digital/apples-imessage-microsofts-bing-escape-eu-rules.jpg',
    url:
      "https://brandequity.economictimes.indiatimes.com/news/digital/apples-imessage-microsofts-bing-escape-eu-rules/107692932",
  },
  {
    id: "9",
    title: "When the bass truly drops: Devialet Mania review - BusinessLine",
    summary:
      "Discover the features and performance of the Devialet Mania portable speaker, including its bass-heavy sound profile and automatic spatial mapping.",
    content:
      "Its a lazy Sunday at home. We are sprawled on our sofas intent on doing absolutely nothing. Except I keep getting up and moving a small, black speaker around the room every two songs or so. Im trying… [+4737 chars]",
    author: "Mahananda Bohidar",
    publishedDate: "2024-02-14",
    imageUrl:
      "https://bl-i.thgim.com/public/incoming/f8dr7r/article67845028.ece/alternates/LANDSCAPE_1200/Screenshot%202024-02-14%20at%204.15.27%E2%80%AFPM.png",
    url:
      "https://www.thehindubusinessline.com/specials/technophile/when-the-bass-truly-drops-devialet-mania-review/article67845055.ece",
  },
  {
    id: "10",
    title:
      "Record your thrill-filled moments on action cameras: Choose from 10 options | Mint - Mint",
    summary:
      "Discover the best action cameras for sports and adventure seekers. Compare the top action cameras to find the perfect one for your needs.",
    content:
      "1. GoPro HERO10 Black\r\nThe GoPro HERO10 Black is a powerhouse action camera, featuring stunning 5.3K video quality, advanced image stabilization, and a rugged, waterproof design. With the ability to … [+11102 chars]",
    author: "Affiliate Desk",
    publishedDate: "2024-02-14",
    imageUrl:
      "https://www.livemint.com/lm-img/img/2024/02/14/1600x900/assc_1707906638032_1707906675344.jpg",
    url:
      "https://www.livemint.com/technology/gadgets/record-your-thrill-filled-moments-on-action-cameras-choose-from-10-options-11707889819053.html",
  },
];

class ArticleDetail extends Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const article = articles.find((news) => news.id === id);

    if (!article) {
      return <NotFound />;
    }

    const { imageUrl, title, content, summary, url, author } = article;
    return (
      <div className="main-container detail-container">
        <h1>{title}</h1>
        <img src={imageUrl} alt={title} className="w-100" />
        <p>{content}</p>
        <small>by {author}</small>

        <p>{summary}</p>
        <a className="btn btn-primary" href={url}>
          Read More
        </a>
      </div>
    );
  }
}

export default ArticleDetail;
