import Feature1 from "../assets/images/ps5.webp";
import Feature2 from "../assets/images/controller.webp"
import Feature3 from "../assets/images/headsets.webp"
import Feature4 from "../assets/images/controllers.webp";
import Feature5 from "../assets/images/vr2.png";
import Feature6 from "../assets/images/camera.webp";
import Feature7 from "../assets/images/covers.webp";

export const featureData = [
    {
        id: 1,
        title: 'PlayStation 5 Console',
        desc: 'Experience an all-new generation of incredible PlayStation games. PS5 consoles are currently in stock.',
        featureImage: Feature1,
        listTitle : 'PlayStation Specials',

        featureInfoData :[
            {   
                image: Feature2,
                title : 'DualSense Edge',
                id: 1
            },
        
            {
                image: Feature3,
                title : 'PULSE 3D™ Wireless Headset',
                id: 2
            },
        
            {
                image: Feature5,
                title : 'PlayStation VR2',
                id: 4
            },
        
            {
                image: Feature6,
                title : 'HD Camera',
                id: 5
            },
        
            {
                image: Feature4,
                title : 'DualSense™ Wireless Controller',
                id: 3
            },
        
            {
                image: Feature7,
                title : 'PS5 Console Covers',
                id: 6
            },
            
        ]
    },

    {
        id: 2,
        title: 'MacBook Pro 2022',
        desc: 'M2 Pro brings power to take on even more demanding projects. The up to 12‑core CPU and next‑generation Neural Engine make pro workflows fly — from sorting and editing thousands of images to running computational fluid dynamics simulations. And the up to 19‑core GPU drives a huge boost in graphics performance for both work and play.',
        featureImage: 'https://www.ijunkie.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-03-at-9.32.37-PM.png',

        listTitle : 'Apple Specials',
        
        featureInfoData :[
            {   
                image: 'https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg',
                title : 'iPhone 14 Pro Max',
                id: 1
            },
        
            {
                image: 'https://i3-prod-assets.indiaistore.com/files/uploads/products/apple-watch-ultra/img-lg-1662804279_3126.png',
                title : 'Apple Watch Ultra',
                id: 2
            },
        
            {
                image: 'https://res-1.cloudinary.com/grover/image/upload/v1623311209/do1qiyxlls6huqiubfzz.png',
                title : 'Ipad Pro',
                id: 4
            },
        
            {
                image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6376/6376542cv13d.jpg',
                title : 'Apple Airpods Max',
                id: 5
            },
        
            {
                image: 'https://help.apple.com/assets/5F90CF34680CE2962E2531FF/5F90CF3C680CE2962E25321E/en_US/bf91bedd0ddcba32f8b52adab4ca5261.png',
                title : 'Apple Tv',
                id: 3
            },
        
            {
                image: 'https://r2d2.store/image/cache/catalog/product_1530_0_image-400x400.jpeg',
                title : 'Airpods Pro',
                id: 6
            },
            
        ]


    },
]

export const Explore =[
    {
        id: 1,
        defaultImg: 'https://nigeriantech.com.ng/wp-content/uploads/2023/02/Best-Harman-Kardon-Onyx-Studio-7-Price-in-Nigeria-Nigeriantech.com_.ng_.jpeg',
        hoverImg: 'https://i5.walmartimages.com/asr/a3820d06-04fe-41e3-ae7a-bd13edc5a9c9.6b19fb62d6b20eff21ff42062b51c4ec.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        title: 'Harman Kardon ONYX Studio 7',
        then: '399.99',
        now: '249.99',
    },

    {
        id: 2,
        defaultImg: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1',
        hoverImg: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g402/gallery-1.png?v=1',
        title: 'Logitech G502 LIGHTSPEED Wireless Gaming Mouse',
        then: '199.99',
        now: '149.99',
    },

    {
        id: 3,
        defaultImg: 'https://down-my.img.susercontent.com/file/sg-11134201-23020-rj6y1w5qobnv2b',
        hoverImg: 'https://cf.shopee.co.id/file/c46d13c892309c9d64558170063909c9',
        title: 'GIGABYTE AORUS CV27Q - 27" 165Hz QHD 1440P 1500R FreeSync Gaming Monitor',
        then: '699.99',
        now: '649.99',
    },

    {
        id: 4,
        defaultImg: 'https://media.croma.com/image/upload/v1689920121/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/274272_7_v6uxpv.png',
        hoverImg: 'https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/s/p/sp609-1-min.jpg',
        title: 'JBL Boombox 3',
        then: '399.99',
        now: '249.99',
    },

    {
        id: 5,
        defaultImg: 'https://www.lcegroup.co.uk/NewProductImages1/14759.jpg',
        hoverImg: 'https://www.samys.com/imagesproc/L2ltYWdlcy9wcm9kdWN0L21haW4vUy0wMzU4NjB4MTAwMF83LmpwZw==_H_SH480_MW480.jpg',
        title: 'Sony Alpha a7II Mirrorless Digital Camera with FE 28-70mm f/3.5-5.6 OSS Lens',
        then: '1,603.30',
        now: '998.00',
    },

    {
        id: 6,
        defaultImg: 'https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/systems_5/nintendo_switch_3/not_approved_1/NSwitch_ws_NintendoSwitch.png',
        hoverImg: 'https://content.fortune.com/wp-content/uploads/2017/02/nintendo_switch_console_2.jpg?w=840',
        title: 'Nintendo Switch',
        then: '279.99',
        now: '239.99',
    },

    {
        id: 7,
        defaultImg: 'https://txz27ptd.tinifycdn.com/Content/product_images/SDR50.png',
        hoverImg: 'https://pngimg.com/d/dumbbell_PNG16384.png',
        title: 'Dumbell',
        then: '189.99',
        now: '129.99',
    },

    {
        id: 8,
        defaultImg: 'https://www.kindpng.com/picc/m/547-5471029_beats-headphones-box-png-transparent-png.png',
        hoverImg: 'https://s.yimg.com/uu/api/res/1.2/HM557_M8GJBr.f.xd2rsDg--~B/Zmk9ZmlsbDtoPTU4Mzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/0bf857b0-167a-11ee-bea1-3f1e3178b6d7.cf.jpg',
        title: 'Beats By Dre Headset',
        then: '399.99',
        now: '249.99',
    },

]

