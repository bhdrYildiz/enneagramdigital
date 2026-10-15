export const journeySteps = [
    {
        number: "01",
        label: "DEĞERLENDİR",
        title: "İnsanı tanımaya doğru sorularla başlayın.",
        description:
            "Her insanın kendine özgü ihtiyaçları, motivasyonları ve davranış eğilimleri vardır. EnneagramDigital'de ilk adım, kişinin yaş grubuna ve kullanım alanına uygun mizaç değerlendirmesini tamamlamasıdır. Dijital ortamda sunulan sorular, kişinin kendisiyle ilgili gözlemlerini ve tercihlerini değerlendirmesine yardımcı olur. Bu aşama, kişiyi kesin bir kalıba yerleştirmek için değil, kendisini daha yakından tanımasına katkı sağlayacak bir başlangıç oluşturmak için tasarlanmıştır.",
        highlights: [
            "Dijital mizaç değerlendirmesi",
            "Yaş grubuna uygun içerikler",
            "Bireysel farklılıklara odaklanan sorular",
        ],
        image: "/images/how-it-works/ekran1.png",
        imageAlt: "EnneagramDigital değerlendirme ekranı",
    },
    {
        number: "02",
        label: "ANLA",
        title: "Sonuçları bir sayıdan çok daha fazlası olarak görün.",
        description:
            "Değerlendirme tamamlandığında elde edilen sonuçların anlaşılır biçimde sunulması önemlidir. Mizaç raporları; güçlü yönler, motivasyon kaynakları, davranış eğilimleri ve gelişim alanları üzerine açıklamalar içerir. Kullanıcılar bu bilgileri kendi deneyimleriyle karşılaştırabilir. Eğitimciler ve danışmanlar ise raporları kendi gözlemlerinin yerine koymadan, onları destekleyen ek bir farkındalık kaynağı olarak değerlendirebilir.",
        highlights: [
            "Açıklayıcı mizaç raporları",
            "Güçlü yönlere ilişkin farkındalık",
            "Motivasyon ve ihtiyaçların değerlendirilmesi",
        ],
        image: "/images/how-it-works/ekran2.png",
        imageAlt: "EnneagramDigital raporlama ekranı",
    },
    {
        number: "03",
        label: "PLANLA",
        title: "Edindiğiniz farkındalığı anlamlı gelişim adımlarına dönüştürün.",
        description:
            "Kişiyi tanımak önemli bir başlangıçtır; ancak asıl değer, edinilen bilgilerin günlük hayata ve gelişim çalışmalarına yansıtılmasıyla ortaya çıkar. Okullar rehberlik görüşmeleri, öğrenci hedefleri ve etkinlikler planlayabilir. Kurumlar iletişim, liderlik ve çalışan farkındalığı üzerine çalışmalar geliştirebilir. Bireysel kullanıcılar ise kendi davranış alışkanlıklarını gözlemlemek ve kişisel gelişim hedefleri belirlemek için bu bilgilerden yararlanabilir.",
        highlights: [
            "İhtiyaçlara uygun gelişim hedefleri",
            "Rehberlik ve farkındalık çalışmaları",
            "Kullanım alanına göre planlama",
        ],
        image: "/images/how-it-works/ekran3.png",
        imageAlt: "EnneagramDigital gelişim ve planlama ekranı",
    },
    {
        number: "04",
        label: "TAKİP ET",
        title: "Gelişimi tek bir değerlendirmeyle sınırlı bırakmayın.",
        description:
            "İnsanların gelişimi zaman içinde gerçekleşir. Bu nedenle belirlenen hedeflerin, yapılan görüşmelerin ve edinilen deneyimlerin yeniden değerlendirilmesi önemlidir. Özellikle okul kullanımında öğrenci görüşmelerinin, notların ve gelişim çalışmalarının düzenli takip edilmesi, rehberlik sürecinin devamlılığını destekleyebilir. Bireysel ve kurumsal kullanımda da farkındalığın günlük yaşama nasıl yansıdığı üzerine düşünmek, gelişim yolculuğunu daha anlamlı hâle getirebilir.",
        highlights: [
            "Görüşme ve çalışma kayıtları",
            "Gelişim hedeflerinin değerlendirilmesi",
            "Sürekliliği destekleyen takip yaklaşımı",
        ],
        image: "/images/how-it-works/ekran5.png",
        imageAlt: "EnneagramDigital takip süreci ekranı",
    },
] as const;

