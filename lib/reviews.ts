import type { Review } from "@/components/ReviewCard";

export const HOME_REVIEWS: Review[] = [
  {
    author: "Jennifer M.",
    location: "Queen Creek, AZ",
    rating: 5,
    text: "They did an amazing job on our windows. We have a lot of dust here and our windows were pretty bad. Now they're crystal clear. Very professional and on time.",
    date: "2024",
  },
  {
    author: "Robert T.",
    location: "San Tan Valley, AZ",
    rating: 5,
    text: "Best window cleaning we've had. They did both inside and out. The crew was careful with our screens and left everything tidy. Will definitely use again.",
    date: "2024",
  },
  {
    author: "Amanda K.",
    location: "Queen Creek, AZ",
    rating: 5,
    text: "Fast response and fair pricing. Our house looks so much better with clean windows. Highly recommend for any Queen Creek homeowner.",
    date: "2024",
  },
];

export const REVIEWS_PAGE_REVIEWS: Review[] = [
  ...HOME_REVIEWS,
  {
    author: "David L.",
    location: "Gilbert, AZ",
    rating: 5,
    text: "We needed our windows done before a family gathering. They fit us in quickly and did a thorough job. Very happy with the results.",
    date: "2024",
  },
  {
    author: "Sarah P.",
    location: "Queen Creek, AZ",
    rating: 5,
    text: "Professional from start to finish. They explained what they'd do and gave us a clear quote. No surprises. Windows look great.",
    date: "2024",
  },
  {
    author: "Mike R.",
    location: "Chandler, AZ",
    rating: 5,
    text: "Had both interior and exterior done. The difference is night and day. Worth every penny for the curb appeal alone.",
    date: "2024",
  },
];
