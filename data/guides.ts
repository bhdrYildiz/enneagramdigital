export const guideCategories = [
    {
        id: "all",
        label: "Tüm Kılavuzlar",
    },
    {
        id: "baslangic",
        label: "Başlangıç",
    },
    {
        id: "analiz",
        label: "Mizaç Analizi",
    },
    {
        id: "raporlar",
        label: "Raporlar",
    },
    {
        id: "okullar",
        label: "Okul Yönetimi",
    },
    {
        id: "rehberlik",
        label: "Rehberlik",
    },
    {
        id: "kullanicilar",
        label: "Kullanıcılar",
    },
] as const;

export type GuideCategory = (typeof guideCategories)[number]["id"];

export type Guide = {
    id: string;
    category: Exclude<GuideCategory, "all">;
    title: string;
    description: string;
    readingTime: string;
    steps: {
        title: string;
        description: string;
    }[];
};

export const guides: Guide[] = [
    {
        id: "platforma-baslangic",
        category: "baslangic",
        title: "EnneagramDigital'e Başlangıç",
        description: "Platformun genel yapısını, kullanım alanlarını ve ilk adımları öğrenin.",
        readingTime: "4 dk",
        steps: [
            {
                title: "Kullanım amacınızı belirleyin",
                description:
                    "EnneagramDigital; okullar, iş dünyası ve bireysel kullanım için farklı çözümler sunmayı amaçlar. İlk olarak platformu hangi amaçla kullanacağınızı belirleyin.",
            },
            {
                title: "Size uygun kullanım alanını inceleyin",
                description:
                    "İlgili çözüm sayfasında değerlendirme, raporlama ve gelişim süreçlerinin nasıl ele alındığını öğrenin.",
            },
            {
                title: "Erişim bilgilerinizi edinin",
                description:
                    "Kurumsal kullanımlarda hesap oluşturma ve erişim süreçleri kurumun yetkilendirme yapısına göre düzenlenebilir. Gerekli bilgiler için kurumunuzun yetkilisiyle iletişime geçin.",
            },
            {
                title: "İlk değerlendirmenize hazırlanın",
                description:
                    "Değerlendirme sırasında soruları dikkatle okuyun ve yanıtlarınızı günlük yaşamınızdaki genel eğilimlerinizi düşünerek verin.",
            },
        ],
    },
    {
        id: "mizac-testi",
        category: "analiz",
        title: "Mizaç Değerlendirmesi Nasıl Yapılır?",
        description:
            "Değerlendirme sürecinin amacını ve soruları yanıtlarken dikkat edilmesi gerekenleri keşfedin.",
        readingTime: "5 dk",
        steps: [
            {
                title: "Değerlendirmenin amacını anlayın",
                description:
                    "Mizaç değerlendirmesi, davranış eğilimleri ve motivasyonlar hakkında farkındalık oluşturmayı amaçlar. Klinik tanı veya kesin kişilik sınıflandırması değildir.",
            },
            {
                title: "Soruları dikkatle okuyun",
                description:
                    "Soruları yanıtlarken yalnızca belirli bir olayda nasıl davrandığınızı değil, genel olarak hangi yaklaşımın size daha yakın olduğunu düşünün.",
            },
            {
                title: "Size en yakın yanıtı seçin",
                description:
                    "Kendinizi olduğunuzdan farklı göstermeye çalışmadan, size en uygun gelen seçeneği işaretleyin. Yanıtları doğru veya yanlış olarak değerlendirmeyin.",
            },
            {
                title: "Sonuçları açıklamalarıyla inceleyin",
                description:
                    "Değerlendirme sonrasında sunulan bilgileri kendi deneyimlerinizle karşılaştırın. Tek bir sonuç yerine raporun bütününe odaklanın.",
            },
        ],
    },
    {
        id: "rapor-okuma",
        category: "raporlar",
        title: "Mizaç Raporu Nasıl Okunur?",
        description:
            "Raporlardaki mizaç açıklamalarını, güçlü yönleri ve gelişim alanlarını anlamlandırın.",
        readingTime: "6 dk",
        steps: [
            {
                title: "Genel mizaç açıklamasını okuyun",
                description:
                    "İlk olarak raporda açıklanan temel eğilimleri inceleyin. Bunların hangi durumlarda sizi yansıttığını düşünün.",
            },
            {
                title: "Motivasyon ve ihtiyaçları değerlendirin",
                description:
                    "Bir davranışın arkasındaki ihtiyacı anlamaya çalışın. Benzer davranışlar farklı insanlarda farklı nedenlerle ortaya çıkabilir.",
            },
            {
                title: "Güçlü yönleri fark edin",
                description:
                    "Raporunuzdaki olumlu özelliklerin hangi ortamlarda ortaya çıktığını ve bunları nasıl daha etkili kullanabileceğinizi değerlendirin.",
            },
            {
                title: "Gelişim alanlarına odaklanın",
                description:
                    "Zorlandığınız noktaları değişmez özellikler olarak değil, üzerinde çalışabileceğiniz farkındalık alanları olarak ele alın.",
            },
        ],
    },
    {
        id: "okul-yapisi",
        category: "okullar",
        title: "Okul, Sınıf ve Öğrenci Yapısı",
        description:
            "Okul kullanımındaki organizasyon yapısını ve farklı kullanıcıların sorumluluklarını öğrenin.",
        readingTime: "5 dk",
        steps: [
            {
                title: "Okul yapısını tanıyın",
                description:
                    "Okul kullanımında temel organizasyon okul, sınıf ve öğrenci ilişkisi üzerine kuruludur. Bu yapı öğrenci bilgilerini düzenli değerlendirmeye yardımcı olur.",
            },
            {
                title: "Sınıf ve öğrenci ilişkisini anlayın",
                description:
                    "Öğrenciler ilgili sınıflarıyla ilişkilendirilerek takip edilebilir. Öğrenci bilgilerinin doğru ve güncel tutulması önemlidir.",
            },
            {
                title: "Kullanıcı sorumluluklarını belirleyin",
                description:
                    "Öğretmen, rehber öğretmen ve okul yöneticisinin ihtiyaç duyduğu bilgiler farklıdır. Erişimler görev ve yetkilere uygun biçimde düzenlenmelidir.",
            },
            {
                title: "Gizlilik ilkelerine dikkat edin",
                description:
                    "Öğrenci bilgileri kişisel veridir. Bu bilgilere yalnızca yetkili kişilerin, gerekli amaçlarla erişmesi sağlanmalıdır.",
            },
        ],
    },
    {
        id: "ogrenci-takibi",
        category: "rehberlik",
        title: "Öğrenci Takibi ve Görüşme Planlama",
        description:
            "Rehberlik görüşmelerini, öğrenci notlarını ve gelişim hedeflerini düzenli ele almayı öğrenin.",
        readingTime: "7 dk",
        steps: [
            {
                title: "Öğrencinin mevcut durumunu değerlendirin",
                description:
                    "Görüşme öncesinde öğrencinin ihtiyaçlarını, önceki gözlemleri ve varsa değerlendirme sonuçlarını bütüncül biçimde inceleyin.",
            },
            {
                title: "Görüşme amacını belirleyin",
                description:
                    "Görüşmenin hangi konuya odaklanacağını ve hangi ihtiyaca yanıt vermeyi amaçladığını açık biçimde tanımlayın.",
            },
            {
                title: "Görüşme sonrasında gerekli notları kaydedin",
                description:
                    "Yalnızca rehberlik süreci açısından gerekli bilgileri, gizlilik ilkelerine uygun olarak kaydedin. Gereksiz kişisel ayrıntılardan kaçının.",
            },
            {
                title: "Sonraki adımları planlayın",
                description:
                    "Öğrenciyle birlikte belirlenen hedefleri, uygun rehberlik çalışmalarını ve yeniden değerlendirme ihtiyacını göz önünde bulundurun.",
            },
        ],
    },
    {
        id: "rehberlik-etkinlikleri",
        category: "rehberlik",
        title: "Rehberlik Etkinliklerinden Yararlanma",
        description:
            "Öğrencilerin ihtiyaçlarına uygun etkinlikleri seçme ve uygulama sürecini keşfedin.",
        readingTime: "5 dk",
        steps: [
            {
                title: "Çalışmanın amacını belirleyin",
                description:
                    "Etkinlik seçmeden önce hangi beceriyi, farkındalığı veya gelişim alanını desteklemek istediğinizi belirleyin.",
            },
            {
                title: "Öğrenci grubunu değerlendirin",
                description:
                    "Öğrencilerin yaşını, sınıf düzeyini, ihtiyaçlarını ve grup özelliklerini dikkate alın.",
            },
            {
                title: "Etkinliği uygun şekilde uyarlayın",
                description:
                    "Etkinlikleri öğrencilerin bireysel farklılıklarına göre uyarlayın. Mizaç bilgisini tek belirleyici olarak kullanmayın.",
            },
            {
                title: "Uygulamayı değerlendirin",
                description:
                    "Etkinlik sonrasında öğrencilerin katılımını, gözlemlerinizi ve sonraki çalışmalar için ihtiyaçları değerlendirin.",
            },
        ],
    },
    {
        id: "veli-ogrenci",
        category: "kullanicilar",
        title: "Veli ve Öğrenci Kullanım Rehberi",
        description:
            "Öğrencilerin ve velilerin değerlendirme sonuçlarından nasıl yararlanabileceğini öğrenin.",
        readingTime: "5 dk",
        steps: [
            {
                title: "Kendi rolünüzü tanıyın",
                description:
                    "Öğrenci ve veli kullanımında erişilebilen bilgiler, ilgili hesap yetkilerine ve kurumun kullanım düzenine bağlı olabilir.",
            },
            {
                title: "Değerlendirme sonuçlarını dikkatle inceleyin",
                description:
                    "Raporları öğrenciyi etiketlemek için değil, ihtiyaçlarını ve farklılıklarını anlamak için değerlendirin.",
            },
            {
                title: "Güçlü yönleri konuşun",
                description:
                    "Rapor açıklamalarından hareketle öğrencinin güçlü yanlarını, ilgi alanlarını ve kendisini rahat hissettiği ortamları birlikte değerlendirin.",
            },
            {
                title: "Gerekli durumlarda uzman desteği alın",
                description:
                    "Eğitsel veya psikolojik bir sorun hakkında karar verirken yalnızca mizaç değerlendirmesine dayanmayın. Gerektiğinde ilgili uzmanlara başvurun.",
            },
        ],
    },
    {
        id: "ogretmen-kullanimi",
        category: "kullanicilar",
        title: "Öğretmenler İçin Kullanım Rehberi",
        description:
            "Öğrencilerin bireysel farklılıklarını sınıf ortamında dikkate almaya yönelik öneriler.",
        readingTime: "5 dk",
        steps: [
            {
                title: "Öğrenciyi farklı yönleriyle tanıyın",
                description:
                    "Mizaç raporlarını öğretmen gözlemleri, öğrenciyle iletişim ve diğer eğitimsel bilgilerle birlikte değerlendirin.",
            },
            {
                title: "Öğrenme ortamını çeşitlendirin",
                description:
                    "Öğrencilerin farklı ihtiyaçlarını gözeten, esnek ve kapsayıcı öğrenme deneyimleri oluşturmaya çalışın.",
            },
            {
                title: "İletişim dilinizi gözden geçirin",
                description:
                    "Öğrencilerin geri bildirimlere ve yönlendirmelere farklı tepkiler verebileceğini dikkate alın.",
            },
            {
                title: "Rehberlik birimiyle iş birliği yapın",
                description:
                    "Öğrencinin desteğe ihtiyaç duyduğu durumlarda ilgili rehberlik uzmanlarıyla uygun bilgi paylaşımı ve iş birliği yürütün.",
            },
        ],
    },
];