export const journeyAudiences = [
    {
        number: "01",
        title: "Okullar",
        description:
            "Öğrencilerin bireysel özelliklerini tanımak, rehberlik görüşmelerini planlamak ve gelişim süreçlerini düzenli takip etmek isteyen eğitim kurumları için. Öğrenci, öğretmen, rehber öğretmen ve yöneticilerin farklı sorumlulukları dikkate alınarak tasarlanan kullanım yaklaşımını keşfedin.",
        href: "/okullar",
        action: "Okul çözümlerini incele",
    },
    {
        number: "02",
        title: "İş Dünyası",
        description:
            "Çalışanların kendilerini tanımalarını, ekip üyelerinin farklı iletişim alışkanlıklarını anlamalarını ve yöneticilerin insan odaklı gelişim çalışmalarını desteklemek isteyen kurumlar için. Mizaç farkındalığının iş hayatında nasıl değerlendirilebileceğini öğrenin.",
        href: "/is-dunyasi",
        action: "Kurumsal çözümleri incele",
    },
    {
        number: "03",
        title: "Bireysel",
        description:
            "Kendi davranış eğilimlerini, motivasyonlarını ve ilişkilerdeki beklentilerini daha yakından anlamak isteyen kişiler için. Kendini tanıma yolculuğunuza mizaç değerlendirmeleri ve açıklayıcı içeriklerle farklı bir bakış açısı kazandırın.",
        href: "/bireysel",
        action: "Bireysel çözümleri incele",
    },
] as const;

export const journeyFaqs = [
    {
        question: "EnneagramDigital'i kullanmaya nasıl başlayabilirim?",
        answer: "Öncelikle platformu hangi amaçla kullanacağınızı belirlemeniz gerekir. Okullar, iş dünyası ve bireysel kullanıcılar için farklı kullanım senaryoları bulunur. İhtiyacınıza uygun çözümü inceleyebilir, kurumsal kullanım için demo talep ederek süreç hakkında ayrıntılı bilgi alabilirsiniz.",
    },
    {
        question: "Mizaç değerlendirmesi ne işe yarar?",
        answer: "Mizaç değerlendirmesi, kişinin davranış eğilimleri, motivasyonları ve ihtiyaçları üzerine düşünmesine yardımcı olan bir farkındalık aracıdır. Sonuçlar kişinin kendisini daha iyi tanımasına katkı sağlayabilir. Ancak tek başına psikolojik tanı, yetenek ölçümü veya kesin bir kişilik hükmü olarak değerlendirilmemelidir.",
    },
    {
        question: "Değerlendirme tamamlandığında ne olur?",
        answer: "Değerlendirme sonuçları, mizaç eğilimlerini açıklayan raporlarla ele alınır. Bu raporlar güçlü yönler, motivasyonlar ve gelişim alanları üzerine bilgiler sunar. Kullanıcıların sonuçları kendi deneyimleriyle karşılaştırması ve açıklamaları bir farkındalık kaynağı olarak değerlendirmesi önerilir.",
    },
    {
        question: "Okullar öğrenci gelişimini nasıl takip edebilir?",
        answer: "Okul kullanımına yönelik yapıda öğrenci bilgileri, rehberlik görüşmeleri, notlar ve gelişim hedefleri bir arada ele alınabilir. Bu sayede rehber öğretmenler planlanan ve tamamlanan çalışmaların düzenli kaydını tutmaya yönelik bir iş akışından yararlanabilir. Erişimler ilgili kullanıcıların yetkilerine göre düzenlenmelidir.",
    },
    {
        question: "EnneagramDigital yalnızca okullar için mi?",
        answer: "Hayır. EnneagramDigital; okullar, iş dünyası ve bireysel kullanıcılar için farklı çözümler sunmayı amaçlar. Her kullanım alanında ortak yaklaşım insanın bireysel farklılıklarını anlamak ve bu farkındalığı gelişim çalışmalarına taşımaktır.",
    },
    {
        question: "Platformdaki bilgiler psikolojik tanı yerine geçer mi?",
        answer: "Hayır. Enneagram ve mizaç değerlendirmeleri klinik tanı veya psikolojik tedavi aracı değildir. Elde edilen sonuçlar kişinin kendisini anlamasını destekleyen bilgiler olarak kullanılmalı; önemli eğitimsel, mesleki veya psikolojik kararlar yalnızca bu sonuçlara dayandırılmamalıdır.",
    },
] as const;
