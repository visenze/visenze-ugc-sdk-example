export interface CampaignImgResponse {
    status: string;
    campaign_id: string;
    count: number;
    error: [string];
    method: string;
    req_id: string;
    result: [Image];
}
export interface Image {
    id: number;
    link: string;
    low_url: string;
    hashtag: [string];
    posted: number;
    thumbnail_url: string;
    updated: string;
    url: string;
    username: string;
}

export interface Product {
    title: string;
    gender: string;
    price: string;
    sub_cat: string;
    im_url: string;
    im_name: string;
    brand: string;
    tag_box: [number];
    tag_category: string;
    similar_products: [Product];
}

export interface UGCImgTagged {
    id: string;
    hashtag: string;
    username: string;
    url: string;
    low_url: string;
    thumbnail_url: string;
    link: string;
    updated: number;
    posted: number;
}
