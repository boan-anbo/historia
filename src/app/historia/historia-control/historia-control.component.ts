import { Component, OnInit } from '@angular/core';
import {TimelineExtractorService} from '../timeline-extractor.service';
import {TimelineService} from '../timeline.service';

@Component({
  selector: 'app-historia-control',
  templateUrl: './historia-control.component.html',
  styleUrls: ['./historia-control.component.css']
})
export class HistoriaControlComponent implements OnInit {
  __inputText = sample;

  constructor(
    private timelineExtractorService: TimelineExtractorService,
    private timelineService: TimelineService
  ) { }

  ngOnInit(): void {
    this.StartProcessing()
  }




  ConsoleText() {

  }



  StartProcessing() {
    this.timelineExtractorService.StartProcessing(this.__inputText)
  }
}


const sample = `臺灣歷史[a]，目前有明確文獻記載且能考證時間點者，最早可上溯至1582年7月兩位西班牙人神父與一位葡萄牙人耶穌會士因風擱淺臺灣75天時所寫的三篇文字記錄[1]。臺灣的信史則大約從1624年荷蘭東印度公司展開統治開始[2]。但在文獻記載之前，臺灣早已有人類活動。距今3萬年前的臺東長濱文化是考古所知的臺灣最古文化[3]，較晚近的新石器時代則有南島語族的考古遺跡[2]。事實上，臺灣因地處南島語族活動範圍的最北邊，也被認為是南島民族在語言及遺傳上可能的發源地之一[4]，亦是分布區域的最北端[5]。

臺灣的地理位置介於中國大陸、日本與東南亞間，可做為各國船隻的停泊與貨物轉運站。在17世紀，臺灣中部曾有一超部落的大肚王國，而荷蘭及西班牙則分別在臺灣西南部及西北部進行殖民統治。之後荷蘭人將西班牙人驅逐並統治臺灣西部的大部分。1661年4月，鄭成功率兩萬五千大軍及數百艘戰艦圍攻荷臺首府熱蘭遮城，使荷蘭在1662年2月1日簽約投降，臺灣進入明鄭時期，在此期間漢人大量移民臺灣。1683年，明鄭降清將領施琅率清軍攻臺，鄭克塽投降，臺灣進入清治時期。[2]

1894年，大清與日本爆發甲午戰爭[6]，隔年，雙方在下關簽訂《馬關條約》，將臺灣割讓予日本，臺灣進入日治時期[7]。

1945年第二次世界大戰結束，日本戰敗。日本簽署的《降伏文書》中接受同盟國的《波茨坦宣言》，並在波茨坦宣言等中接受《開羅宣言》，而《開羅宣言》要求將臺灣、澎湖、滿州歸還予中華民國[8]。1945年9月2日，盟軍最高統帥麥克阿瑟元帥發布《一般命令第一號》，命令在中國（除滿州）、臺灣以及越南北緯十六度以北的日軍向代表同盟國的蔣中正投降，並命令日本及日本控制之軍事及民間政權協助同盟國佔領日本[b]及日本控制之地區[9]。蔣介石委派陳儀將軍接受在臺日軍的投降後，隨即片面宣布臺灣光復[10][11]。美國和英國等同盟國則不同意中華民國片面宣布恢復對臺灣的主權，並表示臺灣主權之處理必須等到與日本簽訂和平條約時才能決定[12][13]。日本也表示，接受了《波茨坦宣言》和《開羅宣言》的《降伏文書》只具有休戰協定的性質，不具有處分領土的性質[14]，一直至1952年《舊金山和約》生效時，臺灣才脫離日本[15]。日本在《舊金山和約》中只聲明放棄臺灣而未表明其歸屬，臺灣的歸屬須在將來由同盟國決定[16]。

1949年4月中國人民解放軍在國共內戰中渡江，中華民國首都南京失守，是年12月7日，政府播遷臺灣[17]。1991年起，臺灣與澎湖、金門、馬祖四地公民自1991年起以選舉決定全數中華民國國會議員席次；1996年起，直接選舉產生中華民國總統。但認為中華民國在臺灣不合法的人士則依據國際法主張中華民國政府並不能藉由選舉而在臺灣就地合法[18]。不曾統治臺灣的中華人民共和國政府則聲稱擁有其主權。此外，臺灣在國際法上的地位也是引發主權爭議與臺灣獨立運動產生的原因之一 [19]。


目錄
1\t早期臺灣
1.1\t臺灣原住民史
1.2\t對外關係
1.2.1\t中國大陸
1.2.2\t日本
2\t原住民政權
2.1\t大肚王國
3\t荷西時期
4\t明鄭時期
5\t清治時期
5.1\t治臺前期
5.2\t治臺後期
6\t臺灣民主國
7\t日治時期
7.1\t初期
7.2\t文官總督時期
7.3\t後期
8\t中華民國時期
8.1\t政治發展
8.2\t外交及海峽兩岸關係
8.3\t經濟變化
8.4\t社會變遷
8.5\t文化
8.5.1\t文學
8.5.2\t美術
8.5.3\t戲劇與音樂
8.5.4\t電影
8.6\t大眾傳播
9\t相關條目
9.1\t臺灣專門史
10\t註釋
11\t參考文獻
12\t延伸閱讀
13\t外部連結
早期臺灣
主條目：臺灣史前時期、臺灣原住民族、臺灣島史和臺灣考古遺址列表

中央研究院歷史語言研究所臺灣考古館

左鎮人想像復原頭像
臺灣原住民史
距離現今三百萬至一萬年的更新世冰河期期間，臺灣曾數次與亞洲大陸本土相連。[20]當兩地相連時，大陸的生物及古代人類可能來到臺灣定居。目前臺灣已知最早的人類，是在臺南市左鎮區一帶挖掘出的原始人類骨骸，被稱為左鎮人。但目前在左鎮地區尚未發現相對應的文化。[21]然而，根據「臺灣血液之母」林媽利教授關於臺灣人血液成分之研究，臺灣原住民族的祖先是在1萬5000年前冰河時期結束之前，從東南亞島嶼等地遷徙至臺灣。[22][23]此外，在臺灣原住民的傳說中，如賽夏族的矮靈祭或排灣族的，有些故事描述可能是關於矮黑人（尼格利陀人），但是迄今尚無相關考古證據。[24][25]

在挖掘數處考古遺址後得知，臺灣在舊石器時代晚期（50,000年前－10,000年前），就已經開始有人類居住[26]。以現有的證據而言，目前臺灣最早的文化為長濱文化（以臺東縣長濱鄉的八仙洞遺址最具代表性），挖出了大量的粗製石器及骨角器[27]。雖然長濱文化與現今中國南方的文化有某種程度的相似性，然而以目前的考古學證據而言，尚不能確定臺灣的舊石器時代文化是哪一種族群的人類所留下的。


臺灣原住民族與廣泛分布的南島語族關係密切

卑南遺址，由日本學者鳥居龍藏拍攝
臺灣新石器時代及金屬器時代的文化與舊石器時代文化關聯性不高，較著名者有新北市八里區的大坌坑文化及十三行文化、臺北盆地的圓山文化及植物園文化、臺東縣的卑南文化等遺址。其中部分遺址中曾出土來自中國的錢幣等物品，說明部分文化可能與臺灣以外地區有所接觸[28]。目前已能確定新石器時代（始於紀元前5,000年）以來的史前文化，是臺灣南島語系民族所遺留[28]。

日本學者移川子之藏曾表示：「今日在臺灣被視為原住民的諸民族之間，不乏證明存在更早期先住民族的口頭傳承。自史前時代起，在本島即有近20種的先住民族。」[29]此外，也有部分文化可能是今日原住民的祖先，例如十三行文化人可能是凱達格蘭族的祖先，不過目前的考古證據還不能完全確定臺灣原住民與新石器時代文化間的對應關係。

臺灣原住民族的呈現多元而複雜，中華民國接續日治時期研究分類當作官方認定的族群有：泰雅族、賽夏族、卑南族、阿美族、排灣族、布農族、鄒族、魯凱族和達悟族等9族[30]。21世紀後，新增認定族群有：邵族、噶瑪蘭族、太魯閣族、撒奇萊雅族、賽德克族、拉阿魯哇族、卡那卡那富族等7族，此等7族今日多居住在山地與東海岸縱谷，其文化特色至今大抵尚清晰可辨[30]。

除了官方認定的族群之外尚有：凱達格蘭族、道卡斯族、巴宰族、巴布拉族、貓霧捒族、洪雅族、西拉雅族以及猴猴族8族不等，主要出自於傳統所謂的平埔族群[31]。臺灣原住民族過去沒有文字，因此只能藉由外來者撰寫之古籍記載及考古證據來推斷原住民族的早期歷史，其中重要的歷史文獻包括《新港文書》、《東番記》、《蕭壠城記》[32]等。

對外關係
中國大陸
臺灣與古中國的政治聯繫情況，學者間有不同解讀，但清康熙23年（1684年）以後被納入大清帝國版圖是無爭議的[33]。在康熙之前，這個後來名為臺灣的島嶼有數十個到數百個原住民族各部落林立，十七世紀後有荷蘭和西班牙殖民統治部分的地區，古代中國最早將臺灣納入版圖並實際統治係南明時期的明鄭東寧國政權，而在清朝時期康熙將臺灣納入版圖前，臺灣從未被視為中國領土[34]。此處所說之臺灣不包括澎湖群島。

中國古代史書，包括《三國志·吳志》、《隋書·流求傳》及《文獻通考》中，被認為有疑似臺灣的記載出現。例如《隋書·流求傳》記載：「流求國在海中，當建安郡東，水行五日而至[35]。」中華人民共和國及部分學者主張這是臺灣與中國早期聯繫的證據[36]，不過一些觀點主張並沒有證據顯示這些文獻中描述的就是西太平洋眾多島嶼中的臺灣，部分學者認為史書所記載的是琉球群島[37]。

日本
室町時代以來，日本人開始以高砂、高砂國、高山國稱呼臺灣。安土桃山時代文祿2年（1593年），豐臣秀吉派遣使者原田孫七郎諭令高山國納貢，但是因使者找不到可傳遞文書給高山國的人而無功而返[38]。江戶時代慶長14年（1609年），德川家康任命有馬晴信曉諭土番納貢。元和2年（1616年），德川家康任命長崎代官村山等安征服臺灣，等安以次子村山秋安率領2、3千人征臺，為規模最大的一次，但因遭遇風災無功而返。[39]寛永18年（1641年），鎖國制度完成，交流漸次減少。不過在明鄭時期，臺灣與鎖國時期的日本仍保持相當的貿易和政治往來，臺日雙方的貿易量在1665年到1672年達到高峰[40][41]。請參見日本乞師。

原住民政權

臺灣荷西殖民時期明朝澎湖與臺灣本土大肚王國

16世紀歐洲的臺灣古地圖，16世紀前的臺灣均被描繪為三塊分開的島嶼
大肚王國
主條目：大肚王國
大肚王國是一鬆散的部落聯盟，在1645年左右所統轄的範圍主要是今日大肚溪流域，大約是大甲溪北岸的臺中市后里之南至烏溪（大肚溪）流域。荷蘭在1638年知道大肚王國為是統治了臺灣中部原住民族的政權。是由27個村社[c]的巴布拉族與貓霧捒族、巴則海族、洪雅族、道卡斯族所組成的一超部落王國，共主稱為「大肚王」[42][43]，在鼎盛時期的領域範圍南端約到鹿港，北方則在大甲溪流域。該王國在1644年荷蘭人武力入侵後降服，1645年4月荷蘭人召開南部的地方會議，大肚王國的甘仔轄·阿拉米跟荷蘭東印度公司訂約，表示臣服，不過直到1662年荷蘭人離開臺灣為止，大肚王國都維持半獨立狀態。[44]

大肚王國雖對荷蘭東印度公司友善，但從未歸順鄭氏王朝，甚至頑強抵抗鄭軍，導致鄭成功等人認為他們受到荷蘭的煽動。1661年鄭成功取得部分臺灣統治權。由於實施「兵農合一」政策，派遣鄭軍分赴各地屯墾，侵害到原住民族的活動空間，導致鄭氏王朝和大肚王國發生數次武裝衝突。

鄭氏政權滅亡後，1722年（康熙六十一年），出任巡臺御史的黃叔璥在其《臺海使槎錄》一書中記載：「大肚山形，遠望如百雉高城，昔有番長名大眉。」雖寥寥數語，卻說明17世紀的臺灣中部確實有一個超部落的王國。1731年（雍正九年），清廷官吏對原住民族指派勞役過多，引起原住民族群起反抗，發生大甲西社抗清事件，翌年遭鎮壓，各族人陸續逃離原居地，遷往埔里[d]一帶，大肚王國終告瓦解。

荷西時期
主條目：臺灣荷西時期和福爾摩沙人

1626年葡萄牙人所繪荷蘭人在福爾摩沙（大員）臺江內海一帶之活動
15、16世紀，歐洲國家對外擴張勢力，開闢往東亞的新航路，發現美洲新大陸，縮短了亞洲與歐洲的航行距離，世界從此進入大航海時代[7]。在海權爭霸國際環境下，臺灣進入歷史時代。17世紀初，除了一些零星的琉球人、漢人、海盜遊走進出於臺灣之外，西方重商主義國家也開始注意臺灣。此時遠東海面已成為歐洲三國角逐的形勢：租得澳門的葡萄牙、殖民菲律賓呂宋島的西班牙、據有爪哇的荷蘭，在遠東海面展開商業和殖民的競爭[45]。


《大員港市鳥瞰圖》，收藏於荷蘭米德爾堡哲烏斯博物館（Zeeuws Museum）
荷蘭人在遠東的商業目的原以明朝為重要對象，但因受制於葡萄牙人的競爭和明帝國的抵制，荷蘭人只好轉向澎湖，先後在1604年、1622年兩度進占澎湖[46]。但因澎湖為大明帝國領土，所以明政府亦兩度派兵驅離荷蘭人。1604年沈有容出兵澎湖驅逐荷蘭人，歷經8個月不分勝負，荷蘭終而議和。在議和訂約中，明政府要求荷蘭退出澎湖，如果退出澎湖，去占領對面的「化外之島」臺灣，明政府則無異議。經此議和，荷蘭人遂在1624年進入南臺灣，建「奧倫治城」，後又改建為熱蘭遮城。後因郭懷一事件，於1653年建普羅民遮城[46]。


《熱蘭遮城與長官官邸鳥瞰圖》約翰·芬伯翁／約1635年／73 x 103 cm／荷蘭 海牙國家檔案館藏
荷蘭人統治臺灣的第3年（1626年），西班牙也自菲律賓馬尼拉派兵占領臺灣北部[47]。他們先後佔據雞籠、滬尾一帶，並建造聖多明哥城，與南部的荷蘭人展開殖民與商業競爭，但情況不佳[47]。此外，西班牙統治者在金山、三貂角（San Diego）等地都建有天主教教堂，試圖向原住民傳教[47]。西班牙神父也研究原住民語言，著有《臺灣島淡水語詞彙》（西班牙語：Vocabulario de la lengua de los Indios Tanchui en la Isla Hermosa）。1642年荷蘭人趕走西班牙人，佔領了二城[48]。


古荷蘭語和新港文（右）並列的《馬太福音》，寫於1650年左右。
荷蘭統治臺灣前後共約38年。其極盛時（1650年）的統治範圍包括嘉南平原為主的地區，北部的西班牙殖民地二城和以及今臺東沿海一帶。荷蘭人對原住民族（福爾摩沙人）採取安撫、鎮壓、教化兼施的方式治理，採行「地方會議」（Landdag）制，從各村選出長老，每年集會以宣導荷蘭當局時政措施，地方會議分北路、南路、淡水和卑南四區，長老須向荷蘭當局宣誓效忠，擁有荷蘭當局授予的藤杖後在社內行使司法權。荷蘭人還廣泛宣傳基督新教的加爾文教派，在傳教同時推廣文教工作，新港文書是為其範例之一[49]。


約翰·芬伯翁作品《澎湖島及福爾摩沙海島圖》，約1640年繪。
當時，移居臺灣的漢人也已有一定數量，也有部分漢人被招募來臺開墾。漢人在很多方面扮演輔助荷蘭人統治的角色，包括擔任「社商」（包稅商）等[e]荷蘭東印度公司利用競標方式將某社的商業交易權外包給出價最高者，並且分四季向社商收稅，藉以增加財政收入，稱為「贌社」[50]。但因為賦稅沉重、人民無土地所有權，田地均為王田，歸荷蘭國王所有，導致部分臺灣人民對荷蘭統治者時有不滿。1652年，因甘蔗減產與人頭稅加重，爆發了郭懷一事件[2]。此外，1629年與1636年也分別發生麻豆溪事件與蕭壟事件兩次大型的福爾摩沙人原住民族反抗活動。


1662年荷蘭人所繪福爾摩沙
經濟方面，荷蘭人引進了許多新物種，包括芒果、釋迦、甘藍菜、大豆、胡椒、波羅蜜、呂宋菸草、豌豆、蕃茄等等，同時也引進了黃牛[51]。當時荷蘭人所使用的土地面積單位「摩爾亨」（Morgen），相當於「甲」[f]，一直沿用至今。此外，荷蘭人在臺灣發展貿易，並以臺灣作為轉口站，臺灣成為明朝、日本、南洋、歐洲等地的貨物集散中心[52]。此時的臺灣已躍入以出口貿易為導向的海洋貿易體系，有別於傳統中國自給自足的封建式小農經濟。不過，荷蘭人在臺灣的統治畢竟是剝削式的統治，1650年左右，荷屬東印度公司在臺灣的每年淨收入約40億荷幣（約4噸黃金）[52]。

明鄭時期
主條目：明鄭

樹立於安平古堡的鄭成功像
1644年，滿族八旗軍攻佔燕京，明朝部分遺臣在中國南方先後擁立幾位宗室為帝，組織流亡政府，繼續抗清，是謂南明。鄭成功就是當時抗清的一股強大勢力。鄭氏於1658年至1659年出兵金陵失敗後，決定轉進其父鄭芝龍、顏思齊等武裝海商曾經略之臺灣。1661年，鄭成功率領軍隊約25,000人先抵澎湖，然後進入臺灣，迅速攻佔各地，展開對荷蘭人之熱蘭遮城的進攻，終在翌年攻下熱蘭遮城，擊敗了臺灣荷蘭東印度公司政權，佔領了南臺灣建立臺灣史上第一個漢人政權[7]。

鄭成功佔領後，改臺灣為東都明京。1662年，在得知永曆帝死於昆明後，鄭經改東都為「東寧」。此後，鄭成功祖孫三世始終皆以「大明延平王」的郡王爵位，並沿用桂王登基後的永曆年號，禮遇眾多明朝宗室。佔領臺灣之初，鄭成功設立京畿承天府，並以新港溪[g]為界，北路為天興縣[h]、南路為萬年縣[i]。鄭成功由於島內糧食不足，鄭氏軍隊各營各鎮部隊，分批在嘉南平原、屏東平原上屯田開墾，故該地區留下帶有「營」、「鎮」、「勁」、「協」等稱號的地名（例如左營、前鎮、柳營等），延用至今[53]。

1662年，三十九歲的鄭成功病逝之後，因亂倫而被罷黜的王世子鄭經從思明州率軍返回東寧，打敗了叔父鄭襲，由於無法再得到明朝皇帝的敕令，於是自行嗣延平王位及大明招討大將軍之職。鄭經稍後將所有留守廈門的鄭氏殘存勢力撤到臺灣，將天興、萬年二縣設為州。與鄭經有密切政經往來的英國東印度公司以「臺灣國王」（The King of Tyawan）作為其外交稱謂[54]。


「全臺首學」臺南孔廟
在參軍陳永華的輔佐下，鄭經經營與英國、日本及東南亞的貿易，並取得武器彈藥的補給。主要的出口品是蔗糖。英國東印度公司也一度在臺設立商館，但經營並不理想[54]。此外，鄭氏政權也有計劃的在臺灣植入漢文化，鄭經在陳永華的建議下，於1665年在臺南建先師聖廟，設國子監，是為漢文化的「全臺首學」[55]。沈光文則成立了臺灣最早的詩社「東吟社」[56]。

1669年鄭經以比照李氏朝鮮事例、世守臺灣、稱臣朝貢等條件和大清談判，因大清堅持鄭氏須剃髮易服，談判破局[57]。1674年耿精忠、尚可喜、吳三桂等發動三藩之亂。鄭經率兵響應，渡海攻打大清治下的福建與廣東，奪下泉、漳、汀、潮、惠數州府。1680年，鄭經海戰失利，棄守閩粵，撤兵回臺[56]。翌年，鄭經去世，鄭氏政權兵變，要員馮錫範弒監國世子鄭克𡒉，立其弟鄭克塽，國政日劣，人心渙散。1683年，由明鄭投奔大清的施琅率軍攻臺，海戰失利，鄭克塽向大清投降，結束鄭氏三代在臺23年的統治[56]。

清治時期
主條目：臺灣清治時期

《臺南地圖》作者不詳／十八世紀
治臺前期
參見：渡臺禁令、渡臺悲歌、臺灣分類械鬥、朱一貴事件和林爽文事件
從荷蘭治臺時期所引進的西方生產方式、生產項目加上臺灣得天獨厚的氣候，稻米一年二熟、三熟。臺灣又盛產蔗糖及茶；在水產有烏魚，每年所生產的烏魚子是世界名產，全世界僅有俄羅斯所生產的魚子醬可與比擬；在礦產上又有金、煤、硫磺等；在林產上有極為高貴的檜木木材及樟腦，故在經濟上有極重大的利益存在。大清雖領有臺灣，但剛開始對臺灣並無強烈的領土野心。部分官吏認為「臺灣僅彈丸之地，得之無所加，不得無所損」，倒不如「徙其人而空其地」，因此皇帝有意放棄臺灣，後因率兵攻臺的將領施琅力爭，才將臺灣併入大清帝國之版圖[58]。清治初期，與福建廈門合署臺廈道，道署下設一府三縣，即臺灣府、諸羅縣、臺灣縣、鳳山縣，隸屬於福建省[59]。但是，自從朱一貴事件後，清政府於雍正元年（1723年）不但將臺灣與廈門分署，從臺廈道升格為臺灣道，又在諸羅縣北部增設淡水廳與彰化縣[60]。雍正五年（1727年），正式於臺南運作的臺灣道行政區劃之下，除既有一府四縣一廳外又於澎湖群島增設澎湖廳[59]。嘉慶十七年（1812年），在宜蘭地區增設噶瑪蘭廳[59]。

大清統治臺灣共計212年（1683年—1895年），儘管其最後並未放棄臺灣，但早期對臺灣仍採取「為防臺而治臺」的消極態度，為節省行政、治安成本限制人口成長，規定官吏不得攜家帶眷；駐軍採班兵制[61]，三年輪調換班，家眷不得隨軍來臺。根據「臺灣編查流寓令」中有關渡臺限制有三：一、渡行臺灣者必須事先取得許可，密航者處以懲罰。二、渡行臺灣者不得攜眷，已渡臺者亦不得接取家族。三、廣東屢成海盜淵藪，因積習未改，其住民不許渡臺（即渡臺禁令，因為粵東人在中國屢次幫助鄭軍對抗清軍）[62]。嚴禁閩粵漢人無照移民臺灣，且不准攜帶家眷；但閩粵人民因山多田少，資源有限，乃不斷湧入。他們或正式持有墾照入臺，或買通船頭偷渡，冒「黑水溝」之險前往臺灣。


漢人與清廷在臺灣所實際控制之區域
禁渡措施對臺灣的社會產生巨大影響，數次強制非法移居臺灣者返回原戶籍地；由於禁帶家眷，導致臺灣男女人口比例失衡，因此不少漢人男子娶平埔族女子為妻，造成平埔族人口減少；並產生童養媳等問題。大量無業的單身男子（被稱作羅漢腳）游手好閒，亦因公權力不彰，社會由豪強門閥把持，漢人移民多輕視官府與法令，使社會治安敗壞，械鬥頻傳。直到1874年牡丹社事件後，福建船政大臣沈葆楨才奏請解除該禁令[63]。

定居來臺的漢人，著重於土地開墾和水利建設。土地開發的區域呈現為「由南而北，先西後東」的順序。今日臺灣尚有大量帶有「股」、「份」、「結」的地名，如五股、頭份、五結等，顯示當時已有墾戶股份或結首制的形式來開發土地[64]。為了提高農作物收成，開始興修大量水利設施，著名的如位於今彰化縣的八堡圳、今臺北市的瑠公圳、今高雄市的曹公圳等。農業生產的主要作物則以稻米和甘蔗為主[65]。同時，經濟的發展伴隨了港口與商貿的興起，隨著貿易量的發展，在臺灣府城之後，又有鹿港、艋舺等口岸發展興起，有「一府二鹿三艋舺」的說法。


平埔族之一的西拉雅族人物畫像。右圖男子用鼻子吹簫，是其一大特色。
由於臺灣官府社會掌控力較低，仰賴土豪協調地方，在大清統治臺灣的兩百多年間，臺灣民變迭起。班兵制度三年輪調，兵員素質低而擾民[66]；清政府的政策無法有效約束臺灣移墾社會的發展，部分臺灣民眾乃因之起而反抗，發生反抗事件，較大規模者有70多次。「三年一小反，五年一大亂」的俗諺乃形容清領二百多年，臺灣社會動亂頻繁的情況[67]。其中最著名的大規模民變有朱一貴事件、林爽文事件和戴潮春事件等。除了反清變亂之外，各族群內部也經常發生分類械鬥，其中既有不同族群間的（如頂下郊拼、閩粵械鬥、漳泉械鬥）、不同姓氏間的（如同治年間竹塹北門的蘇黃二姓械鬥）、職業團體間的械鬥和因商業利益而起的械鬥等[68]。

清政府將原住民分為「生番」（以高山族為主）和「熟番」（以平埔族為主）兩類，其中對生番採取封山隔絕政策，劃定「土牛溝」為界，嚴禁漢人越山開墾以避免番漢衝突，而熟番和漢人之間常因土地問題衝突，不少平埔族的土地被漢人違反禁令用欺騙或搶占等方式占有[69]。部分平埔族因此開始進行大遷徙，進入蘭陽平原、埔里盆地、東部山區，或則日益漢化。

治臺後期
參見：牡丹社事件、開山撫番、劉璈和劉銘傳

億載金城，為1875年沈葆楨延請法國工程師設計建造，建築仿巴黎要塞。
清廷對臺灣的消極態度一直要到19世紀中葉才改變，其原因是由於國際環境的改變。第一次鴉片戰爭後，歐洲勢力衝擊著清帝國統治下的臺灣。第二次鴉片戰爭後，清政府同意讓臺灣開港通商（安平、淡水），不久又開放打狗[j]和雞籠[k]二港。此後，臺灣的對外貿易相當熱絡，臺灣盛產的茶、蔗糖和樟腦大量出口，這增加了就業機會與政府稅收，一些新的城市也紛紛興起[70]；同時也導致原住民族被迫東遷、客家人地位上升、買辦興起與水土環境被破壞等社會和環境影響。

西方文化伴隨著臺灣開港再次傳入臺灣。在西方各教派中，以基督教的長老教會影響為最大，著名的來臺傳教士有馬雅各、馬偕、甘為霖、巴克禮等[71]。同時，各國的勢力也紛紛進入臺灣，1867年（同治六年），發生了羅發號事件，十幾名美國船員在恆春一帶被原住民族殺害[72]。最後美國駐廈門領事李仙得與恆春半島十八社首領簽訂了《船難救助條約》，這等於否定了清政府在番地的管轄權，為其後大日本帝國出兵臺灣提供了理由[72]。

1871年，54名琉球人因颱風而漂流到恆春半島，被原住民族所殺。日本派代表要求清政府處理，而清政府以「生番係我化外之民」[73]為由拒絕，結果在1874年（同治十三年），大日本帝國派兵攻打臺灣南部牡丹社的原住民，是為牡丹社事件。之後清政府照會日方，要求日本撤軍，並承認此行動乃「保民義舉」，日方認為這等於放棄對琉球王國的宗主權，而清廷則認為「保民義舉」是指日方提出的受害漁民中有4人為小田縣人。[l]同時自此以後，為因應國際局勢的變化，清政府於是積極擬定經營臺灣的方針。 1884年10月，中法戰爭時，法國海軍將領孤拔也曾佔領基隆，進攻淡水，並下令封鎖臺灣[74]。


劉銘傳肖像。
1875年，沈葆楨以大清帝國欽差大臣身份再度抵臺，儘管他在臺灣僅停留不足一年，卻對臺灣近代化有所建樹。他推行開山撫番的政策，下令開北、中、南三路通往後山，鼓勵漢人入山開墾，至此臺灣東部才逐漸納入大清帝國的領土，但在以武力開拓東部的過程中，也殺害了不少原住民族[75]。此外廢除渡臺禁令，積極推動近代化建設，如機器採煤；在安平建新式炮臺億載金城等。沈葆楨數度奏請調整臺灣行政區劃。次年增設臺北府、恆春縣、埔裏社廳、新竹縣、淡水縣、基隆廳，並改噶瑪蘭廳為宜蘭縣、諸羅縣為嘉義縣及增設卑南廳，全臺至此共被分為二府八縣四廳[63]。之後經營臺灣的是福建巡撫丁日昌，他繼承了沈葆禎的現代化政策，修建了臺灣最早的電報線。

光緒七年（1881）八月劉璈任職分巡臺灣道，即臺灣實際統治者。1883年，中法戰爭爆發。劉璈率軍積極抗戰，創下碩果纍纍。[76]。連橫在其所著的《臺灣通史》中亦稱他為「有經國之才」的能吏「[77]。為冒領功名，擊其政敵，劉銘傳誣告劉璈十八款。[78]

1885年，中法戰爭結束後，清政府感到了臺灣的重要性，提升臺灣的行政層級，將隸屬於福建省將近兩百年的臺灣獨立出來，改設為行省，並任劉銘傳為首任臺灣巡撫。伴隨臺灣建省，行政區劃再次調整，全臺從南到北分為三府（臺南府、臺灣府、臺北府）、一州（臺東直隸州）、十一縣（淡水、新竹、苗栗、臺灣、彰化、雲林、嘉義、安平、鳳山、恆春、宜蘭）、三廳（基隆、澎湖、埔裏社）[59]。劉銘傳在臺灣積極實施建設，在1891年有了大清帝國第一條官辦客運鐵路（基隆—新竹），南北普設可通福州的電報線，同時也設立郵政與新式學堂，臺北城的街頭亮起了路燈。在劉銘傳的積極治理下，臺灣成為當時大清帝國近代化程度最高的行省[79]。其後的臺灣巡撫邵友濂、唐景崧也繼承了其政策方針，不過由於經費緊縮，建設步伐相對放緩。但是，臺灣建省還不到十年，由於甲午戰爭（1894年－1895年）失敗，清廷被迫與日本簽訂《馬關條約》。清領後期的樟腦為臺灣特產，是合成塑膠的原料，19世紀後期國際需求量大增，使臺灣產量曾達到世界第一。

臺灣民主國

臺灣民主國國旗

臺灣民主國發行的郵票
主條目：臺灣民主國和乙未戰爭
甲午戰爭後，大清國欽差大臣李鴻章代表清廷割讓臺灣給大日本帝國。清政府將臺灣割讓給日本的決定，在許多臺灣住民中引起不滿，時稱「紳民奔走相告，聚哭於市」，希望清政府改變態度。1895年5月25日，臺灣人民宣布脫離大清國成立「臺灣民主國」，推舉原巡撫唐景崧為大總統、劉永福為大將軍、李秉瑞為軍務大臣。同時，臺灣民主國制定「藍地黃虎旗」為國旗、刻有「臺灣民主國寶印」文字的國璽、並以「永清」為年號。發表《臺灣民主國獨立宣言》，向各國通告建國宗旨，希望能藉此引發國際干涉，使臺灣免於被日本統治。[80]臺灣民主國於臺北成立當天，下著細雨，當時已有雨傘和人力車，外頭還放著鞭炮，許多富商也來參與總統就職大典。[81]

1895年5月29日，日軍在基隆附近的澳底登陸時並未受到強烈的抵抗，接著攻打瑞芳時有個小型的接觸戰。日軍於6月3日攻佔基隆時扼守獅球嶺砲臺的清軍已撤走，因此很容易便推進到汐止（水返腳）紮營，準備進入臺北城。根據臺灣大學歷史系副教授的吳密察的研究，此時的臺北城已陷入無政府混亂狀態，因為唐景崧等滿清官員已於6月4日爭先恐後倉皇逃回大陸，留下來的清軍紀律很差。傳統的軍人，就是穿著軍服的強盜、穿了制服的土匪。這樣的軍隊在主帥相繼遁逃後就很容易變成亂民，這些清軍士兵丁潰散後四處劫掠、遍地積屍。治安敗壞，臺北人心惶惶，臺北民眾閉隘閘以守禦自保。所以當時在大稻埕的外國人就打電報到日本部隊，要求日本軍隊趕快進入臺北城；臺北城內的有錢仕紳富商們也希望日軍能及早進城維持社會秩序[82]。雖然他們不知道日軍是好是壞，但那時臺北城的清軍已成了人人畏懼的亂民強盜[83]。留守士人紳商乃集議請日軍進城，以保全居民生命財產，並先後派辜顯榮與外籍人士代表等赴基隆見日本人並一路引領日軍進臺北城。日軍於6月7日未發一彈即順利進城。日軍入城後即布告安民。17日，臺灣總督樺山資紀舉行「始政式」。日軍在進臺北城時沒受到什麼抵抗；渡過淡水河向南方推進不久，在三峽、在大溪都受到了真正的抵抗。[84][85][86]

6月下旬，臺灣民主國餘部在臺南擁立大將軍劉永福為第二任大總統。為籌措經費，劉永福曾發行紙幣、郵票等。有些學者將劉永福在臺南所建的政權稱之為「臺南共和」（Tainan Republic）[87]或「第二共和」（Second Republic）[88]。此後三個月，臺灣民主國和日軍發生不少規模不小的血戰，例如八卦山之役。但到了10月下旬，劉永福也棄守逃亡，日軍佔領臺南，結束臺灣民主國184天的歷史[89]。

日治時期
主條目：臺灣日治時期

1895年日軍進臺北城的想像圖，遠方城門為北門-承恩門。
初期
參見：後藤新平、西來庵事件和六三法
臺灣民主國瓦解後，日本基本上已控制全臺，但各地仍常有抗日事件。早期著名的抗日領袖有簡大獅、柯鐵虎、林少貓等，但到1902年就先後被鎮壓下去。之後的重要抗日事件有1907年發生的北埔事件、1912年的林圯埔事件，1913年的東勢角事件、苗栗事件、1915年余清芳領導的西來庵事件與1930年莫那·魯道領導的霧社事件等[90]。後期的抗日運動除西來庵事件外普遍規模較小，且在密謀階段就被剿殺，此後漢人就不再有大規模的武裝抗日。


西來庵事件被捕人士頭戴竹籠，自臺南刑務所押至臺南地方法院受審
1896年，日本公布《六三法》，授權臺灣總督得頒布具有法律效力之命令[91]。早期總督都是武官，權力極大，融行政、立法、司法、軍事權於一人。前三任臺灣總督樺山資紀、桂太郎、乃木希典的任期都不長；第四任總督兒玉源太郎的任期則長達8年，但實際治理臺灣的是民政長官後藤新平[92]。在「生物學原則」的運用下，後藤新平在導入近代政策的同時，也借用了源自中國的保甲制度並加以重新制定，並且在兒玉源太郎任總督時，廢除由前任總督乃木希典所頒布的三段警備制，將全臺納入警察管轄[92]。

在公共事業方面，日本在臺灣建立詳細的戶政與地政檔案、統一度量衡、設立臺灣銀行、日臺同步幣制，以及大興電信事業[92]。至1919年，全臺已有7,146支電話與6條電報線。交通方面，1908年西部縱貫線鐵路（基隆－高雄）通車，同時基隆港和高雄港也被加以修建。農業上推動綠色革命，使臺灣成為「米糖王國」。而在文化上，則施行同化懷柔的策略，對臺灣人教授日語，並實行日本人、漢人和原住民族三種不同的教育體系[92]。佐久間左馬太總督在任時開始對原住民族施行理蕃政策，以使原住民順應接受日本的統治[93]。社會方面，總督府致力廢除「三惡」，即鴉片、纏足與辮髮。同時加強衛生體制，改造下水道並進行捕鼠工作。改農曆為公曆，在街頭放置時鐘，培養臺灣人的守時觀念。推行市區改正計劃，對後來臺灣城市的營建影響深遠[94]。

文官總督時期

1923年臺北小學生於日本皇太子裕仁訪問臺灣時群集總督府前
參見：嘉南大圳、臺灣議會設置請願運動和霧社事件
隨著民族自決的風潮與日本進入「大正民主」時代，1919年後，臺灣總督可由文官擔任，軍權另設臺灣軍司令官掌管，治理臺灣的策略也改為同化政策[95]。臺灣在許多方面與日本逐漸接軌。1922年，《臺灣教育令》通過，臺灣實行與日本相同的學制[96]。1921年，日本國會通過《法三號》，修正部分六三法的內容，臺灣開始通用日本的民法、刑法與商法。1920年，全臺行政區劃改為州廳、郡市與街莊三級制，並推行有限的地方自治。在經濟上，臺灣陸續完成了數個大中型基礎設施建設，如桃園大圳、嘉南大圳、日月潭水力發電所等[97]。米糖產業也進一步發展，特別是蓬萊米於1922年研發成功大大提高的稻米產量[98]。


臺灣地方自治聯盟成員合影
日治中期，臺灣社會受到各種新思想的啟迪，民智已開，一些留日人士大力推行政治、社會文化運動，力求平等待遇。1914年，林獻堂奔走成立臺灣同化會[99]，追求臺灣人與日本人的地位平等，但成立不久即被勒令解散。1920年1月，留日臺灣青年在東京發起新民會，推舉林獻堂為會長，主張改革臺灣政治體制[100]。並有臺灣議會設置請願運動等社會政治運動的展開，要求臺灣自治[101]。1921年，蔣渭水等人在臺北成立了臺灣文化協會，藉著對臺灣文化活動的關心，增進臺灣人的知識及對政治的關心，以求喚醒臺灣人的覺醒，啟蒙臺灣人的意識，尤其想要喚起臺灣人對日本殖民統治政策的批判。蔣渭水於1927年7月10日成立臺灣民眾黨，臺灣第一個政黨宣告誕生[102]。


1935年市會及街庄協議會員選舉開票日
總督府終於在1935年和1939年在臺灣舉行州會議員和市會議員的選舉，這是臺灣人首次擁有選舉權。同時，農工運動也蓬勃展開，簡吉成立臺灣農民組合[103]，是日治時期臺灣最大的農運團體。1928年，蔣渭水指導成立臺灣工友總聯盟，發動勞工罷工以爭取權益；同年，臺灣共產黨在上海成立，主張臺灣獨立[104]，但被總督府認定為非法團體。面對農工運動的蓬勃展開，臺灣總督府開始進行全面鎮壓。1929年2月12日，臺灣農民組合與臺共數千名成員被捕，是為二一二事件。1931年，臺灣民眾黨被查禁，附生於民眾黨的臺灣工友總聯盟也趨於式微。之後，臺灣地方自治聯盟也在1937年7月自動解散，日本治臺進入緊縮階段。[105]


嘉義街外/ 陳澄波/ 1926/ 畫布、油彩/ 64×53cm/ 第七回日本「帝國美術展覽會」入選。
1930年10月27日，霧社地區原住民族因不滿日本政府的統治，在莫那魯道為代表，爆發霧社事件，砍殺了各地警察及霧杜公學校舉行秋季運動會的日本人136名，輕重傷百餘人。日方隨後進行武裝鎮壓，殺害霧社原住民族近千人。而後日方的檢討報告顯示，起事原因有對原住民族壓榨勞力、一些日警對原住民族婦女始亂終棄及不當的男女關係、原住民族想要回到傳統生活。時任臺灣總督石塚英藏等官員因此而下臺。[106]

隨著社會運動的展開加上西方文化與當時中國新文化運動的影響，臺灣的文學、美術、繪畫等方面開始走向與日本和中國都不同的方向。臺灣新文學運動在1920年展開，領導者有黃朝琴等，他們主張使用白話文，認為文學的目的應是啟發民智，其中賴和被譽為「臺灣新文學之父」[107]。1933年，臺灣作家與日本作家組建臺灣文藝作家協會，刊行中日文並用的《臺灣文學》雜誌[107]。之後，又成立完全由臺灣作家組成的臺灣文藝聯盟[107]。這一時期令人矚目的畫家則有陳進、林玉山、郭雪湖、陳澄波和廖繼春等。雕塑藝術上以黃土水成就最大，代表作為〈水牛群像〉。音樂家則以江文也等人為代表。電影和廣播也在這時進入臺灣。

後期
參見：皇民化運動、臺灣拓殖株式會社和臺北大空襲
1936年，隨著日中關係惡化，自第17任總督小林躋造起，臺灣總督復由軍方將領擔任。在這期間，日方推行對臺灣人的皇民化運動、臺灣產業的「工業化」、使臺灣成為執行「南進政策」基地的「南進基地化」三大政策[108]。在日治中期蓬勃開展的社會與文藝運動也逐漸停擺。


臺北大空襲中，盟軍炸藥在臺北城範圍內的彈著點。
皇民化運動展開後，總督府大力推廣講日語，在各地設立國語講習所。並取消報紙中的漢文欄，廢止學校中的漢文課。1940年2月，總督府公布改姓名辦法，准許臺灣人改為日式姓名[109]。最初臺灣人對此並不熱心，但後期在獎勵政策下，不少人改用日本姓名。同時，總督府大興日本神道，廣設神社，強迫學生參拜，同時壓抑臺灣民間信仰，裁併地方寺廟，這引發不少臺灣人的反對[110]。日本以「農業義勇團」等名義招募臺灣人從軍，人數達12萬人以上、同時前後對原住民族進行八次動員，計有四千名左右的高砂義勇隊前往戰場[111]。1942年，總督府實施志願兵制度，總督府前後三次招募男子志願軍，總數為16,000人[111]。1945年1月，全面實施徵兵制度。臺灣籍日本兵總計207,183人，陣亡30,304人[111]。1941年4月，日本政府成立皇民奉公會，其與皇民化運動不同，是以皇民為口號達到戰爭動員的目的，但總體來說成效有限。

1936年，總督府成立臺灣拓殖株式會社，積極推動臺灣工業化，扮演「工業臺灣，農業南洋」的角色[112]。1935年在高雄港成立煉鋁工廠。1937年，臺灣總督府推動第一次生產力擴充五年計劃，增設水力與火力發電所[52]。1939年，臺灣工業產值首次超過農業產值[52]。珍珠港事變後，臺灣總督府又在1942年推行第二次生產力擴充五年計劃，力求臺灣工業自給自足[52]。

在第二次世界大戰期間，美國看中臺灣的戰略位置，開始請美軍做臺灣研究，並出版《臺灣民政事務手冊》[m]，作為訓練占領臺灣之軍政治理人員之用。當時美國認為，只要控制當時的日本殖民地臺灣，就能牽制日本，以及華南沿海的日軍和菲律賓[113]。

1944年10月起，美軍開始轟炸臺灣，大量官署和工廠被炸，各項生產事業幾乎停頓[114]，工業產量急劇減少。臺灣人在軍事管制、經濟統制金額、消息封鎖下，自由全無保障。日本軍方控制了報紙、廣播等事業，戰爭真相消息全被禁絕，但是民間依然流言不斷，人心浮動。全臺各大城市都籠罩在戰爭的炮火下，人民經常需要「跑空襲」，生活節奏完全被打亂，不少都市居民被迫遷徙到鄉間[114]。1945年8月15日，日本宣布無條件投降。10月25日，末任臺灣總督兼第十方面軍司令官安藤利吉在臺北公會堂簽署降約，日本在臺灣的統治宣告結束[2]。

中華民國時期

依據盟軍最高統帥麥克阿瑟元帥發布的《一般命令第一號》第1條規定，命令在臺日軍向盟軍投降。1945年10月25日在臺北公會堂舉行受降典禮，受降典體臺上懸掛同盟國英、中、美、蘇四國「同等大小」的國旗，以及聯合國旗（四國國旗的前面上端，未呈現於畫面中）。
主條目：臺灣戰後時期
政治發展
參見：中華民國政治、二二八事件、四六事件、白色恐怖和解嚴

版畫家黃榮燦於1947年描述二二八事件的版畫──《恐怖的檢查》。

領導中華民國政府遷臺戒嚴凍結憲法的行憲後第一、二、三、四、五任總統蔣介石
1945年第二次世界大戰結束，日本戰敗。日本在《終戰詔書》、《降伏文書》中聲明接受四大盟國的《波茨坦宣言》，等同於間接接受《開羅宣言》，而《開羅宣言》要求將臺灣、澎湖、滿州歸還中華民國[8]。後盟軍最高統帥麥克阿瑟元帥發布《一般命令第一號》，命令在中國（除滿州）、臺灣以及越南北緯十六度以北之日軍向代表同盟國的蔣介石投降，並命令日本及日本控制之軍事及民間政權協助同盟國佔領日本[b]及日本控制之地區[9]。蔣介石委派陳儀將軍於該年10月25日赴臺接受在臺日軍的投降後，隨即片面宣布臺灣光復[10][11]。否定光復論者則認為當時的中華民國只是依據麥帥《一般命令第一號》代表同盟國軍事接管臺灣[115][116][117][118]。而後國民政府設立與中國大陸省級行政體制不同的臺灣省行政長官公署，並由陳儀出任臺灣行政長官[119]。

因國民政府接管官員貪污腐敗問題嚴重、軍隊紀律敗壞、濫印鈔票導致惡性通貨膨脹、失業問題嚴重，陳儀本人大權獨攬。政府藉由統制經濟的實施，透過專賣局與貿易局壟斷臺灣的經濟命脈、扼殺民間工商企業界的商機，還將臺灣的各種民生物資運往中國大陸支應國共內戰，導致臺灣人民的生活陷入困境，終至民不聊生；又文化及語言上的隔閡，外省移民相對於臺灣人在社會地位及工作職位上具高度優勢的不平等待遇，掌握資源者又對臺灣人民進行種種歧視與打壓，如此一年多來累積了龐大的民怨，導致在1947年初，因一起緝菸血案，以及臺灣行政長官公署衛兵開槍掃射抗議群眾，終於爆發蔓延臺灣全島反抗政府的行動，各地發生軍民衝突，史稱「二二八事件」[120][121]。一週後，國府增援兵力抵臺鎮壓，後續還有清鄉行動，許多與事件無關的臺籍菁英與百姓無故被殺害，或逮捕之後不經審判而被監禁、處死或就此失蹤。此事件揭開了1950年代「白色恐怖」政治高壓的序幕，並埋下後來族群對立態勢與臺灣獨立運動的種子[122]。1948年到1949年，國民政府在臺灣展開了大規模逮捕槍決學生的行動，該事件被稱為「四六事件」。二二八事件後，國民政府調整臺灣地方政治制度，廢除臺灣省行政公署，改設臺灣省政府，由文人出身的魏道明任首屆省主席，縮小公營事業範圍[121]。1949年，陳誠就任臺灣省主席，改變幣制（舊臺幣以四萬比一的比率兌換新臺幣），實行三七五減租[123]，通貨膨脹形勢得到緩解。

維基文庫標誌
維基文庫中相關的原始文獻：
動員戡亂時期臨時條款
維基文庫標誌
維基文庫中相關的原始文獻：
戒嚴法
維基文庫標誌
維基文庫中相關的原始文獻：
檢肅匪諜條例

中華民國政府撤退至臺灣路線
1949年10月1日，中國共產黨在北平宣告成立中華人民共和國，中華民國政府自廣州、重慶遷移至臺灣[124]。1950年6月韓戰爆發後，美國政府改變對臺政策。6月27日，杜魯門命令美國第7艦隊開進臺灣海峽[125]，以防中國人民解放軍主動渡海攻擊臺灣，或中華民國國軍進攻大陸。[126][127][128][129][130][131]中國國民黨新敗抵臺初期，堅持反攻大陸，但美國無意配合，只能發起一些小規模戰役，直至八二三炮戰雙方暫時停火後，反攻都未能實現[132]。中華民國政府在臺灣透過《戒嚴令》和《動員戡亂時期臨時條款》等法令，以穩定、維護中華民國政府為優先，暫停憲法條文實施，並配合黨、政府、軍隊、特務的結合掌控，持續政治與社會上的強勢壓制，鞏固獨裁的一黨專政體制[122]。但這造成許多人因實際或被捏造的反對言論或行動，甚至無故被指為共產黨「匪諜」而受到非法迫害與殺害的案件，即白色恐怖[122]。


無黨籍臺南人吳三連(左二)於1951年1月7日獲悉以65.5%高票當選首都臺北市第一屆民選市長後在辦事處與支持者舉杯同歡。

自由中國雜誌封面

蔣介石之子，去世前一年宣布解嚴的第六、七任總統蔣經國
1950年1月初，美國總統杜魯門與國務卿艾奇遜曾表示臺灣從歷史角度來看是中國的領土[133]，但在6月下旬韓戰爆發後聲明「臺灣未來的地位，必須等待太平洋地區的安全恢復，對日和平解決方案的成立，或經過聯合國討論後，再作決定。」[134]同年，臺灣開始實行地方自治，縣級以下民意代表與行政首長及省議會由公民直接選舉產生，1950年－1951年中華民國縣市長選舉的不少當選人與參選人成了其後各縣市地方派系形成的代表人物。[135]1950年代起雷震等知識分子在《自由中國》雜誌上批評時政，要求民主。1960年，雷震等人士籌組中國民主黨，但很快就被政府鎮壓[136]。在政府解除戒嚴之前，臺灣的黨外運動團體一直透過私下發行的政論雜誌，醞釀對中華民國政府進行大規模抗爭，要求全面落實民主政治與言論自由。[105]


成立於東京的臺灣共和國臨時政府國旗
1956年，臺灣共和國臨時政府於二二八事件第九周年紀念日成立，公布獨立宣言，廖文毅博士獲推選就任大統領。[137][138][139]1961年，「蘇東啟案」計畫以武力號召臺灣獨立。[140]史明於1962年完成日文版《臺灣人四百年史》，其後又花了六年完成中文版。[80][141][142][143]國立臺灣大學教授彭明敏與學生謝聰敏和魏廷朝於1964年共同起草「臺灣自救運動宣言」，因而被中國國民黨判刑八年，並於1970年1月在重重特務監視下逃抵瑞典。[144][145]同年2月8日，陸軍軍官學校學生江炳興等政治犯受鼓舞而策畫共同劫械起義欲武裝推翻中國國民黨政權的「泰源事件」。[146][147][148]

1972年蔣經國擔任行政院長後，實行「革新保臺」政策[149]。在組閣時積極起用李登輝等本省人，以期化解省籍矛盾，開始部分推行本土化[149]。1975年4月5日，蔣中正去世，國民黨對社會的控制力亦開始下降。1979年5月，政府解除了1978年發布的停止雜誌登記的禁令，黨外人士掀起了創辦雜誌的熱潮，知名的有《八十年代》、《美麗島》等。這些刊物對國民黨展開前所未有的抨擊，與執政當局矛盾日益激化，終於釀成1979年12月的「美麗島事件」，黨外人士遭到大規模逮捕[150]。1986年9月28日，黨外人士在圓山大飯店成立民主進步黨，國民黨未予取締。1987年6月三七事件破案法辦後，蔣總統宣布自7月15日零時起，臺灣本土和澎湖地區解除戒嚴（不含金門、馬祖等外島），黨禁、報禁相繼解除，並於11月2日進一步開放兩岸探親。1988年1月13日，蔣經國去世[2]。

參見：臺灣選舉、中華民國總統及副總統在臺灣之公民直接選舉與罷免、中華民國國會在臺灣之全面選舉與罷免和公民投票法

2016年立委選舉席次分布圖
經由「狂飆年代」中不斷的民眾運動，民主意識深植民心，隨著三月野百合學運的和平落幕，民主政治在臺灣的推行速度也進一步加快。在國民大會代表超過四分之三絕對多數決下，動員戡亂臨時條款被廢止，總統李登輝宣布自1991年5月1日零時起，結束施行長達44年的「動員戡亂時期」，恢復憲法條文之適用[2]。李登輝繼承蔣經國的民主化與本土化政策，並予以深化，但也有黑金政治與派系政治的包袱[151]。李登輝在總統任內陸續推動六次修憲，萬年國會在1991年宣告退職，並在1996年舉行首次正副總統公民直選。[152][153]


2018年直轄市長及縣市長選舉：
  國民黨15席，得票率48.79%
  民進黨6席，得票率39.16%
  無黨籍1席，得票率11.30%
2000年3月18日總統大選，由民進黨提名的陳水扁及呂秀蓮當選中華民國第10任正、副總統，是臺灣第一次中央政府和平政黨輪替。2004年，陳水扁及呂秀蓮在總統大選再度當選連任，泛藍陣營就陳水扁當選的合法性提出質疑，但經驗票無誤[154]。

2005年，任務型國大通過憲法修正案，規定國會選舉改採單一選區兩票制，這有利於兩黨政治的形成[155]，並廢除國大採單一國會制，立法院成為唯一的國會。2008年1月12日，國民黨在立委選舉中取得81席。在同年3月22日舉行的中華民國第12任總統選舉中，因為總統陳水扁的多起貪污案, 致使大半臺灣人民, 對執政黨(民進黨)喪失信心. 國民黨的馬英九、蕭萬長以 765 萬餘票取得勝利 (得票率58.45%)，民進黨則再度成為在野黨。

2012年馬英九改和時任行政院長吳敦義搭檔連任。2013年馬英九發動與立法院長王金平之政治鬥爭。2013年因國民黨政府欲強行通過審查兩岸服務貿易協議，引起學生於2014年春發動佔領立法院與佔領行政院的太陽花學運創記錄抗爭，迫使馬英九政府讓步。[156]同年底的直轄市長及縣市長選舉，泛綠與泛藍分別獲得14席與8席。直轄市議員及縣市議員選舉中，民主進步黨之得票率（37.08%）亦超越中國國民黨（36.86%）。選舉挫敗迫使行政院長江宜樺與中國國民黨主席馬英九相繼辭職下臺。2016年總統選舉由民主進步黨候選人蔡英文當選，並同時得到國會的多數席次。

外交及海峽兩岸關係
維基文庫標誌
維基文庫中相關的原始文獻：
舊金山和平條約

1953年，臺灣臺東鹿野鄉敬老會全體合影。背後建物以超過兩人寬的中文字體由右至左書寫「反共抗俄」字樣。

美國總統艾森豪於1960年6月18日訪問臺灣臺北時與蔣中正總統搭敞篷車前往圓山行館途中接受熱情群眾夾道歡迎。蔣總統伉儷親至松山機場迎接, 艾森豪總統並於傍晚在總統府前廣場對50萬群眾發表演說。兩國總統發表聯合公報, 穩固邦誼，譴責中共對金門隔日砲擊之惡行，也依《中美共同防禦條約》「共同抵禦中共在本地區之挑釁」。
主條目：臺海現狀、臺灣問題、海峽兩岸關係和臺灣地位未定論
1943年底，《開羅宣言》發表，表示日本所從中國佔據的地方臺灣和澎湖等要歸還中華民國，並於1945年《波茨坦宣言》再次重申[157]。1945年第二次世界大戰結束，日本接受《波茨坦宣言》，無條件投降[157]。盟軍最高統帥命令在臺日軍向盟軍將領蔣介石投降。1945年10月25日盟軍將領蔣介石委任陳儀將軍在臺北公會堂接受在臺日軍的投降並接管臺灣[157]。1951年，日本正式簽署《舊金山和約》，但因國共內戰中國情勢不明，和約並未註明臺灣主權歸屬[158]。在1952年的《臺北和約》第二條中，日本依據《舊金山和約》，重申放棄對臺灣、澎湖、西沙群島、南沙群島的主權，但從未提起臺灣主權的最後歸屬[158]。1972年日本與中華民國斷交，並片面宣布《臺北和約》失效，同時與中華人民共和國政府簽訂《中日聯合聲明》[159]。

在開放探親與解嚴之前，中華民國政府從早期的「反共抗俄」國策，演變成「不接觸、不談判、不妥協」的「三不政策」來對抗中共的統戰攻勢[160]。1987年蔣經國政府開放民眾赴中國大陸探親後，臺灣與中國大陸關係曾有過一段「蜜月期」，1993年於新加坡舉行的辜汪會談可謂最高點[161]。但在千島湖事件、李登輝1995年訪美及臺灣海峽飛彈危機一連串事件的影響下墜入低潮。其後雖有所回溫，不過在1999年李登輝發表「兩國論」後跌倒冰點，此後臺灣與中國大陸關係長期處於「政冷經熱」的狀態中。2005年中，國民黨、親民黨與新黨等政黨先後訪問中國大陸，緊張的情勢有所緩解，臺灣與中國大陸關係仍充滿不確定性。2008年，國民黨取回政權後，以「不統、不獨、不武」[162]為原則，加上臺灣與中國大陸關係融冰，在北京舉行的吳胡會後，臺灣與中國大陸關係又到了另一個階段[163]。


金門大膽島上留存的標語「三民主義統一中國」，1986年8月金防部司令趙萬富上將令烈嶼師長龔力少將興建，翌年同因三七事件去職。另有一面設於二膽島哨牆上。
關於臺灣的政治地位，或曰臺灣與中國大陸是否走向統一，亦或是持續相互獨立狀態的問題，仍然沒有解決。中華人民共和國政府宣稱：「無論從歷史、政治還是國際法上，臺灣是中國不可分割的一部分；臺灣問題是中國內政，並在統一無望以及某些其他前提下，不放棄以武力解決」。而主張臺灣地位未定論的人士則認為：由美國、日本等國家所簽署的《舊金山和約》並未指出臺灣的主權歸屬，而且臺灣的未來走向應由全體臺灣人民自主決定，不容中華人民共和國以武力威脅[164]。1970年代中期前，設都臺北的中華民國政府堅持自己是全中國唯一合法代表（即「漢賊不兩立」），未放棄武力反攻中國大陸；自1970年代中期後，中華民國政府對中共口號演變為「三民主義統一中國」；到1980年代中後期，臺灣政治日漸民主，加以冷戰結束這一背景，「三民主義統一中國」演變為「民主自由統一中國」。

1999年7月9日，時任中華民國總統的李登輝接受德國之聲記者專訪時表明中華民國和中華人民共和國為兩個對等的國家（即「兩國論」或「特殊兩國論」）[165]。2002年8月，總統陳水扁公開表示臺灣與中國的關係是「一邊一國」，引發臺灣各界、中國大陸及美國的爭議[166]。2005年3月14日，中華人民共和國全國人民代表大會通過《反分裂國家法》，首次以法律形式制訂其「一個中國」政策[167]。許多臺灣人民對此感到憤怒，於同年3月26日在臺北發起 三二六護臺灣大遊行，有數十萬人參加[168]。

在修憲與總統直選後的民主鞏固時代，支持臺灣獨立的比例緩步微升、且通常穩定地高於支持統一的比例，而均低於支持維持現狀的比例。換言之，與中共的任何政治結合在臺灣都是最缺乏民意基礎與政治市場的選項。2015年7月，行政院大陸委員會委託國立政治大學選舉研究中心所作的民意調查，86%的臺灣民衆認為應該維持現狀（廣義）：儘快宣布獨立：4%；維持現狀，以後走向獨立：21.3%；永遠維持現狀：24.9%；維持現狀，看情形再決定獨立或統一：32.4%；維持現狀，以後走向統一：7.4%；儘快統一：2.3%；不知道／無意見：7.7%。[169]

維基文庫標誌
維基文庫中相關的原始文獻：
中美共同防禦條約

2005年臺灣申請加入聯合國的文宣。
在臺灣的中華民國政府直到1970年代，都被認為是國際社會裡中國的合法代表，但承認中華人民共和國的國家逐漸增加。1954年，中華民國政府與美國簽訂《中美共同防禦條約》[170]。到1971年，聯合國即將承認中華人民共和國為中國的唯一合法代表之際[n]，中華民國政府堅持「漢賊不兩立」，宣布退出聯合國，此後中華民國的國際地位大幅滑落[171]。其後1979年與美國斷交更是對中華民國的外交處境造成嚴重衝擊[172]。在1991年的亞洲銀行年會上，中華民國政府承認中華人民共和國政府是統治中國大陸地區的合法政府，不再將中共視為「叛亂團體」[173]。近年來，中華民國政府多次試圖重新申請加入聯合國與世界衛生組織等國際組織，目前已經成為世界衛生組織觀察員[174]。

經濟變化
參見：臺灣經濟史、耕者有其田和十大建設
戰後初期，臺灣物資缺乏，所生產的糖等還被送往中國大陸，經濟蕭條，通貨膨脹嚴重。國府遷臺後，首先發展農業，實行包括三七五減租、耕者有其田及公地放領等一系列扶植農業的政策[175]。美國自1951年起提供美援，臺灣經濟至1953年已恢復到戰前水準。之後，政府奉行「以農養工」的政策，由於日治時期基礎建設與農工業發展的基礎、中國抵臺的資金人才與技術、及美援等因素下，臺灣經濟逐步走向迅速成長。在1950年代時期，政府實行進口替代的政策，將農業所得支援工業部門，以農產品出口來換取外匯以進口工業機器，發展民生工業[176]。並提高關稅，管制外匯，限制進口，以保護本土產業。到1960年代，臺灣的進口替代產業面臨國內市場飽和的問題，同時一些工業化國家的工廠面臨工資上漲等因素，因此紛紛搬遷到一些具工業基礎又勞工成本低廉的地區，臺灣的經濟政策遂改為出口擴張。1960年，政府通過《獎勵投資條例》，積極爭取外商在臺投資。1966年，政府成立高雄出口加工區，是亞洲第一個出口加工區[177]。臺灣以加工中繼站的角色，成為國際分工體系中的一環。1963年，工業佔臺灣國民經濟中的比重已超過農業。此後直到第一次石油危機為止，臺灣長期保持年均兩位數以上的經濟成長率。1971年，臺灣對外貿易出現順差，從此臺灣長期維持貿易出超的局面[52]。


十大建設中的北迴鐵路。
1970年代初，臺灣因外交受挫、石油危機與基礎公共設施不足等因素影響，民間投資意願降低，經濟成長受到衝擊。蔣經國政府因此調整經濟政策，改採「第二次進口替代」，推出十大建設等一系列大型公共投資計劃，國內投資環境因此大幅改善，也有效提振景氣和就業率，經濟實現轉型升級[52]。臺灣成為新興工業化國家，與香港、韓國和新加坡並列為「亞洲四小龍」[52]。1980年代，臺灣面臨土地價格上漲；環保意識抬頭；治安形勢惡化；勞工意識勃興等一系列不利於投資的因素。政府於是再次推動經濟轉型。1980年，政府成立新竹科學工業園區，大力鼓勵國內外廠商投資積體電路、電腦等高科技產業，希望以耗能少、污染低、附加值高的技術密集型科技產業取代傳統產業[52]。

這樣的政策應該是屬於成功的，從1953－2000年平均年成長率高達8.1%，是同期世界之冠，2000年前通貨膨脹率從未超過3%，失業率也能維持在3%以內，貧富差距不大，所得分配差距倍數在2000年前也僅為5.5．臺灣經濟日漸自由化國際化，並在2001年以臺澎金馬個別關稅領域的名義加入世界貿易組織[52]。加入世貿後，臺灣國內的市場持續開放，大量外來產品衝擊國內產品，以農產品和民生工業為甚。同時為降低生產成本，很多企業出走中國和東南亞地區，造成產業空洞化的現象[52]。經濟自由化也造成國內金融業競爭激烈，引發潛在金融風險等問題。為應對這些問題，臺灣政府先後有不同的措施，在李登輝政府時期要將臺灣建設為亞太營運中心；民進黨政府時期則提出發展生化產業，但前景如何仍未可知。如何提升自身生產力，經濟更趨多元化與提高科學研發能力，讓企業「根留臺灣」，均是臺灣經濟要面對的課題。

社會變遷
參見：臺灣九年國民義務教育、臺灣人權、三月學運、鹿港居民反杜邦設廠事件、太陽花學運和反高中課綱微調運動

國民中學的實施使臺灣勞工素質提高，對整體經濟與社會發展產生助益。圖為臺中市東勢國民中學。
國民政府接管臺灣之初，致力消除日本殖民教育的痕跡與影響，推動以中華文化為本位的教育政策[178]。國府遷臺後，頒布《戡亂建國教育實施綱要》和一系列法令，在日常教學中大力灌輸反共思想與中華傳統文化，並推行髮禁等一些列規範學生日常行為的措施。1968年，即民國五十七學年度，政府開始實施九年國民義務教育[178]。該計劃對臺灣的社會具有跨時代的重要意義，伴隨著更多人進入國中接受教育，勞動者的素質得到有效提升。解嚴之後，教育政策日益寬鬆，校園風氣日益自由自主；教科書由過去的一綱一本變為一綱多本，入學管道也多元化[178]。在教學內容上，加強鄉土教育的教學比例與本土語言的教學，出現了臺語、客家話和原住民族語言的教育[178]。但一綱多本造成學生負擔加重，補習風氣日盛，實施後也一直有要求恢復一綱一本的聲音存在。同時，推動十二年國教也成為了教育界的焦點[179]。

伴隨經濟的發展，臺灣由農業社會轉型為工業社會，生活形態發生了重大轉變。在1970年代，臺灣省主席謝東閔提倡「客廳即工廠」，成為一道奇觀[180]。大量的農村人口湧入城市，導致各都會人口激增，形成了都會圈。但伴隨著城市生活品質的惡化，與鄉村建設的展開，又有一些農村居民回流，不少鄉鎮演變為中小城市。隨著人口的流動，家庭結構也隨之變化，核心家庭結構成為社會的主流，從而使老人安養與幼兒托教成為社會問題。伴隨著醫療條件的改善，臺灣人的平均壽命不斷延長，人口成長已由高生育率，低死亡率轉變為低生育率，低死亡率。1951年，臺灣男性平均壽命為53歲，女性為57歲；2010年，男性平均壽命增加為75.96歲，女性增加為82.47歲[181][182]。1981年，全年臺灣新生人口數量為41萬4千人，每一婦女平均生育2.46個子女[181]。到2004年，全年臺灣新生人口數量下降到21萬6千人，每一婦女平均生育子女僅1.18人；至2013年，新生人口數量下降到19萬9千人，每一婦女平均生育子女僅1.07人。[181][183]臺灣已成為高齡化、少子化的社會。


臺灣綠島人權紀念碑：一道長約十來公尺的石牆上，刻滿當年在白色恐怖下的犧牲者名單
解嚴之前，臺灣人的結社、遊行、言論、出版、新聞自由都沒有保障，加上片面重視經濟效益，社會底層人民的權益不斷遭到剝奪，維護自身權利的意識與社會發展都不健全。1970年代後，伴隨著教育的普及與中產階級的興起，人民的自主意識開始抬頭。1980年，消費者文教基金會成立，象徵消費者權益保護意識的興起[184]。


2005年在臺北市舉行的臺灣同志遊行
1980年代，隨著民主運動的蓬勃展開，街頭抗爭也成為臺灣社會的常見現象，如五一九綠色運動、三月學運、鹿港居民反杜邦設廠事件、五二〇農運、無殼蝸牛運動[185]與野草莓運動、太陽花學運等。各族群也開始注重維護自己的權益，例如臺灣原住民族權利促進會發起的「還我姓名」、「還我土地」運動、外省人返鄉探親促進會開放中國探親的政治訴求、客家權益促進會發起的「還我母語」運動等[185]。此時性別平等的概念亦獲社會重視，女性在立法院與縣市議會已有保障名額，並通過《性別工作平等法》和《性別平等教育法》，女性的地位顯著提升[186]。此外，臺灣首個同志組織「我們之間」也在1990年成立，爭取相關族群的權益，也帶起橫跨1990年代與2000年代的臺灣同性戀權利運動[187]。

社會福利方面，《勞動基準法》等法令的通過使臺灣勞工的地位獲得保障。1995年，全民健康保險正式實施，福利制度已初見端倪。2000年以來，大量中國大陸和東南亞婦女來到臺灣，形成了「外籍配偶」族群，亦產生一些社會適應的問題。而近年的樂生療養院、大埔農地事件等，在在顯示臺灣在人權保障方面的不足與問題。

文化

臺灣高雄市六龜電音三太子
參見：臺灣文化、臺灣主體性、臺灣本土化運動、臺灣語言列表和去日本化
國府遷臺早期，就開始了戒嚴政策。戒嚴時期，政府以官方力量推動中華文化復興運動之發展，注重呈現反共、傳統、一元的特質，忽略本土先民文化，導致在地原住民族失去傳承文化。

1987年，臺灣解嚴後，以中華文化為中心的思考日益受質疑，多元文化思想也受國內外許多因素推波助瀾下逐漸興起。包含推動臺灣本土文化的多元文化行動支持者認為：多元文化可肯定文化多樣性的價值，尊重文化多樣性下的人權，增加人民選擇生活方式的可能性，也促進臺灣社會正義與公平機會情況的大幅進步。不過於實際上推動時卻也面對如種族主義與偏見歧視、文化價值判準上缺乏共識、文化差異和缺陷的區辨模糊不清、理論體系有待釐清和統整等問題[188]。

1996年，臺灣學者蔡瑋將此文化態樣的改變稱為本土化或去中國化[189]。2000年民主進步黨開始於中央政府執政後，首度出現的「去中國化」一詞，後來大量被支持中國傳統文化者引用。撤退到臺灣多年的國民黨認為，民進黨所推動「去中國化」運動，會讓「歷史記憶也難逃被切割肢解的下場」[190]。

文學
主條目：臺灣文學史
日本時代的臺灣作家受到日本文化教育影響，生活文字基礎為日文，直到國府遷臺初期不得不重頭學中文語法。國府政府大力推行反共、懷鄉文學著名的反共文學作家有王藍、姜貴和司馬中原等。同時，西方現代文學也是當時臺灣文壇的重要力量，白先勇、王文興為其代表，而現代主義文學的代表作則有《臺北人》、《家變》等。1960中後期開始，一些本土作家以《臺灣文藝》、《笠詩刊》為陣地，重拾鄉土素材，關注農民與勞工等社會底層勞動階級的命運，作品隱含批判精神，終致在1977年引發了鄉土文學論戰。解嚴後，文學更加多元化。近幾年，伴隨網路的興起，網路文學成為新的風潮[191]。

美術

臺北捷運板南線南港站中的大型幾米壁畫，風格為插畫類型。
1950年代，臺灣的畫壇主流以中國抵臺的水墨畫家與日治時期的本土西畫家為主，繪畫技巧比較傳統。1960年代開始，新生代畫家引入西方的抽象畫等風格，美術風格走向西化。1970年代鄉土意識抬頭後，繪畫題材再趨本土化。解嚴之後，美術界生態多元自由，風格也日益前衛[192]。

戲劇與音樂
二戰後，一方面在政府的領導下，國劇（京劇）等中國劇種在臺灣得到大力扶持；另一方面歌仔戲、布袋戲等本土劇種則仍為庶民大眾的重要娛樂方式。隨著電視的出現，布袋戲、歌仔戲開始講求聲光效果，重新獲得人們的重視。而國劇與國語話劇則融入創新元素，經常以小劇場等形式表演，舞臺劇表演成為臺灣最具活力的藝術活動之一。戰後初期，臺語歌曲一度流行，之後被官方箝制。音樂界也被政治力延伸，創作了大量反共愛國歌曲。在民間，由香港傳入的國語流行歌曲和美國音樂風行一時。1970年代，知識青年疾呼「唱自己的歌」，校園民歌因此風行。在1980年代，講究「字正腔圓」的國語老歌風行一時，其代表人物是有亞洲歌后之稱的鄧麗君。近幾年臺灣已經成為世界華語樂壇的中心，費玉清、張惠妹、周杰倫、蔡依林等歌手紅遍兩岸三地，成為了樂壇的重要力量[193]。

電影

日治時期臺灣電影《莎韻之鐘》的宣傳海報。
主條目：臺灣電影史

2013 臺灣導演齊柏林在所執導的《看見臺灣》露天首映會(臺北自由廣場)
國府遷臺伊始，臺灣電影在官營製片廠的經營下，拍攝大量國語劇情片，其中不少都帶有反共色彩。同時，臺語片也悄然興起，題材以民間故事等為主。1960年代，健康寫實電影成為電影界的主流，代表作有《蚵女》、《養鴨人家》等。同時，香港製作的電影也在臺灣廣受歡迎，影響到臺灣本地的電影製作路線，愛情片、武俠片和功夫片成為一時的主流。1970年代，伴隨著外交困境，中影製作了大量的愛國政宣影片，如《梅花》、《汪洋中的一條船》等。1980年代起，《兒子的大玩偶》等影片開啟「新電影」風潮。解嚴之後，後新浪潮電影興起，李安與蔡明亮成為這一時期的代表導演。同時，由於美國好萊塢電影大舉進入臺灣電影市場，臺灣本土電影的環境與市場一度萎縮低迷[194]。但隨著2008年魏德聖執導的電影《海角七號》以國際化商業路線揉合本土特色內容，在票房上大獲成功並獲得不少獎項後，叫好又叫座的臺灣自製電影如《艋舺》、《那些年，我們一起追的女孩》、《賽德克·巴萊》、《總舖師》、《KANO》、《我的少女時代》等，重新掀起一股「國片熱潮」。

大眾傳播

臺灣戒嚴時期各種短命的黨外雜誌
主條目：臺灣媒體史、臺灣報業史和反媒體壟斷運動
1962年，臺灣電視公司成立，這是臺灣的第一家電視臺。不久中國電視公司和中華電視公司陸續開播，臺灣電視業進入「老三臺」時代。但三臺都由政府機構與中國國民黨掌控，在娛樂大眾的同時也扮演黨政宣導的工具。1969年，中視播出《晶晶》，是臺灣第一部電視劇。同時楊麗花、葉青歌仔戲與布袋戲演員也紛紛登上螢幕。1993年，政府開放成立有線電視臺，隨後在1998年又開放了首家民間經營的無線電視臺民視。為普及多元文化與尊重弱勢群體，又陸續開播了公共電視、客家電視臺與原住民族電視臺。但是，激烈的競爭導致電視節目嚴重商業化，收視率掛帥的風氣引人詬病，導致媒體亂象的出現。伴隨政治的民主，黨政軍也先後退出了電視經營[195]。

在解嚴之前，臺灣影響最大的兩份報紙是《聯合報》與《中國時報》，1980年代後，《自由時報》興起，成為第三大報。2003年港商《蘋果日報》發行臺灣版，報業格局演變為四報鼎立，另外各縣市均有其地方報[196]。近年來各種全國閱報率的調查，通常都是《自由時報》或《蘋果日報》互為領先，取向與臺灣社會脫節的聯合與中時已日益不受青睞。[197][198]前副總統呂秀蓮等政治人物或資深媒體人亦分別創辦玉山周報與新頭殼、民報等結合網路的新型態報刊。廣播事業亦有發展，除中廣等舊有廣播公司外，飛碟電臺、KissRadio等亦成為重要的廣播電臺。網路也快速興起，網路文化亦成為臺灣文化的重要組成部分[195]。`