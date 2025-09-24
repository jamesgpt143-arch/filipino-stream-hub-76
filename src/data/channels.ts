export interface Channel {
  name: string;
  manifestUri: string;
  clearKey?: Record<string, string>;
  widevineUrl?: string; // For Widevine DRM license server
  type: 'mpd' | 'hls' | 'youtube';
  logo: string;
  embedUrl?: string;
  category?: string;
  hidden?: boolean;
  youtubeChannelId?: string; // For detecting multiple streams
  hasMultipleStreams?: boolean; // Flag to indicate if channel has multiple streams
  referer?: string; // Custom referer header for requests
}

export const channels: Channel[] = [
  {
    name: 'Test IPTV Stream (Widevine DRM)',
    manifestUri: 'http://143.44.136.110:6610/001/2/ch00000090990000001181/manifest.mpd?virtualDomain=001.live_hls.zte.com',
    widevineUrl: 'http://143.44.136.74:9443/widevine/?deviceId=02:00:00:00:00:00',
    type: 'mpd',
    logo: 'https://via.placeholder.com/200x100/ff6b6b/ffffff?text=DRM+IPTV'
  }, {
     name: 'A2Z',
  manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
  clearKey: {
    'f703e4c8ec9041eeb5028ab4248fa094': 'c22f2162e176eee6273a5d0b68d19530'
  },
  type: 'mpd',
  logo: 'https://cdn1.clickthecity.com/wp-content/uploads/2020/10/21172907/a2z-logo.png'
}, {
name: 'AllTV',
  manifestUri: 'https://ott.m3u8.nathcreqtives.com/alltv/stream/manifest.m3u8',
  type: 'hls',
  logo: 'https://tse1.mm.bing.net/th/id/OIP.MJMBDhCHZCJ45qwnEBy4dAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
}, {
  name: 'ABC Australia',
  manifestUri: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
  clearKey: {
    '389497f9f8584a57b234e27e430e04b7': '3b85594c7f88604adf004e45c03511c0'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.S2D3IOx3zEDLjjtuNgZ_wAHaI-?rs=1&pid=ImgDetMain'
}, {
  name: 'Animal Planet',
  manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd',
  clearKey: {
    '436b69f987924fcbbc06d40a69c2799a': 'c63d5b0d7e52335b61aeba4f6537d54d'
  },
  type: 'mpd',
  logo: 'https://api.discovery.com/v1/images/5bc91c366b66d1494068339e?aspectRatio=1x1&width=192&key=3020a40c2356a645b4b4'
}, {
  name: 'Animax',
  manifestUri: 'https://tglmp01.akamaized.net/out/v1/de55fad9216e4fe7ad8d2eed456ba1ec/manifest.mpd',
  clearKey: {
    'edf1a715de9748638dd2fad75a419af2': '2f5a3199b26e9b693ae881af7ff864cf'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.39-tpYJk2UwoQjQc7Af_oAHaCi?rs=1&pid=ImgDetMain'
}, {
  name: 'Anime X Hidive',
  manifestUri: 'https://amc-anime-x-hidive-1-us.tablo.wurl.tv/playlist.m3u8',
  type: 'hls',
  logo: 'https://www.tablotv.com/wp-content/uploads/2023/12/AnimeXHIDIVE_official-768x499.png'
}, {
  name: 'ANC',
  manifestUri: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
  clearKey: {
    '4bbdc78024a54662854b412d01fafa16': '6039ec9b213aca913821677a28bd78ae'
  },
  type: 'mpd',
  logo: 'https://vignette.wikia.nocookie.net/russel/images/5/52/ANC_HD_Logo_2016.png/revision/latest?cb=20180404015018'
}, {
  name: 'Al Jazeera',
  manifestUri: 'https://live-hls-web-aje.getaj.net/AJE/index.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP.EeF7fuBh0ASAdfYFigegbgHaE8?rs=1&pid=ImgDetMain'
}, {
  name: 'AXN',
  manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
  clearKey: {
    'fd5d928f5d974ca4983f6e9295dfe410': '3aaa001ddc142fedbb9d5557be43792f'
  },
  type: 'mpd',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/AXN_Logo_2015.png'
}, {
  name: 'AXN Movies',
  manifestUri: 'https://ott.zapitv.com/live/eds_c2/axn_white/dash_live_enc/axn_white.mpd',
  clearKey: {
    'f9e4be09926c262effa2b5381ae3553d': 'd630e04e0c5e3f98dc38840be1c1dd4c'
  },
  type: 'mpd',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/AXN_Movies_logo.jpg/220px-AXN_Movies_logo.jpg'
}, {
  name: 'BBC Earth',
  manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
  clearKey: {
    '34ce95b60c424e169619816c5181aded': '0e2a2117d705613542618f58bf26fc8e'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.wKX3V5khbu3Ssplnq3cE0AHaEF?rs=1&pid=ImgDetMain'
}, {
  name: 'BBC Lifestyle',
  manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5050/default_ott.mpd',
  clearKey: {
    'f429292dc744f284355308561577ac10': 'b12e1f894129c517dc8845baaeebec8a'
  },
  type: 'mpd',
  logo: 'https://banner2.cleanpng.com/20180618/wvf/kisspng-bbc-lifestyle-television-channel-broadcasting-life-style-5b27f0806b9a79.6524419015293441284408.jpg'
}, {
  name: 'BBCWORLD News',
  manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd',
  clearKey: {
    'f59650be475e4c34a844d4e2062f71f3': '119639e849ddee96c4cec2f2b6b09b40'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.Dt6zbSEb8BztEMb1C93QHQHaHk?rs=1&pid=ImgDetMain'
}, {
  name: 'Billiard TV',
  manifestUri: 'https://1b29dd71cd5e4191a3eb26afff631ed3.mediatailor.us-west-2.amazonaws.com/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/SportsTribal-BilliardTV/BILLIARDTV_SCTE.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP.JKBoiu3cX_PVMSwZLYFxCAHaHa?rs=1&pid=ImgDetMain'
}, {
  name: 'Bilyonaryo',
  manifestUri: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
  clearKey: {
    '227ffaf09bec4a889e0e0988704d52a2': 'b2d0dce5c486891997c1c92ddaca2cd2'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.O2OG_59US0j-zqWyZwqhXAHaCH?rs=1&pid=ImgDetMain'
}, {
  name: 'Bloomberg',
  manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd',
  clearKey: {
    'ef7d9dcfb99b406cb79fb9f675cba426': 'b24094f6ca136af25600e44df5987af4'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.ayx_C9FL75IKjIl408wLagHaFj?rs=1&pid=ImgDetMain'
}, {
  name: 'BOOMERANG',
  manifestUri: 'https://fl3.moveonjoy.com/BOOMERANG/index.m3u8',
  type: 'hls',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Boomerang_2014_logo.svg/1200px-Boomerang_2014_logo.svg.png'
}, {
  name: 'BUKO',
  manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
  clearKey: {
    'd273c085f2ab4a248e7bfc375229007d': '7932354c3a84f7fc1b80efa6bcea0615'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.ph_7Uv-meouzQBVcfuuQQwHaIL?rs=1&pid=ImgDetMain'
}, {
  name: 'Cartoon Network',
  manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
  clearKey: {
    'a2d1f552ff9541558b3296b5a932136b': 'cdd48fa884dc0c3a3f85aeebca13d444'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.x_golGEun-YyuKfpaOMh9wHaEK?rs=1&pid=ImgDetMain'
}, {
  name: 'Cartoon Classics',
  manifestUri: 'https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/d5543c06-5122-49a7-9662-32187f48aa2c/manifest.m3u8',
  type: 'hls',
  logo: 'https://tse1.mm.bing.net/th/id/OIP.e3EnrHl_y0kw59ySjxxmQAAAAA?rs=1&pid=ImgDetMain'
}, {
 name: 'Celestial Movies Pinoy',
  manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/celmovie_pinoy_sd.mpd',
  clearKey: {
    '0f8537d8412b11edb8780242ac120002': '2ffd7230416150fd5196fd7ea71c36f3'
  },
  type: 'mpd',
  logo: 'https://cms.cignal.tv/Upload/Images/Celestial-Logo-2022.jpg'
}, {
  name: 'CinemaOne',
  manifestUri: 'https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd',
  clearKey: {
    '58d0e56991194043b8fb82feb4db7276': 'd68f41b59649676788889e19fb10d22c'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.3wplDtTyzPCr4Yoyg8t_GgHaDC?rs=1&pid=ImgDetMain'
}, {
  name: 'Cinemo',
  manifestUri: 'https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd',
  clearKey: {
    'aa8aebe35ccc4541b7ce6292efcb1bfb': 'aab1df109d22fc5d7e3ec121ddf24e5f'
  },
  type: 'mpd',
  logo: 'https://yt3.ggpht.com/a-/AAuE7mAK5lTlRJwr2rZLeitoTnOYkjForU2cvszswQ=s900-mo-c-c0xffffffff-rj-k-no'
}, {
  name: 'Cinemax',
  manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
  clearKey: {
    'b207c44332844523a3a3b0469e5652d7': 'fe71aea346db08f8c6fbf0592209f955'
  },
  type: 'mpd',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cinemax_%28Yellow%29.svg/1200px-Cinemax_%28Yellow%29.svg.png'
}, {
  name: 'CCTV4',
  manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
  clearKey: {
    '0f8541ec412b11edb8780242ac120002': '6cf16c272b7357c48cd47061799a4963'
  },
  type: 'mpd',
  logo: 'https://w7.pngwing.com/pngs/976/161/png-transparent-china-central-television-cctv-4-cgtn-russian-cctv-channels-television-channel-others-miscellaneous-television-text.png'
}, {
  name: 'Channel News Asia',
  manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
  clearKey: {
    'b259df9987364dd3b778aa5d42cb9acd': '753e3dba96ab467e468269e7e33fb813'
  },
  type: 'mpd',
  logo: 'https://www.sopasia.com/wp-content/uploads/2014/04/logo_Channel-NewsAsia-logo.jpg'
}, {
  name: 'CNN INTERNATIONAL',
  manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd',
  clearKey: {
    '900c43f0e02742dd854148b7a75abbec': 'da315cca7f2902b4de23199718ed7e90'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.S7pJUpbQ6mU4KQeBF66nMgHaHa?rs=1&pid=ImgDetMain'
}, {
  name: 'CRIME INVESTIGATION',
  manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd',
  clearKey: {
    '21e2843b561c4248b8ea487986a16d33': 'db6bb638ccdfc1ad1a3e98d728486801'
  },
  type: 'mpd',
  logo: 'https://download.logo.wine/logo/Crime_%2B_Investigation_(Australian_TV_channel)/Crime_%2B_Investigation_(Australian_TV_channel)-Logo.wine.png'
}, {
  name: 'DZRH TV',
  type: 'youtube',
  manifestUri: '',
  // Add empty manifestUri for youtube channels
  embedUrl: 'https://www.youtube.com/embed/live_stream?channel=UCcTiBX8js_djhSSlmJRI99A',
  logo: 'https://th.bing.com/th/id/OIP.LA48bslLAx_sTgviWD-EKQAAAA?rs=1&pid=ImgDetMain'
}, {
  name: 'DepEd Channel',
  manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd',
  clearKey: {
    '0f853706412b11edb8780242ac120002': '2157d6529d80a760f60a8b5350dbc4df'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.MPPdJ1ObiLG4Q6MFEDQ4pAHaEH?rs=1&pid=ImgDetMain'
}, {
  name: 'Discovery Channel',
  manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd',
  clearKey: {
    'd9ac48f5131641a789328257e778ad3a': 'b6e67c37239901980c6e37e0607ceee6'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.4ONCH8mk4foZNv6W4xM0nQHaGa?rs=1&pid=ImgDetMain'
}, {
  name: 'Disney Channel',
  manifestUri: 'https://uselector.cdn.intigral-ott.net/DIS/DIS.isml/manifest.mpd',
  clearKey: {
    '72800c62fcf2bfbedd9af27d79ed35d6': 'b6ccb9facb2c1c81ebe4dfaab8a45195'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.ry79quPYFII7hj-ZpuoDAQHaDt?rs=1&pid=ImgDetMain'
}, {
  name: 'Disney jr',
  manifestUri: 'https://uselector.cdn.intigral-ott.net/DJR/DJR.isml/manifest.mpd',
  clearKey: {
    'f5df57914a0922d5d5ed6b0a4af6290a': 'c62b10a180d1770a355b3c4cb6506ca0'
  },
  type: 'mpd',
  logo: 'https://media.sketchfab.com/models/0d2e630d20714d2c9bf7fa87cd17cad3/thumbnails/6fb5b2a71edd459fac6abb040148672d/5d5a4670e8d649e3b3483575853425d0.jpeg'
}, {
  name: 'Disney XD',
  manifestUri: 'https://fl5.moveonjoy.com/DISNEY_XD/index.m3u8',
  type: 'hls',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logo_Disney_XD.svg/1200px-Logo_Disney_XD.svg.png'
}, {
  name: 'Dreamworks HD',
  manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
  clearKey: {
    '4ab9645a2a0a47edbd65e8479c2b9669': '8cb209f1828431ce9b50b593d1f44079'
  },
  type: 'mpd',
  logo: 'https://logos-world.net/wp-content/uploads/2020/12/DreamWorks-Animation-Logo.png'
}, {
  name: 'Dreamworks Tagalog',
  manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
  clearKey: {
    '564b3b1c781043c19242c66e348699c5': 'd3ad27d7fe1f14fb1a2cd5688549fbab'
  },
  type: 'mpd',
  logo: 'https://logos-world.net/wp-content/uploads/2020/12/DreamWorks-Animation-Logo.png'
}, {
 name: 'ESPN',
  manifestUri: 'https://iptvproxy-five.vercel.app/api/hls?url=http://41.205.93.154/ESPN/index.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP.X0rfjwnmj1p_6q6OiYJS3wHaEK?rs=1&pid=ImgDetMain'
}, {
  name: 'Fashion TV HD',
  manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
  clearKey: {
    '971ebbe2d887476398e97c37e0c5c591': '472aa631b1e671070a4bf198f43da0c7'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.fRG_3Wx6qmssHxgeN5leBQHaD4?rs=1&pid=ImgDetMain'
}, {
  name: 'Food Network HD',
  manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
  clearKey: {
    'b7299ea0af8945479cd2f287ee7d530e': 'b8ae7679cf18e7261303313b18ba7a14'
  },
  type: 'mpd',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Food_Network_New_Logo.png'
}, {
  name: 'Global Trekker',
  manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/globaltrekker.mpd',
  clearKey: {
    '5c26c24bce2942078cf6e35216632c2d': '445887a1c0832ff457263d8bcadc993f'
  },
  type: 'mpd',
  logo: 'https://cdn2.ettoday.net/images/6892/e6892888.jpg'
}, {
name: 'GMA',
  manifestUri: 'https://ott.m3u8.nathcreqtives.com/gma/stream/manifest.m3u8',
  type: 'hls',
  logo: 'https://aphrodite.gmanetwork.com/entertainment/shows/images/1200_675_TVShow_MainTCARD_-20220622115633.png'
}, {
name: 'GMA (Youtube Stream)',
  type: 'youtube',
  manifestUri: '', // Add empty manifestUri for youtube channels
  embedUrl: 'https://www.youtube.com/embed/live_stream?channel=UCKL5hAuzgFQsyrsQKgU0Qng',
  logo: 'https://aphrodite.gmanetwork.com/entertainment/shows/images/1200_675_TVShow_MainTCARD_-20220622115633.png'
}, {
  name: 'GMA Pinoy TV',
  manifestUri: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd',
  clearKey: {
    'c95ed4c44b0b4f7fa1c6ebbbbaab21a1': '47635b8e885e19f2ccbdff078c207058'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.ntjNVRaXsZJ0vrhWBA35sQHaE7?rs=1&pid=ImgDetMain'
}, {
  name: 'Global Fashion Channel',
  manifestUri: 'https://gfcomnimedia-globalfashionchannel-1-eu.xiaomi.wurl.tv/playlist.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP.0gpjrMJZ4u5zx81mPvskNwAAAA?rs=1&pid=ImgDetMain'
}, {
  name: 'hallypop',
  manifestUri: 'https://jungotvstream.chanall.tv/jungotv/hallypop/stream.m3u8',
  type: 'hls',
  logo: 'https://static.wixstatic.com/media/3f6f0d_6b141fb2470c4d0d9210f6cac32075ac~mv2.png/v1/fill/w_600,h_139,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Hallypop_Logo_FullColor.png'
}, {
  name: 'HBO Family',
  manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
  clearKey: {
    '872910c843294319800d85f9a0940607': 'f79fd895b79c590708cf5e8b5c6263be'
  },
  type: 'mpd',
  logo: 'https://2.bp.blogspot.com/-fWMY8sHAuHs/TqB9xKDM_-I/AAAAAAAAQh0/N-fI53l9A84/s1600/hbo-family.png'
}, {
  name: 'HBO Hits',
  manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
  clearKey: {
    'b04ae8017b5b4601a5a0c9060f6d5b7d': 'a8795f3bdb8a4778b7e888ee484cc7a1'
  },
  type: 'mpd',
  logo: 'https://vignette.wikia.nocookie.net/logopedia/images/0/04/HBO_HiTS.svg/revision/latest/scale-to-width-down/627?cb=20100511073403'
}, {
  name: 'HBO Signature',
  manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
  clearKey: {
    'a06ca6c275744151895762e0346380f5': '559da1b63eec77b5a942018f14d3f56f'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.PNeE4yWz4_Tp1O-dCdY_xAHaEP?rs=1&pid=ImgDetMain'
}, {
  name: 'HBO HD',
  manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
  clearKey: {
    'd47ebabf7a21430b83a8c4b82d9ef6b1': '54c213b2b5f885f1e0290ee4131d425b'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.lY5V2M3D9jtBFJNbOAI8swHaDt?rs=1&pid=ImgDetMain'
}, {
  name: 'HBO Zone',
  manifestUri: 'https://fl5.moveonjoy.com/HBO_ZONE/tracks-v1a1/mono.ts.m3u8',
  type: 'hls',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/HBO_Zone_logo.png'
}, {
  name: 'HGTV HD',
  manifestUri: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
  clearKey: {
    'f0e3ab943318471abc8b47027f384f5a': '13802a79b19cc3485d2257165a7ef62a'
  },
  type: 'mpd',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/HGTV_logo.png'
}, {
  name: 'History HD',
  manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
  clearKey: {
    'a7724b7ca2604c33bb2e963a0319968a': '6f97e3e2eb2bade626e0281ec01d3675'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.Yx9hYOFfO03taYL2CZd6FAHaE8?rs=1&pid=ImgDetMain'
}, {
  name: 'Hits HD',
  manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
  clearKey: {
    'dac605bc197e442c93f4f08595a95100': '975e27ffc1b7949721ee3ccb4b7fd3e5'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.x2dQgh_yGBdnttScluIGYAHaCp?w=900&h=322&rs=1&pid=ImgDetMain'
}, {
  name: 'Hits Movies',
  manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2305/default_primary.mpd',
  clearKey: {
    'ff1febd7018d0dd711601e795e0d6210': '38fbfb3a56e40ff92c9df8acbcba9ef6'
  },
  type: 'mpd',
  logo: 'https://dj7fdt04hl8tv.cloudfront.net/acm/media/njoi/hits-movies-656x388.jpg'
}, {
  name: 'Hits Now',
  manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
  clearKey: {
    '14439a1b7afc4527bb0ebc51cf11cbc1': '92b0287c7042f271b266cc11ab7541f1'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.cM1HO2isouoNessbj31CcgAAAA?rs=1&pid=ImgDetMain'
}, {
  name: 'IBC13',
  manifestUri: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/ibc13_sd.mpd',
  clearKey: {
    '04e292bc99bd4ccba89e778651914254': 'ff0a62bdf8920ce453fe680330b563a5'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.sJNkdFUalhzRyZT4SJ9HBAHaEc?rs=1&pid=ImgDetMain'
}, {
  name: 'INCTV',
  manifestUri: 'https://199211.global.ssl.fastly.net/643cc12aa824db4374021c8c/live_95f6ac80dd6511ed9d08b12be56ae55e/index.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP.MHyjJgpgcnoGypCLEIh9qAHaDH?rs=1&pid=ImgDetMain'
}, {
  name: 'Jungo Pinoy tv',
  manifestUri: 'https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8',
  type: 'hls',
  logo: 'https://dito.ph/hubfs/Dito_July2021/Ott%20Pages/Jungo-img/Jungo-logo.png'
}, {
  name: 'Kapamilya Channel',
  manifestUri: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd',
  clearKey: {
    'bd17afb5dc9648a39be79ee3634dd4b8': '3ecf305d54a7729299b93a3d69c02ea5'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.ZzYB03x8FwMJFXEoCw4BcQHaEK?rs=1&pid=ImgDetMain'
}, {
  name: 'Kapamilya Online',
  type: 'youtube',
  manifestUri: '', // Add empty manifestUri for youtube channels
  embedUrl: 'https://www.youtube.com/embed/live_stream?channel=UCstEtN0pgOmCf02EdXsGChw',
  logo: 'https://th.bing.com/th/id/OIP.WJ42CLSN52F8__yoFceMOwHaEK?rs=1&pid=ImgDetMain'
}, {
  name: 'kbsworld',
  manifestUri: 'https://kbsworld-ott.akamaized.net:443/hls/live/2002341/kbsworld/01.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP.oCsxB1kd9mX_LD-DigoB9AHaBf?rs=1&pid=ImgDetMain'
}, {
  name: 'Kix HD',
  manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
  clearKey: {
    'a8d5712967cd495ca80fdc425bc61d6b': 'f248c29525ed4c40cc39baeee9634735'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.tGUjHFJqDIFUuKfn-31TxAHaEN?rs=1&pid=ImgDetMain'
}, {
  name: 'Knowledge Channel',
  manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
  clearKey: {
    '0f856fa0412b11edb8780242ac120002': '783374273ef97ad3bc992c1d63e091e7'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.ix5ReWijxZg8uPcKrk2GHwHaGd?rs=1&pid=ImgDetMain'
}, {
name: 'Kplus',
  manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/9983/default_ott.mpd',
  clearKey: {
    'aa48b28bd723f91214887df6ed9fad10': 'b5a3a800848120c843ae0fa68c09c261'
  },
  type: 'mpd',
  logo: 'https://tse4.mm.bing.net/th/id/OIP.esJMNcht-1gASl36YXkaZwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
}, {
  name: 'Lifetime',
  manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
  clearKey: {
    'cf861d26e7834166807c324d57df5119': '64a81e30f6e5b7547e3516bbf8c647d0'
  },
  type: 'mpd',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Lifetime_2020.svg/440px-Logo_Lifetime_2020.svg.png'
}, {
  name: 'K-Movies',
  manifestUri: 'https://7732c5436342497882363a8cd14ceff4.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/Plex_NewMovies/playlist.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP.uvYKFBubGFR40NtgWh7W8wHaES?rs=1&pid=ImgDetMain'
}, {
  name: 'Lotus Macau',
  manifestUri: 'https://cdn1.skygo.mn/live/disk1/Lotus/HLS-FTA/Lotus.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP.RCkAImW74AnuBiGuT7-sYgHaEN?rs=1&pid=ImgDetMain'
}, {
  name: 'MovieSphere',
  manifestUri: 'https://moviesphereuk-samsunguk.amagi.tv/360p-vtt/index.m3u8',
  type: 'hls',
  logo: 'https://yt3.googleusercontent.com/R4AIm13f3RZ5CPAFWuU8DRmpmtj6bne2S4n1K3RPvoJu3Nu5hpgbWcfD0VGMlz8CPPEJtN2T_g=s900-c-k-c0x00ffffff-no-rj'
}, {
  name: 'MPTV',
  manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd',
  clearKey: {
    '6aab8f40536f4ea98e7c97b8f3aa7d4e': '139aa5a55ade471faaddacc4f4de8807'
  },
  type: 'mpd',
  logo: 'https://cms.cignal.tv/Upload/Images/MPTV%20-%20Rev.png'
}, {
  name: 'Myx',
  manifestUri: 'https://d24xfhmhdb6r0q.cloudfront.net/out/v1/e897a7b6414a46019818ee9f2c081c4f/index.mpd',
  clearKey: {
    'f40a52a3ac9b4702bdd5b735d910fd2f': '5ce1bc7f06b494c276252b4d13c90e51'
  },
  type: 'mpd',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cinemax_%28Yellow%29.svg/1200px-Cinemax_%28Yellow%29.svg.png'
}, {
  name: 'MTV',
  manifestUri: 'https://streamer1.nexgen.bz/MTV/index.m3u8',
  type: 'hls',
  logo: 'https://logos-world.net/wp-content/uploads/2020/09/MTV-Logo-1981-2009.png'
}, {
  name: 'MTV Live',
  manifestUri: 'https://fl2.moveonjoy.com/MTV_LIVE/index.m3u8',
  type: 'hls',
  logo: 'https://www.seekpng.com/png/detail/57-579021_file-mtv-live-svg-mtv-live-logo-png.png'
}, {
  name: 'NAT GEO WILD',
  manifestUri: 'https://uselector.cdn.intigral-ott.net/NHD/NHD.isml/manifest.mpd',
  clearKey: {
    '276e56bc14095f327bbf0c936eb7b38c': '63127eaddb18c596db05657424849519'
  },
  type: 'mpd',
  logo: 'https://wallpapercave.com/wp/wp8223391.jpg'
}, {
  name: 'NBA TV Philippines',
  manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd',
  clearKey: {
    'f36eed9e95f140fabbc88a08abbeafff': '0125600d0eb13359c28bdab4a2ebe75a'
  },
  type: 'mpd',
  logo: 'https://cms.cignal.tv/Upload/Images/NBA-TV-Philippines.jpg'
}, {
name: 'Net25',
  manifestUri: 'https://ott.m3u8.nathcreqtives.com/net25/stream/manifest.m3u8',
  type: 'hls',
  logo: 'https://philippines.mom-gmr.org/uploads/tx_lfrogmom/media/1423-2446_import.png'
}, {
  name: 'NHK JAPAN',
  manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd',
  clearKey: {
    '3d6e9d4de7d7449aadd846b7a684e564': '0800fff80980f47f7ac6bc60b361b0cf'
  },
  type: 'mpd',
  logo: 'https://logowik.com/content/uploads/images/nhk-world-japan1495.jpg'
}, {
  name: 'Nickjr',
  manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd',
  clearKey: {
    'bab5c11178b646749fbae87962bf5113': '0ac679aad3b9d619ac39ad634ec76bc8'
  },
  type: 'mpd',
  logo: 'https://vignette.wikia.nocookie.net/logaekranowe/images/4/45/1024px-Nick_Jr._logo_2009.svg.png/revision/latest?cb=20180616122202&path-prefix=pl'
}, {
  name: 'Nickelodeon',
  manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
  clearKey: {
    '9ce58f37576b416381b6514a809bfd8b': 'f0fbb758cdeeaddfa3eae538856b4d72'
  },
  type: 'mpd',
  logo: 'https://logos-download.com/wp-content/uploads/2016/04/Nickelodeon_logo_logotype_2.png'
}, {
  name: 'One News HD',
  manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
  clearKey: {
    'd39eb201ae494a0b98583df4d110e8dd': '6797066880d344422abd3f5eda41f45f'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.x5VzEESkd4_1pVGulNU43gHaGN?rs=1&pid=ImgDetMain'
}, {
  name: 'One PH',
  manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
  clearKey: {
    '92834ab4a7e1499b90886c5d49220e46': 'a7108d9a6cfcc1b7939eb111daf09ab3'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.uz-f8yhdILIhdUj56NO6YAAAAA?rs=1&pid=ImgDetMain'
}, {
  name: 'One Sports',
  manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
  clearKey: {
    '53c3bf2eba574f639aa21f2d4409ff11': '3de28411cf08a64ea935b9578f6d0edd'
  },
  type: 'mpd',
  logo: 'https://vignette.wikia.nocookie.net/logopedia/images/5/56/TV5_One_Sports_Channel.png/revision/latest/scale-to-width-down/300?cb=20181221055916'
}, {
  name: 'One Sports Plus HD',
  manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
  clearKey: {
    '322d06e9326f4753a7ec0908030c13d8': '1e3e0ca32d421fbfec86feced0efefda'
  },
  type: 'mpd',
  logo: 'https://yt3.ggpht.com/a/AATXAJxL2nOhPRXCDKBEK-ccmTRM0G5r24tnVWUraw=s900-c-k-c0xffffffff-no-rj-mo'
}, {
  name: 'PBA Rush',
  manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
  clearKey: {
    '76dc29dd87a244aeab9e8b7c5da1e5f3': '95b2f2ffd4e14073620506213b62ac82'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.dDzYufwVTWroitJQy9pfXQAAAA?rs=1&pid=ImgDetMain'
}, {
  name: 'PBO',
  manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
  clearKey: {
    'dcbdaaa6662d4188bdf97f9f0ca5e830': '31e752b441bd2972f2b98a4b1bc1c7a1'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.4l7hnQUFPwtlNlglsgYdEgHaFI?rs=1&pid=ImgDetMain'
}, {
  name: 'Premier Sports',
  manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
  clearKey: {
    'fc19c98cb9504a0fb78b22fea0a4b814': 'ea683112a96d4ae6c32d4ea13923e8c7'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.UEZdJevwcZaL1qmePWjLGgHaHY?rs=1&pid=ImgDetMain'
}, {
  name: 'Premier Tennis',
  manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
  clearKey: {
    '59454adb530b4e0784eae62735f9d850': '61100d0b8c4dd13e4eb8b4851ba192cc'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.yd4QRZWcEgEz2T1EZv41mAAAAA?rs=1&pid=ImgDetMain'
}, {
  name: 'PTV4',
  manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
  clearKey: {
    '71a130a851b9484bb47141c8966fb4a3': 'ad1f003b4f0b31b75ea4593844435600'
  },
  type: 'mpd',
  logo: 'https://media.philstar.com/images/articles/ptv4_2018-06-14_11-27-10.jpg'
}, {
  name: 'Q Music',
  manifestUri: 'https://dpp-qmusicnl-live.akamaized.net/streamx/QmusicNL.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP.VIBKAVHEqSwJ_jojb9Mt7wHaFg?rs=1&pid=ImgDetMain'
}, {
  name: 'Retro Crush',
  manifestUri: 'https://amg01201-cinedigmenterta-retrocrush-cineverse-nrfll.amagi.tv/playlist/amg01201-cinedigmenterta-retrocrush-cineverse/playlist.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP.FiThWnuwcMCjSwBaC02B4AHaEp?rs=1&pid=ImgDetMain'
}, {
  name: 'Rock Action',
  manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd',
  clearKey: {
    '0f852fb8412b11edb8780242ac120002': '4cbc004d8c444f9f996db42059ce8178'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.0c6d3hoH5evqsJVNnbhVNwHaC3?rs=1&pid=ImgDetMain'
}, {
  name: 'Rock Entertainment',
  manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd',
  clearKey: {
    'e4ee0cf8ca9746f99af402ca6eed8dc7': 'be2a096403346bc1d0bb0f812822bb62'
  },
  type: 'mpd',
  logo: 'https://assets-global.website-files.com/64e81e52acfdaa1696fd623f/652f763c600497122b122df0_logo_ent_red_web.png'
}, {
  name: 'RPTV',
  manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
  clearKey: {
    '1917f4caf2364e6d9b1507326a85ead6': 'a1340a251a5aa63a9b0ea5d9d7f67595'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.hWUhA4FmrinqMTykADb9NwHaEX?rs=1&pid=ImgDetMain'
}, {
  name: 'SARISARI',
  manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
  clearKey: {
    '0a7ab3612f434335aa6e895016d8cd2d': 'b21654621230ae21714a5cab52daeb9d'
  },
  type: 'mpd',
  logo: 'https://vignette1.wikia.nocookie.net/logopedia/images/3/3e/Sari-Sari_alternate_Logo.PNG/revision/latest?cb=20160619031101'
}, {
  name: 'Sony Cine',
  manifestUri: 'https://a-cdn.klowdtv.com/live1/cine_720p/chunks.m3u8',
  type: 'hls',
  logo: 'https://th.bing.com/th/id/OIP._NGk-Rpn5n6TOVRIjvnZ6QHaHb?rs=1&pid=ImgDetMain'
}, {
  name: 'SPOTV',
  manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
  clearKey: {
    'ec7ee27d83764e4b845c48cca31c8eef': '9c0e4191203fccb0fde34ee29999129e'
  },
  type: 'mpd',
  logo: 'https://uploads-sportbusiness.imgix.net/uploads/2021/09/SPOTV_LOGO-01-w-2.png?auto=compress,format&crop=faces,entropy,edges&fit=crop&w=620&h=227'
}, {
  name: 'SPOTV2',
  manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
  clearKey: {
    '7eea72d6075245a99ee3255603d58853': '6848ef60575579bf4d415db1032153ed'
  },
  type: 'mpd',
  logo: 'https://cms.dmpcdn.com/livetv/2023/02/06/00d2eb00-a5c0-11ed-a358-099f80363291_webp_original.png'
}, {
  name: 'Star Action',
  manifestUri: 'https://uselector.cdn.intigral-ott.net/FMA/FMA.isml/manifest.mpd',
  clearKey: {
    '230af93fc61c0c170067c9d1b6538402': '49a9bf0cfba1cb4e52de3d458f6fb3a2'
  },
  type: 'mpd',
  logo: 'https://images.seeklogo.com/logo-png/52/1/star-action-logo-png_seeklogo-520563.png'
}, {
  name: 'Star Movies',
  manifestUri: 'https://uselector.cdn.intigral-ott.net/STM/STM.isml/manifest.mpd',
  clearKey: {
    '4b7a662d7132679630f3a3f1862a859c': '0651bc37e705349a2848278ae3ad7bf4'
  },
  type: 'mpd',
  logo: 'https://tse4.mm.bing.net/th/id/OIP.cNgGHT3WI__-kY2UZZDR4AHaHa?w=900&h=900&rs=1&pid=ImgDetMain'
}, {
  name: 'TAP Sports',
  manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
  clearKey: {
    'eabd2d95c89e42f2b0b0b40ce4179ea0': '0e7e35a07e2c12822316c0dc4873903f'
  },
  type: 'mpd',
  logo: 'https://tapdmv.com/logo-tapSPORTS-2021.png'
}, {
  name: 'Tap Movies',
  manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd',
  clearKey: {
    '71cbdf02b595468bb77398222e1ade09': 'c3f2aa420b8908ab8761571c01899460'
  },
  type: 'mpd',
  logo: 'https://cms.cignal.tv/Upload/Images/Tap-movies.jpg'
}, {
  name: 'TAP TV',
  manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
  clearKey: {
    'f6804251e90b4966889b7df94fdc621e': '55c3c014f2bd12d6bd62349658f24566'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.6ypmkyHr4CsiHriWt327pgHaHc?rs=1&pid=ImgDetMain'
}, {
  name: 'Tap Action Flix',
  manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
  clearKey: {
    'bee1066160c0424696d9bf99ca0645e3': 'f5b72bf3b89b9848de5616f37de040b7'
  },
  type: 'mpd',
  logo: 'https://tapdmv.ovationproductionsmanila.com/logo-TapActionFlix-2021-B.png'
}, {
  name: 'Teleradyo',
  manifestUri: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
  clearKey: {
    '47c093e0c9fd4f80839a0337da3dd876': '50547394045b3d047dc7d92f57b5fb33'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.VFN5ge6hBzP5uudSV5giGwAAAA?rs=1&pid=ImgDetMain'
}, {
  name: 'TECH STORM',
  manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tech_storm.mpd',
  clearKey: {
    '5675d85ce6754ba6aa8f6acc4660f76f': '140bfb365cf143c349f68699238a610c'
  },
  type: 'mpd',
  logo: 'https://logos-download.com/wp-content/uploads/2016/04/Nickelodeon_logo_logotype_2.png'
}, {
  name: 'Thrill',
  manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
  clearKey: {
    '928114ffb2394d14b5585258f70ed183': 'a82edc340bc73447bac16cdfed0a4c62'
  },
  type: 'mpd',
  logo: 'https://www.mncvision.id/userfiles/image/channel/thrill_150x150px.jpg'
}, {
  name: 'TMC',
  manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
  clearKey: {
    '96701d297d1241e492d41c397631d857': 'ca2931211c1a261f082a3a2c4fd9f91b'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.mskveWFrbAwpq6athkC91gAAAA?rs=1&pid=ImgDetMain'
}, {
  name: 'Travel Channel',
  manifestUri: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
  clearKey: {
    'f3047fc13d454dacb6db4207ee79d3d3': 'bdbd38748f51fc26932e96c9a2020839'
  },
  type: 'mpd',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2018_Travel_Channel_logo.svg/1200px-2018_Travel_Channel_logo.svg.png'
}, {
  name: 'True FM TV',
  manifestUri: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
  clearKey: {
    '0559c95496d44fadb94105b9176c3579': '40d8bb2a46ffd03540e0c6210ece57ce'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.mnFsqTyoPfS65QqSTLKHLAHaHa?rs=1&pid=ImgDetMain'
}, {
  name: 'TVN Movies (Tagalog)',
  manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
  clearKey: {
    '2e53f8d8a5e94bca8f9a1e16ce67df33': '3471b2464b5c7b033a03bb8307d9fa35'
  },
  type: 'mpd',
  logo: 'https://yt3.ggpht.com/a/AATXAJy1C8c3pOmn9lAsPovaRcKqIvw2OAAfHK-HtA=s900-c-k-c0xffffffff-no-rj-mo'
}, {
 name: 'TVN Movies',
  manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2406/default_ott.mpd',
  clearKey: {
    '8e269c8aa32ad77eb83068312343d610': 'd12ccebafbba2a535d88a3087f884252'
  },
  type: 'mpd',
  logo: 'https://yt3.ggpht.com/a/AATXAJy1C8c3pOmn9lAsPovaRcKqIvw2OAAfHK-HtA=s900-c-k-c0xffffffff-no-rj-mo'
}, {
  name: 'TVN',
  manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
  clearKey: {
    'e1bde543e8a140b38d3f84ace746553e': 'b712c4ec307300043333a6899a402c10'
  },
  type: 'mpd',
  logo: 'https://s3.amazonaws.com/ivacy-website-images/wp-content/uploads/2020/01/19140041/1200px-Logo_tvN.svg_-1024x406.png'
}, {
  name: 'TVUP',
  manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd',
  clearKey: {
    '83e813ccd4ca4837afd611037af02f63': 'a97c515dbcb5dcbc432bbd09d15afd41'
  },
  type: 'mpd',
  logo: 'https://cms.cignal.tv/Upload/Images/TVUP%20Logo%20.png'
}, {
  name: 'TV5',
  manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
  clearKey: {
    '2615129ef2c846a9bbd43a641c7303ef': '07c7f996b1734ea288641a68e1cfdc4d'
  },
  type: 'mpd',
  logo: 'https://cms.cignal.tv/Upload/Thumbnails/TV5%20HD%20logo%20(1).png'
}, {
  name: 'UAAP Varsity',
  manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
  clearKey: {
    '95588338ee37423e99358a6d431324b9': '6e0f50a12f36599a55073868f814e81e'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.lHehlIBc-0nftDyZSjNqJQHaEK?rs=1&pid=ImgDetMain'
}, {
  name: 'VIVA',
  manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
  clearKey: {
    '07aa813bf2c147748046edd930f7736e': '3bd6688b8b44e96201e753224adfc8fb'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.0RBFAFi5M4EojRsGMyb8ogHaEK?rs=1&pid=ImgDetMain'
}, {
  name: 'Warner TV',
  manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd',
  clearKey: {
    '4503cf86bca3494ab95a77ed913619a0': 'afc9c8f627fb3fb255dee8e3b0fe1d71'
  },
  type: 'mpd',
  logo: 'https://th.bing.com/th/id/OIP.8xIdcYektX82pKAdaXcQEgHaHr?rs=1&pid=ImgDetMain'
}];

export const categories = [
  'All',
  'Local',
  'News',
  'Sports',
  'Movies', 
  'Kids',
  'Documentary',
  'Entertainment',
  'Music',
  'Anime',
  'Lifestyle',
  'International'
];
